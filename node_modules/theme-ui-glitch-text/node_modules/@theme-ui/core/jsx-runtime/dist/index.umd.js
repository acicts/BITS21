(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@emotion/react/jsx-runtime'), require('@theme-ui/parse-props'), require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', '@emotion/react/jsx-runtime', '@theme-ui/parse-props', 'react'], factory) :
  (global = global || self, factory(global.coreJsxRuntime = {}, global.jsxRuntime, global.parseProps, global.react));
}(this, (function (exports, jsxRuntime, parseProps, react) {
  parseProps = parseProps && Object.prototype.hasOwnProperty.call(parseProps, 'default') ? parseProps['default'] : parseProps;

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

})));
//# sourceMappingURL=index.umd.js.map
