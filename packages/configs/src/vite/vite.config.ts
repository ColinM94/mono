import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import { defineConfig, mergeConfig, type UserConfig } from 'vite';
import { resolve } from 'node:path';

export const defineViteConfig = (overrides: UserConfig = {}) => {
  const appRoot = process.cwd();

  const config = defineConfig({
    optimizeDeps: {
      include: ['firebase/app', 'firebase/firestore', 'firebase/auth', 'firebase/storage'],
    },
    build: {
      rolldownOptions: {
        output: {},
      },
    },
    resolve: {
      alias: {
        assets: resolve(appRoot, 'src/assets'),
        components: resolve(appRoot, 'src/components'),
        constants: resolve(appRoot, 'src/constants'),
        hooks: resolve(appRoot, 'src/hooks'),
        inits: resolve(appRoot, 'src/inits'),
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
