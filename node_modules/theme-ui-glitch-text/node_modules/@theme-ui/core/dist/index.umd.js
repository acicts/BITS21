(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@emotion/core'), require('@theme-ui/css'), require('react'), require('deepmerge'), require('@emotion/core/package.json')) :
  typeof define === 'function' && define.amd ? define(['exports', '@emotion/core', '@theme-ui/css', 'react', 'deepmerge', '@emotion/core/package.json'], factory) :
  (factory((global.core = {}),global.core,global.css,global.react,global.deepmerge,global.packageInfo));
}(this, (function (exports,core,css,React,deepmerge,packageInfo) {
  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  deepmerge = deepmerge && deepmerge.hasOwnProperty('default') ? deepmerge['default'] : deepmerge;
  packageInfo = packageInfo && packageInfo.hasOwnProperty('default') ? packageInfo['default'] : packageInfo;

  var __EMOTION_VERSION__ = packageInfo.version;

  var getCSS = function (props) {
    if (!props.sx && !props.css) { return undefined; }
    return function (theme) {
      var styles = css.css(props.sx)(theme);
      var raw = typeof props.css === 'function' ? props.css(theme) : props.css;
      return [styles, raw];
    };
  };

  var parseProps = function (props) {
    if (!props) { return null; }
    var next = {};

    for (var key in props) {
      if (key === 'sx') { continue; }
      next[key] = props[key];
    }

    var css$$1 = getCSS(props);
    if (css$$1) { next.css = css$$1; }
    return next;
  };

  var jsx = function (type, props) {
    var children = [], len = arguments.length - 2;
    while ( len-- > 0 ) children[ len ] = arguments[ len + 2 ];

    return core.jsx.apply(undefined, [type, parseProps(props) ].concat( children));
  };
  var Context = React.createContext({
    __EMOTION_VERSION__: __EMOTION_VERSION__,
    theme: null
  });
  var useThemeUI = function () { return React.useContext(Context); };
  var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
  var FORWARD_REF = canUseSymbol ? Symbol.for('react.forward_ref') : 0xeac7;

  var isMergeableObject = function (n) {
    return !!n && typeof n === 'object' && n.$$typeof !== REACT_ELEMENT && n.$$typeof !== FORWARD_REF;
  };

  var arrayMerge = function (destinationArray, sourceArray, options) { return sourceArray; };

  var merge = function (a, b) { return deepmerge(a, b, {
    isMergeableObject: isMergeableObject,
    arrayMerge: arrayMerge
  }); };

  merge.all = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return deepmerge.all(args, {
    isMergeableObject: isMergeableObject,
    arrayMerge: arrayMerge
  });
  };

  var BaseProvider = function (ref) {
    var context = ref.context;
    var children = ref.children;

    return jsx(core.ThemeContext.Provider, {
    value: context.theme
  }, jsx(Context.Provider, {
    value: context,
    children: children
  }));
  };

  var ThemeProvider = function (ref) {
    var theme = ref.theme;
    var children = ref.children;

    var outer = useThemeUI();

    if (process.env.NODE_ENV !== 'production') {
      if (outer.__EMOTION_VERSION__ !== __EMOTION_VERSION__) {
        console.warn('Multiple versions of Emotion detected,', 'and theming might not work as expected.', 'Please ensure there is only one copy of @emotion/core installed in your application.');
      }
    }

    var context = typeof theme === 'function' ? Object.assign({}, outer,
      {theme: theme(outer.theme)}) : merge.all({}, outer, {
      theme: theme
    });
    return jsx(BaseProvider, {
      context: context,
      children: children
    });
  };

  exports.jsx = jsx;
  exports.Context = Context;
  exports.useThemeUI = useThemeUI;
  exports.merge = merge;
  exports.ThemeProvider = ThemeProvider;

})));
//# sourceMappingURL=index.umd.js.map
