(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _vs = require('./vs');

var _vs2 = _interopRequireDefault(_vs);

var _accordion = require('./widgets/accordion');

var _accordion2 = _interopRequireDefault(_accordion);

var _extendingForm = require('./widgets/extending-form');

var _extendingForm2 = _interopRequireDefault(_extendingForm);

var _tabs = require('./widgets/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  _vs2.default.initializeWidgets({
    accordion: _accordion2.default,
    extendingForm: _extendingForm2.default,
    tabs: _tabs2.default,
    foo: 'bar'
  });
});

},{"./vs":2,"./widgets/accordion":3,"./widgets/extending-form":4,"./widgets/tabs":5}],2:[function(require,module,exports){
'use strict';

var VS = {
  index: {},

  initializeWidgets: function initializeWidgets(widgetIndex) {
    var _this = this;

    this.index = widgetIndex;
    var widgets = document.querySelectorAll('[vs-type]');

    widgets.forEach(function (widget) {
      var widgetObject = _this.index[widget.getAttribute('vs-type')];
      widgetObject.initialize(widget);
    });
  }
};

module.exports = VS;

},{}],3:[function(require,module,exports){
'use strict';

var accordion = {
  initialize: function initialize(widget) {
    var contents = widget.querySelectorAll('[vs-role=content]');
    var tabs = widget.querySelectorAll('[vs-role=tab]');

    function dependentHide() {
      var activeTab = widget.querySelector('.active[vs-role=tab]');

      contents.forEach(function (content) {
        if (activeTab.getAttribute('vs-id') == content.getAttribute('vs-tab-id')) {
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
      dependentHide();
    }

    dependentHide();

    tabs.forEach(function (tab) {
      tab.addEventListener('click', handleTabClick);
    });
  }
};

module.exports = accordion;

},{}],4:[function(require,module,exports){
'use strict';

var extendingForm = {
  initialize: function initialize(widget) {
    var extensions = widget.querySelectorAll('[vs-role=extension]');
    var toggle = widget.querySelector('[vs-role=toggle]');

    function dependentHide() {
      extensions.forEach(function (extension) {
        if (toggle.value == extension.getAttribute('vs-trigger')) {
          extension.classList.add('reveal');
        } else {
          extension.classList.remove('reveal');
        }
      });
    }

    dependentHide();

    toggle.addEventListener('change', function (toggle) {
      dependentHide();
    });
  }
};

module.exports = extendingForm;

},{}],5:[function(require,module,exports){
'use strict';

var tabs = {
  initialize: function initialize(widget) {
    var contents = widget.querySelectorAll('[vs-role=content]');
    var tabs = widget.querySelectorAll('[vs-role=tab]');

    function dependentHide() {
      var activeTab = widget.querySelector('.active[vs-role=tab]');

      contents.forEach(function (content) {
        if (activeTab.getAttribute('vs-id') == content.getAttribute('vs-tab-id')) {
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
      dependentHide();
    }

    dependentHide();

    tabs.forEach(function (tab) {
      tab.addEventListener('click', handleTabClick);
    });
  }
};

module.exports = tabs;

},{}]},{},[1]);
