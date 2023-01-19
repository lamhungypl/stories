__d(
  'AsyncDOM',
  ['CSS', 'DOM', 'FBLogger'],
  function (a, b, c, d, e, f) {
    a = {
      invoke: function (a, c) {
        for (var d = 0; d < a.length; ++d) {
          var e = a[d],
            f = e[0],
            g = e[1],
            h = e[2];
          e = e[3];
          h = (h && c) || null;
          g && (h = b('DOM').scry(h || document.documentElement, g)[0]);
          f != 'eval' &&
            !h &&
            b('FBLogger')('async_dom').warn(
              'Could not find relativeTo element for %s AsyncDOM operation based on selector: %s',
              f,
              g,
            );
          switch (f) {
            case 'eval':
              new Function(e).apply(h);
              break;
            case 'hide':
              b('CSS').hide(h);
              break;
            case 'show':
              b('CSS').show(h);
              break;
            case 'setContent':
              b('DOM').setContent(h, e);
              break;
            case 'appendContent':
              b('DOM').appendContent(h, e);
              break;
            case 'prependContent':
              b('DOM').prependContent(h, e);
              break;
            case 'insertAfter':
              b('DOM').insertAfter(h, e);
              break;
            case 'insertBefore':
              b('DOM').insertBefore(h, e);
              break;
            case 'remove':
              b('DOM').remove(h);
              break;
            case 'replace':
              b('DOM').replace(h, e);
              break;
            default:
              b('FBLogger')('async_dom').warn(
                'Received invalid command %s for AsyncDOM operation',
                f,
              );
          }
        }
      },
    };
    e.exports = a;
  },
  null,
);
