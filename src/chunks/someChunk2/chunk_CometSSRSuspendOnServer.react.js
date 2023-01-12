__d(
  'CometSSRSuspendOnServer.react',
  [
    'CometSSRClientRender',
    'CometSSRReactFizzEnvironment',
    'ExecutionEnvironment',
    'Promise',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d('react');
    function a(a) {
      a = a.children;
      if (c('ExecutionEnvironment').canUseDOM) return a;
      if (d('CometSSRReactFizzEnvironment').isReactFizzEnvironment())
        throw d('CometSSRClientRender').CometSSRClientRender(
          'CometSSRSuspendOnServer: This component is marked to be client rendered',
        );
      else throw new (b('Promise'))(function () {});
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
