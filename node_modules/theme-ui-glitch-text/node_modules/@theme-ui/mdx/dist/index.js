function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var core = require('@theme-ui/core');
var css = require('@theme-ui/css');
require('react');
require('@emotion/core');
var styled = _interopDefault(require('@emotion/styled'));
var react$1 = require('@mdx-js/react');

var tags = ['p', 'b', 'i', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img', 'pre', 'code', 'ol', 'ul', 'li', 'blockquote', 'hr', 'em', 'table', 'tr', 'th', 'td', 'em', 'strong', 'del', // mdx
'inlineCode', 'thematicBreak', // other
'div', // theme-ui
'root'];
var aliases = {
  inlineCode: 'code',
  thematicBreak: 'hr',
  root: 'div'
};

var alias = function (n) { return aliases[n] || n; };

var themed = function (key) { return function (props) { return css.css(css.get(props.theme, ("styles." + key)))(props.theme); }; };
var Styled = styled('div')(themed('div'));
var components = {};
tags.forEach(function (tag) {
  components[tag] = styled(alias(tag))(themed(tag));
  Styled[tag] = components[tag];
});

var createComponents = function (comps) {
  var next = Object.assign({}, components);
  Object.keys(comps).forEach(function (key) {
    next[key] = styled(comps[key])(themed(key));
  });
  return next;
};

var MDXProvider = function (ref) {
  var components = ref.components;
  var children = ref.children;

  var outer = react$1.useMDXComponents();
  return core.jsx(react$1.MDXProvider, {
    components: createComponents(Object.assign({}, outer,
      components)),
    children: children
  });
};

exports.themed = themed;
exports.Styled = Styled;
exports.components = components;
exports.MDXProvider = MDXProvider;
//# sourceMappingURL=index.js.map
