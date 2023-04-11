const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:/Users/flexmobile/Documents/app-release.apk',
      DesiredeCapabilities: {
        appPackage: 'com.qazando',
        appActivity: 'MainActivity',
        device: 'Pixel 2',
        platformVersion: '9'

      }
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./pages/login_page.js"
  },
  name: 'qazando-automaçao',
  translation: 'pt-BR'
}