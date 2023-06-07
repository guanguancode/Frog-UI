<template>
  <div class="frog-tabs">
    <div class="frog-tabs-nav">
      <div
        class="frog-tabs-nav-item selected"
        v-for="(t, index) in titles"
        :key="index"
      >
        {{ t }}
      </div>
    </div>
    <div class="frog-tabs-content">
      <component
        class="frog-tabs-content-item"
        v-for="(c, index) in defaults"
        :is="c"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    return {
      defaults,
      titles,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.frog-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
