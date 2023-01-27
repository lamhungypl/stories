__d(
  'BootloaderRetryTracker',
  ['ErrorGuard', 'performanceAbsoluteNow'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = (function () {
      function b(a) {
        (this.$2 = []),
          (this.$3 = new Map()),
          (this.$1 = a),
          (this.$4 = this.$1.retries.length > 0);
      }
      var d = b.prototype;
      d.getAllRetryAttempts_FOR_DEBUG_ONLY = function () {
        return this.$3;
      };
      d.getNumRetriesForSource = function (a) {
        return (a = this.$3.get(a)) != null ? a : 0;
      };
      d.maybeScheduleRetry = function (b, d, e) {
        var f = this,
          g = this.getNumRetriesForSource(b);
        if (!this.$5() || g >= this.$1.retries.length) {
          e();
          return;
        }
        this.$2.push(c('performanceAbsoluteNow')());
        this.$3.set(b, g + 1);
        a.setTimeout(function () {
          f.$5() ? d() : e();
        }, this.$1.retries[g]);
      };
      d.$5 = function () {
        if (!this.$4) return !1;
        var a = this.$2.length;
        if (a < this.$1.abortNum) return !0;
        a = this.$2[a - 1] - this.$2[a - this.$1.abortNum];
        a < this.$1.abortTime &&
          (c('ErrorGuard').applyWithGuard(this.$1.abortCallback, null, []),
          (this.$4 = !1));
        return this.$4;
      };
      return b;
    })();
    g['default'] = b;
  },
  98,
);
