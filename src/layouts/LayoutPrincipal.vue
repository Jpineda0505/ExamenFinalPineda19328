<template>
  <v-app :theme="nombreTema">
    <v-navigation-drawer v-model="estaDrawerAbierto" :rail="estaDrawerCompacto" permanent>
      <v-list-item
        prepend-icon="mdi-layers"
        title="frontFinal"
        nav
      >
        <template #append>
          <v-btn
            :icon="estaDrawerCompacto ? 'mdi-chevron-right' : 'mdi-chevron-left'"
            variant="text"
            @click="estaDrawerCompacto = !estaDrawerCompacto"
          />
        </template>
      </v-list-item>

      <v-divider />

      <v-list density="compact" nav>
        <v-list-item
          v-for="opcion in OPCIONES_MENU"
          :key="opcion.ruta"
          :prepend-icon="opcion.icono"
          :title="opcion.titulo"
          :to="opcion.ruta"
          rounded="lg"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar elevation="1">
      <v-app-bar-nav-icon @click="estaDrawerAbierto = !estaDrawerAbierto" />
      <v-app-bar-title>frontFinal</v-app-bar-title>
      <template #append>
        <v-btn
          :icon="temaOscuro ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          variant="text"
          @click="alAlternarTema"
        />
      </template>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-snackbar
      v-model="estaVisible"
      :color="colorActual"
      :timeout="DURACION_MS"
      location="bottom right"
    >
      {{ mensajeActual }}
      <template #actions>
        <v-btn variant="text" @click="cerrar">Cerrar</v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTheme } from 'vuetify'
import { storeToRefs } from 'pinia'
import { useAplicacionAlmacen } from '../almacenes/aplicacion.almacen.js'
import { useNotificacion } from '../composables/useNotificacion.js'
import { OPCIONES_MENU } from '../configuracion/menu.js'

const almacenApp = useAplicacionAlmacen()
const { temaOscuro } = storeToRefs(almacenApp)
const tema = useTheme()

const { estaVisible, mensajeActual, colorActual, DURACION_MS, cerrar } = useNotificacion()

const estaDrawerAbierto = ref(true)
const estaDrawerCompacto = ref(false)

const nombreTema = computed(() => (temaOscuro.value ? 'temaOscuro' : 'temaClaro'))

function alAlternarTema() {
  almacenApp.alternarTema()
  tema.global.name.value = nombreTema.value
}
</script>
