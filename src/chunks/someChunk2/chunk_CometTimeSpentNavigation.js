__d(
  'CometTimeSpentNavigation',
  [
    'CometProductAttribution',
    'CometTimeSpentUtils',
    'CometVisitationManager',
    'ProfileCometSession',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = null,
      i = null,
      j = new Set();
    function k() {
      j.forEach(function (a) {
        return a({ destPathInfo: i, sourcePathInfo: h });
      });
    }
    a = {
      changePath: function (a, b, c) {
        c === void 0 && (c = null);
        h = i;
        var e = a.entityID,
          f = a.parentContainerId,
          g = a.tracePolicy,
          j = a.url;
        if (c && c.profile_session_id != null && e != null) {
          var l;
          c.profile_session_id =
            (l = d('ProfileCometSession').initOrExtend(
              e,
              (l = c) == null ? void 0 : l.profile_session_id,
              g,
            )) != null
              ? l
              : (l = c) == null
              ? void 0
              : l.profile_session_id;
        }
        l = babelHelpers['extends']({}, b);
        delete l.v2;
        b = d('CometProductAttribution').minifyProductAttributionV2(b);
        l = { pa: JSON.stringify(l), pav2: b, uri: j };
        l = d('CometTimeSpentUtils').addTimeSpentMetaData(a, l, c);
        b = d('CometVisitationManager').getCurrentVisitationId();
        b != null && (l.visitation_id = b);
        l.container_id == null && e != null && (l.container_id = e);
        l.parent_container_id == null &&
          f != null &&
          (l.parent_container_id = f);
        i = { extraData: l, name: g };
        k();
      },
      getPathInfo: function () {
        return i;
      },
      getSourcePathInfo: function () {
        return h;
      },
      listenToPathChange: function (a) {
        j.add(a);
        return {
          cancelListen: function () {
            return j['delete'](a);
          },
        };
      },
    };
    b = a;
    g['default'] = b;
  },
  98,
); /*FB_PKG_DELIM*/
