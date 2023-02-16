function runSetup(widget) {
  if (widget.setup) {
    widget.setup();
  }
}

function setListeners(widget) {
  widget.actions.forEach((action) => {
    action.element.addEventListener(action.event, action.handler);
  });
}

function kjs(constructors, page) {
  const widgetElements = page.querySelectorAll('[kjs-type]');
  // console.log('widget elements', widgetElements);
  // console.log('constructors', constructors);

  widgetElements.forEach((el) => {
    // console.log('elements', el);
    const widgetName = el.getAttribute('kjs-type');
    const widget = constructors[widgetName](el);

    runSetup(widget);
    setListeners(widget);
  });
}

module.exports = kjs;
