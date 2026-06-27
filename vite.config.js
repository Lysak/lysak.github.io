import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        privacyPolicy: 'privacy-policy/index.html',
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'assets/certifications', dest: 'assets' },
        { src: 'assets/cv', dest: 'assets' },
        { src: 'assets/resume', dest: 'assets' },
        { src: 'robots.txt', dest: '' },
        { src: 'sitemap.xml', dest: '' },
        { src: '404.html', dest: '' },
        { src: 'SECURITY.md', dest: '' },
        { src: '.nojekyll', dest: '' },
      ],
    }),
  ],
})
