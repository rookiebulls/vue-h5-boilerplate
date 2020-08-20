<template>
  <header class="header">
    <div class="icon">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <div class="title">最热</div>
  </header>
</template>

<script>
export default {
  name: 'topHeader'
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/vars';
@import 'assets/styles/mixins/hairline';

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  z-index: 10;
  background: $bgColor;
  color: $darkColor;
  font-size: $fontSizeLg;

  &::after {
    @include hairline($lightColor);

    border-bottom-width: 1px;
  }

  .icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: $distance;
    transform: translateY(-50%);
    width: 1.2rem;
    height: 15px;

    .line {
      width: 100%;
      height: 1px;
      background: $lightColor;
    }
  }
}
</style>
