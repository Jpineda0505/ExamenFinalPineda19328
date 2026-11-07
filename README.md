# frontFinal

Frontend Vue 3 + Vite que consume la API REST **backFinal** (Express).
Desplegado en **Azure Static Web Apps**.

---

## Requisitos previos

- Node.js 18 +
- backFinal corriendo en `http://localhost:3000`

---

## Correr en local

```bash
# 1. Copiar variables de entorno
cp .env.example .env

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

La app queda disponible en `http://localhost:5173`.

---

## Build de produccion

```bash
npm run build   # genera la carpeta dist/
```

---

## Despliegue en Azure Static Web Apps

Azure genera automaticamente el workflow de GitHub Actions al crear el recurso.
En ese workflow, **agrega `VITE_API_URL` como variable de entorno en el paso de build**:

```yaml
- name: Build And Deploy
  uses: Azure/static-web-apps-deploy@v1
  with:
    app_location: "/"
    output_location: "dist"
  env:
    VITE_API_URL: ${{ secrets.VITE_API_URL }}
```

Luego crea el secreto `VITE_API_URL` en
**GitHub -> Settings -> Secrets and variables -> Actions**
con la URL de produccion de backFinal, por ejemplo:
`https://mi-backend.azurewebsites.net/api`

---

## Estructura del proyecto

```
src/
  main.js
  App.vue
  plugins/vuetify.js              Tema claro/oscuro
  enrutador/index.js              Rutas con lazy loading
  almacenes/aplicacion.almacen.js Estado global (carga, tema)
  servicios/clienteApi.js         Axios + interceptores
  servicios/estado.servicio.js    GET /estado
  composables/useNotificacion.js  Snackbar global
  configuracion/menu.js           Opciones del menu lateral
  layouts/LayoutPrincipal.vue     App-bar + drawer + snackbar
  vistas/VistaInicio.vue          Estado del servidor y BD
  vistas/VistaNoEncontrada.vue    404
public/
  staticwebapp.config.json        navigationFallback para SPA
```
