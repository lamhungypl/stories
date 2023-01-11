/*FB_PKG_DELIM*/

now_inl = (function () {
  var a = window.performance;
  return a && a.now && a.timing && a.timing.navigationStart
    ? function () {
        return a.now() + a.timing.navigationStart;
      }
    : function () {
        return new Date().getTime();
      };
})();
//# sourceURL=https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MmQo2XTouz7.js?_nc_x=7tWlUfRI-Ve
