__d(
  'CometPagelet.react',
  [
    'CometBackupPlaceholder.react',
    'CometPlaceholder.react',
    'CometSuspenseList.react',
    'LegacyHidden',
    'cr:1191379',
    'gkx',
    'react',
    'useCometIgnoreLateMutation',
    'useMergeRefs',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    d = h.forwardRef(function (a, b) {
      a = a.children;
      return h.jsxs(h.Fragment, {
        children: [
          ' ',
          a(b, function () {
            return null;
          }),
          ' ',
        ],
      });
    });
    var i = (b = b('cr:1191379')) != null ? b : d;
    function a(a, b) {
      var d = a.children,
        e = a.className,
        f = a.fallback,
        g = a.hidden,
        j = a.ignoreLateMutation,
        k = a.name,
        l = a.pageletAriaProps,
        m = a.position;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'children',
        'className',
        'fallback',
        'hidden',
        'ignoreLateMutation',
        'name',
        'pageletAriaProps',
        'position',
      ]);
      var n = k;
      m != null && m < 2 ? (n += '_' + m) : m != null && (n += '_{n}');
      var o = c('gkx')('1799634'),
        p = babelHelpers['extends']({}, o ? null : { 'data-pagelet': n });
      o = c('useCometIgnoreLateMutation')(j === !0);
      j = c('useMergeRefs')(b, o);
      return h.jsx(
        i,
        babelHelpers['extends']({}, a, {
          name: n,
          pageletName: k,
          position: m,
          ref: j,
          children: function (a, b) {
            return h.jsxs(c('CometPlaceholder.react'), {
              fallback: f,
              children: [
                h.jsx(b, {}),
                h.jsx(c('LegacyHidden'), {
                  htmlAttributes: babelHelpers['extends'](
                    { className: e },
                    l,
                    p,
                  ),
                  mode: g === !0 ? 'hidden' : 'visible',
                  ref: a,
                  children: d,
                }),
              ],
            });
          },
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function e(a, b) {
      var d = a.children,
        e = a.className,
        f = a.fallback,
        g = a.hidden,
        j = a.ignoreLateMutation,
        k = a.name,
        l = a.pageletAriaProps,
        m = a.position;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'children',
        'className',
        'fallback',
        'hidden',
        'ignoreLateMutation',
        'name',
        'pageletAriaProps',
        'position',
      ]);
      k = k;
      m != null && m < 2 ? (k += '_' + m) : m != null && (k += '_{n}');
      var n = c('gkx')('1799634'),
        o = babelHelpers['extends']({}, n ? null : { 'data-pagelet': k });
      n = c('useCometIgnoreLateMutation')(j === !0);
      j = c('useMergeRefs')(b, n);
      return h.jsx(
        i,
        babelHelpers['extends']({}, a, {
          name: k,
          position: m,
          ref: j,
          children: function (a, b) {
            return h.jsxs(c('CometBackupPlaceholder.react'), {
              fallback: f,
              children: [
                h.jsx(b, {}),
                h.jsx(c('LegacyHidden'), {
                  htmlAttributes: babelHelpers['extends']({}, o, l, {
                    className: e,
                  }),
                  mode: g === !0 ? 'hidden' : 'visible',
                  ref: a,
                  children: d,
                }),
              ],
            });
          },
        }),
      );
    }
    e.displayName = e.name + ' [from ' + f.id + ']';
    function j(a, b) {
      var d = a.children,
        e = a.className,
        f = a.hidden,
        g = a.name,
        j = a.pageletAriaProps,
        k = a.position,
        l = a.revealOrder,
        m = a.tail;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'children',
        'className',
        'hidden',
        'name',
        'pageletAriaProps',
        'position',
        'revealOrder',
        'tail',
      ]);
      g = g;
      k != null && k < 2 ? (g += '_' + k) : k != null && (g += '_{n}');
      var n = c('gkx')('1799634'),
        o = babelHelpers['extends']({}, n ? null : { 'data-pagelet': g });
      return h.jsx(
        i,
        babelHelpers['extends']({}, a, {
          name: g,
          position: k,
          ref: b,
          children: function (a, b) {
            return h.jsxs(c('LegacyHidden'), {
              htmlAttributes: babelHelpers['extends']({ className: e }, j, o),
              mode: f === !0 ? 'hidden' : 'visible',
              ref: a,
              children: [
                h.jsx(b, {}),
                h.jsx(c('CometSuspenseList.react'), {
                  revealOrder: l,
                  tail: m,
                  children: d,
                }),
              ],
            });
          },
        }),
      );
    }
    j.displayName = j.name + ' [from ' + f.id + ']';
    b = h.forwardRef(e);
    d = h.forwardRef(a);
    f = h.forwardRef(j);
    g.BackupPlaceholder = b;
    g.Placeholder = d;
    g.SuspenseList = f;
  },
  98,
);
