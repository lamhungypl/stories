__d(
  'CometTextWithEntities.react',
  [
    'fbt',
    'CometLink.react',
    'CometSeeMoreExpandingUtils',
    'CometTextWithEntitiesBase.react',
    'CometTrackingNodeProvider.react',
    'EmojiRendererData',
    'FocusRegion.react',
    'UnicodeUtils',
    'focusScopeQueries',
    'getTextDirectionAttribute',
    'gkx',
    'killswitch',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    b = d('react');
    var j = b.useCallback,
      k = b.useRef,
      l = b.useState,
      m = 0.6,
      n = 20,
      o = {
        auto: { textAlign: 'start' },
        center: { textAlign: 'center' },
        ltr: { textAlign: 'left' },
        rtl: { textAlign: 'right' },
      };
    function p(a) {
      var b = [];
      for (var c = 0; c < a.length; c++) {
        var d = a[c];
        if (
          d != null &&
          d.offset != null &&
          d.length != null &&
          d.entity != null &&
          d.entity.__typename != null
        ) {
          var e;
          b.push({
            entity: d.entity,
            entity_is_weak_reference:
              (e = d.entity_is_weak_reference) != null ? e : null,
            length: d.length,
            offset: d.offset,
          });
        }
      }
      return b;
    }
    function q(a, b, c) {
      return a
        .map(function (a) {
          return babelHelpers['extends']({}, a, { offset: a.offset - b });
        })
        .filter(function (a) {
          return a.offset >= 0 && a.offset < c;
        });
    }
    function r(a) {
      var b = a.ranges;
      a = a.text;
      var c = 0;
      return a
        .split('\n')
        .map(function (a) {
          var e = q(b, c, d('UnicodeUtils').strlen(a));
          c += d('UnicodeUtils').strlen(a) + 1;
          return { ranges: e, text: a };
        })
        .filter(function (a) {
          return a.text.trim() !== '';
        });
    }
    function s(a, b) {
      var c = a.ranges;
      a = a.text;
      var e = 0;
      return a.split(/(?=\n\s*\n)/).map(function (a) {
        var f, g;
        f = (f = a.match(/(^\n\s*\n)?([^]*$)/)) != null ? f : [];
        g = (g = f[1]) != null ? g : '';
        f = (f = f[2]) != null ? f : a;
        g = q(c, e + g.length, d('UnicodeUtils').strlen(f));
        e += d('UnicodeUtils').strlen(a);
        return b ? r({ ranges: g, text: f }) : { ranges: g, text: f };
      });
    }
    function t(a, b, e, f) {
      var g = null,
        h = a.split('\n'),
        i = d('UnicodeUtils').strlen(a);
      i > b && i - b > f && (g = b);
      if (h.length > e) {
        f = h.slice(0, e).join('\n').length;
        g !== null ? (g = Math.min(f, g)) : (g = f);
      }
      if (c('killswitch')('COMET_EMOJI_SEQUENCE_TRUNCATION_FIX')) return g;
      else if (g == null) return g;
      else {
        b = g + u(a, g);
        return b < i ? b : null;
      }
    }
    function u(a, b) {
      var e =
        b > 0 &&
        c('EmojiRendererData').isZWJ(
          d('UnicodeUtils')
            .charAt(a, b - 1)
            .codePointAt(0),
        );
      return v(a, e ? b - 1 : b);
    }
    function v(a, b) {
      var e = d('UnicodeUtils').charAt(a, b);
      if (e !== '') {
        e = e.codePointAt(0);
        if (
          c('EmojiRendererData').isEmojiModifier(e) ||
          c('EmojiRendererData').isEmojiVariationSelector(e) ||
          c('EmojiRendererData').isTextVariationSelector(e)
        )
          return 1 + v(a, b + 1);
        else if (c('EmojiRendererData').isZWJ(e)) {
          e = d('UnicodeUtils').charAt(a, b + 1);
          if (c('EmojiRendererData').isEmojiModifierBase(e.codePointAt(0)))
            return 2 + v(a, b + 2);
        }
      }
      return 0;
    }
    function a(a) {
      var b = a.maxLength;
      b = b === void 0 ? 800 : b;
      var e = a.maxLines;
      e = e === void 0 ? 8 : e;
      var f = a.ranges;
      f = f === void 0 ? [] : f;
      var g = a.text,
        r = a.truncationFactor_DEPRECATED;
      r = r === void 0 ? m : r;
      var u = a.truncationStyle;
      u = u === void 0 ? 'none' : u;
      var v = a.truncationThreshold;
      v = v === void 0 ? n : v;
      var w = a.withLineBreaks;
      w = w === void 0 ? !1 : w;
      var x = a.withParagraphs;
      x = x === void 0 ? !1 : x;
      var y = a.onToggleExpanded,
        z = a.seeLessLinkProps,
        A = a.seeMoreLinkProps,
        B = a.expanded,
        C = a.preserveWhiteSpace,
        D = C === void 0 ? !1 : C;
      C = a.suffix;
      var E = a.align,
        F = babelHelpers.objectWithoutPropertiesLoose(a, [
          'maxLength',
          'maxLines',
          'ranges',
          'text',
          'truncationFactor_DEPRECATED',
          'truncationStyle',
          'truncationThreshold',
          'withLineBreaks',
          'withParagraphs',
          'onToggleExpanded',
          'seeLessLinkProps',
          'seeMoreLinkProps',
          'expanded',
          'preserveWhiteSpace',
          'suffix',
          'align',
        ]);
      a = l((a = B) != null ? a : !1);
      var G = a[0],
        H = a[1],
        I = B != null ? B : G;
      a = k(-1);
      B = j(
        function () {
          H(function (a) {
            return !a;
          }),
            y != null && y();
        },
        [y],
      );
      G = p(f);
      f = g;
      var J = null;
      if (u !== 'none' && !I) {
        b = t(g, b * r, e, v);
        if (b != null) {
          f = d('UnicodeUtils').substring(g, 0, b);
          G = q(G, 0, d('UnicodeUtils').strlen(f));
          a.current = b;
          switch (u) {
            case 'ellipsis-only':
              J = i.jsx(
                i.Fragment,
                { children: h._('__JHASH__7lNkK2cLc2S__JHASH__') },
                'seemore',
              );
              break;
            case 'see-more':
            case 'see-more-and-less':
              J = i.jsxs(
                i.Fragment,
                {
                  children: [
                    h._('__JHASH__7lNkK2cLc2S__JHASH__'),
                    ' ',
                    i.jsx(
                      c('CometLink.react'),
                      babelHelpers['extends'](
                        { onClick: B, testid: void 0 },
                        A,
                        { children: h._('__JHASH__pW7ckUbqOYa__JHASH__') },
                      ),
                    ),
                  ],
                },
                'seemore',
              );
          }
        }
      } else
        u === 'see-more-and-less' &&
          I &&
          (J = i.jsxs(
            i.Fragment,
            {
              children: [
                ' ',
                i.jsx(
                  c('CometLink.react'),
                  babelHelpers['extends']({ onClick: B }, z, {
                    role: 'button',
                    children: h._('__JHASH__HOgvcwAgZf9__JHASH__'),
                  }),
                ),
              ],
            },
            'seemore',
          ));
      J = i.jsx(c('CometTrackingNodeProvider.react'), {
        trackingNode: 44,
        children: J,
      });
      if (!x) {
        if (c('gkx')('5118') && I && a != null && a.current != null) {
          r = d(
            'CometSeeMoreExpandingUtils',
          ).getEntityRangesWithTruncatedEntityAndSplitIntoTwoParts(
            G,
            f,
            a.current,
          );
          e = r.entitiesBeforeTruncatedOffset;
          v = r.entitiesFromTruncatedOffset;
          g = r.newTruncatedEntityOffset;
          return i.jsxs(i.Fragment, {
            children: [
              i.jsx(
                c('CometTextWithEntitiesBase.react'),
                babelHelpers['extends'](
                  { ranges: e, text: f.substring(0, g) },
                  F,
                ),
              ),
              i.jsx(d('FocusRegion.react').FocusRegion, {
                autoFocusQuery: d('focusScopeQueries').focusableScopeQuery,
                children: i.jsx(
                  c('CometTextWithEntitiesBase.react'),
                  babelHelpers['extends'](
                    { ranges: v, text: f.substring(g) },
                    F,
                  ),
                ),
              }),
            ],
          });
        }
        return i.jsxs(i.Fragment, {
          children: [
            i.jsx(
              c('CometTextWithEntitiesBase.react'),
              babelHelpers['extends']({ ranges: G, text: f }, F),
            ),
            J,
          ],
        });
      }
      var K = s({ ranges: G, text: f }, w);
      c('killswitch')('COMET_MESSAGE_EMPTY_PARAGRAPH_FILTERING') ||
        (K = K.filter(function (a) {
          return !Array.isArray(a) || a.length > 0;
        }));
      b = d(
        'CometSeeMoreExpandingUtils',
      ).filterParagraphsGetTruncatedLinesEntityRangesAndIndex(I, K, a);
      var L = b.filteredEntitiesBeforeTruncatedPosition,
        M = b.filteredEntitiesFromTruncatedPosition,
        N = b.hiddenContentOffset,
        O = b.truncatedLineIndex,
        P = b.truncatedParagraphIndex,
        Q = C != null ? i.jsxs(i.Fragment, { children: [' ', C] }) : null;
      return i.jsx(i.Fragment, {
        children: K.map(function (a, b) {
          return i.jsx(
            'div',
            {
              className:
                'x11i5rnm xat24cr x1mh8g0r x1vvkbs' +
                ((b !== 0 ? ' xtlvy1s' : ' xdj266r') +
                  (D ? ' x126k92a' : '' + (b !== 0 ? '' : ''))),
              children: Array.isArray(a)
                ? a.map(function (e, f) {
                    var g = e.ranges;
                    e = e.text;
                    var h =
                      E === 'center' ? E : c('getTextDirectionAttribute')(e);
                    return i.jsxs(
                      'div',
                      {
                        dir: h,
                        style: o[h],
                        children: [
                          I && P === b && O === f
                            ? i.jsxs(i.Fragment, {
                                children: [
                                  i.jsx(
                                    c('CometTextWithEntitiesBase.react'),
                                    babelHelpers['extends'](
                                      { ranges: L, text: e.substring(0, N) },
                                      F,
                                    ),
                                  ),
                                  i.jsx(d('FocusRegion.react').FocusRegion, {
                                    autoFocusQuery:
                                      d('focusScopeQueries')
                                        .focusableScopeQuery,
                                    children: i.jsx(
                                      c('CometTextWithEntitiesBase.react'),
                                      babelHelpers['extends'](
                                        { ranges: M, text: e.substring(N) },
                                        F,
                                      ),
                                    ),
                                  }),
                                ],
                              })
                            : i.jsx(
                                c('CometTextWithEntitiesBase.react'),
                                babelHelpers['extends'](
                                  { ranges: g, text: e },
                                  F,
                                ),
                              ),
                          b === K.length - 1 && f === a.length - 1
                            ? i.jsxs(i.Fragment, { children: [J, Q] })
                            : null,
                        ],
                      },
                      f,
                    );
                  })
                : i.jsxs(i.Fragment, {
                    children: [
                      i.jsx(
                        c('CometTextWithEntitiesBase.react'),
                        babelHelpers['extends'](
                          { ranges: a.ranges, text: a.text },
                          F,
                        ),
                      ),
                      b === K.length - 1
                        ? i.jsxs(i.Fragment, { children: [J, Q] })
                        : null,
                    ],
                  }),
            },
            b,
          );
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
