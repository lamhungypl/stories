__d(
  'QPLJoinUtils',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b, c, d) {
      var e;
      e = (e = d == null ? void 0 : d.instanceKey) != null ? e : 0;
      d =
        (d = d == null ? void 0 : d.timestamp) != null
          ? d
          : a.getMarkerStartTs(b, { instanceKey: e });
      a.markerAnnotate(
        b,
        {
          string: ((a = {}), (a.join_id = c), a),
          int: ((b = {}), (b.qpl_join__absolute_time_origin_ms = d), b),
          bool: ((c = {}), (c.qpl_join__use_absolute_alignment = !0), c),
        },
        { instanceKey: e },
      );
    }
    function b(a, b, c, d) {
      var e;
      d = (d = d == null ? void 0 : d.instanceKey) != null ? d : 0;
      a.markerAnnotate(
        b,
        { string: ((e = {}), (e.source = 'client'), e) },
        { instanceKey: d },
      );
      a.markerAnnotate(
        b,
        { string: ((e = {}), (e.join_id = c), e) },
        { instanceKey: d },
      );
    }
    function c(a, b, c, d) {
      a.markerPoint(b, 'join_request_' + c, {
        instanceKey: (b = d == null ? void 0 : d.instanceKey) != null ? b : 0,
        timestamp:
          (b = d == null ? void 0 : d.timestamp) != null
            ? b
            : a.currentTimestamp(),
        data: c != null ? { string: { __key: c } } : null,
      });
    }
    function d(a, b, c, d) {
      var e;
      e = (e = d == null ? void 0 : d.instanceKey) != null ? e : 0;
      d =
        (d = d == null ? void 0 : d.timestamp) != null
          ? d
          : a.currentTimestamp();
      a.markerPoint(b, 'join_response_' + c, {
        instanceKey: e,
        timestamp: d,
        data: c != null ? { string: { __key: c } } : null,
      });
    }
    f.setAbsoluteAlignment = a;
    f.setJoinId = b;
    f.markJoinRequest = c;
    f.markJoinResponse = d;
  },
  66,
);
