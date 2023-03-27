import { defineConfig } from 'vite'

export default defineConfig(({ command, mode, ssrBuild }) => {
    return {
        base: mode === 'development' ? '/' : '/rubiks-viz/',
        minify: false,
    };
});