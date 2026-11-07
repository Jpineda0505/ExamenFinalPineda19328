import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useTheme } from 'vuetify'

export const useAplicacionAlmacen = defineStore('aplicacion', () => {
  const estaCargando = ref(false)
  const temaOscuro = ref(false)

  function activarCarga() {
    estaCargando.value = true
  }

  function desactivarCarga() {
    estaCargando.value = false
  }

  function alternarTema() {
    temaOscuro.value = !temaOscuro.value
  }

  return { estaCargando, temaOscuro, activarCarga, desactivarCarga, alternarTema }
})
