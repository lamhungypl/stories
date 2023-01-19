__d(
  'VideoPlayerODS',
  ['ODS', 'Random'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = function (a, b, c) {
      d('Random').coinflip(c) && d('ODS').bumpEntityKey(2079, a, b, c);
    };
    g.bumpEntityKey = a;
  },
  98,
);
