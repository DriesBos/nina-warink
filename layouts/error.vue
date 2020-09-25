<template>
  <div v-editable="error[0].content" class="page page-Error">
    <component
      :is="error[0].content.component | dashify"
      v-if="error[0].content.component"
      :key="error[0].content._uid"
      :blok="error[0].content"
    ></component>
  </div>
</template>

<script>
import { mapState } from "vuex"
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

export default {
  mixins: [storyblokLivePreview],
  // props: ["error"],
  layout: "default", // you can set a custom layout for the error page
  computed: {
    ...mapState({
      error: state => state.error.list,
      algemeen: state => state.algemeen.list
    })
  },
  head() {
    return {
      title: "Oops! — " + this.algemeen[0].content.site_titel,
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
                <path d="M540 987.24L471.96 919.2C219.24 695.64 54 544.98 54 360.3C54 209.64 170.64 93 321.3 93C403.92 93 486.54 131.88 540 195.06C593.46 131.88 676.08 93 758.7 93C909.36 93 1026 209.64 1026 360.3C1026 544.98 860.76 695.64 608.04 919.2L540 987.24Z" fill="#3D8B74"/>
                </svg>`
        }
      ]
    }
  }
}
</script>
