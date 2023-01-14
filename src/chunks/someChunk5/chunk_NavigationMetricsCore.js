__d(
  'NavigationMetricsCore',
  ['mixInEventEmitter', 'pageID'],
  function (a, b, c, d, e, f, g) {
    var h = {
        NAVIGATION_DONE: 'NAVIGATION_DONE',
        EVENT_OCCURRED: 'EVENT_OCCURRED',
      },
      i = {
        tti: 'tti',
        e2e: 'e2e',
        all_pagelets_loaded: 'all_pagelets_loaded',
        all_pagelets_displayed: 'all_pagelets_displayed',
      },
      j = 0,
      k = {},
      l = (function () {
        function a() {
          (this.eventTimings = {
            tti: null,
            e2e: null,
            all_pagelets_loaded: null,
            all_pagelets_displayed: null,
          }),
            (this.lid = c('pageID') + ':' + j++),
            (this.extras = {});
        }
        var b = a.prototype;
        b.getLID = function () {
          return this.lid;
        };
        b.setRequestStart = function (a) {
          this.start = a;
          return this;
        };
        b.setTTI = function (a) {
          this.eventTimings.tti = a;
          this.$1(i.tti, a);
          return this;
        };
        b.setE2E = function (a) {
          this.eventTimings.e2e = a;
          this.$1(i.e2e, a);
          return this;
        };
        b.setExtra = function (a, b) {
          this.extras[a] = b;
          return this;
        };
        b.setDisplayDone = function (a) {
          this.eventTimings.all_pagelets_displayed = a;
          this.setExtra('all_pagelets_displayed', a);
          this.$1(i.all_pagelets_displayed, a);
          return this;
        };
        b.setAllPageletsLoaded = function (a) {
          this.eventTimings.all_pagelets_loaded = a;
          this.setExtra('all_pagelets_loaded', a);
          this.$1(i.all_pagelets_loaded, a);
          return this;
        };
        b.setServerLID = function (a) {
          this.serverLID = a;
          return this;
        };
        b.$1 = function (a, b) {
          var c = {};
          k != null &&
            this.serverLID != null &&
            k[this.serverLID] != null &&
            (c = k[this.serverLID]);
          c = babelHelpers['extends']({}, c, { event: a, timestamp: b });
          m.emitAndHold(h.EVENT_OCCURRED, this.serverLID, c);
          return this;
        };
        b.doneNavigation = function () {
          var a = babelHelpers['extends'](
            { start: this.start, extras: this.extras },
            this.eventTimings,
          );
          if (this.serverLID && k[this.serverLID]) {
            var b = this.serverLID;
            Object.assign(a, k[b]);
            delete k[b];
          }
          m.emitAndHold(h.NAVIGATION_DONE, this.lid, a);
        };
        return a;
      })(),
      m = {
        Events: h,
        postPagelet: function (a, b, c) {},
        siteInit: function (a) {
          a(l);
        },
        setPage: function (a) {
          if (!a.serverLID) return;
          k[a.serverLID] = {
            page: a.page,
            pageType: a.page_type,
            pageURI: a.page_uri,
            serverLID: a.serverLID,
          };
        },
        getFullPageLoadLid: function () {
          throw new Error('getFullPageLoadLid is not implemented on this site');
        },
      };
    c('mixInEventEmitter')(m, h);
    a = m;
    g['default'] = a;
  },
  98,
);
