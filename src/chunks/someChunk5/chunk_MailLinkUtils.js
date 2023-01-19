__d(
  'MailLinkUtils',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = new RegExp('mailto:.*@.*');
    function a(a) {
      return a == null ? !1 : g.test(a);
    }
    f.isMailToLink = a;
  },
  66,
);
