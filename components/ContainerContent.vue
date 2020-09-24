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
