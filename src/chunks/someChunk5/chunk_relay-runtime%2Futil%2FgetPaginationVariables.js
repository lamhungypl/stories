__d(
  'relay-runtime/util/getPaginationVariables',
  ['invariant', 'warning'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, c, d, e, f, h) {
      var i = h.backward;
      h = h.forward;
      if (a === 'backward') {
        (i != null && i.count != null && i.cursor != null) || g(0, 19801);
        b('warning')(
          !Object.prototype.hasOwnProperty.call(f, i.cursor),
          'Relay: `UNSTABLE_extraVariables` provided by caller should not contain cursor variable `%s`. This variable is automatically determined by Relay.',
          i.cursor,
        );
        b('warning')(
          !Object.prototype.hasOwnProperty.call(f, i.count),
          'Relay: `UNSTABLE_extraVariables` provided by caller should not contain count variable `%s`. This variable is automatically determined by Relay.',
          i.count,
        );
        a = babelHelpers['extends'](
          {},
          e,
          f,
          ((a = {}), (a[i.cursor] = d), (a[i.count] = c), a),
        );
        h && h.cursor && (a[h.cursor] = null);
        h && h.count && (a[h.count] = null);
        return a;
      }
      (h != null && h.count != null && h.cursor != null) || g(0, 19802);
      b('warning')(
        !Object.prototype.hasOwnProperty.call(f, h.cursor),
        'Relay: `UNSTABLE_extraVariables` provided by caller should not contain cursor variable `%s`. This variable is automatically determined by Relay.',
        h.cursor,
      );
      b('warning')(
        !Object.prototype.hasOwnProperty.call(f, h.count),
        'Relay: `UNSTABLE_extraVariables` provided by caller should not contain count variable `%s`. This variable is automatically determined by Relay.',
        h.count,
      );
      e = babelHelpers['extends'](
        {},
        e,
        f,
        ((a = {}), (a[h.cursor] = d), (a[h.count] = c), a),
      );
      i && i.cursor && (e[i.cursor] = null);
      i && i.count && (e[i.count] = null);
      return e;
    }
    e.exports = a;
  },
  null,
);
