export default {
  plugins: {
    '@fullhuman/postcss-purgecss': process.env.NODE_ENV === 'production'
      ? {
          content: ['./index.html', './assets/js/**/*.js'],
          safelist: ['loading'],
        }
      : false,
  },
}
