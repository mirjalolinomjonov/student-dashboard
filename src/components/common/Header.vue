<template>
  <header class="header">
    <div class="container">
      <!-- navbar -->
      <nav class="navbar">
        <span class="logo">Dashboard</span>

        <ul class="navbar-list" :class="{ 'is-active': isActiveNavbar }">
          <button class="navbar-list__close" @click="isActiveNavbar = false">
            x
          </button>
          <li
            class="navbar-list__item"
            v-for="(item, index) in navbar"
            :key="index"
            @click="isActiveNavbar = false"
          >
            <router-link class="navbar-list__item-link" :to="`/${item.link}`">
              {{ item.name }}
            </router-link>
          </li>
        </ul>

        <div class="burger-wrapper">
          <button class="burger-wrapper__btn" @click="isActiveNavbar = true">
            <div
              class="burger-wrapper__btn-item"
              v-for="item in 3"
              :key="item"
            ></div>
          </button>
        </div>
      </nav>
      <!-- burger btn -->
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isActiveNavbar: false,
      navbar: [
        {
          link: "",
          name: "Home",
        },
        {
          link: "table-of-students",
          name: "Students",
        },
        {
          link: "about",
          name: "About",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.header {
  overflow: hidden;
  background-color: #6290C3;
  margin-bottom: 25px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 25;

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      font-size: 30px;
      color: #fff;
    }
    // navbar-list
    &-list {
      display: flex;
      align-items: center;
      list-style: none;
      transition: all 0.3s linear;
      // navbar-list__close
      &__close {
        display: none;
        font-size: 36px;
        font-weight: bold;
        color: #a5a58d;
        border: none;
        padding: 1rem;
        border-radius: 50%;
        background-color: transparent;
        cursor: pointer;
        &:hover {
          color: #fff;
          text-shadow: 0 0 15px #fff;
        }
      }
      // navbar-list__item
      &__item {
        // navbar-list__item-link
        &-link {
          display: inline-block;
          font-size: 20px;
          color: #fff;
          padding: 18px 48px;

          &:hover {
            color: #fff;
            background-color: #97B5D8;
          }
          &.router-link-exact-active {
            color: #fff;
            background-color: #97B5D8;
          }
        }
      }
    }

    // burger-wrapper
    .burger-wrapper {
      display: none;
      // burger-wrapper__btn
      &__btn {
        border: none;
        outline: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding: 0.5rem;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
        cursor: pointer;

        // burger-wrapper__btn-item
        &-item {
          width: 100%;
          height: 3px;
          border-radius: 6px;
          background-color: #fff;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .navbar {
    // navbar-list
    &-list {
      position: fixed;
      top: 0;
      left: -100%;
      height: 100vh;
      width: 100%;
      padding: 2rem;
      background-color: #3d3d3d;
      z-index: 200;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      &.is-active {
        left: 0%;
      }
      // navbar-list__close
      &__close {
        display: block !important;
        position: absolute;
        top: 3rem;
        right: 3rem;
      }

      &__item {
        &-link {
          &:hover {
            background-color: transparent !important;
            text-shadow: 0 0 15px #fff;
          }
          &.router-link-exact-active {
            background-color: transparent !important;
            text-shadow: 0 0 15px #fff;
          }
        }
      }
    }

    .burger-wrapper {
      display: block !important;
    }
  }
}
</style>
