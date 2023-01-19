__d(
  'cometGetKeyCommandConfig',
  ['fbt', 'cr:2011405', 'cr:2011406', 'gkx', 'recoverableViolation'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = {
      command: null,
      description: h._('__JHASH__b304p5m3LLr__JHASH__'),
      handler: function () {
        return void 0;
      },
      isHiddenCommand: !0,
    };
    function j(a, b, d, e, f) {
      if (e == null) {
        c('recoverableViolation')(f, 'comet_ax');
        return i;
      }
      if (
        !Object.prototype.hasOwnProperty.call(e, a) ||
        !Object.prototype.hasOwnProperty.call(e[a].shortcuts, b)
      ) {
        c('recoverableViolation')(
          'Missing default key command config for ' + a + ' and ' + b,
          'comet_ax',
        );
        return i;
      }
      f = e[a].shortcuts[b];
      e = f.command;
      var g = f.description;
      return e != null && g != null
        ? {
            command: e,
            commandID: b,
            description: g,
            groupID: a,
            handler: d,
            isHiddenCommand: f.isHiddenCommand,
            singleCharDescription: f.singleCharDescription,
            triggerFromInputs: f.triggerFromInputs,
          }
        : i;
    }
    function a(a, c, d) {
      return j(
        a,
        c,
        d,
        b('cr:2011405'),
        'getCometKeyCommandConfig should only be used in Comet',
      );
    }
    function d(a, d, e) {
      var f = c('gkx')('1224637') ? b('cr:2011406') : b('cr:2011405');
      return j(a, d, e, f, 'Reached unreachable code');
    }
    g.getKeyCommandConfig = j;
    g.getCometKeyCommandConfig = a;
    g.getCometAndGeminiKeyCommandConfig = d;
  },
  98,
);
