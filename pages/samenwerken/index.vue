<template>
  <div v-editable="story.content" class="page page-Samenwerken">
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
    // console.log("SAMENWERKEN INDEX", this.story)
  },
  head() {
    return {
      title: this.story.name + " — Nina Warink",
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: `data:image/svg+xml,
                <svg viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M540 987.24L471.96 919.2C219.24 695.64 54 544.98 54 360.3C54 209.64 170.64 93 321.3 93C403.92 93 486.54 131.88 540 195.06C593.46 131.88 676.08 93 758.7 93C909.36 93 1026 209.64 1026 360.3C1026 544.98 860.76 695.64 608.04 919.2L540 987.24Z" fill="#3D8B74"/>
                </svg>`
        }
      ]
    }
  }
}
</script>
