<template>
  <div class="subSection subSection-TextLarge textLarge">
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
    console.log("ITEM TEXTLARGE", this.blok)
  }
}
</script>
