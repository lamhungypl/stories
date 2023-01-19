__d(
  'CometLineClamp.react',
  [
    'CSSUserAgentSupports',
    'CometPlaceholder.react',
    'CometTextContext',
    'CometTextTypography',
    'JSResourceForInteraction',
    'cr:2099',
    'lazyLoadComponent',
    'react',
    'stylex',
    'useMergeRefs',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    e = d('react');
    var i = e.useCallback,
      j = e.useContext,
      k = e.useRef,
      l = e.useState;
    e =
      (d = b('cr:2099')) != null
        ? d
        : { useTranslationKeyForTextParent: function () {} };
    var m = e.useTranslationKeyForTextParent,
      n = c('JSResourceForInteraction')('CometTooltip.react').__setRef(
        'CometLineClamp.react',
      ),
      o = c('lazyLoadComponent')(n),
      p = c('CSSUserAgentSupports').webkitLineClamp(),
      q = {
        ellipsis: {
          end: 'xds687c',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          position: 'x10l6tqk',
          $$css: !0,
        },
        oneLine: { textOverflow: 'xlyipyv', whiteSpace: 'xuxw1ft', $$css: !0 },
        root: {
          display: 'x1lliihq',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          position: 'x1n2onr6',
          $$css: !0,
        },
      };
    function a(a, b) {
      var d = a.children,
        e = a.id,
        f = a.lines,
        g = a.testid,
        s = a.truncationTooltip;
      g = a.useAutomaticTextDirection;
      g = g === void 0 ? !1 : g;
      a = a.xstyle;
      var t = j(c('CometTextContext')),
        u = m(),
        v = l(!1),
        w = v[0],
        x = v[1],
        y = k(null);
      v = d;
      var z;
      if (f > 1)
        if (p)
          z = {
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: f,
            display: '-webkit-box',
          };
        else {
          d = r(t == null ? void 0 : t.type);
          z = { maxHeight: d * f + 0.1 };
          t = {
            maxHeight: 'calc((100% - ' + d * f + 'px) * 999)',
            top: d * (f - 1),
          };
          v = h.jsxs(h.Fragment, {
            children: [
              v,
              h.jsx('span', {
                'aria-hidden': !0,
                className: 'xds687c x6ikm8r x10wlt62 x10l6tqk',
                style: t,
                children: '\u2026',
              }),
            ],
          });
        }
      d = function () {
        var a = y.current;
        if (a == null || f < 1) return;
        x(a.offsetWidth < a.scrollWidth || a.offsetHeight < a.scrollHeight);
      };
      t = i(
        function (a) {
          if (a == null || s == null) return;
          n.preload();
        },
        [s],
      );
      b = c('useMergeRefs')(b, y, t);
      t = h.jsx(
        'span',
        {
          className: c('stylex')(q.root, f === 1 && q.oneLine, a),
          'data-testid': void 0,
          dir: g ? 'auto' : void 0,
          id: e,
          onMouseEnter: s != null ? d : void 0,
          ref: b,
          style: z,
          children: v,
        },
        u,
      );
      return w
        ? h.jsx(c('CometPlaceholder.react'), {
            fallback: t,
            children: h.jsx(o, { tooltip: s, children: t }),
          })
        : t;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function r(a) {
      return a != null && a in c('CometTextTypography')
        ? c('CometTextTypography')[a].lineHeight
        : 16;
    }
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
