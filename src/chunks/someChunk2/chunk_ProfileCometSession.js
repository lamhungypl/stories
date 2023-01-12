__d(
  'ProfileCometSession',
  [
    'ProfileCometSessionConfig',
    'ProfileCometSessionUtil',
    'ProfileEngagementFalcoEvent',
    'WebStorage',
    'uuid',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a) {
      var b = i();
      return b === null
        ? null
        : d('ProfileCometSessionConfig').PREFIX + ':' + a + ':' + b;
    }
    function i() {
      var a = c('WebStorage').getSessionStorageForRead();
      if (!a) return null;
      var b = d('ProfileCometSessionConfig').PREFIX + ':tabID';
      a = a.getItem(b);
      if (a == null) {
        a = c('uuid')();
        var e = c('WebStorage').getSessionStorage();
        if (!e) return null;
        e.setItem(b, a);
      }
      return a;
    }
    function j(a) {
      if (a == null) return 'timeline';
      if (a === 'comet.profile.timeline.grid') return 'timeline_overview';
      if (a.startsWith('comet.profile.collection.friend'))
        return 'friends_page';
      return a.startsWith('comet.profile.collection')
        ? 'about_page'
        : 'timeline';
    }
    function k(a, b, d) {
      c('ProfileEngagementFalcoEvent').log(function () {
        return {
          content_id: null,
          profile_event_type: 'profile_session_impression',
          profile_id: a,
          profile_product_bucket: 'profile_core',
          profile_session_id: b,
          profile_surface: j(d),
        };
      });
    }
    function l(a, b) {
      var d = c('WebStorage').getLocalStorage();
      if (!d) return null;
      d = c('uuid')();
      p(a, d);
      k(a, d, b == null ? void 0 : b.tracePolicy);
      return d;
    }
    function m(a, b) {
      var c = o(a);
      return c === null ? l(a, b) : c;
    }
    function n(a) {
      a = h(a);
      var b = c('WebStorage').getLocalStorageForRead();
      if (a === null || !b) return null;
      b = b.getItem(a);
      if (b == null) return null;
      a = b.split(':');
      b = a[0];
      a = a[1];
      a = parseInt(a, 10);
      return [b, a];
    }
    function o(a) {
      a = n(a);
      if (a !== null) {
        var b = a[0];
        a = a[1];
        if (Date.now() - a < d('ProfileCometSessionConfig').TIMEOUT_MS)
          return b;
      }
      return null;
    }
    function p(a, b) {
      var d = Date.now();
      a = h(a);
      var e = c('WebStorage').getLocalStorage();
      if (e && a !== null) {
        c('WebStorage').setItemGuarded(e, a, b + ':' + d);
        return b;
      }
      return null;
    }
    function q(a, b) {
      b = m(a, b);
      if (b == null) return null;
      p(a, b);
      return b;
    }
    function a(a, b) {
      return m(a, b);
    }
    function b(a, b, c) {
      if (b != null) {
        var d = o(a);
        if (d === null) {
          k(a, b, c);
          return p(a, b);
        }
      }
      return q(a);
    }
    function e(a, b, c, e) {
      return d('ProfileCometSessionUtil').isSameProfileSession(b, c) ||
        e === 'popstate' ||
        e === 'initial'
        ? q(a, c)
        : l(a, c);
    }
    g.extend = q;
    g.get = a;
    g.initOrExtend = b;
    g.navigate = e;
  },
  98,
);
