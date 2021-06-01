function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var jsxDevRuntime = require('@emotion/react/jsx-dev-runtime');
var parseProps = _interopDefault(require('@theme-ui/parse-props'));
var react = require('react');

// @ts-ignore
var jsxDEV = function jsxDEV(type, props, key, isStaticChildren, source, self) {
  return jsxDevRuntime.jsxDEV(type, parseProps(props), key, isStaticChildren, source, self);
};

Object.defineProperty(exports, 'Fragment', {
  enumerable: true,
  get: function () {
    return react.Fragment;
  }
});
exports.jsxDEV = jsxDEV;
//# sourceMappingURL=index.js.map
