# 开始使用

请先请[安装](#/doc/install)本组件库。

然后需要在你的代码中运行以下代码

```
import {Button, Tabs, Switch, Dialog} from "Frog-ui"
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "Frog-ui"
export default {
  components: {Button}
}
</script>
```
