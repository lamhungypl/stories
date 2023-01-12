__d(
  'useStoriesShowEpdBlockToast',
  ['fbt', 'cometPushToast', 'useToasterStateManager'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    function a() {
      var a = c('useToasterStateManager')(),
        b = h._('__JHASH__YbdNdxe72vs__JHASH__');
      return function () {
        d('cometPushToast').cometPushErrorToast({ message: b }, void 0, a);
      };
    }
    g['default'] = a;
  },
  98,
);
