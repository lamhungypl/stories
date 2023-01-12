__d(
  'StoriesCreateCTAUtils',
  [
    'CometRelay',
    'StoriesCreateCTAUtils_pageAddressAndLocation.graphql',
    'StoriesCreateCTAUtils_pagePhoneNumber.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h, i;
    function a(a) {
      a = d('CometRelay').readInlineData(
        h !== void 0
          ? h
          : (h = b('StoriesCreateCTAUtils_pagePhoneNumber.graphql')),
        a,
      );
      a =
        a == null
          ? void 0
          : (a = a.all_phones[0]) == null
          ? void 0
          : (a = a.phone_number) == null
          ? void 0
          : a.universal_number;
      return a != null ? 'tel:' + a : null;
    }
    function c(a) {
      var c, e;
      a = d('CometRelay').readInlineData(
        i !== void 0
          ? i
          : (i = b('StoriesCreateCTAUtils_pageAddressAndLocation.graphql')),
        a,
      );
      c =
        a == null
          ? void 0
          : (c = a.address) == null
          ? void 0
          : c.single_line_full_address;
      var f = null,
        g = 'fbgeo://';
      e = a == null ? void 0 : (e = a.location) == null ? void 0 : e.latitude;
      a = a == null ? void 0 : (a = a.location) == null ? void 0 : a.longitude;
      e != null && a != null && (f = '' + g + e + ',' + a);
      c != null && (f = f == null ? g + '"' + c + '"' : f + ',"' + c + '"');
      return f;
    }
    g.getURLFromPhoneNumber = a;
    g.getURLFromAddress = c;
  },
  98,
);
