<template>
  <section
    class="section subSection section-Landing title"
    :class="blok.title_bottom_padding"
  >
    <h1>{{ blok.title }}</h1>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    // console.log("ITEM LANDING", this.blok)
  }
}
</script>

<style lang="sass">
.section
  &-Landing
    display: flex
    align-items: center
    justify-content: center
    h1
      display: inline
    &.fullscreen
      min-height: 100vh
    &.small
      margin-bottom: var(--spacing-subsections)
    &.medium
      margin-bottom: var(--spacing-sections)
</style>
