__d(
  'PerfXSharedFields',
  ['CurrentLocale', 'Locale', 'SiteData'],
  function (a, b, c, d, e, f, g) {
    var h = {
      addCommonValues: function (a) {
        var b;
        b = (b = window) == null ? void 0 : b.navigator;
        try {
          b &&
            b.hardwareConcurrency !== void 0 &&
            (a.num_cores = b.hardwareConcurrency),
            b && b.deviceMemory && (a.ram_gb = b.deviceMemory),
            b &&
              b.connection &&
              (typeof b.connection.downlink === 'number' &&
                (a.downlink_megabits = b.connection.downlink),
              typeof b.connection.effectiveType === 'string' &&
                (a.effective_connection_type = b.connection.effectiveType),
              typeof b.connection.rtt === 'number' &&
                (a.rtt_ms = b.connection.rtt));
        } catch (a) {
          if (a.message !== "can't access dead object") throw a;
        }
        a.client_push_phase = c('SiteData').push_phase;
        a.client_revision = c('SiteData').client_revision;
        c('SiteData').server_revision != null &&
          (a.server_revision = c('SiteData').server_revision);
        a.locale = c('CurrentLocale').get();
        a.isRTL = Number(c('Locale').isRTL());
        return a;
      },
      getCommonData: function () {
        var a = {};
        h.addCommonValues(a);
        return a;
      },
    };
    f.exports = h;
  },
  34,
);
