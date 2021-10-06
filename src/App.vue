<template>
  <div class="utrecht-document">
    <header>
      <utrecht-logo></utrecht-logo>
    </header>
    <nav class="topnav">
      <ul class="utrecht-topnav__list">
        <li class="utrecht-topnav__item">
          <router-link class="utrecht-topnav__link" to="/">Home</router-link>
        </li>
        <li class="utrecht-topnav__item">
          <router-link class="utrecht-topnav__link" to="/about">About</router-link>
        </li>
        <li class="utrecht-topnav__item">
          <router-link class="utrecht-topnav__link" to="/login">Login</router-link>
        </li>
        <li class="utrecht-topnav__item">
          <router-link class="utrecht-topnav__link" to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
    <main>
      <router-view />
    </main>
    <utrecht-page-footer>
      <p>© 2021 Robbert Broersma</p>
      <div>
        <nl-theme-switcher></nl-theme-switcher>
      </div>
    </utrecht-page-footer>
  </div>
</template>

<script>
import { UtrechtLogo, UtrechtPageFooter } from "@utrecht/web-component-library-vue";

export default {
  components: {
    "utrecht-logo": UtrechtLogo,
    "utrecht-page-footer": UtrechtPageFooter,
  },
};
</script>
