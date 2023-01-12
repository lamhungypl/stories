__d(
  'interaction-tracing-metrics',
  ['performanceNowSinceAppStart'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = new Map(),
      h = new Map(),
      i = new Map(),
      j = {
        string: {},
        int: {},
        double: {},
        bool: {},
        string_array: {},
        int_array: {},
        double_array: {},
        bool_array: {},
      },
      k = { interactionCount: 0 };
    a = function () {
      var a = new Map(i),
        b = function (b) {
          a.forEach(function (a) {
            b(a);
          });
        },
        c = {
          addGlobalMetadata: function (a, b) {
            typeof b === 'number'
              ? (j['int'][a] = b)
              : typeof b === 'string'
              ? (j.string[a] = b)
              : typeof b === 'boolean' && (j.bool[a] = b),
              c.addMetadata(a, b);
          },
          addMetadata: function (a, c) {
            b(function (b) {
              typeof c === 'number'
                ? (b.annotations['int'][a] = c)
                : typeof c === 'string'
                ? (b.annotations.string[a] = c)
                : typeof c === 'boolean' && (b.annotations.bool[a] = c);
            });
          },
          addRequireDeferred: function (a, c) {
            var d = [];
            b(function (b) {
              if (b.requireDeferreds[a] != null) return;
              b = b.requireDeferreds[a] = { start: c };
              d.push(b);
            });
            return function (a, b) {
              d.forEach(function (d) {
                (d.end = a),
                  (d.duration = a - c),
                  b && (d.alreadyRequired = !0);
              });
            };
          },
          forEach: function (a) {
            b(function (b) {
              a(b);
            });
          },
        };
      return c;
    };
    var l = {
      addFactoryTiming: function (a, b) {
        a = h.get(a);
        if (!a) return;
        a.factoryTimings.push(b);
      },
      addGlobalMetadata: function (a, b, c) {
        typeof c === 'number'
          ? ((j['int'][b] = c), l.addAnnotationInt(a, b, c))
          : typeof c === 'string'
          ? ((j.string[b] = c), l.addAnnotation(a, b, c))
          : typeof c === 'boolean' &&
            ((j.bool[b] = c), l.addAnnotationBoolean(a, b, c));
      },
      addHeroBootload: function (a, b) {
        a = h.get(a);
        if (!a) return;
        a.heroBootloads.push(b);
      },
      addHeroRelay: function (a, b) {
        a = h.get(a);
        if (!a) return;
        a.heroRelay.push(b);
      },
      addHiddenTiming: function (a, b) {
        a = h.get(a);
        if (!a) return;
        a.hiddenTimings = b;
      },
      addImagePreloader: function (a, b, c) {
        a = h.get(a);
        if (!a) return;
        a.imagePreloaderTimings[b] = c;
      },
      addMarkerPoint: function (a, c, d, e, f) {
        e === void 0 && (e = b('performanceNowSinceAppStart')());
        a = h.get(a);
        if (!a) return;
        e >= a.start &&
          ((a.markerPoints[c] = { timestamp: e, type: d }),
          f && (a.markerPoints[c].data = f));
      },
      addFirstMarkerPoint: function (a, b, c, d, e) {
        e === void 0 && (e = {});
        a = h.get(a);
        if (!a) return;
        var f = a.markerPoints[b];
        d >= a.start &&
          (!f || f.timestamp > d) &&
          ((a.markerPoints[b] = { timestamp: d, type: c }),
          e && (a.markerPoints[b].data = e));
      },
      addMetadata: function (a, b, c) {
        a = h.get(a);
        if (!a) return;
        typeof c === 'number'
          ? (a.annotations['int'][b] = c)
          : typeof c === 'string'
          ? (a.annotations.string[b] = c)
          : typeof c === 'boolean' && (a.annotations.bool[b] = c);
      },
      addAnnotation: function (a, b, c) {
        a = h.get(a);
        a && (a.annotations.string[b] = c);
      },
      addAnnotationInt: function (a, b, c) {
        a = h.get(a);
        a && (a.annotations['int'][b] = c);
      },
      addAnnotationDouble: function (a, b, c) {
        a = h.get(a);
        a && (a.annotations['double'][b] = c);
      },
      addAnnotationBoolean: function (a, b, c) {
        a = h.get(a);
        a && (a.annotations.bool[b] = c);
      },
      addAnnotationStringArray: function (a, b, c) {
        a = h.get(a);
        a && (a.annotations.string_array[b] = c);
      },
      addAnnotationIntArray: function (a, b, c) {
        a = h.get(a);
        a && (a.annotations.int_array[b] = c);
      },
      addAnnotationDoubleArray: function (a, b, c) {
        a = h.get(a);
        a && (a.annotations.double_array[b] = c);
      },
      addAnnotationBooleanArray: function (a, b, c) {
        a = h.get(a);
        a && (a.annotations.bool_array[b] = c);
      },
      addOfflineTiming: function (a, b) {
        a = h.get(a);
        if (!a) return;
        a.offlineTimings = b;
      },
      addPayloadResource: function (a, b, c) {
        a = h.get(a);
        if (!a) return;
        a.payloadResources[b] = c;
      },
      addPayloadTiming: function (a, b, c) {
        a = h.get(a);
        if (!a) return;
        a.payloadTimings[b] = c;
      },
      addReactRender: function (a, b, c, d, e, f, g) {
        a = h.get(a);
        if (!a) return;
        e = {
          actualDuration: e,
          baseDuration: f,
          duration: d - c,
          end: d,
          phase: g,
          start: c,
        };
        a.reactRender[b] ? a.reactRender[b].push(e) : (a.reactRender[b] = [e]);
        a.commitSet.add(d);
      },
      addSubspan: function (a, b, c, d, e, f) {
        a = h.get(a);
        if (!a) return;
        f = { data: f, end: e, start: d, type: c };
        a.subSpans[b] ? a.subSpans[b].push(f) : (a.subSpans[b] = [f]);
      },
      addMountPoint: function (a, b, c) {
        c = 'Mount_' + c;
        l.addFirstMarkerPoint(a, c, 'VisualCompletion', b);
      },
      addMountPointMetadata: function (a, b, c) {
        a = l.get(a);
        b = 'Mount_' + b;
        a = a === null || a === void 0 ? void 0 : a.markerPoints[b];
        if (a) {
          var d = a.data || {};
          a.data = d;
          Object.keys(c).forEach(function (a) {
            d[a] = c[a];
          });
        }
      },
      addTag: function (a, b, c) {
        a = h.get(a);
        if (!a) return;
        a.tagSet[b] || (a.tagSet[b] = new Set());
        a.tagSet[b].add(c);
      },
      addTracedInteraction: function (a, b, c) {
        b = {
          annotations: {
            string: {},
            int: {},
            double: {},
            bool: {},
            string_array: {},
            int_array: {},
            double_array: {},
            bool_array: {},
          },
          commitSet: new Set(),
          factoryTimings: [],
          hasVcReport: !1,
          heroBootloads: [],
          heroRelay: [],
          hiddenTimings: [],
          imagePreloaderTimings: {},
          lateMutationIgnoreElements: new Set(),
          markerPoints: {},
          navigationTiming: {},
          offlineTimings: [],
          payloadResources: {},
          payloadTimings: {},
          reactRender: {},
          requireDeferreds: {},
          start: b,
          subSpans: {},
          tagSet: {},
          traceId: a,
          vcStateLog: null,
          wasCanceled: !1,
          wasOffline: !1,
        };
        for (var d in j) for (var e in j[d]) b.annotations[d][e] = j[d][e];
        h.set(a, b);
        i.set(a, b);
        g.set(a, c);
        k.interactionCount++;
        return b;
      },
      complete: function (a) {
        var c = h.get(a);
        if (c && c.completed == null) {
          c.annotations['int'].endedByHeroComplete = 1;
          c.completed = b('performanceNowSinceAppStart')();
          var d = g.get(a);
          d && d(c);
          g['delete'](a);
          i['delete'](a);
        }
      },
      currentInteractionLogger: a,
      dump: function () {
        var a = {};
        h.forEach(function (b, c) {
          a[c] = babelHelpers['extends']({}, b, {
            e2e:
              b.completed != null
                ? ((b.completed - b.start) / 1e3).toFixed(2)
                : '?',
          });
        });
        return a;
      },
      get: function (a) {
        return h.get(a);
      },
      removeMarkerPoint: function (a, b) {
        a = h.get(a);
        a && delete a.markerPoints[b];
      },
      setInteractionClass: function (a, b) {
        a = h.get(a);
        a && (a.interactionClass = b);
      },
      setInteractionType: function (a, b, c, d) {
        a = h.get(a);
        a && ((a.interactionClass = b), (a.type = c), (a.qplEvent = d));
      },
      delete: function (a) {
        h['delete'](a);
      },
      getInteractionStat: function () {
        return k;
      },
    };
    f.InteractionTracingMetricsCore = l;
  },
  null,
);
