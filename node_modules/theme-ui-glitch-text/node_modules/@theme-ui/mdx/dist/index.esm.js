import { jsx } from '@theme-ui/core';
import { css, get } from '@theme-ui/css';
import 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { MDXProvider, useMDXComponents } from '@mdx-js/react';

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

var themed = function (key) { return function (props) { return css(get(props.theme, ("styles." + key)))(props.theme); }; };
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

var MDXProvider$1 = function (ref) {
  var components = ref.components;
  var children = ref.children;

  var outer = useMDXComponents();
  return jsx(MDXProvider, {
    components: createComponents(Object.assign({}, outer,
      components)),
    children: children
  });
};

export { themed, Styled, components, MDXProvider$1 as MDXProvider };
//# sourceMappingURL=index.esm.js.map
