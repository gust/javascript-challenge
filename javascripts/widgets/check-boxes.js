function checkBoxes(widget) {
  const masterCheckbox = widget.querySelector('[kjs-role=master]');
  const checkBoxes = widget.querySelectorAll('[kjs-role=drawer]');

  function handleClick(e) {
    const openId = e.target.getAttribute('kjs-id');

    checkBoxes.forEach((drawer) => {
      if (drawer.getAttribute('kjs-handle-id') == openId) {
        drawer.classList.toggle('open');
      } else {
        drawer.classList.remove('open');
      }
    });
  }

  let actions = [];
  handles.forEach((handle) => {
    actions.push({
      element: handle,
      event: 'click',
      handler: handleClick
    });
  });

  return { actions: actions };
}

module.exports = checkBoxes;
