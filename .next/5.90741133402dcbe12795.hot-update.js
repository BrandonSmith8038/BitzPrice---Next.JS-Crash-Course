webpackHotUpdate(5,{

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ubuntu/workspace/components/Prices.js';


var Prices = function (_React$Component) {
  (0, _inherits3.default)(Prices, _React$Component);

  function Prices() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Prices);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Prices.__proto__ || (0, _getPrototypeOf2.default)(Prices)).call.apply(_ref, [this].concat(args))), _this), _this.state = {

      currency: 'USD'
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Prices, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var list = '';

      if (this.state.currency === 'USD') {
        list = _react2.default.createElement('li', { className: 'list-group-item', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        }, 'Bitcoin rate for ', this.props.bpi.USD.description, ': ', _react2.default.createElement('span', { className: 'badge badge-primary', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }, this.props.bpi.USD.code), ' ', _react2.default.createElement('strong', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }, this.props.bpi.USD.rate));
      } else if (this.state.currency === 'GBP') {
        list = _react2.default.createElement('li', { className: 'list-group-item', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }, 'Bitcoin rate for ', this.props.bpi.GBP.description, ': ', _react2.default.createElement('span', { className: 'badge badge-primary', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }, this.props.bpi.GBP.code), ' ', _react2.default.createElement('strong', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }, this.props.bpi.GBP.rate));
      } else if (this.state.currency === 'EUR') list = _react2.default.createElement('li', { className: 'list-group-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, 'Bitcoin rate for ', this.props.bpi.EUR.description, ': ', _react2.default.createElement('span', { className: 'badge badge-primary', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, this.props.bpi.EUR.code), ' ', _react2.default.createElement('strong', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, this.props.bpi.EUR.rate));
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('ul', { className: 'list-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, list), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement('select', { className: 'form-control', onChange: function onChange(e) {
          return _this2.setState({ currency: e.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('option', { value: 'USD', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, 'USD'), _react2.default.createElement('option', { value: 'GBP', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, 'GBP'), _react2.default.createElement('option', { value: 'EUR', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'EUR')));
    }
  }]);

  return Prices;
}(_react2.default.Component);

exports.default = Prices;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJpY2VzLmpzIl0sIm5hbWVzIjpbIlByaWNlcyIsInN0YXRlIiwiY3VycmVuY3kiLCJsaXN0IiwicHJvcHMiLCJicGkiLCJVU0QiLCJkZXNjcmlwdGlvbiIsImNvZGUiLCJyYXRlIiwiR0JQIiwiRVVSIiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTSxBOzs7Ozs7Ozs7Ozs7Ozs0TSxBQUNKOztnQkFBUSxBQUVJLEE7QUFGSixBQUVOOzs7Ozs2QkFHTTttQkFDTjs7VUFBSSxPQUFKLEFBQVcsQUFFWDs7VUFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQWQsQUFBMkIsT0FBTSxBQUMvQjsrQkFBTyxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBO0FBQUE7U0FBQSxFQUNpQiwwQkFBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFEaEMsQUFDb0MsYUFDbkMsc0JBQUEsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7c0JBQWhCO3dCQUFBLEFBQXVDO0FBQXZDO2dCQUF1QyxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFGdkQsQUFFQyxBQUEwRCxPQUFhLHFCQUFBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQVM7QUFBVDtBQUFBLGdCQUFTLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxJQUZ2RyxBQUFPLEFBRXdFLEFBQTRCLEFBRTVHO0FBTEQsaUJBS1UsS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFkLEFBQTJCLE9BQU8sQUFDdEM7K0JBQU8sY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQTtBQUFBO1NBQUEsRUFDZ0IsMEJBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLElBRC9CLEFBQ21DLGFBQ25DLHNCQUFBLGNBQUEsVUFBTSxXQUFOLEFBQWdCO3NCQUFoQjt3QkFBQSxBQUF1QztBQUF2QztnQkFBdUMsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLElBRnRELEFBRUEsQUFBMEQsT0FBYSxxQkFBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUFTO0FBQVQ7QUFBQSxnQkFBUyxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFGdEcsQUFBTyxBQUV1RSxBQUE0QixBQUU1RztBQUxNLE9BQUEsTUFLQSxJQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBZCxBQUEyQiw4QkFDekIsY0FBQSxRQUFJLFdBQUosQUFBYztvQkFBZDtzQkFBQTtBQUFBO09BQUEsRUFDaUIsMEJBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLElBRGhDLEFBQ29DLGFBQ25DLHNCQUFBLGNBQUEsVUFBTSxXQUFOLEFBQWdCO29CQUFoQjtzQkFBQSxBQUF1QztBQUF2QztjQUF1QyxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFGdkQsQUFFQyxBQUEwRCxPQUFhLHFCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQVM7QUFBVDtBQUFBLGNBQVMsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLElBRnZHLEFBQU8sQUFFd0UsQUFBNEIsQUFFN0csTUFKRTs2QkFLQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFDRztBQURIO1NBREYsQUFDRSxBQUdBOztvQkFBQTtzQkFKRixBQUlFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLGNBQUEsWUFBUSxXQUFSLEFBQWtCLGdCQUFlLFVBQVUscUJBQUE7aUJBQUssT0FBQSxBQUFLLFNBQVMsRUFBQyxVQUFVLEVBQUEsQUFBRSxPQUFoQyxBQUFLLEFBQWMsQUFBb0I7QUFBbEY7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsWUFBUSxPQUFSLEFBQWM7b0JBQWQ7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSx3QkFBQSxjQUFBLFlBQVEsT0FBUixBQUFjO29CQUFkO3NCQUFBO0FBQUE7U0FGRixBQUVFLEFBQ0Esd0JBQUEsY0FBQSxZQUFRLE9BQVIsQUFBYztvQkFBZDtzQkFBQTtBQUFBO1NBVE4sQUFDRSxBQUtFLEFBR0UsQUFJUDs7Ozs7RUFyQ2tCLGdCQUFNLEEsQUF3QzNCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlByaWNlcy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS91YnVudHUvd29ya3NwYWNlIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/ubuntu/workspace/components/Prices.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/ubuntu/workspace/components/Prices.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45MDc0MTEzMzQwMmRjYmUxMjc5NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QcmljZXMuanM/ZWZkOWE0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcmljZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBcbiAgICBjdXJyZW5jeTogJ1VTRCdcbiAgfVxuICBcbiAgcmVuZGVyKCl7XG4gICAgbGV0IGxpc3QgPSAnJ1xuICAgIFxuICAgIGlmKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09ICdVU0QnKXtcbiAgICAgIGxpc3QgPSA8bGkgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0nPlxuICAgICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7dGhpcy5wcm9wcy5icGkuVVNELmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgOiA8c3BhbiBjbGFzc05hbWU9J2JhZGdlIGJhZGdlLXByaW1hcnknPnt0aGlzLnByb3BzLmJwaS5VU0QuY29kZX08L3NwYW4+IDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLlVTRC5yYXRlfTwvc3Ryb25nPlxuICAgICAgICAgIDwvbGk+XG4gICAgfSBlbHNlIGlmKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09ICdHQlAnKSB7XG4gICAgICAgbGlzdCA9IDxsaSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSc+XG4gICAgICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHt0aGlzLnByb3BzLmJwaS5HQlAuZGVzY3JpcHRpb259XG4gICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT0nYmFkZ2UgYmFkZ2UtcHJpbWFyeSc+e3RoaXMucHJvcHMuYnBpLkdCUC5jb2RlfTwvc3Bhbj4gPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuR0JQLnJhdGV9PC9zdHJvbmc+XG4gICAgICAgICAgPC9saT5cbiAgICB9IGVsc2UgaWYodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gJ0VVUicpXG4gICAgICBsaXN0ID0gPGxpIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtJz5cbiAgICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpLkVVUi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPSdiYWRnZSBiYWRnZS1wcmltYXJ5Jz57dGhpcy5wcm9wcy5icGkuRVVSLmNvZGV9PC9zcGFuPiA8c3Ryb25nPnt0aGlzLnByb3BzLmJwaS5FVVIucmF0ZX08L3N0cm9uZz5cbiAgICAgICAgICA8L2xpPlxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0LWdyb3VwJz5cbiAgICAgICAgICB7bGlzdH1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7Y3VycmVuY3k6IGUudGFyZ2V0LnZhbHVlfSl9PlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVU0RcIj5VU0Q8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR0JQXCI+R0JQPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVVUlwiPkVVUjwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUHJpY2VzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7OztBQXJDQTtBQUNBO0FBdUNBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=