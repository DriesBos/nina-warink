<template>
  <section
    class="section section-Mainlanding"
    :class="blok.title_bottom_padding"
  >
    <div class="logo">
      <div v-html="require('~/assets/images/logo.svg?include')" />
    </div>
    <div class="animation">
      <div class="path">
        <div v-html="require('~/assets/images/path.svg?include')" />
      </div>
      <div id="heart" class="heart">
        <div
          class="icon"
          v-html="require('~/assets/images/heart.svg?include')"
        />
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

export default {
  props: {
    blok: Object
  },
  mounted() {
    this.pathAnimation()
  },
  methods: {
    pathAnimation() {
      var body = document.querySelector("body")
      var path = document.querySelector("#path")
      var heart = document.querySelector("#heart")
      gsap.set(heart, {
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50% 50%"
      })
      gsap.to(heart, {
        duration: 10,
        motionPath: {
          path: path,
          align: path
        },
        scrollTrigger: {
          trigger: body,
          scrub: 0, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          start: "50vh",
          end: "bottom bottom"
        }
      })
    }
  }
}
</script>

<style lang="sass">
.section
    &-Mainlanding
        position: relative
        display: flex
        align-items: center
        min-height: 100vh
        width: 100%
        .logo
            width: 100%
            height: auto
        .animation
            position: fixed
            left: 0
            top: 0
            right: 0
            bottom: 0
            display: flex
            justify-content: center
            align-items: center
            svg
                width: 100vw
                height: auto
        .heart
            svg
                height: 39px
                width: auto
</style>
