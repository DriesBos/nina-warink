<template>
  <div v-editable="story.content" class="page page-Index">
    <component
      :is="story.content.component | dashify"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    />
  </div>
</template>

<script>
import { mapState } from "vuex"
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import lazyLoadComponents from "@/mixins/lazyLoadComponents"
import pageLoadFunctions from "@/mixins/pageLoadFunctions"

export default {
  mixins: [storyblokLivePreview, lazyLoadComponents, pageLoadFunctions],
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/home", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft"
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
