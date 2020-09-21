<template>
  <div id="pageComponent" v-editable="blok" class="section section-Wrapper">
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    console.log("PAGETYPE PAGE", this.blok)
  }
}
</script>
