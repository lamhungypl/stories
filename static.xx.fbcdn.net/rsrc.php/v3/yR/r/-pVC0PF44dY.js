/*FB_PKG_DELIM*/

(function (a) {
  function b(b) {
    if (!window.openDatabase) return;
    b.I_AM_INCOGNITO_AND_I_REALLY_NEED_WEBSQL = function (a, b, c, d) {
      return window.openDatabase(a, b, c, d);
    };
    window.openDatabase = function () {
      throw new Error();
    };
  }
  b(a);
})(this);
//# sourceURL=https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/-pVC0PF44dY.js?_nc_x=7tWlUfRI-Ve
