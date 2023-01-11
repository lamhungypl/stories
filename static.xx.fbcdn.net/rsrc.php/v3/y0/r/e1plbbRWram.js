/*FB_PKG_DELIM*/

__d(
  'LSGetFirstAvailableAttachmentCTAID',
  [],
  function (a, b, c, d, e, f) {
    function a() {
      var a = arguments,
        b = a[a.length - 1];
      b.n;
      var c = [],
        d = [];
      return b.seq([
        function (a) {
          return b.seq([
            function (a) {
              return b.db
                .table(19)
                .fetchDesc()
                .next()
                .then(function (a, d) {
                  var e = a.done;
                  a = a.value;
                  return e
                    ? (c[0] = [0, 1])
                    : ((d = a.item), (c[0] = b.i64.add(d.ctaId, [0, 1])));
                });
            },
            function (a) {
              return (d[0] = c[0]);
            },
          ]);
        },
        function (a) {
          return b.resolve(d);
        },
      ]);
    }
    e.exports = a;
  },
  null,
);
__d(
  'LSGetFirstAvailableQuickReplyCTAID',
  [],
  function (a, b, c, d, e, f) {
    function a() {
      var a = arguments,
        b = a[a.length - 1];
      b.n;
      var c = [],
        d = [];
      return b.seq([
        function (a) {
          return b.seq([
            function (a) {
              return b
                .sb(b.db.table(20).fetch(), [['ctaId', 'DESC']])
                .next()
                .then(function (a, d) {
                  var e = a.done;
                  a = a.value;
                  return e
                    ? (c[0] = [0, 1])
                    : ((d = a.item), (c[0] = b.i64.add(d.ctaId, [0, 1])));
                });
            },
            function (a) {
              return (d[0] = c[0]);
            },
          ]);
        },
        function (a) {
          return b.resolve(d);
        },
      ]);
    }
    e.exports = a;
  },
  null,
);
__d(
  'LSGetFirstAvailableThreadNullstateCTAID',
  [],
  function (a, b, c, d, e, f) {
    function a() {
      var a = arguments,
        b = a[a.length - 1];
      b.n;
      var c = [],
        d = [];
      return b.seq([
        function (a) {
          return b.seq([
            function (a) {
              return b.db
                .table(29)
                .fetchDesc()
                .next()
                .then(function (a, d) {
                  var e = a.done;
                  a = a.value;
                  return e
                    ? (c[0] = [0, 1])
                    : ((d = a.item), (c[0] = b.i64.add(d.ctaId, [0, 1])));
                });
            },
            function (a) {
              return (d[0] = c[0]);
            },
          ]);
        },
        function (a) {
          return b.resolve(d);
        },
      ]);
    }
    e.exports = a;
  },
  null,
);
__d(
  'LSInsertAttachmentItem',
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
            .table(18)
            .add({
              attachmentFbid: a[0],
              attachmentIndex: a[1],
              threadKey: a[2],
              messageId: a[4],
              defaultActionEnableExtensions: a[30],
              originalPageSenderId: a[7],
              titleText: a[8],
              subtitleText: a[9],
              playableUrl: a[12],
              playableUrlFallback: a[13],
              playableUrlExpirationTimestampMs: a[14],
              playableUrlMimeType: a[15],
              dashManifest: a[16],
              previewUrl: a[17],
              previewUrlFallback: a[18],
              previewUrlExpirationTimestampMs: a[19],
              previewUrlMimeType: a[20],
              previewWidth: a[21],
              previewHeight: a[22],
              imageUrl: a[23],
              defaultCtaId: a[24],
              defaultCtaTitle: a[25],
              defaultCtaType: a[26],
              defaultButtonType: a[28],
              defaultActionUrl: a[29],
              defaultWebviewHeightRatio: a[32],
              attachmentCta1Id: a[34],
              cta1Title: a[35],
              cta1IconType: a[36],
              cta1Type: a[37],
              attachmentCta2Id: a[39],
              cta2Title: a[40],
              cta2IconType: a[41],
              cta2Type: a[42],
              attachmentCta3Id: a[44],
              cta3Title: a[45],
              cta3IconType: a[46],
              cta3Type: a[47],
              faviconUrl: a[48],
              faviconUrlFallback: a[49],
              faviconUrlExpirationTimestampMs: a[50],
              previewUrlLarge: a[51],
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
  'LSInsertBlobAttachment',
  [],
  function (a, b, c, d, e, f) {
    function a() {
      var a = arguments,
        b = a[a.length - 1];
      b.n;
      var c = [],
        d;
      return b.seq([
        function (c) {
          return b.seq([
            function (c) {
              return b.fe(
                b.ftr(
                  b.db.table(16).fetch([[[a[27], a[32], a[34]]]]),
                  function (c) {
                    return (
                      b.i64.eq(c.threadKey, a[27]) &&
                      b.i64.eq([0, 0], a[28]) &&
                      c.messageId === a[32] &&
                      c.attachmentFbid === a[34] &&
                      b.i64.lt(c.authorityLevel, a[48]) &&
                      (b.i64.eq(c.attachmentType, [0, 2]) ||
                        b.i64.eq(c.attachmentType, [0, 3]) ||
                        b.i64.eq(c.attachmentType, [0, 4]) ||
                        b.i64.eq(c.attachmentType, [0, 5]) ||
                        b.i64.eq(c.attachmentType, [0, 6]) ||
                        b.i64.eq(c.attachmentType, [0, 10])) &&
                      b.i64.eq(c.ephemeralMediaState, d) &&
                      c.isSharable === !1
                    );
                  },
                ),
                function (a) {
                  return a['delete']();
                },
              );
            },
            function (c) {
              return b.db
                .table(16)
                .add({
                  threadKey: a[27],
                  messageId: a[32],
                  attachmentFbid: a[34],
                  filename: a[0],
                  filesize: a[1],
                  hasMedia: a[2],
                  isSharable: !1,
                  playableUrl: a[3],
                  playableUrlFallback: a[4],
                  playableUrlExpirationTimestampMs: a[5],
                  playableUrlMimeType: a[6],
                  dashManifest: a[7],
                  previewUrl: a[8],
                  previewUrlFallback: a[9],
                  previewUrlExpirationTimestampMs: a[10],
                  previewUrlMimeType: a[11],
                  miniPreview: a[13],
                  previewWidth: a[14],
                  previewHeight: a[15],
                  attributionAppId: a[16],
                  attributionAppName: a[17],
                  attributionAppIcon: a[18],
                  attributionAppIconFallback: a[19],
                  attributionAppIconUrlExpirationTimestampMs: a[20],
                  localPlayableUrl: a[21],
                  playableDurationMs: a[22],
                  attachmentIndex: a[23],
                  accessibilitySummaryText: a[24],
                  isPreviewImage: a[25],
                  originalFileHash: a[26],
                  attachmentType: a[29],
                  timestampMs: a[31],
                  offlineAttachmentId: a[33],
                  hasXma: a[35],
                  xmaLayoutType: a[36],
                  xmasTemplateType: a[37],
                  titleText: a[38],
                  subtitleText: a[39],
                  descriptionText: a[40],
                  sourceText: a[41],
                  faviconUrlExpirationTimestampMs: a[42],
                  isBorderless: a[44],
                  previewUrlLarge: a[45],
                  samplingFrequencyHz: a[46],
                  waveformData: a[47],
                  authorityLevel: a[48],
                });
            },
          ]);
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
  'LSInsertXmaAttachment',
  [],
  function (a, b, c, d, e, f) {
    function a() {
      var a = arguments,
        b = a[a.length - 1];
      b.n;
      var c = [],
        d;
      return b.seq([
        function (c) {
          return b.seq([
            function (c) {
              return b.fe(
                b.ftr(
                  b.db.table(16).fetch([[[a[25], a[30], a[32]]]]),
                  function (c) {
                    return (
                      b.i64.eq(c.threadKey, a[25]) &&
                      b.i64.eq([0, 0], a[26]) &&
                      c.messageId === a[30] &&
                      c.attachmentFbid === a[32] &&
                      b.i64.lt(c.authorityLevel, a[113]) &&
                      (b.i64.eq(c.attachmentType, [0, 7]) ||
                        b.i64.eq(c.attachmentType, [0, 0])) &&
                      c.hasMedia === !1 &&
                      c.hasXma === !0 &&
                      b.i64.eq(c.ephemeralMediaState, d)
                    );
                  },
                ),
                function (a) {
                  return a['delete']();
                },
              );
            },
            function (c) {
              return b.db
                .table(16)
                .add({
                  threadKey: a[25],
                  messageId: a[30],
                  attachmentFbid: a[32],
                  filename: a[1],
                  filesize: a[2],
                  hasMedia: !1,
                  isSharable: a[3],
                  playableUrl: a[4],
                  playableUrlFallback: a[5],
                  playableUrlExpirationTimestampMs: a[6],
                  playableUrlMimeType: a[7],
                  previewUrl: a[8],
                  previewUrlFallback: a[9],
                  previewUrlExpirationTimestampMs: a[10],
                  previewUrlMimeType: a[11],
                  previewWidth: a[13],
                  previewHeight: a[14],
                  attributionAppId: a[15],
                  attributionAppName: a[16],
                  attributionAppIcon: a[17],
                  attributionAppIconFallback: a[18],
                  attributionAppIconUrlExpirationTimestampMs: a[19],
                  attachmentIndex: a[20],
                  accessibilitySummaryText: a[21],
                  shouldRespectServerPreviewSize: a[22],
                  subtitleIconUrl: a[23],
                  shouldAutoplayVideo: a[24],
                  attachmentType: a[27],
                  timestampMs: a[29],
                  offlineAttachmentId: a[31],
                  hasXma: !0,
                  xmaLayoutType: a[33],
                  xmasTemplateType: a[34],
                  defaultCtaId: a[35],
                  defaultCtaTitle: a[36],
                  defaultCtaType: a[37],
                  attachmentCta1Id: a[39],
                  cta1Title: a[40],
                  cta1IconType: a[41],
                  cta1Type: a[42],
                  attachmentCta2Id: a[44],
                  cta2Title: a[45],
                  cta2IconType: a[46],
                  cta2Type: a[47],
                  attachmentCta3Id: a[49],
                  cta3Title: a[50],
                  cta3IconType: a[51],
                  cta3Type: a[52],
                  imageUrl: a[53],
                  imageUrlFallback: a[54],
                  imageUrlExpirationTimestampMs: a[55],
                  actionUrl: a[56],
                  titleText: a[57],
                  subtitleText: a[58],
                  maxTitleNumOfLines: a[59],
                  maxSubtitleNumOfLines: a[60],
                  descriptionText: a[61],
                  sourceText: a[62],
                  faviconUrl: a[63],
                  faviconUrlFallback: a[64],
                  faviconUrlExpirationTimestampMs: a[65],
                  listItemsId: a[67],
                  listItemsDescriptionText: a[68],
                  listItemsDescriptionSubtitleText: a[69],
                  listItemsSecondaryDescriptionText: a[70],
                  listItemId1: a[71],
                  listItemTitleText1: a[72],
                  listItemContactUrlList1: a[73],
                  listItemProgressBarFilledPercentage1: a[74],
                  listItemContactUrlExpirationTimestampList1: a[75],
                  listItemContactUrlFallbackList1: a[76],
                  listItemAccessibilityText1: a[77],
                  listItemId2: a[78],
                  listItemTitleText2: a[79],
                  listItemContactUrlList2: a[80],
                  listItemProgressBarFilledPercentage2: a[81],
                  listItemContactUrlExpirationTimestampList2: a[82],
                  listItemContactUrlFallbackList2: a[83],
                  listItemAccessibilityText2: a[84],
                  listItemId3: a[85],
                  listItemTitleText3: a[86],
                  listItemContactUrlList3: a[87],
                  listItemProgressBarFilledPercentage3: a[88],
                  listItemContactUrlExpirationTimestampList3: a[89],
                  listItemContactUrlFallbackList3: a[90],
                  listItemAccessibilityText3: a[91],
                  isBorderless: a[95],
                  headerImageUrlMimeType: a[96],
                  headerTitle: a[97],
                  headerSubtitleText: a[98],
                  headerImageUrl: a[99],
                  headerImageUrlFallback: a[100],
                  headerImageUrlExpirationTimestampMs: a[101],
                  previewImageDecorationType: a[102],
                  shouldHighlightHeaderTitleInTitle: a[103],
                  targetId: a[104],
                  attachmentLoggingType: a[107],
                  previewUrlLarge: a[109],
                  gatingType: a[110],
                  gatingTitle: a[111],
                  captionBodyText: a[112],
                  authorityLevel: a[113],
                });
            },
          ]);
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
  'LSSetMessageTextHasLinks',
  [],
  function (a, b, c, d, e, f) {
    function a() {
      var a = arguments,
        b = a[a.length - 1];
      b.n;
      var c = [];
      return b.seq([
        function (c) {
          return b.fe(
            b.ftr(b.db.table(12).fetch([[[a[0], a[2], a[1]]]]), function (c) {
              return (
                b.i64.eq(c.threadKey, a[0]) &&
                b.i64.eq([0, 0], [0, 0]) &&
                b.i64.eq(c.timestampMs, a[2]) &&
                c.messageId === a[1]
              );
            }),
            function (a) {
              var b = a.update;
              a.item;
              return b({ textHasLinks: !0 });
            },
          );
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
  'LSIssueInsertPersistentMenuItemsForThreadTask',
  ['LSIssueNewTask'],
  function (a, b, c, d, e, f) {
    function a() {
      var a = arguments,
        c = a[a.length - 1];
      c.n;
      var d = [],
        e = [],
        f;
      return c.seq([
        function (e) {
          return (
            (d[0] = new c.Map()),
            d[0].set('thread_key', a[0]),
            (d[1] = c.toJSON(d[0])),
            c.sp(
              b('LSIssueNewTask'),
              'insert_persistent_menu_items',
              [0, 117],
              d[1],
              f,
              f,
              [0, 0],
              [0, 0],
              f,
              f,
              [0, 0],
            )
          );
        },
        function (a) {
          return c.resolve(e);
        },
      ]);
    }
    e.exports = a;
  },
  null,
);
//# sourceURL=https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/e1plbbRWram.js?_nc_x=7tWlUfRI-Ve
