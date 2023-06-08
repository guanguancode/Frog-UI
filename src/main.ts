import "./lib/frog.scss";
import "./index.scss";
import "./lib/svg.js";
import "github-markdown-css";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
