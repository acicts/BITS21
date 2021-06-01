(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@theme-ui/core'), require('@theme-ui/css'), require('react'), require('@emotion/core'), require('@emotion/styled'), require('@mdx-js/react')) :
  typeof define === 'function' && define.amd ? define(['exports', '@theme-ui/core', '@theme-ui/css', 'react', '@emotion/core', '@emotion/styled', '@mdx-js/react'], factory) :
  (factory((global.mdx = {}),global.core,global.css,global.react,global.core$1,global.styled,global.react$1));
}(this, (function (exports,core,css,react,core$1,styled,react$1) {
  react = react && react.hasOwnProperty('default') ? react['default'] : react;
  styled = styled && styled.hasOwnProperty('default') ? styled['default'] : styled;

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

})));
//# sourceMappingURL=index.umd.js.map
