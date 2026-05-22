import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.bandjexteriors.com',
  integrations: [tailwind()],
});
