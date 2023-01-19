__d(
  'IntersectionObserver',
  ['IntersectionObserverFallback'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a =
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype;
    b = a ? window.IntersectionObserver : c('IntersectionObserverFallback');
    g['default'] = b;
  },
  98,
);
