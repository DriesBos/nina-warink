<template>
  <section class="section section-Landing" :class="blok.title_bottom_padding">
    <h1>{{ blok.title }}</h1>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    console.log("ITEM LANDING", this.blok)
  }
}
</script>

<style lang="sass">
.section
    &-Landing
        &.fullscreen
            display: flex
            align-items: center
            min-height: 100vh
        &.small
            margin-bottom: var(--spacing-three)
        &.medium
            margin-bottom: var(--spacing-five)
</style>
