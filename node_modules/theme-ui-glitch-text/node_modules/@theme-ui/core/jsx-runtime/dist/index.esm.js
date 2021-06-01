import { jsx as jsx$1, jsxs as jsxs$1 } from '@emotion/react/jsx-runtime';
import parseProps from '@theme-ui/parse-props';
export { Fragment } from 'react';

var jsx = function jsx(type, props, key) {
  return jsx$1(type, parseProps(props), key);
};
var jsxs = function jsxs(type, props, key) {
  return jsxs$1(type, parseProps(props), key);
};

export { jsx, jsxs };
//# sourceMappingURL=index.esm.js.map
