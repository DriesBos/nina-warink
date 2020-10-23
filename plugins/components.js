import Vue from "vue"
import Page from "~/components/Page.vue"
import PagePost from "~/components/PagePost.vue"
import PageBlog from "~/components/PageBlog.vue"
import PageSamenwerken from "~/components/PageSamenwerken.vue"
import ContainerContent from "~/components/ContainerContent.vue"
import ItemLanding from "~/components/ItemLanding.vue"
import ItemMainlanding from "~/components/ItemMainlanding.vue"
import ItemImages from "~/components/ItemImages.vue"
import ItemInstagram from "~/components/ItemInstagram.vue"
import ItemYoutube from "~/components/ItemYoutube.vue"
import ItemTitle from "~/components/ItemTitle.vue"
import ItemTitleSmall from "~/components/ItemTitleSmall.vue"
import ItemSubtitle from "~/components/ItemSubtitle.vue"
import ItemTextLarge from "~/components/ItemTextLarge.vue"
import ItemTextNormal from "~/components/ItemTextNormal.vue"
import ItemContactForm from "~/components/ItemContactForm.vue"

Vue.component("blok-page", Page)
Vue.component("blok-page-post", PagePost)
Vue.component("blok-page-blog", PageBlog)
Vue.component("blok-page-samenwerken", PageSamenwerken)
Vue.component("blok-container-content", ContainerContent)
Vue.component("blok-item-images", ItemImages)
Vue.component("blok-item-instagram", ItemInstagram)
Vue.component("blok-item-youtube", ItemYoutube)
Vue.component("blok-item-landing", ItemLanding)
Vue.component("blok-item-mainlanding", ItemMainlanding)
Vue.component("blok-item-title", ItemTitle)
Vue.component("blok-item-title-small", ItemTitleSmall)
Vue.component("blok-item-subtitle", ItemSubtitle)
Vue.component("blok-item-text-large", ItemTextLarge)
Vue.component("blok-item-text-normal", ItemTextNormal)
Vue.component("blok-item-contact-form", ItemContactForm)
