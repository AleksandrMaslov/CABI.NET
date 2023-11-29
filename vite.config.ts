import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/CABI.NET',
  plugins: [
    react(),
    ViteImageOptimizer({
      // svg: {},
      png: {
        quality: 100,
      },
      jpeg: {
        quality: 100,
      },
      jpg: {
        quality: 100,
      },
      tiff: {
        quality: 100,
      },
      webp: {
        lossless: true,
      },
    }),
  ],
  resolve: {
    alias: {
      src: '/src/',
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: (name, filename) => {
        filename = filename.split('/').slice(-1)[0].split('.')[0]
        filename = `${filename[0].toLowerCase()}${filename.slice(1)}`

        const lowerFilename = filename.toLowerCase()
        const lowerName = name.toLocaleLowerCase()
        if (lowerName.includes(lowerFilename)) return name
        if (lowerFilename === lowerName) return filename

        return `${filename}__${name}`
      },
    },
  },
})
