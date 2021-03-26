function register ({ registerHook, peertubeHelpers }) {
peertubeHelpers.showModal({
   title: 'My custom modal title',
   content: '<p>My custom modal content</p>',
   // Optionals parameters :
   // show close icon
   close: true,
   // show cancel button and call action() after hiding modal
   cancel: { value: 'cancel', action: () => {} },
   // show confirm button and call action() after hiding modal
   confirm: { value: 'confirm', action: () => {} },
 })
}

export {
  register
}
