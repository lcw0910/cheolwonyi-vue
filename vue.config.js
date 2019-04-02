var path = require('path');
module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'ko',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  css: {
    loaderOptions: {
      sass: {
        includePaths: [
            path.resolve(__dirname, 'src/styles')
        ]
      }
    }
  }
}
