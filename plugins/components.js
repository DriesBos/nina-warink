import Vue from "vue"
import Page from "~/components/Page.vue"
import Post from "~/components/Post.vue"
import ContainerContent from "~/components/ContainerContent.vue"
import ItemLanding from "~/components/ItemLanding.vue"
import ItemMainlanding from "~/components/ItemMainlanding.vue"
import ItemImages from "~/components/ItemImages.vue"
import ItemInstagram from "~/components/ItemInstagram.vue"
import ItemTitle from "~/components/ItemTitle.vue"
import ItemTitleSmall from "~/components/ItemTitleSmall.vue"
import ItemSubtitle from "~/components/ItemSubtitle.vue"
import ItemTextLarge from "~/components/ItemTextLarge.vue"
import ItemTextNormal from "~/components/ItemTextNormal.vue"
import ItemContactForm from "~/components/ItemContactForm.vue"

Vue.component("blok-page", Page)
Vue.component("blok-post", Post)
Vue.component("blok-container-content", ContainerContent)
Vue.component("blok-item-images", ItemImages)
Vue.component("blok-item-instagram", ItemInstagram)
Vue.component("blok-item-landing", ItemLanding)
Vue.component("blok-item-mainlanding", ItemMainlanding)
Vue.component("blok-item-title", ItemTitle)
Vue.component("blok-item-title-small", ItemTitleSmall)
Vue.component("blok-item-subtitle", ItemSubtitle)
Vue.component("blok-item-text-large", ItemTextLarge)
Vue.component("blok-item-text-normal", ItemTextNormal)
Vue.component("blok-item-contact-form", ItemContactForm)
