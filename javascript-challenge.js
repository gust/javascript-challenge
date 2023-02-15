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
var _linkedCheckboxes = _interopRequireDefault(require("./widgets/linked-checkboxes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
document.addEventListener("DOMContentLoaded", function () {
  (0, _k["default"])({
    drawers: _drawers["default"],
    extendingForm: _extendingForm["default"],
    tabs: _tabs["default"],
    linkedCheckboxes: _linkedCheckboxes["default"]
  }, document);
});

},{"./k":1,"./widgets/drawers":3,"./widgets/extending-form":4,"./widgets/linked-checkboxes":5,"./widgets/tabs":6}],3:[function(require,module,exports){
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

function linkedCheckboxes(widget) {
  var checkboxes = widget.querySelectorAll('[kjs-role=controller], [kjs-role=controllee]');
  function handleClick(e) {
    var isController = e.target.getAttribute('kjs-role') === 'controller';
    if (isController) {
      var id = e.target.getAttribute('kjs-id');
      var status = e.target.getAttribute('kjs-status');
      var controllees = widget.querySelectorAll("[kjs-controller-id=".concat(id, "]"));
      switch (status) {
        case 'checked':
          e.target.setAttribute('kjs-status', 'unchecked');
          controllees.forEach(function (controllee) {
            controllee.checked = false;
          });
          break;
        case 'intermediary':
          e.target.setAttribute('kjs-status', 'unchecked');
          controllees.forEach(function (controllee) {
            controllee.checked = false;
          });
          break;
        default:
          e.target.setAttribute('kjs-status', 'checked');
          controllees.forEach(function (controllee) {
            controllee.checked = true;
          });
      }
    } else {
      var controllerId = e.target.getAttribute('kjs-controller-id');
      var controller = widget.querySelector("[kjs-id=".concat(controllerId, "]"));
      var _status = controller.getAttribute('kjs-status');
      var _controllees = widget.querySelectorAll("[kjs-controller-id=".concat(controllerId, "]"));
      switch (_status) {
        case 'checked':
          e.target.checked = false;
          controller.setAttribute('kjs-status', 'intermediary');
          break;
        case 'intermediary':
          if (e.target.checked) {
            // User clicked on an unchecked related checkbox, so it became checked.
            var allChecked = true;
            _controllees.forEach(function (controllee) {
              allChecked && (allChecked = controllee.checked);
            });
            if (allChecked) {
              controller.setAttribute('kjs-status', 'checked');
            }
          } else {
            // User clicked on a checked related checkbox, so it became unchecked.
            var checkedExists = false;
            _controllees.forEach(function (controllee) {
              checkedExists || (checkedExists = controllee.checked);
            });
            if (!checkedExists) {
              controller.checked = false;
              controller.setAttribute('kjs-status', 'unchecked');
            }
          }
          break;
        default:
          e.target.checked = true;
          break;
      }
    }
  }
  var actions = [];
  checkboxes.forEach(function (checkbox) {
    actions.push({
      element: checkbox,
      event: 'change',
      handler: handleClick
    });
  });
  return {
    actions: actions
  };
}
module.exports = linkedCheckboxes;

},{}],6:[function(require,module,exports){
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
