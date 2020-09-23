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
        <!-- <div
          class="logo-Content"
          v-html="require('~/assets/images/logo-left.svg?include')"
        /> -->
        <div class="logo-Content">
          <svg
            class="SVGItem SVGLeft"
            viewBox="0 0 1030 580"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="love loveLeft"
              class="love loveLeft"
              d="M157.896 261.755L155.529 258.831C146.616 249.106 140.807 242.573 141.562 235.393C142.178 229.535 147.189 225.477 153.047 226.092C156.259 226.43 159.313 228.279 161.133 230.954C163.47 228.716 166.841 227.542 170.053 227.88C175.911 228.495 179.969 233.507 179.354 239.365C178.599 246.545 171.559 251.728 160.819 259.387L157.896 261.755Z"
              fill="currentColor"
            />
            <path
              id="path pathLeft"
              class="path pathLeft"
              d="M158.94 242.593C-102.825 601.418 895.238 645.169 977.735 275.595C1060.23 -93.9777 127.482 93.1491 473.105 225.591C818.729 358.032 1131.64 240.103 977.735 391.108C823.834 542.113 69.9301 424.54 74.0165 319.6C78.103 214.661 1067.12 -104.292 964.972 236.092C864.787 569.926 95.6154 357.604 95.6154 357.604"
              stroke="red"
            />
          </svg>
        </div>
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
    setTimeout(this.pathAnimationOne, 500)
  },
  methods: {
    initAnimation() {
      // Get #logo width
      let reference = document.querySelector(".logo-Reference_Item")
      let referenceWidth = reference.offsetWidth
      // Get svg's
      let array = document.querySelectorAll(".logo-Content")
      // console.log("ANIMATION INIT VARS", array, referenceWidth)
      // Replicate width on svg's
      array.forEach(el => {
        // console.log("ANIMATION INIT EACH", el)
        el.style.width = referenceWidth + "px"
        el.style.opacity = 1
      })
    },
    pathAnimationOne() {
      var body = document.querySelector("body")
      var svg = document.querySelector(".SVGLeft")
      var love = document.querySelector(".loveLeft")
      var path = document.querySelector(".pathLeft")
      console.log("ANIMATION ONE", body, svg, love, path)
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
        ease: "none",
        scrollTrigger: {
          trigger: body,
          scrub: 0, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          start: "50vh",
          end: "bottom bottom"
        }
      })
    }
    // pathAnimation() {
    //   var body = document.querySelector("body")
    //   var SVGItems = document.querySelectorAll(".SVGItem")
    //   console.log("ANIMATION PATH VARS", body, SVGItems)
    //   SVGItems.forEach(el => {
    //     // var path = el.querySelector("#path")
    //     var love = el.querySelector("#love")
    //     console.log("ANIMATION PATH EACH", el, love, body)
    //     if (love) {
    //       gsap.set(love, {
    //         xPercent: -50,
    //         yPercent: -50,
    //         transformOrigin: "50% 50%"
    //       })
    //       gsap.to(love, {
    //         // motionPath: {
    //         //   path: path,
    //         //   align: path
    //         // },
    //         y: "200px",
    //         ease: "none",
    //         scrollTrigger: {
    //           trigger: body,
    //           scrub: 0, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    //           start: "50vh",
    //           end: "bottom bottom"
    //         }
    //       })
    //     }
    //   })
    // }
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
