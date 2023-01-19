__d(
  'cometPrefetchVideoDashV2',
  ['CometDASHPrefetchCacheManager'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      if (window.__comet_ssr_is_server_env_DO_NOT_USE === !0) return;
      c('CometDASHPrefetchCacheManager') != null &&
        a != null &&
        Array.isArray(a) &&
        a.forEach(function (a) {
          if (a != null && a.video_id != null) {
            var b = String(a.video_id),
              d = [];
            Array.isArray(a.representations) &&
              a.representations.forEach(function (a) {
                var b = [];
                if (
                  a != null &&
                  Array.isArray(a.segments) &&
                  typeof a.representation_id === 'string' &&
                  typeof a.mime_type === 'string' &&
                  typeof a.codecs === 'string' &&
                  typeof a.bandwidth === 'number' &&
                  typeof a.width === 'number' &&
                  typeof a.height === 'number' &&
                  typeof a.base_url === 'string' &&
                  typeof a.playback_resolution_mos === 'string'
                ) {
                  var c = {
                    bandwidth: a.bandwidth,
                    baseURL: a.base_url,
                    codecs: a.codecs,
                    height: a.height,
                    mimeType: a.mime_type,
                    playbackResolutionMOS: a.playback_resolution_mos,
                    representationID: a.representation_id,
                    segments: [],
                    width: a.width,
                  };
                  a.segments.forEach(function (a) {
                    a != null &&
                      typeof a.start === 'number' &&
                      typeof a.end === 'number' &&
                      b.push({ end: a.end, start: a.start });
                  });
                  b.length > 0 && ((c.segments = b), d.push(c));
                }
              });
            d.length > 0 && c('CometDASHPrefetchCacheManager').fetch(b, d);
          }
        });
    }
    b = a;
    g['default'] = b;
  },
  98,
);
