<template>
  <section
    class="section section-Mainlanding"
    :class="blok.title_bottom_padding"
  >
    <div class="logo-Reference">
      <h1 class="logo-Reference_Item">Nina Warink</h1>
    </div>
    <!-- MOBILE -->
    <div class="logo-Container logo-Mobile logo-Container_Relative">
      <div
        class="logo-Content"
        v-html="require('~/assets/images/logo-text-small.svg?include')"
      />
    </div>
    <div class="logo-Container logo-Mobile logo-Container_Fixed">
      <div class="logo-Content">
        <svg
          class="SVGItem SVGLeft"
          viewBox="0 0 1030 580"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="love loveLeftSmall"
            class="love loveLeftSmall"
            d="M418.775 84.3124L413.666 78.0039C394.434 57.0186 381.899 42.9211 383.528 27.4265C384.856 14.7861 395.671 6.02856 408.311 7.35712C415.243 8.08568 421.832 12.0763 425.76 17.8485C430.803 13.0191 438.077 10.4857 445.009 11.2142C457.649 12.5428 466.407 23.3574 465.078 35.9978C463.45 51.4925 448.258 62.6757 425.083 79.2038L418.775 84.3124Z"
            fill="currentColor"
          />
          <path
            id="path pathLeftSmall"
            class="path pathLeftSmall"
            d="M423.5 42.5C161.735 401.325 895.238 645.169 977.735 275.595C1060.23 -93.9777 127.482 93.1491 473.105 225.591C818.729 358.032 1131.64 240.103 977.735 391.108C823.834 542.113 69.9301 424.54 74.0165 319.6C78.103 214.661 1067.12 -104.292 964.972 236.092C864.787 569.926 95.6154 357.604 95.6154 357.604"
            stroke="black"
          />
        </svg>
      </div>
    </div>
    <div class="logo-Container logo-Mobile logo-Container_Fixed">
      <div class="logo-Content">
        <svg
          class="SVGItem SVGRight"
          viewBox="0 0 1030 580"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="love loveRightSmall"
            class="love loveRightSmall"
            d="M646.775 407.312L641.666 401.004C622.434 380.019 609.899 365.921 611.528 350.426C612.856 337.786 623.671 329.029 636.311 330.357C643.243 331.086 649.832 335.076 653.76 340.849C658.803 336.019 666.077 333.486 673.009 334.214C685.649 335.543 694.407 346.357 693.078 358.998C691.45 374.492 676.258 385.676 653.083 402.204L646.775 407.312Z"
            fill="currentColor"
          />
          <path
            id="path pathRightSmall"
            class="path pathRightSmall"
            d="M652 364.5C652 364.5 399.357 39.622 197.5 169C-44.2535 323.949 1087.5 263.5 900.5 384.5C713.499 505.5 243 582 67.5001 377.5C-108 173 646.562 419.714 606.5 202C566.193 -17.0483 -5.99985 182 39.5001 263.5C85 345 297.013 354.932 652 364.5Z"
            stroke="black"
          />
        </svg>
      </div>
    </div>
    <!-- DESKTOP -->
    <div class="logo-Container logo-Desktop logo-Container_Relative">
      <div
        class="logo-Content"
        v-html="require('~/assets/images/logo-text.svg?include')"
      />
    </div>
    <div class="logo-Container logo-Desktop logo-Container_Fixed">
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
            d="M158.896 262.755l-2.367-2.924c-8.913-9.725-14.722-16.258-13.967-23.438.616-5.858 5.627-9.916 11.485-9.301 3.212.338 6.266 2.187 8.086 4.862 2.337-2.238 5.708-3.412 8.92-3.074 5.858.615 9.916 5.627 9.301 11.485-.755 7.18-7.795 12.363-18.535 20.022l-2.923 2.368z"
            fill="currentColor"
          />
          <path
            id="path pathLeft"
            class="path pathLeft"
            d="M161 244c-261.765 358.825 518 334 816.735 31.596 298.735-302.405-850.253-182.447-504.63-50.005C818.729 358.032 1131.64 396.995 977.735 548"
            stroke="black"
          />
        </svg>
      </div>
    </div>
    <div class="logo-Container logo-Desktop logo-Container_Fixed">
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
            d="M805.896 263.755l-2.367-2.924c-8.913-9.725-14.722-16.258-13.967-23.438.616-5.858 5.627-9.916 11.485-9.301 3.212.338 6.266 2.187 8.086 4.862 2.337-2.238 5.708-3.412 8.92-3.074 5.858.615 9.916 5.627 9.301 11.485-.755 7.18-7.795 12.363-18.535 20.022l-2.923 2.368z"
            fill="currentColor"
          />
          <path
            id="path pathRight"
            class="path pathRight"
            d="M807.5 246.5S399.357 39.622 197.5 169c-241.754 154.949 890 94.5 703 215.5-187.001 121-676 304.5-851.5 100"
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
    const mq = window.matchMedia("(min-width: 840px)")
    setTimeout(this.initAnimation, 250)
    if (mq.matches) {
      setTimeout(this.pathAnimationOne, 350)
      setTimeout(this.pathAnimationTwo, 350)
    } else {
      setTimeout(this.pathAnimationThree, 350)
      setTimeout(this.pathAnimationFour, 350)
    }
    window.addEventListener("resize", this.initAnimation)
  },
  destroyed() {
    window.removeEventListener("resize", this.initAnimation)
  },
  methods: {
    initAnimation() {
      // Get #logo width
      let reference = document.querySelector(".logo-Reference_Item")
      let referenceWidth = reference.offsetWidth
      // Get svg's
      let array = document.querySelectorAll(".logo-Content")
      array.forEach(el => {
        el.style.width = referenceWidth + "px"
        el.style.opacity = 1
      })
    },
    pathAnimationOne() {
      var body = document.querySelector("body")
      var love = document.querySelector(".loveLeft")
      var path = document.querySelector(".pathLeft")
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
          scrub: 0.5,
          start: "50vh",
          end: "bottom bottom"
        }
      })
    },
    pathAnimationTwo() {
      var body = document.querySelector("body")
      var love = document.querySelector(".loveRight")
      var path = document.querySelector(".pathRight")
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
          scrub: 0.5,
          start: "50vh",
          end: "bottom bottom"
        }
      })
    },
    pathAnimationThree() {
      var body = document.querySelector("body")
      var love = document.querySelector(".loveLeftSmall")
      var path = document.querySelector(".pathLeftSmall")
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
          scrub: 0.5,
          start: "50vh",
          end: "bottom bottom"
        }
      })
    },
    pathAnimationFour() {
      var body = document.querySelector("body")
      var love = document.querySelector(".loveRightSmall")
      var path = document.querySelector(".pathRightSmall")
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
          scrub: 0.5,
          start: "50vh",
          end: "bottom bottom"
        }
      })
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

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
    svg
      overflow: visible
    .logo
      &-Content
        opacity: 0
      &-Reference
        position: absolute
        opacity: 0
        pointer-events: none
        text-align: center
        @media screen and ( max-width: $breakpoint-mobile)
          padding-left: var(--spacing-sides)
          padding-right: var(--spacing-sides)
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
      &-Desktop
        @media screen and ( max-width: $breakpoint-mobile)
          display: none
      &-Mobile
        @media screen and ( min-width: $breakpoint-mobile)
          display: none
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
