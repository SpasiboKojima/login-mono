import { defineConfig, transformerVariantGroup } from 'unocss';

const config: unknown = defineConfig({
  shortcuts: {
    btn: 'py-2 px-4 b-(1px solid transparent) font-500 text-base cursor-pointer transition-250 outline-none bg-#158DE8 hover:(b-blue-900) light:(active:(bg-blue-800 b-blue-700)) dark:(bg-zinc-900 hover:b-blue-700) disabled:pointer-events-none',
  },
  theme: {
    breakpoints: {
      sm: '424px',
      md: '900px',
    },
  },
  transformers: [transformerVariantGroup()],
});

export default config;
