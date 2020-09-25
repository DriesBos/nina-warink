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
      ]
    }
  }
}
</script>
