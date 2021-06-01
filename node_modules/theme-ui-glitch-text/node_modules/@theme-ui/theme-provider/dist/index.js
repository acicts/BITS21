var core = require('@theme-ui/core');
var css = require('@theme-ui/css');
var colorModes = require('@theme-ui/color-modes');
var mdx = require('@theme-ui/mdx');
var core$1 = require('@emotion/core');

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
//# sourceMappingURL=index.js.map
