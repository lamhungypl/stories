__d(
  'ServerHTML.react',
  ['react'],
  function (a, b, c, d, e, f, g) {
    var h = d('react');
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.elementRef = h.createRef()),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var c = b.prototype;
      c.render = function () {
        var a = this.props,
          b = a.blob;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ['blob']);
        return typeof b === 'string'
          ? h.jsx(
              'div',
              babelHelpers['extends']({}, a, {
                ref: this.elementRef,
                children: b,
              }),
            )
          : h.jsx(
              'div',
              babelHelpers['extends']({}, a, {
                ref: this.elementRef,
                dangerouslySetInnerHTML: b,
              }),
            );
      };
      return b;
    })(h.Component);
    g['default'] = a;
  },
  98,
);
