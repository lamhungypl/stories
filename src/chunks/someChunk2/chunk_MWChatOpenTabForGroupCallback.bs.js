__d(
  'MWChatOpenTabForGroupCallback.bs',
  [
    'LS.bs',
    'LSDatabaseDeferred.bs',
    'LSIssueMessagesRangeQuery',
    'LSMailboxMessagesRangeQueryDirection.bs',
    'LSMessagingThreadTypeUtil.bs',
    'Promise',
    'ReQL.bs',
    'bs_caml_format',
    'promiseDone',
    'recoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var e = c('bs_caml_format').caml_int64_of_string(a);
      a = d('LSDatabaseDeferred.bs').db.then(function (a) {
        return a.runInTransaction(function (a) {
          var f = d('ReQL.bs').first(
            d('ReQL.bs').getKeyRange(
              d('ReQL.bs').fromTableDescending(a.table('threads')),
              { hd: e, tl: 0 },
            ),
          );
          return f.then(function (f) {
            if (f !== void 0)
              if (d('LSMessagingThreadTypeUtil.bs').isSecure(f.threadType)) {
                c('recoverableViolation')(
                  'Preloading secure thread not implemented yet',
                  'messenger_web_product',
                );
                return b('Promise').resolve();
              } else
                return d('ReQL.bs')
                  .first(
                    d('ReQL.bs').getKeyRange(
                      d('ReQL.bs').fromTableDescending(
                        a.table('messages_ranges_v2__generated'),
                      ),
                      { hd: e, tl: 0 },
                    ),
                  )
                  .then(function (b) {
                    if (b !== void 0 && b.minMessageId === b.maxMessageId)
                      return c('LSIssueMessagesRangeQuery')(
                        e,
                        b.minTimestampMs,
                        d('LSMailboxMessagesRangeQueryDirection.bs').before,
                        d('LS.bs').make(a),
                      );
                  });
            else return b('Promise').resolve();
          });
        }, 'readwrite');
      });
      c('promiseDone')(a);
    }
    g.call = a;
  },
  98,
);
