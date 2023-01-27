__d(
  'isSameOriginOrRelativePath_DEPRECATED',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      if (a.isEmpty() || b.isEmpty()) return !1;
      if (a.getProtocol() && a.getProtocol() != b.getProtocol()) return !1;
      if (a.getDomain() && a.getDomain() != b.getDomain()) return !1;
      return a.getPort() && a.getPort().toString() !== b.getPort().toString()
        ? !1
        : !0;
    }
    f['default'] = a;
  },
  66,
);
