<template>
  <div class="utrecht-document utrecht-theme">
    <header>
      <utrecht-logo></utrecht-logo>
    </header>
    <nav class="topnav">
      <ul class="utrecht-topnav__list">
        <li class="utrecht-topnav__item">
          <router-link class="utrecht-topnav__link" to="/">Home</router-link>
        </li>
        <li class="utrecht-topnav__item">
          <router-link class="utrecht-topnav__link" to="/about"
            >About</router-link
          >
        </li>
      </ul>
    </nav>
    <main>
      <router-view />
    </main>
    <utrecht-page-footer>© 2021 Robbert Broersma</utrecht-page-footer>
  </div>
</template>
