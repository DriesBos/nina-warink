export const state = () => ({
  cacheVersion: ""
})

export const mutations = {
  setCacheVersion(state, version) {
    state.cacheVersion = version
  }
}

export const actions = {
  loadCacheVersion({ commit }) {
    return this.$storyapi.get(`cdn/spaces/me`).then(res => {
      commit("setCacheVersion", res.data.space.version)
    })
  }
}

export default {
  actions: {
    async nuxtServerInit({ commit }, { app }) {
      let getAlgemeen = await app.$storyapi.get("cdn/stories", {
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        starts_with: "algemeen/"
      })
      let algemeen = getAlgemeen.data.stories.map(bp => {
        return {
          content: bp.content
        }
      })
      commit("algemeen/update", algemeen)

      let getPosts = await app.$storyapi.get("cdn/stories", {
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        starts_with: "blog/"
      })
      let posts = getPosts.data.stories.map(bp => {
        return {
          content: bp,
          published: bp.first_published_at,
          created: bp.created_at
        }
      })
      commit("posts/update", posts)

      let getSamenwerken = await app.$storyapi.get("cdn/stories", {
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        starts_with: "samenwerken/"
      })
      let samenwerken = getSamenwerken.data.stories.map(bp => {
        return {
          content: bp,
          published: bp.first_published_at,
          created: bp.created_at
        }
      })
      commit("samenwerken/update", samenwerken)
    }
  }
}
