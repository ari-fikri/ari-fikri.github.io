import { defineConfig } from 'next/config';

export default defineConfig({
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_TINA_URL: process.env.NEXT_PUBLIC_TINA_URL,
    NEXT_PUBLIC_TINA_TOKEN: process.env.NEXT_PUBLIC_TINA_TOKEN,
  },
});
