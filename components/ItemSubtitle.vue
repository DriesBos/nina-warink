<template>
  <div class="subSection subSection-Subtitle subtitle">
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
