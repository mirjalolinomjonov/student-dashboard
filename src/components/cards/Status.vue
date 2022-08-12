<template>
  <div class="card">
    <IconBase :name="icon" color="#fff" />
    <div class="card__info">
      <p class="counter subtitle">{{ count }}</p>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/common/IconBase.vue";
export default {
  name: "Status",
  components: { IconBase },
  props: {
    count: Number,
    subtitle: String,
    icon: String,
  },
};
</script>


<style lang="scss">
.card {
  padding: 20px;
  background-color: #7aa0cd;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__info {
    text-align: center;
    .counter {
      margin-bottom: 20px;
      font-size: 25px;
      font-weight: bold;
    }
  }
}
</style>
