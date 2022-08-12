import { createStore } from "vuex";

export default createStore({
  state: {
    users: [
      {
        fullName: "Mirjalol",
        phone: "(+998) 99 936 30 98",
        position: 4,
        gender: 1,
      },
      {
        fullName: "Maryam",
        phone: "(+998) 11 000 20 71",
        position: 1,
        gender: 0,
      },
      {
        fullName: "Oisha",
        phone: "(+998) 94 145 50 50",
        position: 3,
        gender: 0,
      },
      {
        fullName: "Ali",
        phone: "(+998) 55 485 78 71",
        position: 4,
        gender: 1,
      },
      {
        fullName: "Fotima",
        phone: "(+998) 44 135 77 71",
        position: 3,
        gender: 0,
      },
      {
        fullName: "Umar",
        phone: "(+998) 33 798 14 01",
        position: 2,
        gender: 1,
      },
      {
        fullName: "Abubakir",
        phone: "(+998) 44 888 00 00",
        position: 3,
        gender: 1,
      },
    ],
  },

  getters: {
    getMale(state) {
      return state.users.filter((user) => {
        return user.gender === 1;
      });
    },
    getFemale(state) {
      return state.users.filter((user) => {
        return user.gender === 0;
      });
    },
    getFirstCourses(state) {
      return state.users.filter((user) => {
        return user.position === 1;
      });
    },
    getSecondCourses(state) {
      return state.users.filter((user) => {
        return user.position === 2;
      });
    },
    getThirdCourses(state) {
      return state.users.filter((user) => {
        return user.position === 3;
      });
    },
    getFourthCourses(state) {
      return state.users.filter((user) => {
        return user.position === 4;
      });
    },
  },

  mutations: {
    PUSH_USER(state, user) {
      state.users = [...state.users, user];
    },

    REMOVE_ONE_USER(state, index) {
      state.users.splice(index, 1);
    },

    EDIT_ONE_USER(state, data) {
      state.users[data.index] = data.user;
    },
  },

  actions: {},
  modules: {},
});
