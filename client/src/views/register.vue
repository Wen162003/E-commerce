<template>
  <BasicLayout>
    <div class="register">
      <h2>Registro de usuario</h2>
      <form class="ui form" @submit.prevent="register">
        <div class="field">
          <input
            type="text"
            placeholder="Nombre de usuario"
            v-model="formData.username"
            :class="{ error: formError.username }"
          />
        </div>
        <div class="field">
          <input
            type="email"
            placeholder="Correo electrónico"
            v-model="formData.email"
            :class="{ error: formError.email }"
          />
        </div>
        <!-- v-model= vinculación bidireccional -->
        <div class="field">
          <input
            type="password"
            placeholder="Contraseña"
            v-model="formData.password"
            :class="{ error: formError.password }"
          />
        </div>
        <button type="submit" class="ui button fluid primary">
          Crear usuario
        </button>
      </form>
      <router-link to="/login"> iniciar sesión </router-link>
    </div>
  </BasicLayout>
</template>

<script>
import { useRouter } from "vue-router";
import BasicLayout from "@/layouts/BasicLayout.vue";
// onMonted se ejecuta cuando el elemento es mutado x 1 vez
import { ref, onMounted } from "vue";
import * as yup from "yup";
import { registerApi } from "../api/user";
import { getTokenApi } from "../api/token";

export default {
  name: "Register",
  components: {
    BasicLayout,
  },
  setup() {
    // objeto reactivo
    let formData = ref({});
    // estado para guardar los errores
    let formError = ref({});
    const router = useRouter();
    const token = getTokenApi();
    console.log(token);

    onMounted(() => {
      if (token) router.push("/");
    });

    // Validaciones del form
    const schemaForm = yup.object().shape({
      username: yup.string().required(true),
      email: yup.string().email(true).required(true),
      password: yup.string().required(true),
    });

    const register = async () => {
      formError.value = {};
      try {
        await schemaForm.validate(formData.value, { abortEarly: false });
        try {
          const response = await registerApi(formData.value);
          router.push("/login");
          console.log(response);
        } catch (error) {}
      } catch (error) {
        error.inner.forEach((err) => {
          formError.value[err.path] = err.message;
        });
      }
    };
    return {
      formData,
      formError,
      register,
    };
  },
};
</script>

<style lang="scss" scoped>
.register {
  text-align: center;
  > h2 {
    margin: 50px 0 30px 0;
  }

  .ui.form {
    max-width: 300px !important;
    margin: 0 auto;
    margin-bottom: 30px;
    input.error {
      border-color: #faa;
      background-color: #ffeded;
    }
  }
}
</style>