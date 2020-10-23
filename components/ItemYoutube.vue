<template>
  <div class="subSection subSection-Youtube">
    <ul class="videos">
      <li v-for="(video, i) in youtubeFeed" :key="i" class="video-Item">
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
          :src="'https://www.youtube.com/embed/' + video.id.videoId"
        />
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
      youtubeFeed: {}
    }
  },
  created() {
    this.getYoutube()
  },
  methods: {
    getYoutube() {
      let params = {
        part: "snippet",
        key: "AIzaSyB2J6JRb-SWE87VJGmXN4_C5gkahLT1geY",
        channelId: "UCgZFrXpXCPhRxFZeTOvuPjA",
        playlistId: "UUgZFrXpXCPhRxFZeTOvuPjA",
        maxResults: 1,
        order: "date",
        type: "video"
      }
      axios
        .get("https://www.googleapis.com/youtube/v3/channels", { params })
        .then(response => {
          console.log(response.data)
          this.youtubeFeed = response.data.items
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
