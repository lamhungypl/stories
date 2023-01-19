__d(
  'TransportSelectingClientUtils',
  [
    'BladeRunnerInstrumentedStreamHandler',
    'DGWEnvUtil',
    'MQTTRequestStreamUtils',
    'TransportSelectingClientCCResolver',
    'gkx',
    'justknobx',
    'regeneratorRuntime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      a = d('MQTTRequestStreamUtils').convertToBRHandler(a);
      if (b.startsWith('FBGQLS') || b.startsWith('SKY'))
        return new (c('BladeRunnerInstrumentedStreamHandler'))(a, b);
      else return a;
    }
    function e(a) {
      return a.startsWith('FBGQLS:PIXELCLOUD') && !c('gkx')('1937') ? !0 : !1;
    }
    function f(a) {
      var b = !1;
      switch (a) {
        case 'group1':
          b = c('gkx')('227');
          break;
        case 'group2':
          b = c('gkx')('229');
          break;
        case 'group3':
          b = c('gkx')('231');
          break;
        case 'group4':
          b = c('gkx')('233');
          break;
        case 'group5':
          b = c('gkx')('235');
          break;
        case 'group6':
          b = c('gkx')('2254');
          break;
      }
      return b;
    }
    function h(a) {
      var b = !1;
      switch (a) {
        case 'skywalker':
          b = c('gkx')('2030');
          break;
        case 'skywalker_experiment1':
          b = c('gkx')('2448');
          break;
        case 'skywalker_experiment2':
          b = c('gkx')('2458');
          break;
        case 'skywalker_bulletin':
          b = c('justknobx')._('494');
          break;
      }
      return b;
    }
    function i(a) {
      if (a != null) {
        var b = a.lastIndexOf('/');
        b = b > 0 ? a.substr(0, b) : a;
        return b;
      }
    }
    function j(a) {
      var d, e;
      return b('regeneratorRuntime').async(
        function (f) {
          while (1)
            switch ((f.prev = f.next)) {
              case 0:
                d = i(a);
                if (!(d != null)) {
                  f.next = 6;
                  break;
                }
                f.next = 4;
                return b('regeneratorRuntime').awrap(
                  c('TransportSelectingClientCCResolver').getCCGroupName(d),
                );
              case 4:
                e = f.sent;
                return f.abrupt(
                  'return',
                  h(e) && c('DGWEnvUtil').isDGWEnvCompatible(),
                );
              case 6:
                return f.abrupt('return', !1);
              case 7:
              case 'end':
                return f.stop();
            }
        },
        null,
        this,
      );
    }
    function k(a, b) {
      b = i(b);
      return a != null && a === 'SKY' && b != null
        ? b
        : (b = a) != null
        ? b
        : 'unknown';
    }
    g.BRHandlerConverter = a;
    g.isBlockedMethod = e;
    g.isDGWStream = f;
    g.isDGWAllowedSKYTopic = h;
    g.getTopicPrefix = i;
    g.isDGWSupportedSKYTopic = j;
    g.getMethodContextForCC = k;
  },
  98,
);
