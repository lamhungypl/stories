__d(
  'cometPushToast',
  [
    'ix',
    'BaseToasterStateManager',
    'CometIcon.react',
    'deferredLoadComponent',
    'fbicon',
    'react',
    'requireDeferred',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = c('BaseToasterStateManager').getInstance(),
      k = c('deferredLoadComponent')(
        c('requireDeferred')('CometToast.react').__setRef('cometPushToast'),
      );
    function l(a, b, c) {
      b === void 0 && (b = 2750);
      var d = (c = c) != null ? c : j,
        e = d.push(
          i.jsx(
            k,
            babelHelpers['extends']({}, a, {
              loadImmediately: !0,
              onDismiss: function () {
                return d.expire(e);
              },
            }),
          ),
          b,
        );
      return e;
    }
    function a(a, b) {
      return l({ message: a }, b);
    }
    function b(a, b, e) {
      b === void 0 && (b = 2750);
      return l(
        babelHelpers['extends']({}, a, {
          icon: i.jsx(c('CometIcon.react'), {
            color: 'warning',
            icon: d('fbicon')._(h('502062'), 20),
          }),
        }),
        b,
        e,
      );
    }
    g.cometPushToast = l;
    g.cometPushSimpleToast = a;
    g.cometPushErrorToast = b;
  },
  98,
);
