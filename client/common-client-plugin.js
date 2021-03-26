async function register ({ registerVideoField, peertubeHelpers }) {
  const commonOptions = {
    name: 'my-field-name-1',
    label: 'My added field',
    descriptionHTML: 'Optional description',
    type: 'input-textarea',
    default: ''
  }

  for (const type of [ 'upload', 'import-url', 'import-torrent', 'update' ]) {
    registerVideoField(commonOptions, { type })
  }
}

export {
  register
}
