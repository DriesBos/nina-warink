<template>
  <main>
    <the-navigation />
    <transition name="pages" mode="out-in">
      <nuxt />
    </transition>
    <the-footer />
  </main>
</template>

<script>
import TheNavigation from "~/components/TheNavigation.vue"
import TheFooter from "~/components/TheFooter.vue"

export default {
  components: {
    "the-navigation": TheNavigation,
    "the-footer": TheFooter
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
      console.log(this.$route)
      if (this.$route.name === "index") {
        document.body.style.backgroundColor = "#C0C9E5"
      } else if (
        this.$route.name == "blog" ||
        this.$route.name == "blog-slug"
      ) {
        document.body.style.backgroundColor = "#E4915D"
      } else if (
        this.$route.name == "samenwerken" ||
        this.$route.name == "samenwerken-slug"
      ) {
        document.body.style.backgroundColor = "#3D8B74"
      } else if (this.$route.path == "/contact") {
        document.body.style.backgroundColor = "#C0C9E5"
      } else {
        document.body.style.backgroundColor = "#C0C9E5"
      }
    }
  }
}
</script>
