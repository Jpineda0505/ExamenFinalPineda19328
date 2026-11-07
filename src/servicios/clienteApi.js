import axios from 'axios'

const clienteApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
})

clienteApi.interceptors.response.use(
  (respuesta) => {
    // Devuelve directamente el payload normalizado del backend
    return respuesta.data
  },
  (error) => {
    const errorNormalizado = {
      mensaje: 'Error de conexion con el servidor',
      errores: [],
    }

    if (error.response?.data) {
      errorNormalizado.mensaje = error.response.data.mensaje ?? errorNormalizado.mensaje
      errorNormalizado.errores = error.response.data.errores ?? []
    } else if (error.request) {
      errorNormalizado.mensaje = 'No se pudo conectar con el servidor'
    }

    return Promise.reject(errorNormalizado)
  }
)

export default clienteApi
