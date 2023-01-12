__d(
  'baseTextTransformAllStrings',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function i(a) {
      return (
        (a == null ? void 0 : a.type) === h.Fragment &&
        typeof (a == null
          ? void 0
          : (a = a.props) == null
          ? void 0
          : a.children) === 'string'
      );
    }
    function j(a, b, c, d) {
      c === void 0 && (c = 3);
      d === void 0 && (d = 0);
      var e = 0;
      if (typeof a === 'string') {
        var f = a;
        return b(f, d + '-' + e++);
      } else if (Array.isArray(a))
        return a.map(function (a, f) {
          if (i(a))
            return h.cloneElement(a, {
              children: b(a.props.children, d + '-' + e++),
            });
          return d < c ? j(a, b, c, d + 1) : a;
        });
      else if (a != null && typeof a === 'object') {
        f = h.Children.only(a);
        if (i(f))
          return h.cloneElement(f, {
            children: b(f.props.children, d + '-' + e++),
          });
      }
      return a;
    }
    j.displayName = j.name + ' [from ' + f.id + ']';
    g['default'] = j;
  },
  98,
);
