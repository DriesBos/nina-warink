<template>
  <main>
    <LazyTheNavigation />
    <transition name="pages" mode="out-in">
      <nuxt />
    </transition>
    <LazyTheFooter />
  </main>
</template>

<script>
import lazyLoadComponents from "@/mixins/lazyLoadComponents"
import pageLoadFunctions from "@/mixins/pageLoadFunctions"

export default {
  mixins: [lazyLoadComponents, pageLoadFunctions]
}
</script>
