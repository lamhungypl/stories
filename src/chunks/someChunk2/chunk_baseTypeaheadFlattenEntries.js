__d(
  'baseTypeaheadFlattenEntries',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      return a.flatMap(function (a) {
        return a.type === 'section' ? a.entries : a;
      });
    }
    f['default'] = a;
  },
  66,
); /*FB_PKG_DELIM*/
