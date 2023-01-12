__d(
  'useCometPromptProfileSwitcherEducation',
  [
    'CometProfileSwitcherDefaults',
    'CometSetProfileSwitcherEducationContext',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useContext;
    function a() {
      var a = h(c('CometSetProfileSwitcherEducationContext')),
        b = a.setCalloutText,
        e = a.setShowCallout;
      return {
        hideCallout: function () {
          e(!1);
        },
        showCallout: function (a, c) {
          a != null
            ? b(a)
            : b(d('CometProfileSwitcherDefaults').DEFAULT_CALLOUT_TEXT),
            e(!0, c);
        },
      };
    }
    g['default'] = a;
  },
  98,
);
