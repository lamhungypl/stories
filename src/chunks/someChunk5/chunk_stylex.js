__d(
  'stylex',
  ['CometStyleXSheet', 'ExecutionEnvironment', 'gkx', 'stylex-runtime'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    !c('gkx')('1705') &&
      !c('ExecutionEnvironment').isInWorker &&
      d('CometStyleXSheet').rootStyleSheet.injectTheme();
    var h = !1;
    function i(a) {
      a = a.reverse();
      var b = {};
      while (a.length) {
        var c = a.pop();
        if (Array.isArray(c)) {
          for (var d = c.length - 1; d >= 0; d--) a.push(c[d]);
          continue;
        }
        d = c;
        if (d != null && typeof d === 'object')
          for (c in d) {
            var e = d[c];
            if (typeof e === 'string') b[c] = e;
            else if (typeof e === 'object') {
              var f;
              b[c] = (f = b[c]) != null ? f : {};
              Object.assign(b[c], e);
            }
          }
      }
      return b;
    }
    function a() {
      for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
        b[c] = arguments[c];
      return i(b);
    }
    b = function (a, b, e) {
      e === void 0 && (e = null),
        !h && c('gkx')('708253') && a.indexOf('@keyframes') === -1 && (h = !0),
        d('CometStyleXSheet').rootStyleSheet.insert(a, b, e);
    };
    c('stylex-runtime').inject = b;
    c('stylex-runtime').compose = a;
    g['default'] = c('stylex-runtime');
  },
  102,
);
