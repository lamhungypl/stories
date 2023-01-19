__d(
  'BasePopoverSVGArrowContainer.react',
  [
    'BaseContextualLayerContextSizeContext',
    'BaseContextualLayerLayerAdjustmentContext',
    'BaseContextualLayerOrientationContext',
    'BasePopoverDownEdgeArrow.svg.react',
    'BasePopoverDownInsetArrow.svg.react',
    'BasePopoverRightEdgeArrow.svg.react',
    'BasePopoverRightInsetArrow.svg.react',
    'Locale',
    'react',
    'stylex',
    'testID',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useMemo,
      k = 3,
      l = c('Locale').isRTL(),
      m = 25,
      n = {
        arrow: { position: 'x10l6tqk', $$css: !0 },
        container: { position: 'x1n2onr6', $$css: !0 },
      },
      o = {
        above: { filter: 'x1fayt1i', marginBottom: 'x1fqp7bg', $$css: !0 },
        below: { filter: 'x1fayt1i', marginTop: 'xcxhlts', $$css: !0 },
        end: { filter: 'x1fayt1i', marginStart: 'x13ibhcj', $$css: !0 },
        start: { filter: 'x1fayt1i', marginEnd: 'x1jqylkn', $$css: !0 },
      },
      p = {
        above: { top: 'x11k2h6o', $$css: !0 },
        below: { bottom: 'xng853d', $$css: !0 },
        end: { end: 'x1gozi89', $$css: !0 },
        start: { start: 'x1ke83zm', $$css: !0 },
      },
      q = {
        end: { end: 'xds687c', $$css: !0 },
        middle: { start: 'xu8u0ou', $$css: !0 },
        start: { start: 'x17qophe', $$css: !0 },
        stretch: { $$css: !0 },
      },
      r = {
        end: { bottom: 'x1ey2m1c', $$css: !0 },
        middle: { top: 'x18g6o9x', $$css: !0 },
        start: { top: 'x13vifvy', $$css: !0 },
        stretch: { $$css: !0 },
      };
    function s(a, b, c) {
      c = c - k;
      if (!a) return b === 'end' || b === 'middle' ? c * -1 : c;
      return (l && b === 'start') || (!l && b === 'end') ? c * -1 : c;
    }
    function t(a, b, c, d) {
      if (c === 'edge' || d == null) return {};
      c = a === 'below' || a === 'above';
      a = c ? d.width : d.height;
      d = a > 0 ? a / 2 : 0;
      if (d === 0) return {};
      a = s(c, b, b === 'middle' ? m / 2 : d);
      return {
        transform: c ? 'translateX(' + a + 'px)' : 'translateY(' + a + 'px)',
      };
    }
    function u(a, b) {
      return a === 'above' || a === 'below'
        ? b === 'middle'
          ? c('BasePopoverDownInsetArrow.svg.react')
          : c('BasePopoverDownEdgeArrow.svg.react')
        : b === 'middle'
        ? c('BasePopoverRightInsetArrow.svg.react')
        : c('BasePopoverRightEdgeArrow.svg.react');
    }
    function a(a, b) {
      var d,
        e = a.arrowAlignment,
        f = a.children,
        g = a.testid,
        k = a.withArrow,
        m = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'arrowAlignment',
        'children',
        'testid',
        'withArrow',
        'xstyle',
      ]);
      var s = i(c('BaseContextualLayerOrientationContext')),
        v = s.align,
        w = s.position,
        x = i(c('BaseContextualLayerContextSizeContext'));
      s = u(w, v);
      var y =
        (d = i(c('BaseContextualLayerLayerAdjustmentContext'))) != null ? d : 0;
      d = j(
        function () {
          var a = l ? 'start' : 'end',
            b = l ? 'end' : 'start',
            c = (v === 'end' && !l) || (v === 'start' && l),
            d = 1,
            f = 1,
            g = 0,
            h = 0;
          switch (w) {
            case 'above':
              g += -y;
              c && (d = -1);
              break;
            case 'below':
              g += -y;
              f = -1;
              c && (d = -1);
              break;
            case b:
              h += -y;
              v === 'start' && (f = -1);
              break;
            case a:
              h += -y;
              d = -1;
              v === 'start' && (f = -1);
              break;
          }
          return {
            arrowStyle: {
              transform:
                'scale(' +
                d +
                ', ' +
                f +
                ') translate(' +
                g +
                'px, ' +
                h +
                'px)',
            },
            containerStyle: t(w, v, e, x),
          };
        },
        [v, e, x, y, w],
      );
      var z = d.arrowStyle;
      d = d.containerStyle;
      return h.jsxs(
        'div',
        babelHelpers['extends'](
          {},
          a,
          {
            className: c('stylex')(n.container, m, k && o[w]),
            ref: b,
            style: k ? d : void 0,
          },
          c('testID')(g),
          {
            children: [
              f,
              k
                ? h.jsx(s, {
                    className: c('stylex')(
                      n.arrow,
                      p[w],
                      (w === 'start' || w === 'end') && r[v],
                      (w === 'above' || w === 'below') && q[v],
                    ),
                    fill: 'var(--card-background)',
                    style: z,
                  })
                : null,
            ],
          },
        ),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = h.forwardRef(a);
    g['default'] = e;
  },
  98,
);
