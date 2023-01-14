__d(
  'BaseAspectRatioContainer.react',
  ['react', 'stylex', 'unrecoverableViolation'],
  function (Component, b, c, d, e, f, g) {
    'use strict';
    let react = d('react');

    function Component(a) {
      var aspectRatio = a.aspectRatio;
      let children = a.children;
      let contentStyle = a.contentStyle;
      let style = a.style;
      let g = a.testid;
      let xstyle = a.xstyle;

      if (aspectRatio <= 0)
        throw c('unrecoverableViolation')(
          'Aspect ratio must be a non-zero, positive number: ' + aspectRatio,
          'comet_ui',
        );

      return react.jsx('div', {
        className: c('stylex')(i.container, xstyle),
        'data-testid': void 0,
        style: babelHelpers['extends']({}, style, {
          paddingTop: 100 / aspectRatio + '%',
        }),
        children:
          children != null &&
          react.jsx('div', {
            className: c('stylex')(i.content, contentStyle),
            children: children,
          }),
      });
    }

    Component.displayName = Component.name + ' [from ' + f.id + ']';

    var i = {
      container: {
        height: 'xqtp20y',
        position: 'x1n2onr6',
        width: 'xh8yej3',
        $$css: !0,
      },
      content: {
        alignItems: 'x1qjc9v5',
        borderBottomStyle: 'x1q0q8m5',
        borderBottomWidth: 'x1qhh985',
        borderEndStyle: 'xu3j5b3',
        borderEndWidth: 'xcfux6l',
        borderStartStyle: 'x26u7qi',
        borderStartWidth: 'xm0m39n',
        borderTopStyle: 'x13fuv20',
        borderTopWidth: 'x972fbf',
        bottom: 'x1ey2m1c',
        boxSizing: 'x9f619',
        display: 'x78zum5',
        end: 'xds687c',
        flexDirection: 'xdt5ytf',
        flexGrow: 'x1iyjqo2',
        flexShrink: 'xs83m0k',
        justifyContent: 'x1qughib',
        marginBottom: 'xat24cr',
        marginEnd: 'x11i5rnm',
        marginStart: 'x1mh8g0r',
        marginTop: 'xdj266r',
        minHeight: 'x2lwn1j',
        minWidth: 'xeuugli',
        paddingBottom: 'x18d9i69',
        paddingEnd: 'x4uap5',
        paddingStart: 'xkhd6sd',
        paddingTop: 'xexx8yu',
        position: 'x10l6tqk',
        start: 'x17qophe',
        top: 'x13vifvy',
        zIndex: 'x1ja2u2z',
        $$css: !0,
      },
    };
    g['default'] = Component;
  },
  98,
);
