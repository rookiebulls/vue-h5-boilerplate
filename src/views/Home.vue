<template>
  <div class="container">
    <top-header></top-header>
    <hot-topics>
      <topic-item
        v-for="topic in topics"
        :key="topic.id"
        :title="topic.title"
        :lastTouched="topic.last_touched"
        :lastReplyBy="topic.last_reply_by"
        :member="topic.member"
        :node="topic.node.title"
        :replies="topic.replies"
        :created="topic.created"
      >
      </topic-item>
    </hot-topics>
  </div>
</template>

<script>
import { getHotTopics } from 'src/api/common'
import HotTopics from 'src/components/HotTopics'
import TopicItem from 'src/components/TopicItem'
import TopHeader from 'src/components/TopHeader'

export default {
  name: 'home',
  data() {
    return {
      topics: []
    }
  },
  components: {
    HotTopics,
    TopicItem,
    TopHeader
  },
  mounted() {
    this.getDict()
  },
  methods: {
    async getDict() {
      const resp = await getHotTopics()
      console.log(resp)
      this.topics = resp
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: #fafafa;
}

.title {
  color: red;
}
</style>
