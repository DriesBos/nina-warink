<template>
  <div class="subSection subSection-Subtitle subtitle">
    <markdown :input="blok.text" />
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
