__d(
  'ScriptPath',
  ['ErrorGuard', 'SubscriptionList', 'TimeSlice', 'WebStorage', 'isInIframe'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h,
      i = 'sp_pi',
      j = 1e3 * 30,
      k = null,
      l = null,
      m = new (b('SubscriptionList'))(),
      n = null,
      o = [],
      p = b('TimeSlice').guard(
        function (a, c) {
          m.getCallbacks().forEach(function (d) {
            (g || (g = b('ErrorGuard'))).applyWithGuard(
              function () {
                d({ source: k, dest: l, cause: a, extraData: c });
              },
              null,
              [],
            );
          });
        },
        'ScriptPath Notifying callbacks',
        { propagationType: b('TimeSlice').PropagationType.ORPHAN },
      );
    function q() {
      return l ? l.scriptPath : void 0;
    }
    function r() {
      var a = (h || (h = b('WebStorage'))).getSessionStorage();
      if (!a || b('isInIframe')()) return;
      h.setItemGuarded(
        a,
        i,
        JSON.stringify({ pageInfo: l, clickPoint: n, time: Date.now() }),
      );
    }
    function a() {
      var a = (h || (h = b('WebStorage'))).getSessionStorageForRead();
      if (!a) return;
      var c = a.getItem(i);
      if (c) {
        c = JSON.parse(c);
        c &&
          (c.time < Date.now() - j &&
            ((a = (h || (h = b('WebStorage'))).getSessionStorage()),
            a && a.removeItem(i)),
          (l = c.pageInfo),
          (n = c.clickPoint),
          l && (l.restored = !0));
      }
    }
    a();
    c = {
      set: function (a, b, c) {
        (k = l),
          (l = { scriptPath: a, categoryToken: b, extraData: c || {} }),
          (o = []),
          (window._script_path = a),
          p();
      },
      openOverlayView: function (a, b, c) {
        if (!a) return;
        var d = o.length;
        (d === 0 || o[d - 1] !== a) &&
          ((k = babelHelpers['extends']({}, l)),
          l && (l.topViewEndpoint = a),
          c && c.replaceTopOverlay && d > 0
            ? ((o[d - 1] = a), p('replace_overlay_view', b))
            : (o.push(a), p('open_overlay_view', b)));
      },
      closeOverlayView: function (a, b) {
        a = o.lastIndexOf(a);
        if (a === -1) return;
        k = babelHelpers['extends']({}, l);
        l &&
          (a > 0 ? (l.topViewEndpoint = o[a - 1]) : (l.topViewEndpoint = null));
        o = o.slice(0, a);
        p('close_overlay_view', b);
      },
      setClickPointInfo: function (a) {
        (n = a), r();
      },
      getClickPointInfo: function () {
        return n;
      },
      getScriptPath: q,
      getCategoryToken: function () {
        return l ? l.categoryToken : void 0;
      },
      getEarlyFlushPage: function () {
        var a;
        return (a = l) == null
          ? void 0
          : (a = a.extraData) == null
          ? void 0
          : a.ef_page;
      },
      getTopViewEndpoint: function () {
        var a = o.length;
        return a > 0 ? o[a - 1] : q();
      },
      getPageInfo: function () {
        return l;
      },
      getSourcePageInfo: function () {
        return k;
      },
      subscribe: function (a) {
        return m.add(b('TimeSlice').guard(a, 'ScriptPath.subscribe'));
      },
      shutdown: function () {
        r();
      },
    };
    e.exports = c;
  },
  null,
); /*FB_PKG_DELIM*/