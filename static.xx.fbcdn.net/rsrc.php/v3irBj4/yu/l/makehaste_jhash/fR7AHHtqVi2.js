/*FB_PKG_DELIM*/

__d(
  'StoriesCreateCTALink.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'StoriesCreateCTALink',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'Viewer',
          kind: 'LinkedField',
          name: 'viewer',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: 'LinkedField',
              name: 'actor',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: '__typename',
                  storageKey: null,
                },
                {
                  kind: 'InlineFragment',
                  selections: [
                    {
                      kind: 'InlineDataFragmentSpread',
                      name: 'StoriesCreateCTAUtils_pageAddressAndLocation',
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'StreetAddress',
                          kind: 'LinkedField',
                          name: 'address',
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'single_line_full_address',
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: 'Location',
                          kind: 'LinkedField',
                          name: 'location',
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'latitude',
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'longitude',
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      args: null,
                      argumentDefinitions: [],
                    },
                    {
                      kind: 'InlineDataFragmentSpread',
                      name: 'StoriesCreateCTAUtils_pagePhoneNumber',
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'Phone',
                          kind: 'LinkedField',
                          name: 'all_phones',
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: 'PhoneNumber',
                              kind: 'LinkedField',
                              name: 'phone_number',
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'universal_number',
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      args: null,
                      argumentDefinitions: [],
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'websites',
                      storageKey: null,
                    },
                  ],
                  type: 'Page',
                  abstractKey: null,
                },
                {
                  kind: 'InlineFragment',
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'is_additional_profile_plus',
                      storageKey: null,
                    },
                  ],
                  type: 'User',
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'StoriesCreateCTALinkPicker_data',
        },
      ],
      type: 'Query',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'StoriesCreateCTALinkPicker_data.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'StoriesCreateCTALinkPicker_data',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'StoriesCreateCTALinkOptions',
          kind: 'LinkedField',
          name: 'stories_create_cta_link_options',
          plural: !1,
          selections: [
            {
              args: null,
              documentName: 'StoriesCreateCTALinkPicker_data',
              fragmentName: 'StoriesCreateCTALinkMainOptions_data',
              fragmentPropName: 'data',
              kind: 'ModuleImport',
            },
          ],
          storageKey: null,
        },
      ],
      type: 'Query',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'StoriesCreateCTAUtils_pageAddressAndLocation.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'InlineDataFragment',
      name: 'StoriesCreateCTAUtils_pageAddressAndLocation',
    };
    e.exports = a;
  },
  null,
);
__d(
  'StoriesCreateCTAUtils_pagePhoneNumber.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'InlineDataFragment',
      name: 'StoriesCreateCTAUtils_pagePhoneNumber',
    };
    e.exports = a;
  },
  null,
);
__d(
  'StoriesCreateFormPhoto_data.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'StoriesCreateFormPhoto_data',
      selections: [
        { args: null, kind: 'FragmentSpread', name: 'StoriesCreateCTALink' },
        {
          alias: null,
          args: null,
          concreteType: 'StoriesCreateFormStickerButtonRender',
          kind: 'LinkedField',
          name: 'stories_create_sticker_button_render',
          plural: !1,
          selections: [
            {
              args: null,
              documentName: 'StoriesCreateFormPhoto_data',
              fragmentName: 'StoriesCreateFormStickerButton_data',
              fragmentPropName: 'data',
              kind: 'ModuleImport',
            },
          ],
          storageKey: null,
        },
      ],
      type: 'Query',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'StoriesCreateTextOverlaysRootQuery$Parameters',
  ['StoriesCreateTextOverlaysRootQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b('StoriesCreateTextOverlaysRootQuery_facebookRelayOperation'),
        metadata: {},
        name: 'StoriesCreateTextOverlaysRootQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'StoriesCreatePhotoPreview_data.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'StoriesCreatePhotoPreview_data',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'StoriesCreateFormStickerButtonRender',
          kind: 'LinkedField',
          name: 'stories_create_sticker_button_render',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: '__typename',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: 'Query',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'StoriesCreateCTALinkPicker.react',
  [
    'fbt',
    'ix',
    'CometRelay',
    'RelayHooks',
    'StoriesCreateCTALinkPicker_data.graphql',
    'TetraButton.react',
    'TetraText.react',
    'fbicon',
    'react',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j,
      k = d('react'),
      l = j !== void 0 ? j : (j = b('StoriesCreateCTALinkPicker_data.graphql'));
    function a(a) {
      var b = a.dataRef,
        e = a.linkInputError,
        f = a.onChange,
        g = a.onDelete;
      a = a.pageLinks;
      b = d('RelayHooks').useFragment(l, b);
      b = b == null ? void 0 : b.stories_create_cta_link_options;
      return k.jsxs('div', {
        className:
          'x443n21 x1lq5wgf xgqcy7u x30kzoy x9jhf4c x14vqqas x1swvt13 x1pi30zi xyamay9 x1l90r2v',
        children: [
          k.jsx(c('TetraText.react'), {
            type: 'bodyLink2',
            children: h._('__JHASH__JUrQ2vMRe3v__JHASH__'),
          }),
          k.jsx(d('CometRelay').MatchContainer, {
            match: b,
            props: { dataRef: b, linkInputError: e, onChange: f, pageLinks: a },
          }),
          k.jsx(c('TetraButton.react'), {
            icon: d('fbicon')._(i('483825'), 16),
            label: h._('__JHASH__XnGLoclbflh__JHASH__'),
            onPress: g,
            type: 'secondary',
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'StoriesCreateCTALinkReducer',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = { ctaType: null, link: null, linkInputError: !1, page: null };
    function a(a, b) {
      var c = a.ctaLinkData;
      c == null && (c = babelHelpers['extends']({}, g));
      switch (b.type) {
        case 'CTA_LINK_UPDATE':
          return babelHelpers['extends']({}, a, {
            ctaLinkData: babelHelpers['extends']({}, c, b.data),
          });
        case 'CTA_LINK_DELETE':
          return babelHelpers['extends']({}, a, {
            ctaLinkData: babelHelpers['extends']({}, g),
          });
        case 'CTA_UPDATE_LINK_INPUT_ERROR':
          return babelHelpers['extends']({}, a, {
            ctaLinkData: babelHelpers['extends']({}, c, {
              linkInputError: b.error,
            }),
          });
      }
      return a;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'StoriesCreateCTAUtils',
  [
    'CometRelay',
    'StoriesCreateCTAUtils_pageAddressAndLocation.graphql',
    'StoriesCreateCTAUtils_pagePhoneNumber.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h, i;
    function a(a) {
      a = d('CometRelay').readInlineData(
        h !== void 0
          ? h
          : (h = b('StoriesCreateCTAUtils_pagePhoneNumber.graphql')),
        a,
      );
      a =
        a == null
          ? void 0
          : (a = a.all_phones[0]) == null
          ? void 0
          : (a = a.phone_number) == null
          ? void 0
          : a.universal_number;
      return a != null ? 'tel:' + a : null;
    }
    function c(a) {
      var c, e;
      a = d('CometRelay').readInlineData(
        i !== void 0
          ? i
          : (i = b('StoriesCreateCTAUtils_pageAddressAndLocation.graphql')),
        a,
      );
      c =
        a == null
          ? void 0
          : (c = a.address) == null
          ? void 0
          : c.single_line_full_address;
      var f = null,
        g = 'fbgeo://';
      e = a == null ? void 0 : (e = a.location) == null ? void 0 : e.latitude;
      a = a == null ? void 0 : (a = a.location) == null ? void 0 : a.longitude;
      e != null && a != null && (f = '' + g + e + ',' + a);
      c != null && (f = f == null ? g + '"' + c + '"' : f + ',"' + c + '"');
      return f;
    }
    g.getURLFromPhoneNumber = a;
    g.getURLFromAddress = c;
  },
  98,
);
__d(
  'StoriesCreateFormAddDataButton',
  ['CometPressable.react', 'TetraText.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        button: {
          alignItems: 'x6s0dn4',
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          height: 'xnnlda6',
          justifyContent: 'x1nhvcw1',
          marginTop: 'x1xmf6yo',
          width: 'xh8yej3',
          $$css: !0,
        },
        icon: {
          alignItems: 'x6s0dn4',
          backgroundColor: 'xmjcpbm',
          borderTopStartRadius: 'xnwf7zb',
          borderTopEndRadius: 'x40j3uw',
          borderBottomEndRadius: 'x1s7lred',
          borderBottomStartRadius: 'x15gyhx8',
          display: 'x78zum5',
          height: 'x1vqgdyp',
          justifyContent: 'xl56j7k',
          marginStart: 'x1i64zmx',
          position: 'x1n2onr6',
          width: 'x100vrsf',
          $$css: !0,
        },
        label: { marginStart: 'x16n37ib', position: 'x1n2onr6', $$css: !0 },
      };
    function a(a) {
      var b = a.icon,
        d = a.label,
        e = a.onPress;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'icon',
        'label',
        'onPress',
      ]);
      return h.jsxs(
        c('CometPressable.react'),
        babelHelpers['extends']({ onPress: e, xstyle: i.button }, a, {
          children: [
            h.jsx('div', {
              className:
                'x6s0dn4 xmjcpbm xnwf7zb x40j3uw x1s7lred x15gyhx8 x78zum5 x1vqgdyp xl56j7k x1i64zmx x1n2onr6 x100vrsf',
              children: b,
            }),
            h.jsx('div', {
              className: 'x16n37ib x1n2onr6',
              children: h.jsx(c('TetraText.react'), {
                type: 'bodyLink2',
                children: d,
              }),
            }),
          ],
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'StoriesCreateCTALink.react',
  [
    'fbt',
    'ix',
    'CometRelay',
    'StoriesCreateCTALink.graphql',
    'StoriesCreateCTALinkPicker.react',
    'StoriesCreateCTALinkReducer',
    'StoriesCreateCTAUtils',
    'StoriesCreateFormAddDataButton',
    'StoriesCreateViewStateDispatcherContext',
    'TetraIcon.react',
    'fbicon',
    'react',
    'useCometConfirmationDialog',
    'useStoriesCreateReducer',
    'withStoriesCreateViewStatePart',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j,
      k = d('react');
    e = d('react');
    var l = e.useCallback,
      m = e.useContext,
      n = e.useEffect,
      o = e.useState,
      p = j !== void 0 ? j : (j = b('StoriesCreateCTALink.graphql'));
    function a(a) {
      var b = a.ctaData;
      a = a.dataRef;
      var e = o(!1),
        f = e[0],
        g = e[1];
      e = o({ addressLink: null, phoneNumberLink: null, websiteLink: null });
      var j = e[0],
        q = e[1],
        r = c('useCometConfirmationDialog')();
      c('useStoriesCreateReducer')(c('StoriesCreateCTALinkReducer'));
      var s = m(c('StoriesCreateViewStateDispatcherContext'));
      e = d('CometRelay').useFragment(p, a);
      var t = e == null ? void 0 : (a = e.viewer) == null ? void 0 : a.actor;
      a =
        ((t == null ? void 0 : t.__typename) === 'User' &&
          (t == null ? void 0 : t.is_additional_profile_plus)) ||
        !1;
      n(
        function () {
          if ((t == null ? void 0 : t.__typename) === 'Page') {
            var a;
            q({
              addressLink: d('StoriesCreateCTAUtils').getURLFromAddress(t),
              phoneNumberLink: d('StoriesCreateCTAUtils').getURLFromPhoneNumber(
                t,
              ),
              websiteLink:
                (a = t == null ? void 0 : t.websites[0]) != null ? a : null,
            });
          }
        },
        [t],
      );
      var u = l(
        function (a) {
          s({
            data: {
              ctaType: a.ctaType,
              link: a.link,
              linkInputError: !1,
              page: a.page,
            },
            type: 'CTA_LINK_UPDATE',
          });
        },
        [s],
      );
      if ((t == null ? void 0 : t.__typename) !== 'Page' && !a) return null;
      a = function () {
        r(
          {
            body: h._('__JHASH__H3k-ZpwqHTg__JHASH__'),
            confirm: h._('__JHASH__-LI-SR4DHHv__JHASH__'),
            title: h._('__JHASH__30mJ1KR1WqS__JHASH__'),
          },
          function () {
            s({ type: 'CTA_LINK_DELETE' }), g(!1);
          },
        );
      };
      return f
        ? k.jsx(c('StoriesCreateCTALinkPicker.react'), {
            dataRef: e,
            linkInputError: b.linkInputError,
            onChange: u,
            onDelete: a,
            pageLinks: j,
          })
        : k.jsx(c('StoriesCreateFormAddDataButton'), {
            icon: k.jsx(c('TetraIcon.react'), {
              color: 'primary',
              icon: d('fbicon')._(i('481759'), 16),
            }),
            label: h._('__JHASH___U61gJj3biR__JHASH__'),
            onPress: function () {
              g(!0);
            },
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = c('withStoriesCreateViewStatePart')(a, function (a) {
      return { ctaData: a.ctaLinkData };
    });
    g['default'] = e;
  },
  98,
);
__d(
  'StoriesCreatePhotoReducer',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      var c = a.photoData;
      c == null &&
        (c = {
          bounds: { height: 0, width: 0, x: 0, y: 0 },
          displayedURI: null,
          offset: { dx: 0, dy: 0 },
          rotation: 0,
          scale: 0,
          uploadingInfo: null,
        });
      switch (b.type) {
        case 'photo_update_bounds':
          return babelHelpers['extends']({}, a, {
            photoData: babelHelpers['extends']({}, c, { bounds: b.bounds }),
          });
        case 'photo_update_offset':
          return babelHelpers['extends']({}, a, {
            photoData: babelHelpers['extends']({}, c, {
              offset: { dx: b.dx, dy: b.dy },
            }),
          });
        case 'photo_update_rotation':
          return babelHelpers['extends']({}, a, {
            photoData: babelHelpers['extends']({}, c, { rotation: b.value }),
          });
        case 'photo_update_scale':
          return babelHelpers['extends']({}, a, {
            photoData: babelHelpers['extends']({}, c, { scale: b.value }),
          });
        case 'photo_update_uri':
          return babelHelpers['extends']({}, a, {
            photoData: babelHelpers['extends']({}, c, {
              displayedURI: b.value,
            }),
          });
        case 'photo_update_upload_id':
          var d = b.photoDescriptorID,
            e = b.uploadID;
          return babelHelpers['extends']({}, a, {
            photoData: babelHelpers['extends']({}, c, {
              uploadingInfo: { photoDescriptorID: d, uploadID: e },
            }),
          });
        case 'photo_update_ent_id':
          d = c.uploadingInfo == null ? null : c.uploadingInfo;
          if (d != null)
            return babelHelpers['extends']({}, a, {
              photoData: babelHelpers['extends']({}, c, {
                uploadingInfo: babelHelpers['extends']({}, d, {
                  entID: b.entID,
                }),
              }),
            });
          break;
        case 'photo_clear_uploading':
          return babelHelpers['extends']({}, a, {
            photoData: babelHelpers['extends']({}, c, { uploadingInfo: null }),
          });
      }
      return a;
    }
    f['default'] = a;
  },
  66,
);
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
__d(
  'StoriesCreateFormPhoto.react',
  [
    'fbt',
    'ix',
    'CometRelay',
    'QPLUserFlow',
    'RelayHooks',
    'StoriesCreateCTALink.react',
    'StoriesCreateFormAddDataButton',
    'StoriesCreateFormPhoto_data.graphql',
    'StoriesCreatePhotoReducer',
    'StoriesCreateTextOverlaysReducer',
    'StoriesCreateViewStateDispatcherContext',
    'TetraIcon.react',
    'cr:3482',
    'fbicon',
    'qpl',
    'react',
    'useStoriesCreateReducer',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j,
      k = d('react'),
      l = d('react').useContext,
      m = j !== void 0 ? j : (j = b('StoriesCreateFormPhoto_data.graphql'));
    function a(a) {
      a = a.dataRef;
      c('useStoriesCreateReducer')(c('StoriesCreatePhotoReducer'));
      a = d('RelayHooks').useFragment(m, a);
      return k.jsxs('div', {
        children: [
          k.jsx(n, {}),
          k.jsx(d('CometRelay').MatchContainer, {
            match: a == null ? void 0 : a.stories_create_sticker_button_render,
          }),
          b('cr:3482') != null ? k.jsx(b('cr:3482'), {}) : null,
          k.jsx(c('StoriesCreateCTALink.react'), { dataRef: a }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function n() {
      c('useStoriesCreateReducer')(c('StoriesCreateTextOverlaysReducer'));
      var a = l(c('StoriesCreateViewStateDispatcherContext')),
        b = function () {
          window.requestAnimationFrame(function () {
            a({ type: 'text_overlay_create_new' });
          }),
            c('QPLUserFlow').addPoint(
              c('qpl')._(13250512, '1219'),
              'Add text button pressed',
            );
        };
      return k.jsx(c('StoriesCreateFormAddDataButton'), {
        icon: k.jsx(c('TetraIcon.react'), {
          color: 'primary',
          icon: d('fbicon')._(i('486061'), 16),
        }),
        label: h._('__JHASH__32RwbLUu4ba__JHASH__'),
        onPress: b,
      });
    }
    n.displayName = n.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'StoriesCreateBlurredBgReducer',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      switch (b.type) {
        case 'blurredBg_update_bg':
          return babelHelpers['extends']({}, a, {
            blurredBg: { bottomColor: b.bottomColor, topColor: b.topColor },
          });
      }
      return a;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'StoriesCreateDominantColorBg.react',
  [
    'StoriesCreateBlurredBgReducer',
    'StoriesCreateViewStateDispatcherContext',
    'StoriesEnums',
    'StoriesGradientBackground.react',
    'react',
    'useStoriesCreateReducer',
    'useStoriesDominantColorPicker',
    'withStoriesCreateViewStatePart',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext,
      j = { blue: 0, clusterSize: 0, green: 0, red: 0 };
    function a(a) {
      var b = a.displayedURI,
        e = a.frameWidth;
      a = a.rounded;
      c('useStoriesCreateReducer')(c('StoriesCreateBlurredBgReducer'));
      var f = i(c('StoriesCreateViewStateDispatcherContext')),
        g = c('useStoriesDominantColorPicker')({ imageURL: b });
      if (b == null)
        return h.jsx('div', {
          className:
            'x5yr21d x6ikm8r x10wlt62 x10l6tqk xh8yej3' +
            (a ? ' x1lq5wgf xgqcy7u x30kzoy x9jhf4c' : ''),
          style: { width: e },
          children: h.jsx(c('StoriesGradientBackground.react'), {
            direction: d('StoriesEnums').GRADIENT_DIRECTION.TOP_BOTTOM,
            from: 'rgb(' + j.red + ', ' + j.green + ',' + j.blue,
            to: 'rgb(' + j.red + ', ' + j.green + ',' + j.blue,
          }),
        });
      f({
        bottomColor: g.bottomColor,
        topColor: g.topColor,
        type: 'blurredBg_update_bg',
      });
      return h.jsx('div', {
        className: 'x5yr21d x6ikm8r x10wlt62 x10l6tqk xh8yej3',
        style: { width: e },
        children: h.jsx(c('StoriesGradientBackground.react'), {
          direction: d('StoriesEnums').GRADIENT_DIRECTION.TOP_BOTTOM,
          from: g.topColor,
          to: g.bottomColor,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = c('withStoriesCreateViewStatePart')(a, function (a) {
      return {
        displayedURI: (a = a.photoData) == null ? void 0 : a.displayedURI,
      };
    });
    g['default'] = b;
  },
  98,
);
__d(
  'StoriesCreatePreviewCTA.react',
  ['StoriesCTAButton.react', 'StoriesCTAButtonLabels', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      a = a.ctaType;
      return a == null
        ? null
        : h.jsxs('div', {
            className: 'x1ey2m1c x78zum5 xl56j7k xx6bls6 x10l6tqk xh8yej3',
            children: [
              h.jsx('div', {
                className: 'xzgd2jw x1ey2m1c xds687c x10l6tqk x17qophe xcrr8yc',
              }),
              h.jsx(
                c('StoriesCTAButton.react'),
                { title: c('StoriesCTAButtonLabels')[a] },
                a,
              ),
            ],
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'StoriesCreateTextOverlaysRoot.entrypoint',
  ['JSResourceForInteraction', 'StoriesCreateTextOverlaysRootQuery$Parameters'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function () {
        return {
          queries: {
            rootQueryReference: {
              parameters: b('StoriesCreateTextOverlaysRootQuery$Parameters'),
              variables: {},
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'StoriesCreateTextOverlaysRoot.react',
      ).__setRef('StoriesCreateTextOverlaysRoot.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
__d(
  'StoriesCreateTextOverlayEntrypointContainer.react',
  [
    'CometPlaceholder.react',
    'StoriesCreateTextOverlaysRoot.entrypoint',
    'react',
    'react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react',
    'useCometRelayEntrypointContextualEnvironmentProvider',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {};
    function a(a) {
      a = a.textOverlays;
      var b = c('useCometRelayEntrypointContextualEnvironmentProvider')();
      a = a != null && a.overlays.length > 0;
      if (a !== !0) return null;
      return a
        ? h.jsx(c('CometPlaceholder.react'), {
            fallback: null,
            children: h.jsx(
              c(
                'react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react',
              ),
              {
                entryPoint: c('StoriesCreateTextOverlaysRoot.entrypoint'),
                entryPointParams: i,
                environmentProvider: b,
                props: i,
              },
            ),
          })
        : null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'StoriesCreatePhotoRotateButton.react',
  [
    'fbt',
    'ix',
    'StoriesCreateViewStateDispatcherContext',
    'TetraButton.react',
    'fbicon',
    'react',
    'withStoriesCreateViewStatePart',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react'),
      k = d('react').useContext;
    function a(a) {
      var b = a.rotation,
        e = k(c('StoriesCreateViewStateDispatcherContext'));
      return j.jsx('div', {
        className: 'x1i64zmx',
        children: j.jsx(c('TetraButton.react'), {
          'aria-label':
            b > 0
              ? h._('__JHASH__E2EyxFUMMwe__JHASH__', [h._plural(b, 'number')])
              : void 0,
          icon: d('fbicon')._(i('1295657'), 16),
          label: h._('__JHASH__RJhnho3Xxdz__JHASH__'),
          onPress: function () {
            e({ type: 'photo_update_rotation', value: (b + 90) % 360 });
          },
          type: 'secondary',
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = c('withStoriesCreateViewStatePart')(a, function (a) {
      return {
        rotation:
          (a = (a = a.photoData) == null ? void 0 : a.rotation) != null ? a : 0,
      };
    });
    g['default'] = b;
  },
  98,
);
__d(
  'StoriesCreatePhotoFooterControls.react',
  [
    'fbt',
    'ix',
    'CometPressable.react',
    'CometSlider.react',
    'StoriesCreatePhotoRotateButton.react',
    'StoriesCreateViewStateDispatcherContext',
    'TetraIcon.react',
    'fbicon',
    'react',
    'withStoriesCreateViewStatePart',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react');
    b = d('react');
    var k = b.useContext,
      l = b.useRef;
    function a(a) {
      var b = a.frameWidth,
        e = a.maxScale,
        f = a.minScale,
        g = a.scale,
        m = k(c('StoriesCreateViewStateDispatcherContext'));
      a = d('fbicon')._(i('531490'), 16);
      var n = d('fbicon')._(i('483768'), 16);
      b = Math.floor(0.8 * b);
      var o = l(null),
        p = function (a) {
          m({ type: 'photo_update_scale', value: a });
        },
        q = function (a) {
          p(Math.min(Math.max(a, f), e));
        },
        r = function (a) {
          window.clearInterval(o.current);
          var b = g + a;
          o.current = window.setInterval(function () {
            (b += a), q(b);
          }, 150);
        },
        s = function (a) {
          window.clearInterval(o.current);
          a = g + a;
          q(a);
        };
      return j.jsxs('div', {
        className: 'x6s0dn4 x78zum5',
        children: [
          j.jsx('div', {
            className: 'x1y1aw1k x1sxyh0 xwib8y2 xurb0ha',
            children: j.jsx(c('CometPressable.react'), {
              'aria-label': h._('__JHASH__c7IJNMItXRb__JHASH__'),
              disabled: g === f,
              onPress: function () {
                s(-0.1);
              },
              onPressIn: function () {
                r(-0.1);
              },
              onPressOut: function () {
                window.clearInterval(o.current);
              },
              children: j.jsx(c('TetraIcon.react'), {
                color: 'white',
                icon: a,
              }),
            }),
          }),
          j.jsx('div', {
            className: 'xh8yej3',
            style: { width: b + 'px' },
            children: j.jsx(c('CometSlider.react'), {
              label: h._('__JHASH__JskfVjZ1UK1__JHASH__'),
              max: e,
              min: f,
              onChange: function (a) {
                p(a);
              },
              step: 0.01,
              value: g,
            }),
          }),
          j.jsx('div', {
            className: 'x1y1aw1k x1sxyh0 xwib8y2 xurb0ha',
            children: j.jsx(c('CometPressable.react'), {
              'aria-label': h._('__JHASH__859S0VDpLu___JHASH__'),
              disabled: g === e,
              onPress: function () {
                s(0.1);
              },
              onPressIn: function () {
                r(0.1);
              },
              onPressOut: function () {
                window.clearInterval(o.current);
              },
              children: j.jsx(c('TetraIcon.react'), {
                color: 'white',
                icon: n,
              }),
            }),
          }),
          j.jsx(c('StoriesCreatePhotoRotateButton.react'), {}),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = c('withStoriesCreateViewStatePart')(a, function (a) {
      return {
        scale:
          (a = (a = a.photoData) == null ? void 0 : a.scale) != null ? a : 1,
      };
    });
    g['default'] = e;
  },
  98,
);
__d(
  'StoriesCreatePhotoFooterInstructions.react',
  ['fbt', 'TetraText.react', 'react'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a() {
      return i.jsx('div', {
        className: 'x6s0dn4 x78zum5',
        children: i.jsx(c('TetraText.react'), {
          color: 'primaryOnMedia',
          type: 'body2',
          children: h._('__JHASH__dv54BnGxVvO__JHASH__'),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'StoriesCreatePhotoPreviewFallback.react',
  ['CollageItemFallback.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.filename,
        d = a.frameWidth;
      a = a.percentComplete;
      return h.jsx('div', {
        className: 'x1ey2m1c x10l6tqk xtzzx4i x13vifvy xuuh30',
        style: { width: d + 'px' },
        children: h.jsx(c('CollageItemFallback.react'), {
          fileType: 'PHOTO',
          filename: b,
          percentComplete: a,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'StoriesCreateUploadingOrUploadedPhotoItem.react',
  ['BaseImage.react', 'StoriesCreatePhotoPreviewFallback.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useState;
    function a(a, b) {
      var d = a.attachment,
        e = a.frameWidth,
        f = a.onError,
        g = a.onLoad;
      a = a.xstyle;
      var j = i(!1),
        k = j[0],
        l = j[1],
        m = d.fileObjectURL;
      if (!k && m != null)
        if (d.useCDNPreview) l(!0);
        else
          return h.jsx(c('BaseImage.react'), {
            draggable: !1,
            onError: function () {
              l(!0), f && f(m);
            },
            onLoad: function () {
              g && g(m);
            },
            ref: b,
            src: m,
            xstyle: a,
          });
      if (k && d.fileType === 'PHOTO' && d.state === 'UPLOADED') {
        var n = d.uploadedImageURL;
        if (n != null)
          return h.jsx(c('BaseImage.react'), {
            draggable: !1,
            onLoad: function () {
              g && g(n);
            },
            ref: b,
            src: n,
            xstyle: a,
          });
      }
      return h.jsx(c('StoriesCreatePhotoPreviewFallback.react'), {
        filename: d.file.name,
        frameWidth: e,
        percentComplete: d.state === 'UPLOADING' ? d.percentComplete : void 0,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
__d(
  'StoriesCreatePhotoPreviewItem.react',
  [
    'StoriesCreatePhotoPreviewFallback.react',
    'StoriesCreateUploadingOrUploadedPhotoItem.react',
    'TetraText.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a, b) {
      var d = a.attachment,
        e = a.frameWidth,
        f = a.onError,
        g = a.onLoad;
      a = a.xstyle;
      switch (d.state) {
        case 'NEW':
        case 'CLIENT_PROCESSING':
        case 'CLIENT_PROCESSING_COMPLETE':
          return h.jsx(c('StoriesCreatePhotoPreviewFallback.react'), {
            filename: d.file.name,
            frameWidth: e,
          });
        case 'QUEUED':
        case 'UPLOADING':
        case 'UPLOADED':
          if (d.file != null)
            return h.jsx(c('StoriesCreateUploadingOrUploadedPhotoItem.react'), {
              attachment: d,
              frameWidth: e,
              onError: f,
              onLoad: g,
              ref: b,
              xstyle: a,
            });
          else return null;
        case 'FAILED':
          return h.jsxs(h.Fragment, {
            children: [
              d.file.name,
              d.error != null
                ? h.jsxs(h.Fragment, {
                    children: [
                      h.jsx('br', {}),
                      h.jsx(c('TetraText.react'), {
                        color: 'negative',
                        type: 'body4',
                        children: d.error,
                      }),
                    ],
                  })
                : null,
            ],
          });
      }
      return null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
__d(
  'useStoriesCreatePhotoPreviewBounds',
  ['StoriesCreateViewStateDispatcherContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useContext,
      i = b.useEffect;
    function a(a, b, d) {
      var e = h(c('StoriesCreateViewStateDispatcherContext'));
      i(
        function () {
          if (b == null || d == null) return;
          var c = { x: 0, y: 0 };
          a % 180 === 0
            ? (a === 0
                ? (c = {
                    x: (b.left - d.left) / d.width,
                    y: (b.top - d.top) / d.height,
                  })
                : a === 180 &&
                  (c = {
                    x: (d.right - b.right) / d.width,
                    y: (d.bottom - b.bottom) / d.height,
                  }),
              e({
                bounds: {
                  height: b.height / d.height,
                  width: b.width / d.width,
                  x: c.x,
                  y: c.y,
                },
                type: 'photo_update_bounds',
              }))
            : (a === 90
                ? (c = {
                    x: (b.top - d.top) / d.height,
                    y: (d.right - b.right) / d.width,
                  })
                : a === 270 &&
                  (c = {
                    x: (d.bottom - b.bottom) / d.height,
                    y: (b.left - d.left) / d.width,
                  }),
              e({
                bounds: {
                  height: b.width / d.width,
                  width: b.height / d.height,
                  x: c.x,
                  y: c.y,
                },
                type: 'photo_update_bounds',
              }));
        },
        [e, b, d, a],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useStoriesCreatePhotoPreviewInput',
  ['react', 'useGlobalEventListener'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useCallback;
    function i(a, b, c, d, e) {
      if (!b) return;
      b = a.target;
      b instanceof Node &&
        d instanceof Node &&
        c instanceof Node &&
        !d.contains(b) &&
        !c.contains(b) &&
        e(!1);
    }
    function a(a, b, d, e) {
      var f = h(
          function (c) {
            i(c, a, e.current, d.current, b), c.preventDefault();
          },
          [d, e, a, b],
        ),
        g = h(
          function (c) {
            i(c, a, e.current, d.current, b), c.preventDefault();
          },
          [d, e, a, b],
        );
      c('useGlobalEventListener')('focus', f, { capture: !0 });
      c('useGlobalEventListener')('click', g, { capture: !0 });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'StoriesCreatePhotoPreview.react',
  [
    'fbt',
    'CometComponentWithKeyCommands.react',
    'CometPlaceholder.react',
    'CometPressable.react',
    'JSResourceForInteraction',
    'Locale',
    'QPLUserFlow',
    'RelayHooks',
    'StoriesCreateBackground.react',
    'StoriesCreateConstants',
    'StoriesCreateDominantColorBg.react',
    'StoriesCreatePhotoFooterControls.react',
    'StoriesCreatePhotoFooterInstructions.react',
    'StoriesCreatePhotoPreviewFrame.react',
    'StoriesCreatePhotoPreviewFrameContext',
    'StoriesCreatePhotoPreviewItem.react',
    'StoriesCreatePhotoPreview_data.graphql',
    'StoriesCreatePreviewCTA.react',
    'StoriesCreateTextOverlayEntrypointContainer.react',
    'StoriesCreateViewStateDispatcherContext',
    'lazyLoadComponent',
    'qpl',
    'react',
    'useMergeRefs',
    'useResizeObserver',
    'useStoriesCreateObjectMove',
    'useStoriesCreatePhotoFrame',
    'useStoriesCreatePhotoPreviewBounds',
    'useStoriesCreatePhotoPreviewInput',
    'useThrottled',
    'withStoriesCreateViewStatePart',
  ],
  function (a, b, c, d, e, f, g, aa) {
    'use strict';
    var h,
      i = d('react');
    e = d('react');
    var useCallback = e.useCallback,
      useContext = e.useContext,
      useEffect = e.useEffect,
      useMemo = e.useMemo,
      useRef = e.useRef,
      useState = e.useState,
      n = {
        border: {
          height: 'x5yr21d',
          paddingTop: 'x1snv3wq',
          paddingEnd: 'xf8nmdv',
          paddingBottom: 'x18ooxip',
          paddingStart: 'xyme5hm',
          pointerEvents: 'x47corl',
          position: 'x10l6tqk',
          start: 'xtzzx4i',
          transform: 'xuuh30',
          width: 'xh8yej3',
          $$css: !0,
        },
        borderRTL: { transform: 'xitnhlw', $$css: !0 },
        footer: {
          backgroundColor: 'x15cqagf',
          bottom: 'x1ey2m1c',
          display: 'x78zum5',
          justifyContent: 'xl56j7k',
          position: 'x10l6tqk',
          width: 'xh8yej3',
          zIndex: 'x18ivbjn',
          $$css: !0,
        },
        image: {
          height: 'x5yr21d',
          position: 'x10l6tqk',
          start: 'xtzzx4i',
          transform: 'xuuh30',
          $$css: !0,
        },
        imageContainer: {
          height: 'x5yr21d',
          position: 'x10l6tqk',
          start: 'xtzzx4i',
          top: 'xwa60dl',
          $$css: !0,
        },
        imageRTL: {
          height: 'x5yr21d',
          position: 'x10l6tqk',
          start: 'xtzzx4i',
          transform: 'xitnhlw',
          $$css: !0,
        },
        mediaContainer: {
          alignItems: 'x6s0dn4',
          borderTopStartRadius: 'x168nmei',
          borderTopEndRadius: 'x13lgxp2',
          borderBottomEndRadius: 'x5pf9jr',
          borderBottomStartRadius: 'xo71vjh',
          display: 'x78zum5',
          justifyContent: 'xl56j7k',
          position: 'x10l6tqk',
          width: 'xh8yej3',
          $$css: !0,
        },
        mediaContainerClipped: {
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          $$css: !0,
        },
        mediaContainerOverlays: { position: 'x10l6tqk', $$css: !0 },
        mediaContainerOverlaysIgnoreTouch: {
          pointerEvents: 'x47corl',
          $$css: !0,
        },
        overlay: {
          height: 'x5yr21d',
          position: 'x10l6tqk',
          width: 'xh8yej3',
          $$css: !0,
        },
        pressable: { height: 'x5yr21d', position: 'x10l6tqk', $$css: !0 },
        pressableContainer: {
          height: 'x5yr21d',
          position: 'x10l6tqk',
          $$css: !0,
        },
        root: {
          alignItems: 'x6s0dn4',
          backgroundColor: 'x15cqagf',
          bottom: 'x1ey2m1c',
          display: 'x78zum5',
          end: 'xds687c',
          justifyContent: 'xl56j7k',
          pointerEvents: 'x71s49j',
          position: 'x10l6tqk',
          start: 'x17qophe',
          top: 'x13vifvy',
          $$css: !0,
        },
        rotationCursor: { cursor: 'x1ed109x', $$css: !0 },
        textOverlayEditingMode: {
          backgroundColor: 'x18l40ae',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          $$css: !0,
        },
      },
      da = 150,
      ea = h !== void 0 ? h : (h = b('StoriesCreatePhotoPreview_data.graphql'));
    function a(a) {
      var b = a.composerSessionID,
        e = a.ctaLinkData,
        f = a.dataRef,
        g = a.displayedURI,
        h = a.isObjectRotating,
        o = a.mediaAttachment,
        p = a.overlayRef,
        q = a.rotation,
        r = a.scale,
        s = a.stickerData;
      a = a.textOverlays;
      var t = useState(!1),
        u = t[0],
        v = t[1],
        w = useRef(null),
        x = useRef(null);
      t = useState(null);
      var y = t[0],
        z = t[1];
      t = useState(null);
      var A = t[0],
        B = t[1],
        C = useRef([]),
        D = useRef(null);
      t = useRef(null);
      var E = useRef(null),
        F = useRef(2),
        G = useRef(null),
        H = useRef(0.2),
        I = null;
      f = d('RelayHooks').useFragment(ea, f);
      f = Boolean(f == null ? void 0 : f.stories_create_sticker_button_render);
      var J =
          Boolean(s == null ? void 0 : s.shouldShowProductTypeahead) ||
          Boolean(s == null ? void 0 : s.productSticker),
        K = Boolean(s == null ? void 0 : s.musicSticker);
      (K ||
        (f &&
          (((K = s == null ? void 0 : s.stickers.length) != null ? K : 0) > 0 ||
            J))) &&
        (I = c('lazyLoadComponent')(
          c('JSResourceForInteraction')(
            'StoriesCreateStickersRoot.react',
          ).__setRef('StoriesCreatePhotoPreview.react'),
        ));
      f = useCallback(function (a, b) {
        z(b.getBoundingClientRect());
      }, []);
      s = c('useResizeObserver')(f);
      K = c('useMergeRefs')(w, s);
      J = useCallback(function (a, b) {
        B(b.getBoundingClientRect());
      }, []);
      f = useMemo(
        function () {
          return { overlayRect: A };
        },
        [A],
      );
      s = c('useResizeObserver')(J);
      J = c('useMergeRefs')(x, s);
      s = g != null;
      var L = useContext(c('StoriesCreateViewStateDispatcherContext')),
        M = (a == null ? void 0 : a.editingID) != null,
        N = d('StoriesCreateConstants').PHOTO_PREVIEW_DIMENSIONS.FOOTER_HEIGHT,
        O = d('StoriesCreateConstants').PHOTO_PREVIEW_DIMENSIONS.HEADER_HEIGHT,
        P = c('useStoriesCreatePhotoFrame')(),
        Q = P.border,
        R = P.frameWidth;
      P = useCallback(
        function () {
          if (p == null || (p == null ? void 0 : p.current) == null) return;
          var a = p == null ? void 0 : p.current;
          a instanceof HTMLElement && B(a.getBoundingClientRect());
        },
        [p],
      );
      var S = c('useThrottled')(P, 100);
      useEffect(
        function () {
          window.addEventListener('resize', S);
          return function () {
            window.removeEventListener('resize', S);
          };
        },
        [S],
      );
      useEffect(
        function () {
          c('QPLUserFlow').addPoint(
            c('qpl')._(13250512, '1219'),
            'Image story preview',
          );
        },
        [b],
      );
      c('useStoriesCreatePhotoPreviewInput')(u, v, t, E);
      P = c('useStoriesCreateObjectMove')({
        autoAdjust: !0,
        buffer: { bottom: 10, left: 10, right: 10, top: 10 },
        overlayRect: A,
        targetRect: y,
      });
      var T = P.dx,
        U = P.dy;
      b = P.keyCommands;
      var fa = P.onBlur,
        ga = P.onPressDown;
      useEffect(
        function () {
          L({ dx: T, dy: U, type: 'photo_update_offset' });
        },
        [L, T, U],
      );
      var V = useCallback(
        function (a) {
          L({ type: 'photo_update_scale', value: a });
        },
        [L],
      );
      useEffect(
        function () {
          var a;
          z((a = w.current) == null ? void 0 : a.getBoundingClientRect());
          B((a = x.current) == null ? void 0 : a.getBoundingClientRect());
        },
        [T, U, q, r],
      );
      c('useStoriesCreatePhotoPreviewBounds')(q, y, A);
      var W = d('Locale').isRTL();
      useEffect(
        function () {
          var a = G.current;
          a != null && (W || (a.scrollLeft = 0), (a.scrollTop = 0));
        },
        [u, W],
      );
      P = useCallback(
        function (a) {
          L({ type: 'photo_update_uri', value: null }),
            (D.current = null),
            C.current.push(a);
        },
        [L],
      );
      y = useCallback(
        function (a) {
          if (C.current.includes(a)) return;
          L({ type: 'photo_update_uri', value: a });
        },
        [L],
      );
      useEffect(
        function () {
          var a = w.current;
          if (
            g == null ||
            C.current.includes(g) ||
            a == null ||
            D.current != null ||
            R === 0
          )
            return;
          a = a.getBoundingClientRect();
          a.width > a.height && V(R / a.width);
          R / a.width < 0.2 &&
            ((H.current = (R / a.width) * 0.8),
            (F.current = (R / a.width) * 4));
          D.current = !0;
        },
        [g, R, V],
      );
      if (o == null || o.fileType !== 'PHOTO') return null;
      var ha = W ? '50%' : '-50%',
        X = !u,
        Y = X ? 'solid rgba(24,25,26, 1.0)' : 'solid rgba(24,25,26, 0.5)',
        Z = { height: 'calc(100% - ' + (N + O) + 'px', top: O + 'px' },
        $ = null;
      u
        ? ($ = i.jsx(c('StoriesCreatePhotoFooterControls.react'), {
            frameWidth: R,
            maxScale: F.current,
            minScale: H.current,
          }))
        : g != null &&
          !M &&
          ($ = i.jsx(c('StoriesCreatePhotoFooterInstructions.react'), {}));
      return i.jsx('div', {
        className:
          'x6s0dn4 x15cqagf x1ey2m1c x78zum5 xds687c xl56j7k x71s49j x10l6tqk x17qophe x13vifvy',
        children: i.jsxs(c('StoriesCreatePhotoPreviewFrameContext').Provider, {
          value: f,
          children: [
            i.jsxs('div', {
              className:
                'x6s0dn4 x78zum5 xl56j7k x10l6tqk xh8yej3' +
                (X
                  ? ' x1lq5wgf xgqcy7u x30kzoy x9jhf4c x6ikm8r x10wlt62'
                  : ' x168nmei x13lgxp2 x5pf9jr xo71vjh'),
              ref: G,
              style: babelHelpers['extends']({}, Z, {
                width: X ? R + 'px' : void 0,
              }),
              children: [
                i.jsx(c('StoriesCreateBackground.react'), {}),
                i.jsx(c('StoriesCreateDominantColorBg.react'), {
                  frameWidth: R,
                  rounded: X,
                }),
                i.jsx(c('CometComponentWithKeyCommands.react'), {
                  commandConfigs: b,
                  xstyle: n.imageContainer,
                  children: i.jsx('div', {
                    className: 'x5yr21d x10l6tqk',
                    onFocus: function (a) {
                      a.preventDefault(), a.target.focus({ preventScroll: !0 });
                    },
                    onMouseDown: function (a) {
                      a.preventDefault();
                    },
                    onWheel: function (a) {
                      u &&
                        V(
                          Math.min(
                            Math.max(r - a.deltaY / da, H.current),
                            F.current,
                          ),
                        );
                    },
                    style: {
                      transform:
                        'translate(calc(' +
                        ha +
                        ' + ' +
                        T +
                        'px), calc(-50% + ' +
                        U +
                        'px)) rotate(' +
                        q +
                        'deg) scale(' +
                        r +
                        ')',
                    },
                    children: i.jsx(c('CometPressable.react'), {
                      'aria-label': aa._('__JHASH__T6Lkg0pTrbK__JHASH__'),
                      disabled: !s,
                      onFocusIn: function (a) {
                        a.target.focus({ preventScroll: !0 }), v(!0);
                      },
                      onFocusOut: function () {
                        fa();
                      },
                      onPressIn: function (a) {
                        v(!0), ga(a);
                      },
                      overlayDisabled: !0,
                      ref: E,
                      xstyle: [n.pressable, h ? n.rotationCursor : {}],
                      children: i.jsx(
                        c('StoriesCreatePhotoPreviewItem.react'),
                        {
                          attachment: o,
                          frameWidth: R,
                          onError: P,
                          onLoad: y,
                          ref: K,
                          xstyle: W ? n.imageRTL : n.image,
                        },
                      ),
                    }),
                  }),
                }),
                i.jsx(c('StoriesCreatePhotoPreviewFrame.react'), {
                  frameWidth: R,
                  ref: J,
                  rounded: X,
                }),
                i.jsx(c('StoriesCreatePreviewCTA.react'), {
                  ctaType: e.ctaType,
                }),
              ],
            }),
            i.jsx('div', {
              className:
                'x15cqagf x1ey2m1c x78zum5 xl56j7k x10l6tqk xh8yej3 x18ivbjn',
              ref: t,
              style: { height: N + 'px' },
              children: $,
            }),
            i.jsxs('div', {
              className:
                'x10l6tqk' +
                ((M ? ' x18l40ae x6ikm8r x10wlt62' : '' + (M ? '' : '')) +
                  (M ? '' : ' x47corl')),
              onMouseDown: function (a) {
                if (!M) return;
                a.preventDefault();
                a.stopPropagation();
              },
              style: babelHelpers['extends']({}, Z, { width: R + 'px' }),
              children: [
                p != null &&
                  i.jsxs('div', {
                    className: 'x5yr21d x10l6tqk xh8yej3',
                    ref: p,
                    children: [
                      i.jsx(
                        c('StoriesCreateTextOverlayEntrypointContainer.react'),
                        { textOverlays: a },
                      ),
                      I != null &&
                        i.jsx(c('CometPlaceholder.react'), {
                          fallback: null,
                          children: i.jsx(I, {}),
                        }),
                    ],
                  }),
                i.jsx('div', {
                  className:
                    'x5yr21d x1snv3wq xf8nmdv x18ooxip xyme5hm x47corl x10l6tqk xtzzx4i xh8yej3' +
                    (W ? ' xitnhlw' : ' xuuh30'),
                  style: {
                    borderLeft: Q + 'px ' + Y,
                    borderRight: Q + 'px ' + Y,
                    borderTop: O + 'px ' + Y,
                    top: '-' + O + 'px',
                  },
                }),
              ],
            }),
          ],
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = c('withStoriesCreateViewStatePart')(a, function (a) {
      var b;
      return {
        composerSessionID: a.composerSessionID,
        ctaLinkData: a.ctaLinkData,
        displayedURI: (b = a.photoData) == null ? void 0 : b.displayedURI,
        isObjectRotating: a.isObjectRotating,
        mediaAttachment: (b = a.mediaAttachments) == null ? void 0 : b[0],
        overlayRef: a == null ? void 0 : a.overlayRef,
        rotation:
          (b = (b = a.photoData) == null ? void 0 : b.rotation) != null ? b : 0,
        scale:
          (b = (b = a.photoData) == null ? void 0 : b.scale) != null ? b : 1,
        stickerData: a.stickerData,
        textOverlays: a.textOverlays,
      };
    });
    g['default'] = e;
  },
  98,
);
