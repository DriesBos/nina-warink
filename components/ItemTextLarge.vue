<template>
  <div class="subSection subSection-TextLarge textLarge">
    <markdown :input="blok.text" />
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    // console.log("ITEM TEXTLARGE", this.blok)
  }
}
</script>
