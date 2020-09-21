import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    this.lazyLoadComponents()
  },
  methods: {
    lazyLoadComponents() {
      var array = document.querySelectorAll(".subSection")
      console.log("LAZYLOAD ARRAY", array)
      array.forEach(el => {
        console.log("LAZYLOAD EL", el)
        let lazyTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "center bottom"
          }
        })
        lazyTimeline.to(
          el,
          {
            opacity: 1,
            // y: 0,
            duration: 0.33,
            ease: "power2.in"
          },
          0
        )
        lazyTimeline.to(
          el,
          {
            y: 0,
            duration: 0.33,
            ease: "power2.out"
          },
          0
        )
      })
    }
  }
}
