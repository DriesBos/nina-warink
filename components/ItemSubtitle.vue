<template>
  <div class="subSection subSection-Subtitle subtitle">
    <markdown :input="blok.text" />
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    // console.log("ITEM SUBTITLE", this.blok)
  }
}
</script>
