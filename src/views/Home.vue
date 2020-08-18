<template>
  <div class="container">
    <h1 class="title">Welcome!</h1>
  </div>
</template>

<script>
import { getBaseDict } from 'src/api/common'

export default {
  name: 'home',
  data() {
    return {}
  },
  mounted() {
    this.getDict()
  },
  methods: {
    async getDict() {
      const resp = await getBaseDict()
      console.log(resp)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #fafafa;
}

.title {
  color: red;
}
</style>
