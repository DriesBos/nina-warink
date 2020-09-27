<template>
  <div class="subSection subSection-Instagram">
    <ul class="images" :data="blok.number_of_images">
      <li v-for="(feed, i) in instafeed" :key="i" class="images-Item">
        <img :src="feed.media_url" :alt="feed.username" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"

export default {
  props: {
    blok: Object
  },
  data() {
    return {
      instafeed: null
    }
  },
  created() {},
  mounted() {
    this.getInsta()
  },
  methods: {
    getInsta() {
      axios
        .get(
          "https://graph.instagram.com/me/media?fields=id,media_type,media_url,username&access_token=IGQVJYemhrc2lVSUc0YmdNdS1WVGNqZA2NrRThsSW9jSkVuUV9IcWUyUk9wRGlMRkVSS2kzSTdoOVpGdHFsT3hraFpUakJaQndTYjM2ZAVo0M1dxNGVTVWNyT0d0VVhYT0FNa0JTbVlhZAklyUzdwcjBNbgZDZD"
        )
        .then(response => {
          var limitedResponse = response.data.data.slice(
            0,
            this.blok.number_of_images
          )
          this.instafeed = limitedResponse
        })
    }
  }
}
</script>
