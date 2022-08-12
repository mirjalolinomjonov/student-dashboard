<template>
  <div class="about">
    <div class="container">
      <h1 class="about__title">
        HR Management System. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quas error animi suscipit sint cum temporibus vero tempora
        molestias, delectus distinctio inventore officiis cupiditate voluptas
        possimus maiores sunt non, fugit iusto nisi quisquam quibusdam. Alias
        deserunt dolorem officiis omnis ullam molestias maxime, quae corrupti
        autem, ad harum, eveniet unde reiciendis temporibus! Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Et eum voluptatem quis. Dolorem,
        eum quam?
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
};
</script>
<style lang="scss">
.about {
  margin-top: 115px;
  min-height: 100vh;
  &__title {
    font-size: 40px;
    color: #89AAD2;
    font-weight: 500;
    text-align: justify;
  }
}

@media screen and (max-width: 1024px) {
  .title {
    font-size: 2rem;
  }
}
@media screen and (max-width: 640px) {
  .about {
    margin-top: 100px;
    .title {
      font-size: 1.5rem;
    }
  }
}
</style>
