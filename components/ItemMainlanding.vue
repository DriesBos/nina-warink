<template>
  <section
    class="section section-Mainlanding"
    :class="blok.title_bottom_padding"
  >
    <div class="logo">
      <div v-html="require('~/assets/images/logo-new.svg?include')" />
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
    // this.initPath()
    this.pathAnimation()
  },
  methods: {
    initPath() {
      // Get #logo width
      let logo = document.querySelector("#logo")
      let logoRect = logo.getBoundingClientRect()
      let width = Math.round(logoRect.width)
      // Get window height
      let height = window.innerHeight
      // Set width + height on #path viewBox
      let path = document.querySelector("#pathSVG")
      console.log("INITPATH", width, height, path)
      path.setAttribute("viewBox", `0 0 ${width} ${height}`)
    },
    pathAnimation() {
      var body = document.querySelector("body")
      var path = document.querySelector("#path")
      var love = document.querySelector("#love")
      // console.log(body, path, love)
      gsap.set(love, {
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50% 50%"
      })
      gsap.to(love, {
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
    justify-content: center
    align-items: center
    min-height: 100vh
    width: 100%
    .logo
      position: fixed
      left: 0
      top: 0
      display: flex
      align-items: center
      justify-content: center
      width: 100%
      height: 100%
      > div
        width: 100%
        display: flex
        align-items: center
        justify-content: center
      svg
        height: auto
        width: 100%
    .path
      position: fixed
      left: 0
      top: 0
      right: 0
      bottom: 0
      display: flex
      justify-content: center
      align-items: center
      svg
          height: 100%
    .love
      position: fixed
      left: 0
      top: 0
      svg
        height: 39px
        width: auto
    svg
      stroke-opacity: 0
</style>
