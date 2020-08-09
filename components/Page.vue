<template>
  <div v-editable="blok" class="page pagetype-Page">
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
