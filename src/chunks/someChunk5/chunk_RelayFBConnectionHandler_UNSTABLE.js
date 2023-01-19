__d(
  'RelayFBConnectionHandler_UNSTABLE',
  [
    'invariant',
    'relay-runtime/mutations/RelayRecordProxy',
    'relay-runtime/mutations/RelayRecordSourceProxy',
    'relay-runtime/mutations/RelayRecordSourceSelectorProxy',
    'relay-runtime/util/getRelayHandleKey',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'connection';
    function a(a, c, d, e) {
      e === void 0 && (e = h);
      var f = [],
        i = b('relay-runtime/util/getRelayHandleKey')(e, d, null);
      a instanceof
        b('relay-runtime/mutations/RelayRecordSourceSelectorProxy') &&
        (a = a.__recordSource);
      (c instanceof b('relay-runtime/mutations/RelayRecordProxy') &&
        a instanceof b('relay-runtime/mutations/RelayRecordSourceProxy')) ||
        g(0, 14424);
      e = a.__mutator.unstable_getRawRecordWithChanges(c.getDataID());
      if (e == null) return e;
      Object.keys(e).forEach(function (a) {
        if (a !== i && a.indexOf(i + '(') !== 0) return;
        a = c.getLinkedRecord(a);
        a != null && f.push(a);
      });
      return f;
    }
    e.exports = { unstable_getAllConnectionsWithKey: a };
  },
  null,
);
