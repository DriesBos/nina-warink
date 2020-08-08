<template>
  <div class="page">
    <section class="section section-Animation">
      <div id="object"></div>
      <svg
        id="path"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1440 900"
        d="M127.8,484.5c0,37.4-24.3,64.7-63.9,64.7C24.5,549.2,0,521.9,0,484.5c0-37.4,24.5-64.7,63.9-64.7
            C103.5,419.8,127.8,447.1,127.8,484.5z M101.3,484.5c0-29-16.5-39.2-37.4-39.2c-20.8,0-37.4,10.2-37.4,39.2
            c0,28.8,16.7,39.2,37.4,39.2C84.9,523.7,101.3,514.3,101.3,484.5z"
      />
    </section>
    <section class="section section-Landing">
      <div class="display">
        <h1>Nina Warink</h1>
      </div>
    </section>
    <section class="section section-Content">
      <ul>
        <li>
          <img
            src="https://images.unsplash.com/photo-1531278520962-fcf47a2faea2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80"
            alt
          />
        </li>
        <li>
          <img
            src="https://images.unsplash.com/photo-1503058474900-cb76710f9cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
            alt
          />
        </li>
        <li>
          <img
            src="https://images.unsplash.com/photo-1531113165519-5eb0816d7e02?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
            alt
          />
        </li>
        <li>
          <img
            src="https://images.unsplash.com/photo-1530795318892-5cdc7a87d71b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
            alt
          />
        </li>
        <li>
          <img
            src="https://images.unsplash.com/photo-1534481130773-b369ad3c8863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjY4MzIwfQ&auto=format&fit=crop&w=2552&q=80"
            alt
          />
        </li>
        <li>
          <img
            src="https://images.unsplash.com/photo-1496284045406-d3e0b918d7ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
            alt
          />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import gsap from "gsap"
// import $ from "jquery"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

export default {
  mixins: [storyblokLivePreview],
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/home", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft"
      })
      .then(res => {
        return res.data
      })
      .catch(res => {
        if (!res.response) {
          console.error(res)
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api"
          })
        } else {
          console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          })
        }
      })
  },
  data() {
    return {
      story: { content: {} }
    }
  },
  mounted() {
    this.pathAnimation()
  },
  methods: {
    pathAnimation() {
      // Center
      gsap.set("#object", {
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50% 50%"
      })
      // Animation
      gsap.to("#object", {
        duration: 1,
        scrollTrigger: {
          trigger: ".section-Animation",
          scrub: true
        },
        motionPath: {
          path: "#path",
          align: "#path",
          alignOrigin: [0.5, 0.5],
          autoRotate: true
        }
      })
    }
  }
}
</script>
