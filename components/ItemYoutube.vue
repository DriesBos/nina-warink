<template>
  <div class="subSection subSection-Youtube">
    <ul class="videos">
      <li v-for="(video, i) in youtubeFeed" :key="i" class="video-Item">
        <!-- prettier-ignore -->
        <iframe
          id="mediaPlayer"
          allow="autoplay"
          type="text/html"
          width="640"
          height="360"
          frameborder="0"
          transparent="true"
          autopause="true"
          loop="true"
          muted="true"
          playsinline="true"
          title="false"
          :src="'https://www.youtube.com/embed/' + video.snippet.resourceId.videoId"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
require("dotenv").config()

export default {
  props: {
    blok: Object
  },
  data() {
    return {
      youtubeFeed: {}
    }
  },
  created() {
    this.getYoutube()
  },
  methods: {
    getYoutube() {
      let key = process.env.YOUTUBEKEY
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${this.blok.show_last}&playlistId=UUgZFrXpXCPhRxFZeTOvuPjA&key=${key}`,
          {
            headers: {
              Accept: "application/json"
            }
          }
        )
        .then(response => {
          this.youtubeFeed = response.data.items
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
