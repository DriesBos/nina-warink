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
          <img :src="image.filename" :alt="image.name" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
