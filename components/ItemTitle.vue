<template>
  <div class="subSection subSection-Title">
    <markdown :input="blok.text" />
  </div>
</template>

<script>
import ItemMarkDown from "~/components/ItemMarkDown.vue"

export default {
  components: {
    markdown: ItemMarkDown
  },
  mounted() {
    console.log("ITEM TITLE", this.blok)
  }
}
</script>
