<template>
  <div class="container">
    <div class="table-wrapper">
      <div class="table-wrapper__header">
        <h1 class="title title-md">All Students</h1>
        <form class="table-wrapper__filter">
          <input
            v-model="filterByName"
            type="text"
            placeholder="Search by student's name"
          />
          <select
            v-model="filterByPosition"
            :style="{ color: filterByPosition == 0 ? '#666' : '' }"
          >
            <option value="" disabled>Select position</option>
            <option :value="item" v-for="item in 4" :key="item">
              {{ `${item} kurs` }}
            </option>
          </select>
        </form>
      </div>

      <!-- table -->
      <Table
        :users="searchFilterByName"
        v-if="searchFilterByName && searchFilterByName.length"
      />
      <SearchFailer v-else />
    </div>
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
import SearchFailer from "@/components/SearchFailer.vue";
import { mapState } from "vuex";

export default {
  name: "Students",
  components: { Table, SearchFailer },
  data() {
    return {
      filterByName: "",
      filterByPosition: "",
    };
  },
  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
    searchFilterByName() {
      return this.users.filter(
        (user) =>
          user.fullName
            .toLowerCase()
            .includes(this.filterByName.toLowerCase()) &&
          user.position.toString().includes(this.filterByPosition)
      );
    },
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
};
</script>

<style lang="scss">
.table-wrapper {
  margin-top: 110px;
  min-height: 100vh;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__filter {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    input,
    select {
      outline: none;
      border: 1px solid #ccc;
      background-color: #fff;
      padding: 12px 16px;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 400;
    }
  }
}

@media screen and (max-width: 640px) {
  .table-wrapper {
    margin-top: 90px;
    &__header {
      flex-direction: column;
      gap: 1rem;
    }
  }
  .title-md {
    font-size: 35px;
  }
}

@media screen and (max-width: 509px) {
  .table-wrapper__filter {
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
  }
}
</style>
