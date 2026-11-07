<template>
  <v-container class="d-flex flex-column align-center justify-center" style="min-height: 60vh">
    <v-icon size="96" color="grey-lighten-1">mdi-map-marker-off</v-icon>
    <h1 class="text-h4 mt-4">404 — Página no encontrada</h1>
    <p class="text-body-1 text-medium-emphasis mt-2">
      La ruta que buscas no existe.
    </p>
    <v-btn class="mt-6" prepend-icon="mdi-home" color="primary" to="/">
      Volver al inicio
    </v-btn>
  </v-container>
</template>
