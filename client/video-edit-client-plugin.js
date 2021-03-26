async function register ({ registerVideoField, peertubeHelpers }) {
  const commonOptions = {
    name: 'my-field-name',
    label: 'My added field',
    descriptionHTML: 'Optional description',
    type: 'select-options',
    default: ''
  }

  for (const type of [ 'upload', 'import-url', 'import-torrent', 'update' ]) {
    registerVideoField(commonOptions, { type })
  }
}

export {
  register
}
