__d(
  'getCometCreationLayoutBreadcrumbs',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b, c, d, e) {
      var f = [b != null ? { label: a, replace: !0, url: b } : { label: a }];
      b = function (a) {
        if (d[a].hideBreadcrumb !== !0) {
          var b = { label: d[a].title, onPress: void 0 };
          a !== c &&
            (b.onPress = function () {
              return e(a);
            });
          f.push(b);
        }
      };
      for (a = 0; a <= c; a++) b(a);
      return f;
    }
    f['default'] = a;
  },
  66,
);
