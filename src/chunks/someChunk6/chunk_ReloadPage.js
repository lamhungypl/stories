__d(
  'ReloadPage',
  ['BlueCompatRouter', 'Env'],
  function (a, b, c, d, e, f) {
    var g;
    function h(c) {
      !(g || (g = b('Env'))).isCQuick
        ? a.window.location.reload(c)
        : b('BlueCompatRouter').sendMessage({ compatAction: 'reload' });
    }
    function c(b) {
      a.setTimeout(h, b);
    }
    f.now = h;
    f.delay = c;
  },
  66,
);
