__d(
  'getCrossOriginTransport',
  ['invariant', 'ExecutionEnvironment', 'err'],
  function (a, b, c, d, e, f, g) {
    function h() {
      if (!b('ExecutionEnvironment').canUseDOM)
        throw b('err')(
          'getCrossOriginTransport: %s',
          'Cross origin transport unavailable in the server environment.',
        );
      try {
        var a = new XMLHttpRequest();
        !('withCredentials' in a) &&
          typeof XDomainRequest !== 'undefined' &&
          (a = new XDomainRequest());
        return a;
      } catch (a) {
        throw b('err')('getCrossOriginTransport: %s', a.message);
      }
    }
    h.withCredentials = function () {
      var a = h();
      'withCredentials' in a || g(0, 5150);
      var b = a.open;
      a.open = function () {
        b.apply(this, arguments), (this.withCredentials = !0);
      };
      return a;
    };
    e.exports = h;
  },
  null,
);
