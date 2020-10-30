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
      // let params = {
      //   part: "snippet",
      //   key: process.env.YOUTUBEKEY,
      //   playlistId: "UUgZFrXpXCPhRxFZeTOvuPjA",
      //   maxResults: this.blok.show_last
      // }
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1&playlistId=UUgZFrXpXCPhRxFZeTOvuPjA&key=AIzaSyBFtti4Sb08sqP5ODaGSDQ5p_vnkL9bRkA",
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
