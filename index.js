"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactSyntaxHighlighter = require("react-syntax-highlighter");

var _reactSyntaxHighlighter2 = _interopRequireDefault(_reactSyntaxHighlighter);

var _prism = require("react-syntax-highlighter/dist/esm/styles/prism");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

// import mny from "manavify";
var App = (function(_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(
      this,
      (App.__proto__ || Object.getPrototypeOf(App)).call(this)
    );

    _this.state = {
      clock: ""
    };
    return _this;
  }

  _createClass(App, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        var that = this;
        setInterval(function() {
          var months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ];
          var date = new Date();
          // console.log("date = " + date);
          var dateDay = date.getDate();
          var month = months[date.getMonth()];
          // console.log("month = " + month);
          var year = date.getFullYear();
          var h = date.getHours();
          var m = date.getMinutes();
          var s = date.getSeconds();
          var ampm = h >= 12 ? "pm" : "am";
          var finallyDate =
            dateDay +
            " " +
            month +
            " " +
            year +
            "  " +
            h +
            ":" +
            m +
            ":" +
            s +
            "  " +
            ampm;

          that.setState({ clock: finallyDate });
        }, 1000);
      }
    },
    {
      key: "render",
      value: function render() {
        var code =
          "import RectClockWidget from 'react-clock-app'\n   render() {\n         return (\n          <RectClockWidget />\n   )}";
        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "h1",
              { style: { textAlign: "center" } },
              "Clock Widget"
            ),
            _react2.default.createElement("br", null),
            _react2.default.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "50px",
                  border: "2px solid",
                  padding: "15px",
                  marginLeft: "25%",
                  marginRight: "25%"
                }
              },
              this.state.clock ? this.state.clock : "Loading widget..."
            )
          ),
          _react2.default.createElement("br", null)
        );
      }
    }
  ]);

  return App;
})(_react2.default.Component);

exports.default = App;
