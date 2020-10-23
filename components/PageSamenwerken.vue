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
        <LazyMarkdown :input="blok.text" />
      </div>
    </section>
    <nuxt-link
      v-for="(item, i) in samenwerkenArray"
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
                v-lazy="
                  `${transformImage(
                    item.content.content.thumbnail.filename,
                    '1440x0'
                  )}`
                "
                :data-srcset="
                  `${transformImage(
                    item.content.content.thumbnail.filename,
                    '400x0'
                  )} 400w,
              ${transformImage(
                item.content.content.thumbnail.filename,
                '600x0'
              )} 600w, 
              ${transformImage(
                item.content.content.thumbnail.filename,
                '750x0'
              )} 750w, 
              ${transformImage(
                item.content.content.thumbnail.filename,
                '960x0'
              )} 960w, 
              ${transformImage(
                item.content.content.thumbnail.filename,
                '1920x0'
              )} 1920w`
                "
                sizes="(min-width: 960px) 960px, 100vw"
                class="lazy cursor"
                :alt="item.content.content.thumbnail.name"
              />
            </div>
          </li>
        </ul>
      </div>
      <div class="subSection subSection-Subtitle subtitle cursor">
        <LazyMarkdown :input="item.content.name" />
      </div>
      <div class="subSection subSection-TextLarge textLarge cursor">
        <LazyMarkdown :input="item.content.content.excerpt" />
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
      samenwerkenArray: []
    }
  },
  computed: {
    ...mapState({
      samenwerken: state => state.samenwerken.list
    })
  },
  created() {
    this.filterList()
  },
  methods: {
    filterList() {
      this.samenwerkenArray = this.samenwerken.slice(1)
    },
    transformImage(image, option) {
      if (!image) return ""
      if (!option) return ""
      let imageService = "//img2.storyblok.com/"
      let pathOne = image.replace("https://a.storyblok.com", "")
      let pathTwo = pathOne.replace("//a.storyblok.com", "")

      return imageService + option + pathTwo
    }
  }
}
</script>
