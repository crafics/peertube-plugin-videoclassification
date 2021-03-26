async function register ({
  registerHook,
  registerSetting,
  settingsManager,
  storageManager,
  videoCategoryManager,
  videoLicenceManager,
  videoLanguageManager
}) {
  registerSetting({
    name: 'instructions',
    label: 'Instructions',
    type: 'input-textarea',
    private: false
  })
}

async function unregister () {
  return
}

module.exports = {
  register,
  unregister
}
