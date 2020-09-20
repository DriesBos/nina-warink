<template>
  <div class="subSection subSection-Title title">
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
    console.log("ITEM TITLE", this.blok)
  }
}
</script>
