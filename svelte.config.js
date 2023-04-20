import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {
    kit: {
        adapter: adapter({
            // default options are shown
            pages: 'build',
            assets: 'build',
            fallback: null
        }),
        target: '#svelte',
        vite: {
            plugins: [],
        },
        ssr: {
            noExternal: Object.keys(pkg.dependencies || {}),
        },
    },

    preprocess: preprocess(),
};

export default config;
