import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Maska from "maska";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import "@/assets/styles/global.scss";

const app = createApp(App);

const options = {
  position: "top-right",
  maxToasts: 5,
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
};

app.use(router);
app.use(store);
app.use(Maska);
app.use(Toast, options);

app.mount("#app");
