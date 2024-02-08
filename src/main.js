import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { router } from "./router";
import 'aos/dist/aos.css'
const app = createApp(App);
app.use(router);
app.mount("#app");
