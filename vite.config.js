import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Absolute asset URLs also work when opening a nested page directly.
export default defineConfig({ plugins: [react()], base: '/' });
