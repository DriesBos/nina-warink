<template>
  <div class="page page-Error">
    <!-- <section class="section subSection section-Landing title small">
      <h1>Oops!</h1>
    </section>
    <section class="section section-Content">
      <div class="subSection subSection-TextLarge textLarge">
        <p>
          Deze pagina bestaat niet. Bekijk mijn blog of ga terug naar de
          homepage.
        </p>
      </div>
    </section> -->
    <p>oops</p>
  </div>
</template>

<script>
export default {
  // layout: "default", // you can set a custom layout for the error page
  mounted() {
    console.log("ERROR PAGE")
  },
  head() {
    return {
      title: "Oops! — Deze pagina bestaat niet."
    }
  }
}
</script>
