(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function runSetup(widget) {
  if (widget.setup) {
    widget.setup();
  }
  ;
}
;
function setListeners(widget) {
  widget.actions.forEach(function (action) {
    action.element.addEventListener(action.event, action.handler);
  });
}
;
function kjs(constructors, page) {
  var widgetElements = page.querySelectorAll('[kjs-type]');
  widgetElements.forEach(function (el) {
    var widgetName = el.getAttribute('kjs-type');
    var widget = constructors[widgetName](el);
    runSetup(widget);
    setListeners(widget);
  });
}
;
module.exports = kjs;

},{}],2:[function(require,module,exports){
"use strict";

var _k = _interopRequireDefault(require("./k"));
var _drawers = _interopRequireDefault(require("./widgets/drawers"));
var _extendingForm = _interopRequireDefault(require("./widgets/extending-form"));
var _tabs = _interopRequireDefault(require("./widgets/tabs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
document.addEventListener("DOMContentLoaded", function () {
  (0, _k["default"])({
    drawers: _drawers["default"],
    extendingForm: _extendingForm["default"],
    tabs: _tabs["default"]
  }, document);
});

},{"./k":1,"./widgets/drawers":3,"./widgets/extending-form":4,"./widgets/tabs":5}],3:[function(require,module,exports){
"use strict";

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
  return {
    actions: actions
  };
}
module.exports = accordion;

},{}],4:[function(require,module,exports){
"use strict";

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
  return {
    setup: setup,
    actions: actions
  };
}
module.exports = extendingForm;

},{}],5:[function(require,module,exports){
"use strict";

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
  return {
    setup: setup,
    actions: actions
  };
}
module.exports = tabs;

},{}]},{},[2]);
