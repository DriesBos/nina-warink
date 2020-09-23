<template>
  <footer class="footer">
    <ul>
      <nuxt-link class="nav-Link nav-Link_Home" to="/" tag="li"
        ><span>Nina Warink</span></nuxt-link
      >
    </ul>
    <ul>
      <nuxt-link class="nav-Link nav-Link_Home" to="/" tag="li"
        ><span>Home</span></nuxt-link
      >
      <nuxt-link class="nav-Link nav-Link_NonHome" tag="li" to="/blog"
        ><span>Blog</span></nuxt-link
      >
      <nuxt-link class="nav-Link nav-Link_NonHome" tag="li" to="/samenwerken"
        ><span>Samenwerken</span></nuxt-link
      >
      <nuxt-link class="nav-Link nav-Link_NonHome" tag="li" to="/contact"
        ><span>Contact</span></nuxt-link
      >
    </ul>
    <ul>
      <nuxt-link class="nav-Link nav-Link_NonHome" tag="li" to="/faq"
        ><span>FAQ</span></nuxt-link
      >
      <nuxt-link
        class="nav-Link nav-Link_NonHome"
        tag="li"
        to="/terms-conditions"
        ><span>Terms & Conditions</span></nuxt-link
      >
      <li>
        <nuxt-link
          class="nav-Link nav-Link_NonHome"
          tag="li"
          to="/privacy-policy"
          ><span>Privacy Policy</span></nuxt-link
        >
      </li>
    </ul>

    <ul class="footer-Social">
      <li>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <div
            class="icon"
            v-html="require('~/assets/images/icon-instagram.svg?include')"
          />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <div
            class="icon"
            v-html="require('~/assets/images/icon-facebook.svg?include')"
          />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <div
            class="icon"
            v-html="require('~/assets/images/icon-twitter.svg?include')"
          />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
          <div
            class="icon"
            v-html="require('~/assets/images/icon-youtube.svg?include')"
          />
        </a>
      </li>
    </ul>
  </footer>
</template>

<style lang="sass" scoped>
@import '~/assets/styles/variables.sass'

.footer
  display: flex
  width: 100%
  max-width: $max-content-width
  border-top: $border
  padding-top: 60px
  padding-top: var(--spacing-three)
  ul
    flex-basis: 25%
    margin-right: 1.25em
    a
      text-decoration: none
  ul:last-child
    margin-right: 0
  &-Social
    li
      display: flex
      justify-content: flex-end
      .icon
        position: relative
        width: 2rem
        height: 2rem
        margin-left: .5rem
        &:first-child
          margin-left: 0
        svg
          position: absolute
          width: 100%
          height: 100%
          object-fit: contain
</style>
