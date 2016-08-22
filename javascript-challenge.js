(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _vs = require('./vs');

var _vs2 = _interopRequireDefault(_vs);

var _bar = require('./widgets/bar');

var _bar2 = _interopRequireDefault(_bar);

var _baz = require('./widgets/baz');

var _baz2 = _interopRequireDefault(_baz);

var _qux = require('./widgets/qux');

var _qux2 = _interopRequireDefault(_qux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  _vs2.default.initializeWidgets({ bar: _bar2.default, baz: _baz2.default, qux: _qux2.default });
});

},{"./vs":2,"./widgets/bar":3,"./widgets/baz":4,"./widgets/qux":5}],2:[function(require,module,exports){
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

var bar = {
  initialize: function initialize(widget) {
    widget.setAttribute('style', 'color: red');
  }
};

module.exports = bar;

},{}],4:[function(require,module,exports){
'use strict';

var bar = {
  initialize: function initialize(widget) {
    widget.setAttribute('style', 'color: blue');
  }
};

module.exports = bar;

},{}],5:[function(require,module,exports){
'use strict';

var bar = {
  initialize: function initialize(widget) {
    widget.setAttribute('style', 'color: green');
  }
};

module.exports = bar;

},{}]},{},[1]);
