<template>
  <footer class="footer">
    <div class="footer-Column_One">
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
        <nuxt-link class="nav-Link nav-Link_NonHome" tag="li" to="/faq">
          <span>FAQ</span>
        </nuxt-link>
        <nuxt-link
          class="nav-Link nav-Link_NonHome"
          tag="li"
          to="/terms-conditions"
        >
          <span>Terms & Conditions</span>
        </nuxt-link>
        <nuxt-link
          class="nav-Link nav-Link_NonHome"
          tag="li"
          to="/privacy-policy"
          ><span>Privacy Policy</span>
        </nuxt-link>
        <li>&nbsp;</li>
        <li class="nav-Link nav-Link_NonHome nav-Link_Colophon">
          <span>
            <a
              href="https://www.newkith.com"
              target="_blank"
              title="Representation by NewKith"
              rel="noreferrer"
            >
              Representation: NewKith
            </a>
          </span>
        </li>
        <li class="nav-Link nav-Link_NonHome nav-Link_Colophon">
          <span>
            <a
              href="https://www.driesbos.com"
              target="_blank"
              title="Site by Dries Bos"
              rel="noreferrer"
            >
              Website: Dries Bos
            </a>
          </span>
        </li>
      </ul>
    </div>
    <div class="footer-Column_Two">
      <ul class="footer-Social">
        <li>
          <a
            :href="`https://${algemeen[0].content.instagram}`"
            target="_blank"
            rel="noreferrer"
          >
            <div
              class="icon"
              title="mijn instagram"
              v-html="require('~/assets/images/icon-instagram.svg?include')"
            />
          </a>
          <a
            :href="`https://${algemeen[0].content.facebook}`"
            target="_blank"
            rel="noreferrer"
          >
            <div
              class="icon"
              title="mijn facebook"
              v-html="require('~/assets/images/icon-facebook.svg?include')"
            />
          </a>
          <a
            :href="`https://${algemeen[0].content.twitter}`"
            target="_blank"
            rel="noreferrer"
          >
            <div
              class="icon"
              title="mijn twitter"
              v-html="require('~/assets/images/icon-twitter.svg?include')"
            />
          </a>
          <a
            :href="`https://${algemeen[0].content.youtube}`"
            target="_blank"
            rel="noreferrer"
          >
            <div
              class="icon"
              title="mijn youtube"
              v-html="require('~/assets/images/icon-youtube.svg?include')"
            />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState({
      algemeen: state => state.algemeen.list
    })
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.footer
  display: flex
  flex-wrap: nowrap
  width: 100%
  max-width: $max-content-width
  border-top: $border
  padding-top: var(--spacing-three)
  // border: 2px solid purple
  li
    text-align: left !important
  &-Column_One
    display: flex
    justify-content: flex-start
    flex-wrap: wrap
    // border: 2px solid green
    @media screen and ( min-width: $breakpoint-mobile)
      flex-grow: 3
    @media screen and ( max-width: $breakpoint-mobile)
      flex-basis: 50%
    ul
      flex-grow: 1
    @media screen and ( max-width: $breakpoint-mobile)
      flex-direction: column
      ul
        margin-bottom: 1.5rem
        &:last-child
          margin-bottom: 0
  &-Column_Two
    // border: 2px solid blue
    @media screen and ( min-width: $breakpoint-mobile)
      flex-grow: 1
    @media screen and ( max-width: $breakpoint-mobile)
      flex-basis: 50%
  ul
    margin-right: 1.25em
  ul:last-child
    margin-right: 0
  &-Social
    li
      display: flex
      justify-content: flex-end
      @media screen and ( max-width: $breakpoint-mobile)
        flex-direction: column
        align-items: center
        a
          padding-top: .165rem
      a
        padding-left: .165rem
        padding-right: .165rem
        padding-bottom: .165rem
        &:first-child
          @media screen and ( min-width: $breakpoint-mobile)
            padding-left: 0
        &:last-child
          @media screen and ( min-width: $breakpoint-mobile)
            padding-left: 0
      .icon
        position: relative
        svg
          // position: absolute
          // width: 100%
          // height: 100%
          width: 1.65rem
          height: 1.65rem
          // object-fit: contain
</style>
