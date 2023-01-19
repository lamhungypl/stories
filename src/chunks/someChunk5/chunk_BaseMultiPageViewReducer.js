__d(
  'BaseMultiPageViewReducer',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = 0;
    function h() {
      return g++;
    }
    b = [{ key: h(), type: 'initial_page' }];
    function a(a, b) {
      var c = a.filter(function (a) {
        return a.type !== 'pushed_page' || !a.removed;
      });
      switch (b.type) {
        case 'push_page':
          return c.concat([
            {
              component: b.component,
              direction: b.direction,
              key: h(),
              removed: !1,
              type: 'pushed_page',
            },
          ]);
        case 'clear_removed_pages':
          return c;
        case 'pop_page':
          var d = c[c.length - 1];
          if (d.type === 'pushed_page')
            return [].concat(
              c.slice(0, b.index != null ? Math.max(b.index + 1, 1) : -1),
              [babelHelpers['extends']({}, d, { removed: !0 })],
            );
      }
      return a;
    }
    f.initialState = b;
    f.reducer = a;
  },
  66,
);
