import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import { defineConfig, mergeConfig, type UserConfig } from 'vite';
import { resolve } from 'node:path';

export const defineViteConfig = (overrides: UserConfig = {}) => {
  const appRoot = process.cwd();

  const config = defineConfig({
    build: {
      chunkSizeWarningLimit: 1000,
      rolldownOptions: {
        output: {
          codeSplitting: {
            minSize: 20000,
            groups: [
              {
                name: 'react-vendor',
                test: /node_modules[\\/]react/,
                priority: 20,
              },
              {
                name: 'firebase-vendor',
                test: /node_modules[\\/]@firebase/,
                priority: 20,
              },
              {
                name: 'icons-vendor',
                test: /node_modules[\\/]@material-symbols-svg/,
                priority: 20,
              },
              {
                name: 'vendor',
                test: /node_modules/,
                priority: 10,
              },
              {
                name: 'common',
                minShareCount: 2,
                minSize: 10000,
                priority: 5,
              },
            ],
          },
        },
      },
    },
    resolve: {
      alias: {
        assets: resolve(appRoot, 'src/assets'),
        components: resolve(appRoot, 'src/components'),
        constants: resolve(appRoot, 'src/constants'),
        hooks: resolve(appRoot, 'src/hooks'),
        layouts: resolve(appRoot, 'src/layouts'),
        pages: resolve(appRoot, 'src/pages'),
        services: resolve(appRoot, 'src/services'),
        styles: resolve(appRoot, 'src/styles'),
        stores: resolve(appRoot, 'src/stores'),
        types: resolve(appRoot, 'src/types'),
        utils: resolve(appRoot, 'src/utils'),
      },
    },
    publicDir: 'public',
    plugins: [
      react(),
      babel({
        presets: [reactCompilerPreset()],
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "styles/vars.scss";
          `,
        },
      },
    },
  });

  return mergeConfig(config, overrides);
};
