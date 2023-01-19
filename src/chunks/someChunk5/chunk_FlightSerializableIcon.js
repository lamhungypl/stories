__d(
  'FlightSerializableIcon',
  ['IconSource', 'ImageIconSource', 'TintableIconSource'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      if (
        typeof a === 'object' &&
        typeof a !== 'function' &&
        a != null &&
        (a.flight_icon_type === 'TintableIconSource' ||
          a.$$typeof === 'fb.tintableiconsource')
      ) {
        var b = a;
        return new (c('TintableIconSource'))(b.domain, b.src, b.size);
      }
      if (
        typeof a === 'object' &&
        typeof a !== 'function' &&
        a != null &&
        (a.flight_icon_type === 'IconSource' || a.$$typeof === 'fb.iconsource')
      ) {
        b = a;
        return new (c('IconSource'))(b.domain, b.src, b.size);
      }
      if (
        typeof a === 'object' &&
        typeof a !== 'function' &&
        a != null &&
        (a.flight_icon_type === 'ImageIconSource' ||
          a.$$typeof === 'fb.imageiconsource')
      ) {
        b = a;
        return new (c('ImageIconSource'))(
          b.src,
          b.width,
          b.height,
          b.resizeStrategy,
        );
      }
      return a;
    }
    g.parseFlightIcon = a;
  },
  98,
);
