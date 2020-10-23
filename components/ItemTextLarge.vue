<template>
  <div class="subSection subSection-TextLarge textLarge">
    <LazyMarkdown :input="blok.text" />
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
