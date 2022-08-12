<template>
  <main class="error">
    <h1 class="error__404">
      <span v-for="(item, index) in letters('404')" :key="index">
        {{ item }}
      </span>
    </h1>
    <p class="error__not-found">
      <span v-for="(letter, index) in letters('Page Not Found')" :key="index">
        {{ letter }}
      </span>
    </p>

    <button class="error__btn" @click="backToHome">Back to home</button>
  </main>
</template>

<script>
export default {
  methods: {
    letters(value) {
      return value.split(" ").join("").split("");
    },
    backToHome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  background-color: #1f1c32;
  padding: 100px 0;
  min-height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;

  &__404 span {
    font-size: 22vw;
    font-weight: 800;
    line-height: 80%;
  }

  &__not-found span {
    font-size: 10vw;
    font-weight: 700;
  }

  &__404 span,
  &__not-found span {
    color: #fff;
    text-shadow: -0.08em 0.03em 0.12em rgba(0, 0, 0, 0.9);
    &:not(:first-child) {
      margin-left: -0.23em;
    }
  }

  // error__btn
  &__btn {
    margin-top: 1rem;
    outline: none;
    border: none;
    display: inline-block;
    background-color: transparent;
    cursor: pointer;
    color: #ccc;
    font-size: 1.25rem;
    transition: all 0.25s ease-in-out;
    &:hover {
      text-shadow: 0 0 12px #fff;
    }
  }
}
</style>