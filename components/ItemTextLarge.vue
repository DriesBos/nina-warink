<template>
  <div class="subSection subSection-TextLarge textLarge">
    <markdown-item :input="blok.text" />
  </div>
</template>

<script>
import MarkdownItem from "@/components/MarkdownItem.vue"

export default {
  components: {
    "markdown-item": MarkdownItem
  },
  props: {
    blok: Object
  },
  mounted() {
    console.log("ITEM TEXTLARGE", this.blok)
  }
}
</script>
