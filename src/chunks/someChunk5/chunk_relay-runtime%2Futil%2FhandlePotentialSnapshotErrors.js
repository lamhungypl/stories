__d(
  'relay-runtime/util/handlePotentialSnapshotErrors',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b, c) {
      for (
        var c = c,
          d = Array.isArray(c),
          e = 0,
          c = d
            ? c
            : c[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= c.length) break;
          f = c[e++];
        } else {
          e = c.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        a.requiredFieldLogger({
          kind: 'relay_resolver.error',
          owner: f.field.owner,
          fieldPath: f.field.path,
          error: f.error,
        });
      }
      if (b != null)
        switch (b.action) {
          case 'THROW':
            f = b.field;
            e = f.path;
            d = f.owner;
            a.requiredFieldLogger({
              kind: 'missing_field.throw',
              owner: d,
              fieldPath: e,
            });
            throw new Error(
              "Relay: Missing @required value at path '" +
                e +
                "' in '" +
                d +
                "'.",
            );
          case 'LOG':
            b.fields.forEach(function (b) {
              var c = b.path;
              b = b.owner;
              a.requiredFieldLogger({
                kind: 'missing_field.log',
                owner: b,
                fieldPath: c,
              });
            });
            break;
          default:
            b.action;
        }
    }
    e.exports = a;
  },
  null,
);
