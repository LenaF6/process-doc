<template>
  <div>
    <nav id="navigation">
      <a class="navigation-trigger" href="javascript:void(0);" @click="toggleMenu">{{ menuText }}</a>
    </nav>
    <div id="navigation-overlay" :class="{ show: menuOpen }">
      <div class="v-mid typecontainer">
        <nuxt-link class="navigation-link f-ns f2-nl  tc" @click.native="toggleMenu" to="/">Documentation</nuxt-link>
        <nuxt-link class="navigation-link f-ns f2-nl  tc" @click.native="toggleMenu" to="/about">About</nuxt-link>
      </div>
    </div>
    <div id="__wrapper">
      <div class="f5  moon-gray" style="position: fixed; right:5px; bottom:5px; z-index:-1;">
        webdevelopment: <a class="moon-gray" href="https://alainbrusch.xyz">Alain Brusch</a>
      </div>
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuTextArray: {
        open: "X",
        hidden: "Menü",
      },
      menuOpen: false,
      menuText: "Menü",
    };
  },
  methods: {
    toggleMenu () {
      this.menuOpen = !this.menuOpen;
      this.menuText = this.getMenuText();
    },
    getMenuText () {
      if (this.menuOpen == true) return this.menuTextArray.open;
      return this.menuTextArray.hidden;
    },
  },
};
</script>
