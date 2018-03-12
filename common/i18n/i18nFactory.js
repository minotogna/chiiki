const i18next = require('i18next')
const Promise = require('bluebird')

const jpTranslation = require('./resources/jp')
const enTranslation = require('./resources/en')

const createParams = lang => ({
  fallbackLng: 'en',
  debug: false,

  // react i18next special options (optional)
  react: {
    wait: false, // set to true if you like to wait for loaded in every translated hoc
    nsMode: 'default' // set it to fallback to let passed namespaces to translated hoc act as fallbacks
  },
  lng: lang,
  resources: {
    jp: {
      translation: jpTranslation
    },
    en: {
      translation: enTranslation
    }
  }
})

const createI18nInstance = (lang, callback) =>
  i18next.createInstance(
    createParams(lang),
    (err, t) => callback({language: lang, t})
  )

const createI18nPromise = (lang) => {
  return new Promise((resolve, reject) => {
    i18next.createInstance(
      createParams(lang),
      (err, t) => {
        if (err)
          reject(err)

        resolve({language: lang, t})
      })
  })
}

module.exports = {
  createI18nInstance,
  createI18nPromise
}
