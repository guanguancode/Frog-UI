import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import self from "./components/self.vue";
import NewSelf from "./components/NewSelf.vue";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: self },
    { path: "/xxx", component: NewSelf },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
