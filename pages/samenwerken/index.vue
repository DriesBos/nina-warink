<template>
  <div v-editable="story.content" class="section-Wrapper">
    <section v-editable="story.content">
      <component
        :is="story.content.component | dashify"
        v-if="story.content.component"
        :key="story.content._uid"
        :blok="story.content"
      ></component>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    // Load the JSON from the API
    return context.app.$storyapi
      .get(`cdn/stories/samenwerken`, {
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
    console.log("SAMENWERKEN INDEX", this.story)
  }
}
</script>
