__d(
  'AbstractLinkLynxMode',
  ['FBLynx', 'LinkshimHandlerConfig'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      return a
        ? [c('LinkshimHandlerConfig').www_safe_js_mode, null]
        : ['hover', null];
    }
    function b() {
      d('FBLynx').setupDelegation();
    }
    g.getMode = a;
    g.setupDelegation = b;
  },
  98,
);
