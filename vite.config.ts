import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [react()],

  // Empêche vite d'effacer les erreurs Rust dans la console lors du dev
  clearScreen: false,

  // Configuration du serveur de développement requise pour Tauri
  server: {
    port: 1420, // Port standard que Tauri écoute
    strictPort: true, // Force l'utilisation de ce port, échec si non dispo
    watch: {
      // Demande à Vite d'ignorer les changements dans le dossier Rust
      // pour éviter les rechargements inutiles du frontend.
      ignored: ['**/src-tauri/**']
    }
  }
}))
