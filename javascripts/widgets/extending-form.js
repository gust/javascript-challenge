const extendingForm = {
  initialize(widget) {
    const extensions = widget.querySelectorAll('[vs-role=extension]');
    const toggle = widget.querySelector('[vs-role=toggle]');

    function dependentHide() {
      extensions.forEach((extension) => {
        if (toggle.value == extension.getAttribute('vs-trigger')) {
          extension.classList.add('reveal');
        } else {
          extension.classList.remove('reveal');
        }
      });
    }

    dependentHide();

    toggle.addEventListener('change', (toggle) => {
      dependentHide();
    });
  }
};

module.exports = extendingForm;
