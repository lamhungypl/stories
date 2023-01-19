__d(
  'CometProductAttribution',
  [
    'Random',
    'WebSession',
    'decodeTrackingNode',
    'getRouteInfoForCometProductAttributionDispatch',
    'getTopMostRouteInfo',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function (a) {
        var b = a.bookmark_id,
          c = a.bookmark_type_name,
          e = a.link_context,
          f = a.tap_point;
        a = a.trace_policy;
        return {
          bookmark_id: b,
          bookmark_type_name: c,
          link_context: e,
          session: d('WebSession').getId(),
          subsession: 1,
          tap_point: f,
          timestamp: Date.now(),
          trace_policy: a,
        };
      },
      i = function (a) {
        var b = a.bookmark_id,
          c = a.link_context,
          e = a.rootName,
          f = a.tap_point,
          g = a.tracePolicy;
        a = a.trackingNodes;
        return {
          bookmark_id: b,
          class: e,
          link_context: c,
          module: g,
          scope_id: Math.floor(d('Random').random() * 1e6),
          tap_point: f,
          tracking_nodes: a,
          ts: Date.now(),
        };
      },
      j = function (a) {
        var b = a.productAttributionId;
        a = a.tracePolicy;
        if (typeof b === 'string') return b;
        return typeof a === 'string' ? 'tp-' + a : 'missing';
      },
      k = new Set([
        'create_jewel',
        'mega_menu',
        'tap_tabbar',
        'tap_search_bar',
        'tap_bookmark',
        'tap_community_panel_popover',
        'tap_community_panel_shortcuts',
        'topnav-link',
        'logo',
        'via_notification',
      ]),
      l = function (a) {
        return k.has(a);
      };
    a = function (a, b, c, d, e, f) {
      var g;
      f === void 0 && (f = !1);
      g = (g = c == null ? void 0 : c.route) != null ? g : {};
      g = g.tracePolicy;
      b =
        typeof b === 'string'
          ? { tap_point: b }
          : b != null
          ? b
          : { tap_point: 'unexpected' };
      var k = b.bookmark_id != null ? String(b.bookmark_id) : j(a);
      g = h({
        bookmark_id: k,
        bookmark_type_name:
          (k = b == null ? void 0 : b.bookmark_type_name) != null ? k : '',
        link_context: d,
        tap_point: b.tap_point,
        trace_policy:
          g != null ? g : (k = a.tracePolicy) != null ? k : 'missing',
      });
      a.productAttributionId != null &&
        b.bookmark_id != null &&
        a.productAttributionId !== String(b.bookmark_id) &&
        (g = babelHelpers['extends']({}, g, {
          route_bookmark_id: a.productAttributionId,
        }));
      d = [
        i({
          bookmark_id:
            b.bookmark_id != null
              ? String(b.bookmark_id)
              : a.productAttributionId,
          link_context: d,
          rootName: a.rootView.resource.getModuleId(),
          tap_point: b.tap_point,
          tracePolicy: (k = a.tracePolicy) != null ? k : 'missing',
          trackingNodes: null,
        }),
      ];
      if (c != null && !l(b.tap_point))
        if (f && c.productAttribution.v2 != null) {
          a = [].concat(c.productAttribution.v2);
          a[0] = d[0];
          d = a;
        } else {
          k = c.productAttribution.v2;
          if (k != null) {
            b = k[0];
            f = k.slice(1);
            d = [].concat(
              d,
              [
                babelHelpers['extends']({}, b, {
                  tracking_nodes: (a = e) != null ? a : null,
                }),
              ],
              f,
            );
          }
          d.length > 10 && (d = [].concat(d.slice(0, 9), [d[d.length - 1]]));
        }
      return { 0: g, v2: d };
    };
    var m = function (a) {
        return a.replace(/,;/g, '_');
      },
      n = function (a) {
        return (a =
          a == null
            ? void 0
            : (a = a.v2) == null
            ? void 0
            : a
                .map(function (a) {
                  var b;
                  return [
                    a['class'],
                    a.module,
                    a.tap_point,
                    a.ts.toString(),
                    a.scope_id.toString(),
                    (b = a.bookmark_id) != null ? b : '',
                    ((b = a.tracking_nodes) != null ? b : [])
                      .reduce(function (a, b) {
                        b = c('decodeTrackingNode')(b);
                        return b.length === 1 ? a : a.concat(b[1][0]);
                      }, [])
                      .join('#'),
                  ]
                    .map(m)
                    .join();
                })
                .join(';')) != null
          ? a
          : '';
      };
    b = function (a) {
      return a != null
        ? n(
            (a = c('getTopMostRouteInfo')(a())) == null
              ? void 0
              : a.productAttribution,
          )
        : null;
    };
    e = function (a, b) {
      if (a == null) return null;
      a =
        (a = c('getTopMostRouteInfo')(a())) == null
          ? void 0
          : a.productAttribution.v2;
      if (a == null) return null;
      a.length !== 0 && (a[0].tracking_nodes = b);
      return n({ v2: a });
    };
    g.getProductAttributionEntry = h;
    g.getProductAttributionEntryV2 = i;
    g.getProductAttributionIdFromRoute = j;
    g.isSpecialTapPoint = l;
    g.getProductAttributionFromRoute = a;
    g.filterEntryValue = m;
    g.minifyProductAttributionV2 = n;
    g.getMinifiedTopMostRouteProductAttribution = b;
    g.minifiedNavigationChainWithTrackingNodes = e;
    g.getRouteInfoForDispatch = c(
      'getRouteInfoForCometProductAttributionDispatch',
    );
  },
  98,
);
