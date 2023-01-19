__d(
  'CometProfileSwitchedToastDeferred.react',
  [
    'CometProfileSwitchedToastDeferred_query.graphql',
    'CometRelay',
    'deferredLoadComponent',
    'react',
    'requireDeferred',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react'),
      j = c('deferredLoadComponent')(
        c('requireDeferred')('CometProfileSwitchedToast.react').__setRef(
          'CometProfileSwitchedToastDeferred.react',
        ),
      );
    function a(a) {
      var c = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('CometProfileSwitchedToastDeferred_query.graphql')),
        a.query,
      );
      return i.jsx(j, babelHelpers['extends']({}, a, { query: c }));
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
