<template>
  <div v-editable="story.content" class="section-Wrapper">
    <component
      :is="story.content.component | dashify"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    />
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

export default {
  mixins: [storyblokLivePreview],
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
  mounted() {
    this.pathAnimation()
    console.log("PAGETYPE INDEX", this.story)
  },
  methods: {
    pathAnimation() {
      // Center
      gsap.set("#object", {
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50% 50%"
      })
      // Animation
      gsap.to("#object", {
        duration: 1,
        scrollTrigger: {
          trigger: ".section-Animation",
          scrub: true
        },
        motionPath: {
          path: "#path",
          align: "#path",
          alignOrigin: [0.5, 0.5],
          autoRotate: true
        }
      })
    }
  }
}
</script>
