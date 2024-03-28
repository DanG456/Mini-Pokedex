<template>
  <div class="error-page">
    <h1>Hubo un error en el sitio</h1>
    <p>Por favor intente de nuevo</p>
    <p>Volver a la pagina de <a href="/">"inicio"</a></p>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: rgb(245, 142, 69);
}
</style>
