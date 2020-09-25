<template>
  <div v-editable="story.content" class="page-BlogSlug section-Wrapper">
    <component
      :is="blok.component | dashify"
      v-for="blok in story.content.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
  </div>
</template>

<script>
import { mapState } from "vuex"
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import lazyLoadComponents from "@/mixins/lazyLoadComponents"
import pageLoadFunctions from "@/mixins/pageLoadFunctions"

export default {
  mixins: [storyblokLivePreview, lazyLoadComponents, pageLoadFunctions],
  scrollToTop: true,
  asyncData(context) {
    let endpoint = `cdn/stories/blog/${context.params.slug}`
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
    // console.log("BLOG SLUG", this.story)
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
      ],
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: `data:image/svg+xml,
                <svg viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M541 987.24L472.96 919.2C220.24 695.64 55 544.98 55 360.3C55 209.64 171.64 93 322.3 93C404.92 93 487.54 131.88 541 195.06C594.46 131.88 677.08 93 759.7 93C910.36 93 1027 209.64 1027 360.3C1027 544.98 861.76 695.64 609.04 919.2L541 987.24Z" fill="#E4915D"/>
                </svg>`
        }
      ]
    }
  }
}
</script>
