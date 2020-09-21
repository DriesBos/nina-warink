<template>
  <section v-editable="blok" class="section section-Content">
    <nuxt-link
      v-if="blok.link.cached_url"
      :to="'/' + blok.link.cached_url"
      class="link"
    >
      <component
        :is="blok.component | dashify"
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
      ></component>
    </nuxt-link>
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.body"
      v-else
      :key="blok._uid"
      :blok="blok"
    ></component>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    // console.log("CONTAINER CONTENT", this.blok)
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section
    &-Content
      width: 100%
      max-width: $max-content-width
      display: flex
      flex-direction: column
      align-items: center
      .subSection
        margin-bottom: var(--spacing-three)
        &:last-child
          margin-bottom: 0
</style>
