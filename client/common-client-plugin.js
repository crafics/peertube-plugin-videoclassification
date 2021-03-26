async function register ({ registerVideoField, peertubeHelpers }) {
  const descriptionHTML = await peertubeHelpers.translate(descriptionSource)
  const commonOptions = {
    name: 'my-field-name',
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
