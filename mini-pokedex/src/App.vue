<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Inicio</router-link> 
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/pokemon_ID">Obtener por ID</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/pokemon_range">Obtener en rango</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/getRandom">Obtener aleatorio</router-link>
      </li>
    </ul>
  </div>
</nav>
  <router-view></router-view>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; 
}
.navbar {
  padding-inline-start: 50px;
}
</style>
