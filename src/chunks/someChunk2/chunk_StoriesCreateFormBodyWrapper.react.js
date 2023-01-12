__d(
  'StoriesCreateFormBodyWrapper.react',
  [
    'fbt',
    'ix',
    'CometPlaceholder.react',
    'CometRelay',
    'StoriesCreateFormBodyPlaceholder.react',
    'StoriesCreateFormBodyWrapper_data.graphql',
    'TetraListCell.react',
    'react',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j,
      k = d('react'),
      l =
        j !== void 0 ? j : (j = b('StoriesCreateFormBodyWrapper_data.graphql'));
    function a(a) {
      var b,
        e = a.children;
      a = a.dataRef;
      a = d('CometRelay').useFragment(l, a);
      a = a == null ? void 0 : (a = a.viewer) == null ? void 0 : a.actor;
      b = a == null ? void 0 : (b = a.profile_picture) == null ? void 0 : b.uri;
      var f = h._('__JHASH__b3je0TRml0g__JHASH__', [
        h._param('name of the stories creator', a == null ? void 0 : a.name),
      ]);
      (a == null ? void 0 : a.name) == null &&
        (f = h._('__JHASH__ErpUC6P_iYe__JHASH__'));
      return k.jsxs(k.Fragment, {
        children: [
          k.jsx(c('TetraListCell.react'), {
            addOnPrimary: {
              shape: 'circle',
              size: 60,
              source: { uri: (a = b) != null ? a : i('762679') },
              type: 'profile-photo',
            },
            headline: f,
          }),
          k.jsx('div', { className: 'xmv5v2v xjm9jq1 x1sy10c2' }),
          k.jsx(c('CometPlaceholder.react'), {
            fallback: k.jsx(c('StoriesCreateFormBodyPlaceholder.react'), {}),
            children: k.jsx('div', {
              className:
                'x9f619 x78zum5 x1r8uery xdt5ytf x1iyjqo2 xs83m0k x1nhvcw1 x1swvt13 x1pi30zi xh8yej3',
              children: e,
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
