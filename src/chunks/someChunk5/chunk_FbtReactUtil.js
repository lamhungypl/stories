__d(
  'FbtReactUtil',
  [],
  function (a, b, c, d, e, f) {
    a =
      (typeof Symbol === 'function' &&
        Symbol['for'] &&
        Symbol['for']('react.element')) ||
      60103;
    var g = !1;
    b = {
      REACT_ELEMENT_TYPE: a,
      injectReactShim: function (a) {
        var b = { validated: !0 };
        g
          ? Object.defineProperty(a, '_store', {
              configurable: !1,
              enumerable: !1,
              writable: !1,
              value: b,
            })
          : (a._store = b);
      },
    };
    e.exports = b;
  },
  null,
);
