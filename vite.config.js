import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Static files live in public/assets (photos, logos, fonts) and are copied to
    // dist/assets verbatim so the relative url() paths in styles.css keep working.
    // Vite's own hashed bundles go to dist/build to stay out of their way.
    assetsDir: 'build',
    target: 'es2018',
  },
});
