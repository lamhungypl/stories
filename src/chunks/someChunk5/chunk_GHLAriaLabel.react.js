__d(
  'GHLAriaLabel.react',
  [
    'BasePortal.react',
    'CometPlaceholder.react',
    'ExecutionEnvironment',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = null,
      j = function () {
        c('ExecutionEnvironment').canUseDOM &&
          i === null &&
          ((i = document.createElement('div')),
          i.setAttribute('hidden', 'true'),
          (i.style.display = 'none'),
          document.body && document.body.appendChild(i));
        return i;
      };
    function a(a) {
      return h.jsx(c('CometPlaceholder.react'), {
        fallback: null,
        children: h.jsx(c('BasePortal.react'), {
          target: j(),
          children: h.jsx(
            'span',
            babelHelpers['extends']({}, a.targetProps, {
              ref: a.targetRef,
              children: a.children,
            }),
          ),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
