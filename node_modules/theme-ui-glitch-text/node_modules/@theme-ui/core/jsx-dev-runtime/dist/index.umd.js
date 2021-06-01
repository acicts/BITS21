(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@emotion/react/jsx-dev-runtime'), require('@theme-ui/parse-props'), require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', '@emotion/react/jsx-dev-runtime', '@theme-ui/parse-props', 'react'], factory) :
  (global = global || self, factory(global.coreJsxDevRuntime = {}, global.jsxDevRuntime, global.parseProps, global.react));
}(this, (function (exports, jsxDevRuntime, parseProps, react) {
  parseProps = parseProps && Object.prototype.hasOwnProperty.call(parseProps, 'default') ? parseProps['default'] : parseProps;

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

})));
//# sourceMappingURL=index.umd.js.map
