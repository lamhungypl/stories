__d(
  'RelayFBModuleResource',
  ['Promise', 'RelayFBModuleLoader', 'isPromise', 'unrecoverableViolation'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = {};
    function i(a) {
      if (a === null || typeof a !== 'object')
        throw c('unrecoverableViolation')(
          'ModuleResource.read(): Expected `match` value to be an object.',
          'relay',
        );
      a = a.__module_component;
      return a == null ? null : d('RelayFBModuleLoader').read(a);
    }
    function a(a) {
      var d = [],
        e = [];
      for (var f = 0; f < a.length; f++)
        try {
          var g = i(a[f]);
          d.push(g);
        } catch (a) {
          if (c('isPromise')(a)) e.push(a);
          else throw a;
        }
      if (e.length > 0) {
        g = a.map(function (a, b) {
          return (a = j(a)) != null ? a : 'UNKNOWN_' + b;
        });
        var k = g.join(':');
        f = h[k];
        f == null &&
          (f = h[k] =
            b('Promise')
              .all(e)
              ['finally'](function () {
                delete h[k];
              }));
        throw f;
      }
      return d;
    }
    function j(a) {
      if (a === null || typeof a !== 'object')
        throw c('unrecoverableViolation')(
          'ModuleResource.getModuleId(): Expected `match` value to be an object.',
          'relay',
        );
      a = a.__module_component;
      if (a == null) return null;
      a = d('RelayFBModuleLoader').getModuleReference(a);
      return a.getModuleId();
    }
    g.read = i;
    g.readAll = a;
    g.getModuleId = j;
  },
  98,
);
