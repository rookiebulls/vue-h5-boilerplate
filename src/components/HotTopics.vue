<template>
  <ul class="lists">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'hotTopics',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/vars';

.lists {
  width: 100%;
  margin: 0;
  padding: 0;
  padding-top: $headerHeight;
}
</style>
