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
      // generateScopedName: '[name]__[local]___[hash:base64:5]',
      generateScopedName: (name, filename) => {
        const hashCode = (str: string) =>
          [...str].reduce((s, c) => (Math.imul(31, s) + c.charCodeAt(0)) | 0, 0)
        const sufix = String(Math.abs(hashCode(filename))).slice(0, 5)

        filename = filename.split('/').slice(-1)[0].split('.')[0]
        filename = `${filename[0].toLowerCase()}${filename.slice(1)}`

        const lowerFilename = filename.toLowerCase()
        const lowerName = name.toLocaleLowerCase()

        if (lowerName.includes(lowerFilename)) return `${name}__${sufix}`
        if (lowerFilename === lowerName) return `${filename}__${sufix}`
        return `${filename}__${name}___${sufix}`
      },
    },
  },
})
