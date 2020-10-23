<template>
  <div id="pageComponent" v-editable="blok" class="section section-Wrapper">
    <section
      class="section subSection section-Landing title small"
      :class="blok.title_bottom_padding"
    >
      <h1>{{ blok.title }}</h1>
    </section>
    <section v-editable="blok" class="section section-Content">
      <div class="subSection subSection-TextLarge textLarge">
        <markdown :input="blok.text" />
      </div>
    </section>
    <nuxt-link
      v-for="(item, i) in postsArray"
      :key="i"
      class="section section-Content"
      :to="item.content.full_slug"
      tag="section"
    >
      <div class="subSection subSection-Images">
        <ul class="images" data="1">
          <li class="images-Item aspectRatioOutside landscape contain">
            <div class="aspectRatioInside">
              <img
                class="cursor"
                :src="item.content.content.thumbnail.filename"
                :alt="item.content.content.thumbnail.name"
              />
            </div>
          </li>
        </ul>
      </div>
      <div class="subSection subSection-Subtitle subtitle cursor">
        <markdown :input="item.content.name" />
      </div>
      <div class="subSection subSection-TextLarge textLarge cursor">
        <markdown :input="item.content.content.excerpt" />
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from "vuex"
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import lazyLoadComponents from "@/mixins/lazyLoadComponents"
import pageLoadFunctions from "@/mixins/pageLoadFunctions"

export default {
  mixins: [storyblokLivePreview, lazyLoadComponents, pageLoadFunctions],
  props: {
    blok: Object
  },
  data() {
    return {
      postsArray: []
    }
  },
  computed: {
    ...mapState({
      posts: state => state.posts.list
    })
  },
  created() {
    this.filterList()
  },
  methods: {
    filterList() {
      this.postsArray = this.posts.slice(1)
    }
  }
}
</script>
