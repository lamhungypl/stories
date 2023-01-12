__d(
  'CometProfilePlusAdminEducationStrings',
  ['fbt', 'react'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    d = '9768';
    var j = 'profile_plus_education_closed_profile_switcher_event';
    function a(a) {
      switch (a) {
        case 0:
          return j;
        case 1:
        case 2:
        default:
          return j;
      }
    }
    function b(a, b) {
      switch (a) {
        case 0:
          return k(b);
        case 1:
          return l();
        case 2:
          return m(b);
        default:
          return null;
      }
    }
    function c() {
      return h._('__JHASH__bP9t9Vvb0nd__JHASH__');
    }
    c.displayName = c.name + ' [from ' + f.id + ']';
    function k(a) {
      return {
        bodyText: h._('__JHASH__bROz5kJXWUE__JHASH__', [
          h._param(
            'page name',
            i.jsx('span', { className: 'x117nqv4', children: a }),
          ),
        ]),
        titleText: h._('__JHASH__hoJQFFeSnCG__JHASH__'),
      };
    }
    function l() {
      return {
        bodyText: h._('__JHASH__lSjT_YoZUYz__JHASH__', [
          h._implicitParam(
            '=m1',
            i.jsx('span', {
              className: 'x117nqv4',
              children: h._('__JHASH__tv269GKslyp__JHASH__'),
            }),
          ),
        ]),
        titleText: h._('__JHASH__18pF0zqeHkX__JHASH__'),
      };
    }
    function m(a) {
      return {
        bodyText: h._('__JHASH__rcfnCPF2ipp__JHASH__', [
          h._param(
            'page name',
            i.jsx('span', { className: 'x117nqv4', children: a }),
          ),
        ]),
        titleText: h._('__JHASH__KR_QD_Luom5__JHASH__'),
      };
    }
    function e(a) {
      switch (a) {
        case 0:
          return 'admin_education_voice_switch_screen';
        case 1:
          return 'admin_education_pro_dash_screen';
        case 2:
          return 'admin_education_newsfeed_comments_screen';
        case 5:
          return 'admin_education_nux_tour_welcome_screen';
      }
      return 'admin_education_voice_switch_screen';
    }
    g.PROFILE_PLUS_EDUCATION_CLOSED_PROFILE_SWITCHER_NUX_ID = d;
    g.PROFILE_PLUS_EDUCATION_CLOSED_PROFILE_SWITCHER_EVENT_NAME = j;
    g.getDOMEventName = a;
    g.getEducationStrings = b;
    g.getProductTourCTAText = c;
    g.getVoiceSwitchStrings = k;
    g.getProDashStrings = l;
    g.getNewsfeedCommentStrings = m;
    g.getEventTargetForLogging = e;
  },
  98,
); /*FB_PKG_DELIM*/
