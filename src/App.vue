<template>
  <div>
    导航栏 |
    <router-link to="/">self</router-link> |
    <router-link to="/xxx">NewSelf</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
