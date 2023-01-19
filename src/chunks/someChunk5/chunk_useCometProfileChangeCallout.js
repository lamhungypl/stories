__d(
  'useCometProfileChangeCallout',
  [
    'CometProfileSwitcherDefaults',
    'CometProfileSwitcherEducationContext',
    'react',
    'useCometCallout',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useContext;
    function a() {
      var a = h(c('CometProfileSwitcherEducationContext')),
        b = a.calloutText;
      a = a.showCallout;
      b = {
        arrowStyle: 'inset',
        label:
          (b = b == null ? void 0 : b.current) != null
            ? b
            : d('CometProfileSwitcherDefaults').DEFAULT_CALLOUT_TEXT,
        position: 'below',
        type: 'accent',
      };
      return c('useCometCallout')(b, a);
    }
    g['default'] = a;
  },
  98,
);
