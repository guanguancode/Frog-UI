<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    return { menuVisible };
  },
};
</script>

<style lang="scss" scoped>
$aside-index: 10;
$layout-background: linear-gradient(
  145deg,
  rgb(227, 255, 253) 0px,
  rgb(183, 233, 230) 100%
);
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
    background: $layout-background;
    box-shadow: 0 5px 5px rgba(51, 51, 51, 0.1);
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding: 0;
      // padding-left: 0;
    }
  }
}

.content {
  display: flex;
  > aside {
    flex-shrink: 0;
    padding: 100px 0;
  }

  > main {
    flex-grow: 1;
    padding: 48px 20px 20px 100px;
    background-color: #f9f9f9;
  }
  @media (max-width: 500px) {
    > main {
      padding: 100px 0px 16px 16px;
      width: 100%;
      overflow: auto;
    }
  }
}

aside {
  background: $layout-background;
  width: 156px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: $aside-index;

  > h2 {
    margin-bottom: 4px;
    padding: 4px 16px;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 6px 16px;
        text-decoration: none;
      }
      .router-link-active {
        background: white;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>
