<template>
  <main>
    <the-navigation />
    <transition name="pages" mode="out-in">
      <nuxt />
    </transition>
  </main>
</template>

<script>
import TheNavigation from "~/components/TheNavigation.vue"

export default {
  components: {
    "the-navigation": TheNavigation
  },
  data() {
    return {
      backgroundColor: 0
    }
  },
  watch: {
    $route() {
      this.changeBackground()
    }
  },
  mounted() {
    this.changeBackground()
  },
  methods: {
    changeBackground() {
      console.log("ROUTE", this.$route)
      if (this.$route.name === "index") {
        document.body.style.backgroundColor = "#C0C9E5"
      } else if (this.$route.name === "blog") {
        document.body.style.backgroundColor = "#E4915D"
      } else if (this.$route.path === "/samenwerken") {
        document.body.style.backgroundColor = "#3D8B74"
      } else if (this.$route.path === "/contact") {
        document.body.style.backgroundColor = "#C0C9E5"
      } else {
        document.body.style.backgroundColor = "#C0C9E5"
      }
    }
  }
}
</script>
