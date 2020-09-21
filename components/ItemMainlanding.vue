<template>
  <section
    class="section subSection section-Mainlanding title"
    :class="blok.title_bottom_padding"
  >
    <h1>Nina Warink</h1>
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
    console.log("ITEM MAINLANDING", this.blok)
    this.pathAnimation()
    // console.log("PAGETYPE INDEX", this.story)
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

<style lang="sass">
.section
    &-Mainlanding
        display: flex
        align-items: center
        min-height: 100vh
</style>
