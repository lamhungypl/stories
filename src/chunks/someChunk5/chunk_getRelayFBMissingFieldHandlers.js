__d(
  'getRelayFBMissingFieldHandlers',
  ['relay-runtime'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('relay-runtime').ROOT_TYPE;
    function a() {
      return [
        {
          kind: 'linked',
          handle: function (a, b, c) {
            if (
              b != null &&
              b.getType() === g &&
              a.name === 'node' &&
              Object.prototype.hasOwnProperty.call(c, 'id')
            )
              return c.id;
          },
        },
        {
          kind: 'linked',
          handle: function (a, b, c, d) {
            if (
              b != null &&
              b.getType() === g &&
              a.name.startsWith('fetch__') &&
              Object.prototype.hasOwnProperty.call(c, 'id')
            ) {
              b = c.id;
              c = d.get(b);
              if (c != null && c.getType() === a.name.substr(7)) return b;
            }
          },
        },
        {
          kind: 'pluralLinked',
          handle: function (a, b, c) {
            if (
              b != null &&
              b.getType() === g &&
              a.name === 'nodes' &&
              Object.prototype.hasOwnProperty.call(c, 'ids')
            )
              return c.ids;
          },
        },
      ];
    }
    e.exports = a;
  },
  null,
);
