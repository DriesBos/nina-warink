export default {
  mounted() {
    // this.changeFavicon()
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
    }
  }
}
