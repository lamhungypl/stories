__d(
  'oz-player/shims/www/VideoPlayerODSWWW',
  ['VideoPlayerODS'],
  function (a, b, c, d, e, f) {
    'use strict';
    Object.keys(importNamespace('VideoPlayerODS')).forEach(function (a) {
      if (a === 'default' || a === '__esModule') return;
      f[a] = importNamespace('VideoPlayerODS')[a];
    });
  },
  null,
);
