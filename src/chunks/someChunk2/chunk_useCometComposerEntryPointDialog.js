__d(
  'useCometComposerEntryPointDialog',
  [
    'fbt',
    'CometCardedDialogLegacy.react',
    'FeedComposerCometGlimmer.react',
    'cometComposerLogger',
    'composerCometCardedDialogProps',
    'react',
    'useCometEntryPointDialog',
    'uuid',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    b = d('react');
    var j = b.useCallback,
      k = b.useRef,
      l = { withCloseButton: !0 };
    function m(a) {
      return i.jsx('div', {
        children: i.jsx(
          c('CometCardedDialogLegacy.react'),
          babelHelpers['extends'](
            { title: a.title },
            c('composerCometCardedDialogProps'),
            a,
            { children: i.jsx(c('FeedComposerCometGlimmer.react'), {}) },
          ),
        ),
      });
    }
    m.displayName = m.name + ' [from ' + f.id + ']';
    function a(a) {
      var b = a || {},
        d = b.composerEntryPointName,
        e = b.composerSourceSurface,
        f = b.composerDialogEntryPoint,
        g = b.composerType,
        n = b.disableClosingWithMask,
        o = b.onBeforeClose,
        p = b.onClose,
        q = b.onCloseWithoutSave,
        r = b.onSaveError,
        s = b.onSubmit,
        t = b.reactionType,
        u = b.storyID,
        v = b.profileID,
        w = b.title,
        x = w === void 0 ? h._('__JHASH__7wa2Ol4OIqR__JHASH__') : w,
        y = b.tracePolicy,
        z = b.localBackupTargetID,
        A = b.renderLocation;
      w = k(null);
      b = c('useCometEntryPointDialog')(
        f,
        { composerType: g, profileID: v, reactionType: t, storyID: u },
        'button',
        function (a) {
          return i.jsx(m, babelHelpers['extends']({ onClose: a, title: x }, l));
        },
        { queryIsCheap_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: !0 },
      );
      var B = b[0];
      t = b[1];
      u = b[2];
      b = b[3];
      var C = j(
          function (b) {
            a != null && a.onSave != null && a.onSave && a.onSave(b);
          },
          [a],
        ),
        D =
          (f =
            f == null
              ? void 0
              : (f = f.root) == null
              ? void 0
              : f.getModuleId()) != null
            ? f
            : null;
      f = j(
        function (a) {
          var b, f;
          a = a || {};
          var h = a.beginningViewState;
          a = a.pushedPageOnLoad;
          b =
            (b = h == null ? void 0 : h.creationSessionID) != null
              ? b
              : c('uuid')();
          f = {
            composerEntryPointName: d,
            composerSourceSurface: e,
            composerType: (f = g) != null ? f : D,
          };
          f = { fields: f, type: 'COMPOSER_ENTRY' };
          c('cometComposerLogger')(f, b);
          B(
            babelHelpers['extends'](
              {
                beginningViewState: babelHelpers['extends']({}, h, {
                  creationSessionID: b,
                }),
                composerEntryPointName: d,
                composerSourceSurface: e,
                composerType: g,
                disableClosingWithMask: n,
                localBackupTargetID: z,
                onBeforeClose: o,
                onCloseWithoutSave: q,
                onSave: C,
                onSaveError: r,
                onSubmit: s,
                profileID: v,
                pushedPageOnLoad: a,
                renderLocation: A,
                title: x,
              },
              l,
            ),
            p,
            y,
          );
        },
        [D, d, e, g, n, z, o, p, q, C, r, s, v, A, B, x, y],
      );
      return [f, w, t, u, b];
    }
    g['default'] = a;
  },
  98,
);
