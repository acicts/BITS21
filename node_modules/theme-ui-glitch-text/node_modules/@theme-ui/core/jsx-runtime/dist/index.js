function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var jsxRuntime = require('@emotion/react/jsx-runtime');
var parseProps = _interopDefault(require('@theme-ui/parse-props'));
var react = require('react');

var jsx = function jsx(type, props, key) {
  return jsxRuntime.jsx(type, parseProps(props), key);
};
var jsxs = function jsxs(type, props, key) {
  return jsxRuntime.jsxs(type, parseProps(props), key);
};

Object.defineProperty(exports, 'Fragment', {
  enumerable: true,
  get: function () {
    return react.Fragment;
  }
});
exports.jsx = jsx;
exports.jsxs = jsxs;
//# sourceMappingURL=index.js.map
