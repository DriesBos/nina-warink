<template>
  <section
    class="section section-Mainlanding"
    :class="blok.title_bottom_padding"
  >
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
            d="M155.581 261.427L152.59 257.734C141.333 245.45 133.995 237.198 134.948 228.128C135.726 220.728 142.057 215.602 149.456 216.38C153.513 216.806 157.37 219.142 159.67 222.521C162.621 219.694 166.88 218.211 170.937 218.638C178.337 219.415 183.463 225.746 182.685 233.145C181.732 242.215 172.839 248.761 159.273 258.436L155.581 261.427Z"
            fill="currentColor"
          />
          <path
            id="path pathLeft"
            class="path pathLeft"
            d="M158.5 236.5C-103.265 595.325 895.238 645.169 977.735 275.595C1060.23 -93.9777 127.482 93.1491 473.105 225.591C818.729 358.032 1131.64 240.103 977.735 391.108C823.834 542.113 69.9301 424.54 74.0165 319.6C78.103 214.661 1067.12 -104.292 964.972 236.092C864.787 569.926 95.6154 357.604 95.6154 357.604"
            stroke="black"
          />
        </svg>
      </div>
    </div>
    <div class="logo-Container logo-Container_Fixed">
      <div class="logo-Content">
        <svg
          class="SVGItem SVGRight"
          viewBox="0 0 1030 580"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="love loveRight"
            class="love loveRight"
            d="M803.061 261.427L800.071 257.734C788.813 245.45 781.476 237.198 782.429 228.128C783.207 220.728 789.537 215.602 796.936 216.38C800.994 216.806 804.851 219.142 807.15 222.521C810.102 219.694 814.36 218.211 818.418 218.638C825.817 219.415 830.944 225.746 830.166 233.145C829.213 242.215 820.32 248.761 806.754 258.436L803.061 261.427Z"
            fill="currentColor"
          />
          <path
            id="path pathRight"
            class="path pathRight"
            d="M804.5 239C804.5 239 399.357 39.6218 197.5 169C-44.2535 323.949 1087.5 263.5 900.5 384.5C713.499 505.5 243 582 67.5001 377.5C-108 173 646.562 419.714 606.5 202C566.193 -17.0486 -5.99985 182 39.5001 263.5C85 345 449.513 229.432 804.5 239Z"
            stroke="black"
          />
        </svg>
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
    setTimeout(this.initAnimation, 250)
    setTimeout(this.pathAnimationOne, 500)
    setTimeout(this.pathAnimationTwo, 500)
    window.addEventListener("resize", this.initAnimation)
  },
  destroyed() {
    window.removeEventListener("resize", this.initAnimation)
  },
  methods: {
    halloOne() {
      console.log("YOPPIE")
    },
    initAnimation() {
      console.log("YOPPIE")
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
      // var svg = document.querySelector(".SVGLeft")
      var love = document.querySelector(".loveLeft")
      var path = document.querySelector(".pathLeft")
      // console.log("ANIMATION ONE", body, svg, love, path)
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
    },
    pathAnimationTwo() {
      var body = document.querySelector("body")
      // var svg = document.querySelector(".SVGRight")
      var love = document.querySelector(".loveRight")
      var path = document.querySelector(".pathRight")
      // console.log("ANIMATION ONE", body, svg, love, path)
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
    padding-left: var(--spacing-sides)
    padding-right: var(--spacing-sides)
    .logo
      &-Content
        opacity: 0
        border: 1px solid green
      &-Reference
        position: absolute
        opacity: 0.5
        pointer-events: none
        text-align: center
        h1
          color: red
          display: inline
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
