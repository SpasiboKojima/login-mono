import { defineConfig, transformerVariantGroup } from 'unocss';

const config: unknown = defineConfig({
  theme: {
    breakpoints: {
      sm: '424px',
      md: '900px',
    },
  },
  transformers: [transformerVariantGroup()],
});

export default config;
