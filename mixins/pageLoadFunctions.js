export default {
  data() {
    return {
      backgroundColor: 0
    }
  },
  watch: {
    $route() {
      this.changeBackground()
      this.setFirstSectionMargin()
      this.changeFavicon()
    }
  },
  mounted() {
    this.changeBackground()
    this.setFirstSectionMargin()
    this.changeFavicon()
  },
  methods: {
    changeFavicon() {
      var favicon = document.getElementById("favicon")
      if (this.$route.name === "blog" || this.$route.name === "blog-slug") {
        favicon.href = "favicon-orange.png"
      } else if (
        this.$route.name === "samenwerken" ||
        this.$route.name === "samenwerken-slug"
      ) {
        favicon.href = "favicon-green.png"
      } else {
        favicon.href = "favicon-purple.png"
      }
    },
    setFirstSectionMargin() {
      // setTimeout(function() {
      //   var wrapper = document.querySelector(".section-Wrapper")
      //   console.log("FIRED", wrapper)
      //   var section = wrapper.firstChild
      //   var sectionHeight = section.offsetHeight / 2
      //   var windowHeight = window.innerHeight / 2
      //   section.style.marginTop = windowHeight - sectionHeight + "px"
      // }, 200)
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
