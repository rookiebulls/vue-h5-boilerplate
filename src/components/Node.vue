<template>
  <span class="node">
    <span role="img" aria-label="emoji">&#x23be;</span>
    {{ node }}
    <span role="img" aria-label="emoji">&#x23cc;</span>
  </span>
</template>

<script>
export default {
  name: 'node',
  props: {
    node: String
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/vars';

.node {
  display: inline-block;
  font-size: $fontSizeSm;
  color: darken($color: $lightColor, $amount: 50%);
  height: 1rem;
  padding: 0 4px;
}
</style>
