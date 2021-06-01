import { jsx, useThemeUI, ThemeProvider } from '@theme-ui/core';
import { css } from '@theme-ui/css';
import { ColorModeProvider } from '@theme-ui/color-modes';
import { MDXProvider } from '@theme-ui/mdx';
import { Global } from '@emotion/core';

var BodyStyles = function () { return jsx(Global, {
  styles: function (theme) {
    if (theme.useBodyStyles === false || theme.styles && !theme.styles.root) { return false; }
    var boxSizing = theme.useBorderBox === false ? null : 'border-box';
    return css({
      '*': {
        boxSizing: boxSizing
      },
      body: {
        margin: 0,
        variant: 'styles.root'
      }
    })(theme);
  }
}); };

var ThemeProvider$1 = function (ref) {
  var theme = ref.theme;
  var components = ref.components;
  var children = ref.children;

  var outer = useThemeUI();

  if (typeof outer.setColorMode === 'function') {
    return jsx(ThemeProvider, {
      theme: theme
    }, jsx(MDXProvider, {
      components: components,
      children: children
    }));
  }

  return jsx(ThemeProvider, {
    theme: theme
  }, jsx(ColorModeProvider, null, jsx(BodyStyles), jsx(MDXProvider, {
    components: components,
    children: children
  })));
};

export { ThemeProvider$1 as ThemeProvider };
//# sourceMappingURL=index.esm.js.map
