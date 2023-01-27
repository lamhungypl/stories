__d(
  'HasteSupportData',
  [
    'ix',
    'MetaConfigMap',
    'QPLHasteSupportDataStorage',
    'bx',
    'getFalcoLogPolicy_DO_NOT_USE',
    'gkx',
    'justknobx',
    'qex',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    function a(a, b) {
      var d = a.bxData,
        e = a.clpData,
        f = a.gkxData,
        g = a.ixData,
        i = a.metaconfigData,
        j = a.qexData,
        k = a.qplData;
      a = a.justknobxData;
      d != null && c('bx').add(d, b);
      e != null && c('getFalcoLogPolicy_DO_NOT_USE').add(e, b);
      f != null && c('gkx').add(f, b);
      g != null && h.add(g, b);
      i != null && c('MetaConfigMap').add(i, b);
      j != null && c('qex').add(j, b);
      k != null && c('QPLHasteSupportDataStorage').add(k, b);
      a != null && c('justknobx').add(a, b);
    }
    g.handle = a;
  },
  98,
);
