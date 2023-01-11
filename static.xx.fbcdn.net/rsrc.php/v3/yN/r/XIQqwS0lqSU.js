/*FB_PKG_DELIM*/

__d(
  'LSComputeParticipantCapabilities',
  ['LSGetViewerFBID'],
  function (a, b, c, d, e, f) {
    function a() {
      var a = arguments,
        c = a[a.length - 1];
      c.n;
      var d = [],
        e = [];
      return c.seq([
        function (f) {
          return c.seq([
            function (a) {
              return c.sp(b('LSGetViewerFBID')).then(function (a) {
                return (a = a), (d[0] = a[0]), a;
              });
            },
            function (b) {
              return c
                .ftr(c.db.table(14).fetch([[[a[1], d[0]]]]), function (b) {
                  return (
                    c.i64.eq(b.threadKey, a[1]) &&
                    c.i64.eq([0, 0], [0, 0]) &&
                    c.i64.eq(b.contactId, d[0])
                  );
                })
                .next()
                .then(function (a, b) {
                  var c = a.done;
                  a = a.value;
                  return c
                    ? ((c = [!1, !1]), (d[1] = c[0]), (d[2] = c[1]), c)
                    : ((b = a.item),
                      (c = [b.isAdmin == null ? !1 : b.isAdmin, b.isModerator]),
                      (d[1] = c[0]),
                      (d[2] = c[1]),
                      c);
                });
            },
            function (b) {
              return c
                .ftr(c.db.table(14).fetch([[[a[1], a[0]]]]), function (b) {
                  return (
                    c.i64.eq(b.threadKey, a[1]) &&
                    c.i64.eq([0, 0], [0, 0]) &&
                    c.i64.eq(b.contactId, a[0])
                  );
                })
                .next()
                .then(function (a, b) {
                  var c = a.done;
                  a = a.value;
                  return c
                    ? ((c = [!1, !1]), (d[4] = c[0]), (d[5] = c[1]), c)
                    : ((b = a.item),
                      (c = [b.isAdmin == null ? !1 : b.isAdmin, b.isModerator]),
                      (d[4] = c[0]),
                      (d[5] = c[1]),
                      c);
                });
            },
            function (b) {
              return c
                .ftr(c.db.table(7).fetch([[[a[0]]]]), function (b) {
                  return c.i64.eq(b.id, a[0]) && c.i64.eq([0, 1], [0, 1]);
                })
                .next()
                .then(function (a, b) {
                  var c = a.done;
                  a = a.value;
                  return c
                    ? ((c = [[0, 1073741823], [0, 0], !1]),
                      (d[7] = c[0]),
                      (d[8] = c[1]),
                      (d[9] = c[2]),
                      c)
                    : ((b = a.item),
                      (c = [
                        b.capabilities == null
                          ? [0, 1073741823]
                          : b.capabilities,
                        b.contactTypeExact == null
                          ? [0, 0]
                          : b.contactTypeExact,
                        b.isManagedByViewer == null ? !1 : b.isManagedByViewer,
                      ]),
                      (d[7] = c[0]),
                      (d[8] = c[1]),
                      (d[9] = c[2]),
                      c);
                });
            },
            function (a) {
              return (
                (d[12] = c.i64.eq(d[8], [0, 4])
                  ? d[9]
                    ? [0, 2612119]
                    : c.i64.or_(
                        [0, 2612119],
                        c.i64.lsl_([0, 1], c.i64.to_int32([0, 3])),
                      )
                  : d[7]),
                c.sp(b('LSGetViewerFBID')).then(function (a) {
                  return (a = a), (d[11] = a[0]), a;
                })
              );
            },
            function (e) {
              return (
                (d[13] = c.i64.lsl_([0, 1], c.i64.to_int32([0, 20]))),
                (d[15] =
                  d[1] && !d[4] && c.i64.neq(d[11], a[0])
                    ? d[12]
                    : c.i64.eq(c.i64.and_(d[12], d[13]), [0, 0])
                    ? d[12]
                    : c.i64.sub(d[12], d[13])),
                c.sp(b('LSGetViewerFBID')).then(function (a) {
                  return (a = a), (d[14] = a[0]), a;
                })
              );
            },
            function (e) {
              return (
                (d[16] = c.i64.lsl_([0, 1], c.i64.to_int32([0, 22]))),
                (d[19] =
                  d[4] && d[1] && c.i64.neq(d[14], a[0])
                    ? d[15]
                    : c.i64.eq(c.i64.and_(d[15], d[16]), [0, 0])
                    ? d[15]
                    : c.i64.sub(d[15], d[16])),
                d[2] ? (d[17] = !(d[4] || d[5])) : (d[17] = !0),
                c.sp(b('LSGetViewerFBID')).then(function (a) {
                  return (a = a), (d[18] = a[0]), a;
                })
              );
            },
            function (b) {
              return (
                (d[20] = c.i64.lsl_([0, 1], c.i64.to_int32([0, 21]))),
                (e[0] =
                  (d[1] || d[2]) && d[17] && c.i64.neq(a[0], d[18])
                    ? d[19]
                    : c.i64.eq(c.i64.and_(d[19], d[20]), [0, 0])
                    ? d[19]
                    : c.i64.sub(d[19], d[20]))
              );
            },
          ]);
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
__d(
  'LSAddParticipantIdToGroupThread',
  ['LSComputeParticipantCapabilities'],
  function (a, b, c, d, e, f) {
    function a() {
      var a = arguments,
        c = a[a.length - 1];
      c.n;
      var d = [],
        e = [];
      return c.seq([
        function (e) {
          return c.seq([
            function (e) {
              return c
                .sp(b('LSComputeParticipantCapabilities'), a[1], a[0])
                .then(function (a) {
                  return (a = a), (d[0] = a[0]), a;
                });
            },
            function (b) {
              return c
                .ftr(c.db.table(14).fetch([[[a[0], a[1]]]]), function (b) {
                  return (
                    c.i64.eq(b.threadKey, a[0]) &&
                    c.i64.eq([0, 0], [0, 0]) &&
                    c.i64.eq(b.contactId, a[1]) &&
                    c.i64.gt(b.authorityLevel, a[9])
                  );
                })
                .next()
                .then(function (b) {
                  var e = b.done;
                  b.value;
                  return e
                    ? c.db
                        .table(14)
                        .put({
                          threadKey: a[0],
                          contactId: a[1],
                          readWatermarkTimestampMs: a[2],
                          readActionTimestampMs: a[3],
                          deliveredWatermarkTimestampMs: a[4],
                          nickname: a[5],
                          normalizedSearchTerms: a[10],
                          isAdmin: a[6],
                          isSuperAdmin: a[11],
                          subscribeSource: a[7],
                          authorityLevel: a[9],
                          participantCapabilities: d[0],
                          groupParticipantJoinState: [0, 0],
                          isModerator: !1,
                        })
                    : 0;
                });
            },
          ]);
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
__d(
  'LSClearMessagePlaceholderRange',
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
            b.ftr(b.db.table(13).fetch([[[a[0], [0, 0]]]]), function (c) {
              return (
                b.i64.eq(c.threadKey, a[0]) &&
                c.minMessageId === a[1] &&
                b.i64.eq([0, 0], c.minTimestampMs) &&
                b.i64.eq(a[2], c.maxTimestampMs)
              );
            }),
            function (a) {
              return a['delete']();
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
  'LSInsertNewMessageRange',
  ['LSClearMessagePlaceholderRange'],
  function (a, b, c, d, e, f) {
    function a() {
      var a = arguments,
        c = a[a.length - 1];
      c.n;
      var d = [],
        e = [];
      return c.seq([
        function (e) {
          return c.seq([
            function (d) {
              return c.sp(
                b('LSClearMessagePlaceholderRange'),
                a[0],
                a[9],
                [0, 0],
              );
            },
            function (b) {
              return c
                .ftr(
                  c.db.table(13).fetch([[[a[0], { lte: a[5] }]]]),
                  function (b) {
                    return (
                      c.i64.eq(b.threadKey, a[0]) &&
                      c.i64.le(b.minTimestampMs, a[5]) &&
                      c.i64.ge(b.maxTimestampMs, a[5])
                    );
                  },
                )
                .next()
                .then(function (b, c) {
                  var e = b.done;
                  b = b.value;
                  return e
                    ? ((e = [a[1], a[3], a[7]]),
                      (d[0] = e[0]),
                      (d[1] = e[1]),
                      (d[2] = e[2]),
                      e)
                    : ((c = b.item),
                      (e = [c.minTimestampMs, c.minMessageId, c.hasMoreBefore]),
                      (d[0] = e[0]),
                      (d[1] = e[1]),
                      (d[2] = e[2]),
                      e);
                });
            },
            function (b) {
              return c
                .ftr(
                  c.db.table(13).fetch([[[a[0], { lte: a[6] }]]]),
                  function (b) {
                    return (
                      c.i64.eq(b.threadKey, a[0]) &&
                      c.i64.le(b.minTimestampMs, a[6]) &&
                      c.i64.ge(b.maxTimestampMs, a[6])
                    );
                  },
                )
                .next()
                .then(function (b, c) {
                  var e = b.done;
                  b = b.value;
                  return e
                    ? ((e = [a[2], a[4], a[8]]),
                      (d[4] = e[0]),
                      (d[5] = e[1]),
                      (d[6] = e[2]),
                      e)
                    : ((c = b.item),
                      (e = [c.maxTimestampMs, c.maxMessageId, c.hasMoreAfter]),
                      (d[4] = e[0]),
                      (d[5] = e[1]),
                      (d[6] = e[2]),
                      e);
                });
            },
            function (b) {
              return c.fe(
                c.ftr(
                  c.db.table(13).fetch([[[a[0], { lte: a[6] }]]]),
                  function (b) {
                    return (
                      c.i64.eq(b.threadKey, a[0]) &&
                      c.i64.ge(a[6], b.minTimestampMs) &&
                      c.i64.le(a[5], b.maxTimestampMs)
                    );
                  },
                ),
                function (a) {
                  return a['delete']();
                },
              );
            },
            function (b) {
              return c.db
                .table(13)
                .put({
                  threadKey: a[0],
                  minTimestampMs: d[0],
                  minMessageId: d[1],
                  maxTimestampMs: d[4],
                  maxMessageId: d[5],
                  isLoadingBefore: !1,
                  isLoadingAfter: !1,
                  hasMoreBefore: d[2],
                  hasMoreAfter: d[6],
                });
            },
          ]);
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
__d(
  'LSSetForwardScore',
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
            function (b) {
              var c = b.update;
              b.item;
              return c({ forwardScore: a[3] });
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
  'LSUpdateReadReceipt',
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
            b.ftr(b.db.table(14).fetch([[[a[1], a[2]]]]), function (c) {
              return (
                b.i64.eq(c.threadKey, a[1]) &&
                b.i64.eq([0, 0], [0, 0]) &&
                b.i64.eq(c.contactId, a[2]) &&
                b.i64.lt(c.readWatermarkTimestampMs, a[0])
              );
            }),
            function (c) {
              var d = c.update;
              c = c.item;
              return d({
                readWatermarkTimestampMs: a[0],
                readActionTimestampMs: b.i64.gt(a[3], [0, 0])
                  ? a[3]
                  : c.readActionTimestampMs,
              });
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
  'LSUpdateThreadsRangesV2',
  [],
  function (a, b, c, d, e, f) {
    function a() {
      var a = arguments,
        b = a[a.length - 1];
      b.n;
      var c = [],
        d = [];
      return b.seq([
        function (d) {
          return b.seq([
            function (c) {
              return b.fe(b.db.table(10).fetch([[[a[1]]]]), function (a) {
                return a['delete']();
              });
            },
            function (d) {
              return (
                (c[8] =
                  b.i64.gt(a[2], [0, 1]) && b.i64.gt(a[3], [-2147483648, 0])),
                a[0] === 'inbox' &&
                b.i64.eq(a[1], [0, 0]) &&
                b.i64.eq(a[4], [0, 1])
                  ? b.seq([
                      function (d) {
                        return (
                          (c[9] = a[2]),
                          (c[10] = a[3]),
                          (c[11] = !1),
                          (c[12] = c[8]),
                          b.fe(b.db.table(198).fetch(), function (a) {
                            a = a.item;
                            return (
                              (c[13] = a.minLastActivityTimestampMs),
                              (c[15] = a.minThreadKey),
                              (c[14] = b.i64.lt(
                                c[9] == null ? c[13] : c[9],
                                c[13],
                              )),
                              (c[9] = c[14] ? c[13] : c[9]),
                              (c[10] = c[14] ? c[15] : c[10]),
                              (c[11] = c[11] || a.isLoadingBefore),
                              (c[12] =
                                c[12] ||
                                (b.i64.gt(c[13], [0, 1]) &&
                                  b.i64.gt(c[15], [-2147483648, 0])))
                            );
                          })
                        );
                      },
                      function (a) {
                        return (
                          (a = [c[9], c[10], c[11], c[12]]),
                          (c[0] = a[0]),
                          (c[1] = a[1]),
                          (c[2] = a[2]),
                          (c[3] = a[3]),
                          a
                        );
                      },
                    ])
                  : b.resolve(
                      ((d = [a[2], a[3], !1, c[8]]),
                      (c[0] = d[0]),
                      (c[1] = d[1]),
                      (c[2] = d[2]),
                      (c[3] = d[3]),
                      d),
                    )
              );
            },
            function (d) {
              return b.i64.eq(a[4], [0, 1])
                ? b.seq([
                    function (d) {
                      return (
                        (c[9] = c[0]),
                        (c[10] = c[1]),
                        (c[11] = c[2]),
                        (c[12] = c[3]),
                        b.fe(
                          b.ftr(b.db.table(220).fetch(), function (c) {
                            return b.i64.eq(c.parentThreadKey, a[1]);
                          }),
                          function (a) {
                            a = a.item;
                            return (
                              (c[13] = a.minLastActivityTimestampMs),
                              (c[15] = a.minThreadKey),
                              (c[14] = b.i64.lt(
                                c[9] == null ? c[13] : c[9],
                                c[13],
                              )),
                              (c[9] = c[14] ? c[13] : c[9]),
                              (c[10] = c[14] ? c[15] : c[10]),
                              (c[11] = c[11] || a.isLoadingBefore),
                              (c[12] =
                                c[12] ||
                                (b.i64.gt(c[13], [0, 1]) &&
                                  b.i64.gt(c[15], [-2147483648, 0])))
                            );
                          },
                        )
                      );
                    },
                    function (a) {
                      return (
                        (a = [c[9], c[10], c[11], c[12]]),
                        (c[4] = a[0]),
                        (c[5] = a[1]),
                        (c[6] = a[2]),
                        (c[7] = a[3]),
                        a
                      );
                    },
                  ])
                : b.resolve(
                    ((d = [c[0], c[1], c[2], c[3]]),
                    (c[4] = d[0]),
                    (c[5] = d[1]),
                    (c[6] = d[2]),
                    (c[7] = d[3]),
                    d),
                  );
            },
            function (d) {
              return b.db
                .table(10)
                .add({
                  parentThreadKey: a[1],
                  minThreadKey: c[5] == null ? [-2147483648, 0] : c[5],
                  minLastActivityTimestampMs: c[4] == null ? [0, 1] : c[4],
                  maxLastActivityTimestampMs: [0, 1],
                  maxThreadKey: [-2147483648, 0],
                  isLoadingBefore: c[6],
                  isLoadingAfter: !1,
                  hasMoreBefore: c[7],
                  hasMoreAfter: !1,
                });
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
  'LSUpsertMessage',
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
            .table(12)
            .fetch([[[a[9]]], 'optimistic'])
            .next()
            .then(function (c, d) {
              var e = c.done;
              c = c.value;
              return e
                ? b.db
                    .table(12)
                    .add({
                      threadKey: a[3],
                      timestampMs: a[5],
                      messageId: a[8],
                      offlineThreadingId: a[9],
                      authorityLevel: a[2],
                      primarySortKey: a[6],
                      senderId: a[10],
                      isAdminMessage: a[12],
                      sendStatus: a[14],
                      sendStatusV2: a[15],
                      text: a[0],
                      subscriptErrorMessage: a[1],
                      secondarySortKey: a[7],
                      stickerId: a[11],
                      isUnsent: a[16],
                      unsentTimestampMs: a[17],
                      mentionOffsets: a[18],
                      mentionLengths: a[19],
                      mentionIds: a[20],
                      mentionTypes: a[21],
                      replySourceId: a[22],
                      replySourceType: a[23],
                      replySourceTypeV2: a[24],
                      replyStatus: a[25],
                      replySnippet: a[26],
                      replyMessageText: a[27],
                      replyToUserId: a[28],
                      replyMediaExpirationTimestampMs: a[29],
                      replyMediaUrl: a[30],
                      replyMediaPreviewWidth: a[32],
                      replyMediaPreviewHeight: a[33],
                      replyMediaUrlMimeType: a[34],
                      replyMediaUrlFallback: a[35],
                      replyCtaId: a[36],
                      replyCtaTitle: a[37],
                      replyAttachmentType: a[38],
                      replyAttachmentId: a[39],
                      replyAttachmentExtra: a[40],
                      isForwarded: a[41],
                      forwardScore: a[42],
                      hasQuickReplies: a[43],
                      adminMsgCtaId: a[44],
                      adminMsgCtaTitle: a[45],
                      adminMsgCtaType: a[46],
                      cannotUnsendReason: a[47],
                      textHasLinks: a[48],
                      viewFlags: a[49],
                      displayedContentTypes: a[50],
                      viewedPluginKey: a[51],
                      viewedPluginContext: a[52],
                      quickReplyType: a[53],
                      hotEmojiSize: a[54],
                      replySourceTimestampMs: a[55],
                      ephemeralDurationInSec: a[56],
                      msUntilExpirationTs: a[57],
                      ephemeralExpirationTs: a[58],
                      takedownState: a[59],
                    })
                : ((d = c.item),
                  b.i64.le(d.authorityLevel, a[2])
                    ? b.db
                        .table(12)
                        .put({
                          threadKey: a[3],
                          timestampMs: a[5],
                          messageId: a[8],
                          offlineThreadingId: a[9],
                          authorityLevel: a[2],
                          primarySortKey: d.primarySortKey,
                          senderId: a[10],
                          isAdminMessage: a[12],
                          sendStatus: a[14],
                          sendStatusV2: a[15],
                          text: a[0],
                          subscriptErrorMessage: a[1],
                          secondarySortKey: d.secondarySortKey,
                          stickerId: a[11],
                          isUnsent: a[16],
                          unsentTimestampMs: a[17],
                          mentionOffsets: a[18],
                          mentionLengths: a[19],
                          mentionIds: a[20],
                          mentionTypes: a[21],
                          replySourceId: a[22],
                          replySourceType: a[23],
                          replySourceTypeV2: a[24],
                          replyStatus: a[25],
                          replySnippet: a[26],
                          replyMessageText: a[27],
                          replyToUserId: a[28],
                          replyMediaExpirationTimestampMs: a[29],
                          replyMediaUrl: a[30],
                          replyMediaPreviewWidth: a[32],
                          replyMediaPreviewHeight: a[33],
                          replyMediaUrlMimeType: a[34],
                          replyMediaUrlFallback: a[35],
                          replyCtaId: a[36],
                          replyCtaTitle: a[37],
                          replyAttachmentType: a[38],
                          replyAttachmentId: a[39],
                          replyAttachmentExtra: a[40],
                          isForwarded: a[41],
                          forwardScore: a[42],
                          hasQuickReplies: a[43],
                          adminMsgCtaId: a[44],
                          adminMsgCtaTitle: a[45],
                          adminMsgCtaType: a[46],
                          cannotUnsendReason: a[47],
                          textHasLinks: a[48],
                          viewFlags: a[49],
                          displayedContentTypes: a[50],
                          viewedPluginKey: a[51],
                          viewedPluginContext: a[52],
                          quickReplyType: a[53],
                          hotEmojiSize: a[54],
                          replySourceTimestampMs: a[55],
                          ephemeralDurationInSec: a[56],
                          msUntilExpirationTs: a[57],
                          ephemeralExpirationTs: a[58],
                          takedownState: a[59],
                        })
                    : b.resolve());
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
  'LSWriteThreadCapabilities',
  [],
  function (a, b, c, d, e, f) {
    function a() {
      var a = arguments,
        b = a[a.length - 1];
      b.n;
      var c = [];
      return b.seq([
        function (c) {
          return b.fe(b.db.table(9).fetch([[[a[0]]]]), function (b) {
            var c = b.update;
            b.item;
            return c({
              capabilities: a[1],
              capabilities2: a[2],
              capabilities3: a[3],
            });
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
//# sourceURL=https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/XIQqwS0lqSU.js?_nc_x=7tWlUfRI-Ve
