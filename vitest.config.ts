import { defineConfig } from 'vitest/config';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsConfigPaths()],
  test: {
    globals: true,
    coverage: {
      provider: 'v8',
      include: ['**/**/*.spec.ts', '**/**/*.d.spec.ts'],
      exclude: ['**/**/index.ts'],
    },
  },
});
