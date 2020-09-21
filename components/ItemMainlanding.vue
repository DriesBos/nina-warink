<template>
  <section
    class="section section-Mainlanding"
    :class="blok.title_bottom_padding"
  >
    <div class="logo">
      <div v-html="require('~/assets/images/logo.svg?include')" />
    </div>
    <div id="heart-one" class="heart">
      <div class="icon" v-html="require('~/assets/images/heart.svg?include')" />
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
    console.log("ITEM MAINLANDING", this.blok)
    this.pathAnimation()
    // console.log("PAGETYPE INDEX", this.story)
  },
  methods: {
    pathAnimation() {
      gsap.to("#heart-one", {
        duration: 10,
        motionPath:
          "M 100 300 Q 150 50 200 300 Q 250 550 300 300 Q 350 50 400 300 C 450 550 450 50 500 300 C 550 50 550 550 600 300 A 50 50 0 1 1 700 300"
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
        .heart
            position: fixed
            left: 0
            top: 0
            right: 0
            bottom: 0
            svg
                height: 39px
                width: auto
            // width: 100px
            // height: 100px
</style>
