function accordion(widget) {
  const handles = widget.querySelectorAll('[kjs-role=handle]');
  const drawers = widget.querySelectorAll('[kjs-role=drawer]');

  function handleClick(e) {
    const openId = e.target.getAttribute('kjs-id');

    drawers.forEach((drawer) => {
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

module.exports = accordion;
