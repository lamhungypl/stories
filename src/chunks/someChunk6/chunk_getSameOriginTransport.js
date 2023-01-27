__d(
  'getSameOriginTransport',
  ['ExecutionEnvironment', 'err'],
  function (a, b, c, d, e, f) {
    function c() {
      if (!b('ExecutionEnvironment').canUseDOM)
        throw b('err')(
          'getSameOriginTransport: %s',
          'Same origin transport unavailable in the server environment.',
        );
      try {
        return new a.XMLHttpRequest();
      } catch (a) {
        throw b('err')('getSameOriginTransport: %s', a.message);
      }
    }
    e.exports = c;
  },
  null,
);
