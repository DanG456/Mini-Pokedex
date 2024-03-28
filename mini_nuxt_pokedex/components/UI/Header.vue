<template>
  <div class="header-container">
    <header class="the-header">
      <div class="home-page">
        <nuxt-link to="/">Mini-Pokedex-Home</nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="options">
        <div class="options-list">
          <ul class="opt-list">
            <li class="option">
              <nuxt-link to="/pokemon_id">Pokemon por ID</nuxt-link>
            </li>
            <li class="option">
              <nuxt-link to="/pokemon_random">Pokemon aleatorio</nuxt-link>
            </li>
            <li class="option">
              <nuxt-link to="/pokemons_range">Pokemons en rango</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>
