__d(
  'MAWMessengerStatusOnFacebookEventEmitter',
  ['BaseEventEmitter'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'messengerisActiveOnFacebook',
      i = 'messengerStatusOnFacebook',
      j = new (c('BaseEventEmitter'))();
    function a() {
      j.emit(i, h);
    }
    function b(a) {
      var b = j.addListener(i, a);
      return function () {
        return b.remove();
      };
    }
    g.MESSENGER_IS_ACTIVE_ON_FACEBOOK = h;
    g.markMessegnerIsActiveOnFacebook = a;
    g.subscribe = b;
  },
  98,
); /*FB_PKG_DELIM*/
