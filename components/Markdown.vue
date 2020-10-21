<template>
  <div class="markdown" v-html="compiledMarkdown"></div>
</template>

<script>
// https://marked.js.org/
const marked = require("marked")
const renderer = new marked.Renderer()

marked.setOptions({
  renderer: new marked.Renderer(),
  breaks: true
})

renderer.link = function(href, title, text) {
  return (
    '<a target="_blank" href="' +
    href +
    '" title="' +
    title +
    '">' +
    text +
    "</a>"
  )
}

export default {
  props: {
    input: String
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, { renderer: renderer })
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.markdown
  p
    white-space: pre-line
  a
    --var: 100%
    position: relative
    &::before
      content: ''
      position: absolute
      left: 0
      display: inline-block
      bottom: -3px
      top: 0
      width: var(--var)
      z-index: 0
      border-bottom: $border
    // &:hover
    //   &::before
    //     @media ( hover: hover )
    //       animation: hyperLink .33s ease-out
    //       animation-iteration-count: 1
    //       animation-fill-mode: both
</style>
