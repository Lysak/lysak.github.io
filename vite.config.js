import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'assets/certifications', dest: 'assets' },
        { src: 'assets/cv', dest: 'assets' },
        { src: 'assets/resume', dest: 'assets' },
{ src: 'robots.txt', dest: '' },
        { src: '404.html', dest: '' },
        { src: 'SECURITY.md', dest: '' },
        { src: '.nojekyll', dest: '' },
      ],
    }),
  ],
})
