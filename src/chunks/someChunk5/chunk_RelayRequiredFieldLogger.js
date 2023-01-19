__d(
  'RelayRequiredFieldLogger',
  ['FBLogger', 'err', 'fb-error'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'relay-required',
      i = 'relay-resolver';
    function j(a) {
      return a.kind + '-' + a.fieldPath + '-' + a.owner;
    }
    function a() {
      var a = new Set();
      return function (b) {
        var d = j(b),
          e = a.has(d);
        e || a.add(d);
        switch (b.kind) {
          case 'missing_field.log':
            e ||
              c('FBLogger')(h)
                .blameToPreviousFrame()
                .mustfix(
                  'Encountered a missing `@required` field with action "LOG" at "%s" in "%s"',
                  b.fieldPath,
                  b.owner,
                );
            break;
          case 'missing_field.throw':
            d = [
              'Encountered a missing `@required` field with action "THROW" at "%s" in "%s"',
              b.fieldPath,
              b.owner,
            ];
            var f = c('err').apply(void 0, d);
            f.taalOpcodes = f.taalOpcodes || [];
            f.taalOpcodes.push(c('fb-error').TAALOpcode.PREVIOUS_FRAME);
            if (!e) {
              var g;
              (g = c('FBLogger')(h).blameToPreviousFrame()).mustfix.apply(g, d);
            }
            throw f;
          case 'relay_resolver.error':
            e ||
              c('FBLogger')(i)
                .catching(b.error)
                .blameToPreviousFrame()
                .mustfix(
                  'A Relay Resolver errored at "%s" in "%s"',
                  b.fieldPath,
                  b.owner,
                );
            break;
          default:
            b.kind;
        }
      };
    }
    g.create = a;
  },
  98,
);
