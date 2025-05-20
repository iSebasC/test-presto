import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

// Definir __dirname manualmente
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        proyecto: resolve(__dirname, 'proyecto.html'),
        crear_proyecto: resolve(__dirname, 'crear_proyecto.html'),
        proyecto_detalle: resolve(__dirname, 'proyecto_detalle.html'),
        notificaciones: resolve(__dirname, 'notificaciones.html'),
        proyecto_inversion: resolve(__dirname, 'proyecto_inversion.html'),
      },
    },
  },
})
