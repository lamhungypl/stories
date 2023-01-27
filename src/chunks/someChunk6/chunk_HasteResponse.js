__d(
  'HasteResponse',
  [
    'Bootloader',
    'BootloaderEvents',
    'ClientConsistencyEventEmitter',
    'HasteSupportData',
    'ServerJS',
    'TimeSlice',
    '__debug',
    'fb-error',
    'performanceAbsoluteNow',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = b('fb-error').getSimpleHash,
      i = new Set(),
      j = {
        handleSRPayload: function (a, c) {
          var d = a.hsdp;
          a = a.hblp;
          d && b('HasteSupportData').handle(d, c == null ? void 0 : c.hsdp);
          a && b('Bootloader').handlePayload(a, c == null ? void 0 : c.hblp);
          (a == null ? void 0 : a.consistency) != null &&
            b('ClientConsistencyEventEmitter').emit('newEntry', a.consistency);
        },
        handle: function (a, c) {
          var d = a.jsmods,
            e = a.allResources;
          a = a.hsrp;
          var f = c.source,
            k = c.sourceDetail,
            l = c.onBlocking,
            m = c.onLog;
          c = c.onAll;
          var n = (g || (g = b('performanceAbsoluteNow')))(),
            o;
          if (k == null) o = !0;
          else {
            var p = h(f, k);
            i.has(p) ? (o = !1) : ((o = !0), i.add(p));
          }
          var q = {
            hsdp: { entry: 0, dup_entry: 0 },
            hblp: { rsrc: 0, dup_rsrc: 0, comp: 0, dup_comp: 0 },
            sjsp: {
              define: 0,
              dup_user_define: 0,
              dup_system_define: 0,
              require: 0,
            },
          };
          a && j.handleSRPayload(a, q);
          var r = 0,
            s = 0;
          b('Bootloader').loadResources(
            (p = e) != null ? p : [],
            {
              onBlocking: function () {
                q.sjsp.require += (
                  (d == null ? void 0 : d.require) || []
                ).length;
                q.sjsp.define += ((d == null ? void 0 : d.define) || []).length;
                var a = b('__debug').getDupCount(),
                  c = a[0];
                a = a[1];
                q.sjsp.dup_user_define -= c;
                q.sjsp.dup_system_define -= a;
                r = (g || (g = b('performanceAbsoluteNow')))();
                new (b('ServerJS'))().handle(d || {});
                s = g();
                var e = b('__debug').getDupCount();
                c = e[0];
                a = e[1];
                q.sjsp.dup_user_define += c;
                q.sjsp.dup_system_define += a;
                l == null ? void 0 : l();
              },
              onAll: c,
              onLog: function (a) {
                a = {
                  source: f,
                  sourceDetail: k,
                  isFirstIdentical: o,
                  timesliceContext: b('TimeSlice').getContext(),
                  startTime: n,
                  logTime: (g || (g = b('performanceAbsoluteNow')))(),
                  jsmodsStart: r,
                  jsmodsEnd: s,
                  rsrcs: a,
                  payloadStats: q,
                };
                m == null ? void 0 : m(a);
                b('BootloaderEvents').notifyHasteResponse(a);
              },
            },
            'HasteResponse:' + f + ':' + ((a = k) != null ? a : '<unknown>'),
          );
        },
      };
    e.exports = j;
  },
  null,
);
