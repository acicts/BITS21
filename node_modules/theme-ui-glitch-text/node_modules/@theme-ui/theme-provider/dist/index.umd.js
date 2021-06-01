(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@theme-ui/core'), require('@theme-ui/css'), require('@theme-ui/color-modes'), require('@theme-ui/mdx'), require('@emotion/core')) :
  typeof define === 'function' && define.amd ? define(['exports', '@theme-ui/core', '@theme-ui/css', '@theme-ui/color-modes', '@theme-ui/mdx', '@emotion/core'], factory) :
  (factory((global.themeProvider = {}),global.core,global.css,global.colorModes,global.mdx,global.core$1));
}(this, (function (exports,core,css,colorModes,mdx,core$1) {
  var BodyStyles = function () { return core.jsx(core$1.Global, {
    styles: function (theme) {
      if (theme.useBodyStyles === false || theme.styles && !theme.styles.root) { return false; }
      var boxSizing = theme.useBorderBox === false ? null : 'border-box';
      return css.css({
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

  var ThemeProvider = function (ref) {
    var theme = ref.theme;
    var components = ref.components;
    var children = ref.children;

    var outer = core.useThemeUI();

    if (typeof outer.setColorMode === 'function') {
      return core.jsx(core.ThemeProvider, {
        theme: theme
      }, core.jsx(mdx.MDXProvider, {
        components: components,
        children: children
      }));
    }

    return core.jsx(core.ThemeProvider, {
      theme: theme
    }, core.jsx(colorModes.ColorModeProvider, null, core.jsx(BodyStyles), core.jsx(mdx.MDXProvider, {
      components: components,
      children: children
    })));
  };

  exports.ThemeProvider = ThemeProvider;

})));
//# sourceMappingURL=index.umd.js.map
