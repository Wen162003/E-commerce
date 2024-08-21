<template>
  <div class="ui secondary menu">
    <div class="ui container">
      <div class="left menu">
        <router-link class="item" to="/">
          <img class="iu small image" src="../assets/logo.png" alt="Ecommerce" />
          <!-- No me sirvio pero se supone que deberia mostrar las dos categorias arriba en el nav -->
          <template v-for="category in Categories" :key="category.id">
            <router-link class="item " :to="'/'+ category.id">
              {{ category.attributes.title }}
            </router-link>
          </template> 
        </router-link>
      </div>
      <div class="rigth menu">
        <router-link class="item" to="login" v-if="!token">
          Iniciar sesión
        </router-link>
        <!-- Esos iconos se van a mostrar cuando el usuario tenga token -->
        <template v-if="token">
          <!-- esto lo llevaba a pantallas -->
          <router-link class="item" to="/orders">pedidos</router-link>
          <span class="ui item cart">
            <i class="shopping cart icon"></i>
          </span>
          <span class="ui item logout" @click="logout">
            <i class="sign-out icon"></i>
          </span>
        </template>
      </div>
    </div>
  </div>
</template>


<script>
import { getTokenApi, deleteTokenApi } from "../api/token";
import { ref, onMounted } from "vue"
import CategoryService from "../api/CategoryService";
export default {
  name: "Menu",
  setup() {
    let Categories = ref(null)
    const token = getTokenApi();

    // instanciando el servicio
    const service = new CategoryService();

    // llegarian los datos de las categorias
    onMounted(() => {
      getcategories()
    });

    // Cerrar sesión
    const logout = () => {
      deleteTokenApi();
      location.replace("/")

    }

    const getcategories =async() => {
      try {
        const response = await service.getCategories();
        Categories.value = response.data;
      } catch (error) {
        console.error(error);
        
      }
    }

    return {
      token,
      logout,
      Categories,
    };
  },
};
</script>

<style lang="scss" scoped>
.ui.menu.secondary {
  background-color: #16202b;

  .item {
    color: #fff;

    &:hover {
      color: #1fa1f1;
    }
  }
  .menu{
    display: flex;
  }

  .menu.left {
    width: 50%;
    display: flex;
    ui.image {
      width: 40%;
    }
  }

  .menu.rigth {
    width: 50%;
    justify-content: flex-end;

    .logout,
    .cart {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>