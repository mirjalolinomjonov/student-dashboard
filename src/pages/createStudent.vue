<template>
  <section class="container section">
    <form class="form" @submit.prevent="submit">
      <label
        for=""
        class="form__label"
        v-for="(item, index) in formOptions"
        :key="index"
      >
        <span>{{ item.label }}</span>

        <input
          ref="input"
          v-if="item.type === 'text'"
          v-model="user[item.vm]"
          :value="user[item.vm]"
          v-maska="item.vm === 'phone' ? '(+998) ## ### ## ##' : ''"
          class="form__input"
          :class="{ wrong: !isValidation }"
          @input="inputValidation($event, item.vm, index)"
          :type="item.type"
          placeholder="Enter here..."
        />

        <select
          ref="input"
          v-else-if="item.type === 'select'"
          v-model="user[item.vm]"
          :value="user[item.vm]"
          class="form__input"
          :class="{ wrong: !isValidation }"
          @change="inputValidation($event, item.vm, index)"
        >
          <option value="" disabled>Select position</option>
          <option
            :value="item.value"
            v-for="(item, index) in item.options"
            :key="index"
          >
            {{ item.level }}
          </option>
        </select>

        <div
          v-else
          ref="input"
          class="form__label"
          :class="{ wrong: !isValidation }"
        >
          <label
            :for="genIndex"
            v-for="(gen, genIndex) in item.options"
            :key="genIndex"
          >
            <input
              v-model="user[item.vm]"
              :type="item.type"
              :id="genIndex"
              name="gender"
              :value="gen.value"
              @input="inputValidation($event, item.vm, index)"
            />
            {{ gen.gender }}
          </label>
        </div>
      </label>
      <button class="form__btn">Add Student</button>
    </form>
  </section>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useToast } from "vue-toastification";

export default {
  name: "Form",
  setup() {
    return { v$: useVuelidate() };
  },

  data: () => ({
    toast: useToast(),
    isValidation: true,
    user: {
      fullName: "",
      phone: "",
      position: "",
      gender: undefined,
    },

    formOptions: [
      {
        vm: "fullName",
        label: "First name",
        type: "text",
      },
      {
        vm: "phone",
        label: "Phone number",
        type: "text",
      },
      {
        vm: "position",
        label: "Student's position",
        type: "select",
        options: [
          {
            value: 1,
            level: "1 kurs",
          },
          {
            value: 2,
            level: "2 kurs",
          },
          {
            value: 3,
            level: "3 kurs",
          },
          {
            value: 4,
            level: "4 kurs",
          },
        ],
      },
      {
        vm: "gender",
        label: "Student's gender",
        type: "radio",
        options: [
          {
            value: 0,
            gender: "Female",
          },
          {
            value: 1,
            gender: "Male",
          },
        ],
      },
    ],
  }),

  validations() {
    return {
      user: {
        fullName: { required },
        phone: { required },
        position: { required },
        gender: { required },
      },
    };
  },

  created() {
    try {
      if (this.$route.params.slug < this.$store.state.users.length) {
        this.user = this.$store.state.users[this.$route.params.slug];
      }
    } catch (error) {
      console.log("error", error);
    }
  },

  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  methods: {
    async submit() {
      this.isValidation = await this.v$.$validate();

      if (!this.isValidation) {
        {
          {
            this.showToastError("Fill in the blanks!");
          }
        }
        return false;
      } else {
        if (!this.$route.params.slug) {
          this.$store.commit("PUSH_USER", this.user);
        } else {
          this.$store.commit("EDIT_ONE_USER", {
            user: this.user,
            index: this.$route.params.slug,
          });
        }
      }
      {
        {
          this.showToastSent("Added successfully");
        }
      }
      this.$router.push({ name: "table" });
    },

    inputValidation(evt, vm, index) {
      this.isValidation = true;
      this.user[vm] = evt.target.value;
      this.v$.user[vm].$touch();

      if (this.user[vm]) {
        this.$refs.input[index].classList.remove("wrong");
      } else {
        this.$refs.input[index].classList.add("wrong");
      }
    },

    showToastSent(msg) {
      this.toast.success(msg);
    },
    showToastError(msg) {
      this.toast.error(msg);
    },
  },
};
</script>

<style lang="scss">
.error {
  border: 1px solid red;
  padding: 1rem;
}
.section {
  display: grid;
  place-content: center;
  min-height: 100vh;
}
.form {
  margin-top: 125px;
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  // form__label
  &__label {
    &.wrong {
      color: red;
      animation: validation 0.1s 3 linear;
    }
    span {
      font-size: 16px;
      font-weight: bold;
      color: #252329;
      margin-bottom: 8px;
      display: inline-block;
      &::after {
        content: "*";
        color: red;
      }
    }

    &:last-child {
      display: flex;
      align-items: center;
      gap: 1rem;
      label {
        cursor: pointer;
      }
    }
  }
  // form__input
  &__input {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 6px;
    outline: none;
    font-size: 16px;
    color: #3d3d3d;
    &.wrong {
      border-color: red;
      animation: validation 0.1s 3 linear;
    }
    @keyframes validation {
      from {
        transform: translateX(-5px);
      }
      to {
        transform: translateX(5px);
      }
    }

    &::first-letter {
      text-transform: uppercase;
    }
    &::placeholder {
      font-size: 16px;
      color: #3d3d3d80;
    }

    &:focus {
      box-shadow: 0 1px 8px 1px rgb(240, 240, 240);
    }
  }

  .option {
    font-size: 16px;
    color: #252329;
    padding: 10px 0;
    display: inline-block;
    border: none;
  }

  .selected {
    background-color: #ccc;
    opacity: 0.7;
    color: #3d3d3d;
    font-weight: 550;
  }

  // form__gender
  &__gender {
    display: flex;
    gap: 35px;
    margin-bottom: 25px;
  }

  // form__radio-btn
  &__radio-btn {
    margin-right: 8px;
  }

  // form__btn
  &__btn {
    color: #fff;
    font-size: 16px;
    outline: none;
    padding: 15px 30px;
    margin-top: 30px;
    background-color: #7AA0CD;
    border: 1px solid #7AA0CD;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover {
      background-color: #3E6BA3;
      border-color: #3E6BA3;
    }
  }
}

@media screen and (max-width: 576px) {
  .section {
    place-content: start center;
  }
  .form-user {
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
