import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';

export default {
    input: 'src/index.ts',
    output: {
        dir: './dist',
        entryFileNames: `[name].js`,
        format: 'esm',
    },
    plugins: [typescript(), terser(), json()],
};
