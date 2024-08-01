<template>
  <BasicLayout>
    <div class="login">
      <h1>Iniciar sesion</h1>
      <!-- Para validar prevent para que no se recargue la pagina -->
      <form class="ui form" @submit.prevent="login">
        <div class="field">
          <input
            type="text"
            placeholder="Nombre de usuario"
            v-model="formData.username"
            :class="{error:formError.username}"
          />
        </div>
        <div class="field">
          <input
            type="password"
            placeholder="contraseña"
            v-model="formData.password"
            :class="{error:formError.password}"
          />
        </div>
        <button
          type="submit"
          class="ui button fluid primary"
          :class="{ loading }"
        >
          iniciar
        </button>
      </form>
      <router-link class="item" to="/register"> Registrarme </router-link>
    </div>
  </BasicLayout>
</template>

<script>
// Importar el layout
import { ref, onMounted } from "vue";
import {useRoute} from "vue-router"
import * as yup from "yup";
import BasicLayout from "../layouts/BasicLayout.vue";
import { loginApi } from "@/api/user";
import { setTokenApi, getTokenApi} from "../api/token";


export default {
  name: "Login",
  components: {
    BasicLayout,
  },
  setup() {
    let formData = ref({});
    let formError = ref({});
    let loading = ref(false);
    const router = useRoute();
    const token = getTokenApi();

    onMounted(() => {
      if (token) return router.push("/")
    });

    // validando datos
    const schemaForm = yup.object().shape({
      username: yup.string().required(true),
      password: yup.string().required(true),
    });

    const login = async () => {
      formError.value= {};
      try {
        await schemaForm.validate(formData.value, { abortEarly: false });
        try {
          // ejecutamos la peticion
          const response = await loginApi(formData.value);
          if (!response?.jtw) throw "El usuario o contraseña no son validos";
          setTokenApi(response?.jtw);
          router.push("/")
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        error.inner.forEach((err) => {
          formError.value[err.path] = err.message;
        });
      }
    };
    return {
      formError,
      formData,
      loading,
      login,
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
  text-align: center;
  > h2 {
    margin: 50px 0 30px 0;
  }
  .ui.form {
    max-width: 300px !important;
    margin: 0 auto;
    margin-bottom: 10px;

    input.error {
      border-color: #faa;
      background-color: #ffeded;
    }
  }
}
</style>