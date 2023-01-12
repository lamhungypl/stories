__d(
  'reduceStoriesCreateViewState',
  ['StoriesCreateDefaultState'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, c) {
      if (c.type === 'RESET_VIEWSTATE_SET_ERROR')
        return babelHelpers['extends'](
          {},
          d('StoriesCreateDefaultState').getStoriesCreateInitialState(),
          { errorMessage: c.errorMessage },
        );
      if (c.type === 'CLEAR_ERROR')
        return babelHelpers['extends']({}, b, { errorMessage: void 0 });
      if (c.type === 'restart')
        return d('StoriesCreateDefaultState').getStoriesCreateInitialState();
      b = b;
      a = a.current.keys();
      for (
        var a = a,
          e = Array.isArray(a),
          f = 0,
          a = e
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var g;
        if (e) {
          if (f >= a.length) break;
          g = a[f++];
        } else {
          f = a.next();
          if (f.done) break;
          g = f.value;
        }
        g = g;
        b = g(b, c);
      }
      return b;
    }
    g['default'] = a;
  },
  98,
);
