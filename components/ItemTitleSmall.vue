<template>
  <div class="subSection subSection-TitleSmall titleSmall">
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
