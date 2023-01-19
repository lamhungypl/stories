__d(
  'CometRelayFlightEventLogger',
  ['InteractionTracing'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = new Map();
    function a(a) {
      a.name === 'execute.start' &&
        a.params.name === 'MarketplacePDPContainerQuery' &&
        h.set(a.executeId, {
          totalDuration: 0,
          totalFlightPayloadDeserializeDuration: 0,
          totalModuleDuration: 0,
          totalPayloadDuration: 0,
        });
      if (a.executeId != null && !h.has(a.executeId)) return;
      if (a.name === 'execute.next') {
        var b = h.get(a.executeId);
        b &&
          ((b.totalDuration += a.duration),
          (b.totalPayloadDuration += a.duration));
      }
      if (a.name === 'execute.async.module') {
        b = h.get(a.executeId);
        b &&
          ((b.totalDuration += a.duration),
          (b.totalModuleDuration += a.duration));
      }
      if (a.name === 'execute.flight.payload_deserialize') {
        b = h.get(a.executeId);
        b && (b.totalFlightPayloadDeserializeDuration += a.duration);
      }
      if (a.name === 'execute.complete') {
        b = h.get(a.executeId);
        if (b) {
          var d = b.totalDuration,
            e = b.totalFlightPayloadDeserializeDuration,
            f = b.totalModuleDuration,
            g = b.totalPayloadDuration;
          c('InteractionTracing')
            .getPendingInteractions()
            .forEach(function (a) {
              a.addAnnotationInt(
                'MarketplacePDPContainerQueryModuleProcessingSuccessDuration',
                f,
              ),
                a.addAnnotationInt(
                  'MarketplacePDPContainerQueryPayloadProcessingSuccessDuration',
                  g,
                ),
                a.addAnnotationInt(
                  'MarketplacePDPContainerQueryFlightDeserializationSuccessDuration',
                  e,
                ),
                a.addAnnotationInt(
                  'MarketplacePDPContainerQueryRelayProcessingSuccessDuration',
                  d,
                );
            });
        }
        h['delete'](a.executeId);
      }
      a.name === 'execute.error' && h['delete'](a.executeId);
    }
    g.log = a;
  },
  98,
);
