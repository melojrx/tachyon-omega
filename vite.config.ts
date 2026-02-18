import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    // Alerta quando um chunk ultrapassar 400 KB
    chunkSizeWarningLimit: 400,

    rollupOptions: {
      output: {
        // Divide o bundle em chunks menores e cacheáveis
        manualChunks: {
          // Roteamento (muda junto com features, não com o core)
          'vendor-router': ['react-router-dom'],

          // SEO (pequeno, separado para não poluir o vendor principal)
          'vendor-seo': ['react-helmet-async'],

          // Ícones (maior biblioteca, isola bem)
          'vendor-icons': ['lucide-react'],
        },
      },
    },

    // Minificação com esbuild (padrão Vite, mais rápido que terser)
    minify: 'esbuild',

    // Habilita source maps apenas em dev — zero peso em produção
    sourcemap: false,

    // CSS em arquivo separado para carregamento paralelo
    cssCodeSplit: true,
  },
})
