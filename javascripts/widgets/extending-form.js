function extendingForm(widget) {
  const extensions = widget.querySelectorAll('[kjs-role=extension]');
  const toggle = widget.querySelector('[kjs-role=toggle]');

  function setup() {
    extensions.forEach((extension) => {
      if (toggle.value == extension.getAttribute('kjs-trigger')) {
        extension.classList.add('reveal');
      } else {
        extension.classList.remove('reveal');
      }
    });
  }

  const actions = [{
    element: toggle,
    event: 'change',
    handler: setup
  }];

  return { setup, actions };
}

module.exports = extendingForm;
