import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: "/",  // Changed from "/Portfolio/" to "/" for custom domain
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  build: {
    // Enable code splitting for better caching and parallel downloads
    rollupOptions: {
      output: {
        // Split vendor libraries into separate chunks
        manualChunks: {
          // Core vendor chunk
          'vendor-core': ['react', 'react-dom', 'react-router-dom'],
          // Animation libraries
          'vendor-animation': ['framer-motion'],
          // UI libraries
          'vendor-ui': ['lucide-react', 'react-icons'],
          // Utilities
          'vendor-utils': ['react-helmet-async', '@emailjs/browser', 'smooth-scroll']
        }
      }
    },
    // Minify in both modes for smaller bundle
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,  // Remove console logs in production
        drop_debugger: true, // Remove debugger statements
      },
      format: {
        comments: false // Remove comments
      }
    },
    // Optimize CSS
    cssCodeSplit: true,
    sourcemap: false,
    // Chunk size limits warning
    chunkSizeWarningLimit: 1000,
    // Report compressed file size
    reportCompressedSize: true,
  },
  // Development server configuration
  server: {
    middlewareMode: false,
    // Don't set Content-Encoding headers here - let the hosting provider handle compression
    // The 'Content-Encoding' header should only be set by servers that actually compress
  }
});