__d(
  'MWJewelDropdownTrigger.react',
  [
    'fbt',
    'CometIconMessengerFilled.react',
    'CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypoint.react',
    'CometSettingsListDropdownLoadingState.react',
    'JSResourceForInteraction',
    'JSScheduler',
    'MAWMessengerStatusOnFacebookEventEmitter',
    'MWChatLoadingDelay.react',
    'MWJewelExperimentationContext.react',
    'MWJewelPopoverDialogContextProvider.react',
    'MWJewelThreadlistPreloaderDeferred',
    'MessageRequestsBulkActionsContextProvider.react',
    'SVGIcon',
    'cr:4064',
    'deferredLoadComponent',
    'promiseDone',
    'react',
    'requireDeferredForDisplay',
    'useTopNavigationLogging',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    e = d('react');
    var j = e.useCallback,
      k = e.useMemo,
      l = e.useRef,
      m = e.useState;
    c('MWJewelThreadlistPreloaderDeferred').getModuleId();
    var n = c('JSResourceForInteraction')(
        'MWJewelThreadlistPreloader',
      ).__setRef('MWJewelDropdownTrigger.react'),
      o = c('deferredLoadComponent')(
        c('requireDeferredForDisplay')('MWChatBadgeCount.react').__setRef(
          'MWJewelDropdownTrigger.react',
        ),
      ),
      p = c('JSResourceForInteraction')('MWV2ChatTab.bs').__setRef(
        'MWJewelDropdownTrigger.react',
      );
    function a(a) {
      a = a.dropdownPosition;
      a = a === void 0 ? 'below' : a;
      var e = d('useTopNavigationLogging').useMessengerButtonLoggingCallbacks(),
        f = e[0];
      e = e[1];
      var g = l(!1),
        q = j(function (a) {
          g.current ||
            ((g.current = !0),
            c('promiseDone')(
              n.load().then(function (a) {
                return a();
              }),
            ));
        }, []),
        r = j(
          function () {
            d('JSScheduler').scheduleSpeculativeCallback(function () {
              p.preload();
            }),
              d('MWChatLoadingDelay.react').interrupt(),
              f(),
              d(
                'MAWMessengerStatusOnFacebookEventEmitter',
              ).markMessegnerIsActiveOnFacebook();
          },
          [f],
        ),
        s = m(0),
        t = s[0];
      s = s[1];
      var u = m(!1),
        v = u[0],
        w = u[1];
      u =
        t === 0
          ? h._('__JHASH__ptC-BqtItMK__JHASH__')
          : h._('__JHASH__zF_9yg3mRYI__JHASH__', [h._param('badge count', t)]);
      var x = k(
        function () {
          return {
            bannerWasSeen: v,
            onBannerVisible: function () {
              return w(!0);
            },
          };
        },
        [v, w],
      );
      x = i.jsx(c('MWJewelPopoverDialogContextProvider.react'), {
        children: i.jsx(c('MessageRequestsBulkActionsContextProvider.react'), {
          children: i.jsx(c('MWJewelExperimentationContext.react').Provider, {
            value: x,
            children: i.jsx(
              c(
                'CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypoint.react',
              ),
              {
                badgeCount: t,
                deferredBadgeCount: o,
                dropdownPosition: a,
                fallback: i.jsx(
                  c('CometSettingsListDropdownLoadingState.react'),
                  {
                    hasActions: !0,
                    title: h._('__JHASH__9FTPnWJWCay__JHASH__'),
                  },
                ),
                icon: d('SVGIcon').legacySVGIcon(
                  c('CometIconMessengerFilled.react'),
                ),
                label: u,
                loggingRef: e,
                onBadgeCount: s,
                onHoverInPrerenderer: q,
                onPress: r,
                onPressInPrerenderer: q,
                testid: void 0,
                tooltipLabel: h._('__JHASH__o5k_4FKzATU__JHASH__'),
                tracePolicy: 'comet.jewel.messenger',
              },
            ),
          }),
        }),
      });
      return b('cr:4064') ? i.jsx(b('cr:4064'), { children: x }) : x;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
