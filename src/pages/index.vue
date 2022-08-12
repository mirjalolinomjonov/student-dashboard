<template>
  <div class="container">
    <div class="home">
      <h1 class="title">Analytics</h1>
      
      <div class="cards">
        <Status
          :count="item.count"
          :icon="item.icon"
          :subtitle="item.subtitle"
          v-for="(item, index) in counter"
          :key="index"
        />
      </div>

      <router-link to="/table-of-students" class="btn">Students</router-link>
      <router-link to="/create-student" class="btn"
        >Add the students</router-link
      >
    </div>
  </div>
</template>

<script>
import Status from "@/components/cards/Status.vue";

export default {
  name: "Home",
  components: { Status },

  data() {
    return {
      counter: [
        {
          count: 0,
          subtitle: "Total students",
          icon: "total_users",
        },
        {
          count: 0,
          subtitle: "Number of male",
          icon: "male_user",
        },
        {
          count: 0,
          subtitle: "Number of female",
          icon: "female_user",
        },
        {
          count: 0,
          subtitle: "1st courses",
          icon: "charts",
        },
        {
          count: 0,
          subtitle: "2nd courses",
          icon: "charts",
        },
        {
          count: 0,
          subtitle: "3rd courses",
          icon: "charts",
        },
        {
          count: 0,
          subtitle: "4th courses",
          icon: "charts",
        },
      ],
    };
  },

  created() {
    this.counter[0].count = this.$store.state.users.length;
    this.counter[1].count = this.$store.getters.getMale.length;
    this.counter[2].count = this.$store.getters.getFemale.length;
    this.counter[3].count = this.$store.getters.getFirstCourses.length;
    this.counter[4].count = this.$store.getters.getSecondCourses.length;
    this.counter[5].count = this.$store.getters.getThirdCourses.length;
    this.counter[6].count = this.$store.getters.getFourthCourses.length;
  },

  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
};
</script>

<style lang="scss">
.home {
  margin-top: 70px;
  padding: 2rem;
  min-height: 100vh;
}
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  margin: 25px 0;
}

.btn {
  display: inline-block;
  padding: 20px;
  font-size: 16px;
  outline: none;
  border: none;
  background-color: #7AA0CD;
  color: #fff;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.4s linear;
  position: relative;

  &:hover {
    background: none;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #3E6BA3;
    z-index: -1;
    transition: transform 0.5s;
    transform-origin: 0 0;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
    transform: scaleX(0);
  }
}

@media screen and (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 576px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
