__d(
  'BaseMultiPageView.react',
  ['BaseMultiPageViewContainer.react', 'BaseMultiPageViewReducer', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useReducer;
    function a(a, b) {
      a = babelHelpers['extends']({}, a);
      var e = j(
          d('BaseMultiPageViewReducer').reducer,
          d('BaseMultiPageViewReducer').initialState,
        ),
        f = e[0],
        g = e[1];
      e = i(
        function (a, b) {
          g({ component: b, direction: a, type: 'push_page' });
        },
        [g],
      );
      var k = i(
          function (a) {
            return g({ index: a == null ? void 0 : a.index, type: 'pop_page' });
          },
          [g],
        ),
        l = i(
          function () {
            g({ type: 'clear_removed_pages' });
          },
          [g],
        );
      return h.jsx(
        c('BaseMultiPageViewContainer.react'),
        babelHelpers['extends']({}, a, {
          onAddPage: e,
          onClearRemovedPages: l,
          onPopPage: k,
          pageHistory: f,
          ref: b,
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = h.forwardRef(a);
    g['default'] = e;
  },
  98,
);
