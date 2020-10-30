<template>
  <div class="subSection subSection-Youtube">
    <ul class="videos">
      <li class="video-Item">
        <no-ssr>
          <!-- <li v-for="(video, i) in youtubeFeed" :key="i" class="video-Item"> -->
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
            :src="'https://www.youtube.com/embed/Z4RSbkYw7oA'"
          />
        </no-ssr>
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
      let params = {
        part: "snippet",
        key: process.env.YOUTUBEKEY,
        channelId: "UCgZFrXpXCPhRxFZeTOvuPjA",
        playlistId: "UUgZFrXpXCPhRxFZeTOvuPjA",
        maxResults: 1,
        order: "date",
        type: "video"
      }
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/playlistItems",
          { params }
        )
        // .get(
        //   `https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUgZFrXpXCPhRxFZeTOvuPjA&maxResults=1&key=${process.env.YOUTUBEKEY}`
        // )
        .then(response => {
          this.youtubeFeed = response.data.items
          console.log("RESPONSE", response.data.items)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
