<template>
  <div id="nav">
    <router-link to="/">Inicio</router-link> | 
    <router-link to="/pokemon_ID">Obtener por ID</router-link> | 
    <router-link to="/pokemon_range">Obtener en rango</router-link> | 
    <router-link to="/getRandom">Obtener aleatorio</router-link> | 
  </div>
  
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
</style>
