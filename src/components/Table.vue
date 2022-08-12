<template>
  <table class="table">
    <thead>
      <tr>
        <th class="table__th">#</th>
        <th class="table__th">Full Name</th>
        <th class="table__th sm-hidden">Phone number</th>
        <th class="table__th sm-hidden">Position</th>
        <th class="table__th sm-hidden">Gender</th>
        <th class="table__th">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table__tr" v-for="(user, index) in users" :key="index">
        <td class="table__td">{{ index + 1 }}</td>
        <td class="table__td">{{ user.fullName }}</td>
        <td class="table__td sm-hidden">{{ user.phone }}</td>
        <td class="table__td sm-hidden">{{ user.position }}</td>
        <td class="table__td sm-hidden">
          {{ user.gender === 0 ? "Female" : "Male" }}
        </td>
        <td class="table__td">
          <div class="table__row-icon">
            <span @click="removeOneUser(index)">
              <IconBase :name="removeIcon" color="red" />
            </span>
            <span @click="editOneUser(index)">
              <IconBase :name="editIcon" color="steelblue" />
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { useToast } from "vue-toastification";
import IconBase from "./common/IconBase.vue";

export default {
  components: { IconBase },
  props: {
    users: Array,
  },
  data() {
    return {
      toast: useToast(),
      removeIcon: "delete",
      editIcon: "edit",
    };
  },
  methods: {
    removeOneUser(index) {
      this.toast.success("Deleted successfully");
      this.$store.commit("REMOVE_ONE_USER", index);
    },
    editOneUser(index) {
      this.$router.push(`/create-student/${index}`);
      this.$store.commit("EDIT_ONE_USER", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  border-collapse: separate;
  margin: 25px 0;
  border-spacing: 0 15px;

  // table_th
  &__th {
    padding: 16px 12px;
    font-size: 16px;
    color: #212529;
    text-align: left;
    border-top: 1px solid #ddd;
    border-bottom: 2px solid #797979;

    &:last-child {
      text-align: end;
    }
  }

  // table_tr
  &__tr {
    transition: all 0.25s ease-in-out;

    &:nth-child(odd) {
      background-color: #38613123;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 3px 12px 1px #eee;
      td {
        // background-color: #a4ac86f1;
      }
    }
  }

  // table_td
  &__td {
    font-size: 16px;
    color: #212529;
    padding: 12px;
    text-transform: capitalize;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    transition: all 0.25s ease-in-out;

    &:first-child {
      border-radius: 8px 0 0 8px;
      border-left: 1px solid #ddd;
    }
    &:last-child {
      border-right: 1px solid #ddd;
      border-radius: 0 8px 8px 0;
    }
  }

  // table__row-icon
  &__row-icon {
    display: flex;
    gap: 1rem;
    justify-content: end;
    span {
      cursor: pointer;
      display: inline-block;
    }
  }
}

@media screen and (max-width: 640px) {
  .table {
    .sm-hidden {
      display: none;
    }

    &__th {
      padding: 14px 10px;
      font-size: 14px;
    }

    &__td {
      font-size: 14px;
      padding: 5px 10px;
    }
  }
}
</style>