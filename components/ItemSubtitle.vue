<template>
  <div class="subSection subSection-Subtitle subtitle">
    <markdown :input="blok.text" />
  </div>
</template>

<script>
import ItemMarkDown from "~/components/ItemMarkDown.vue"

export default {
  components: {
    markdown: ItemMarkDown
  },
  props: {
    blok: Object
  },
  mounted() {
    console.log("ITEM SUBTITLE", this.blok)
  }
}
</script>
