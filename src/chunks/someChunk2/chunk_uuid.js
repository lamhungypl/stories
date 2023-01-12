__d(
  'uuid',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (a) {
          var b = (Math.random() * 16) | 0;
          a = a == 'x' ? b : (b & 3) | 8;
          return a.toString(16);
        },
      );
    }
    f['default'] = a;
  },
  66,
); /*FB_PKG_DELIM*/
