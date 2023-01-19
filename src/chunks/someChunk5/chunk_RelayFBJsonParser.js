__d(
  'RelayFBJsonParser',
  ['cr:267'],
  function (a, b, c, d, e, f, g) {
    a = {
      parse: function (a) {
        return b('cr:267') && h()
          ? b('cr:267')({
              constructorAction: 'preserve',
              protoAction: 'preserve',
            }).parse(a)
          : JSON.parse(a);
      },
    };
    function h() {
      return (
        typeof JSON.parse === 'function' &&
        JSON.parse.toString() !== 'function parse() { [native code] }'
      );
    }
    c = a;
    g['default'] = c;
  },
  98,
);
