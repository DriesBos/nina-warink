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
import lazyLoadComponents from "@/mixins/lazyLoadComponents"

export default {
  mixins: [lazyLoadComponents],
  data() {
    return {
      backgroundColor: 0
    }
  },
  watch: {
    $route() {
      this.changeBackground()
      this.changeFavicon()
    }
  },
  mounted() {
    this.changeFavicon()
    this.changeBackground()
  },
  methods: {
    changeFavicon() {
      if (this.$route.name === "blog" || this.$route.name === "blog-slug") {
        document
          .querySelector("link[rel*='icon']")
          .setAttribute("href", "favicon-orange.png")
      } else if (
        this.$route.name === "samenwerken" ||
        this.$route.name === "samenwerken-slug"
      ) {
        document
          .querySelector("link[rel*='icon']")
          .setAttribute("href", "favicon-green.png")
      } else {
        document
          .querySelector("link[rel*='icon']")
          .setAttribute("href", "favicon-purple.png")
      }
    },
    changeBackground() {
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
