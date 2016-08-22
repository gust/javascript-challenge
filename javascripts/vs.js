const VS = {
  index: {},

  initializeWidgets(widgetIndex) {
    this.index = widgetIndex;
    const widgets = document.querySelectorAll('[vs-type]');

    widgets.forEach((widget) => {
      const widgetObject = this.index[widget.getAttribute('vs-type')];
      widgetObject.initialize(widget);
    });
  },
};

module.exports = VS;
