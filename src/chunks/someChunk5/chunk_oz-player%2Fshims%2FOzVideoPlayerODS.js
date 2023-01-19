__d(
  'oz-player/shims/OzVideoPlayerODS',
  ['oz-player/shims/www/VideoPlayerODSWWW'],
  function (a, b, c, d, e, f) {
    'use strict';
    Object.keys(
      importNamespace('oz-player/shims/www/VideoPlayerODSWWW'),
    ).forEach(function (a) {
      if (a === 'default' || a === '__esModule') return;
      f[a] = importNamespace('oz-player/shims/www/VideoPlayerODSWWW')[a];
    });
  },
  null,
);
