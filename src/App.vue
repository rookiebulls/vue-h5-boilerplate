<template>
  <div id="app">
    <keep-alive>
      <router-view class="content" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view class="content" v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {}
  }
}
</script>
