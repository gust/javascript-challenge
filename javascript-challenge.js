(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function runSetup(widget) {
  if (widget.setup) {
    widget.setup();
  }
}
function setListeners(widget) {
  widget.actions.forEach(function (action) {
    action.element.addEventListener(action.event, action.handler);
  });
}
function kjs(constructors, page) {
  var widgetElements = page.querySelectorAll('[kjs-type]');
  // console.log('widget elements', widgetElements);
  // console.log('constructors', constructors);

  widgetElements.forEach(function (el) {
    // console.log('elements', el);
    var widgetName = el.getAttribute('kjs-type');
    var widget = constructors[widgetName](el);
    runSetup(widget);
    setListeners(widget);
  });
}
module.exports = kjs;

},{}],2:[function(require,module,exports){
"use strict";

var _k = _interopRequireDefault(require("./k"));
var _drawers = _interopRequireDefault(require("./widgets/drawers"));
var _extendingForm = _interopRequireDefault(require("./widgets/extending-form"));
var _tabs = _interopRequireDefault(require("./widgets/tabs"));
var _linkedCheckboxes = _interopRequireDefault(require("./widgets/linked-checkboxes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
document.addEventListener('DOMContentLoaded', function () {
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
  var checkedCount = 0;
  var controller = widget.querySelector('[kjs-role=checkbox-controller]');
  function handleControllerClick() {
    /**
     * upon click, we'll check if the classname is set to "checked"
     * - if it is, call the deselect function to clear each checkbox and the controller
     * - if the classname is either empty or "intermediary", call the select all function
     */

    if (controller.className === 'checked') {
      changeCheckbox(false);
    } else {
      changeCheckbox(true);
    }

    // accepts boolean (true or false)
    // if true -> select all : deselect all
    function changeCheckbox(_boolean) {
      checkboxContainers.forEach(function (container) {
        var selectedId = container.getAttribute('kjs-id');
        var cb = document.querySelector("[kjs-option-id=\"".concat(selectedId, "\"]"));
        cb.checked = _boolean;
        // updates controller UI based on boolean value
        if (_boolean) {
          container.classList.add('active');
          setToChecked();
          checkedCount = checkboxContainers.length;
        } else {
          container.classList.remove('active');
          deselectAll();
          checkedCount = 0;
        }
      });
    }
  }

  // each checkbox has its own container, which is used to show
  // whether a box is 'active' or checked
  var checkboxContainers = widget.querySelectorAll('[kjs-role=checkbox-container]');
  function handleCheckboxClick(e) {
    var selectedId = e.target.getAttribute('kjs-option-id');

    // Individually check each checkbox, setting controller
    // to intermediary state unless all boxes are checked
    checkboxContainers.forEach(function (container) {
      if (container.getAttribute('kjs-id') === selectedId) {
        // returns a nodeList -> since we know each id is unique, extract its first value
        var cb = document.querySelector("[kjs-option-id=\"".concat(selectedId, "\"]"));
        /**
         * with each click onto a checkbox, we'll check if the box is checked and depending
         * on the return boolean perform a few actions:
         * - if the box is checked, add an active call to update UI
         * - update checkedCount num to determine whether or not the controller
         * should show as intermediary (orange), checked (blue), or deselected (white)
         */

        if (cb.checked) {
          container.classList.add('active');
          checkedCount++;
        } else {
          container.classList.remove('active');
          checkedCount--;
        }

        // Updates controller box UI based on checkedCount value
        if (checkedCount && checkedCount < checkboxContainers.length) {
          setToIntermediary();
        } else if (checkedCount === checkboxContainers.length) {
          setToChecked();
        } else {
          deselectAll();
        }
      }
    });
  }
  function setToChecked() {
    controller.className = 'checked';
  }
  function setToIntermediary() {
    controller.className = 'intermediary';
  }
  function deselectAll() {
    controller.className = '';
  }
  var actions = [];
  checkboxContainers.forEach(function (container) {
    actions.push({
      element: container,
      event: 'click',
      handler: handleCheckboxClick
    });
  });
  actions.push({
    element: controller,
    event: 'click',
    handler: handleControllerClick
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
