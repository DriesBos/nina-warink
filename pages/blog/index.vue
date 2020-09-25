<template>
  <div v-editable="story.content" class="page page-Blog">
    <component
      :is="story.content.component | dashify"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    ></component>
  </div>
</template>

<script>
import lazyLoadComponents from "@/mixins/lazyLoadComponents"

export default {
  mixins: [lazyLoadComponents],
  asyncData(context) {
    // Load the JSON from the API
    return context.app.$storyapi
      .get(`cdn/stories/blog`, {
        version: process.env.NODE_ENV == "production" ? "published" : "draft"
      })
      .then(res => {
        return res.data
      })
      .catch(res => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        })
      })
  },
  data() {
    return { story: { content: {} } }
  },
  mounted() {
    // console.log("BLOG INDEX", this.story)
  },
  head() {
    return {
      title: this.story.name + " — Nina Warink"
    }
  }
}
</script>
