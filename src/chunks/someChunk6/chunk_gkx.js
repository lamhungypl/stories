__d(
  'gkx',
  ['invariant', 'BanzaiLazyQueue', 'ExecutionEnvironment', 'emptyFunction'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = {},
      j = {};
    function k(a) {
      var b = i[a];
      b != null || h(0, 11797, a);
      j[a] ||
        ((j[a] = !0),
        (c('ExecutionEnvironment').canUseDOM ||
          c('ExecutionEnvironment').isInWorker) &&
          d('BanzaiLazyQueue').queuePost('gk2_exposure', {
            identifier: a,
            hash: b.hash,
          }));
      return b.result;
    }
    k.add = function (a, b) {
      for (var c in a)
        b && b.entry++, !(c in i) ? (i[c] = a[c]) : b && b.dup_entry++;
    };
    k.addLoggedInternal = function (a) {
      k.add(a);
      for (a in a) j[a] = !0;
    };
    a = c('emptyFunction');
    k.getGKs = function () {
      return null;
    };
    k.getLogged = function () {
      return Object.keys(j).map(function (a) {
        return { identifier: a, hash: i[a].hash };
      });
    };
    k.setPass = a;
    k.setFail = a;
    k.clear = a;
    b = k;
    g['default'] = b;
  },
  98,
);
