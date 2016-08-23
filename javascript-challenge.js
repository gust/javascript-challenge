(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function runSetup(widget) {
  if (widget.setup) {
    widget.setup();
  };
};

function setListeners(widget) {
  widget.actions.forEach(function (action) {
    action.element.addEventListener(action.event, action.handler);
  });
};

function kjs(constructors, page) {
  var widgetElements = page.querySelectorAll('[kjs-type]');

  widgetElements.forEach(function (el) {
    var widgetName = el.getAttribute('kjs-type');
    var widget = constructors[widgetName](el);

    runSetup(widget);
    setListeners(widget);
  });
};

module.exports = kjs;

},{}],2:[function(require,module,exports){
'use strict';

var _k = require('./k');

var _k2 = _interopRequireDefault(_k);

var _drawers = require('./widgets/drawers');

var _drawers2 = _interopRequireDefault(_drawers);

var _extendingForm = require('./widgets/extending-form');

var _extendingForm2 = _interopRequireDefault(_extendingForm);

var _tabs = require('./widgets/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  (0, _k2.default)({ drawers: _drawers2.default, extendingForm: _extendingForm2.default, tabs: _tabs2.default }, document);
});

},{"./k":1,"./widgets/drawers":3,"./widgets/extending-form":4,"./widgets/tabs":5}],3:[function(require,module,exports){
'use strict';

function accordion(widget) {
  var handles = widget.querySelectorAll('[kjs-role=handle]');
  var drawers = widget.querySelectorAll('[kjs-role=drawer]');

  function handleClick(e) {
    var openId = e.target.getAttribute('kjs-id');

    drawers.forEach(function (drawer) {
      if (drawer.getAttribute('kjs-handle-id') == openId) {
        drawer.classList.toggle('open');
      } else {
        drawer.classList.remove('open');
      }
    });
  }

  var actions = [];
  handles.forEach(function (handle) {
    actions.push({
      element: handle,
      event: 'click',
      handler: handleClick
    });
  });

  return { actions: actions };
}

module.exports = accordion;

},{}],4:[function(require,module,exports){
'use strict';

function extendingForm(widget) {
  var extensions = widget.querySelectorAll('[kjs-role=extension]');
  var toggle = widget.querySelector('[kjs-role=toggle]');

  function setup() {
    extensions.forEach(function (extension) {
      if (toggle.value == extension.getAttribute('kjs-trigger')) {
        extension.classList.add('reveal');
      } else {
        extension.classList.remove('reveal');
      }
    });
  }

  var actions = [{
    element: toggle,
    event: 'change',
    handler: setup
  }];

  return { setup: setup, actions: actions };
}

module.exports = extendingForm;

},{}],5:[function(require,module,exports){
'use strict';

function tabs(widget) {
  var contents = widget.querySelectorAll('[kjs-role=content]');
  var tabs = widget.querySelectorAll('[kjs-role=tab]');

  function setup() {
    var activeTab = widget.querySelector('.active[kjs-role=tab]');

    contents.forEach(function (content) {
      if (activeTab.getAttribute('kjs-id') == content.getAttribute('kjs-tab-id')) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  }

  function handleTabClick(e) {
    tabs.forEach(function (tab) {
      tab.classList.remove('active');
    });
    e.target.classList.add('active');
    setup();
  }

  var actions = [];

  tabs.forEach(function (tab) {
    actions.push({
      element: tab,
      event: 'click',
      handler: handleTabClick
    });
  });

  return { setup: setup, actions: actions };
}

module.exports = tabs;

},{}]},{},[2]);
