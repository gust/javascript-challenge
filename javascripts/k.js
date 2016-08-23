function runSetup(widget) {
  if (widget.setup) { widget.setup(); };
};

function setListeners(widget) {
  widget.actions.forEach((action) => {
    action.element.addEventListener(action.event, action.handler);
  });
};

function kjs(constructors, page) {
  const widgetElements = page.querySelectorAll('[kjs-type]');

  widgetElements.forEach((el) => {
    const widgetName = el.getAttribute('kjs-type')
    const widget = constructors[widgetName](el);

    runSetup(widget);
    setListeners(widget);
  });
};

module.exports = kjs;
