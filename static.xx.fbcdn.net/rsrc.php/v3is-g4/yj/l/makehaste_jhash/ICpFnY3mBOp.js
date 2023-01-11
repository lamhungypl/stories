/*FB_PKG_DELIM*/

__d(
  'EntPhotoCollageItemContainerQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '4936854539735004';
  },
  null,
);
__d(
  'EntPhotoCollageItemContainerQuery.graphql',
  ['EntPhotoCollageItemContainerQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = { defaultValue: null, kind: 'LocalArgument', name: 'id' },
        c = { defaultValue: null, kind: 'LocalArgument', name: 'scale' },
        d = [{ kind: 'Variable', name: 'id', variableName: 'id' }];
      return {
        fragment: {
          argumentDefinitions: [a, c],
          kind: 'Fragment',
          metadata: null,
          name: 'EntPhotoCollageItemContainerQuery',
          selections: [
            {
              alias: null,
              args: d,
              concreteType: null,
              kind: 'LinkedField',
              name: 'node',
              plural: !1,
              selections: [
                {
                  kind: 'InlineFragment',
                  selections: [
                    {
                      args: null,
                      kind: 'FragmentSpread',
                      name: 'EntPhotoCollageItem_media',
                    },
                  ],
                  type: 'Photo',
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: 'Query',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: [c, a],
          kind: 'Operation',
          name: 'EntPhotoCollageItemContainerQuery',
          selections: [
            {
              alias: null,
              args: d,
              concreteType: null,
              kind: 'LinkedField',
              name: 'node',
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
                      alias: null,
                      args: [
                        {
                          kind: 'Literal',
                          name: 'context',
                          value: 'comet_media_viewer',
                        },
                        { kind: 'Literal', name: 'height', value: 1e6 },
                        {
                          kind: 'Variable',
                          name: 'scale',
                          variableName: 'scale',
                        },
                        { kind: 'Literal', name: 'width', value: 1e6 },
                      ],
                      concreteType: 'Image',
                      kind: 'LinkedField',
                      name: 'image',
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'height',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'uri',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'width',
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: 'Vect2',
                      kind: 'LinkedField',
                      name: 'focus',
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'x',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'y',
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  type: 'Photo',
                  abstractKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'id',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b('EntPhotoCollageItemContainerQuery_facebookRelayOperation'),
          metadata: {},
          name: 'EntPhotoCollageItemContainerQuery',
          operationKind: 'query',
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'EntPhotoCollageItem_media.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [{ kind: 'RootArgument', name: 'scale' }],
      kind: 'Fragment',
      metadata: null,
      name: 'EntPhotoCollageItem_media',
      selections: [
        {
          alias: null,
          args: [
            { kind: 'Literal', name: 'context', value: 'comet_media_viewer' },
            { kind: 'Literal', name: 'height', value: 1e6 },
            { kind: 'Variable', name: 'scale', variableName: 'scale' },
            { kind: 'Literal', name: 'width', value: 1e6 },
          ],
          concreteType: 'Image',
          kind: 'LinkedField',
          name: 'image',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'height',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'uri',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'width',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: 'Vect2',
          kind: 'LinkedField',
          name: 'focus',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'x',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'y',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: 'Photo',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'useComposerVideoUploaderConfigQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5083329358376602';
  },
  null,
);
__d(
  'useComposerVideoUploaderConfigQuery.graphql',
  ['useComposerVideoUploaderConfigQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [
          { defaultValue: null, kind: 'LocalArgument', name: 'actorID' },
          { defaultValue: null, kind: 'LocalArgument', name: 'entryPoint' },
          { defaultValue: null, kind: 'LocalArgument', name: 'targetID' },
        ],
        c = [
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
                args: [
                  {
                    kind: 'Variable',
                    name: 'actor_id',
                    variableName: 'actorID',
                  },
                  {
                    kind: 'Variable',
                    name: 'entry_point',
                    variableName: 'entryPoint',
                  },
                  {
                    kind: 'Variable',
                    name: 'target_id',
                    variableName: 'targetID',
                  },
                ],
                kind: 'ScalarField',
                name: 'comet_composer_video_uploader_config',
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: 'Fragment',
          metadata: null,
          name: 'useComposerVideoUploaderConfigQuery',
          selections: c,
          type: 'Query',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: a,
          kind: 'Operation',
          name: 'useComposerVideoUploaderConfigQuery',
          selections: c,
        },
        params: {
          id: b('useComposerVideoUploaderConfigQuery_facebookRelayOperation'),
          metadata: {},
          name: 'useComposerVideoUploaderConfigQuery',
          operationKind: 'query',
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'Comet360PhotoTypes',
  ['$InternalEnum'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('$InternalEnum').Mirrored([
      'Cylindrical',
      'Equirectangular',
      'TiledCubemap',
    ]);
    f.Comet360PhotoProjection = a;
  },
  66,
);
__d(
  'CometSphericalPhotoUtils',
  ['Comet360PhotoTypes'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      a = a.getPhotoSphereMetadata();
      return a == null ? null : h(a);
    }
    function h(a) {
      var b =
          Number(a.CroppedAreaImageWidthPixels) /
          Number(a.CroppedAreaImageHeightPixels),
        c =
          (Number(a.CroppedAreaImageWidthPixels) /
            Number(a.FullPanoWidthPixels)) *
          Math.PI *
          2,
        e =
          (Number(a.CroppedAreaImageHeightPixels) /
            Number(a.FullPanoHeightPixels)) *
          Math.PI *
          2,
        f = Number(a.InitialViewHeadingDegrees),
        g = Number(a.InitialViewPitchDegrees),
        h = Number(a.InitialViewVerticalFOVDegrees),
        j =
          Number(a.CroppedAreaImageHeightPixels) ===
          Number(a.CroppedAreaImageWidthPixels) * 2
            ? d('Comet360PhotoTypes').Comet360PhotoProjection.Equirectangular
            : d('Comet360PhotoTypes').Comet360PhotoProjection.Cylindrical;
      switch (a.ProjectionType) {
        case 'equirectangular':
          j = d('Comet360PhotoTypes').Comet360PhotoProjection.Equirectangular;
          break;
        case 'cylindrical':
          j = d('Comet360PhotoTypes').Comet360PhotoProjection.Cylindrical;
          break;
      }
      return {
        aspectRatio: b,
        horizontalFov: c,
        projectionType: j,
        startingView: {
          heading: i(f),
          horizontalFov: null,
          pitch: i(g),
          verticalFov: h !== 0 ? i(h) : null,
        },
        verticalFov: e,
      };
    }
    function i(a) {
      return (a / 180) * Math.PI;
    }
    g.createEncodingFromSphericalImage = a;
  },
  98,
);
__d(
  'genArrayBufferFromFile',
  ['Promise'],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      return 'arrayBuffer' in a && typeof a.arrayBuffer === 'function'
        ? a.arrayBuffer()
        : new (b('Promise'))(function (b, c) {
            var d = new FileReader();
            d.onload = function () {
              var a = d.result;
              a instanceof ArrayBuffer ? b(a) : c();
            };
            d.onerror = function () {
              c(d.error);
            };
            d.readAsArrayBuffer(a);
          });
    }
    f['default'] = a;
  },
  66,
);
__d(
  'EndianAwareDataView',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a, b, c) {
        c === void 0 && (c = 0), (this.$2 = new DataView(a, c)), (this.$1 = b);
      }
      var b = a.prototype;
      b.getByteLength = function () {
        return this.$2.byteLength;
      };
      b.getU8 = function (a) {
        return this.$2.getUint8(a);
      };
      b.getI8 = function (a) {
        return this.$2.getInt8(a);
      };
      b.getU16 = function (a) {
        return this.$2.getUint16(a, this.$1);
      };
      b.getI16 = function (a) {
        return this.$2.getInt16(a, this.$1);
      };
      b.getU32 = function (a) {
        return this.$2.getUint32(a, this.$1);
      };
      b.getI32 = function (a) {
        return this.$2.getInt32(a, this.$1);
      };
      b.getF32 = function (a) {
        return this.$2.getFloat32(a, this.$1);
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'EndianAwareDataReader',
  ['EndianAwareDataView'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b) {
        (this.$2 = new (c('EndianAwareDataView'))(a, b)), (this.$1 = 0);
      }
      var b = a.prototype;
      b.canReadU8 = function () {
        return this.$1 < this.$2.getByteLength();
      };
      b.canReadU16 = function () {
        return this.$1 < this.$2.getByteLength() - 1;
      };
      b.canReadU32 = function () {
        return this.$1 < this.$2.getByteLength() - 3;
      };
      b.seekTo = function (a) {
        this.$1 = a;
      };
      b.seekRelative = function (a) {
        this.$1 += a;
      };
      b.readU8 = function () {
        var a = this.$2.getU8(this.$1);
        this.$1 += 1;
        return a;
      };
      b.peekU8 = function () {
        return this.$2.getU8(this.$1);
      };
      b.readI8 = function () {
        var a = this.$2.getI8(this.$1);
        this.$1 += 1;
        return a;
      };
      b.peekI8 = function () {
        return this.$2.getI8(this.$1);
      };
      b.readU16 = function () {
        var a = this.$2.getU16(this.$1);
        this.$1 += 2;
        return a;
      };
      b.peekU16 = function () {
        return this.$2.getU16(this.$1);
      };
      b.readI16 = function () {
        var a = this.$2.getI16(this.$1);
        this.$1 += 2;
        return a;
      };
      b.peekI16 = function () {
        return this.$2.getI16(this.$1);
      };
      b.readU32 = function () {
        var a = this.$2.getU32(this.$1);
        this.$1 += 4;
        return a;
      };
      b.peekU32 = function () {
        return this.$2.getU32(this.$1);
      };
      b.readI32 = function () {
        var a = this.$2.getI32(this.$1);
        this.$1 += 4;
        return a;
      };
      b.peekI32 = function () {
        return this.$2.getI32(this.$1);
      };
      b.readF32 = function () {
        var a = this.$2.getF32(this.$1);
        this.$1 += 4;
        return a;
      };
      b.peekF32 = function () {
        return this.$2.getF32(this.$1);
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'parseIFDEntry',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      var b = a.readU16(),
        c = a.readU16(),
        d = a.readU32(),
        e = Object.freeze({ offset: a.peekU32(), type: 'offset' });
      switch (c) {
        case 1:
        case 2:
        case 7:
          if (d < 5) {
            e = { type: 'data', values: [] };
            for (var f = 0; f < d; f++) e.values.push(a.readU8());
          }
          break;
        case 6:
          if (d < 5) {
            e = { type: 'data', values: [] };
            for (f = 0; f < d; f++) e.values.push(a.readI8());
          }
          break;
        case 3:
          if (d < 3) {
            e = { type: 'data', values: [] };
            for (f = 0; f < d; f++) e.values.push(a.readU16());
          }
          break;
        case 8:
          if (d < 3) {
            e = { type: 'data', values: [] };
            for (f = 0; f < d; f++) e.values.push(a.readI16());
          }
          break;
        case 4:
          d < 2 && (e = { type: 'data', values: [a.readU32()] });
          break;
        case 9:
          d < 2 && (e = { type: 'data', values: [a.readI32()] });
          break;
        case 11:
          d < 2 && (e = { type: 'data', values: [a.readF32()] });
          break;
        case 5:
        case 10:
        case 12:
          a.seekRelative(4);
          break;
      }
      return { format: c, tag: b, value: e };
    }
    f['default'] = a;
  },
  66,
);
__d(
  'parseIFDTable',
  ['parseIFDEntry'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = a.readU16(),
        d = [];
      for (var e = 0; e < b; e++) d.push(c('parseIFDEntry')(a));
      b = a.readU32();
      return { entries: d, nextTableOffset: b };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'parseTIFFHeader',
  ['EndianAwareDataReader', 'parseIFDTable'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      b === void 0 && (b = 0);
      var d = new Uint8Array(a, b),
        e = !0;
      if (d[0] === 77 && d[1] === 77) e = !1;
      else if (d[0] !== 73 || d[1] !== 73) return null;
      d = new (c('EndianAwareDataReader'))(a, e);
      d.seekTo(b + 2);
      if (d.readU16() !== 42) return null;
      a = d.readU32();
      d.seekRelative(a - 8);
      e = c('parseIFDTable')(d);
      return [e];
    }
    g['default'] = a;
  },
  98,
);
__d(
  'extractJPEGOrientationData',
  ['genArrayBufferFromFile', 'parseTIFFHeader'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 65496,
      i = 65498,
      j = 1165519206;
    function a(a) {
      return c('genArrayBufferFromFile')(a).then(function (a) {
        var b = new DataView(a);
        if (b.getUint16(0, !1) !== h) return null;
        var d = 2;
        while (d < a.byteLength - 2 && b.getUint16(d) !== i) {
          var e = b.getUint16(d),
            f = e & 65280;
          e = e & 255;
          if (f === 65280)
            if (e === 225) {
              if (b.getUint32(d + 4) !== j || b.getUint16(d + 8) !== 0)
                return null;
              f = c('parseTIFFHeader')(a, d + 10);
              if (f != null) {
                f = f[0];
                for (
                  var f = f.entries,
                    g = Array.isArray(f),
                    k = 0,
                    f = g
                      ? f
                      : f[
                          typeof Symbol === 'function'
                            ? Symbol.iterator
                            : '@@iterator'
                        ]();
                  ;

                ) {
                  var l;
                  if (g) {
                    if (k >= f.length) break;
                    l = f[k++];
                  } else {
                    k = f.next();
                    if (k.done) break;
                    l = k.value;
                  }
                  l = l;
                  if (l.tag === 274) {
                    l = l.value;
                    if (l.type === 'data') {
                      l = l.values[0];
                      if (l == null) return null;
                      return l === 0 ||
                        l === 1 ||
                        l === 2 ||
                        l === 3 ||
                        l === 4 ||
                        l === 5 ||
                        l === 6 ||
                        l === 7 ||
                        l === 8
                        ? l
                        : null;
                    }
                    return null;
                  }
                }
              }
              return null;
            } else if (e !== 0 && (e < 208 || e > 217)) {
              l = b.getUint16(d + 2, !1);
              d += l + 2;
            }
        }
        return null;
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'genDimensionsFromImageFile',
  ['Promise'],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      var c = new Image(),
        d = new (b('Promise'))(function (a, b) {
          (c.onload = function () {
            a({ height: c.height, width: c.width });
          }),
            (c.onerror = function () {
              b();
            });
        });
      a instanceof File ? (c.src = URL.createObjectURL(a)) : (c.src = a);
      return d;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'genDurationAndDimensionsFromVideoFile',
  ['Promise'],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      var c = document.createElement('video'),
        d = new (b('Promise'))(function (a, b) {
          (c.onloadedmetadata = function () {
            a({
              duration: c.duration,
              height: c.videoHeight,
              width: c.videoWidth,
            });
          }),
            (c.onerror = function () {
              b();
            });
        });
      a instanceof File ? (c.src = URL.createObjectURL(a)) : (c.src = a);
      return d;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'genIsHEICFile',
  ['genArrayBufferFromFile'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = [102, 116, 121, 112],
        d = [104, 101, 105, 99],
        e = [104, 101, 105, 120];
      return c('genArrayBufferFromFile')(a).then(function (a) {
        a = new Uint8Array(a);
        var c = a.slice(4, 8).reduce(function (a, c, d) {
          return a && c === b[d];
        }, !0);
        if (!c) return !1;
        c = a.slice(8, 12).reduce(function (a, b, c) {
          return a && b === d[c];
        }, !0);
        if (c) return !0;
        c = a.slice(8, 12).reduce(function (a, b, c) {
          return a && b === e[c];
        }, !0);
        return c ? !0 : !1;
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'genIsNonAnimatedGifFile',
  ['genArrayBufferFromFile'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a, b) {
      return (
        a[b] === 0 &&
        a[b + 1] === 33 &&
        a[b + 2] === 249 &&
        a[b + 3] === 4 &&
        a[b + 8] === 0 &&
        (a[b + 9] === 44 || a[b + 9] === 33)
      );
    }
    function a(a) {
      var b = [71, 73, 70, 56, 55, 97],
        d = [71, 73, 70, 56, 57, 97];
      return c('genArrayBufferFromFile')(a).then(function (a) {
        a = new Uint8Array(a);
        var c = a.slice(0, 6).reduce(function (a, c, d) {
          return a && c === b[d];
        }, !0);
        if (c) return !0;
        c = a.slice(0, 6).reduce(function (a, b, c) {
          return a && b === d[c];
        }, !0);
        if (!c) return !1;
        c = 0;
        for (var e = 6; e + 9 < a.length; ++e) {
          h(a, e) && c++;
          if (c > 1) return !1;
        }
        return !0;
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'genIsNonAnimatedWebPFile',
  ['genArrayBufferFromFile'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 8;
    function a(a) {
      return c('genArrayBufferFromFile')(a).then(function (a) {
        a = new Uint8Array(a);
        var b = a.slice(12, 16).reduce(function (a, b, c) {
          return a + String.fromCharCode(b);
        }, '');
        if (b === 'VP8X') {
          b = a[20];
          b = b.toString(2).padStart(8, '0');
          if (b[6] === '1') return !i(a);
        }
        return !0;
      });
    }
    function i(a) {
      var b = 12,
        c = 0;
      while (c < 2 && b + h < a.length) {
        var d = j(a, b);
        d === 'ANMF' && c++;
        d = k(a, b + 4);
        var e = d % 2;
        d = h + d + e;
        b += d;
      }
      return c > 1;
    }
    function j(a, b) {
      return a.slice(b, b + 4).reduce(function (a, b, c) {
        return a + String.fromCharCode(b);
      }, '');
    }
    function k(a, b) {
      return parseInt(
        a.slice(b, b + 4).reduce(function (a, b, c) {
          return b.toString(2).padStart(8, '0') + a;
        }, ''),
        2,
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'readVINT',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      var c = 0;
      b = Math.min(a.length, (b = b) != null ? b : Number.MAX_VALUE);
      var d = 0;
      while (c < b) {
        var e = a[c];
        if (e === 0) (d += 8), c++;
        else {
          d += 8 - Math.floor(Math.log2(e));
          if (d > b || d < 0) return null;
          e = g(a, d);
          return { vintData: e, nextReadOffset: d };
        }
      }
      return null;
    }
    function g(a, b) {
      var c = Math.floor(b / 8),
        d = a[c],
        e = 8 - (b % 8);
      e < 8 && (d ^= 1 << e);
      e = new Uint8Array(new ArrayBuffer(b - c));
      e[0] = d;
      e.set(a.slice(c + 1, b), 1);
      return e;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'readEBMLHeader',
  ['$InternalEnum', 'readVINT'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a) {
      return a.reduce(function (a, b) {
        return a * 256 + b;
      }, 0);
    }
    function i(a) {
      return String.fromCharCode.apply(String, Array.from(a));
    }
    var j = b('$InternalEnum')({
      EBML: 440786851,
      EBMLVersion: 17030,
      EBMLReadVersion: 17143,
      EBMLMaxSizeLength: 17139,
      EBMLMaxIDLength: 17138,
      DocType: 17026,
      DocTypeVersion: 17031,
      DocTypeReadVersion: 17029,
    });
    function k(a) {
      var b = c('readVINT')(a, 4);
      if (b == null) return null;
      var d = h(a.slice(0, b.nextReadOffset));
      d = j.cast(d);
      var e = c('readVINT')(a.slice(b.nextReadOffset));
      if (e == null) return null;
      var f = h(e.vintData);
      b = b.nextReadOffset + e.nextReadOffset;
      e = b + f;
      if (e > a.length) return null;
      f = a.slice(b, e);
      return { id: d, data: f, nextReadOffset: e };
    }
    function l(a) {
      a = k(a);
      if (a == null || a.id !== j.EBML) return null;
      a = a.data;
      var b = new Map(),
        c = k(a);
      while (c != null)
        c.id != null && b.set(c.id, c.data),
          (a = a.slice(c.nextReadOffset)),
          (c = k(a));
      return b;
    }
    function a(a) {
      var b,
        c = l(new Uint8Array(a));
      if (c == null) return null;
      a = function (a, b) {
        a = c.get(a);
        if (a == null) return null;
        else return b(a);
      };
      var d = a(j.DocType, i);
      return d == null
        ? null
        : {
            ebmlVersion: (b = a(j.EBMLVersion, h)) != null ? b : 1,
            ebmlReadVersion: (b = a(j.EBMLReadVersion, h)) != null ? b : 1,
            ebmlMaxIDLength: (b = a(j.EBMLMaxIDLength, h)) != null ? b : 4,
            ebmlMaxSizeLength: (b = a(j.EBMLMaxSizeLength, h)) != null ? b : 8,
            docType: d,
            docTypeVersion: (b = a(j.DocTypeVersion, h)) != null ? b : 1,
            docTypeReadVersion:
              (d = a(j.DocTypeReadVersion, h)) != null ? d : 1,
          };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'isValidMKV',
  ['Promise', 'readEBMLHeader'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a) {
      a = c('readEBMLHeader')(a);
      if (a == null) return !1;
      else
        return (
          a.ebmlMaxIDLength === 4 &&
          a.ebmlMaxSizeLength >= 1 &&
          a.ebmlMaxSizeLength <= 8 &&
          a.docType === 'matroska'
        );
    }
    function a(a) {
      return new (b('Promise'))(function (b, c) {
        var d = new FileReader();
        d.onerror = function () {
          return c(d.error);
        };
        d.onload = function () {
          var a = d.result;
          a instanceof ArrayBuffer ? b(h(a)) : c();
        };
        d.readAsArrayBuffer(a);
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'translateMediaViewStateData',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      if (a.state !== 'CLIENT_PROCESSING_COMPLETE' || a.fileType === 'UNKNOWN')
        return;
      var b = a.file,
        c = a.fileType;
      if (a.fileType === 'VIDEO') {
        a = a.trimData;
        return { extra: { fileType: c, trimData: a }, file: b };
      }
      return { extra: { fileType: c }, file: b };
    }
    f['default'] = a;
  },
  66,
);
__d(
  'usePagesCometComposerMultiMediaRestrictions',
  ['fbt', 'cometPushToast', 'react'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react').useCallback;
    function a(a, b, c) {
      var e = i(
        function (a) {
          a != null &&
            a.map(function (a) {
              return b({ attachment: a, type: 'REMOVE_MEDIA_ATTACHMENT_ITEM' });
            });
        },
        [b],
      );
      return i(
        function () {
          if (a != null) {
            var b = a.filter(function (a) {
                return a.fileType === 'PHOTO';
              }),
              f = a.filter(function (a) {
                return a.fileType === 'VIDEO';
              });
            b.length > 0 &&
              f.length > 0 &&
              (f.length === 1 &&
              f[0].state === 'NEW' &&
              !b.some(function (a) {
                return a.state === 'NEW';
              })
                ? e(b)
                : e(f),
              d('cometPushToast').cometPushSimpleToast(
                h._('__JHASH__vNpTiMkbo43__JHASH__'),
              ));
            f.length > 1 &&
              c !== !0 &&
              (e(f.slice(1)),
              d('cometPushToast').cometPushSimpleToast(
                h._('__JHASH__3LimldV9oHy__JHASH__'),
              ));
          }
        },
        [a, e, c],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometComposerHeadlessMediaUploaderImpl.react',
  [
    'CometSphericalPhotoUtils',
    'PagesCometComposerContext',
    'ProfileCometComposerContext',
    'Promise',
    'convertVideoToPhoto',
    'cr:1506337',
    'extractJPEGOrientationData',
    'genDimensionsFromImageFile',
    'genDurationAndDimensionsFromVideoFile',
    'genIsHEICFile',
    'genIsNonAnimatedGifFile',
    'genIsNonAnimatedWebPFile',
    'gkx',
    'isValidMKV',
    'promiseDone',
    'react',
    'recoverableViolation',
    'translateMediaViewStateData',
    'useCometComposerLoggerDispatcher',
    'usePagesCometComposerMultiMediaRestrictions',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d('react');
    e = d('react');
    var h = e.useCallback,
      i = e.useContext,
      j = e.useEffect;
    function a(a) {
      var e = a.composerUploader,
        f = a.dispatch,
        g = a.mediaAttachments,
        k = a.mediaUploadStatuses,
        l = a.preventDefaultErrorHandler,
        m = a.useOptimisticMediaPost,
        n = c('useCometComposerLoggerDispatcher')(),
        o = i(c('PagesCometComposerContext')),
        p = i(c('ProfileCometComposerContext')),
        q = c('usePagesCometComposerMultiMediaRestrictions')(
          g,
          f,
          o == null ? void 0 : o.paidContentComposerEligible,
        ),
        r = h(
          function (a) {
            f(babelHelpers['extends']({ type: 'MEDIA_UPLOAD_STARTED' }, a));
          },
          [f],
        ),
        s = h(
          function (a) {
            f(babelHelpers['extends']({ type: 'MEDIA_UPLOAD_PROGRESS' }, a));
          },
          [f],
        ),
        t = h(
          function (a) {
            var b = k && k[a.uploadID];
            b != null &&
              b.resolveFileUpload({
                attachmentID: a.entID,
                attachmentType: a.attachmentType,
              });
          },
          [k],
        ),
        u = h(
          function (a) {
            f({
              entID: a.entID,
              imageURL: a.attachmentType === 'PHOTO' ? a.imageURL : void 0,
              takenTime: a.attachmentType === 'PHOTO' ? a.takenTime : void 0,
              type: 'MEDIA_UPLOAD_SUCCESSFUL',
              uploadID: a.uploadID,
            });
          },
          [f],
        ),
        v = h(
          function (a) {
            f(babelHelpers['extends']({ type: 'MEDIA_UPLOAD_FAILED' }, a));
          },
          [f],
        ),
        w = h(
          function (a) {
            if (a.isSpherical) {
              var b = d(
                'CometSphericalPhotoUtils',
              ).createEncodingFromSphericalImage(a.sphericalImage);
              b &&
                f({
                  sphericalEncoding: b,
                  type: 'SET_MEDIA_ATTACHMENT_ITEM_SPHERICAL_ENCODING',
                  uploadID: a.uploadID,
                });
            }
          },
          [f],
        );
      j(function () {
        g != null && (p != null || o != null) && q();
        e.startedObserver.subscribe(r);
        e.progressObserver.subscribe(s);
        e.successObserver.subscribe(u);
        e.errorObserver.subscribe(v);
        e.sphericalImageDetectedObserver.subscribe(w);
        m && e.successObserver.subscribe(t);
        return function () {
          e.startedObserver.unsubscribe(r),
            e.progressObserver.unsubscribe(s),
            e.successObserver.unsubscribe(u),
            e.errorObserver.unsubscribe(v),
            e.sphericalImageDetectedObserver.unsubscribe(w);
        };
      });
      var x = h(
          function (a) {
            var b = a
              .map(function (a) {
                return a.file && ((a = a.file) == null ? void 0 : a.uploadID);
              })
              .filter(Boolean);
            f({ type: 'MARK_UPLOADS_CLIENT_PROCESSING', uploadIDs: b });
            a.forEach(function (a) {
              var b;
              return n({
                fields: {
                  media_id:
                    (b = (b = a.file) == null ? void 0 : b.uploadID) != null
                      ? b
                      : '',
                  media_type: a.fileType,
                },
                type: 'MEDIA_UPLOAD_PROCESS_START',
              });
            });
          },
          [f, n],
        ),
        y = h(
          function (a) {
            var d = a.file;
            if (d)
              return c('genIsHEICFile')(d).then(function (c) {
                c &&
                  f({
                    type: 'MARK_UNKNOWN_UPLOADS_AS_PHOTO',
                    uploadIDs: [d == null ? void 0 : d.uploadID].filter(
                      Boolean,
                    ),
                  });
                return b('Promise').resolve(a);
              });
            else return b('Promise').resolve(a);
          },
          [f],
        ),
        z = h(
          function (a) {
            var d = a.file;
            if (d)
              return c('isValidMKV')(d).then(function (c) {
                c &&
                  f({
                    type: 'MARK_UNKNOWN_UPLOADS_AS_VIDEO',
                    uploadIDs: [d == null ? void 0 : d.uploadID].filter(
                      Boolean,
                    ),
                  });
                return b('Promise').resolve(a);
              });
            else return b('Promise').resolve(a);
          },
          [f],
        ),
        A = h(
          function (a) {
            var d = a.file;
            if (d)
              return c('genIsNonAnimatedGifFile')(d).then(function (c) {
                c &&
                  f({
                    type: 'MARK_UPLOADS_AS_PHOTO',
                    uploadIDs: [d == null ? void 0 : d.uploadID].filter(
                      Boolean,
                    ),
                  });
                return b('Promise').resolve(a);
              });
            else return b('Promise').resolve(a);
          },
          [f],
        ),
        B = h(
          function (a) {
            var d = a.file;
            return d
              ? c('extractJPEGOrientationData')(d)
                  .then(function (c) {
                    c != null &&
                      c > 0 &&
                      f({
                        attachment: a,
                        type: 'SET_MEDIA_ATTACHMENT_ITEM_USE_CDN_PREVIEW',
                      });
                    return b('Promise').resolve(a);
                  })
                  ['catch'](function (d) {
                    c('recoverableViolation')(
                      'An error occurred when parsing an uploaded image',
                      'comet_composer',
                      { error: d },
                    );
                    return b('Promise').resolve(a);
                  })
              : b('Promise').resolve(a);
          },
          [f],
        ),
        C = h(
          function (a, d) {
            var e = a.file ? a.file : void 0,
              g = a.fileObjectURL,
              h;
            if (g != null)
              switch (a.fileType) {
                case 'PHOTO':
                  h = c('genDimensionsFromImageFile')(g);
                  break;
                case 'VIDEO':
                  h = c('genDurationAndDimensionsFromVideoFile')(g);
                  break;
              }
            else if (e != null)
              switch (a.fileType) {
                case 'PHOTO':
                  h = c('genDimensionsFromImageFile')(e);
                  break;
                case 'VIDEO':
                  h = c('genDurationAndDimensionsFromVideoFile')(e);
                  break;
              }
            else
              h = b('Promise').resolve({ duration: null, height: 0, width: 0 });
            if (h != null)
              return h.then(
                function (b) {
                  var c = b.duration,
                    e = b.height;
                  b = b.width;
                  f({
                    attachment: a,
                    height: e,
                    type: 'SET_MEDIA_ATTACHMENT_ITEM_DIMENSIONS',
                    width: b,
                  });
                  a.fileType === 'VIDEO' &&
                    c != null &&
                    f({
                      currentIndex: d,
                      type: 'SET_VIDEO_ATTACHMENT_METADATA',
                      videoAttachmentMetadata: {
                        originalVideoDurationSeconds: c,
                      },
                    });
                },
                function () {
                  f({
                    attachment: a,
                    height: 0,
                    type: 'SET_MEDIA_ATTACHMENT_ITEM_DIMENSIONS',
                    width: 0,
                  });
                },
              );
          },
          [f],
        ),
        D = h(
          function (a, d) {
            var e = a.file;
            if (e)
              return c('genIsNonAnimatedWebPFile')(e).then(function (g) {
                if (g) {
                  f({
                    type: 'MARK_UPLOADS_AS_PHOTO',
                    uploadIDs: [e == null ? void 0 : e.uploadID].filter(
                      Boolean,
                    ),
                  });
                  g = c('convertVideoToPhoto')(a);
                  if (g != null) {
                    g = C(g, d);
                    if (g != null)
                      return g.then(function () {
                        return b('Promise').resolve(a);
                      });
                  }
                }
              });
            var g = C(a, d);
            if (g != null)
              return g.then(function () {
                return b('Promise').resolve(a);
              });
          },
          [f, C],
        ),
        E = h(
          function () {
            var a = (g || [])
              .map(function (a) {
                return a.state === 'NEW' ? a : null;
              })
              .filter(Boolean);
            a.forEach(function (a, d) {
              var e = a.file.uploadID;
              e != null &&
                (n({
                  fields: { media_id: e, media_type: a.fileType },
                  type: 'MEDIA_UPLOAD_FLOW_START',
                }),
                n({
                  fields: { media_id: e, media_type: a.fileType },
                  type: 'MEDIA_UPLOAD_START',
                }));
              e = [];
              x([a]);
              a.fileType === 'UNKNOWN' && a.file
                ? (e.push(y(a)), e.push(z(a)))
                : a.fileType === 'PHOTO'
                ? e.push(B(a))
                : a.fileType === 'VIDEO' &&
                  a.file.type === 'image/gif' &&
                  e.push(A(a));
              a.fileType === 'VIDEO' && a.file.type === 'image/webp'
                ? e.push(D(a, d))
                : e.push(C(a, d));
              c('promiseDone')(
                b('Promise')
                  .all(e)
                  .then(function () {
                    var b = [a.file.uploadID].filter(Boolean),
                      c = a.fileType;
                    f({
                      type: 'MEDIA_ATTACHMENT_CLIENT_PROCESSING_COMPLETED',
                      uploadIDs: b,
                    });
                    b.forEach(function (a) {
                      return n({
                        fields: { media_id: a, media_type: c },
                        type: 'MEDIA_UPLOAD_PROCESS_SUCCESS',
                      });
                    });
                  }),
              );
            });
          },
          [D, C, y, z, A, B, f, n, x, g],
        ),
        F = h(
          function () {
            if (g != null) {
              var a = g
                .filter(function (a) {
                  return a.state === 'CLIENT_PROCESSING_COMPLETE';
                })
                .map(c('translateMediaViewStateData'))
                .filter(Boolean);
              a.length > 0 &&
                (f({
                  type: 'QUEUE_UPLOADS',
                  uploadIDs: a
                    .map(function (a) {
                      a = a.file;
                      return a.uploadID;
                    })
                    .filter(Boolean),
                }),
                e.upload(a, l));
              k &&
                g.forEach(function (a) {
                  if (
                    a.state === 'CLIENT_PROCESSING_COMPLETE' &&
                    a.file.uploadID != null
                  ) {
                    a = k[a.file.uploadID];
                    a != null &&
                      c('promiseDone')(a.onUploadCancel, function (a) {
                        e.cancelUpload(a.attachmentID, a.attachmentType);
                      });
                  }
                });
            }
          },
          [e, f, g, k],
        ),
        G = h(
          function () {
            b('cr:1506337') !== null && b('cr:1506337')(g, f);
          },
          [f, g],
        );
      j(
        function () {
          E(), F(), c('gkx')('1488423') && G();
        },
        [E, F, G],
      );
      return null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'useComposerVideoUploaderConfig',
  [
    'CometRelay',
    'emptyObject',
    'useComposerVideoUploaderConfigQuery.graphql',
    'useJSON',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    function a(a, e, f) {
      a = d('CometRelay').useLazyLoadQuery(
        h !== void 0
          ? h
          : (h = b('useComposerVideoUploaderConfigQuery.graphql')),
        {
          actorID: (a = a) != null ? a : '',
          entryPoint: (a = e) != null ? a : '',
          targetID: (e = f) != null ? e : '',
        },
      );
      e =
        a == null
          ? void 0
          : (f = a.viewer) == null
          ? void 0
          : f.comet_composer_video_uploader_config;
      return (f = c('useJSON')((a = e) != null ? a : null)) != null
        ? f
        : c('emptyObject');
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometComposerHeadlessMediaUploader.react',
  [
    'Actor',
    'CometComposerHeadlessMediaUploaderImpl.react',
    'FBLogger',
    'GroupCometComposerContext',
    'getComposerMediaFileUploader',
    'react',
    'useComposerVideoUploaderConfig',
    'useComposerViewStateDispatcher',
    'withComposerViewStatePart',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useMemo;
    function a(a) {
      var b = a.creationSessionID,
        e = a.forceResetUploaderConfig,
        f = a.isWorkDraftingFor,
        g = a.mediaAttachments,
        k = a.mediaUploadLoggingMetadata,
        l = k.composerEntrypoint,
        m = k.source;
      k = a.mediaUploadStatuses;
      a = a.workDraftFor;
      var n = c('useComposerViewStateDispatcher')(),
        o = d('Actor').useActor();
      o = o[0];
      var p,
        q = i(c('GroupCometComposerContext'));
      q = q.groupID;
      (a == null ? void 0 : a.originalActorID) != null && q != null && (p = q);
      var r = c('useComposerVideoUploaderConfig')(o, String(l), p);
      a = j(
        function () {
          return babelHelpers['extends']({}, r, {
            composer_entry_point_ref: l,
            silent_file_validation: !0,
            source: m,
          });
        },
        [l, m, r],
      );
      o = c('getComposerMediaFileUploader')(
        o,
        a,
        b,
        f,
        (q = e) != null ? q : !1,
      );
      b == null &&
        c('FBLogger')('comet_composer').mustfix(
          'creationSessionID must be defined for the media upload flow. [source]: ' +
            String(m) +
            ' [composerEntrypoint]: ' +
            String(l),
        );
      return h.jsx(c('CometComposerHeadlessMediaUploaderImpl.react'), {
        composerUploader: o,
        dispatch: n,
        mediaAttachments: g,
        mediaUploadStatuses: k,
        preventDefaultErrorHandler: m === 'album_uploader',
        useOptimisticMediaPost: !0,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = c('withComposerViewStatePart')(a, function (a) {
      return {
        creationSessionID: a.creationSessionID,
        isWorkDraftingFor: a.workDraftFor != null,
        mediaAttachments: a.mediaAttachments,
        mediaUploadStatuses: a.mediaUploadStatuses,
        workDraftFor: a.workDraftFor,
      };
    });
    g['default'] = e;
  },
  98,
);
__d(
  'CometComposerRemoveMediaAttachmentItemButton.react',
  [
    'fbt',
    'ix',
    'TetraCircleButton.react',
    'fbicon',
    'react',
    'useComposerViewStateDispatcher',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react'),
      k = d('react').useCallback;
    function a(a) {
      var b = a.attachment,
        e = c('useComposerViewStateDispatcher')();
      a = k(
        function () {
          e({ attachment: b, type: 'REMOVE_MEDIA_ATTACHMENT_ITEM' });
        },
        [b, e],
      );
      return j.jsx('div', {
        className: 'x1f1mv5i x10l6tqk xxk6nc9 x1c0k01l',
        children: j.jsx(c('TetraCircleButton.react'), {
          icon: d('fbicon')._(i('478238'), 20),
          label:
            (b == null ? void 0 : b.fileType) === 'PHOTO'
              ? h._('__JHASH__Y34_wgsPkT7__JHASH__')
              : h._('__JHASH__fbbPwDzh2rE__JHASH__'),
          onPress: a,
          size: 36,
          type: 'overlay',
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometProfessionalDashboardABTestingComposerStrings',
  ['fbt'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i;
    c = h._('__JHASH__56f0Cf-4gga__JHASH__');
    d = h._('__JHASH__ISPy1HCelIi__JHASH__');
    e = h._('__JHASH__SWfynzkQ_YS__JHASH__');
    f = h._('__JHASH__2XRV_kgqQTe__JHASH__');
    var j = h._('__JHASH__JLwqvT_bw70__JHASH__'),
      k = h._('__JHASH__RWlD0x_TDpa__JHASH__'),
      l = h._('__JHASH__MttnJ-HBfQM__JHASH__'),
      m = h._('__JHASH__w9sMvEsnQwJ__JHASH__'),
      n = h._('__JHASH__zNpZeMgSWda__JHASH__'),
      o = h._('__JHASH__j4ReX3JfZm8__JHASH__'),
      p = h._('__JHASH__aFpHy1FPcI___JHASH__'),
      q = h._('__JHASH__lKRB3_iFQRY__JHASH__'),
      r = h._('__JHASH__JG1mSh0VEdi__JHASH__'),
      s = h._('__JHASH__F-CqS-gFr5v__JHASH__'),
      t = h._('__JHASH__WzuwAevM3Bj__JHASH__'),
      u = h._('__JHASH__7DdM3uowHRY__JHASH__'),
      v = h._('__JHASH__Dhe-UvO5H-i__JHASH__'),
      w = h._('__JHASH__NXX5Toic0HI__JHASH__'),
      x = h._('__JHASH__vkhGvOEFBuG__JHASH__'),
      y = h._('__JHASH__BXyst1ApJW1__JHASH__'),
      z = h._('__JHASH__wubb2VHM66v__JHASH__'),
      A = h._('__JHASH__N3t-ZMADXan__JHASH__'),
      B = h._('__JHASH__m_JmOOZ7Ibt__JHASH__'),
      C = h._('__JHASH__TlQwVjVHgxM__JHASH__'),
      D = h._('__JHASH__1ZloOdkWnYw__JHASH__'),
      E = h._('__JHASH__uRL53c-Qm38__JHASH__'),
      F = h._('__JHASH__KfS1YrRi-E6__JHASH__'),
      G = h._('__JHASH__FDeoYws3WXl__JHASH__'),
      H = h._('__JHASH__6-fobyHmYAx__JHASH__'),
      I = h._('__JHASH__wHR_g_6ZEkM__JHASH__'),
      J = h._('__JHASH__Ftk0t3ZWl-r__JHASH__'),
      K = h._('__JHASH___SsdY3GPhIm__JHASH__'),
      L = h._('__JHASH__oA0F1eaIIJf__JHASH__'),
      M = h._('__JHASH__tZZLPiHoS-6__JHASH__'),
      N = h._('__JHASH__CSxeF_mZdCt__JHASH__'),
      O = h._('__JHASH__qO6iPYkg4uL__JHASH__'),
      P = h._('__JHASH__Ah23EhbO7kz__JHASH__'),
      Q = h._('__JHASH__2c-KOkFmhA7__JHASH__'),
      R = h._('__JHASH__Rj6jeU-0_Hi__JHASH__'),
      S = h._('__JHASH__Ost6IUyYeFB__JHASH__'),
      T = h._('__JHASH__mFrG3YQYVXB__JHASH__'),
      U = h._('__JHASH__rAh-TRqYhjo__JHASH__'),
      V = h._('__JHASH__WvTVbmB1-h1__JHASH__'),
      W = h._('__JHASH__xB9cbzJbDKr__JHASH__'),
      X = h._('__JHASH__xEC99cD7fkx__JHASH__'),
      Y = h._('__JHASH__YRknHFChrCt__JHASH__'),
      Z = h._('__JHASH__EFXHkAHA3jj__JHASH__');
    i =
      ((i = {}),
      (i.THUMBNAIL = h._('__JHASH__Upa_YmoZpjB__JHASH__')),
      (i.VIDEO = h._('__JHASH__nGu9OwVdxJy__JHASH__')),
      (i.TITLE = h._('__JHASH__itTLF3HWSCE__JHASH__')),
      (i.DESCRIPTION = h._('__JHASH__OEU0Qwu1VFO__JHASH__')),
      i);
    function a(a) {
      switch (a) {
        case 'COMMENTS':
          return h._('__JHASH__5XDxvjXTOL0__JHASH__');
        case 'IMPRESSIONS':
          return h._('__JHASH__y0g6Fo5qMI8__JHASH__');
        case 'LINK_CLICKS':
          return h._('__JHASH__yUkTGtjZiFX__JHASH__');
        case 'OTHER':
          return h._('__JHASH__fkh2dpKXa1W__JHASH__');
        case 'REACTIONS':
          return h._('__JHASH__KXyCqZ3gNf1__JHASH__');
        case 'SHARES':
          return h._('__JHASH__aqu4p3wKrrW__JHASH__');
        case 'VIDEO_VIEWS_60S':
          return h._('__JHASH__KjZr1U-aDKS__JHASH__');
        default:
          return h._('__JHASH__8wYXKQzjoGB__JHASH__');
      }
    }
    function b(a) {
      switch (a) {
        case 'LIVE':
          return h._('__JHASH__7Q1TNzkZ5tt__JHASH__');
        case 'PROCESSING':
          return h._('__JHASH__RF2x1IesPM6__JHASH__');
        case 'RESOLVED':
          return h._('__JHASH__BfgtE4v65NZ__JHASH__');
        case 'CANCELLED':
          return h._('__JHASH__Heybzh7de1b__JHASH__');
        case 'SCHEDULED':
          return h._('__JHASH__wG_hxzlgBGc__JHASH__');
        case 'INVALID':
          return h._('__JHASH__Kgo8XsqTYG5__JHASH__');
        case 'DRAFT':
          return h._('__JHASH__zJLX-awZXRN__JHASH__');
        default:
          return h._('__JHASH__n5MfcZQpXkS__JHASH__');
      }
    }
    g.CREATE_AB_TEST_LABEL = c;
    g.AB_TEST_LABEL = d;
    g.VIEW_RESULTS_BUTTON_LABEL = e;
    g.MEDIA_SECTION_HEADER = f;
    g.THUMBNAIL_SECTION_HEADER = j;
    g.ADD_VIDEO_BUTTON = k;
    g.DEFAULT_POST_LABEL = l;
    g.ADD_NEW_VERSION_BUTTON = m;
    g.DISABLE_ADD_NEW_VERSION_TOOLTIP = n;
    g.UPLOAD_IMAGE_BUTTON = o;
    g.DUPLICATE_POST_BUTTON_TOOLTIP = p;
    g.DELETE_POST_BUTTON_TOOLTIP = q;
    g.DELETE_MEDIA_BUTTON_TOOLTIP = r;
    g.TEST_VARIABLES_LABEL = s;
    g.TEST_VARIABLES_TOOLTIP = t;
    g.LOADING_VIDEO_LABEL = u;
    g.EMOJI_SPROUT_LABEL = v;
    g.AB_TEST_SETTINGS_HEADER = w;
    g.DETAILS_CARD_HEADER = x;
    g.TEST_NAME_LABEL = y;
    g.TEST_DESCRIPTION_OPTIONAL_LABEL = z;
    g.PUBLISHING_OPTIONS_CARD_HEADER = A;
    g.SCHEDULING_OPTIONS_LABEL = B;
    g.KEY_METRIC_LABEL = C;
    g.TEST_DURATION_LABEL = D;
    g.PREVIEW_AND_PUBLISH_HEADER = E;
    g.POST_TO_LABEL = F;
    g.TEST_DESCRIPTION_LABEL = G;
    g.PUBLISH_INFO_CARD_HEADER = H;
    g.DETERMINE_WINNER_CARD_HEADER = I;
    g.KEY_METRIC_DESCRIPTION = J;
    g.TEST_DURATION_DESCRIPTION = K;
    g.TIEBREAKER_LABEL = L;
    g.TIEBREAKER_DESCRIPTION = M;
    g.PREVIEW_AND_PUBLISH_BUTTON = N;
    g.CREATION_FOOTER_TIP_TEXT = O;
    g.EXPERIMENT_SETTINGS_FOOTER_TIP_TEXT = P;
    g.REVIEW_AND_PUBLISH_FOOTER_TIP_TEXT = Q;
    g.DUPLICATE_POST_WARNING_TOOLTIP = R;
    g.NOT_ENOUGH_POSTS_WARNING_TOOLTIP = S;
    g.MISSING_REQUIRED_FIELDS_WARNING_TOOLTIP = T;
    g.TEST_NAME_EMPTY_WARNING_TOOLTIP = U;
    g.TEST_NAME_TOO_LONG_WARNING_TOOLTIP = V;
    g.EXPERIMENT_CREATION_FINISHED_TOAST_TEXT = W;
    g.PROCESSING_THUMBNAIL_TEXT = X;
    g.EMPTY_PAGE_HEADER = Y;
    g.EMPTY_PAGE_SUBHEADER = Z;
    g.VARIANT_LABELS = i;
    g.getOptimizationGoalString = a;
    g.getPublishStatus = b;
  },
  98,
);
__d(
  'CometVideoCollaboratorFbtStrings',
  ['fbt'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    a = h._('__JHASH__tnFDVD-WvsW__JHASH__');
    b = h._('__JHASH__2mk8o9f_DLk__JHASH__');
    c = h._('__JHASH__UvfbWVHX5HF__JHASH__');
    d = [
      h._('__JHASH__UaK1Bdqwf77__JHASH__'),
      h._('__JHASH__HVw7X58hRio__JHASH__'),
      h._('__JHASH__F2tCMS4aqq1__JHASH__'),
      h._('__JHASH__eKV_aAQlPHV__JHASH__'),
    ];
    e = h._('__JHASH__4YxmrhMB-pZ__JHASH__');
    f = h._('__JHASH__aPKPbY60k1s__JHASH__');
    var i = h._('__JHASH__t6rXQRJliMl__JHASH__'),
      j = h._('__JHASH__nVcYllv8bRs__JHASH__'),
      k = h._('__JHASH__v2aPRoozrjD__JHASH__'),
      l = h._('__JHASH__t8PkNl_0o7F__JHASH__'),
      m = h._('__JHASH__GBKTAfolgM5__JHASH__'),
      n = h._('__JHASH__pFemH5mJRlI__JHASH__');
    h = h._('__JHASH__uu3_ZqX-0N___JHASH__');
    g.DISABLED_REASON_COLLABORATOR = a;
    g.COLLABORATOR_POPOVER_TITLE = b;
    g.COLLABORATOR_INVITE_HEADING = c;
    g.COLLABORATOR_INVITE_CONTENTS = d;
    g.COLLABORATOR_ADDING_DISABLED = e;
    g.AUTO_AB_TESTING_TITLE = f;
    g.AUTO_AB_TESTING_CONTENT = i;
    g.COLLABORATION_TOAST_MESSAGE = j;
    g.COLLABORATION_COPY_LINK = k;
    g.COLLABORATION_COPIED_LINK = l;
    g.COLLABORATOR_TOOLTIP_LABEL = m;
    g.COPY_LINK_TOOLTIP_LABEL = n;
    g.DISABLE_COLLAB_WHEN_AB_TESTING_SELECTED = h;
  },
  98,
);
__d(
  'CometVideoEditorStrings',
  ['fbt'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    a = h._('__JHASH__BFIALOTscZV__JHASH__');
    b = h._('__JHASH__XHUlHUisxUK__JHASH__');
    c = h._('__JHASH__2-f-QNypEnP__JHASH__');
    d = h._('__JHASH__ppxGDzh5aLQ__JHASH__');
    e = h._('__JHASH__mEDNsGnCm2C__JHASH__');
    f = h._('__JHASH__xzPPeJm7n6V__JHASH__');
    var i = h._('__JHASH__LxOf3YgAccm__JHASH__'),
      j = h._('__JHASH__hQAlPn7Zalc__JHASH__'),
      k = h._('__JHASH__Bf1t0-SCxfa__JHASH__'),
      l = h._('__JHASH__VbV_qT7sNlW__JHASH__'),
      m = h._('__JHASH__-JeD9ryrgeA__JHASH__'),
      n = h._('__JHASH__VQ6Ogshbbhg__JHASH__'),
      o = h._('__JHASH__eNdgOTd-8Zp__JHASH__'),
      p = h._('__JHASH__pvHRn2dzjdU__JHASH__'),
      q = h._('__JHASH__vN-qrL6zgMB__JHASH__'),
      r = h._('__JHASH__-ZtdboMs6i6__JHASH__'),
      s = h._('__JHASH__t8l4v8sG20G__JHASH__'),
      t = h._('__JHASH__1we32h59-DJ__JHASH__');
    h = h._('__JHASH__aVNrMRnJyM7__JHASH__');
    g.VIDEO_TITLE_TEXT_AREA_INPUT_LABEL = a;
    g.AB_TESTING_TITLE_EMPTY_TOOLTIP = b;
    g.TITLE_EMPTY_TOOLTIP = c;
    g.TITLE_TOO_LONG_TOOLTIP = d;
    g.AB_TESTING_DUPLICATE_TITLE_TOOLTIP = e;
    g.AB_TESTING_TITLE_TEST_ENTRYPOINT_TOOLTIP = f;
    g.AB_TESTING_DISABLE_TITLE_TESTING_IF_THUMBNAIL_TESTING_TOOLTIP = i;
    g.CHANGE_THUMBNAIL_SECTION_HEADER = j;
    g.CHOOSE_SUGGESTED_TAB = k;
    g.UPLOAD_IMAGE_TAB = l;
    g.CHOOSE_FROM_VIDEO_TAB = m;
    g.TEST_DIFFERENT_THUMBNAILS_TAB = n;
    g.THUMBNAIL_TESTING_DISABLED_TOOLTIP = o;
    g.AB_TESTING_DISABLE_THUMBNAIL_TESTING_IF_TITLE_TESTING_TOOLTIP = p;
    g.AB_TESTING_DISABLE_THUMBNAIL_TESTING_IF_HAVE_COLLABORATOR_TAGS_TOOLTIP =
      q;
    g.AB_TESTING_BROWSE_SUGGESTED_THUMBNAILS_TOOLTIP = r;
    g.AB_TESTING_UPLOAD_CUSTOM_THUMBNAIL_TOOLTIP = s;
    g.THUMBNAIL_TESTING_UPSELL_HEADER = t;
    g.THUMBNAIL_TESTING_UPSELL_BODY = h;
  },
  98,
);
__d(
  'VideoComposerDialogConstants',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = 16 / 9;
    b = 664;
    c = 20;
    d = 300;
    e = b - 2 * c;
    var g = 60,
      h = 1e3,
      i = 60,
      j = 8,
      k = b + d,
      l = 680,
      m = 255,
      n = 10,
      o = e / a;
    i = 3 * i * g * h;
    g = 100;
    h = 178;
    f.SIXTEEN_NINE = a;
    f.LEFT_SECTION_WIDTH = b;
    f.LEFT_SECTION_PADDING = c;
    f.RIGHT_SECTION_WIDTH = d;
    f.PLAYER_WIDTH = e;
    f.MAX_TAG_COUNT = j;
    f.DIALOG_WIDTH = k;
    f.SECONDARY_DIALOG_WIDTH = l;
    f.MAX_TITLE_LENGTH = m;
    f.GENERATED_THUMBNAILS = n;
    f.PLAYER_HEIGHT = o;
    f.SCHEDULE_TIME_DELTA = i;
    f.THUMBNAIL_HEIGHT = g;
    f.THUMBNAIL_WIDTH = h;
  },
  66,
);
__d(
  'CometVideoEditorUtils.react',
  [
    'Clipboard',
    'CometProfessionalDashboardABTestingComposerStrings',
    'CometVideoCollaboratorFbtStrings',
    'CometVideoEditorStrings',
    'ConstUriUtils',
    'TetraText.react',
    'VideoComposerDialogConstants',
    'XCometCreatorCollaborationInviteControllerRouteBuilder',
    'byteLength',
    'cometPushToast',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('react'),
      i = function (a) {
        if (!a || !a.length) return null;
        for (
          var a = a,
            b = Array.isArray(a),
            c = 0,
            a = b
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var d;
          if (b) {
            if (c >= a.length) break;
            d = a[c++];
          } else {
            c = a.next();
            if (c.done) break;
            d = c.value;
          }
          d = d;
          switch (d.state) {
            case 'UPLOADING':
              switch (d.fileType) {
                case 'VIDEO':
                  return d;
                default:
              }
              break;
            case 'UPLOADED':
              switch (d.fileType) {
                case 'VIDEO':
                  return d;
                default:
              }
              break;
            case 'PREEXISTING':
              switch (d.fileType) {
                case 'VIDEO':
                  return d;
                default:
              }
            default:
          }
        }
        return null;
      };
    e = function (a) {
      if (!a) return null;
      a = i(a.mediaAttachments);
      return (a == null ? void 0 : a.videoAttachmentMetadata) || null;
    };
    f = function (a) {
      a = k(a);
      return (a == null ? void 0 : a.videoAttachmentMetadata) || null;
    };
    var j = function (a) {
      if (
        a.fileType === 'VIDEO' &&
        (a.state === 'UPLOADED' || a.state === 'PREEXISTING')
      ) {
        return (
          (a == null
            ? void 0
            : (a = a.videoAttachmentMetadata) == null
            ? void 0
            : a.thumbnailPreviewURL) || ''
        );
      }
      return '';
    };
    function k(a) {
      if (a == null) return;
      switch (a.state) {
        case 'UPLOADING':
          switch (a.fileType) {
            case 'VIDEO':
              return a;
            default:
          }
          return;
        case 'UPLOADED':
          switch (a.fileType) {
            case 'VIDEO':
              return a;
            default:
          }
          return;
        default:
      }
    }
    function a(a) {
      var b;
      a = i(a.mediaAttachments);
      b =
        a == null
          ? void 0
          : (b = a.data) == null
          ? void 0
          : (b = b.additional_video_metadata) == null
          ? void 0
          : b.videoTags;
      b =
        b == null
          ? void 0
          : b.find(function (a) {
              return a.isCollaboratorTag === !0;
            });
      if (b == null) return;
      var e =
        (a = d('ConstUriUtils').getUri(
          c('XCometCreatorCollaborationInviteControllerRouteBuilder').buildURL({
            ref: 'copied_link_from_composer_lite',
            secondary_collaborator_id: (b = b.id) != null ? b : '',
            video_id: (b = a == null ? void 0 : a.entID) != null ? b : '',
          }),
        )) == null
          ? void 0
          : (b = a.setDomain('facebook.com')) == null
          ? void 0
          : b.setProtocol('https');
      a = function () {
        var a;
        d('Clipboard').copy(
          (a = e == null ? void 0 : e.toString()) != null ? a : '',
        );
        return;
      };
      d('cometPushToast').cometPushToast({
        action: {
          label: h.jsx(c('TetraText.react'), {
            color: 'blueLink',
            type: 'bodyLink4',
            children: d('CometVideoCollaboratorFbtStrings')
              .COLLABORATION_COPY_LINK,
          }),
          onPress: a,
        },
        message: d('CometVideoCollaboratorFbtStrings')
          .COLLABORATION_TOAST_MESSAGE,
        supressCloseButton: !0,
        truncateText: !1,
      });
    }
    function b(a) {
      var b = a.hasEmptyTitle,
        c = a.isDuplicated;
      a = a.isTitleTooLong;
      return c === !0 || a || b ? 'WARN' : null;
    }
    function l(a) {
      return (
        c('byteLength')(a) > d('VideoComposerDialogConstants').MAX_TITLE_LENGTH
      );
    }
    var m = function (a) {
        return (a == null ? void 0 : a.trim()) === '' || a == null;
      },
      n = function (a) {
        var b = a.index,
          c = a.isABTest,
          e = a.isABThumbnailTest,
          f = a.isDuplicated,
          g = a.isEditingPreExistingStory,
          h = a.isExperimentName,
          i = a.isProDashABTest;
        a = a.videoTitle;
        if (m(a)) {
          if (c && i !== !0)
            return d('CometVideoEditorStrings').AB_TESTING_TITLE_EMPTY_TOOLTIP;
          return h === !0
            ? d('CometProfessionalDashboardABTestingComposerStrings')
                .TEST_NAME_EMPTY_WARNING_TOOLTIP
            : d('CometVideoEditorStrings').TITLE_EMPTY_TOOLTIP;
        }
        if (l(a))
          return h === !0
            ? d('CometProfessionalDashboardABTestingComposerStrings')
                .TEST_NAME_TOO_LONG_WARNING_TOOLTIP
            : d('CometVideoEditorStrings').TITLE_TOO_LONG_TOOLTIP;
        if (f === !0)
          return d('CometVideoEditorStrings')
            .AB_TESTING_DUPLICATE_TITLE_TOOLTIP;
        return b === 0 && !c && g !== !0 && e !== !0
          ? d('CometVideoEditorStrings')
              .AB_TESTING_TITLE_TEST_ENTRYPOINT_TOOLTIP
          : null;
      };
    g.getFirstVideoAttachment = i;
    g.getVideoAttachmentMetaDataFromForFirstVideoComposerState = e;
    g.getVideoAttachmentMetadata = f;
    g.getThumbnailURLFromVideoMetadata = j;
    g.showPostProcessingVideoCollaborationNotificationToast = a;
    g.getTitleRowValidationState = b;
    g.isVideoTitleTooLong = l;
    g.isTitleEmpty = m;
    g.getTitleHelperText = n;
  },
  98,
);
__d(
  'ComposerMediaDeepDiveUploadFailedItem.react',
  [
    'CometColumn.react',
    'CometColumnItem.react',
    'CometNullState.react',
    'NullStateMedia',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.errorMessage,
        d = a.fileName;
      a = a.small;
      a = a === void 0 ? !1 : a;
      return h.jsx('div', {
        className:
          'x6s0dn4 x1rfik1p x751hie x12z88qw xnatle3 x4zw6fh x78zum5 x5yr21d',
        children: h.jsx(c('CometColumn.react'), {
          align: 'center',
          expanding: !0,
          verticalAlign: 'center',
          children: h.jsx(c('CometColumnItem.react'), {
            children: h.jsx(c('CometNullState.react'), {
              body: (b = b) != null ? b : '',
              bodyColor: 'negative',
              headline: d,
              icon: a ? null : c('NullStateMedia'),
              small: a,
            }),
          }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometComposerFocusImage.react',
  ['CometFeedFocusMedia.react', 'CometImage.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useCallback;
    b = 0.5;
    e = 0.5;
    function a(a) {
      var b = a.alt,
        d = a.focusX,
        e = a.focusY,
        f = a.imageHeight,
        g = a.imageWidth,
        j = a.onError,
        k = a.src;
      a = a.viewportAspectRatio;
      var l = i(
        function () {
          j && j();
          return void 0;
        },
        [j],
      );
      return h.jsx('div', {
        className: 'x6ikm8r x10wlt62',
        children: h.jsx(c('CometFeedFocusMedia.react'), {
          focusX: d,
          focusY: e,
          mediaHeight: f,
          mediaWidth: g,
          viewportAspectRatio: a,
          children: function (a) {
            return h.jsx(c('CometImage.react'), {
              alt: b,
              onError: l,
              src: k,
              xstyle: a,
            });
          },
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    d = h.memo(a);
    g.DEFAULT_FOCUS_X = b;
    g.DEFAULT_FOCUS_Y = e;
    g.CometComposerFocusImage = d;
  },
  98,
);
__d(
  'CometPhotoLayoutMediaOverlay.react',
  ['fbt', 'TetraText.react', 'react'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      a = a.numItemsNotShown;
      return i.jsx('div', {
        className:
          'x6s0dn4 x1lxk4cn x1ey2m1c x9f619 x78zum5 xds687c xdt5ytf xl56j7k x47corl x10l6tqk x17qophe x13vifvy',
        children: i.jsx(c('TetraText.react'), {
          align: 'center',
          color: 'primaryOnMedia',
          type: 'entityHeaderHeadline2',
          children: h._('__JHASH__eRZGPeec136__JHASH__', [h._param('num', a)]),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'ComposerCometPhotoLayoutMediaAttachmentContext',
  ['CometComposerFocusImage.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = {
      adID: null,
      focusX: d('CometComposerFocusImage.react').DEFAULT_FOCUS_X,
      focusY: d('CometComposerFocusImage.react').DEFAULT_FOCUS_Y,
      mediasetToken: null,
      numPhotosNotShown: 0,
      shouldRoundCorners: !0,
      shouldShowOverlay: !1,
      viewportAspectRatio: 1,
    };
    c = a.createContext(b);
    g['default'] = c;
  },
  98,
);
__d(
  'CometComposerPhotoLayoutItem.react',
  [
    'CometBackgroundImage.react',
    'CometComposerFocusImage.react',
    'CometPhotoLayoutMediaOverlay.react',
    'ComposerCometPhotoLayoutMediaAttachmentContext',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext;
    function a(a) {
      var b = a.alt,
        e = a.height,
        f = a.numPhotosNotShown,
        g = a.onError,
        j = a.shouldShowOverlay,
        k = a.src,
        l = a.viewportAspectRatio;
      a = a.width;
      var m = i(c('ComposerCometPhotoLayoutMediaAttachmentContext')),
        n = m.focusX;
      m = m.focusY;
      if (e == null || a == null)
        return h.jsx(c('CometBackgroundImage.react'), {
          draggable: !1,
          src: k,
        });
      else
        return h.jsxs(h.Fragment, {
          children: [
            h.jsx(d('CometComposerFocusImage.react').CometComposerFocusImage, {
              alt: b,
              focusX: n,
              focusY: m,
              imageHeight: e,
              imageWidth: a,
              onError: g,
              src: k,
              viewportAspectRatio: l,
            }),
            j === !0 && f != null
              ? h.jsx(c('CometPhotoLayoutMediaOverlay.react'), {
                  numItemsNotShown: f,
                })
              : null,
          ],
        });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'EntPhotoCollageItem.react',
  [
    'CometBackgroundImage.react',
    'CometComposerPhotoLayoutItem.react',
    'CometRelay',
    'ComposerCometPhotoLayoutMediaAttachmentContext',
    'ComposerCometSelectedPhotoLayoutContext',
    'EntPhotoCollageItem_media.graphql',
    'composerMediaAttachmentReducer',
    'react',
    'useComposerViewStateDispatcher',
    'useComposerViewStateReducer',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react');
    e = d('react');
    var j = e.useContext,
      k = e.useEffect;
    function a(a) {
      var e;
      c('useComposerViewStateReducer')(c('composerMediaAttachmentReducer'));
      var f = c('useComposerViewStateDispatcher')(),
        g = d('CometRelay').useFragment(
          h !== void 0 ? h : (h = b('EntPhotoCollageItem_media.graphql')),
          a.media,
        );
      k(
        function () {
          var b, c;
          b = g == null ? void 0 : (b = g.image) == null ? void 0 : b.height;
          c = g == null ? void 0 : (c = g.image) == null ? void 0 : c.width;
          b != null &&
            c != null &&
            f({
              entID: a.id,
              height: b,
              type: 'SET_MEDIA_ATTACHMENT_ITEM_CDN_DIMENSIONS',
              width: c,
            });
        },
        [g, f, a.id],
      );
      e = g == null ? void 0 : (e = g.image) == null ? void 0 : e.uri;
      var l = j(c('ComposerCometSelectedPhotoLayoutContext')),
        m = j(c('ComposerCometPhotoLayoutMediaAttachmentContext')),
        n = m.numPhotosNotShown,
        o = m.setFocusX,
        p = m.setFocusY,
        q = m.shouldShowOverlay;
      m = m.viewportAspectRatio;
      var r = g == null ? void 0 : g.image,
        s = r == null ? void 0 : r.height;
      r = r == null ? void 0 : r.width;
      var t = g == null ? void 0 : g.focus,
        u = t == null ? void 0 : t.x,
        v = t == null ? void 0 : t.y;
      k(
        function () {
          o && p && u != null && v != null && (o(u), p(v));
        },
        [o, p, u, v],
      );
      if (e == null) return null;
      else if (!!l.layout && l.layout !== 'classic')
        return i.jsx(c('CometComposerPhotoLayoutItem.react'), {
          height: s,
          numPhotosNotShown: n,
          shouldShowOverlay: q,
          src: e,
          viewportAspectRatio: m,
          width: r,
        });
      else
        return i.jsx(c('CometBackgroundImage.react'), {
          draggable: !1,
          src: e,
        });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'EntPhotoCollageItemContainer.react',
  [
    'CometRelay',
    'EntPhotoCollageItem.react',
    'EntPhotoCollageItemContainerQuery.graphql',
    'WebPixelRatio',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react');
    function a(a) {
      var e = d('CometRelay').useLazyLoadQuery(
        h !== void 0 ? h : (h = b('EntPhotoCollageItemContainerQuery.graphql')),
        { id: a.id, scale: d('WebPixelRatio').get() },
      );
      return i.jsx(c('EntPhotoCollageItem.react'), {
        id: a.id,
        media: e == null ? void 0 : e.node,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CDNPreviewPhotoCollageItem.react',
  [
    'CollageItemFallback.react',
    'CometPlaceholder.react',
    'EntPhotoCollageItemContainer.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.entID,
        d = a.filename,
        e = a.fileType;
      a = a.percentComplete;
      e = h.jsx(c('CollageItemFallback.react'), {
        fileType: e,
        filename: d,
        percentComplete: a,
      });
      if (b != null)
        return h.jsx(c('CometPlaceholder.react'), {
          fallback: e,
          children: h.jsx(c('EntPhotoCollageItemContainer.react'), { id: b }),
        });
      else return e;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'PlayableCollageItemOverlay.react',
  ['CometImage.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      return h.jsx('div', {
        className: 'x10l6tqk xenuvkw x1puwpt7',
        children: h.jsx(c('CometImage.react'), {
          height: 72,
          src: '/images/video/play_72dp.png',
          width: 72,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'OptimisticallyUploadedPhotoCollageItem.react',
  [
    'CDNPreviewPhotoCollageItem.react',
    'CometBackgroundImage.react',
    'JSResourceForInteraction',
    'PlayableCollageItemOverlay.react',
    'composerMediaAttachmentReducer',
    'lazyLoadComponent',
    'react',
    'useComposerViewStateDispatcher',
    'useComposerViewStateReducer',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = c('lazyLoadComponent')(
        c('JSResourceForInteraction')(
          'CometComposerSphericalMediaGyroIndicator.react',
        ).__setRef('OptimisticallyUploadedPhotoCollageItem.react'),
      );
    function a(a) {
      var b = a.attachment;
      c('useComposerViewStateReducer')(c('composerMediaAttachmentReducer'));
      var d = c('useComposerViewStateDispatcher')();
      a = b.sphericalEncoding ? h.jsx(i, {}) : null;
      return b.fileObjectURL != null && b.useCDNPreview !== !0
        ? h.jsxs(h.Fragment, {
            children: [
              h.jsx(c('CometBackgroundImage.react'), {
                draggable: !1,
                onError: function () {
                  d({
                    attachment: b,
                    type: 'SET_MEDIA_ATTACHMENT_ITEM_USE_CDN_PREVIEW',
                  });
                },
                src: b.fileObjectURL,
              }),
              b.fileType === 'VIDEO'
                ? h.jsx(c('PlayableCollageItemOverlay.react'), {})
                : null,
              a,
            ],
          })
        : h.jsxs(h.Fragment, {
            children: [
              h.jsx(c('CDNPreviewPhotoCollageItem.react'), {
                entID: b.entID,
                fileType: b.fileType,
                filename: b.fileName,
                percentComplete: b.percentComplete,
              }),
              a,
            ],
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'OptimisticallyUploadedVideoCollageItem.react',
  [
    'CDNPreviewPhotoCollageItem.react',
    'CircularProgressBar.react',
    'PlayableCollageItemOverlay.react',
    'composerMediaAttachmentReducer',
    'react',
    'useComposerViewStateDispatcher',
    'useComposerViewStateReducer',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.attachment;
      c('useComposerViewStateReducer')(c('composerMediaAttachmentReducer'));
      var d = c('useComposerViewStateDispatcher')();
      a = b.fileObjectURL;
      var e = b.percentComplete;
      return b.fileObjectURL != null && b.useCDNPreview !== !0
        ? h.jsxs(h.Fragment, {
            children: [
              h.jsx('video', {
                className: 'x5yr21d xl1xv1r xh8yej3',
                onLoadedMetadata: function (a) {
                  a.target.videoWidth === 0 &&
                    a.target.videoHeight === 0 &&
                    d({
                      attachment: b,
                      type: 'SET_MEDIA_ATTACHMENT_ITEM_USE_CDN_PREVIEW',
                    });
                },
                src: a,
              }),
              h.jsx(c('PlayableCollageItemOverlay.react'), {}),
              e != null &&
                h.jsx(c('CircularProgressBar.react'), {
                  percentComplete: e * 100,
                }),
            ],
          })
        : h.jsx(c('CDNPreviewPhotoCollageItem.react'), {
            fileType: b.fileType,
            filename: b.fileName,
            percentComplete: b.percentComplete,
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'OptimisticallyUploadedCollageItem.react',
  [
    'OptimisticallyUploadedPhotoCollageItem.react',
    'OptimisticallyUploadedVideoCollageItem.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      a = a.attachment;
      var b =
        a.fileType === 'PHOTO' ||
        a.fileType === 'UNKNOWN' ||
        (a.fileType === 'VIDEO' && a.fileMimeType === 'image/gif');
      return b
        ? h.jsx(c('OptimisticallyUploadedPhotoCollageItem.react'), {
            attachment: a,
          })
        : h.jsx(c('OptimisticallyUploadedVideoCollageItem.react'), {
            attachment: a,
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'PreexistingPhotoLayoutItem.react',
  [
    'CDNPreviewPhotoCollageItem.react',
    'CometPlaceholder.react',
    'JSResourceForInteraction',
    'composerMediaAttachmentReducer',
    'lazyLoadComponent',
    'react',
    'useComposerViewStateReducer',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = c('lazyLoadComponent')(
        c('JSResourceForInteraction')(
          'CometComposerSphericalMediaGyroIndicator.react',
        ).__setRef('PreexistingPhotoLayoutItem.react'),
      );
    function a(a) {
      a = a.attachment;
      c('useComposerViewStateReducer')(c('composerMediaAttachmentReducer'));
      var b = a.sphericalEncoding
        ? h.jsx(c('CometPlaceholder.react'), {
            fallback: null,
            children: h.jsx(i, {}),
          })
        : null;
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(c('CDNPreviewPhotoCollageItem.react'), {
            entID: a.entID,
            fileType: a.fileType,
            filename: null,
          }),
          b,
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'PreexistingPhotoCollageItem.react',
  ['CometBackgroundImage.react', 'PreexistingPhotoLayoutItem.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      a = a.attachment;
      return a.fileType !== 'UNKNOWN'
        ? h.jsx(c('PreexistingPhotoLayoutItem.react'), { attachment: a })
        : h.jsx(c('CometBackgroundImage.react'), { draggable: !1, src: a.url });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'UploadingOrUploadedPhotoCollageItem.react',
  [
    'CDNPreviewPhotoCollageItem.react',
    'CometBackgroundImage.react',
    'CometPlaceholder.react',
    'JSResourceForInteraction',
    'PlayableCollageItemOverlay.react',
    'composerMediaAttachmentReducer',
    'lazyLoadComponent',
    'react',
    'useComposerViewStateDispatcher',
    'useComposerViewStateReducer',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = c('lazyLoadComponent')(
        c('JSResourceForInteraction')(
          'CometComposerSphericalMediaGyroIndicator.react',
        ).__setRef('UploadingOrUploadedPhotoCollageItem.react'),
      );
    function a(a) {
      var b = a.attachment;
      c('useComposerViewStateReducer')(c('composerMediaAttachmentReducer'));
      var d = c('useComposerViewStateDispatcher')();
      a = b.sphericalEncoding
        ? h.jsx(c('CometPlaceholder.react'), {
            fallback: null,
            children: h.jsx(i, {}),
          })
        : null;
      var e = b.file;
      return b.fileObjectURL != null && b.useCDNPreview !== !0
        ? h.jsxs(h.Fragment, {
            children: [
              h.jsx(c('CometBackgroundImage.react'), {
                alt: e.name,
                draggable: !1,
                onError: function () {
                  d({
                    attachment: b,
                    type: 'SET_MEDIA_ATTACHMENT_ITEM_USE_CDN_PREVIEW',
                  });
                },
                src: b.fileObjectURL,
              }),
              b.fileType === 'VIDEO'
                ? h.jsx(c('PlayableCollageItemOverlay.react'), {})
                : null,
              a,
            ],
          })
        : h.jsxs(h.Fragment, {
            children: [
              h.jsx(c('CDNPreviewPhotoCollageItem.react'), {
                entID: b.state === 'UPLOADED' ? b.entID : void 0,
                fileType: b.fileType,
                filename: e.name,
              }),
              a,
            ],
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'UploadingOrUploadedPhotoLayoutItem.react',
  [
    'CDNPreviewPhotoCollageItem.react',
    'CometComposerPhotoLayoutItem.react',
    'CometPlaceholder.react',
    'ComposerCometPhotoLayoutMediaAttachmentContext',
    'JSResourceForInteraction',
    'composerMediaAttachmentReducer',
    'lazyLoadComponent',
    'react',
    'useComposerViewStateDispatcher',
    'useComposerViewStateReducer',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext,
      j = c('lazyLoadComponent')(
        c('JSResourceForInteraction')(
          'CometComposerSphericalMediaGyroIndicator.react',
        ).__setRef('UploadingOrUploadedPhotoLayoutItem.react'),
      ),
      k = 500,
      l = 261;
    function a(a) {
      var b = a.attachment;
      c('useComposerViewStateReducer')(c('composerMediaAttachmentReducer'));
      var d = c('useComposerViewStateDispatcher')();
      a = b.sphericalEncoding
        ? h.jsx(c('CometPlaceholder.react'), {
            fallback: null,
            children: h.jsx(j, {}),
          })
        : null;
      var e = function () {
          d({
            attachment: b,
            type: 'SET_MEDIA_ATTACHMENT_ITEM_USE_CDN_PREVIEW',
          });
        },
        f = b.width != null ? b.width : null,
        g = b.height != null ? b.height : null;
      (f == null || g == null) && ((f = k), (g = l));
      var m = i(c('ComposerCometPhotoLayoutMediaAttachmentContext')),
        n = m.numPhotosNotShown,
        o = m.shouldShowOverlay;
      m = m.viewportAspectRatio;
      var p = b.file;
      if (b.useCDNPreview !== !0 && b.fileObjectURL != null)
        return h.jsxs('div', {
          children: [
            h.jsx(c('CometComposerPhotoLayoutItem.react'), {
              alt: p.name,
              height: g,
              numPhotosNotShown: n,
              onError: e,
              shouldShowOverlay: o,
              src: b.fileObjectURL,
              viewportAspectRatio: m,
              width: f,
            }),
            a,
          ],
        });
      else
        return h.jsxs(h.Fragment, {
          children: [
            h.jsx(c('CDNPreviewPhotoCollageItem.react'), {
              entID: b.state === 'UPLOADED' ? b.entID : void 0,
              fileType: b.fileType,
              filename: p.name,
            }),
            a,
          ],
        });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CDNPreviewVideoCollageItem.react',
  ['CollageItemFallback.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.filename;
      a = a.fileType;
      return h.jsx(c('CollageItemFallback.react'), {
        fileType: a,
        filename: b,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'UploadingOrUploadedVideoCollageItem.react',
  [
    'CDNPreviewVideoCollageItem.react',
    'CometVideoEditorUtils.react',
    'PlayableCollageItemOverlay.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      a = a.attachment;
      if (a.fileType === 'VIDEO') {
        var b = a.file,
          e = d('CometVideoEditorUtils.react').getThumbnailURLFromVideoMetadata(
            a,
          );
        return a.fileObjectURL != null && a.useCDNPreview !== !0
          ? h.jsxs(h.Fragment, {
              children: [
                h.jsx('video', {
                  className: 'x5yr21d xl1xv1r xh8yej3',
                  poster: e,
                  src: a.fileObjectURL,
                }),
                h.jsx(c('PlayableCollageItemOverlay.react'), {}),
              ],
            })
          : h.jsx(c('CDNPreviewVideoCollageItem.react'), {
              entID: a.state === 'UPLOADED' ? a.entID : void 0,
              fileType: a.fileType,
              filename: b.name,
            });
      } else return null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'UploadingOrUploadedCollageItem.react',
  [
    'ComposerCometSelectedPhotoLayoutContext',
    'UploadingOrUploadedPhotoCollageItem.react',
    'UploadingOrUploadedPhotoLayoutItem.react',
    'UploadingOrUploadedVideoCollageItem.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext;
    function a(a) {
      a = a.attachment;
      var b =
          a.fileType === 'PHOTO' ||
          (a.fileType === 'VIDEO' && a.file.type === 'image/gif'),
        d = i(c('ComposerCometSelectedPhotoLayoutContext'));
      d = !!d.layout && d.layout !== 'classic';
      if (b)
        return d
          ? h.jsx(c('UploadingOrUploadedPhotoLayoutItem.react'), {
              attachment: a,
            })
          : h.jsx(c('UploadingOrUploadedPhotoCollageItem.react'), {
              attachment: a,
            });
      else
        return h.jsx(c('UploadingOrUploadedVideoCollageItem.react'), {
          attachment: a,
        });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometComposerMediaAttachmentItem.react',
  [
    'fbt',
    'CollageItemFallback.react',
    'CometBackgroundImage.react',
    'CometComposerRemoveMediaAttachmentItemButton.react',
    'CometPlaceholder.react',
    'CometVideoEditorUtils.react',
    'ComposerMediaDeepDiveUploadFailedItem.react',
    'JSResourceForInteraction',
    'OptimisticallyUploadedCollageItem.react',
    'PlayableCollageItemOverlay.react',
    'PreexistingPhotoCollageItem.react',
    'UploadingOrUploadedCollageItem.react',
    'lazyLoadComponent',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = c('lazyLoadComponent')(
        c('JSResourceForInteraction')(
          'CometComposerSphericalMediaGyroIndicator.react',
        ).__setRef('CometComposerMediaAttachmentItem.react'),
      );
    function a(a) {
      var b = a.attachment;
      a = a.withRemoveButton;
      var e = a === void 0 ? !0 : a;
      a = b.sphericalEncoding
        ? i.jsx(c('CometPlaceholder.react'), {
            fallback: null,
            children: i.jsx(j, {}),
          })
        : null;
      var f = function (a) {
        return e
          ? i.jsx(c('CometComposerRemoveMediaAttachmentItemButton.react'), {
              attachment: a,
            })
          : null;
      };
      switch (b.state) {
        case 'PREEXISTING':
          var g;
          switch (b.fileType) {
            case 'VIDEO':
              var k = d(
                'CometVideoEditorUtils.react',
              ).getThumbnailURLFromVideoMetadata(b);
              k !== ''
                ? (g = i.jsxs(i.Fragment, {
                    children: [
                      i.jsx(c('CometBackgroundImage.react'), {
                        draggable: !1,
                        src: k,
                      }),
                      i.jsx(c('PlayableCollageItemOverlay.react'), {}),
                      a,
                    ],
                  }))
                : b.usePlaceHolderPreview === !0
                ? (g = i.jsx(c('CollageItemFallback.react'), {
                    fileType: b.fileType,
                    filename: b.data.title,
                  }))
                : b.imageURL != null &&
                  (g = i.jsxs(i.Fragment, {
                    children: [
                      i.jsx(c('CometBackgroundImage.react'), {
                        draggable: !1,
                        src: b.imageURL,
                      }),
                      i.jsx(c('PlayableCollageItemOverlay.react'), {}),
                      a,
                    ],
                  }));
              break;
            case 'PHOTO':
              g = i.jsx(c('PreexistingPhotoCollageItem.react'), {
                attachment: b,
              });
              break;
            default:
              g = i.jsxs(i.Fragment, {
                children: [
                  i.jsx(c('CometBackgroundImage.react'), {
                    draggable: !1,
                    src: b.url,
                  }),
                  a,
                ],
              });
              break;
          }
          return i.jsxs(i.Fragment, { children: [g, f(b)] });
        case 'NEW':
        case 'CLIENT_PROCESSING':
        case 'CLIENT_PROCESSING_COMPLETE':
          return i.jsxs(i.Fragment, {
            children: [
              i.jsx(c('CollageItemFallback.react'), {
                fileType: b.fileType,
                filename: b.file.name,
              }),
              a,
            ],
          });
        case 'QUEUED':
        case 'UPLOADING':
        case 'UPLOADED':
          return b.file == null
            ? null
            : i.jsxs(i.Fragment, {
                children: [
                  i.jsx(c('UploadingOrUploadedCollageItem.react'), {
                    attachment: b,
                  }),
                  b.state === 'UPLOADED'
                    ? f(b)
                    : i.jsx('div', {
                        className:
                          'x1l3tlr0 xds687c x5yr21d x10l6tqk x13vifvy x8k05lb',
                        style: {
                          width: (1 - (b.percentComplete || 0)) * 100 + '%',
                        },
                        children: f(b),
                      }),
                ],
              });
        case 'FAILED':
          k = b.error;
          if (k == null)
            switch (b.fileType) {
              case 'VIDEO':
                k = h._('__JHASH__oZ1VYW5WhXw__JHASH__');
                break;
              default:
                k = h._('__JHASH__c4dJj7CU5e1__JHASH__');
                break;
            }
          return i.jsx(c('ComposerMediaDeepDiveUploadFailedItem.react'), {
            errorMessage: k,
            fileName: b.file.name,
            small: !0,
          });
        case 'OPTIMISTIC_UPLOADED':
          return b.fileObjectURL == null
            ? null
            : i.jsx(c('OptimisticallyUploadedCollageItem.react'), {
                attachment: b,
              });
        default:
          return null;
      }
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometComposerMediaAttachmentItemContainer.react',
  ['CometComposerMediaAttachmentItem.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = h.jsx(
        c('CometComposerMediaAttachmentItem.react'),
        babelHelpers['extends']({}, a),
      );
      return b
        ? h.jsx('div', {
            className:
              'x1mzt3pk x1n2onr6 x5yr21d xh8yej3' +
              (a.attachment.state === 'failed'
                ? ' xmrkho8 xa6p843 xfz9iyh xy4nld6'
                : ''),
            children: b,
          })
        : null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'ComposerCometMediaAttachmentClassicLayout.react',
  [
    'fbt',
    'CometComposerHeadlessMediaUploader.react',
    'CometComposerMediaAttachmentItemContainer.react',
    'CometComposerStylingConstants',
    'CometPlaceholder.react',
    'composerMediaAttachmentReducer',
    'react',
    'useComposerViewStateReducer',
    'useMediaCollage',
    'withComposerViewStatePart',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      var b = a.composerDialogWidth,
        e = a.mediaAttachments,
        f = a.mediaUploadLoggingMetadata,
        g = a.usePageCollageLayout,
        j = a.width;
      a = a.withoutUploader;
      b =
        ((b = b) != null
          ? b
          : d('CometComposerStylingConstants').COMPOSER_ORIGINAL_WIDTH) -
        d('CometComposerStylingConstants').COMPOSER_PADDING_SIDE * 2 -
        d('CometComposerStylingConstants').COMPOSER_ATTACHMENT_AREA_BORDER * 2;
      b = c('useMediaCollage')({
        collageWidth: b,
        manualWidth: j,
        mediaAttachments: e,
        usePageCollageLayout: g,
      });
      j = b.height;
      var k = b.itemStyleInfos,
        l = b.numItemsNotShown;
      c('useComposerViewStateReducer')(c('composerMediaAttachmentReducer'));
      return i.jsxs('div', {
        style: { height: j },
        children: [
          a !== !0 &&
            i.jsx(c('CometPlaceholder.react'), {
              fallback: null,
              children: i.jsx(c('CometComposerHeadlessMediaUploader.react'), {
                mediaUploadLoggingMetadata: f,
              }),
            }),
          k.map(function (a, b) {
            var d = (e || [])[b];
            if (d == null) return null;
            var f = b === k.length - 1 && l > 0;
            return i.jsxs(
              'div',
              {
                className: 'x6s0dn4 x78zum5 xl56j7k x6ikm8r x10wlt62 x10l6tqk',
                'data-testid': void 0,
                style: a,
                children: [
                  i.jsx(
                    c('CometComposerMediaAttachmentItemContainer.react'),
                    { attachment: d, withRemoveButton: !1 },
                    'media-' + b,
                  ),
                  f
                    ? i.jsx('div', {
                        className:
                          'x6s0dn4 x1lxk4cn x1ey2m1c x78zum5 xds687c xdt5ytf xl56j7k x10l6tqk x17qophe x13vifvy',
                        children: i.jsx('div', {
                          className: 'x17z8epw x579bpy x1s688f x2b8uid',
                          children: h._('__JHASH__eRZGPeec136__JHASH__', [
                            h._param('num', l + 1),
                          ]),
                        }),
                      })
                    : null,
                ],
              },
              'media-' + b + '-container',
            );
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = c('withComposerViewStatePart')(a, function (a) {
      return {
        composerDialogWidth:
          (a = a.composerSizeAndStyleMetadata) == null
            ? void 0
            : a.composerDialogWidth,
      };
    });
    g['default'] = b;
  },
  98,
);
__d(
  'ComposerCometMediaAttachmentCollageLayoutRenderer.react',
  [
    'ComposerCometMediaAttachmentClassicLayout.react',
    'cr:1661928',
    'cr:1674490',
    'gkx',
    'react',
    'unrecoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var d = a.selectedPhotoLayout,
        e = babelHelpers.objectWithoutPropertiesLoose(a, [
          'selectedPhotoLayout',
        ]);
      a = c('gkx')('1609581');
      var f = function () {
        return h.jsx(
          c('ComposerCometMediaAttachmentClassicLayout.react'),
          babelHelpers['extends']({}, e),
        );
      };
      if (!d || !a) return f();
      switch (d) {
        case 'classic':
          return f();
        case 'columns':
          if (b('cr:1661928'))
            return h.jsx(b('cr:1661928'), {
              mediaAttachments: e.mediaAttachments,
            });
          else
            throw c('unrecoverableViolation')(
              'ComposerCometMediaAttachmentCollageLayoutRenderer was unable to render Column Photo Layout',
              'comet_composer',
            );
        case 'banner':
          return i(d);
        case 'frame':
          if (b('cr:1674490'))
            return h.jsx(b('cr:1674490'), {
              mediaAttachments: e.mediaAttachments,
            });
          else
            throw c('unrecoverableViolation')(
              'ComposerCometMediaAttachmentCollageLayoutRenderer was unable to render Frame Photo Layout',
              'comet_composer',
            );
        default:
          d;
          throw c('unrecoverableViolation')(
            'photo layout not supported in ComposerCometMediaAttachmentCollageLayoutRenderer',
            'comet_composer',
          );
      }
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function i(a) {
      return h.jsx('div', { className: 'x1vd4hg5', children: a });
    }
    i.displayName = i.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'cometComposerCheckMediaAttachmentsForPhoto3d',
  ['QPLUserFlow', 'qpl'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      if (!a) return;
      var d = a.reduce(function (a, b) {
        b.state === 'UPLOADED' && b.fileType === 'PHOTO' && a.push(b);
        return a;
      }, []);
      if (a.length !== 2 || d.length !== 2) return;
      a = h(d);
      d = i(a);
      if (d == null) return;
      c('QPLUserFlow').start(c('qpl')._(37631558, '4977'));
      c('QPLUserFlow').addPoint(
        c('qpl')._(37631558, '4977'),
        'three_d_photo_creation_data_provided',
      );
      b({
        colorImageIds: d.colorImageIds,
        depthImageIds: d.depthImageIds,
        placeholderImage: d.placeholderImage,
        type: 'SET_PHOTO3D_CREATION_DATA',
      });
      b({ attachmentType: 'PHOTO3D', type: 'ACTIVATE_ATTACHMENT_TYPE' });
    }
    function h(a) {
      var b = {},
        c = ['jpg', 'jpeg', 'png'];
      a.forEach(function (a) {
        var d = a.file.name;
        if (!d) return;
        var e = d.lastIndexOf('.');
        if (e < 0) return;
        var f = d.split('.').pop().toLowerCase();
        if (!c.includes(f)) return;
        f = d.substring(0, e).toLowerCase();
        d = f.split('_');
        if (d.length > 1 && d.pop().toLowerCase() === 'depth') {
          e = d.join('_');
          e in b || (b[e] = { colorImage: null, depthImage: null });
          b[e].depthImage = a;
        } else f in b || (b[f] = { colorImage: null, depthImage: null }), (b[f].colorImage = a);
      });
      return b;
    }
    function i(a) {
      var b = Object.keys(a).sort();
      if (b.length === 0) return null;
      var c = [],
        d = [],
        e = null;
      b.forEach(function (b) {
        b = a[b];
        var f = b.colorImage;
        b = b.depthImage;
        if (!f || !b) return null;
        var g = f.entID;
        b = b.entID;
        if (g == null || b == null) return null;
        e == null && (e = f);
        c.push(g);
        d.push(b);
      });
      return c.length === 0 || c.length !== d.length || e === null
        ? null
        : { colorImageIds: c, depthImageIds: d, placeholderImage: e };
    }
    g['default'] = a;
  },
  98,
);
