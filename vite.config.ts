import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {fileURLToPath} from 'node:url';
export default defineConfig({plugins:[react()],resolve:{alias:{'@':fileURLToPath(new URL('.',import.meta.url))},dedupe:['react','react-dom']},build:{outDir:'dist-static',emptyOutDir:true},server:{port:5173},preview:{port:4173}});
