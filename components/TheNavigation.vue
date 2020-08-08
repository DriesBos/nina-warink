<template>
  <header>
    <nav>
      <ul>
        <nuxt-link to="/" tag="li">Home</nuxt-link>
        <nuxt-link to="/blog" tag="li">Blog</nuxt-link>
        <nuxt-link to="/samenwerken" tag="li">Samenwerken</nuxt-link>
        <nuxt-link to="/contact" tag="li">Contact</nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheNavigation"
}
</script>

<style lang="sass">
header
  position: fixed
  top: 0
  left: 0
  width: 100%
  z-index: 999
  display: flex
  justify-content: center
  ul
    display: flex
    justify-content: flex-end
    li
      padding-top: 2em
      margin-bottom: 2rem
      margin-right: 1.25em
      cursor: pointer
    li:last-child
      padding-right: 0
  .nuxt-link-exact-active
    text-decoration: none
    border-bottom: 1px solid white
</style>
