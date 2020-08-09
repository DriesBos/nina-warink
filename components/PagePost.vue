<template>
  <div v-editable="blok" class="page page-Post">
    <p>{{ blok.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
