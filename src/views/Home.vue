<template>
  <div>
    <div class="topnavAndBanner">
      <!-- <div> -->
      <Topnav />

      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320 ">
        <path
          fill="#0099ff"
          fill-opacity="0.65"
          d="M0,224L34.3,224C68.6,224,137,224,206,240C274.3,256,343,288,411,261.3C480,235,549,149,617,149.3C685.7,149,754,235,823,240C891.4,245,960,171,1029,138.7C1097.1,107,1166,117,1234,138.7C1302.9,160,1371,192,1406,208L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg> -->

      <div class="banner">
        <h1>轱辘UI</h1>
        <h2>一个厉害的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;

.topnavAndBanner {
  background: linear-gradient(145deg, #e3fffd 0, #b7e9e6 100%);

  clip-path: ellipse(80% 60% at 50% 40%);
}

.topnav {
  padding: 16px 60px;
  box-shadow: 0 5px 5px rgba(51, 51, 51, 0.1);
  background: linear-gradient(145deg, #e3fffd 0, #b7e9e6 100%);
}

.features {
  margin: 64px auto;
  padding: 0 16px;

  @media (min-width: 800px) {
    width: 800px;
    > ul {
      > li {
        width: 50%;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text;
      }
    }
  }
}

.banner {
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $color;

  > .actions {
    padding: 8px 0;

    a {
      margin: 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      font-size: 20px;

      // margin: 8px;
      // background: #02bcb0;
      // color: #fff;
      // display: inline-block;
      // border-radius: 4px;
      // padding: 8px 24px;
      // font-size: 20px;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
