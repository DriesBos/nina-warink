<template>
  <div class="page page-Error">
    <div id="pageComponent" class="section section-Wrapper">
      <section class="section subSection section-Landing title small">
        <h1>Oops!</h1>
      </section>
      <section class="section section-Content">
        <div class="subSection subSection-TextLarge textLarge">
          <div class="markdown">
            <p>
              Deze pagina bestaat niet. Bekijk mijn
              <nuxt-link to="/blog">blog</nuxt-link> of ga terug naar de
              <nuxt-link to="/">homepage</nuxt-link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default", // you can set a custom layout for the error page
  head() {
    return {
      title: "Oops! — Deze pagina bestaat niet."
    }
  }
}
</script>
