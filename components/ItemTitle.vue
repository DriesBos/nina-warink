<template>
  <div class="subSection subSection-Title title">
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
