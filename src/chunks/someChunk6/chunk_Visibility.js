__d(
  'Visibility',
  ['BaseEventEmitter', 'ExecutionEnvironment', 'TimeSlice'],
  function (a, b, c, d, e, f, g) {
    var h, i;
    c('ExecutionEnvironment').canUseDOM &&
      (document.hidden !== void 0
        ? ((h = 'hidden'), (i = 'visibilitychange'))
        : document.mozHidden !== void 0
        ? ((h = 'mozHidden'), (i = 'mozvisibilitychange'))
        : document.msHidden !== void 0
        ? ((h = 'msHidden'), (i = 'msvisibilitychange'))
        : document.webkitHidden !== void 0 &&
          ((h = 'webkitHidden'), (i = 'webkitvisibilitychange')));
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.HIDDEN = 'hidden'),
          (c.VISIBLE = 'visible'),
          (c.hiddenKey = h),
          (c.hiddenEvent = i),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var d = b.prototype;
      d.isHidden = function () {
        return h ? document[h] : !1;
      };
      d.isSupported = function () {
        return (
          c('ExecutionEnvironment').canUseDOM &&
          document.addEventListener &&
          i !== void 0
        );
      };
      return b;
    })(c('BaseEventEmitter'));
    var j = new a();
    j.isSupported() &&
      document.addEventListener(
        j.hiddenEvent,
        c('TimeSlice').guard(function (a) {
          j.emit(j.isHidden() ? j.HIDDEN : j.VISIBLE, {
            changeTime: a.timeStamp,
          });
        }, 'visibility change'),
      );
    b = j;
    g['default'] = b;
  },
  98,
);
