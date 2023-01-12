__d(
  'CometCompositeFocusIndicator.react',
  [
    'fbt',
    'BaseFocusRing.react',
    'CometComponentWithKeyCommands.react',
    'CometCompositeStructureContext',
    'CometKeys',
    'gkx',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = d('react').useMemo,
      k = { noOutline: { outline: 'x1a2a7pz', $$css: !0 } },
      l = c('gkx')('1721477') || c('gkx')('1459');
    function a(a) {
      var b = a.children,
        d = a.compositeInfo;
      a = a.elementType;
      var e = j(
        function () {
          var a = [];
          d.horizontal === !0 &&
            a.push(
              {
                command: { key: c('CometKeys').RIGHT },
                description: h._('__JHASH__1VqMgLPpraa__JHASH__'),
                handler: function () {},
              },
              {
                command: { key: c('CometKeys').LEFT },
                description: h._('__JHASH__7zajSsSIBFZ__JHASH__'),
                handler: function () {},
              },
            );
          d.vertical === !0 &&
            a.push(
              {
                command: { key: c('CometKeys').UP },
                description: h._('__JHASH__1VqMgLPpraa__JHASH__'),
                handler: function () {},
              },
              {
                command: { key: c('CometKeys').DOWN },
                description: h._('__JHASH__7zajSsSIBFZ__JHASH__'),
                handler: function () {},
              },
            );
          return a;
        },
        [d],
      );
      return i.jsx(c('CometComponentWithKeyCommands.react'), {
        commandConfigs: e,
        debugName: 'composite-role_' + (d.role || ''),
        elementType: a,
        children: i.jsx(c('CometCompositeStructureContext').Provider, {
          value: d,
          children: i.jsx(c('BaseFocusRing.react'), {
            children: function (a) {
              return b(l ? a : k.noOutline);
            },
          }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
