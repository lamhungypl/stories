__d(
  'EmptyStream',
  ['Promise'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      amendWithoutAck: function (a) {},
      amendWithAck: function (a) {
        return new (b('Promise'))(function () {
          return !1;
        });
      },
      cancel: function () {},
      start: function () {
        return new (b('Promise'))(function () {
          return null;
        });
      },
    };
    c = a;
    f['default'] = c;
  },
  66,
);
