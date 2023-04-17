import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import VueWriter from "vue-writer";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(VueWriter)

app.mount("#app");
