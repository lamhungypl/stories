__d(
  'DocumentTranslationStatusProvider.react',
  ['DocumentTranslationStatusContext', 'react', 'uuid'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    e = d('react');
    var i = e.useContext,
      j = e.useEffect,
      k = e.useState;
    function a(a) {
      a = a.children;
      var b = k(!1),
        d = b[0],
        e = b[1];
      j(function () {
        var a = document.documentElement;
        if (a == null) return;
        var b = new MutationObserver(function () {
          a.className.match('translated') ? e(!0) : e(!1);
        });
        b.observe(a, {
          attributeFilter: ['class'],
          attributes: !0,
          characterData: !1,
          childList: !1,
        });
        a.className.match('translated') && e(!0);
        return function () {
          return b.disconnect();
        };
      }, []);
      return h.jsx(c('DocumentTranslationStatusContext').Provider, {
        value: d,
        children: a,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function b() {
      var a = i(c('DocumentTranslationStatusContext'));
      if (a) return c('uuid')();
      else return void 0;
    }
    g.DocumentTranslationStatusProvider = a;
    g.useTranslationKeyForTextParent = b;
  },
  98,
);
