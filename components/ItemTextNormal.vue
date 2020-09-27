<template>
  <div class="subSection subSection-TextNormal text">
    <markdown :input="blok.text" />
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    // console.log("ITEM TEXTNORMAL", this.blok)
  }
}
</script>
