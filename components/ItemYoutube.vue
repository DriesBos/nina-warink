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
        key: "AIzaSyBpBLA3IUv1zr7I7OTW1PoMln6F3a8Hku4",
        channelId: "UCgZFrXpXCPhRxFZeTOvuPjA",
        maxResults: 1,
        order: "date",
        type: "video"
      }
      axios
        .get("https://www.googleapis.com/youtube/v3/search", { params })
        .then(response => {
          this.youtubeFeed = response.data.items
        })
    }
  }
}
</script>
