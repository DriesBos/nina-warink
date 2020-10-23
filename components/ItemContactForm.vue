<template>
  <section v-editable="blok" class="subSection subSection-Contact">
    <!-- prettier-ignore -->
    <form
      name="contact"
      method="post"
      action="/succes"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" required name="name" placeholder="Je naam" />
      <input type="text" required name="email" placeholder="Email" />
      <textarea type="text" required name="message" rows="3" placeholder="Je bericht.." />
      <input type="submit" value="Verstuur!" title="Verstuur bericht"/>
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
      box-sizing: border-box
      display: flex
      flex-direction: column
      align-items: flex-end
      input, textarea
        display: block
        margin-bottom: 2.5rem
        padding: .5rem 2.5rem
        text-align: left
        font-family: 'Shrikhand'
        line-height: 1.5
        font-size: 2rem
        color: white
        border: $border
        border-radius: .1em
      input::placeholder, textarea::placeholder
        color: white
        width: 100% !important
        max-width: 100% !important
      input::focus, textarea::focus
        color: white
      input[type=text], textarea
        width: calc(100% - 5rem) !important
        max-width: 100% !important
      input[type=submit]
        transition: all .33s ease-in-out
        cursor: pointer
        &:hover
          background: white
          color: rgb(192, 201, 229)
</style>
