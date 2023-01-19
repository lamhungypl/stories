__d(
  'encodeTrackingNode',
  ['TrackingNodeConstants'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      var c = function (a) {
          return Math.pow(d('TrackingNodeConstants').BASE_CODE_SIZE, a);
        },
        e = function (a, b) {
          var c = '';
          a = a;
          b = b;
          while (b > 0) {
            var e = a % d('TrackingNodeConstants').BASE_CODE_SIZE;
            c =
              String.fromCharCode(
                d('TrackingNodeConstants').BASE_CODE_START + e,
              ) + c;
            a = parseInt(a / d('TrackingNodeConstants').BASE_CODE_SIZE, 10);
            b -= 1;
          }
          return c;
        },
        f = function (a) {
          a =
            a -
            d('TrackingNodeConstants').TOTAL_IDS_SUPPORTED_BY_LEGACY_ENCODING -
            1;
          if (a < c(2))
            return (
              String.fromCharCode(
                d('TrackingNodeConstants')
                  .ENCODED_STRING_WITH_TWO_SYMBOLS_PREFIX_CODE,
              ) + e(a, 2)
            );
          a -= c(2);
          return (
            String.fromCharCode(
              d('TrackingNodeConstants')
                .ENCODED_STRING_WITH_THREE_SYMBOLS_PREFIX_CODE,
            ) + e(a, 3)
          );
        },
        g = (a - 1) % d('TrackingNodeConstants').BASE_CODE_SIZE,
        h = parseInt((a - 1) / d('TrackingNodeConstants').BASE_CODE_SIZE, 10);
      if (
        a < 1 ||
        a >
          (d('TrackingNodeConstants').PREFIX_CODE_SIZE + 1) *
            d('TrackingNodeConstants').BASE_CODE_SIZE +
            Math.pow(d('TrackingNodeConstants').BASE_CODE_SIZE, 2) +
            Math.pow(d('TrackingNodeConstants').BASE_CODE_SIZE, 3)
      )
        throw Error('Invalid tracking node: ' + a);
      var i = '';
      h > d('TrackingNodeConstants').PREFIX_CODE_SIZE
        ? (i += f(a))
        : (h > 0 &&
            (i += String.fromCharCode(
              h - 1 + d('TrackingNodeConstants').PREFIX_CODE_START,
            )),
          (i += String.fromCharCode(
            g + d('TrackingNodeConstants').BASE_CODE_START,
          )));
      b !== void 0 &&
        b > 0 &&
        (b > 10 && (i += '#'),
        (i += parseInt(
          Math.min(b, d('TrackingNodeConstants').ENCODE_NUMBER_MAX) - 1,
          10,
        )));
      return i;
    }
    g['default'] = a;
  },
  98,
);
