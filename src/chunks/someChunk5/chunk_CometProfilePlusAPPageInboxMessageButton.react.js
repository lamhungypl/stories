__d(
  'CometProfilePlusAPPageInboxMessageButton.react',
  [
    'fbt',
    'CometProfilePlusAPPageInboxMessageButtonImpl.react',
    'CometRelay',
    'XPagesManagerInboxControllerRouteBuilder',
    'deferredLoadComponent',
    'gkx',
    'react',
    'recoverableViolation',
    'requireDeferredForDisplay',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    b = d('react');
    var j = b.useCallback,
      k = b.useRef,
      l = b.useState,
      m = c('deferredLoadComponent')(
        c('requireDeferredForDisplay')('MWChatBadgeCount.react').__setRef(
          'CometProfilePlusAPPageInboxMessageButton.react',
        ),
      );
    function a(a) {
      a = a.mailboxID;
      a = c('XPagesManagerInboxControllerRouteBuilder').buildURL({
        page_token: a,
        referrer: 'comet_profile_plus_ap_page_inbox_message_button',
      });
      var b = c('gkx')('2530'),
        e = l(0),
        f = e[0],
        g = e[1],
        n = k(null);
      e = j(
        function (a) {
          g && g(a);
          if (n.current === a) return;
          n.current = a;
        },
        [g],
      );
      var o = d('CometRelay').useRelayEnvironment(),
        p = j(
          function () {
            o.commitUpdate(function (a) {
              var b = a.getRoot();
              if (b == null) {
                c('recoverableViolation')(
                  'A store root must be present to move forward.',
                  'messenger_comet',
                );
                return;
              }
              b = b.getLinkedRecord('viewer');
              if (b == null) {
                c('recoverableViolation')(
                  'A viewer record does not exist.',
                  'messenger_comet',
                );
                return;
              }
              var d = b.getLinkedRecord('message_threads');
              if (d == null) {
                var e = 'client:root:viewer:message_threads';
                d = a.create(e, 'ViewerMessageThreadsConnection');
                b.setLinkedRecord(d, 'message_threads');
              }
              d.setValue(0, 'unseen_count');
            });
          },
          [o],
        );
      f =
        f === 0
          ? h._('__JHASH__lpjUQ8yq6fh__JHASH__')
          : h._('__JHASH__ScBkJbM4noF__JHASH__', [h._param('badge count', f)]);
      return i.jsx(c('CometProfilePlusAPPageInboxMessageButtonImpl.react'), {
        deferredBadgeCount: b ? m : null,
        label: f,
        linkProps: { target: '_blank', url: a },
        onPress: b ? p : void 0,
        setBadgeCount: e,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
