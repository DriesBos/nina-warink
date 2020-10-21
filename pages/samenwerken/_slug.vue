<template>
  <div v-editable="story.content" class="page page-SamenwerkenSlug">
    <component
      :is="story.content.component | dashify"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    ></component>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  scrollToTop: true,
  asyncData(context) {
    let endpoint = `cdn/stories/samenwerken/${context.params.slug}`
    let version =
      context.query._storyblok || context.isDev ? "draft" : "published"
    return context.app.$storyapi
      .get(endpoint, {
        version: version,
        cv: context.store.state.cacheVersion
      })
      .then(res => {
        return res.data
      })
      .catch(res => {
        if (!res.response) {
          console.error(res)
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api"
          })
        } else {
          console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          })
        }
      })
  },
  data() {
    return {
      story: { content: {} }
    }
  },
  computed: {
    ...mapState({
      algemeen: state => state.algemeen.list
    })
  },
  mounted() {
    console.log("SAMENWERKEN SLUG", this.story)
  },
  head() {
    return {
      title: this.story.name + " — " + this.algemeen[0].content.site_titel,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.algemeen[0].content.site_omschrijving
        }
      ]
    }
  }
}
</script>
