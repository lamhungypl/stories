/*FB_PKG_DELIM*/

__d(
  'LSDeleteThenInsertAttachmentConversion',
  [],
  function (a, b, c, d, e, f) {
    function a() {
      var a = arguments,
        b = a[a.length - 1];
      b.n;
      var c = [];
      return b.seq([
        function (c) {
          return b.db
            .table(164)
            .put({
              attachmentFbid: a[0],
              threadKey: a[1],
              pdfConversionStatus: a[4],
              openableUrl: a[2],
              openableUrlExpirationTimestampMs: a[3],
            });
        },
        function (a) {
          return b.resolve(c);
        },
      ]);
    }
    e.exports = a;
  },
  null,
);
__d(
  'LSUpdatePreviewUrl',
  [],
  function (a, b, c, d, e, f) {
    function a() {
      var a = arguments,
        b = a[a.length - 1];
      b.n;
      var c = [];
      return b.resolve(c);
    }
    e.exports = a;
  },
  null,
);
