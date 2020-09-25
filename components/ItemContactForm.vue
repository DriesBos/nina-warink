<template>
  <section v-editable="blok" class="subSection subSection-Contact">
    <!-- prettier-ignore -->
    <form
      name="contact"
      method="post"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" required name="name" placeholder="naam" />
      <input type="text" required name="email" placeholder="email" />
      <input type="text" required name="message" placeholder="bericht" />
      <div class="subSection-Contact_Send">
        <input type="submit" value="verstuur" title="verstuur je bericht!"/>
        <div
          class="subSection-Contact_Send_Arrow icon"
          v-html="require('~/assets/images/contact-arrow.svg?include')"
        />
      </div>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    // console.log("ITEM TITLE", this.blok)
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.subSection
  &-Contact
    form
      display: flex
      flex-direction: column
      input
        margin-bottom: var(--spacing-two)
        text-align: left
        font-family: 'Avenir Regular',Helvetica, Arial, sans-serif
        line-height: 1.5
        font-size: 2rem
        color: white
      input::placeholder
        color: white
      input::focus
        color: white
      input[type=text]
        border-bottom: $border
    &_Send
      display: flex
      justify-content: flex-end
      input
        margin-bottom: 0 !important
        cursor: pointer
      &_Arrow
        width: 5rem
        height: auto
        color: white
        margin-left: 1rem
        transform: translateY(.66rem)
</style>
