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
      text-align: center
      h1
        display: inline
        text-align: center
        &.fullscreen
            display: flex
            align-items: center
            min-height: 100vh
        &.small
            margin-bottom: var(--spacing-two)
        &.medium
            margin-bottom: var(--spacing-five)
</style>
