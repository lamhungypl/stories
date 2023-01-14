__d(
  'NavigationMetrics',
  [
    'Arbiter',
    'BigPipeInstance',
    'NavigationMetricsCore',
    'PageEvents',
    'performance',
  ],
  function (a, b, c, d, e, f, g) {
    var h = '0';
    c('NavigationMetricsCore').getFullPageLoadLid = function () {
      return h;
    };
    c('NavigationMetricsCore').siteInit(function (a) {
      var b = new a(),
        e = !0;
      c('Arbiter').subscribe(d('BigPipeInstance').Events.init, function (f, g) {
        var i = e ? b : new a();
        e && (h = g.lid);
        e = !1;
        i.setServerLID(g.lid);
        f = g.arbiter;
        f.subscribe(d('BigPipeInstance').Events.tti, function (a, b) {
          a = b.ts;
          i.setTTI(a);
        });
        f.subscribe(c('PageEvents').AJAXPIPE_SEND, function (a, b) {
          a = b.ts;
          i.setRequestStart(a);
        });
        f.subscribe(c('PageEvents').AJAXPIPE_ONLOAD, function (a, b) {
          a = b.ts;
          i.setE2E(a).doneNavigation();
        });
        f.subscribe(d('BigPipeInstance').Events.displayed, function (a, b) {
          a = b.ts;
          i.setDisplayDone(a);
        });
        f.subscribe(d('BigPipeInstance').Events.loaded, function (a, b) {
          a = b.ts;
          i.setAllPageletsLoaded(a);
        });
      });
      c('Arbiter').subscribe(c('PageEvents').BIGPIPE_ONLOAD, function (a, d) {
        a = d.ts;
        e = !1;
        b.setRequestStart(
          c('performance').timing && c('performance').timing.navigationStart,
        )
          .setE2E(a)
          .doneNavigation();
      });
    });
    g['default'] = c('NavigationMetricsCore');
  },
  98,
);
