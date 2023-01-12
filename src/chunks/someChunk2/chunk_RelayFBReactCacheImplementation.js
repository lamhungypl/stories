__d(
  'RelayFBReactCacheImplementation',
  [
    'react-relay/relay-hooks/HooksImplementation',
    'react-relay/relay-hooks/react-cache/useFragment_REACT_CACHE',
    'react-relay/relay-hooks/react-cache/usePaginationFragment_REACT_CACHE',
    'react-relay/relay-hooks/react-cache/useRefetchableFragment_REACT_CACHE',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('react-relay/relay-hooks/react-cache/useFragment_REACT_CACHE');
    function a() {
      b('react-relay/relay-hooks/HooksImplementation').inject({
        useFragment: g,
        usePaginationFragment: b(
          'react-relay/relay-hooks/react-cache/usePaginationFragment_REACT_CACHE',
        ),
        useRefetchableFragment: b(
          'react-relay/relay-hooks/react-cache/useRefetchableFragment_REACT_CACHE',
        ),
      });
    }
    c = { inject: a };
    f['default'] = c;
  },
  66,
);
