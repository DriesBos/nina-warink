<template>
  <div class="subSection subSection-TextLarge textLarge">
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
