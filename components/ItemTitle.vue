<template>
  <div class="subSection subSection-Title title">
    <markdown :input="blok.text" />
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    // console.log("ITEM TITLE", this.blok)
  }
}
</script>
