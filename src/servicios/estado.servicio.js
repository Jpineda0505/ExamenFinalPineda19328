import clienteApi from './clienteApi.js'

async function obtenerEstadoServidor() {
  return clienteApi.get('/estado')
}

export { obtenerEstadoServidor }
