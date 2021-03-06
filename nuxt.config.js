const axios = require("axios")
import dotenv from "dotenv"
dotenv.config()

module.exports = {
  target: "static",
  // Variables for use in components
  env: {
    YOUTUBEKEY: process.env.YOUTUBEKEY,
    INSTAGRAMKEY: process.env.INSTAGRAMKEY
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "Nina Warink", // Change in package.json files
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "✨ NIET GENOTEN, ALTIJD MIS" // Change in package.json files
      },
      {
        name: "mobile-web-app-capable",
        content: "yes"
      },
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent"
      }
    ],
    link: [
      {
        id: "favicon",
        rel: "icon",
        type: "image/png",
        href: "/favicon.png"
      }
    ]
  },

  loading: false,

  components: true,

  css: [
    "@/assets/styles/reset.css",
    "@/assets/styles/form-reset.css",
    "@/assets/styles/transitions.sass",
    "@/assets/styles/variables.sass",
    "@/assets/styles/typography.sass",
    "@/assets/styles/body.sass"
  ],

  plugins: [
    "~/plugins/components",
    "~/plugins/filters",
    "~/plugins/vue-lazyload"
  ],

  modules: [
    "@nuxtjs/axios",
    "vue-scrollto/nuxt",
    [
      "storyblok-nuxt",
      {
        accessToken:
          process.env.NODE_ENV == "production"
            ? process.env.PUBLICKEY
            : process.env.PREVIEWKEY,
        cacheProvider: "memory"
      }
    ]
  ],

  generate: {
    routes: function(callback) {
      const token = process.env.PUBLICKEY
      const version = "published"
      let cache_version = 0

      let toIgnore = ["home", "en/settings"]

      // other routes that are not in Storyblok with their slug.
      let routes = ["/"] // adds / directly

      // Load space and receive latest cache version key to improve performance
      axios
        .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
        .then(space_res => {
          // timestamp of latest publish
          cache_version = space_res.data.space.version

          // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
          axios
            .get(
              `https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}&per_page=100`
            )
            .then(res => {
              Object.keys(res.data.links).forEach(key => {
                if (!toIgnore.includes(res.data.links[key].slug)) {
                  routes.push("/" + res.data.links[key].slug)
                }
              })

              callback(null, routes)
            })
        })
    },
    fallback: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
      config.node = {
        fs: "empty"
      }
    },
    // Transpile GSAP for server side rendering
    transpile: ["gsap"]
  },
  buildModules: [
    "@nuxtjs/dotenv",
    [
      "@nuxtjs/pwa",
      {
        icon: false // disables the icon module due dynamic favicon
      }
    ],
    [
      "@aceforth/nuxt-optimized-images",
      {
        optimizedImages: {
          optimizeImages: true
        }
      }
    ]
    // [
    //   "@nuxtjs/google-analytics",
    //   {
    //     id: process.env.GA_ID
    //   }
    // ]
  ]
}
