__d(
  'StoriesCreateCTALinkPicker.react',
  [
    'fbt',
    'ix',
    'CometRelay',
    'RelayHooks',
    'StoriesCreateCTALinkPicker_data.graphql',
    'TetraButton.react',
    'TetraText.react',
    'fbicon',
    'react',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j,
      k = d('react'),
      l = j !== void 0 ? j : (j = b('StoriesCreateCTALinkPicker_data.graphql'));
    function a(a) {
      var b = a.dataRef,
        e = a.linkInputError,
        f = a.onChange,
        g = a.onDelete;
      a = a.pageLinks;
      b = d('RelayHooks').useFragment(l, b);
      b = b == null ? void 0 : b.stories_create_cta_link_options;
      return k.jsxs('div', {
        className:
          'x443n21 x1lq5wgf xgqcy7u x30kzoy x9jhf4c x14vqqas x1swvt13 x1pi30zi xyamay9 x1l90r2v',
        children: [
          k.jsx(c('TetraText.react'), {
            type: 'bodyLink2',
            children: h._('__JHASH__JUrQ2vMRe3v__JHASH__'),
          }),
          k.jsx(d('CometRelay').MatchContainer, {
            match: b,
            props: { dataRef: b, linkInputError: e, onChange: f, pageLinks: a },
          }),
          k.jsx(c('TetraButton.react'), {
            icon: d('fbicon')._(i('483825'), 16),
            label: h._('__JHASH__XnGLoclbflh__JHASH__'),
            onPress: g,
            type: 'secondary',
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
