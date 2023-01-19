__d(
  'CometPopoverLoadingState.react',
  [
    'fbt',
    'CometPopover.react',
    'CometPopoverLoadingStateContent.react',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      var b = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ['xstyle']);
      return i.jsx(
        c('CometPopover.react'),
        babelHelpers['extends'](
          { label: h._('__JHASH__6lD-XyRyuHe__JHASH__') },
          a,
          {
            children: i.jsx(c('CometPopoverLoadingStateContent.react'), {
              xstyle: b,
            }),
          },
        ),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
