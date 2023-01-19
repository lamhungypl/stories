__d(
  'relay-runtime/store/RelayStoreUtils',
  [
    'invariant',
    'relay-runtime/util/RelayConcreteNode',
    'relay-runtime/util/getRelayHandleKey',
    'relay-runtime/util/stableCopy',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i,
      j = (i = b('relay-runtime/util/RelayConcreteNode')).VARIABLE,
      k = i.LITERAL,
      l = i.OBJECT_VALUE,
      m = i.LIST_VALUE,
      n = '__module_component_',
      o = '__module_operation_';
    function p(a, b) {
      if (a.kind === j) return t(a.variableName, b);
      else if (a.kind === k) return a.value;
      else if (a.kind === l) {
        var c = {};
        a.fields.forEach(function (a) {
          c[a.name] = p(a, b);
        });
        return c;
      } else if (a.kind === m) {
        var d = [];
        a.items.forEach(function (a) {
          a != null ? d.push(p(a, b)) : null;
        });
        return d;
      }
    }
    function q(a, b) {
      var c = {};
      a.forEach(function (a) {
        c[a.name] = p(a, b);
      });
      return c;
    }
    function a(a, c) {
      var d = a.dynamicKey,
        e = a.handle,
        f = a.key,
        g = a.name,
        h = a.args,
        i = a.filters;
      a = b('relay-runtime/util/getRelayHandleKey')(e, f, g);
      e = null;
      h &&
        i &&
        h.length !== 0 &&
        i.length !== 0 &&
        (e = h.filter(function (a) {
          return i.indexOf(a.name) > -1;
        }));
      d && (e = e != null ? [d].concat(e) : [d]);
      if (e === null) return a;
      else return s(a, q(e, c));
    }
    function c(a, b) {
      if (a.storageKey) return a.storageKey;
      var c = r(a);
      a = a.name;
      return c && c.length !== 0 ? s(a, q(c, b)) : a;
    }
    function r(a) {
      if (a.kind === 'RelayResolver' || a.kind === 'RelayLiveResolver') {
        if (a.args == null) {
          var b;
          return (b = a.fragment) == null ? void 0 : b.args;
        }
        return ((b = a.fragment) == null ? void 0 : b.args) == null
          ? a.args
          : a.args.concat(a.fragment.args);
      }
      b = typeof a.args === 'undefined' ? void 0 : a.args;
      return b;
    }
    function d(a, c) {
      return s(a, (h || (h = b('relay-runtime/util/stableCopy')))(c));
    }
    function s(a, b) {
      if (!b) return a;
      var c = [];
      for (var d in b)
        if (Object.prototype.hasOwnProperty.call(b, d)) {
          var e = b[d];
          if (e != null) {
            c.push(
              d + ':' + ((e = JSON.stringify(e)) != null ? e : 'undefined'),
            );
          }
        }
      return c.length === 0 ? a : a + ('(' + c.join(',') + ')');
    }
    function t(a, c) {
      Object.prototype.hasOwnProperty.call(c, a) || g(0, 5557, a);
      return (h || (h = b('relay-runtime/util/stableCopy')))(c[a]);
    }
    function f(a) {
      return '' + n + a;
    }
    function u(a) {
      return '' + o + a;
    }
    i = {
      ACTOR_IDENTIFIER_KEY: '__actorIdentifier',
      CLIENT_EDGE_TRAVERSAL_PATH: '__clientEdgeTraversalPath',
      FRAGMENTS_KEY: '__fragments',
      FRAGMENT_OWNER_KEY: '__fragmentOwner',
      FRAGMENT_PROP_NAME_KEY: '__fragmentPropName',
      MODULE_COMPONENT_KEY: '__module_component',
      ID_KEY: '__id',
      REF_KEY: '__ref',
      REFS_KEY: '__refs',
      ROOT_ID: 'client:root',
      ROOT_TYPE: '__Root',
      TYPENAME_KEY: '__typename',
      INVALIDATED_AT_KEY: '__invalidated_at',
      IS_WITHIN_UNMATCHED_TYPE_REFINEMENT: '__isWithinUnmatchedTypeRefinement',
      RELAY_RESOLVER_VALUE_KEY: '__resolverValue',
      RELAY_RESOLVER_INVALIDATION_KEY: '__resolverValueMayBeInvalid',
      RELAY_RESOLVER_SNAPSHOT_KEY: '__resolverSnapshot',
      RELAY_RESOLVER_ERROR_KEY: '__resolverError',
      RELAY_RESOLVER_OUTPUT_TYPE_RECORD_IDS: '__resolverOutputTypeRecordIDs',
      formatStorageKey: s,
      getArgumentValue: p,
      getArgumentValues: q,
      getHandleStorageKey: a,
      getStorageKey: c,
      getStableStorageKey: d,
      getModuleComponentKey: f,
      getModuleOperationKey: u,
    };
    e.exports = i;
  },
  null,
);
