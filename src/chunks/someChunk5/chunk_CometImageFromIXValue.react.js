__d(
  'CometImageFromIXValue.react',
  [
    'BaseImage.react',
    'CometSSRBackgroundImageUtils',
    'CometVisualCompletionAttributes',
    'RecoverableViolationWithComponentStack.react',
    'coerceImageishSprited',
    'coerceImageishURL',
    'react',
    'stylex',
    'testID',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a, b) {
      var e = a.alt;
      e = e === void 0 ? '' : e;
      var f = a.objectFit,
        g = a.source,
        i = a.testid;
      a = a.xstyle;
      d('CometSSRBackgroundImageUtils').processSpritedImagesForSSRPreload(g);
      var j = c('coerceImageishSprited')(g);
      if (j != null) {
        var k = c('stylex')(a);
        return h.jsx(
          'i',
          babelHelpers['extends'](
            {},
            c('CometVisualCompletionAttributes').CSS_IMG,
            c('testID')(i),
            {
              'aria-label': e === '' ? null : e,
              className:
                j.type === 'css'
                  ? k !== ''
                    ? j.className + ' ' + k
                    : j.className
                  : k,
              ref: b,
              role: e === '' ? null : 'img',
              style: j.type === 'cssless' ? j.style : void 0,
            },
          ),
        );
      }
      i = c('coerceImageishURL')(g);
      if (i != null) {
        k = i.height;
        j = i.uri;
        g = i.width;
        return h.jsx(c('BaseImage.react'), {
          alt: e,
          draggable: !1,
          height: f === 'cover' ? '100%' : k,
          objectFit: f,
          ref: b,
          src: j,
          testid: void 0,
          width: f === 'cover' ? '100%' : g,
          xstyle: a,
        });
      }
      return h.jsx(c('RecoverableViolationWithComponentStack.react'), {
        errorMessage:
          'asset provided to CometImageFromIXValue cannot be transformed by Haste',
        projectName: 'comet_ui',
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
