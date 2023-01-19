__d(
  'CometRelayPerfStoreCommon',
  ['performanceNow', 'setTimeout'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 5 * 6e4,
      i = {},
      j = {},
      k = {};
    function a(a) {
      if (a.name === 'network.start') {
        var b = {
          flushes: [],
          hasteResponseLogEvents: [],
          name: a.params.name,
          start: c('performanceNow')(),
        };
        j[a.networkRequestId] = b;
        i[a.params.name] = b;
        c('setTimeout')(function () {
          delete j[a.networkRequestId], b && delete i[b.name];
        }, h);
      } else if (a.name === 'network.next') {
        var d = j[a.networkRequestId];
        if (d) {
          var e = a.response,
            f = function (a) {
              d.flushes.push({
                label: (a = a.label) != null ? a : 'root',
                time: c('performanceNow')(),
              });
            };
          e instanceof Array ? e.forEach(f) : f(e);
        }
      } else if (a.name === 'network.complete') {
        f = j[a.networkRequestId];
        f && (f.end = c('performanceNow')());
      } else if (a.name === 'queryresource.fetch') {
        if (a.operation.root.node.name != null) {
          e = a.operation.root.node.name;
          f = i[e];
          f != null &&
            ((k[a.resourceID] = f),
            c('setTimeout')(function () {
              delete k[a.resourceID];
            }, h));
        }
      } else if (a.name === 'queryresource.retain') {
        e = k[a.resourceID];
        if (e != null) {
          f = a.profilerContext;
          f.retainQuery && f.retainQuery(e);
        }
      } else if (a.name === 'network.info') {
        f = a.info;
        if (
          f != null &&
          typeof f === 'object' &&
          Object.prototype.hasOwnProperty.call(f, 'prefetched')
        ) {
          e = j[a.networkRequestId];
          e && (e.start = 0);
        }
        if (
          f != null &&
          typeof f === 'object' &&
          'srPayloadStats' in f &&
          f.srPayloadStats != null &&
          typeof f.srPayloadStats === 'object'
        ) {
          e = j[a.networkRequestId];
          e && e.hasteResponseLogEvents.push(f.srPayloadStats);
        }
      } else if (a.name === 'entrypoint.root.consume') {
        e = a.profilerContext;
        typeof e.consumeBootload === 'function' &&
          e.consumeBootload(a.rootModuleID);
      }
    }
    g.log = a;
  },
  98,
);
