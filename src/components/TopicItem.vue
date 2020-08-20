<template>
  <li class="item">
    <div class="item__header">
      <user :member="member">
        <span class="user__time">{{ timeTransfer(created) }}</span>
      </user>
      <node :node="node" />
    </div>
    <div class="item__body">
      {{ title }}
    </div>

    <div class="item__footer">
      <span class="subtext"
        ><span role="img" aria-label="emoji">&#x1F496;</span>{{ replies }}</span
      >
      <span class="subtext">
        <span role="img" aria-label="emoji">&#x1f468;</span>
        {{ lastReplyBy }}&nbsp; #{{ timeTransfer(lastTouched) }}#
      </span>
    </div>
  </li>
</template>

<script>
import Node from 'src/components/Node'
import User from 'src/components/User'
import { timeTransfer } from 'src/utils'

export default {
  name: 'topic',
  components: {
    Node,
    User
  },
  props: {
    member: Object,
    created: Number,
    node: String,
    title: String,
    replies: [Number, String],
    lastReplyBy: String,
    lastTouched: Number
  },
  methods: {
    timeTransfer
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/mixins/hairline';
@import 'assets/styles/mixins/lists';
@import 'assets/styles/vars';

.item {
  @include listItem();

  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__body {
    margin: $distance 0 $distanceLg 0;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
  }

  &::after {
    @include hairline();

    border-bottom-width: 1px;
  }

  &:active {
    background: $activeBgColor;
  }

  .subtext {
    font-size: $fontSizeSm;
    color: $lightColor;
  }
}
</style>
