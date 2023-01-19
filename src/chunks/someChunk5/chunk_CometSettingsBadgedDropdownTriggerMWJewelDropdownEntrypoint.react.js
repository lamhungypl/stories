__d(
  'CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypoint.react',
  [
    'CometMessagingJewelDropdown.entrypoint',
    'CometSettingsBadgedDropdownTrigger.react',
    'MWJewelPopoverDialogContext.react',
    'MessageRequestsBulkActionsContext.react',
    'cr:690',
    'cr:764',
    'react',
    'requireDeferred',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext;
    e = c('requireDeferred')('CometMessagingJewelDropdown.react').__setRef(
      'CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypoint.react',
    );
    e.getModuleId();
    function a(a) {
      var d = i(c('MessageRequestsBulkActionsContext.react'));
      d = d.isBulkActionsEditMode;
      var e = i(c('MWJewelPopoverDialogContext.react'));
      e = e.isOpenForDialog;
      return h.jsx(
        c('CometSettingsBadgedDropdownTrigger.react'),
        babelHelpers['extends']({}, a, {
          doNotCloseOnOutsideClick: e || d,
          dropdownEntryPoint:
            (e = (a = b('cr:764')) != null ? a : b('cr:690')) != null
              ? e
              : c('CometMessagingJewelDropdown.entrypoint'),
          preloadTrigger: 'tooltip',
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
