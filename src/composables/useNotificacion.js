import { ref } from 'vue'

const estaVisible = ref(false)
const mensajeActual = ref('')
const colorActual = ref('success')
const DURACION_MS = 3500

function mostrarExito(mensaje) {
  mensajeActual.value = mensaje
  colorActual.value = 'success'
  estaVisible.value = true
}

function mostrarError(mensaje) {
  mensajeActual.value = mensaje
  colorActual.value = 'error'
  estaVisible.value = true
}

function cerrar() {
  estaVisible.value = false
}

export function useNotificacion() {
  return { estaVisible, mensajeActual, colorActual, DURACION_MS, mostrarExito, mostrarError, cerrar }
}
