__d(
  'deferredLoadComponentBase',
  ['Promise', 'PromiseAnnotate', 'react'],
  function (a, b, c, d, e, f, g) {
    var h = c('react'),
      i = {},
      j = {},
      k = new Map();
    function l(a, b) {
      k.set(a, b);
    }
    function m(a) {
      return k.get(a);
    }
    function a(a, c) {
      var e = m(a);
      if (e) return e;
      var g,
        k = a.getModuleId();
      function n() {
        var d = j[k];
        d ||
          (d = j[k] =
            new (b('Promise'))(function (b) {
              a.loadImmediately(function (a) {
                delete j[k], (g = c(a)), b();
              });
            }));
        return d;
      }
      function o() {
        var d = i[k];
        d ||
          (d = i[k] =
            new (b('Promise'))(function (b) {
              a.onReady(function (a) {
                (g = c(a)), delete i[k], b();
              });
            }));
        return d;
      }
      function p(b, e) {
        var f = b.loadImmediately;
        b = babelHelpers.objectWithoutPropertiesLoose(b, ['loadImmediately']);
        if (!g) {
          var i = a.getModuleIfRequireable();
          i != null && (g = c(i));
          if (!g) {
            i = f === !0 ? n() : o();
            d('PromiseAnnotate').setDisplayName(i, p.displayName);
            throw i;
          }
        }
        return h.jsx(g, babelHelpers['extends']({}, b, { ref: e }));
      }
      p.displayName = p.name + ' [from ' + f.id + ']';
      p.displayName = 'deferredLoadComponent(' + a.getModuleId() + ')';
      e = h.forwardRef(p);
      l(a, e);
      return e;
    }
    g['default'] = a;
  },
  98,
);
