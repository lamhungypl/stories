__d(
  'USIDCore',
  ['DateConsts', 'USIDUtils', 'asyncParams'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 30,
      i = d('DateConsts').MIN_PER_HOUR * 5,
      j = 2,
      k = '__usid';
    function l() {
      return Math.floor(Date.now() / d('DateConsts').MS_PER_SEC);
    }
    a = (function () {
      function a(a, b, c, e, f, g) {
        this.$1 = a;
        this.$2 = b;
        this.$3 = c;
        this.$8 = e;
        this.$9 = f;
        this.$4 = g.activityTrigger;
        this.$5 = ((b = g.activityTimeoutInMin) != null ? b : h) * 60;
        this.$6 = ((c = g.activityMaxTimeInMin) != null ? c : i) * 60;
        this.$7 = ((e = g.activityCacheTimeoutInMin) != null ? e : j) * 60;
        this.$10 = 0;
        d('USIDUtils').writeTabId(a);
        this.triggerActivity();
      }
      var b = a.prototype;
      b.getFlags = function () {
        return this.$9;
      };
      b.getRequestVersion = function () {
        return this.$8;
      };
      b.getSessionVersion = function () {
        return d('USIDUtils').VERSION;
      };
      b.getTabId = function () {
        return this.$1;
      };
      b.getPageId = function () {
        return this.$2;
      };
      b.getTransitionId = function () {
        return this.$3;
      };
      b.getActivityId = function () {
        var a = this.$11();
        return a.id;
      };
      b.getActivityTimeOut = function () {
        var a = d('USIDUtils').getExistingActivityInfo(),
          b = l();
        return this.$5 - (b - a.time);
      };
      b.getActivityMaxTime = function () {
        var a = d('USIDUtils').getExistingActivityInfo(),
          b = l();
        return this.$6 - (b - a.startTime);
      };
      b.getSessionID = function () {
        return (
          this.getTabId() +
          ':' +
          this.getPageId() +
          ':' +
          this.getTransitionId() +
          '-' +
          this.getActivityId()
        );
      };
      b.serializeForRequest = function () {
        this.$4 === 'request' && this.triggerActivity();
        return this.$12();
      };
      b.$12 = function () {
        var a = this.getSessionVersion(),
          b = this.getSessionID(),
          c = this.getRequestVersion(),
          d = this.getFlags().join(',');
        return a + '-' + b + '-RV=' + c + ':F=' + d;
      };
      b.contextData = function () {
        return { usid_override: '' };
      };
      b.$11 = function () {
        var a = d('USIDUtils').getExistingActivityInfo(),
          b = this.$13(a);
        b && this.$14(a);
        return a;
      };
      b.$14 = function (a) {
        a = d('USIDUtils').writeActivityInfo(a);
        a && d('asyncParams').add(k, this.$12());
      };
      b.$13 = function (a) {
        var b = l();
        if (b - a.time > this.$5) {
          a.id = d('USIDUtils').generateId('A');
          a.time = b;
          a.startTime = b;
          return !0;
        }
        return !1;
      };
      b.triggerActivity = function () {
        var a = l();
        if (a - this.$10 > this.$7) {
          var b = this.$11();
          b.time = a;
          this.$14(b);
          this.$10 = a;
        }
      };
      b.nextTransition = function () {
        this.triggerActivity(), this.$3++;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
