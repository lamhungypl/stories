__d(
  'BaseKeyCommandListener.react',
  [
    'CometGlobalKeyCommandWidget',
    'CometKeyCommandUtilsContext',
    'ReactDOMComet',
    'applyKeyCommand',
    'getActiveCommands',
    'getKeyCommand',
    'react',
    'recoverableViolation',
    'useGetComposingState',
    'useGlobalEventListener',
    'useUnsafeRef_DEPRECATED',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useContext,
      k = b.useMemo,
      l = b.useRef;
    function m(a, b) {
      var c;
      return function () {
        window.clearTimeout(c), (c = window.setTimeout(a, b));
      };
    }
    var n = 100;
    function a(a) {
      var b = l(null),
        e = l(null),
        f = l(new Set()),
        g = j(c('CometGlobalKeyCommandWidget').Context),
        o = i(
          function (d) {
            if (!a.observersEnabled)
              return {
                getActiveCommands: function () {
                  c('recoverableViolation')(
                    'Key Command observers are not supported in this context',
                    'comet_ax',
                  );
                  return null;
                },
                remove: function () {},
              };
            var h = f.current;
            h.add(d);
            return {
              getActiveCommands: function () {
                return c('getActiveCommands')(e.current, b.current, g);
              },
              remove: function () {
                h['delete'](d);
              },
            };
          },
          [g, a.observersEnabled],
        ),
        p = i(
          function (b) {
            a.observersEnabled &&
              f.current.forEach(function (a) {
                return a({ key: b, type: 'triggered' });
              });
          },
          [a.observersEnabled],
        ),
        q = k(
          function () {
            return m(function () {
              a.observersEnabled &&
                f.current.forEach(function (a) {
                  return a({ type: 'update' });
                });
            }, n);
          },
          [a.observersEnabled],
        ),
        r = i(
          function (a) {
            var c = b.current !== a;
            b.current = a;
            c && q();
          },
          [q],
        ),
        s = i(
          function (a) {
            var b = e.current !== a;
            e.current = a;
            b && q();
          },
          [q],
        );
      o = c('useUnsafeRef_DEPRECATED')({
        addObserver: o,
        notifyCommandUpdate: q,
        setActiveLayer: r,
        setActiveWrapper: s,
      });
      r = i(
        function () {
          var a = e.current !== null;
          e.current = null;
          a && q();
        },
        [q],
      );
      var t = c('useGetComposingState')();
      s = i(
        function (a) {
          if (t(a)) return;
          d('ReactDOMComet').flushSync(function () {
            var d = c('applyKeyCommand')(a, e.current, b.current, g);
            if (d) {
              d = c('getKeyCommand')(a);
              p(d);
            }
          });
        },
        [t, g, p],
      );
      c('useGlobalEventListener')('keydown', s);
      c('useGlobalEventListener')('keyup', s);
      return h.jsx(c('CometKeyCommandUtilsContext').Provider, {
        value: o.current,
        children: h.jsx('div', { onBlurCapture: r, children: a.children }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
