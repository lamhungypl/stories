__d(
  'RelayFBModuleLoader',
  ['invariant', 'replaceTransportMarkers'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = new Map();
    function a(a) {
      a = k(a);
      return a.getModuleIfRequired();
    }
    function b(a) {
      a = k(a);
      return j(a);
    }
    function d(b) {
      b = k(b);
      var a = b.getModuleIfRequired();
      if (a == null) throw j(b);
      return a;
    }
    function j(a) {
      var b = a.getModuleId(),
        c = i.get(b);
      c == null &&
        ((c = a.load()['finally'](function () {
          i['delete'](b);
        })),
        i.set(b, c));
      c.displayName = '3DModule(' + b + ')';
      return c;
    }
    function k(a) {
      (a == null || typeof a !== 'object') && h(0, 17188, a);
      if (
        typeof a.getModuleId === 'function' &&
        typeof a.getModuleIfRequired === 'function' &&
        typeof a.load === 'function'
      )
        return a;
      var b = { module: babelHelpers['extends']({}, a) };
      c('replaceTransportMarkers')({ relativeTo: null }, b, 'module');
      b = b.module;
      (b != null &&
        typeof b === 'object' &&
        typeof b.getModuleId === 'function' &&
        typeof b.getModuleIfRequired === 'function' &&
        typeof b.preload === 'function' &&
        typeof b.load === 'function') ||
        h(0, 17189, JSON.stringify(a));
      return b;
    }
    g.get = a;
    g.load = b;
    g.read = d;
    g.getModuleReference = k;
  },
  98,
);
