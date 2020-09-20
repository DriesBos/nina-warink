<template>
  <footer class="footer">
    <ul>
      <li>
        <nuxt-link class="footer-Link nonActive" to="/">Nina Warink</nuxt-link>
      </li>
    </ul>
    <ul>
      <li>
        <nuxt-link class="footer-Link" to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link class="footer-Link" to="/blog">Blog</nuxt-link>
      </li>
      <li>
        <nuxt-link class="footer-Link" to="/samenwerken">Samenwerken</nuxt-link>
      </li>
      <li>
        <nuxt-link class="footer-Link" to="/contact">Contact</nuxt-link>
      </li>
    </ul>
    <ul>
      <li>
        <nuxt-link class="footer-Link nonActive" to="/">FAQ</nuxt-link>
      </li>
      <li>
        <nuxt-link class="footer-Link nonActive" to="/"
          >Terms & Conditions</nuxt-link
        >
      </li>
      <li>
        <nuxt-link class="footer-Link nonActive" to="/"
          >Privacy Policy</nuxt-link
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
    a
      text-decoration: none
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
  &-Link
    &.nuxt-link-exact-active
      text-decoration: underline
    &.nonActive.nuxt-link-exact-active
      text-decoration: none
      &:hover
        text-decoration: underline
    &:hover
      text-decoration: underline
</style>
