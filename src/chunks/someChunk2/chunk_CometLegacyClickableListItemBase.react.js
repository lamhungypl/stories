__d(
  'CometLegacyClickableListItemBase.react',
  [
    'CometLegacyListItemBase.react',
    'CometUnstyledButton_DEPRECATED.react',
    'react',
    'useCometAriaID',
    'useMergeRefs',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        auxiliary: {
          alignItems: 'x6s0dn4',
          bottom: 'x1ey2m1c',
          display: 'x78zum5',
          end: 'x92rtbv',
          position: 'x10l6tqk',
          top: 'x13vifvy',
          $$css: !0,
        },
        button: { ':active_transform': 'x1pdlv7q', $$css: !0 },
        disabled: {
          backgroundColor: 'x1f2gare',
          bottom: 'x1ey2m1c',
          end: 'xds687c',
          position: 'x10l6tqk',
          start: 'x17qophe',
          top: 'x13vifvy',
          $$css: !0,
        },
        indented: {
          paddingTop: 'x1y1aw1k',
          paddingEnd: 'x1sxyh0',
          paddingBottom: 'xwib8y2',
          paddingStart: 'xbbxn1n',
          $$css: !0,
        },
        listItem: {
          borderTop: 'x6umtig',
          borderEnd: 'x1b1mbwd',
          borderBottom: 'xaqea5y',
          borderStart: 'xav7gou',
          borderTopStartRadius: 'xhk9q7s',
          borderTopEndRadius: 'x1otrzb0',
          borderBottomEndRadius: 'x1i1ezom',
          borderBottomStartRadius: 'x1o6z2jb',
          cursor: 'x1ypdohk',
          fontFamily: 'xjb2p0i',
          marginTop: 'xdj266r',
          marginEnd: 'x1emribx',
          marginBottom: 'xat24cr',
          marginStart: 'x1i64zmx',
          textAlign: 'x1yc453h',
          $$css: !0,
        },
        root: { position: 'x1n2onr6', $$css: !0 },
        selected: { backgroundColor: 'x1iutvsz', $$css: !0 },
        unindented: {
          paddingTop: 'x1y1aw1k',
          paddingEnd: 'x1sxyh0',
          paddingBottom: 'xwib8y2',
          paddingStart: 'xurb0ha',
          $$css: !0,
        },
        unselected: {
          ':active_backgroundColor': 'x1164lod',
          ':hover_backgroundColor': 'x8du52y',
          $$css: !0,
        },
      };
    function a(a, b) {
      var d = a.addon;
      d = d === void 0 ? null : d;
      var e = a.children,
        f = a.indented;
      f = f === void 0 ? !1 : f;
      var g = a.right;
      g = g === void 0 ? null : g;
      var j = a.selected;
      j = j === void 0 ? !1 : j;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'addon',
        'children',
        'indented',
        'right',
        'selected',
      ]);
      var k = c('useCometAriaID')('aria-labelledby'),
        l = k[0],
        m = l[0];
      l = l[1];
      k = k[1];
      var n = k[0];
      k = k[1];
      b = c('useMergeRefs')(b, k);
      return h.jsxs('div', {
        className: 'x1n2onr6',
        children: [
          h.jsx(
            c('CometUnstyledButton_DEPRECATED.react'),
            babelHelpers['extends']({}, a, n, {
              expanded: !0,
              ref: b,
              xstyle: i.button,
              children: h.jsx(c('CometLegacyListItemBase.react'), {
                addon: d,
                className:
                  'x6umtig x1b1mbwd xaqea5y xav7gou xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk xjb2p0i xdj266r x1emribx xat24cr x1i64zmx x1yc453h' +
                  ((j
                    ? '' + (j ? '' : '' + (f ? '' + (f ? '' : '') : ''))
                    : ' x1164lod x8du52y') +
                    ((f
                      ? '' + (f ? ' x1y1aw1k x1sxyh0 xwib8y2 xbbxn1n' : '')
                      : ' x1y1aw1k x1sxyh0 xwib8y2 xurb0ha') +
                      (j ? ' x1iutvsz' : ''))),
                children: h.jsx(
                  'div',
                  babelHelpers['extends']({}, m, { ref: l, children: e }),
                ),
              }),
            }),
          ),
          g != null &&
            h.jsx('div', {
              className: 'x6s0dn4 x1ey2m1c x78zum5 x92rtbv x10l6tqk x13vifvy',
              children: g,
            }),
          a.disabled === !0
            ? h.jsx('div', {
                className:
                  'x1f2gare x1ey2m1c xds687c x10l6tqk x17qophe x13vifvy x6umtig x1b1mbwd xaqea5y xav7gou xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk xjb2p0i xdj266r x1emribx xat24cr x1i64zmx x1yc453h',
              })
            : null,
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
