import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const TEMA_CLARO = {
  dark: false,
  colors: {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    surface: '#FFFFFF',
    background: '#F5F5F5',
  },
}

const TEMA_OSCURO = {
  dark: true,
  colors: {
    primary: '#90CAF9',
    secondary: '#B0BEC5',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#64B5F6',
    success: '#81C784',
    warning: '#FFD54F',
    surface: '#1E1E1E',
    background: '#121212',
  },
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'temaClaro',
    themes: {
      temaClaro: TEMA_CLARO,
      temaOscuro: TEMA_OSCURO,
    },
  },
  icons: {
    defaultSet: 'mdi',
  },
})
