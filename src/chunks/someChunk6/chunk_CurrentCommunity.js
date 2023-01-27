__d(
  'CurrentCommunity',
  ['CurrentCommunityInitialData'],
  function (a, b, c, d, e, f) {
    a = {
      getID: function () {
        return b('CurrentCommunityInitialData').COMMUNITY_ID || '0';
      },
      getName: function () {
        return b('CurrentCommunityInitialData').COMMUNITY_NAME || '';
      },
    };
    c = a;
    f['default'] = c;
  },
  66,
);
