import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/",  // <-- change this from "/" to "/Portfolio/"
  resolve: {
    extensions: ['.js', '.jsx'],
  },
});