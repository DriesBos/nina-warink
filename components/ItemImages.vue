<template>
  <div class="subSection subSection-Images" :class="applyRatio()">
    <ul class="images">
      <li v-for="(image, i) in blok.images" :key="i" class="images-Item">
        <img :src="image.filename" :alt="image.name" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    this.applyRatio()
    // console.log("ITEM IMAGES", this.blok)
  },
  methods: {
    applyRatio() {
      if (this.blok.images.length > 1) {
        return "none"
      } else {
        return this.blok.ratio
      }
    }
  }
}
</script>

<style lang="sass">
// @import '~/assets/styles/variables.sass'

// .subSection
//   &-Images
//     &.none
//       .subSection-Images_Container
//         display: flex
//         align-items: center
//         .subSection-Images_Item
//           margin-right: var(--spacing-two)
//           img
//               width: 100%
//           &:last-child
//               margin-right: 0
//   &.screen
//     position: relative
//     height: 100vh
//     width: 100%
//     .subSection-Images_Container
//       position: absolute
//       left: 0
//       top: 0
//       width: 100%
//       height: 100%
//       display: flex
//       align-items: center
//       img
//         position: absolute
//         left: 0
//         top: 0
//         width: 100%
//         height: 100%
//         object-fit: contain
//   &.landscape
//     position: relative
//     height: 0
//     padding-top: 62.5%
//     width: 100%
//     .subSection-Images_Container
//       position: absolute
//       left: 0
//       top: 0
//       width: 100%
//       height: 100%
//       display: flex
//       align-items: center
//       img
//         position: absolute
//         left: 0
//         top: 0
//         width: 100%
//         height: 100%
//         object-fit: contain
</style>
