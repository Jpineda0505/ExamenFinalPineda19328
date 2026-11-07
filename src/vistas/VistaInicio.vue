<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-title class="text-h5">Estado del sistema</v-card-title>
        <v-card-text>
          <div v-if="estaCargando" class="d-flex justify-center pa-6">
            <v-progress-circular indeterminate color="primary" />
          </div>

          <v-row v-else>
            <v-col cols="12" sm="6">
              <div class="d-flex align-center ga-3">
                <span class="text-subtitle-1">Servidor:</span>
                <v-chip
                  :color="colorServidor"
                  :prepend-icon="iconoServidor"
                  variant="tonal"
                >
                  {{ etiquetaServidor }}
                </v-chip>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <div class="d-flex align-center ga-3">
                <span class="text-subtitle-1">Base de datos:</span>
                <v-chip
                  :color="colorBaseDatos"
                  :prepend-icon="iconoBaseDatos"
                  variant="tonal"
                >
                  {{ etiquetaBaseDatos }}
                </v-chip>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn
            prepend-icon="mdi-refresh"
            variant="tonal"
            color="primary"
            :loading="estaCargando"
            @click="cargarEstado"
          >
            Actualizar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { obtenerEstadoServidor } from '../servicios/estado.servicio.js'
import { useNotificacion } from '../composables/useNotificacion.js'

const { mostrarError } = useNotificacion()

const estaCargando = ref(false)
const estadoServidor = ref(null)
const estadoBaseDatos = ref(null)

const ESTADO_ACTIVO = 'activo'
const ESTADO_CONECTADA = 'conectada'

const colorServidor = computed(() =>
  estadoServidor.value === ESTADO_ACTIVO ? 'success' : 'error'
)
const iconoServidor = computed(() =>
  estadoServidor.value === ESTADO_ACTIVO ? 'mdi-check-circle' : 'mdi-close-circle'
)
const etiquetaServidor = computed(() => estadoServidor.value ?? 'Sin datos')

const colorBaseDatos = computed(() =>
  estadoBaseDatos.value === ESTADO_CONECTADA ? 'success' : 'error'
)
const iconoBaseDatos = computed(() =>
  estadoBaseDatos.value === ESTADO_CONECTADA ? 'mdi-database-check' : 'mdi-database-off'
)
const etiquetaBaseDatos = computed(() => estadoBaseDatos.value ?? 'Sin datos')

async function cargarEstado() {
  estaCargando.value = true
  try {
    const respuesta = await obtenerEstadoServidor()
    estadoServidor.value = respuesta.datos?.servidor ?? respuesta.servidor ?? null
    estadoBaseDatos.value = respuesta.datos?.baseDatos ?? respuesta.baseDatos ?? null
  } catch (error) {
    mostrarError(error.mensaje ?? 'No se pudo obtener el estado del servidor')
    estadoServidor.value = 'error'
    estadoBaseDatos.value = 'sin conexion'
  } finally {
    estaCargando.value = false
  }
}

onMounted(cargarEstado)
</script>
