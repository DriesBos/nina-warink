<template>
  <div class="subSection subSection-Images">
    <ul class="images" :data="blok.images.length">
      <li
        v-for="(image, i) in blok.images"
        :key="i"
        class="images-Item aspectRatioOutside"
        :class="[blok.ratio, blok.fill]"
      >
        <div class="aspectRatioInside">
          <img
            v-lazy="`${transformImage(image.filename, '1440x0')}`"
            :data-srcset="
              `${transformImage(image.filename, '400x0')} 400w,
              ${transformImage(image.filename, '600x0')} 600w, 
              ${transformImage(image.filename, '750x0')} 750w, 
              ${transformImage(image.filename, '960x0')} 960w, 
              ${transformImage(image.filename, '1920x0')} 1920w`
            "
            sizes="(min-width: 960px) 960px, 100vw"
            class="lazy"
            :alt="image.name"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  methods: {
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
