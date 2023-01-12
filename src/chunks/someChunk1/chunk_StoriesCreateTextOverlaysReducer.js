__d(
  'StoriesCreateTextOverlaysReducer',
  ['uuid'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      var d, e, f, g;
      d = (d = a.textOverlays) == null ? void 0 : d.alignment;
      e = (e = a.textOverlays) == null ? void 0 : e.editingID;
      f =
        (f = (f = a.textOverlays) == null ? void 0 : f.addTextEnabled) != null
          ? f
          : !1;
      g = ((g = a.textOverlays) == null ? void 0 : g.overlays) || [];
      switch (b.type) {
        case 'text_overlay_create_new':
          var h = g || [];
          h = h.slice();
          var i = c('uuid')();
          !f && h.length !== 0 && h.pop();
          h.push({ id: i, text: void 0 });
          return babelHelpers['extends']({}, a, {
            textOverlays: {
              addTextEnabled: f,
              alignment: d,
              editingID: i,
              overlays: h,
            },
          });
        case 'text_overlay_set_editing':
          return babelHelpers['extends']({}, a, {
            textOverlays: {
              addTextEnabled: f,
              alignment: d,
              editingID: b.id,
              overlays: g,
            },
          });
        case 'text_overlay_update_text':
          i = g || [];
          var j = i.find(function (a) {
            return a.id === b.id;
          });
          j != null && (j.text = b.text);
          i = i.filter(function (a) {
            return (
              (j == null ? void 0 : j.id) !== a.id ||
              (a.text != null && a.text.trim().length > 0)
            );
          });
          return babelHelpers['extends']({}, a, {
            textOverlays: {
              addTextEnabled: f,
              alignment: d,
              editingID: e === (j == null ? void 0 : j.id) ? null : e,
              overlays: i,
            },
          });
        case 'text_overlay_delete_text':
          h = g || [];
          h = h.filter(function (a) {
            return a.id !== b.id;
          });
          return babelHelpers['extends']({}, a, {
            textOverlays: {
              addTextEnabled: f,
              alignment: d,
              editingID: e,
              overlays: h,
            },
          });
        case 'text_overlay_set_rotating':
          return babelHelpers['extends']({}, a, {
            isObjectRotating: b.isRotating,
          });
        case 'text_overlay_set_alignment':
          return babelHelpers['extends']({}, a, {
            textOverlays: {
              addTextEnabled: f,
              alignment: b.alignment,
              editingID: e,
              overlays: g,
            },
          });
        case 'text_overlay_set_add_text_enabled':
          return babelHelpers['extends']({}, a, {
            textOverlays: {
              addTextEnabled: b.addTextEnabled,
              alignment: d,
              editingID: e,
              overlays: g,
            },
          });
      }
      return a;
    }
    g['default'] = a;
  },
  98,
);
