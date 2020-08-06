<template>
  <div>
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
  }
}
</script>
