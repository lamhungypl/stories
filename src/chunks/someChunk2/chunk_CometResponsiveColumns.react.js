__d(
  'CometResponsiveColumns.react',
  [
    'BaseRow.react',
    'BaseRowItem.react',
    'CometFeedWidthStyles',
    'react',
    'stylex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        container: {
          boxSizing: 'x9f619',
          maxWidth: 'x193iq5w',
          width: 'xh8yej3',
          $$css: !0,
        },
        containerPadding: {
          paddingStart: 'x1swvt13',
          paddingEnd: 'x1pi30zi',
          $$css: !0,
        },
        content: {
          alignItems: 'x1qjc9v5',
          display: 'x78zum5',
          flexDirection: 'x1q0g3np',
          flexWrap: 'x1a02dak',
          justifyContent: 'xl56j7k',
          $$css: !0,
        },
        negativeMargin: {
          marginTop: 'x9otpla',
          marginEnd: 'x1n0m28w',
          marginBottom: 'x1wsgfga',
          marginStart: 'xp7jhwk',
          $$css: !0,
        },
        reverse: { flexWrap: 'x8hhl5t', $$css: !0 },
      },
      j = d('CometFeedWidthStyles').getResponsiveColumnWidthStyles();
    function a(a) {
      var b = a.children,
        d = a.containerWidth,
        e = a.reverseColumns;
      e = e === void 0 ? !1 : e;
      var f = a.testid;
      f = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'children',
        'containerWidth',
        'reverseColumns',
        'testid',
        'xstyle',
      ]);
      return h.jsx(
        'div',
        babelHelpers['extends']({}, a, {
          className: c('stylex')(
            i.container,
            d === 'DEFAULT' && j.container,
            d === 'DEFAULT' && i.containerPadding,
            f,
          ),
          'data-testid': void 0,
          children: h.jsx(c('BaseRow.react'), {
            xstyle: [i.content, e && i.reverse, i.negativeMargin],
            children: b,
          }),
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    var k = {
      base: {
        marginTop: 'x1xmf6yo',
        marginEnd: 'x1emribx',
        marginBottom: 'x1e56ztr',
        marginStart: 'x1i64zmx',
        ':empty_display': 'xjl7jj',
        $$css: !0,
      },
    };
    function b(a) {
      var b = a.children,
        d = a.columnType,
        e = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'children',
        'columnType',
        'xstyle',
      ]);
      return h.jsx(
        c('BaseRowItem.react'),
        babelHelpers['extends']({}, a, {
          expanding: !0,
          useDeprecatedStyles: !0,
          xstyle: [
            k.base,
            d === 'FEED' && j.FEED,
            d === 'FULL' && j.FULL,
            d === 'SECONDARY' && j.SECONDARY,
            e,
          ],
          children: b,
        }),
      );
    }
    b.displayName = b.name + ' [from ' + f.id + ']';
    g.Container = a;
    g.Column = b;
  },
  98,
);
