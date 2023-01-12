__d(
  'useResumableComposerViewState',
  ['Actor', 'createEmptyCometComposerViewState', 'emptyObject', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useRef;
    function a(a) {
      a = a || c('emptyObject');
      var b = a.actorID_OVERRIDE_I_KNOW_WHAT_IM_DOING,
        e = a.defaultViewState;
      a = d('Actor').useActor();
      a = a[0];
      var f = (b = b) != null ? b : a,
        g = h(f),
        j = h(null);
      b = function (a) {
        (g.current = f), (j.current = a != null ? i(a) : null);
      };
      a = function () {
        (g.current = f), (j.current = null);
      };
      var k = function (a, b) {
        var d;
        d =
          (d = e) != null ? d : c('createEmptyCometComposerViewState')(null, b);
        b = j.current;
        b != null && g.current === f ? (b = b) : (b = d);
        if (a != null) {
          return babelHelpers['extends']({}, b, {
            attachmentArea: { activeAttachmentType: 'MEDIA' },
            mediaAttachments: (
              ((d = b) == null ? void 0 : d.mediaAttachments) || []
            ).concat(a),
          });
        }
        return b;
      };
      return {
        clearResumableViewState: a,
        getResumableViewState: k,
        saveResumableViewState: b,
      };
    }
    function i(a) {
      var b =
        a.mediaAttachments != null
          ? a.mediaAttachments.map(function (a) {
              if (a.state === 'UPLOADING' || a.state === 'QUEUED')
                switch (a.fileType) {
                  case 'PHOTO':
                    return {
                      data: a.data,
                      file: a.file,
                      fileObjectURL: a.fileObjectURL,
                      fileType: 'PHOTO',
                      state: 'NEW',
                    };
                  case 'VIDEO':
                    return {
                      data: a.data,
                      file: a.file,
                      fileObjectURL: a.fileObjectURL,
                      fileType: 'VIDEO',
                      state: 'NEW',
                    };
                  default:
                    return {
                      data: a.data,
                      file: a.file,
                      fileObjectURL: a.fileObjectURL,
                      fileType: 'FILE',
                      state: 'NEW',
                    };
                }
              return a;
            })
          : void 0;
      return babelHelpers['extends']({}, a, { mediaAttachments: b });
    }
    g['default'] = a;
  },
  98,
);
