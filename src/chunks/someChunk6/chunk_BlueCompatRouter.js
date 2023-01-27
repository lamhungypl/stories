__d(
  'BlueCompatRouter',
  [
    'BlueCompatBroker',
    'Env',
    'MessengerEnvironment',
    'URI',
    'areEqual',
    'gkx',
    'isCdnURI',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = function (b, c) {
      var d,
        e = a.__fbNativeClearTimeout || window.clearTimeout,
        f = a.__fbNativeSetTimeout || window.setTimeout;
      return function () {
        var a = this,
          g = arguments,
          h = function () {
            (d = null), b.apply(a, g);
          };
        e(d);
        d = f(h, c);
      };
    };
    var h = {
        convertUri: function (a) {
          if (a == null || a === '') return new (c('URI'))();
          a = new (c('URI'))(a);
          if (a.getDomain().endsWith('messenger.com'))
            return a
              .setDomain(
                a.getDomain().replace(/messenger\.com/i, 'facebook.com'),
              )
              .setPath('/messages' + a.getPath());
          else return a;
        },
        goFragment: function (a) {
          if (c('Env').isCQuick) {
            a = h.convertUri(a);
            if (a.getFragment()) {
              var b = c('URI').getRequestURI(!1, !1);
              if (
                c('areEqual')(
                  new (c('URI'))(b).setFragment('').getQualifiedURI(),
                  new (c('URI'))(a).setFragment('').getQualifiedURI(),
                )
              )
                return !0;
            }
          }
          return !1;
        },
        go: function (a, b) {
          if (c('Env').isCQuick) {
            var d = new (c('URI'))(a);
            a = h.convertUri(a);
            var e = a.getQualifiedURI();
            if (c('isCdnURI')(a) || e.getPath().startsWith('/compat'))
              return !1;
            a = (function () {
              if (
                c('MessengerEnvironment').messengerui &&
                e.getPath().startsWith('/messages')
              )
                return [!1, '/messages'];
              if (
                d.getPath().startsWith('/settings') &&
                e.getPath().startsWith('/settings') &&
                (c('gkx')('1224637') || e.getSubdomain() !== d.getSubdomain())
              ) {
                var a = e.getQueryData().tab;
                return a != null ? [!1, '/settings/' + a] : [!1, '/settings'];
              }
              if (
                d.getPath().startsWith('/games') &&
                e.getPath().startsWith('/games')
              )
                return [!1, '/games/web'];
              if (
                d.getPath().startsWith('/notes') &&
                e.getPath().startsWith('/notes')
              )
                return [!1, '/notes'];
              if (
                d.getPath().startsWith('/latest/posts') &&
                e.getPath().startsWith('/latest/posts')
              )
                return [!1, '/business'];
              if (/\/[A-Za-z\-0-9]+\/settings/.test(d.getPath()))
                return [!1, '/pages/settings'];
              return /\/[A-Za-z\-0-9]+\/insights/.test(d.getPath())
                ? [!1, '/insights']
                : [!0, ''];
            })();
            var f = a[0];
            a = a[1];
            i({
              compatAction: 'route',
              maintainKey: a,
              replace: b,
              uri: String(e),
            });
            return f;
          }
          return !1;
        },
        startChat: function (a, b) {
          return h.sendMessage({
            compatAction: 'startchat',
            tabId: a,
            isPage: b,
          });
        },
        chatListener: function (a, b, c) {
          a.addEventListener('click', function (a) {
            a.preventDefault(), h.startChat(b, c);
          });
        },
        sendMessage: function (a) {
          if (c('Env').isCQuick) {
            c('BlueCompatBroker').init();
            c('BlueCompatBroker').sendMessage(a);
            return !0;
          }
          return !1;
        },
      },
      i = b(h.sendMessage, 250);
    d = h;
    g['default'] = d;
  },
  98,
);
