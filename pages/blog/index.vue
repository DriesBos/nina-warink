<template>
  <div class="page">
    <section class="section">
      <ul>
        <!-- prettier-ignore -->
        <li v-for="post in blogList" :id="post.id" :key="post.id">
          <nuxt-link :to="post.full_slug" tag="div">
            <h1>{{ post.name }}</h1>
          </nuxt-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

export default {
  mixins: [storyblokLivePreview],
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft",
        starts_with: "blog/"
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
      stories: { content: {} },
      blogList: {}
    }
  },
  mounted() {
    this.removeFirstOfarray()
    console.log("BLOG", this.stories, this.blogList)
    console.log("BLOGTITLE", this.blogList[0].content.body[0].title)
  },
  destroyed() {},
  methods: {
    removeFirstOfarray() {
      var arr = this.stories
      arr.shift()
      this.blogList = arr
    }
  }
}
</script>
