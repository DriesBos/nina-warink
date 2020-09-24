<template>
  <header>
    <nav>
      <ul>
        <nuxt-link class="nav-Link nav-Link_Home" to="/" tag="li"
          ><span>Home</span></nuxt-link
        >
        <nuxt-link class="nav-Link nav-Link_NonHome" to="/blog" tag="li"
          ><span>Blog</span></nuxt-link
        >
        <nuxt-link class="nav-Link nav-Link_NonHome" to="/samenwerken" tag="li"
          ><span>Samenwerken</span></nuxt-link
        >
        <nuxt-link class="nav-Link nav-Link_NonHome" to="/contact" tag="li"
          ><span>Contact</span></nuxt-link
        >
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
@import '~/assets/styles/variables.sass'

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
      margin-top: 1.25em
      margin-right: 1.25em
      &:last-child
        margin-right: 0
</style>
