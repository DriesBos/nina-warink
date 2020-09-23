<template>
  <section
    class="section section-Mainlanding"
    :class="blok.title_bottom_padding"
  >
    <client-only>
      <div class="logo-Reference">
        <h1 class="logo-Reference_Item">Nina Warink</h1>
      </div>
      <div class="logo-Container logo-Container_Relative">
        <div
          class="logo-Content"
          v-html="require('~/assets/images/logo-text.svg?include')"
        />
      </div>
      <div class="logo-Container logo-Container_Fixed">
        <div
          class="logo-Content"
          v-html="require('~/assets/images/logo-left.svg?include')"
        />
      </div>
      <div class="logo-Container logo-Container_Fixed">
        <div
          class="logo-Content"
          v-html="require('~/assets/images/logo-right.svg?include')"
        />
      </div>
    </client-only>
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
    setTimeout(this.initAnimation, 250)
    setTimeout(this.pathAnimation, 275)
  },
  methods: {
    initAnimation() {
      // Get #logo width
      let reference = document.querySelector(".logo-Reference_Item")
      let referenceWidth = reference.offsetWidth
      // Get svg's
      let array = document.querySelectorAll(".logo-Content")
      console.log("ANIMATION INIT VARS", array, referenceWidth)
      // Replicate width on svg's
      array.forEach(el => {
        console.log("ANIMATION INIT EACH", el)
        el.style.width = referenceWidth + "px"
        el.style.opacity = 1
      })
    },
    pathAnimation() {
      var body = document.querySelector("body")
      var SVGItems = document.querySelectorAll(".SVGItem")
      console.log("ANIMATION PATH VARS", body, SVGItems)
      SVGItems.forEach(el => {
        // var path = el.querySelector("#path")
        var love = el.querySelector("#love")
        console.log("ANIMATION PATH EACH", el, love, body)
        if (love) {
          gsap.set(love, {
            xPercent: -50,
            yPercent: -50,
            transformOrigin: "50% 50%"
          })
          gsap.to(love, {
            // motionPath: {
            //   path: path,
            //   align: path
            // },
            y: "200px",
            ease: "none",
            scrollTrigger: {
              trigger: body,
              scrub: 0, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
              start: "50vh",
              end: "bottom bottom"
            }
          })
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
    color: white
    z-index: -1
    .logo
      &-Content
        opacity: 0
      &-Reference
        position: absolute
        opacity: 0
        pointer-events: none
      &-Container
        &_Relative
          position: relative
          > div
            width: 100%
            display: flex
            align-items: center
            justify-content: center
          svg
            height: auto
            width: 100%
        &_Fixed
          position: fixed
          left: 0
          top: 0
          display: flex
          align-items: center
          justify-content: center
          width: 100%
          height: 100%
          padding-left: var(--spacing-sides)
          padding-right: var(--spacing-sides)
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
