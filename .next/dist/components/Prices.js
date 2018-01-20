'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

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