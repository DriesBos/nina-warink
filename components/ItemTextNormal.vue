<template>
  <div class="subSection subSection-TextNormal text">
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
