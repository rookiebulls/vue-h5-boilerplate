<template>
  <div class="user">
    <img :src="member.avatar_large || defualtAvatar" alt="avatar" />
    <div>
      <span class="user__name">{{ member.username }}</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user',
  data() {
    return {
      defualtAvatar:
        '//cdn.v2ex.com/gravatar/f18fd443abafbe5ccd21268d603750b4?s=24&d=retro'
    }
  },
  props: {
    member: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/vars';

.user {
  display: flex;

  img {
    border-radius: 2px;
    margin-right: 8px;
    width: 26px;
    height: 26px;
  }

  &__name {
    display: block;
    font-size: $fontSize;
    padding: 0;
    margin: 0;
    line-height: 0.8;
  }

  &__time {
    font-size: $fontSizeMini;
    color: $lightColor;
  }
}
</style>
