import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    target: '#svelte',
    vite: {
      resolve: {
        alias: {
          $components: resolve('./src/components'),
          $lib: resolve('./src/lib'),
        }
      },
      ssr: {
        external: ['svelte-routing']
      }
    }
  }
};

export default config;
