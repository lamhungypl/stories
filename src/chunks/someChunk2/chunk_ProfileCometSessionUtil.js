__d(
  'ProfileCometSessionUtil',
  ['ProfileCometRoutingUtils', 'ProfileCometSessionConfig'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a) {
      var b = a.tracePolicy;
      if (d('ProfileCometRoutingUtils').isProfilePolicy(b)) {
        b = a.params;
        a = b.profile_idorvanity;
        b = b.vanity;
        if (typeof b === 'string') return b;
        return typeof a === 'string' ? a : null;
      }
      return null;
    }
    function i(a) {
      var b = a.tracePolicy;
      if (d('ProfileCometRoutingUtils').isProfilePolicy(b)) {
        b = a.params;
        a = b.id;
        b = b.profile_idorvanity;
        if (typeof a === 'string') return a;
        if (typeof b === 'string') return b;
      }
      return null;
    }
    function a(a, b) {
      if (b == null) return !1;
      var c = b.tracePolicy;
      if (!d('ProfileCometRoutingUtils').isProfilePolicy(c)) return !1;
      if (a == null) return !0;
      c = a.tracePolicy;
      if (!d('ProfileCometRoutingUtils').isProfilePolicy(c)) return !1;
      c = h(b);
      var e = h(a);
      b = i(b);
      a = i(a);
      return (c != null && c === e) || (b != null && b === a);
    }
    function b(a) {
      var b = [];
      for (var c = 0; c < a.length; c++) {
        var e = a.key(c);
        e != null &&
          e.startsWith(d('ProfileCometSessionConfig').PREFIX) &&
          b.push(e);
      }
      return b;
    }
    g.isSameProfileSession = a;
    g.getStorageKeys = b;
  },
  98,
);
