__d(
  'decodeTrackingNode',
  ['TrackingNodeConstants'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      if (a.length === 0) return [0];
      var b = function (a, b, e) {
          var c = 0;
          for (var f = b; f < e + b; f += 1) {
            if (
              !(
                f < a.length &&
                a.charCodeAt(f) >= d('TrackingNodeConstants').BASE_CODE_START &&
                a.charCodeAt(f) <= d('TrackingNodeConstants').BASE_CODE_END
              )
            )
              return null;
            c =
              c * d('TrackingNodeConstants').BASE_CODE_SIZE +
              (a.charCodeAt(f) - d('TrackingNodeConstants').BASE_CODE_START);
          }
          return c;
        },
        c = function (a, c) {
          if (c >= a.length) return [null, c];
          var e = c,
            f = null,
            g = 0;
          switch (a.charCodeAt(0)) {
            case d('TrackingNodeConstants')
              .ENCODED_STRING_WITH_TWO_SYMBOLS_PREFIX_CODE:
              f = b(a, c, 2);
              g = d(
                'TrackingNodeConstants',
              ).TOTAL_IDS_SUPPORTED_BY_LEGACY_ENCODING;
              e += 2;
              break;
            case d('TrackingNodeConstants')
              .ENCODED_STRING_WITH_THREE_SYMBOLS_PREFIX_CODE:
              f = b(a, c, 3);
              g =
                d('TrackingNodeConstants')
                  .TOTAL_IDS_SUPPORTED_BY_LEGACY_ENCODING +
                Math.pow(d('TrackingNodeConstants').BASE_CODE_SIZE, 2);
              e += 3;
              break;
            default:
              return [null, c];
          }
          return f === null
            ? [null, c]
            : [g + ((a = f) != null ? a : 0) + 1, e];
        },
        e = a.charCodeAt(0),
        f = 1,
        g = 0,
        h = 0,
        i = 0;
      if (
        [
          d('TrackingNodeConstants')
            .ENCODED_STRING_WITH_TWO_SYMBOLS_PREFIX_CODE,
          d('TrackingNodeConstants')
            .ENCODED_STRING_WITH_THREE_SYMBOLS_PREFIX_CODE,
        ].includes(e)
      ) {
        var j;
        c = c(a, f);
        if (c[0] === null) return [0];
        i = (j = c[0]) != null ? j : -1;
        f = c[1];
      } else {
        if (
          e >= d('TrackingNodeConstants').PREFIX_CODE_START &&
          e <= d('TrackingNodeConstants').PREFIX_CODE_END
        ) {
          if (a.length === 1) return [0];
          h = e - d('TrackingNodeConstants').PREFIX_CODE_START + 1;
          g = a.charCodeAt(1);
          f = 2;
        } else (h = 0), (g = e);
        if (
          g < d('TrackingNodeConstants').BASE_CODE_START ||
          g > d('TrackingNodeConstants').BASE_CODE_END
        )
          return [0];
        i =
          h * d('TrackingNodeConstants').BASE_CODE_SIZE +
          (g - d('TrackingNodeConstants').BASE_CODE_START) +
          1;
      }
      if (
        a.length > f + 2 &&
        a.charAt(f) === '#' &&
        a.charAt(f + 1) >= '0' &&
        a.charAt(f + 1) <= '9' &&
        a.charAt(f + 2) >= '0' &&
        a.charAt(f + 2) <= '9'
      )
        return [
          f + 3,
          [i, parseInt(a.charAt(f + 1) + a.charAt(f + 2), 10) + 1],
        ];
      return a.length > f && a.charAt(f) >= '0' && a.charAt(f) <= '9'
        ? [f + 1, [i, parseInt(a.charAt(f), 10) + 1]]
        : [f, [i]];
    }
    g['default'] = a;
  },
  98,
);
