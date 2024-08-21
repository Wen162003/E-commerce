<template>
  <BasicLayout>
    <div class="login">
      <h1>Iniciar sesion</h1>
      <!-- Para validar prevent para que no se recargue la pagina -->
      <form class="ui form" @submit.prevent="login">
        <div class="field">
          <input type="text" placeholder="Nombre de usuario" v-model="formData.identifier"
            :class="{ error: formError.identifier }" />
        </div>
        <div class="field">
          <input type="password" placeholder="contraseña" v-model="formData.password"
            :class="{ error: formError.password }" />
        </div>
        <button type="submit" class="ui button fluid primary" :class="{ loading }">
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
import {useRouter} from "vue-router"
import * as yup from "yup";
import BasicLayout from "../layouts/BasicLayout.vue";
import UserService from "@/api/UserService";
import { useUserStore } from "@/store/User";
import { useAuthStore } from "@/store/Auth";


export default {
  name: "Login",
  components: {
    BasicLayout,
  },
  setup() {
    let formData = ref({
      identifier: '',
      password: ''
    });
    let formError = ref({});
    let loading = ref(false);
    
    const router = useRouter();
    const service = new UserService();
    const userStore= useUserStore();
    const authStore= useAuthStore();
    const token = authStore.token;

    onMounted(() => {
      if (token !=='') return router.push("/")
    });

    // validando datos
    const schemaForm = yup.object().shape({
      identifier: yup.string().required(true),
      password: yup.string().required(true),
    });

    const login = async () => {
      formError.value = {};
      try {
        await schemaForm.validate(formData.value, { abortEarly: false });
        try {
          // ejecutamos la peticion
          let data = {
            identifier: formData.value.identifier,
            password: formData.value.password
          }
          const response = await service.login(data);
          console.log(response);
          // setTokenApi(response?.jtw);
          authStore.setToken(response.jwt)
          userStore.setUser(response.user)
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

  >h2 {
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