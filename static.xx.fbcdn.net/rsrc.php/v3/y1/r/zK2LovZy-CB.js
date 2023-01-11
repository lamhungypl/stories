/*FB_PKG_DELIM*/

__d(
  'CometIdentityBadgeInformationDialogQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '8420458394634741';
  },
  null,
);
__d(
  'CometIdentityBadgeInformationDialogQuery$Parameters',
  ['CometIdentityBadgeInformationDialogQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b(
          'CometIdentityBadgeInformationDialogQuery_facebookRelayOperation',
        ),
        metadata: {},
        name: 'CometIdentityBadgeInformationDialogQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometFeedStoryEncryptedTrackingContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext('');
    g['default'] = b;
  },
  98,
);
__d(
  'CometFeedVisitationContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    c = d('react');
    var i = c.useContext,
      j = c.useMemo,
      k = h.createContext({ feedLastVisitTime: null });
    function a(a) {
      var b = a.children,
        c = a.feedLastVisitTime;
      a = j(
        function () {
          return { feedLastVisitTime: c };
        },
        [c],
      );
      return h.jsx(k.Provider, { value: a, children: b });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function b() {
      return i(k);
    }
    g.CometFeedVisitationContextProvider = a;
    g.useCometFeedVisitationContext = b;
  },
  98,
);
__d(
  'CometFocusedStoryViewReferringFeedLocationContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext(null);
    g['default'] = b;
  },
  98,
);
__d(
  'FBGComponentRoot.react',
  ['JSResourceForInteraction', 'lazyLoadComponent', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = c('JSResourceForInteraction')('FBGComponentRootImpl.react').__setRef(
      'FBGComponentRoot.react',
    );
    var i = c('lazyLoadComponent')(b);
    function a(a) {
      return h.jsx(i, babelHelpers['extends']({}, a));
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'InteractivePluginContextController',
  ['Promise', 'regeneratorRuntime', 'uuid'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a() {
        (this.$2 = new Map()), (this.$1 = new Map()), (this.$2 = new Map());
      }
      var d = a.prototype;
      d.getAllPluginControllers = function () {
        return Array.from(this.$1.values());
      };
      d.getPluginController = function (a) {
        return this.$1.get(a);
      };
      d.addPlugin = function (a) {
        return b('regeneratorRuntime').async(
          function (c) {
            while (1)
              switch ((c.prev = c.next)) {
                case 0:
                  this.$1.set(a.getPluginAppID(), a);
                  c.next = 3;
                  return b('regeneratorRuntime').awrap(
                    Array.from(this.$2.values()).map(function (b) {
                      return b.onAddPlugin(a);
                    }),
                  );
                case 3:
                case 'end':
                  return c.stop();
              }
          },
          null,
          this,
        );
      };
      d.removePlugin = function (a) {
        return b('regeneratorRuntime').async(
          function (c) {
            while (1)
              switch ((c.prev = c.next)) {
                case 0:
                  this.$1['delete'](a.getPluginAppID());
                  c.next = 3;
                  return b('regeneratorRuntime').awrap(
                    b('Promise').allSettled(
                      Array.from(this.$2.values()).map(function (b) {
                        return b.onRemovePlugin(a);
                      }),
                    ),
                  );
                case 3:
                  c.next = 5;
                  return b('regeneratorRuntime').awrap(a.destroy());
                case 5:
                case 'end':
                  return c.stop();
              }
          },
          null,
          this,
        );
      };
      d.clearPlugins = function () {
        for (
          var a = this.$1.values(),
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
          this.removePlugin(d);
        }
      };
      d.addObserver = function (a) {
        var b = this,
          d = c('uuid')();
        this.$2.set(d, a);
        return {
          removeObserver: function () {
            b.$2['delete'](d);
          },
        };
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'InteractivePluginContext',
  ['InteractivePluginContextController', 'emptyFunction', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext({
      pluginContextController: new (c('InteractivePluginContextController'))(),
      setStreamerData: c('emptyFunction'),
      setTaggedGameName: c('emptyFunction'),
      streamerData: { streamerID: null, streamerName: null },
      taggedGameName: null,
      videoID: null,
    });
    g['default'] = b;
  },
  98,
);
__d(
  'CometTahoeSidepaneDialogContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext(null);
    g['default'] = b;
  },
  98,
);
__d(
  'CometLexicalGroupEntityNode',
  ['CometLexicalGenericEntityNode'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      function a(a, c) {
        var d = a.canBeInvitedByViewer,
          e = a.gender,
          f = a.photoURI;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          'canBeInvitedByViewer',
          'gender',
          'photoURI',
        ]);
        a = b.call(this, a, c) || this;
        a.__canBeInvitedByViewer = d === !0;
        a.__photoURI = f;
        a.__gender = e;
        return a;
      }
      a.getNodeFields = function (a) {
        return {
          canBeInvitedByViewer: a.__canBeInvitedByViewer,
          gender: a.__gender,
          id: a.__id,
          photoURI: a.__photoURI,
          text: a.__text,
          type: a.__entityType,
          uri: (a = a.__uri) != null ? a : void 0,
        };
      };
      a.getType = function () {
        return 'group_actor';
      };
      a.clone = function (b) {
        return new a(a.getNodeFields(b), b.__key);
      };
      a.importJSON = function (a) {
        return i({
          canBeInvitedByViewer: a.canBeInvitedByViewer,
          gender: a.gender,
          id: a.id,
          photoURI: a.photoURI,
          text: a.text,
          type: a.entityType,
          uri: (a = a.uri) != null ? a : void 0,
        });
      };
      var c = a.prototype;
      c.exportJSON = function () {
        return babelHelpers['extends']({}, b.prototype.exportJSON.call(this), {
          canBeInvitedByViewer: this.__canBeInvitedByViewer,
          gender: this.__gender,
          photoURI: this.__photoURI,
        });
      };
      c.getPhotoURI = function () {
        return this.__photoURI;
      };
      c.getCanBeInvitedByViewer = function () {
        return this.__canBeInvitedByViewer;
      };
      c.getUserGender = function () {
        return this.__gender;
      };
      return a;
    })(d('CometLexicalGenericEntityNode').CometLexicalGenericEntityNode);
    function i(a) {
      return new h(a).setMode('segmented').toggleDirectionless();
    }
    g.CometLexicalGroupEntityNode = h;
    g.$createCometLexicalGroupEntityNode = i;
  },
  98,
);
__d(
  'CometIdentityBadgeInformationDialog.entrypoint',
  [
    'CometIdentityBadgeInformationDialogQuery$Parameters',
    'JSResourceForInteraction',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        a = a.videoID;
        return {
          queries: {
            videoQueryRef: {
              parameters: b(
                'CometIdentityBadgeInformationDialogQuery$Parameters',
              ),
              variables: { videoID: (a = a) != null ? a : '' },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'CometIdentityBadgeInformationDialog.react',
      ).__setRef('CometIdentityBadgeInformationDialog.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
__d(
  'CometUFIActionsContext',
  ['emptyFunction', 'react', 'recoverableViolation', 'unrecoverableViolation'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    d = d('react');
    var i = d.useCallback,
      j = d.useContext,
      k = d.useMemo,
      l = d.useRef,
      m = h.createContext({
        getUFIAction: a('get'),
        registerUFIActions: c('emptyFunction'),
      });
    function a(a) {
      return function (b) {
        throw c('unrecoverableViolation')(
          'You are attempting to ' +
            a +
            ' UFI actions for feedback target ID ' +
            (b == null ? '{not provided}' : b) +
            ' from a component that is not a descendent of CometUFIActionsContextProvider. Please make sure your story has CometUFIActionsContextProvider as a parent in the component tree. See <CometFeedStory> for an example.',
          'ufi2',
        );
      };
    }
    function b(a) {
      var b = a.children;
      a = a.feedLocation;
      var d = l(new Map()),
        e = a != null ? a : 'null',
        f = i(
          function (a, b) {
            if (a == null)
              return c('recoverableViolation')(
                'Unable to register UFI actions because feedback ID is null in feedback location: ' +
                  e,
                'ufi2',
              );
            var f = d.current.get(a) || {};
            d.current.set(a, babelHelpers['extends']({}, f, b));
            return {
              dispose: function () {
                var c = d.current.get(a);
                c != null &&
                  Object.keys(b).forEach(function (e) {
                    c[e] === b[e] && (delete c[e], d.current.set(a, c));
                  });
              },
            };
          },
          [e, d],
        ),
        g = i(
          function (a, b) {
            var f;
            if (a == null)
              return c('recoverableViolation')(
                'Attempted to retrieve UFI action with a null feedback ID in feedback location (' +
                  e +
                  '). Please ensure you are passing in a valid feedback ID.',
                'ufi2',
              );
            f = (f = d.current.get(a)) == null ? void 0 : f[b];
            f == null &&
              c('recoverableViolation')(
                'Attempted to call a UFI action ' +
                  b +
                  ' in feed location ' +
                  e +
                  ' with feedback ID ' +
                  a +
                  ", but no UFI action was found. Please ensure that a) you're providing a valid feedback ID, b) registerUFIActions() is being called with this same feedback ID, and c) you're using UFI actions in response to an event, rather than on first render (which could cause a race condition with the UFI being available).",
                'ufi2',
              );
            return f;
          },
          [e, d],
        );
      a = k(
        function () {
          return { getUFIAction: g, registerUFIActions: f };
        },
        [g, f],
      );
      return h.jsx(m.Provider, { value: a, children: b });
    }
    b.displayName = b.name + ' [from ' + f.id + ']';
    function e() {
      var a = j(m);
      a = a.getUFIAction;
      return { getUFIAction: a };
    }
    g.CometUFIActionsContext = m;
    g.CometUFIActionsContextProvider = b;
    g.useCometUFIActions = e;
  },
  98,
);
__d(
  'CometUFICommentListenersContext',
  ['EventEmitter', 'FBLogger', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    d = d('react');
    var i = d.useContext,
      j = d.useEffect,
      k = d.useMemo,
      l = d.useRef,
      m = new (c('EventEmitter'))(),
      n = h.createContext({
        getEmitter: function (a, b) {
          c('FBLogger')('ufi2').mustfix(
            'Context not setup correctly for CometUFICommentListenersContext using global emitter for ' +
              b +
              ', this is not supported please contact the ufight_club oncall to chat about your use case',
            'ufi2',
          );
          return m;
        },
        isInitialized: !1,
      });
    function a(a) {
      a = a.children;
      var b = i(n),
        d = l(null),
        e = k(
          function () {
            if (b.isInitialized === !0) return b;
            var a = function () {
                d.current == null && (d.current = new Map());
                return d.current;
              },
              e = function (b) {
                var d,
                  e = a();
                d = (d = e.get(b)) != null ? d : new (c('EventEmitter'))();
                e.set(b, d);
                return d;
              };
            return { getEmitter: e, isInitialized: !0 };
          },
          [b],
        );
      return h.jsx(n.Provider, { value: e, children: a });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function b(a, b, c) {
      var d = i(n),
        e = d.getEmitter;
      j(
        function () {
          if (a == null) return;
          if (
            c ===
            'IM_SORRY_ITS_NULL_FOR_SOME_REASON_AND_THIS_SHOULD_REALLY_NEVER_HAPPEN'
          )
            return;
          var d = e(a, c),
            f = d.addListener('comment_create', b);
          return function () {
            d.removeListener(f);
          };
        },
        [a, b, e, c],
      );
    }
    function e(a, b, c) {
      var d = i(n),
        e = d.getEmitter;
      j(
        function () {
          if (a == null) return;
          var d = e(a, c),
            f = d.addListener('comments_expand', b);
          return function () {
            d.removeListener(f);
          };
        },
        [a, b, e, c],
      );
    }
    function o(a, b, c) {
      var d = i(n),
        e = d.getEmitter;
      j(
        function () {
          if (a == null) return;
          var d = e(a, c),
            f = d.addListener('comments_pagination', b);
          return function () {
            d.removeListener(f);
          };
        },
        [a, b, e, c],
      );
    }
    function p(a, b, c) {
      var d = i(n),
        e = d.getEmitter;
      j(
        function () {
          if (a == null) return;
          var d = e(a, c),
            f = d.addListener('comments_collapse', b);
          return function () {
            d.removeListener(f);
          };
        },
        [a, b, e, c],
      );
    }
    g.CometUFICommentListenersContext = n;
    g.CometUFICommentListenersContextProvider = a;
    g.useCometUFIOnCommentCreate = b;
    g.useCometUFIOnCommentsExpanded = e;
    g.useCometUFIOnCommentsPaginated = o;
    g.useCometUFIOnCommentsCollapsed = p;
  },
  98,
);
__d(
  'unfinishedCommentTracking',
  ['gkx', 'qex'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = { base: new Map(), dialog: new Map() },
      i = !1;
    function j() {
      return h[i ? 'dialog' : 'base'];
    }
    function a() {
      return Boolean(
        Array.from(j()).find(function (a) {
          a[0];
          a = a[1];
          return Boolean(
            Array.from(a).find(function (a) {
              return a() === !0;
            }),
          );
        }),
      );
    }
    function b(a, b) {
      if (i && (c('qex')._('12') === !0 || c('gkx')('7981'))) {
        var d = h.base.get(a);
        if (d != null && d.size > 0) return;
      }
      d = (d = j().get(a)) != null ? d : new Set();
      d.add(b);
      j().set(a, d);
    }
    function d(a, b) {
      var c = j().get(a);
      c != null && (c['delete'](b), c.size === 0 && j()['delete'](a));
    }
    function k(a) {
      (i = a),
        i ||
          (h.dialog.forEach(function (a) {
            return a.clear();
          }),
          h.dialog.clear());
    }
    function e() {
      k(!1),
        [h.base, h.dialog].forEach(function (a) {
          a.clear();
        });
    }
    f = {
      addCheck: b,
      hasAnyUnfinishedComments: a,
      removeCheck: d,
      reset: e,
      setDialogActive: k,
    };
    g['default'] = f;
  },
  98,
);
__d(
  'formatLanguageCode',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      return a != null ? a.replace('_', '-').replace('-XX', '') : void 0;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'CometUFIStarsPopoverContext.react',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react').createContext;
    b = a({
      setUFIStarsPopoverEntrypoint: function (a) {},
      setUFIStarsPopoverOnCompletionCallback: function (a) {},
      setUFIStarsPopoverShouldShowEducationCards: function (a) {},
      setUFIStarsPopoverShowPurchaseCard: function (a) {},
      ufiStarsPopoverEntrypoint: 'comet_star_flyout',
      ufiStarsPopoverOnCompletionCallback: null,
      ufiStarsPopoverRef: { current: null },
      ufiStarsPopoverShouldShowEducationCards: !0,
      ufiStarsPopoverShowPurchaseCard: !1,
    });
    g['default'] = b;
  },
  98,
);
__d(
  'UFI2RealtimeContext',
  ['react', 'warning'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext(function () {
      c('warning')(
        !1,
        'UFI2RealtimeContext: Using default context. Put an instance of `UFI2RealtimeRoot` in the tree.',
      );
      return { dispose: function () {} };
    });
    e = b;
    g['default'] = e;
  },
  98,
);
__d(
  'UFI2RealtimeContainer.react',
  ['UFI2RealtimeContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useEffect;
    function a(a) {
      var b = a.children;
      a = a.subscribe;
      var d = i(c('UFI2RealtimeContext'));
      return h.jsx(k, { factory: d, subscribe: a, children: b });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    var k = function (a) {
        var b = a.factory,
          c = a.subscribe;
        a = a.children;
        j(
          function () {
            var a = b(new l(c));
            return function () {
              a.dispose();
            };
          },
          [b, c],
        );
        return (a = a) != null ? a : null;
      },
      l = (function () {
        function a(a) {
          this.$1 = a;
        }
        var b = a.prototype;
        b.subscribe = function () {
          this.$2 || (this.$2 = this.$1());
        };
        b.unsubscribe = function () {
          this.$2 && (this.$2.dispose(), (this.$2 = null));
        };
        return a;
      })();
    g['default'] = a;
  },
  98,
);
__d(
  'UFI2ViewOption',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      if (a === 'FRIENDS_COMMENTS') return !1;
      switch (a) {
        case 'ADMIN_HIDDEN':
        case 'RECENT_ACTIVITY':
        case 'RANKED_THREADED':
        case 'RANKED_UNFILTERED':
        case 'LIVE_STREAMING':
        case 'RANKED_SUB_REPLIES':
        case 'RANKED_REPLIES':
        case 'MOST_VOTED':
        case 'MOST_REACCS':
        case 'ANSWERED':
        case 'UNANSWERED':
        case 'MOST_ENGAGEMENT':
        case 'CHRONO_SUB_REPLIES':
        case 'STAR_COMMENTS':
        case 'FISHBOWL_NORMIES_RECENT_ACTIVITY':
          return !1;
      }
      return !0;
    }
    function b(a, b) {
      return b && a === 'RECENT_ACTIVITY';
    }
    f.shouldDisplayInReverse = a;
    f.expectedWasteComment = b;
  },
  66,
);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @fullSyntaxTransform
 * @generated
 * @noflow
 * @nolint
 * @oncall lexical_web_text_editor
 * @preserve-invariant-messages
 * @preserve-whitespace
 * @preventMunge
 */ __d(
  'Lexical.prod',
  ['Promise'],
  function $module_Lexical_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    'use strict';
    var ba = {},
      ca = {},
      ea = {},
      fa = {},
      ha = {},
      ia = {},
      ja = {},
      ka = {},
      ma = {},
      na = {},
      oa = {},
      pa = {},
      qa = {},
      ra = {},
      sa = {},
      ta = {},
      ua = {},
      va = {},
      wa = {},
      xa = {},
      ya = {},
      za = {},
      Aa = {},
      Ba = {},
      Da = {},
      Ea = {},
      Fa = {},
      Ga = {},
      Ha = {},
      Ia = {},
      Ja = {},
      Ka = {},
      La = {},
      Ma = {};
    function q(a) {
      throw Error(
        'Minified Lexical error #' +
          a +
          '; visit https://lexical.dev/docs/error?code=' +
          a +
          ' for the full message or ' +
          'use the non-minified dev environment for full errors and additional helpful warnings.',
      );
    }
    var Na =
        'undefined' !== typeof window &&
        'undefined' !== typeof window.document &&
        'undefined' !== typeof window.document.createElement,
      Oa = Na && 'documentMode' in document ? document.documentMode : null,
      t = Na && /Mac|iPod|iPhone|iPad/.test(navigator.platform),
      Pa = Na && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
      Qa =
        Na && 'InputEvent' in window && !Oa
          ? 'getTargetRanges' in new window.InputEvent('input')
          : !1,
      Ra = Na && /Version\/[\d.]+.*Safari/.test(navigator.userAgent),
      Sa =
        Na && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
      Ta = Na && /^(?=.*Chrome).*/i.test(navigator.userAgent),
      Wa = Ra || Sa ? '\u00A0' : '\u200B',
      Xa = Pa ? '\u00A0' : Wa,
      Ya =
        /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]/,
      Za =
        /^[^\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,
      $a = {
        bold: 1,
        code: 16,
        italic: 2,
        strikethrough: 4,
        subscript: 32,
        superscript: 64,
        underline: 8,
      },
      ab = { directionless: 1, unmergeable: 2 },
      bb = { center: 2, end: 6, justify: 4, left: 1, right: 3, start: 5 },
      cb = {
        2: 'center',
        6: 'end',
        4: 'justify',
        1: 'left',
        3: 'right',
        5: 'start',
      },
      db = { normal: 0, segmented: 2, token: 1 },
      eb = { 0: 'normal', 2: 'segmented', 1: 'token' },
      fb = !1,
      gb = 0;
    function hb(a) {
      gb = a.timeStamp;
    }
    function ib(a, b, c) {
      return (
        b.__lexicalLineBreak === a || void 0 !== a['__lexicalKey_' + c._key]
      );
    }
    function jb(a) {
      return a.getEditorState().read(function () {
        var b = u();
        return null !== b ? b.clone() : null;
      });
    }
    function kb(a, b, c) {
      fb = !0;
      var d = 100 < performance.now() - gb;
      try {
        v(a, function () {
          var e = u() || jb(a);
          var f = new Map(),
            g = a.getRootElement(),
            h = a._editorState,
            k = a._blockCursorElement;
          var l = !1,
            m = '';
          for (var p = 0; p < b.length; p++) {
            var n = b[p],
              r = n.type,
              w = n.target,
              y = lb(w, h);
            if (!((null === y && w !== g) || z(y)))
              if ('characterData' === r) {
                if ((n = d && B(y)))
                  a: {
                    n = e;
                    r = w;
                    var x = y;
                    if (C(n)) {
                      var A = n.anchor.getNode();
                      if (A.is(x) && n.format !== A.getFormat()) {
                        n = !1;
                        break a;
                      }
                    }
                    n = 3 === r.nodeType && x.isAttached();
                  }
                n &&
                  ((x = E(a._window)),
                  (r = n = null),
                  null !== x &&
                    x.anchorNode === w &&
                    ((n = x.anchorOffset), (r = x.focusOffset)),
                  (w = w.nodeValue),
                  null !== w && mb(y, w, n, r, !1));
              } else if ('childList' === r) {
                l = !0;
                r = n.addedNodes;
                for (x = 0; x < r.length; x++) {
                  A = r[x];
                  var U = nb(A),
                    J = A.parentNode;
                  null == J ||
                    A === k ||
                    null !== U ||
                    ('BR' === A.nodeName && ib(A, J, a)) ||
                    (Pa && (U = A.innerText || A.nodeValue) && (m += U),
                    J.removeChild(A));
                }
                n = n.removedNodes;
                r = n.length;
                if (0 < r) {
                  x = 0;
                  for (A = 0; A < r; A++) {
                    if (
                      ((J = n[A]),
                      ('BR' === J.nodeName && ib(J, w, a)) || k === J)
                    )
                      w.appendChild(J), x++;
                  }
                  r !== x &&
                    (w === g && (y = h._nodeMap.get('root')), f.set(w, y));
                }
              }
          }
          if (0 < f.size) {
            for (
              var _iterator = f,
                _isArray = Array.isArray(_iterator),
                _i = 0,
                _iterator = _isArray
                  ? _iterator
                  : _iterator[
                      typeof Symbol === 'function'
                        ? Symbol.iterator
                        : '@@iterator'
                    ]();
              ;

            ) {
              var _ref2;
              if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref2 = _iterator[_i++];
              } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref2 = _i.value;
              }
              var _ref3 = _ref2;
              var da = _ref3[0];
              var N = _ref3[1];
              if (F(N))
                for (
                  f = N.getChildrenKeys(), g = da.firstChild, h = 0;
                  h < f.length;
                  h++
                ) {
                  (k = a.getElementByKey(f[h])),
                    null !== k &&
                      (null == g
                        ? (da.appendChild(k), (g = k))
                        : g !== k && da.replaceChild(k, g),
                      (g = g.nextSibling));
                }
              else B(N) && N.markDirty();
            }
          }
          f = c.takeRecords();
          if (0 < f.length) {
            for (g = 0; g < f.length; g++) {
              for (
                k = f[g], h = k.addedNodes, k = k.target, p = 0;
                p < h.length;
                p++
              ) {
                (y = h[p]),
                  (w = y.parentNode),
                  null == w ||
                    'BR' !== y.nodeName ||
                    ib(y, k, a) ||
                    w.removeChild(y);
              }
            }
            c.takeRecords();
          }
          null !== e &&
            (l && ((e.dirty = !0), ob(e)), Pa && pb(a) && e.insertRawText(m));
        });
      } finally {
        fb = !1;
      }
    }
    function qb(a) {
      var b = a._observer;
      if (null !== b) {
        var c = b.takeRecords();
        kb(a, c, b);
      }
    }
    function rb(a) {
      0 === gb && sb(a).addEventListener('textInput', hb, !0);
      a._observer = new MutationObserver(function (b, c) {
        kb(a, b, c);
      });
    }
    var ub = 1,
      vb =
        'function' === typeof queueMicrotask
          ? queueMicrotask
          : function (a) {
              require('Promise').resolve().then(a);
            };
    function wb(a) {
      var b = document.activeElement;
      b = null !== b ? b.nodeName : null;
      return z(lb(a)) && ('INPUT' === b || 'TEXTAREA' === b);
    }
    function xb(a, b, c) {
      var d = a.getRootElement();
      try {
        return (
          null !== d &&
          d.contains(b) &&
          d.contains(c) &&
          null !== b &&
          !wb(b) &&
          yb(b) === a
        );
      } catch (e) {
        return !1;
      }
    }
    function yb(a) {
      for (; null != a; ) {
        var b = a.__lexicalEditor;
        if (null != b) return b;
        a = zb(a);
      }
      return null;
    }
    function Ab(a) {
      return a.isToken() || a.isSegmented();
    }
    function Bb(a) {
      for (; null != a; ) {
        if (3 === a.nodeType) return a;
        a = a.firstChild;
      }
      return null;
    }
    function Cb(a, b, c) {
      b = $a[b];
      return a & b && (null === c || 0 === (c & b))
        ? a ^ b
        : null === c || c & b
        ? a | b
        : a;
    }
    function Db(a) {
      return B(a) || Eb(a) || z(a);
    }
    function Fb(a, b) {
      if (null != b) a.__key = b;
      else {
        G();
        99 < Gb && q(14);
        b = H();
        var c = I(),
          d = '' + ub++;
        c._nodeMap.set(d, a);
        F(a) ? b._dirtyElements.set(d, !0) : b._dirtyLeaves.add(d);
        b._cloneNotNeeded.add(d);
        b._dirtyType = 1;
        a.__key = d;
      }
    }
    function Hb(a) {
      var b = a.getParent();
      if (null !== b) {
        var e = a.getWritable();
        b = b.getWritable();
        var c = a.getPreviousSibling();
        a = a.getNextSibling();
        if (null === c) {
          if (null !== a) {
            var d = a.getWritable();
            b.__first = a.__key;
            d.__prev = null;
          } else b.__first = null;
        } else {
          d = c.getWritable();
          if (null !== a) {
            var f = a.getWritable();
            f.__prev = d.__key;
            d.__next = f.__key;
          } else d.__next = null;
          e.__prev = null;
        }
        null === a
          ? null !== c
            ? ((a = c.getWritable()), (b.__last = c.__key), (a.__next = null))
            : (b.__last = null)
          : ((a = a.getWritable()),
            null !== c
              ? ((c = c.getWritable()),
                (c.__next = a.__key),
                (a.__prev = c.__key))
              : (a.__prev = null),
            (e.__next = null));
        b.__size--;
        e.__parent = null;
      }
    }
    function Ib(a) {
      99 < Gb && q(14);
      var b = a.getLatest(),
        c = b.__parent,
        d = I();
      var e = H(),
        f = d._nodeMap;
      d = e._dirtyElements;
      if (null !== c)
        a: for (; null !== c; ) {
          if (d.has(c)) break a;
          var g = f.get(c);
          if (void 0 === g) break;
          d.set(c, !1);
          c = g.__parent;
        }
      b = b.__key;
      e._dirtyType = 1;
      F(a) ? d.set(b, !0) : e._dirtyLeaves.add(b);
    }
    function K(a) {
      G();
      var b = H();
      var c = b._compositionKey;
      a !== c &&
        ((b._compositionKey = a),
        null !== c && ((b = L(c)), null !== b && b.getWritable()),
        null !== a && ((a = L(a)), null !== a && a.getWritable()));
    }
    function Jb() {
      return Kb() ? null : H()._compositionKey;
    }
    function L(a, b) {
      a = (b || I())._nodeMap.get(a);
      return void 0 === a ? null : a;
    }
    function nb(a, b) {
      var c = H();
      a = a['__lexicalKey_' + c._key];
      return void 0 !== a ? L(a, b) : null;
    }
    function lb(a, b) {
      for (; null != a; ) {
        var c = nb(a, b);
        if (null !== c) return c;
        a = zb(a);
      }
      return null;
    }
    function Lb(a) {
      var b = Object.assign({}, a._decorators);
      return (a._pendingDecorators = b);
    }
    function Mb(a) {
      return a.read(function () {
        return Nb().getTextContent();
      });
    }
    function Ob(a, b) {
      v(
        a,
        function () {
          var c = I();
          if (!c.isEmpty())
            if ('root' === b) Nb().markDirty();
            else {
              c = c._nodeMap;
              for (
                var _iterator2 = c,
                  _isArray2 = Array.isArray(_iterator2),
                  _i2 = 0,
                  _iterator2 = _isArray2
                    ? _iterator2
                    : _iterator2[
                        typeof Symbol === 'function'
                          ? Symbol.iterator
                          : '@@iterator'
                      ]();
                ;

              ) {
                var _ref5;
                if (_isArray2) {
                  if (_i2 >= _iterator2.length) break;
                  _ref5 = _iterator2[_i2++];
                } else {
                  _i2 = _iterator2.next();
                  if (_i2.done) break;
                  _ref5 = _i2.value;
                }
                var _ref6 = _ref5;
                var d = _ref6[1];
                d.markDirty();
              }
            }
        },
        null === a._pendingEditorState ? { tag: 'history-merge' } : void 0,
      );
    }
    function Nb() {
      return I()._nodeMap.get('root');
    }
    function ob(a) {
      G();
      var b = I();
      null !== a && ((a.dirty = !0), (a._cachedNodes = null));
      b._selection = a;
    }
    function Pb(a) {
      var b = H(),
        c;
      a: {
        for (c = a; null != c; ) {
          var d = c['__lexicalKey_' + b._key];
          if (void 0 !== d) {
            c = d;
            break a;
          }
          c = zb(c);
        }
        c = null;
      }
      return null === c
        ? ((b = b.getRootElement()), a === b ? L('root') : null)
        : L(c);
    }
    function Qb(a) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(a);
    }
    function Rb(a) {
      var b = [];
      for (; null !== a; ) {
        b.push(a), (a = a._parentEditor);
      }
      return b;
    }
    function Sb() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, '')
        .substr(0, 5);
    }
    function Tb(a, b, c) {
      b = E(b._window);
      if (null !== b) {
        var d = b.anchorNode,
          _b = b,
          e = _b.anchorOffset,
          f = _b.focusOffset;
        if (
          null !== d &&
          ((b = 3 === d.nodeType ? d.nodeValue : null),
          (d = lb(d)),
          null !== b && B(d))
        ) {
          if (b === Wa && c) {
            var g = c.length;
            b = c;
            f = e = g;
          }
          null !== b && mb(d, b, e, f, a);
        }
      }
    }
    function mb(a, b, c, d, e) {
      var f = a;
      if (f.isAttached() && (e || !f.isDirty())) {
        var g = f.isComposing();
        a = b;
        (g || e) && b[b.length - 1] === Wa && (a = b.slice(0, -1));
        b = f.getTextContent();
        if (e || a !== b)
          if ('' === a) {
            if ((K(null), Ra || Sa)) f.remove();
            else {
              var h = H();
              setTimeout(function () {
                h.update(function () {
                  f.isAttached() && f.remove();
                });
              }, 20);
            }
          } else
            (e = f.getParent()),
              (b = Ub()),
              f.isToken() ||
              (null !== Jb() && !g) ||
              (null !== e &&
                C(b) &&
                !e.canInsertTextBefore() &&
                0 === b.anchor.offset)
                ? f.markDirty()
                : ((g = u()),
                  C(g) &&
                    null !== c &&
                    null !== d &&
                    (g.setTextNodeRange(f, c, f, d),
                    f.isSegmented() &&
                      ((c = f.getTextContent()),
                      (c = M(c)),
                      f.replace(c),
                      (f = c))),
                  f.setTextContent(a));
      }
    }
    function Vb(a, b) {
      if (b.isSegmented()) return !0;
      if (!a.isCollapsed()) return !1;
      a = a.anchor.offset;
      var c = b.getParentOrThrow(),
        d = b.isToken();
      return 0 === a
        ? ((a = !b.canInsertTextBefore() || !c.canInsertTextBefore() || d) ||
            ((b = b.getPreviousSibling()),
            (a = (B(b) || (F(b) && b.isInline())) && !b.canInsertTextAfter())),
          a)
        : a === b.getTextContentSize()
        ? !b.canInsertTextAfter() || !c.canInsertTextAfter() || d
        : !1;
    }
    function Wb(a, b) {
      var c = a[b];
      return 'string' === typeof c ? ((c = c.split(' ')), (a[b] = c)) : c;
    }
    function Xb(a, b, c, d, e) {
      0 !== c.size &&
        ((c = d.__key),
        (b = b.get(d.__type)),
        void 0 === b && q(33),
        (d = b.klass),
        (b = a.get(d)),
        void 0 === b && ((b = new Map()), a.set(d, b)),
        (a = b.get(c)),
        (d = 'destroyed' === a && 'created' === e),
        (void 0 === a || d) && b.set(c, d ? 'updated' : e));
    }
    function Yb(a, b, c) {
      var d = a.getParent(),
        e = c;
      null !== d &&
        (b && 0 === c
          ? ((e = a.getIndexWithinParent()), (a = d))
          : b ||
            c !== a.getChildrenSize() ||
            ((e = a.getIndexWithinParent() + 1), (a = d)));
      return a.getChildAtIndex(b ? e - 1 : e);
    }
    function Zb(a, b) {
      var c = a.offset;
      if ('element' === a.type) return (a = a.getNode()), Yb(a, b, c);
      a = a.getNode();
      return (b && 0 === c) || (!b && c === a.getTextContentSize())
        ? ((c = b ? a.getPreviousSibling() : a.getNextSibling()),
          null === c
            ? Yb(
                a.getParentOrThrow(),
                b,
                a.getIndexWithinParent() + (b ? 0 : 1),
              )
            : c)
        : null;
    }
    function pb(a) {
      a = (a = sb(a).event) && a.inputType;
      return 'insertFromPaste' === a || 'insertFromPasteAsQuotation' === a;
    }
    function $b(a) {
      return !O(a) && !a.isLastChild() && !a.isInline();
    }
    function ac(a, b) {
      a = a._keyToDOMMap.get(b);
      void 0 === a && q(75);
      return a;
    }
    function zb(a) {
      a = a.assignedSlot || a.parentElement;
      return null !== a && 11 === a.nodeType ? a.host : a;
    }
    function bc(a, b, c) {
      var d = c.ownerDocument,
        e = d.defaultView;
      if (null !== e) {
        var _b2 = b,
          f = _b2.top,
          g = _b2.bottom;
        for (b = c; null !== b; ) {
          if ((c = b === d.body)) {
            var h = 0;
            var k = sb(a).innerHeight;
          } else {
            var l = b.getBoundingClientRect();
            h = l.top;
            k = l.bottom;
          }
          l = 0;
          f < h ? (l = -(h - f)) : g > k && (l = g - k);
          0 !== l &&
            (c
              ? e.scrollBy(0, l)
              : ((h = b.scrollTop),
                (b.scrollTop += l),
                (h = b.scrollTop - h),
                (f -= h),
                (g -= h)));
          if (c) break;
          b = zb(b);
        }
      }
    }
    function cc(a, b) {
      if (b === void 0) {
        b = 0;
      }
      0 !== b && q(1);
      b = u();
      if (!C(b) || !F(a)) return b;
      var _b3 = b,
        c = _b3.anchor,
        d = _b3.focus,
        e = c.getNode(),
        f = d.getNode();
      dc(e, a) && c.set(a.__key, 0, 'element');
      dc(f, a) && d.set(a.__key, 0, 'element');
      return b;
    }
    function dc(a, b) {
      for (a = a.getParent(); null !== a; ) {
        if (a.is(b)) return !0;
        a = a.getParent();
      }
      return !1;
    }
    function sb(a) {
      a = a._window;
      null === a && q(78);
      return a;
    }
    function ec(a) {
      for (a = a.getParentOrThrow(); null !== a && !fc(a); ) {
        a = a.getParentOrThrow();
      }
      return a;
    }
    function fc(a) {
      return O(a) || (F(a) && a.isShadowRoot());
    }
    function gc(a) {
      var b = H();
      var c = a.constructor.getType();
      b = b._nodes.get(c);
      void 0 === b && q(97);
      b = b.replace;
      return null !== b
        ? ((b = b(a)), b instanceof a.constructor || q(98), b)
        : a;
    }
    function hc(a, b) {
      a = a.getParent();
      if (O(a) && !F(b) && !z(b))
        throw Error(
          'Only element or decorator nodes can be inserted in to the root node',
        );
    }
    function ic(a) {
      return (z(a) || (F(a) && !a.canBeEmpty())) && !a.isInline();
    }
    function kc(a, b, c) {
      c.style.removeProperty('caret-color');
      b._blockCursorElement = null;
      b = a.parentElement;
      null !== b && b.removeChild(a);
    }
    function E(a) {
      return Na ? (a || window).getSelection() : null;
    }
    function lc(a, b, c, d, e) {
      for (a = a.getFirstChild(); null !== a; ) {
        var f = a.__key;
        void 0 !== a &&
          a.__parent === b &&
          (F(a) && lc(a, f, c, d, e),
          c.has(f) || e['delete'](f),
          d['delete'](f));
        a = a.isAttached() ? a.getNextSibling() : null;
      }
    }
    function mc(a, b, c, d) {
      a = a._nodeMap;
      b = b._nodeMap;
      for (
        var _iterator3 = c,
          _isArray3 = Array.isArray(_iterator3),
          _i3 = 0,
          _iterator3 = _isArray3
            ? _iterator3
            : _iterator3[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var _ref7;
        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref7 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref7 = _i3.value;
        }
        var e = _ref7;
        var f = b.get(e);
        void 0 === f ||
          f.isAttached() ||
          (a.has(e) || c['delete'](e), b['delete'](e));
      }
      for (
        var _iterator4 = d,
          _isArray4 = Array.isArray(_iterator4),
          _i4 = 0,
          _iterator4 = _isArray4
            ? _iterator4
            : _iterator4[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var _ref9;
        if (_isArray4) {
          if (_i4 >= _iterator4.length) break;
          _ref9 = _iterator4[_i4++];
        } else {
          _i4 = _iterator4.next();
          if (_i4.done) break;
          _ref9 = _i4.value;
        }
        var _ref10 = _ref9;
        var _e = _ref10[0];
        (c = b.get(_e)),
          void 0 === c ||
            c.isAttached() ||
            (F(c) && lc(c, _e, a, b, d),
            a.has(_e) || d['delete'](_e),
            b['delete'](_e));
      }
    }
    function nc(a, b) {
      var c = a.__mode,
        d = a.__format;
      a = a.__style;
      var e = b.__mode,
        f = b.__format;
      b = b.__style;
      return (
        (null === c || c === e) &&
        (null === d || d === f) &&
        (null === a || a === b)
      );
    }
    function oc(a, b) {
      var c = a.mergeWithSibling(b),
        d = H()._normalizedNodes;
      d.add(a.__key);
      d.add(b.__key);
      return c;
    }
    function pc(a) {
      if ('' === a.__text && a.isSimpleText() && !a.isUnmergeable()) a.remove();
      else {
        for (
          var b;
          null !== (b = a.getPreviousSibling()) &&
          B(b) &&
          b.isSimpleText() &&
          !b.isUnmergeable();

        ) {
          if ('' === b.__text) b.remove();
          else {
            nc(b, a) && (a = oc(b, a));
            break;
          }
        }
        for (
          var c;
          null !== (c = a.getNextSibling()) &&
          B(c) &&
          c.isSimpleText() &&
          !c.isUnmergeable();

        ) {
          if ('' === c.__text) c.remove();
          else {
            nc(a, c) && oc(a, c);
            break;
          }
        }
      }
    }
    function qc(a) {
      rc(a.anchor);
      rc(a.focus);
      return a;
    }
    function rc(a) {
      for (; 'element' === a.type; ) {
        var b = a.getNode(),
          c = a.offset;
        c === b.getChildrenSize()
          ? ((b = b.getChildAtIndex(c - 1)), (c = !0))
          : ((b = b.getChildAtIndex(c)), (c = !1));
        if (B(b)) {
          a.set(b.__key, c ? b.getTextContentSize() : 0, 'text');
          break;
        } else if (!F(b)) break;
        a.set(b.__key, c ? b.getChildrenSize() : 0, 'element');
      }
    }
    var P = '',
      Q = '',
      R = '',
      sc,
      S,
      tc,
      uc = !1,
      vc = !1,
      wc,
      xc = null,
      yc,
      zc,
      Ac,
      Bc,
      Cc,
      Dc;
    function Ec(a, b) {
      var c = Ac.get(a);
      if (null !== b) {
        var d = Fc(a);
        d.parentNode === b && b.removeChild(d);
      }
      Bc.has(a) || S._keyToDOMMap['delete'](a);
      F(c) && ((a = Gc(c, Ac)), Hc(a, 0, a.length - 1, null));
      void 0 !== c && Xb(Dc, tc, wc, c, 'destroyed');
    }
    function Hc(a, b, c, d) {
      for (; b <= c; ++b) {
        var e = a[b];
        void 0 !== e && Ec(e, d);
      }
    }
    function Ic(a, b) {
      a.setProperty('text-align', b);
    }
    function Jc(a, b) {
      a.style.setProperty('padding-inline-start', 0 === b ? '' : 20 * b + 'px');
    }
    function Kc(a, b) {
      a = a.style;
      0 === b
        ? Ic(a, '')
        : 1 === b
        ? Ic(a, 'left')
        : 2 === b
        ? Ic(a, 'center')
        : 3 === b
        ? Ic(a, 'right')
        : 4 === b
        ? Ic(a, 'justify')
        : 5 === b
        ? Ic(a, 'start')
        : 6 === b && Ic(a, 'end');
    }
    function Lc(a, b, c) {
      var d = Bc.get(a);
      void 0 === d && q(60);
      var e = d.createDOM(sc, S);
      var f = S._keyToDOMMap;
      e['__lexicalKey_' + S._key] = a;
      f.set(a, e);
      B(d)
        ? e.setAttribute('data-lexical-text', 'true')
        : z(d) && e.setAttribute('data-lexical-decorator', 'true');
      if (F(d)) {
        a = d.__indent;
        f = d.__size;
        0 !== a && Jc(e, a);
        if (0 !== f) {
          --f;
          a = Gc(d, Bc);
          var g = Q;
          Q = '';
          Mc(a, 0, f, e, null);
          Nc(d, e);
          Q = g;
        }
        a = d.__format;
        0 !== a && Kc(e, a);
        d.isInline() || Oc(null, d, e);
        $b(d) && ((P += '\n\n'), (R += '\n\n'));
      } else
        (f = d.getTextContent()),
          z(d)
            ? ((g = d.decorate(S, sc)),
              null !== g && Pc(a, g),
              (e.contentEditable = 'false'))
            : B(d) && (d.isDirectionless() || (Q += f)),
          (P += f),
          (R += f);
      null !== b &&
        (null != c
          ? b.insertBefore(e, c)
          : ((c = b.__lexicalLineBreak),
            null != c ? b.insertBefore(e, c) : b.appendChild(e)));
      Xb(Dc, tc, wc, d, 'created');
      return e;
    }
    function Mc(a, b, c, d, e) {
      var f = P;
      for (P = ''; b <= c; ++b) {
        Lc(a[b], d, e);
      }
      d.__lexicalTextContent = P;
      P = f + P;
    }
    function Qc(a, b) {
      a = b.get(a);
      return Eb(a) || (z(a) && a.isInline());
    }
    function Oc(a, b, c) {
      a = null !== a && (0 === a.__size || Qc(a.__last, Ac));
      b = 0 === b.__size || Qc(b.__last, Bc);
      a
        ? b ||
          ((b = c.__lexicalLineBreak),
          null != b && c.removeChild(b),
          (c.__lexicalLineBreak = null))
        : b &&
          ((b = document.createElement('br')),
          (c.__lexicalLineBreak = b),
          c.appendChild(b));
    }
    function Nc(a, b) {
      var c = b.__lexicalDir;
      if (b.__lexicalDirTextContent !== Q || c !== xc) {
        var f = '' === Q;
        if (f) var d = xc;
        else (d = Q), (d = Ya.test(d) ? 'rtl' : Za.test(d) ? 'ltr' : null);
        if (d !== c) {
          var g = b.classList,
            h = sc.theme;
          var e = null !== c ? h[c] : void 0;
          var k = null !== d ? h[d] : void 0;
          void 0 !== e &&
            ('string' === typeof e && ((e = e.split(' ')), (e = h[c] = e)),
            g.remove.apply(g, e));
          null === d || (f && 'ltr' === d)
            ? b.removeAttribute('dir')
            : (void 0 !== k &&
                ('string' === typeof k && ((c = k.split(' ')), (k = h[d] = c)),
                void 0 !== k && g.add.apply(g, k)),
              (b.dir = d));
          vc || (a.getWritable().__dir = d);
        }
        xc = d;
        b.__lexicalDirTextContent = Q;
        b.__lexicalDir = d;
      }
    }
    function Gc(a, b) {
      var c = [];
      for (a = a.__first; null !== a; ) {
        var d = b.get(a);
        if (void 0 === d)
          throw Error('createChildrenArray: node does not exist in nodeMap');
        c.push(a);
        a = d.__next;
      }
      return c;
    }
    function Rc(a, b) {
      var c = Ac.get(a),
        d = Bc.get(a);
      (void 0 !== c && void 0 !== d) || q(61);
      var e = uc || zc.has(a) || yc.has(a);
      var f = ac(S, a);
      if (c === d && !e)
        return (
          F(c)
            ? ((d = f.__lexicalTextContent),
              void 0 !== d && ((P += d), (R += d)),
              (d = f.__lexicalDirTextContent),
              void 0 !== d && (Q += d))
            : ((d = c.getTextContent()),
              B(c) && !c.isDirectionless() && (Q += d),
              (R += d),
              (P += d)),
          f
        );
      c !== d && e && Xb(Dc, tc, wc, d, 'updated');
      if (d.updateDOM(c, f, sc))
        return (
          (d = Lc(a, null, null)),
          null === b && q(62),
          b.replaceChild(d, f),
          Ec(a, null),
          d
        );
      if (F(c) && F(d)) {
        a = d.__indent;
        a !== c.__indent && Jc(f, a);
        a = d.__format;
        a !== c.__format && Kc(f, a);
        if (e) {
          a = d;
          e = Q;
          Q = '';
          b = P;
          var g = c.__size,
            h = a.__size;
          P = '';
          if (1 === g && 1 === h) {
            var k = c.__first,
              l = a.__first;
            if (k === l) Rc(k, f);
            else {
              var m = Fc(k);
              l = Lc(l, null, null);
              f.replaceChild(l, m);
              Ec(k, null);
            }
          } else {
            l = Gc(c, Ac);
            var p = Gc(a, Bc);
            if (0 === g) 0 !== h && Mc(p, 0, h - 1, f, null);
            else if (0 === h)
              0 !== g &&
                ((k = null == f.__lexicalLineBreak),
                Hc(l, 0, g - 1, k ? null : f),
                k && (f.textContent = ''));
            else {
              var n = l;
              l = p;
              p = g - 1;
              g = h - 1;
              var w = f.firstChild,
                y = 0;
              for (h = 0; y <= p && h <= g; ) {
                var r = n[y];
                var x = l[h];
                if (r === x) (w = Sc(Rc(x, f))), y++, h++;
                else {
                  void 0 === k && (k = new Set(n));
                  void 0 === m && (m = new Set(l));
                  var A = m.has(r),
                    U = k.has(x);
                  A
                    ? (U
                        ? ((r = ac(S, x)),
                          r === w
                            ? (w = Sc(Rc(x, f)))
                            : (null != w
                                ? f.insertBefore(r, w)
                                : f.appendChild(r),
                              Rc(x, f)),
                          y++)
                        : Lc(x, f, w),
                      h++)
                    : ((w = Sc(Fc(r))), Ec(r, f), y++);
                }
              }
              k = y > p;
              m = h > g;
              k && !m
                ? ((k = l[g + 1]),
                  (k = void 0 === k ? null : S.getElementByKey(k)),
                  Mc(l, h, g, f, k))
                : m && !k && Hc(n, y, p, f);
            }
          }
          $b(a) && (P += '\n\n');
          f.__lexicalTextContent = P;
          P = b + P;
          Nc(a, f);
          Q = e;
          O(d) || d.isInline() || Oc(c, d, f);
        }
        $b(d) && ((P += '\n\n'), (R += '\n\n'));
      } else
        (c = d.getTextContent()),
          z(d)
            ? ((e = d.decorate(S, sc)), null !== e && Pc(a, e))
            : B(d) && !d.isDirectionless() && (Q += c),
          (P += c),
          (R += c);
      !vc &&
        O(d) &&
        d.__cachedText !== R &&
        ((d = d.getWritable()), (d.__cachedText = R));
      return f;
    }
    function Pc(a, b) {
      var c = S._pendingDecorators,
        d = S._decorators;
      if (null === c) {
        if (d[a] === b) return;
        c = Lb(S);
      }
      c[a] = b;
    }
    function Sc(a) {
      a = a.nextSibling;
      null !== a && a === S._blockCursorElement && (a = a.nextSibling);
      return a;
    }
    function Fc(a) {
      a = Cc.get(a);
      void 0 === a && q(75);
      return a;
    }
    var T = Object.freeze({}),
      Zc = [
        ['keydown', Tc],
        ['pointerdown', Uc],
        ['compositionstart', Vc],
        ['compositionend', Wc],
        ['input', Xc],
        ['click', Yc],
        ['cut', T],
        ['copy', T],
        ['dragstart', T],
        ['dragover', T],
        ['dragend', T],
        ['paste', T],
        ['focus', T],
        ['blur', T],
        ['drop', T],
      ];
    Qa &&
      Zc.push([
        'beforeinput',
        function (a, b) {
          return $c(a, b);
        },
      ]);
    var ad = 0,
      bd = 0,
      cd = 0,
      dd = 0,
      ed = !1,
      fd = !1,
      gd = !1,
      hd = !1,
      id = [0, 0, 'root', 0];
    function jd(a, b, c, d) {
      var e = a.anchor,
        f = a.focus,
        g = e.getNode();
      var h = H(),
        k = E(h._window);
      k = null !== k ? k.anchorNode : null;
      var l = e.key;
      h = h.getElementByKey(l);
      var m = b.length;
      return (
        l !== f.key ||
        !B(g) ||
        (((!d && (!Qa || cd < c + 50)) || 2 > m || Qb(b)) &&
          e.offset !== f.offset &&
          !g.isComposing()) ||
        Ab(g) ||
        (g.isDirty() && 1 < m) ||
        ((d || !Qa) && null !== h && !g.isComposing() && k !== Bb(h)) ||
        g.getFormat() !== a.format ||
        Vb(a, g)
      );
    }
    function kd(a, b) {
      return (
        null !== a &&
        null !== a.nodeValue &&
        3 === a.nodeType &&
        0 !== b &&
        b !== a.nodeValue.length
      );
    }
    function ld(a, b, c) {
      var d = a.anchorNode,
        e = a.anchorOffset,
        f = a.focusNode,
        g = a.focusOffset;
      if (ed && ((ed = !1), kd(d, e) && kd(f, g))) return;
      v(b, function () {
        if (!c) ob(null);
        else if (xb(b, d, f)) {
          var h = u();
          if (C(h)) {
            var k = h.anchor,
              l = k.getNode();
            if (h.isCollapsed()) {
              'Range' === a.type &&
                a.anchorNode === a.focusNode &&
                (h.dirty = !0);
              var m = sb(b).event;
              m = m ? m.timeStamp : performance.now();
              var _id = id,
                p = _id[0],
                n = _id[1],
                r = _id[2],
                w = _id[3];
              m < w + 200 && k.offset === n && k.key === r
                ? (h.format = p)
                : 'text' === k.type
                ? (h.format = l.getFormat())
                : 'element' === k.type && (h.format = 0);
            } else {
              k = 127;
              l = !1;
              m = h.getNodes();
              var _p = m.length;
              for (var _n = 0; _n < _p; _n++) {
                var _r = m[_n];
                if (B(_r) && ((l = !0), (k &= _r.getFormat()), 0 === k)) break;
              }
              h.format = l ? k : 0;
            }
          }
          V(b, ba, void 0);
        }
      });
    }
    function Yc(a, b) {
      v(b, function () {
        var c = u(),
          d = E(b._window),
          e = Ub();
        if (C(c)) {
          var f = c.anchor,
            g = f.getNode();
          d &&
            'element' === f.type &&
            0 === f.offset &&
            c.isCollapsed() &&
            !O(g) &&
            1 === Nb().getChildrenSize() &&
            g.getTopLevelElementOrThrow().isEmpty() &&
            null !== e &&
            c.is(e) &&
            (d.removeAllRanges(), (c.dirty = !0));
        }
        V(b, ca, a);
      });
    }
    function Uc(a, b) {
      var c = a.target;
      a = a.pointerType;
      c instanceof Node &&
        'touch' !== a &&
        v(b, function () {
          z(lb(c)) || (fd = !0);
        });
    }
    function md(a, b) {
      b.getTargetRanges && (b = b.getTargetRanges()[0]) && a.applyDOMRange(b);
    }
    function nd(a, b) {
      return a !== b || F(a) || F(b) || !a.isToken() || !b.isToken();
    }
    function $c(a, b) {
      var c = a.inputType;
      'deleteCompositionText' === c ||
        (Pa && pb(b)) ||
        ('insertCompositionText' !== c &&
          v(b, function () {
            var d = u();
            if ('deleteContentBackward' === c) {
              if (null === d) {
                var e = Ub();
                if (!C(e)) return;
                ob(e.clone());
              }
              if (C(d)) {
                229 === bd &&
                a.timeStamp < ad + 30 &&
                b.isComposing() &&
                d.anchor.key === d.focus.key
                  ? (K(null),
                    (ad = 0),
                    setTimeout(function () {
                      v(b, function () {
                        K(null);
                      });
                    }, 30),
                    C(d) &&
                      ((e = d.anchor.getNode()),
                      e.markDirty(),
                      (d.format = e.getFormat())))
                  : (a.preventDefault(), V(b, ea, !0));
                return;
              }
            }
            if (C(d)) {
              e = a.data;
              d.dirty || !d.isCollapsed() || O(d.anchor.getNode()) || md(d, a);
              var f = d.focus,
                g = d.anchor.getNode();
              f = f.getNode();
              if ('insertText' === c || 'insertTranspose' === c)
                '\n' === e
                  ? (a.preventDefault(), V(b, fa, !1))
                  : '\n\n' === e
                  ? (a.preventDefault(), V(b, ha, void 0))
                  : null == e && a.dataTransfer
                  ? ((e = a.dataTransfer.getData('text/plain')),
                    a.preventDefault(),
                    d.insertRawText(e))
                  : null != e &&
                    jd(d, e, a.timeStamp, !0) &&
                    (a.preventDefault(), V(b, ia, e)),
                  (cd = a.timeStamp);
              else
                switch ((a.preventDefault(), c)) {
                  case 'insertFromYank':
                  case 'insertFromDrop':
                  case 'insertReplacementText':
                    V(b, ia, a);
                    break;
                  case 'insertFromComposition':
                    K(null);
                    V(b, ia, a);
                    break;
                  case 'insertLineBreak':
                    K(null);
                    V(b, fa, !1);
                    break;
                  case 'insertParagraph':
                    K(null);
                    gd ? ((gd = !1), V(b, fa, !1)) : V(b, ha, void 0);
                    break;
                  case 'insertFromPaste':
                  case 'insertFromPasteAsQuotation':
                    V(b, ja, a);
                    break;
                  case 'deleteByComposition':
                    nd(g, f) && V(b, ka, void 0);
                    break;
                  case 'deleteByDrag':
                  case 'deleteByCut':
                    V(b, ka, void 0);
                    break;
                  case 'deleteContent':
                    V(b, ea, !1);
                    break;
                  case 'deleteWordBackward':
                    V(b, ma, !0);
                    break;
                  case 'deleteWordForward':
                    V(b, ma, !1);
                    break;
                  case 'deleteHardLineBackward':
                  case 'deleteSoftLineBackward':
                    V(b, na, !0);
                    break;
                  case 'deleteContentForward':
                  case 'deleteHardLineForward':
                  case 'deleteSoftLineForward':
                    V(b, na, !1);
                    break;
                  case 'formatStrikeThrough':
                    V(b, oa, 'strikethrough');
                    break;
                  case 'formatBold':
                    V(b, oa, 'bold');
                    break;
                  case 'formatItalic':
                    V(b, oa, 'italic');
                    break;
                  case 'formatUnderline':
                    V(b, oa, 'underline');
                    break;
                  case 'historyUndo':
                    V(b, pa, void 0);
                    break;
                  case 'historyRedo':
                    V(b, qa, void 0);
                }
            }
          }));
    }
    function Xc(a, b) {
      a.stopPropagation();
      v(b, function () {
        var c = u(),
          d = a.data;
        if (null != d && C(c) && jd(c, d, a.timeStamp, !1)) {
          hd && (od(b, d), (hd = !1));
          var e = c.anchor,
            f = e.getNode(),
            g = E(b._window);
          if (null === g) return;
          var h = e.offset;
          if ((e = Qa && !c.isCollapsed() && B(f) && null !== g.anchorNode))
            (f =
              f.getTextContent().slice(0, h) +
              d +
              f.getTextContent().slice(h + c.focus.offset)),
              (g = g.anchorNode),
              (e = f === (3 === g.nodeType ? g.nodeValue : null));
          e || V(b, ia, d);
          d = d.length;
          Pa &&
            1 < d &&
            'insertCompositionText' === a.inputType &&
            !b.isComposing() &&
            (c.anchor.offset -= d);
          Ra || Sa || !b.isComposing() || ((ad = 0), K(null));
        } else Tb(!1, b), hd && (od(b, d || void 0), (hd = !1));
        G();
        c = H();
        qb(c);
      });
    }
    function Vc(a, b) {
      v(b, function () {
        var c = u();
        if (C(c) && !b.isComposing()) {
          var d = c.anchor;
          K(d.key);
          (a.timeStamp < ad + 30 ||
            'element' === d.type ||
            !c.isCollapsed() ||
            c.anchor.getNode().getFormat() !== c.format) &&
            V(b, ia, Xa);
        }
      });
    }
    function od(a, b) {
      var c = a._compositionKey;
      K(null);
      if (null !== c && null != b) {
        if ('' === b) {
          b = L(c);
          a = Bb(a.getElementByKey(c));
          null !== a &&
            null !== a.nodeValue &&
            B(b) &&
            mb(b, a.nodeValue, null, null, !0);
          return;
        }
        if ('\n' === b[b.length - 1] && ((c = u()), C(c))) {
          b = c.focus;
          c.anchor.set(b.key, b.offset, b.type);
          V(a, xa, null);
          return;
        }
      }
      Tb(!0, a, b);
    }
    function Wc(a, b) {
      Pa
        ? (hd = !0)
        : v(b, function () {
            od(b, a.data);
          });
    }
    function Tc(a, b) {
      ad = a.timeStamp;
      bd = a.keyCode;
      if (!b.isComposing()) {
        var c = a.keyCode,
          d = a.shiftKey,
          e = a.ctrlKey,
          f = a.metaKey,
          g = a.altKey;
        if (39 !== c || e || f || g) {
          if (39 !== c || g || d || (!e && !f)) {
            if (37 !== c || e || f || g) {
              if (37 !== c || g || d || (!e && !f)) {
                if (38 !== c || e || f) {
                  if (40 !== c || e || f) {
                    if (13 === c && d) (gd = !0), V(b, xa, a);
                    else if (32 === c) V(b, ya, a);
                    else if (t && e && 79 === c)
                      a.preventDefault(), (gd = !0), V(b, fa, !0);
                    else if (13 !== c || d) {
                      var h = t
                        ? g || f
                          ? !1
                          : 8 === c || (72 === c && e)
                        : e || g || f
                        ? !1
                        : 8 === c;
                      h
                        ? 8 === c
                          ? V(b, za, a)
                          : (a.preventDefault(), V(b, ea, !0))
                        : 27 === c
                        ? V(b, Aa, a)
                        : ((h = t
                            ? d || g || f
                              ? !1
                              : 46 === c || (68 === c && e)
                            : e || g || f
                            ? !1
                            : 46 === c),
                          h
                            ? 46 === c
                              ? V(b, Ba, a)
                              : (a.preventDefault(), V(b, ea, !1))
                            : 8 === c && (t ? g : e)
                            ? (a.preventDefault(), V(b, ma, !0))
                            : 46 === c && (t ? g : e)
                            ? (a.preventDefault(), V(b, ma, !1))
                            : t && f && 8 === c
                            ? (a.preventDefault(), V(b, na, !0))
                            : t && f && 46 === c
                            ? (a.preventDefault(), V(b, na, !1))
                            : 66 === c && !g && (t ? f : e)
                            ? (a.preventDefault(), V(b, oa, 'bold'))
                            : 85 === c && !g && (t ? f : e)
                            ? (a.preventDefault(), V(b, oa, 'underline'))
                            : 73 === c && !g && (t ? f : e)
                            ? (a.preventDefault(), V(b, oa, 'italic'))
                            : 9 !== c || g || e || f
                            ? 90 === c && !d && (t ? f : e)
                              ? (a.preventDefault(), V(b, pa, void 0))
                              : ((h = t
                                  ? 90 === c && f && d
                                  : (89 === c && e) || (90 === c && e && d)),
                                h
                                  ? (a.preventDefault(), V(b, qa, void 0))
                                  : pd(b._editorState._selection) &&
                                    ((h = d ? !1 : 67 === c ? (t ? f : e) : !1),
                                    h
                                      ? (a.preventDefault(), V(b, Ia, a))
                                      : ((h = d
                                          ? !1
                                          : 88 === c
                                          ? t
                                            ? f
                                            : e
                                          : !1),
                                        h &&
                                          (a.preventDefault(), V(b, Ja, a)))))
                            : V(b, Da, a));
                    } else (gd = !1), V(b, xa, a);
                  } else V(b, wa, a);
                } else V(b, va, a);
              } else V(b, ua, a);
            } else V(b, ta, a);
          } else V(b, sa, a);
        } else V(b, ra, a);
        (e || d || g || f) && V(b, Ma, a);
      }
    }
    function qd(a) {
      var b = a.__lexicalEventHandles;
      void 0 === b && ((b = []), (a.__lexicalEventHandles = b));
      return b;
    }
    var rd = new Map();
    function sd(a) {
      a = a.target;
      var b = E(
        null == a
          ? null
          : 9 === a.nodeType
          ? a.defaultView
          : a.ownerDocument.defaultView,
      );
      if (null !== b) {
        var c = yb(b.anchorNode);
        if (null !== c) {
          fd &&
            ((fd = !1),
            v(c, function () {
              var g = Ub(),
                h = b.anchorNode;
              null !== h &&
                ((h = h.nodeType), 1 === h || 3 === h) &&
                ((g = td(g, b, c)), ob(g));
            }));
          a = Rb(c);
          a = a[a.length - 1];
          var d = a._key,
            e = rd.get(d),
            f = e || a;
          f !== c && ld(b, f, !1);
          ld(b, c, !0);
          c !== a ? rd.set(d, c) : e && rd['delete'](d);
        }
      }
    }
    function ud(a, b) {
      0 === dd && a.ownerDocument.addEventListener('selectionchange', sd);
      dd++;
      a.__lexicalEditor = b;
      var c = qd(a);
      var _loop = function _loop(d) {
        var _Zc$d = Zc[d],
          e = _Zc$d[0],
          f = _Zc$d[1],
          g =
            'function' === typeof f
              ? function (h) {
                  !0 !== h._lexicalHandled &&
                    ((h._lexicalHandled = !0), b.isEditable() && f(h, b));
                }
              : function (h) {
                  if (
                    !0 !== h._lexicalHandled &&
                    ((h._lexicalHandled = !0), b.isEditable())
                  )
                    switch (e) {
                      case 'cut':
                        return V(b, Ja, h);
                      case 'copy':
                        return V(b, Ia, h);
                      case 'paste':
                        return V(b, ja, h);
                      case 'dragstart':
                        return V(b, Fa, h);
                      case 'dragover':
                        return V(b, Ga, h);
                      case 'dragend':
                        return V(b, Ha, h);
                      case 'focus':
                        return V(b, Ka, h);
                      case 'blur':
                        return V(b, La, h);
                      case 'drop':
                        return V(b, Ea, h);
                    }
                };
        a.addEventListener(e, g);
        c.push(function () {
          a.removeEventListener(e, g);
        });
      };
      for (var d = 0; d < Zc.length; d++) {
        _loop(d);
      }
    }
    function vd(a, b, c, d) {
      id = [a, b, c, d];
    }
    var W = (function () {
      function W(a, b, c) {
        this._selection = null;
        this.key = a;
        this.offset = b;
        this.type = c;
      }
      var _proto = W.prototype;
      _proto.is = function is(a) {
        return (
          this.key === a.key && this.offset === a.offset && this.type === a.type
        );
      };
      _proto.isBefore = function isBefore(a) {
        var b = this.getNode(),
          c = a.getNode(),
          d = this.offset;
        a = a.offset;
        if (F(b)) {
          var e = b.getDescendantByIndex(d);
          b = null != e ? e : b;
        }
        F(c) && ((e = c.getDescendantByIndex(a)), (c = null != e ? e : c));
        return b === c ? d < a : b.isBefore(c);
      };
      _proto.getNode = function getNode() {
        var a = L(this.key);
        null === a && q(20);
        return a;
      };
      _proto.set = function set(a, b, c) {
        var d = this._selection,
          e = this.key;
        this.key = a;
        this.offset = b;
        this.type = c;
        Kb() ||
          (Jb() === e && K(a),
          null !== d && ((d._cachedNodes = null), (d.dirty = !0)));
      };
      return W;
    })();
    function wd(a, b) {
      var c = b.__key,
        d = a.offset,
        e = 'element';
      if (B(b)) (e = 'text'), (b = b.getTextContentSize()), d > b && (d = b);
      else if (!F(b)) {
        var f = b.getNextSibling();
        if (B(f)) (c = f.__key), (d = 0), (e = 'text');
        else if ((f = b.getParent()))
          (c = f.__key), (d = b.getIndexWithinParent() + 1);
      }
      a.set(c, d, e);
    }
    function xd(a, b) {
      if (F(b)) {
        var c = b.getLastDescendant();
        F(c) || B(c) ? wd(a, c) : wd(a, b);
      } else wd(a, b);
    }
    function yd(a, b, c) {
      var d = a.getNode(),
        e = d.getChildAtIndex(a.offset),
        f = M(),
        g = O(d) ? zd().append(f) : f;
      f.setFormat(c);
      null === e ? d.append(g) : e.insertBefore(g);
      a.is(b) && b.set(f.__key, 0, 'text');
      a.set(f.__key, 0, 'text');
    }
    function Ad(a, b, c, d) {
      a.key = b;
      a.offset = c;
      a.type = d;
    }
    var Bd = (function () {
      function Bd(a) {
        this.dirty = !1;
        this._nodes = a;
        this._cachedNodes = null;
      }
      var _proto2 = Bd.prototype;
      _proto2.is = function is(a) {
        if (!pd(a)) return !1;
        var b = this._nodes,
          c = a._nodes;
        return (
          b.size === c.size &&
          Array.from(b).every(function (d) {
            return c.has(d);
          })
        );
      };
      _proto2.add = function add(a) {
        this.dirty = !0;
        this._nodes.add(a);
        this._cachedNodes = null;
      };
      _proto2['delete'] = function _delete(a) {
        this.dirty = !0;
        this._nodes['delete'](a);
        this._cachedNodes = null;
      };
      _proto2.clear = function clear() {
        this.dirty = !0;
        this._nodes.clear();
        this._cachedNodes = null;
      };
      _proto2.has = function has(a) {
        return this._nodes.has(a);
      };
      _proto2.clone = function clone() {
        return new Bd(new Set(this._nodes));
      };
      _proto2.extract = function extract() {
        return this.getNodes();
      };
      _proto2.insertRawText = function insertRawText() {};
      _proto2.insertText = function insertText() {};
      _proto2.insertNodes = function insertNodes(a, b) {
        var c = this.getNodes(),
          d = c.length;
        var e = c[d - 1];
        if (B(e)) e = e.select();
        else {
          var f = e.getIndexWithinParent() + 1;
          e = e.getParentOrThrow().select(f, f);
        }
        e.insertNodes(a, b);
        for (a = 0; a < d; a++) {
          c[a].remove();
        }
        return !0;
      };
      _proto2.getNodes = function getNodes() {
        var a = this._cachedNodes;
        if (null !== a) return a;
        var b = this._nodes;
        a = [];
        for (
          var _iterator5 = b,
            _isArray5 = Array.isArray(_iterator5),
            _i5 = 0,
            _iterator5 = _isArray5
              ? _iterator5
              : _iterator5[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var _ref11;
          if (_isArray5) {
            if (_i5 >= _iterator5.length) break;
            _ref11 = _iterator5[_i5++];
          } else {
            _i5 = _iterator5.next();
            if (_i5.done) break;
            _ref11 = _i5.value;
          }
          var c = _ref11;
          (b = L(c)), null !== b && a.push(b);
        }
        Kb() || (this._cachedNodes = a);
        return a;
      };
      _proto2.getTextContent = function getTextContent() {
        var a = this.getNodes(),
          b = '';
        for (var c = 0; c < a.length; c++) {
          b += a[c].getTextContent();
        }
        return b;
      };
      return Bd;
    })();
    function C(a) {
      return a instanceof Cd;
    }
    var Dd = (function () {
      function Dd(a, b, c) {
        this.gridKey = a;
        this.anchor = b;
        this.focus = c;
        this.dirty = !1;
        this._cachedNodes = null;
        b._selection = this;
        c._selection = this;
      }
      var _proto3 = Dd.prototype;
      _proto3.is = function is(a) {
        return Ed(a)
          ? this.gridKey === a.gridKey &&
              this.anchor.is(a.anchor) &&
              this.focus.is(a.focus)
          : !1;
      };
      _proto3.set = function set(a, b, c) {
        this.dirty = !0;
        this.gridKey = a;
        this.anchor.key = b;
        this.focus.key = c;
        this._cachedNodes = null;
      };
      _proto3.clone = function clone() {
        return new Dd(this.gridKey, this.anchor, this.focus);
      };
      _proto3.isCollapsed = function isCollapsed() {
        return !1;
      };
      _proto3.isBackward = function isBackward() {
        return this.focus.isBefore(this.anchor);
      };
      _proto3.getCharacterOffsets = function getCharacterOffsets() {
        return Fd(this);
      };
      _proto3.extract = function extract() {
        return this.getNodes();
      };
      _proto3.insertRawText = function insertRawText() {};
      _proto3.insertText = function insertText() {};
      _proto3.insertNodes = function insertNodes(a, b) {
        var c = this.focus.getNode();
        return qc(c.select(0, c.getChildrenSize())).insertNodes(a, b);
      };
      _proto3.getShape = function getShape() {
        var a = L(this.anchor.key);
        null === a && q(21);
        var b = a.getIndexWithinParent();
        a = a.getParentOrThrow().getIndexWithinParent();
        var c = L(this.focus.key);
        null === c && q(22);
        var d = c.getIndexWithinParent();
        var e = c.getParentOrThrow().getIndexWithinParent();
        c = Math.min(b, d);
        b = Math.max(b, d);
        d = Math.min(a, e);
        a = Math.max(a, e);
        return {
          fromX: Math.min(c, b),
          fromY: Math.min(d, a),
          toX: Math.max(c, b),
          toY: Math.max(d, a),
        };
      };
      _proto3.getNodes = function getNodes() {
        var a = this._cachedNodes;
        if (null !== a) return a;
        a = new Set();
        var _this$getShape = this.getShape(),
          b = _this$getShape.fromX,
          c = _this$getShape.fromY,
          d = _this$getShape.toX,
          e = _this$getShape.toY;
        var f = L(this.gridKey);
        Gd(f) || q(23);
        a.add(f);
        f = f.getChildren();
        for (var k = c; k <= e; k++) {
          var g = f[k];
          a.add(g);
          Hd(g) || q(24);
          g = g.getChildren();
          for (var l = b; l <= d; l++) {
            var h = g[l];
            Id(h) || q(25);
            a.add(h);
            for (h = h.getChildren(); 0 < h.length; ) {
              var _h;
              var m = h.shift();
              a.add(m);
              F(m) && (_h = h).unshift.apply(_h, m.getChildren());
            }
          }
        }
        a = Array.from(a);
        Kb() || (this._cachedNodes = a);
        return a;
      };
      _proto3.getTextContent = function getTextContent() {
        var a = this.getNodes(),
          b = '';
        for (var c = 0; c < a.length; c++) {
          b += a[c].getTextContent();
        }
        return b;
      };
      return Dd;
    })();
    function Ed(a) {
      return a instanceof Dd;
    }
    var Cd = (function () {
      function Cd(a, b, c) {
        this.anchor = a;
        this.focus = b;
        this.dirty = !1;
        this.format = c;
        this._cachedNodes = null;
        a._selection = this;
        b._selection = this;
      }
      var _proto4 = Cd.prototype;
      _proto4.is = function is(a) {
        return C(a)
          ? this.anchor.is(a.anchor) &&
              this.focus.is(a.focus) &&
              this.format === a.format
          : !1;
      };
      _proto4.isBackward = function isBackward() {
        return this.focus.isBefore(this.anchor);
      };
      _proto4.isCollapsed = function isCollapsed() {
        return this.anchor.is(this.focus);
      };
      _proto4.getNodes = function getNodes() {
        var a = this._cachedNodes;
        if (null !== a) return a;
        var b = this.anchor,
          c = this.focus;
        a = b.getNode();
        var d = c.getNode();
        F(a) &&
          ((b = a.getDescendantByIndex(b.offset)), (a = null != b ? b : a));
        F(d) &&
          ((c = d.getDescendantByIndex(c.offset)), (d = null != c ? c : d));
        a = a.is(d)
          ? F(a) && 0 < a.getChildrenSize()
            ? []
            : [a]
          : a.getNodesBetween(d);
        Kb() || (this._cachedNodes = a);
        return a;
      };
      _proto4.setTextNodeRange = function setTextNodeRange(a, b, c, d) {
        Ad(this.anchor, a.__key, b, 'text');
        Ad(this.focus, c.__key, d, 'text');
        this._cachedNodes = null;
        this.dirty = !0;
      };
      _proto4.getTextContent = function getTextContent() {
        var a = this.getNodes();
        if (0 === a.length) return '';
        var b = a[0],
          c = a[a.length - 1],
          d = this.anchor.isBefore(this.focus),
          _Fd = Fd(this),
          e = _Fd[0],
          f = _Fd[1],
          g = '',
          h = !0;
        for (var k = 0; k < a.length; k++) {
          var l = a[k];
          if (F(l) && !l.isInline())
            h || (g += '\n'), (h = l.isEmpty() ? !1 : !0);
          else if (((h = !1), B(l))) {
            var m = l.getTextContent();
            l === b
              ? (m =
                  l === c
                    ? e < f
                      ? m.slice(e, f)
                      : m.slice(f, e)
                    : d
                    ? m.slice(e)
                    : m.slice(f))
              : l === c && (m = d ? m.slice(0, f) : m.slice(0, e));
            g += m;
          } else
            (!z(l) && !Eb(l)) ||
              (l === c && this.isCollapsed()) ||
              (g += l.getTextContent());
        }
        return g;
      };
      _proto4.applyDOMRange = function applyDOMRange(a) {
        var b = H(),
          c = b.getEditorState()._selection;
        a = Jd(
          a.startContainer,
          a.startOffset,
          a.endContainer,
          a.endOffset,
          b,
          c,
        );
        if (null !== a) {
          var _a = a,
            d = _a[0],
            e = _a[1];
          Ad(this.anchor, d.key, d.offset, d.type);
          Ad(this.focus, e.key, e.offset, e.type);
          this._cachedNodes = null;
        }
      };
      _proto4.clone = function clone() {
        var a = this.anchor,
          b = this.focus;
        return new Cd(
          new W(a.key, a.offset, a.type),
          new W(b.key, b.offset, b.type),
          this.format,
        );
      };
      _proto4.toggleFormat = function toggleFormat(a) {
        this.format = Cb(this.format, a, null);
        this.dirty = !0;
      };
      _proto4.hasFormat = function hasFormat(a) {
        return 0 !== (this.format & $a[a]);
      };
      _proto4.insertRawText = function insertRawText(a) {
        var b = a.split(/\r?\n/);
        if (1 === b.length) this.insertText(a);
        else {
          a = [];
          var c = b.length;
          for (var d = 0; d < c; d++) {
            var e = b[d];
            '' !== e && a.push(M(e));
            d !== c - 1 && a.push(Kd());
          }
          this.insertNodes(a);
        }
      };
      _proto4.insertText = function insertText(a) {
        var b = this.anchor,
          c = this.focus,
          d = this.isCollapsed() || b.isBefore(c),
          e = this.format;
        d && 'element' === b.type
          ? yd(b, c, e)
          : d || 'element' !== c.type || yd(c, b, e);
        var f = this.getNodes(),
          g = f.length,
          h = d ? c : b;
        c = (d ? b : c).offset;
        var k = h.offset;
        b = f[0];
        B(b) || q(26);
        d = b.getTextContent().length;
        var l = b.getParentOrThrow(),
          m = f[g - 1];
        if (
          this.isCollapsed() &&
          c === d &&
          (b.isSegmented() ||
            b.isToken() ||
            !b.canInsertTextAfter() ||
            (!l.canInsertTextAfter() && null === b.getNextSibling()))
        ) {
          var p = b.getNextSibling();
          if (!B(p) || Ab(p))
            (p = M()),
              p.setFormat(e),
              l.canInsertTextAfter() ? b.insertAfter(p) : l.insertAfter(p);
          p.select(0, 0);
          b = p;
          if ('' !== a) {
            this.insertText(a);
            return;
          }
        } else if (
          this.isCollapsed() &&
          0 === c &&
          (b.isSegmented() ||
            b.isToken() ||
            !b.canInsertTextBefore() ||
            (!l.canInsertTextBefore() && null === b.getPreviousSibling()))
        ) {
          p = b.getPreviousSibling();
          if (!B(p) || Ab(p))
            (p = M()),
              p.setFormat(e),
              l.canInsertTextBefore() ? b.insertBefore(p) : l.insertBefore(p);
          p.select();
          b = p;
          if ('' !== a) {
            this.insertText(a);
            return;
          }
        } else if (b.isSegmented() && c !== d)
          (l = M(b.getTextContent())), l.setFormat(e), b.replace(l), (b = l);
        else if (
          !(
            this.isCollapsed() ||
            '' === a ||
            ((p = m.getParent()),
            l.canInsertTextBefore() &&
              l.canInsertTextAfter() &&
              (!F(p) || (p.canInsertTextBefore() && p.canInsertTextAfter())))
          )
        ) {
          this.insertText('');
          Ld(this.anchor, this.focus, null);
          this.insertText(a);
          return;
        }
        if (1 === g) {
          if (b.isToken()) (a = M(a)), a.select(), b.replace(a);
          else {
            f = b.getFormat();
            if (c === k && f !== e)
              if ('' === b.getTextContent()) b.setFormat(e);
              else {
                var _b$splitText;
                f = M(a);
                f.setFormat(e);
                f.select();
                0 === c
                  ? b.insertBefore(f, !1)
                  : (((_b$splitText = b.splitText(c)),
                    (g = _b$splitText[0]),
                    _b$splitText),
                    g.insertAfter(f, !1));
                f.isComposing() &&
                  'text' === this.anchor.type &&
                  (this.anchor.offset -= a.length);
                return;
              }
            b = b.spliceText(c, k - c, a, !0);
            '' === b.getTextContent()
              ? b.remove()
              : 'text' === this.anchor.type &&
                (b.isComposing()
                  ? (this.anchor.offset -= a.length)
                  : (this.format = f));
          }
        } else {
          e = new Set([].concat(b.getParentKeys(), m.getParentKeys()));
          var n = F(b) ? b : b.getParentOrThrow();
          l = F(m) ? m : m.getParentOrThrow();
          p = m;
          if (!n.is(l) && l.isInline()) {
            do {
              (p = l), (l = l.getParentOrThrow());
            } while (l.isInline());
          }
          ('text' === h.type && (0 !== k || '' === m.getTextContent())) ||
          ('element' === h.type && m.getIndexWithinParent() < k)
            ? B(m) && !m.isToken() && k !== m.getTextContentSize()
              ? (m.isSegmented() &&
                  ((h = M(m.getTextContent())), m.replace(h), (m = h)),
                (m = m.spliceText(0, k, '')),
                e.add(m.__key))
              : ((h = m.getParentOrThrow()),
                h.canBeEmpty() || 1 !== h.getChildrenSize()
                  ? m.remove()
                  : h.remove())
            : e.add(m.__key);
          h = l.getChildren();
          k = new Set(f);
          m = n.is(l);
          n = n.isInline() && null === b.getNextSibling() ? n : b;
          for (var r = h.length - 1; 0 <= r; r--) {
            var w = h[r];
            if (w.is(b) || (F(w) && w.isParentOf(b))) break;
            w.isAttached() &&
              (!k.has(w) || w.is(p) ? m || n.insertAfter(w, !1) : w.remove());
          }
          if (!m)
            for (h = l, k = null; null !== h; ) {
              m = h.getChildren();
              l = m.length;
              if (0 === l || m[l - 1].is(k)) e['delete'](h.__key), (k = h);
              h = h.getParent();
            }
          b.isToken()
            ? c === d
              ? b.select()
              : ((a = M(a)), a.select(), b.replace(a))
            : ((b = b.spliceText(c, d - c, a, !0)),
              '' === b.getTextContent()
                ? b.remove()
                : b.isComposing() &&
                  'text' === this.anchor.type &&
                  (this.anchor.offset -= a.length));
          for (a = 1; a < g; a++) {
            (b = f[a]), e.has(b.__key) || b.remove();
          }
        }
      };
      _proto4.removeText = function removeText() {
        this.insertText('');
      };
      _proto4.formatText = function formatText(a) {
        if (this.isCollapsed()) this.toggleFormat(a), K(null);
        else {
          var b = this.getNodes(),
            c = [];
          for (
            var _iterator6 = b,
              _isArray6 = Array.isArray(_iterator6),
              _i6 = 0,
              _iterator6 = _isArray6
                ? _iterator6
                : _iterator6[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var _ref12;
            if (_isArray6) {
              if (_i6 >= _iterator6.length) break;
              _ref12 = _iterator6[_i6++];
            } else {
              _i6 = _iterator6.next();
              if (_i6.done) break;
              _ref12 = _i6.value;
            }
            var d = _ref12;
            B(d) && c.push(d);
          }
          var e = c.length;
          if (0 === e) this.toggleFormat(a), K(null);
          else {
            d = this.anchor;
            var f = this.focus,
              g = this.isBackward();
            b = g ? f : d;
            d = g ? d : f;
            var h = 0,
              k = c[0];
            f = 'element' === b.type ? 0 : b.offset;
            'text' === b.type &&
              f === k.getTextContentSize() &&
              ((h = 1), (k = c[1]), (f = 0));
            if (null != k) {
              g = k.getFormatFlags(a, null);
              var l = e - 1,
                m = c[l];
              e = 'text' === d.type ? d.offset : m.getTextContentSize();
              if (k.is(m))
                f !== e &&
                  (0 === f && e === k.getTextContentSize()
                    ? k.setFormat(g)
                    : ((a = k.splitText(f, e)),
                      (a = 0 === f ? a[0] : a[1]),
                      a.setFormat(g),
                      'text' === b.type && b.set(a.__key, 0, 'text'),
                      'text' === d.type && d.set(a.__key, e - f, 'text')),
                  (this.format = g));
              else {
                var _k$splitText, _m$splitText;
                0 !== f &&
                  (((_k$splitText = k.splitText(f)),
                  (k = _k$splitText[1]),
                  _k$splitText),
                  (f = 0));
                k.setFormat(g);
                var p = m.getFormatFlags(a, g);
                0 < e &&
                  (e !== m.getTextContentSize() &&
                    ((_m$splitText = m.splitText(e)),
                    (m = _m$splitText[0]),
                    _m$splitText),
                  m.setFormat(p));
                for (h += 1; h < l; h++) {
                  var n = c[h];
                  if (!n.isToken()) {
                    var r = n.getFormatFlags(a, p);
                    n.setFormat(r);
                  }
                }
                'text' === b.type && b.set(k.__key, f, 'text');
                'text' === d.type && d.set(m.__key, e, 'text');
                this.format = g | p;
              }
            }
          }
        }
      };
      _proto4.insertNodes = function insertNodes(a, b) {
        var _d;
        if (!this.isCollapsed()) {
          var c = this.isBackward() ? this.anchor : this.focus,
            d = c.getNode().getNextSibling();
          d = d ? d.getKey() : null;
          c = (c = c.getNode().getPreviousSibling()) ? c.getKey() : null;
          this.removeText();
          if (this.isCollapsed() && 'element' === this.focus.type) {
            if (this.focus.key === d && 0 === this.focus.offset) {
              var e = M();
              this.focus.getNode().insertBefore(e);
            } else
              this.focus.key === c &&
                this.focus.offset === this.focus.getNode().getChildrenSize() &&
                ((e = M()), this.focus.getNode().insertAfter(e));
            e &&
              (this.focus.set(e.__key, 0, 'text'),
              this.anchor.set(e.__key, 0, 'text'));
          }
        }
        d = this.anchor;
        c = d.offset;
        var f = d.getNode();
        e = f;
        'element' === d.type &&
          ((e = d.getNode()),
          (d = e.getChildAtIndex(c - 1)),
          (e = null === d ? e : d));
        d = [];
        var g = f.getNextSiblings(),
          h = fc(f) ? null : f.getTopLevelElementOrThrow();
        if (B(f))
          if (((e = f.getTextContent().length), 0 === c && 0 !== e))
            (e = f.getPreviousSibling()),
              (e = null !== e ? e : f.getParentOrThrow()),
              d.push(f);
          else if (c === e) e = f;
          else {
            if (f.isToken()) return !1;
            var _f$splitText = f.splitText(c);
            e = _f$splitText[0];
            f = _f$splitText[1];
            d.push(f);
          }
        f = e;
        (_d = d).push.apply(_d, g);
        g = a[0];
        var k = !1,
          l = null;
        for (var r = 0; r < a.length; r++) {
          var m = a[r];
          if (z(e) || !F(m) || m.isInline())
            k && !z(m) && fc(e.getParent()) && q(28);
          else {
            if (m.is(g)) {
              if (F(e) && e.isEmpty() && e.canReplaceWith(m)) {
                e.replace(m);
                e = m;
                k = !0;
                continue;
              }
              var p = m.getFirstDescendant();
              if (Db(p)) {
                for (p = p.getParentOrThrow(); p.isInline(); ) {
                  p = p.getParentOrThrow();
                }
                l = p.getChildren();
                k = l.length;
                if (F(e)) {
                  var n = e.getFirstChild();
                  for (var w = 0; w < k; w++) {
                    var y = l[w];
                    null === n ? e.append(y) : n.insertAfter(y);
                    n = y;
                  }
                } else {
                  for (n = k - 1; 0 <= n; n--) {
                    e.insertAfter(l[n]);
                  }
                  e = e.getParentOrThrow();
                }
                l = l[k - 1];
                p.remove();
                k = !0;
                if (p.is(m)) continue;
              }
            }
            B(e) && (null === h && q(27), (e = h));
          }
          k = !1;
          if (F(e) && !e.isInline()) {
            if (((l = m), z(m) && !m.isInline())) e = e.insertAfter(m, !1);
            else if (F(m)) {
              if (m.canBeEmpty() || !m.isEmpty())
                O(e)
                  ? ((p = e.getChildAtIndex(c)),
                    null !== p ? p.insertBefore(m) : e.append(m),
                    (e = m))
                  : (e = e.insertAfter(m, !1));
            } else
              (p = e.getFirstChild()),
                null !== p ? p.insertBefore(m) : e.append(m),
                (e = m);
          } else
            !F(m) || (F(m) && m.isInline()) || (z(e) && !e.isInline())
              ? ((l = m), (e = e.insertAfter(m, !1)))
              : ((m = e.getParentOrThrow()), Eb(e) && e.remove(), (e = m), r--);
        }
        b &&
          (B(f)
            ? f.select()
            : ((a = e.getPreviousSibling()),
              B(a)
                ? a.select()
                : ((a = e.getIndexWithinParent()),
                  e.getParentOrThrow().select(a, a))));
        if (F(e)) {
          if (
            ((a = B(l)
              ? l
              : F(l) && l.isInline()
              ? l.getLastDescendant()
              : e.getLastDescendant()),
            b ||
              (null === a
                ? e.select()
                : B(a)
                ? '' === a.getTextContent()
                  ? a.selectPrevious()
                  : a.select()
                : a.selectNext()),
            0 !== d.length)
          )
            for (b = e, a = d.length - 1; 0 <= a; a--) {
              (c = d[a]),
                (h = c.getParentOrThrow()),
                !F(e) || Md(c) || (z(c) && (!c.isInline() || c.isIsolated()))
                  ? F(e) || Md(c)
                    ? F(c) && !c.canInsertAfter(e)
                      ? ((f = h.constructor.clone(h)),
                        F(f) || q(29),
                        f.append(c),
                        e.insertAfter(f))
                      : e.insertAfter(c)
                    : (e.insertBefore(c), (e = c))
                  : (b === e ? e.append(c) : e.insertBefore(c), (e = c)),
                h.isEmpty() && !h.canBeEmpty() && h.remove();
            }
        } else
          b ||
            (B(e)
              ? e.select()
              : ((b = e.getParentOrThrow()),
                (a = e.getIndexWithinParent() + 1),
                b.select(a, a)));
        return !0;
      };
      _proto4.insertParagraph = function insertParagraph() {
        this.isCollapsed() || this.removeText();
        var a = this.anchor,
          b = a.offset,
          c = [];
        if ('text' === a.type) {
          var _d$splitText;
          var d = a.getNode();
          var e = d.getNextSiblings().reverse();
          var f = d.getParentOrThrow();
          var g = f.isInline(),
            h = g ? f.getTextContentSize() : d.getTextContentSize();
          0 === b
            ? e.push(d)
            : (g && (c = f.getNextSiblings()),
              b === h ||
                (g && b === d.getTextContentSize()) ||
                (((_d$splitText = d.splitText(b)),
                (d = _d$splitText[1]),
                _d$splitText),
                e.push(d)));
        } else {
          f = a.getNode();
          if (fc(f)) {
            e = zd();
            c = f.getChildAtIndex(b);
            e.select();
            null !== c ? c.insertBefore(e, !1) : f.append(e);
            return;
          }
          e = f.getChildren().slice(b).reverse();
        }
        d = e.length;
        if (0 === b && 0 < d && f.isInline()) {
          if (
            ((c = f.getParentOrThrow()), (e = c.insertNewAfter(this, !1)), F(e))
          )
            for (c = c.getChildren(), f = 0; f < c.length; f++) {
              e.append(c[f]);
            }
        } else if (((g = f.insertNewAfter(this, !1)), null === g))
          this.insertLineBreak();
        else if (F(g))
          if (
            ((h = f.getFirstChild()),
            0 === b && (f.is(a.getNode()) || (h && h.is(a.getNode()))) && 0 < d)
          )
            f.insertBefore(g);
          else {
            f = null;
            b = c.length;
            a = g.getParentOrThrow();
            if (0 < b)
              for (h = 0; h < b; h++) {
                a.append(c[h]);
              }
            if (0 !== d)
              for (c = 0; c < d; c++) {
                (b = e[c]),
                  null === f ? g.append(b) : f.insertBefore(b),
                  (f = b);
              }
            g.canBeEmpty() || 0 !== g.getChildrenSize()
              ? g.selectStart()
              : (g.selectPrevious(), g.remove());
          }
      };
      _proto4.insertLineBreak = function insertLineBreak(a) {
        var b = Kd();
        var c = this.anchor;
        'element' === c.type &&
          ((c = c.getNode()), O(c) && this.insertParagraph());
        a
          ? this.insertNodes([b], !0)
          : this.insertNodes([b]) && b.selectNext(0, 0);
      };
      _proto4.getCharacterOffsets = function getCharacterOffsets() {
        return Fd(this);
      };
      _proto4.extract = function extract() {
        var _f$splitText2, _g$splitText;
        var a = this.getNodes(),
          b = a.length,
          c = b - 1,
          d = this.anchor;
        var e = this.focus;
        var f = a[0];
        var g = a[c],
          _Fd2 = Fd(this),
          h = _Fd2[0],
          k = _Fd2[1];
        if (0 === b) return [];
        if (1 === b)
          return B(f) && !this.isCollapsed()
            ? ((a = h > k ? k : h),
              (c = f.splitText(a, h > k ? h : k)),
              (a = 0 === a ? c[0] : c[1]),
              null != a ? [a] : [])
            : [f];
        b = d.isBefore(e);
        B(f) &&
          ((d = b ? h : k),
          d === f.getTextContentSize()
            ? a.shift()
            : 0 !== d &&
              (((_f$splitText2 = f.splitText(d)),
              (f = _f$splitText2[1]),
              _f$splitText2),
              (a[0] = f)));
        B(g) &&
          ((f = g.getTextContent().length),
          (b = b ? k : h),
          0 === b
            ? a.pop()
            : b !== f &&
              (((_g$splitText = g.splitText(b)),
              (g = _g$splitText[0]),
              _g$splitText),
              (a[c] = g)));
        return a;
      };
      _proto4.modify = function modify(a, b, c) {
        var d = this.focus,
          e = this.anchor,
          f = 'move' === a,
          g = Zb(d, b);
        if (z(g) && !g.isIsolated())
          f && g.isKeyboardSelectable()
            ? ((b = Nd()), b.add(g.__key), ob(b))
            : ((a = b ? g.getPreviousSibling() : g.getNextSibling()),
              B(a)
                ? ((g = a.__key),
                  (b = b ? a.getTextContent().length : 0),
                  d.set(g, b, 'text'),
                  f && e.set(g, b, 'text'))
                : ((c = g.getParentOrThrow()),
                  F(a)
                    ? ((c = a.__key), (g = b ? a.getChildrenSize() : 0))
                    : ((g = g.getIndexWithinParent()), (c = c.__key), b || g++),
                  d.set(c, g, 'element'),
                  f && e.set(c, g, 'element')));
        else if (((e = H()), (d = E(e._window)))) {
          var h = e._blockCursorElement,
            k = e._rootElement;
          null === k ||
            null === h ||
            !F(g) ||
            g.isInline() ||
            g.canBeEmpty() ||
            kc(h, e, k);
          d.modify(a, b ? 'backward' : 'forward', c);
          if (
            0 < d.rangeCount &&
            ((g = d.getRangeAt(0)),
            (e = this.anchor.getNode()),
            (e = O(e) ? e : ec(e)),
            this.applyDOMRange(g),
            (this.dirty = !0),
            !f)
          ) {
            f = this.getNodes();
            a = [];
            c = !1;
            for (h = 0; h < f.length; h++) {
              (k = f[h]), dc(k, e) ? a.push(k) : (c = !0);
            }
            c &&
              0 < a.length &&
              (b
                ? ((b = a[0]),
                  F(b) ? b.selectStart() : b.getParentOrThrow().selectStart())
                : ((b = a[a.length - 1]),
                  F(b) ? b.selectEnd() : b.getParentOrThrow().selectEnd()));
            if (
              d.anchorNode !== g.startContainer ||
              d.anchorOffset !== g.startOffset
            )
              (b = this.focus),
                (f = this.anchor),
                (d = f.key),
                (g = f.offset),
                (e = f.type),
                Ad(f, b.key, b.offset, b.type),
                Ad(b, d, g, e),
                (this._cachedNodes = null);
          }
        }
      };
      _proto4.deleteCharacter = function deleteCharacter(a) {
        if (this.isCollapsed()) {
          var b = this.anchor,
            c = this.focus,
            d = b.getNode();
          if (
            !a &&
            (('element' === b.type &&
              F(d) &&
              b.offset === d.getChildrenSize()) ||
              ('text' === b.type && b.offset === d.getTextContentSize()))
          ) {
            var e = d.getParent();
            e = d.getNextSibling() || (null === e ? null : e.getNextSibling());
            if (F(e) && !e.canExtractContents()) return;
          }
          e = Zb(c, a);
          if (z(e) && !e.isIsolated()) {
            e.isKeyboardSelectable() && F(d) && 0 === d.getChildrenSize()
              ? (d.remove(), (a = Nd()), a.add(e.__key), ob(a))
              : e.remove();
            return;
          }
          this.modify('extend', a, 'character');
          if (!this.isCollapsed()) {
            e = 'text' === c.type ? c.getNode() : null;
            d = 'text' === b.type ? b.getNode() : null;
            if (null !== e && e.isSegmented()) {
              if (
                ((b = c.offset),
                (c = e.getTextContentSize()),
                e.is(d) || (a && b !== c) || (!a && 0 !== b))
              ) {
                Od(e, a, b);
                return;
              }
            } else if (
              null !== d &&
              d.isSegmented() &&
              ((b = b.offset),
              (c = d.getTextContentSize()),
              d.is(e) || (a && 0 !== b) || (!a && b !== c))
            ) {
              Od(d, a, b);
              return;
            }
            d = this.anchor;
            e = this.focus;
            b = d.getNode();
            c = e.getNode();
            if (b === c && 'text' === d.type && 'text' === e.type) {
              var f = d.offset,
                g = e.offset;
              var h = f < g;
              c = h ? f : g;
              g = h ? g : f;
              f = g - 1;
              c !== f &&
                ((b = b.getTextContent().slice(c, g)),
                Qb(b) || (a ? (e.offset = f) : (d.offset = f)));
            }
          } else if (
            a &&
            0 === b.offset &&
            ('element' === b.type
              ? b.getNode()
              : b.getNode().getParentOrThrow()
            ).collapseAtStart(this)
          )
            return;
        }
        this.removeText();
      };
      _proto4.deleteLine = function deleteLine(a) {
        this.isCollapsed() &&
          ('text' === this.anchor.type &&
            this.modify('extend', a, 'lineboundary'),
          0 === (a ? this.focus : this.anchor).offset &&
            this.modify('extend', a, 'character'));
        this.removeText();
      };
      _proto4.deleteWord = function deleteWord(a) {
        this.isCollapsed() && this.modify('extend', a, 'word');
        this.removeText();
      };
      return Cd;
    })();
    function pd(a) {
      return a instanceof Bd;
    }
    function Pd(a) {
      var b = a.offset;
      if ('text' === a.type) return b;
      a = a.getNode();
      return b === a.getChildrenSize() ? a.getTextContent().length : 0;
    }
    function Fd(a) {
      var b = a.anchor;
      a = a.focus;
      return 'element' === b.type &&
        'element' === a.type &&
        b.key === a.key &&
        b.offset === a.offset
        ? [0, 0]
        : [Pd(b), Pd(a)];
    }
    function Od(a, b, c) {
      var d = a.getTextContent().split(/(?=\s)/g),
        e = d.length,
        f = 0,
        g = 0;
      for (var h = 0; h < e; h++) {
        var k = d[h],
          l = h === e - 1;
        g = f;
        f += k.length;
        if ((b && f === c) || f > c || l) {
          d.splice(h, 1);
          l && (g = void 0);
          break;
        }
      }
      b = d.join('').trim();
      '' === b ? a.remove() : (a.setTextContent(b), a.select(g, g));
    }
    function Qd(a, b, c, d) {
      var e = b;
      if (1 === a.nodeType) {
        var h = !1;
        var f = a.childNodes,
          g = f.length;
        e === g && ((h = !0), (e = g - 1));
        var k = f[e];
        g = !1;
        k === d._blockCursorElement
          ? ((k = f[e + 1]), (g = !0))
          : null !== d._blockCursorElement && e--;
        d = Pb(k);
        if (B(d)) e = h ? d.getTextContentSize() : 0;
        else {
          f = Pb(a);
          if (null === f) return null;
          if (F(f)) {
            a = f.getChildAtIndex(e);
            if ((b = F(a)))
              (b = a.getParent()),
                (b =
                  null === c ||
                  null === b ||
                  !b.canBeEmpty() ||
                  b !== c.getNode());
            b &&
              ((c = h ? a.getLastDescendant() : a.getFirstDescendant()),
              null === c
                ? ((f = a), (e = 0))
                : ((a = c), (f = F(a) ? a : a.getParentOrThrow())));
            B(a)
              ? ((d = a), (f = null), (e = h ? a.getTextContentSize() : 0))
              : a !== f && h && !g && e++;
          } else
            (e = f.getIndexWithinParent()),
              (e = 0 === b && z(f) && Pb(a) === f ? e : e + 1),
              (f = f.getParentOrThrow());
          if (F(f)) return new W(f.__key, e, 'element');
        }
      } else d = Pb(a);
      return B(d) ? new W(d.__key, e, 'text') : null;
    }
    function Rd(a, b, c) {
      var d = a.offset,
        e = a.getNode();
      0 === d
        ? ((d = e.getPreviousSibling()), (e = e.getParent()), b)
          ? (c || !b) &&
            null === d &&
            F(e) &&
            e.isInline() &&
            ((b = e.getPreviousSibling()),
            B(b) && ((a.key = b.__key), (a.offset = b.getTextContent().length)))
          : F(d) && !c && d.isInline()
          ? ((a.key = d.__key),
            (a.offset = d.getChildrenSize()),
            (a.type = 'element'))
          : B(d) && ((a.key = d.__key), (a.offset = d.getTextContent().length))
        : d === e.getTextContent().length &&
          ((d = e.getNextSibling()),
          (e = e.getParent()),
          b && F(d) && d.isInline()
            ? ((a.key = d.__key), (a.offset = 0), (a.type = 'element'))
            : (c || b) &&
              null === d &&
              F(e) &&
              e.isInline() &&
              !e.canInsertTextAfter() &&
              ((b = e.getNextSibling()),
              B(b) && ((a.key = b.__key), (a.offset = 0))));
    }
    function Ld(a, b, c) {
      if ('text' === a.type && 'text' === b.type) {
        var d = a.isBefore(b);
        var e = a.is(b);
        Rd(a, d, e);
        Rd(b, !d, e);
        e && ((b.key = a.key), (b.offset = a.offset), (b.type = a.type));
        d = H();
        d.isComposing() &&
          d._compositionKey !== a.key &&
          C(c) &&
          ((d = c.anchor),
          (c = c.focus),
          Ad(a, d.key, d.offset, d.type),
          Ad(b, c.key, c.offset, c.type));
      }
    }
    function Jd(a, b, c, d, e, f) {
      if (null === a || null === c || !xb(e, a, c)) return null;
      b = Qd(a, b, C(f) ? f.anchor : null, e);
      if (null === b) return null;
      d = Qd(c, d, C(f) ? f.focus : null, e);
      if (
        null === d ||
        ('element' === b.type &&
          'element' === d.type &&
          ((a = Pb(a)), (c = Pb(c)), z(a) && z(c)))
      )
        return null;
      Ld(b, d, f);
      return [b, d];
    }
    function Md(a) {
      return F(a) && !a.isInline();
    }
    function Sd(a, b, c, d, e, f) {
      var g = I();
      a = new Cd(new W(a, b, e), new W(c, d, f), 0);
      a.dirty = !0;
      return (g._selection = a);
    }
    function Nd() {
      return new Bd(new Set());
    }
    function Td(a) {
      var b = a.getEditorState()._selection,
        c = E(a._window);
      return pd(b) || Ed(b) ? b.clone() : td(b, c, a);
    }
    function td(a, b, c) {
      var d = c._window;
      if (null === d) return null;
      var e = d.event,
        f = e ? e.type : void 0;
      d = 'selectionchange' === f;
      e =
        !fb &&
        (d ||
          'beforeinput' === f ||
          'compositionstart' === f ||
          'compositionend' === f ||
          ('click' === f && e && 3 === e.detail) ||
          'drop' === f ||
          void 0 === f);
      var g;
      if (!C(a) || e) {
        if (null === b) return null;
        e = b.anchorNode;
        f = b.focusNode;
        g = b.anchorOffset;
        b = b.focusOffset;
        if (d && C(a) && !xb(c, e, f)) return a.clone();
      } else return a.clone();
      c = Jd(e, g, f, b, c, a);
      if (null === c) return null;
      var _c = c,
        h = _c[0],
        k = _c[1];
      return new Cd(h, k, C(a) ? a.format : 0);
    }
    function u() {
      return I()._selection;
    }
    function Ub() {
      return H()._editorState._selection;
    }
    function Ud(a, b, c, d) {
      if (d === void 0) {
        d = 1;
      }
      var e = a.anchor,
        f = a.focus,
        g = e.getNode(),
        h = f.getNode();
      if (b.is(g) || b.is(h))
        if (((g = b.__key), a.isCollapsed()))
          (b = e.offset),
            c <= b &&
              ((c = Math.max(0, b + d)),
              e.set(g, c, 'element'),
              f.set(g, c, 'element'),
              Vd(a));
        else {
          var k = a.isBackward();
          h = k ? f : e;
          var l = h.getNode();
          e = k ? e : f;
          f = e.getNode();
          b.is(l) &&
            ((l = h.offset), c <= l && h.set(g, Math.max(0, l + d), 'element'));
          b.is(f) &&
            ((b = e.offset), c <= b && e.set(g, Math.max(0, b + d), 'element'));
          Vd(a);
        }
    }
    function Vd(a) {
      var b = a.anchor,
        c = b.offset;
      var d = a.focus;
      var e = d.offset,
        f = b.getNode(),
        g = d.getNode();
      if (a.isCollapsed())
        F(f) &&
          ((g = f.getChildrenSize()),
          (g = (e = c >= g) ? f.getChildAtIndex(g - 1) : f.getChildAtIndex(c)),
          B(g) &&
            ((c = 0),
            e && (c = g.getTextContentSize()),
            b.set(g.__key, c, 'text'),
            d.set(g.__key, c, 'text')));
      else {
        if (F(f)) {
          var h = f.getChildrenSize();
          c = (a = c >= h) ? f.getChildAtIndex(h - 1) : f.getChildAtIndex(c);
          B(c) &&
            ((f = 0),
            a && (f = c.getTextContentSize()),
            b.set(c.__key, f, 'text'));
        }
        F(g) &&
          ((c = g.getChildrenSize()),
          (e = (b = e >= c) ? g.getChildAtIndex(c - 1) : g.getChildAtIndex(e)),
          B(e) &&
            ((g = 0),
            b && (g = e.getTextContentSize()),
            d.set(e.__key, g, 'text')));
      }
    }
    function Wd(a, b) {
      b = b.getEditorState()._selection;
      a = a._selection;
      if (C(a)) {
        var c = a.anchor;
        var d = a.focus,
          e;
        'text' === c.type && ((e = c.getNode()), e.selectionTransform(b, a));
        'text' === d.type &&
          ((c = d.getNode()), e !== c && c.selectionTransform(b, a));
      }
    }
    function Xd(a, b, c, d, e) {
      var f = null,
        g = 0,
        h = null;
      null !== d
        ? ((f = d.__key),
          B(d)
            ? ((g = d.getTextContentSize()), (h = 'text'))
            : F(d) && ((g = d.getChildrenSize()), (h = 'element')))
        : null !== e &&
          ((f = e.__key), B(e) ? (h = 'text') : F(e) && (h = 'element'));
      null !== f && null !== h
        ? a.set(f, g, h)
        : ((g = b.getIndexWithinParent()),
          -1 === g && (g = c.getChildrenSize()),
          a.set(c.__key, g, 'element'));
    }
    function Yd(a, b, c, d, e) {
      'text' === a.type
        ? ((a.key = c), b || (a.offset += e))
        : a.offset > d.getIndexWithinParent() && --a.offset;
    }
    function Zd(a, b, c, d, e, f, g) {
      var h = d.anchorNode,
        k = d.focusNode,
        l = d.anchorOffset,
        m = d.focusOffset,
        p = document.activeElement;
      if (!((e.has('collaboration') && p !== f) || (null !== p && wb(p))))
        if (C(b)) {
          var n = b.anchor,
            r = b.focus,
            w = n.key,
            y = r.key,
            x = ac(c, w);
          y = ac(c, y);
          var A = n.offset,
            U = r.offset,
            J = b.format,
            da = b.isCollapsed(),
            N = x,
            D = y,
            aa = !1;
          'text' === n.type &&
            ((N = Bb(x)), (aa = n.getNode().getFormat() !== J));
          'text' === r.type && (D = Bb(y));
          if (null !== N && null !== D) {
            da &&
              (null === a || aa || (C(a) && a.format !== J)) &&
              vd(J, A, w, performance.now());
            if (
              l === A &&
              m === U &&
              h === N &&
              k === D &&
              ('Range' !== d.type || !da) &&
              ((null !== p && f.contains(p)) || f.focus({ preventScroll: !0 }),
              'element' !== n.type)
            )
              return;
            if (!e.has('skip-scroll-into-view'))
              try {
                Ta && 1000 < g
                  ? window.requestAnimationFrame(function () {
                      return d.setBaseAndExtent(N, A, D, U);
                    })
                  : d.setBaseAndExtent(N, A, D, U);
              } catch (Ua) {}
            !e.has('skip-scroll-into-view') &&
              b.isCollapsed() &&
              null !== f &&
              f === document.activeElement &&
              ((a =
                b instanceof Cd && 'element' === b.anchor.type
                  ? N.childNodes[A] || null
                  : 0 < d.rangeCount
                  ? d.getRangeAt(0)
                  : null),
              null !== a && ((a = a.getBoundingClientRect()), bc(c, a, f)));
            ed = !0;
          }
        } else null !== a && xb(c, h, k) && d.removeAllRanges();
    }
    var X = null,
      Y = null,
      Z = !1,
      $d = !1,
      Gb = 0,
      ae = { characterData: !0, childList: !0, subtree: !0 };
    function Kb() {
      return Z || (null !== X && X._readOnly);
    }
    function G() {
      Z && q(13);
    }
    function I() {
      null === X && q(15);
      return X;
    }
    function H() {
      null === Y && q(16);
      return Y;
    }
    function be(a, b, c) {
      var d = b.__type;
      var e = a._nodes.get(d);
      void 0 === e && q(30);
      a = c.get(d);
      void 0 === a && ((a = Array.from(e.transforms)), c.set(d, a));
      c = a.length;
      for (d = 0; d < c && (a[d](b), b.isAttached()); d++) {}
    }
    function ce(a, b) {
      b = b._dirtyLeaves;
      a = a._nodeMap;
      for (
        var _iterator7 = b,
          _isArray7 = Array.isArray(_iterator7),
          _i7 = 0,
          _iterator7 = _isArray7
            ? _iterator7
            : _iterator7[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var _ref13;
        if (_isArray7) {
          if (_i7 >= _iterator7.length) break;
          _ref13 = _iterator7[_i7++];
        } else {
          _i7 = _iterator7.next();
          if (_i7.done) break;
          _ref13 = _i7.value;
        }
        var c = _ref13;
        (b = a.get(c)),
          B(b) &&
            b.isAttached() &&
            b.isSimpleText() &&
            !b.isUnmergeable() &&
            pc(b);
      }
    }
    function de(a, b) {
      var c = b._dirtyLeaves,
        d = b._dirtyElements;
      a = a._nodeMap;
      var e = Jb(),
        f = new Map();
      var g = c;
      var h = g.size;
      for (var k = d, l = k.size; 0 < h || 0 < l; ) {
        if (0 < h) {
          b._dirtyLeaves = new Set();
          for (
            var _iterator8 = g,
              _isArray8 = Array.isArray(_iterator8),
              _i8 = 0,
              _iterator8 = _isArray8
                ? _iterator8
                : _iterator8[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var _ref14;
            if (_isArray8) {
              if (_i8 >= _iterator8.length) break;
              _ref14 = _iterator8[_i8++];
            } else {
              _i8 = _iterator8.next();
              if (_i8.done) break;
              _ref14 = _i8.value;
            }
            var m = _ref14;
            (g = a.get(m)),
              B(g) &&
                g.isAttached() &&
                g.isSimpleText() &&
                !g.isUnmergeable() &&
                pc(g),
              void 0 !== g &&
                void 0 !== g &&
                g.__key !== e &&
                g.isAttached() &&
                be(b, g, f),
              c.add(m);
          }
          g = b._dirtyLeaves;
          h = g.size;
          if (0 < h) {
            Gb++;
            continue;
          }
        }
        b._dirtyLeaves = new Set();
        b._dirtyElements = new Map();
        for (
          var _iterator9 = k,
            _isArray9 = Array.isArray(_iterator9),
            _i9 = 0,
            _iterator9 = _isArray9
              ? _iterator9
              : _iterator9[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var _ref15;
          if (_isArray9) {
            if (_i9 >= _iterator9.length) break;
            _ref15 = _iterator9[_i9++];
          } else {
            _i9 = _iterator9.next();
            if (_i9.done) break;
            _ref15 = _i9.value;
          }
          var _m = _ref15;
          if (((k = _m[0]), (l = _m[1]), 'root' === k || l))
            (g = a.get(k)),
              void 0 !== g &&
                void 0 !== g &&
                g.__key !== e &&
                g.isAttached() &&
                be(b, g, f),
              d.set(k, l);
        }
        g = b._dirtyLeaves;
        h = g.size;
        k = b._dirtyElements;
        l = k.size;
        Gb++;
      }
      b._dirtyLeaves = c;
      b._dirtyElements = d;
    }
    function ee(a, b) {
      var c = b.get(a.type);
      void 0 === c && q(17);
      c = c.klass;
      a.type !== c.getType() && q(18);
      c = c.importJSON(a);
      a = a.children;
      if (F(c) && Array.isArray(a))
        for (var d = 0; d < a.length; d++) {
          var e = ee(a[d], b);
          c.append(e);
        }
      return c;
    }
    function fe(a, b) {
      var c = X,
        d = Z,
        e = Y;
      X = a;
      Z = !0;
      Y = null;
      try {
        return b();
      } finally {
        (X = c), (Z = d), (Y = e);
      }
    }
    function ge(a) {
      var b = a._pendingEditorState,
        c = a._rootElement,
        d = a._headless || null === c;
      if (null !== b) {
        var e = a._editorState,
          f = e._selection,
          g = b._selection,
          h = 0 !== a._dirtyType,
          k = X,
          l = Z,
          m = Y,
          p = a._updating,
          n = a._observer,
          r = null;
        a._pendingEditorState = null;
        a._editorState = b;
        if (!d && h && null !== n) {
          Y = a;
          X = b;
          Z = !1;
          a._updating = !0;
          try {
            var w = a._dirtyType,
              y = a._dirtyElements,
              x = a._dirtyLeaves;
            n.disconnect();
            Q = R = P = '';
            uc = 2 === w;
            xc = null;
            S = a;
            sc = a._config;
            tc = a._nodes;
            wc = S._listeners.mutation;
            yc = y;
            zc = x;
            Ac = e._nodeMap;
            Bc = b._nodeMap;
            vc = b._readOnly;
            Cc = new Map(a._keyToDOMMap);
            var A = new Map();
            Dc = A;
            Rc('root', null);
            Dc = Cc = sc = Bc = Ac = zc = yc = tc = S = void 0;
            r = A;
          } catch (D) {
            D instanceof Error && a._onError(D);
            if ($d) throw D;
            he(a, null, c, b);
            rb(a);
            a._dirtyType = 2;
            $d = !0;
            ge(a);
            $d = !1;
            return;
          } finally {
            n.observe(c, ae), (a._updating = p), (X = k), (Z = l), (Y = m);
          }
        }
        b._readOnly || (b._readOnly = !0);
        p = a._dirtyLeaves;
        A = a._dirtyElements;
        w = a._normalizedNodes;
        x = a._updateTags;
        l = a._deferred;
        y = b._nodeMap.size;
        h &&
          ((a._dirtyType = 0),
          a._cloneNotNeeded.clear(),
          (a._dirtyLeaves = new Set()),
          (a._dirtyElements = new Map()),
          (a._normalizedNodes = new Set()),
          (a._updateTags = new Set()));
        var U = a._decorators,
          J = a._pendingDecorators || U,
          da = b._nodeMap,
          N;
        for (N in J) {
          da.has(N) || (J === U && (J = Lb(a)), delete J[N]);
        }
        d = d ? null : E(a._window);
        if (a._editable && null !== d && (h || null === g || g.dirty)) {
          Y = a;
          X = b;
          try {
            null !== n && n.disconnect();
            if (h || null === g || g.dirty) {
              var D = a._blockCursorElement;
              null !== D && kc(D, a, c);
              Zd(f, g, a, d, x, c, y);
            }
            a: {
              var _D = a._blockCursorElement;
              if (
                C(g) &&
                g.isCollapsed() &&
                'element' === g.anchor.type &&
                c.contains(document.activeElement)
              ) {
                var aa = g.anchor,
                  Ua = aa.getNode(),
                  jc = aa.offset,
                  Ge = Ua.getChildrenSize();
                f = !1;
                g = null;
                if (jc === Ge) {
                  var la = Ua.getChildAtIndex(jc - 1);
                  ic(la) && (f = !0);
                } else {
                  var _la = Ua.getChildAtIndex(jc);
                  if (ic(_la)) {
                    var Va = _la.getPreviousSibling();
                    if (null === Va || ic(Va))
                      (f = !0), (g = a.getElementByKey(_la.__key));
                  }
                }
                if (f) {
                  var _la2 = a.getElementByKey(Ua.__key);
                  if (null === _D) {
                    var _Va = a._config.theme,
                      tb = document.createElement('div');
                    tb.contentEditable = 'false';
                    tb.setAttribute('data-lexical-cursor', 'true');
                    var Ca = _Va.blockCursor;
                    if (void 0 !== Ca) {
                      var _tb$classList;
                      if ('string' === typeof Ca) {
                        var He = Ca.split(' ');
                        Ca = _Va.blockCursor = He;
                      }
                      void 0 !== Ca &&
                        (_tb$classList = tb.classList).add.apply(
                          _tb$classList,
                          Ca,
                        );
                    }
                    a._blockCursorElement = _D = tb;
                  }
                  c.style.caretColor = 'transparent';
                  null === g ? _la2.appendChild(_D) : _la2.insertBefore(_D, g);
                  break a;
                }
              }
              null !== _D && kc(_D, a, c);
            }
            null !== n && n.observe(c, ae);
          } finally {
            (Y = m), (X = k);
          }
        }
        if (null !== r)
          for (
            c = r, k = Array.from(a._listeners.mutation), m = k.length, n = 0;
            n < m;
            n++
          ) {
            var _k$n = k[n],
              _D2 = _k$n[0],
              _aa = _k$n[1];
            r = c.get(_aa);
            void 0 !== r && _D2(r, { dirtyLeaves: p, updateTags: x });
          }
        c = a._pendingDecorators;
        null !== c &&
          ((a._decorators = c),
          (a._pendingDecorators = null),
          ie('decorator', a, !0, c));
        c = Mb(e);
        k = Mb(b);
        c !== k && ie('textcontent', a, !0, k);
        ie('update', a, !0, {
          dirtyElements: A,
          dirtyLeaves: p,
          editorState: b,
          normalizedNodes: w,
          prevEditorState: e,
          tags: x,
        });
        a._deferred = [];
        if (0 !== l.length) {
          b = a._updating;
          a._updating = !0;
          try {
            for (e = 0; e < l.length; e++) {
              l[e]();
            }
          } finally {
            a._updating = b;
          }
        }
        b = a._updates;
        if (0 !== b.length && (b = b.shift())) {
          var _b4 = b,
            _D3 = _b4[0],
            _aa2 = _b4[1];
          je(a, _D3, _aa2);
        }
      }
    }
    function ie(a, b, c) {
      var e = b._updating;
      b._updating = c;
      try {
        var f = Array.from(b._listeners[a]);
        for (
          var _len = arguments.length,
            d = new Array(_len > 3 ? _len - 3 : 0),
            _key = 3;
          _key < _len;
          _key++
        ) {
          d[_key - 3] = arguments[_key];
        }
        for (a = 0; a < f.length; a++) {
          f[a].apply(null, d);
        }
      } finally {
        b._updating = e;
      }
    }
    function V(a, b, c) {
      if (!1 === a._updating || Y !== a) {
        var f = !1;
        a.update(function () {
          f = V(a, b, c);
        });
        return f;
      }
      var d = Rb(a);
      for (var _f = 4; 0 <= _f; _f--) {
        for (var g = 0; g < d.length; g++) {
          var e = d[g]._commands.get(b);
          if (void 0 !== e && ((e = e[_f]), void 0 !== e)) {
            e = Array.from(e);
            var h = e.length;
            for (var k = 0; k < h; k++) {
              if (!0 === e[k](c, a)) return !0;
            }
          }
        }
      }
      return !1;
    }
    function ke(a, b) {
      var c = a._updates;
      for (b = b || !1; 0 !== c.length; ) {
        var d = c.shift();
        if (d) {
          var _d2 = d,
            e = _d2[0],
            f = _d2[1],
            g = void 0;
          void 0 !== f &&
            ((d = f.onUpdate),
            (g = f.tag),
            f.skipTransforms && (b = !0),
            d && a._deferred.push(d),
            g && a._updateTags.add(g));
          e();
        }
      }
      return b;
    }
    function je(a, b, c) {
      var d = a._updateTags;
      var e,
        f = (e = !1);
      if (void 0 !== c) {
        var g = c.onUpdate;
        e = c.tag;
        null != e && d.add(e);
        e = c.skipTransforms || !1;
        f = c.discrete || !1;
      }
      g && a._deferred.push(g);
      var h = a._editorState;
      c = a._pendingEditorState;
      g = !1;
      if (null === c || c._readOnly)
        (c = a._pendingEditorState = new le(new Map((c || h)._nodeMap))),
          (g = !0);
      c._flushSync = f;
      f = X;
      var k = Z,
        l = Y,
        m = a._updating;
      X = c;
      Z = !1;
      a._updating = !0;
      Y = a;
      try {
        g &&
          (a._headless
            ? null != h._selection && (c._selection = h._selection.clone())
            : (c._selection = Td(a)));
        var p = a._compositionKey;
        b();
        e = ke(a, e);
        Wd(c, a);
        0 !== a._dirtyType &&
          (e ? ce(c, a) : de(c, a),
          ke(a),
          mc(h, c, a._dirtyLeaves, a._dirtyElements));
        p !== a._compositionKey && (c._flushSync = !0);
        var n = c._selection;
        if (C(n)) {
          var r = c._nodeMap,
            w = n.focus.key;
          (void 0 !== r.get(n.anchor.key) && void 0 !== r.get(w)) || q(19);
        } else pd(n) && 0 === n._nodes.size && (c._selection = null);
      } catch (p) {
        p instanceof Error && a._onError(p);
        a._pendingEditorState = h;
        a._dirtyType = 2;
        a._cloneNotNeeded.clear();
        a._dirtyLeaves = new Set();
        a._dirtyElements.clear();
        ge(a);
        return;
      } finally {
        (X = f), (Z = k), (Y = l), (a._updating = m), (Gb = 0);
      }
      b = null !== a._window ? window.event : null;
      b = null != b ? b.type : null;
      0 !== a._dirtyType ||
      me(c, a) ||
      (null !== a._blockCursorElement && 'blur' === b)
        ? c._flushSync
          ? ((c._flushSync = !1), ge(a))
          : g &&
            vb(function () {
              ge(a);
            })
        : ((c._flushSync = !1),
          g && (d.clear(), (a._deferred = []), (a._pendingEditorState = null)));
    }
    function v(a, b, c) {
      a._updating ? a._updates.push([b, c]) : je(a, b, c);
    }
    function ne(a, b, c) {
      G();
      var d = a.__key;
      var e = a.getParent();
      if (null !== e) {
        var f = cc(a),
          g = !1;
        if (C(f) && b) {
          var h = f.anchor,
            k = f.focus;
          h.key === d &&
            (Xd(h, a, e, a.getPreviousSibling(), a.getNextSibling()), (g = !0));
          k.key === d &&
            (Xd(k, a, e, a.getPreviousSibling(), a.getNextSibling()), (g = !0));
        }
        C(f) && b && !g
          ? ((d = a.getIndexWithinParent()), Hb(a), Ud(f, e, d, -1))
          : Hb(a);
        c || fc(e) || e.canBeEmpty() || !e.isEmpty() || ne(e, b);
        b && O(e) && e.isEmpty() && e.selectEnd();
      }
    }
    var oe = (function () {
      oe.getType = function getType() {
        q(64);
      };
      oe.clone = function clone() {
        q(65);
      };
      function oe(a) {
        this.__type = this.constructor.getType();
        this.__next = this.__prev = this.__parent = null;
        Fb(this, a);
      }
      var _proto5 = oe.prototype;
      _proto5.getType = function getType() {
        return this.__type;
      };
      _proto5.isAttached = function isAttached() {
        for (var a = this.__key; null !== a; ) {
          if ('root' === a) return !0;
          a = L(a);
          if (null === a) break;
          a = a.__parent;
        }
        return !1;
      };
      _proto5.isSelected = function isSelected() {
        var _this5 = this;
        var a = u();
        if (null == a) return !1;
        var b = a.getNodes().some(function (c) {
          return c.__key === _this5.__key;
        });
        return B(this)
          ? b
          : C(a) &&
            'element' === a.anchor.type &&
            'element' === a.focus.type &&
            a.anchor.key === a.focus.key &&
            a.anchor.offset === a.focus.offset
          ? !1
          : b;
      };
      _proto5.getKey = function getKey() {
        return this.__key;
      };
      _proto5.getIndexWithinParent = function getIndexWithinParent() {
        var a = this.getParent();
        if (null === a) return -1;
        a = a.getFirstChild();
        var b = 0;
        for (; null !== a; ) {
          if (this.is(a)) return b;
          b++;
          a = a.getNextSibling();
        }
        return -1;
      };
      _proto5.getParent = function getParent() {
        var a = this.getLatest().__parent;
        return null === a ? null : L(a);
      };
      _proto5.getParentOrThrow = function getParentOrThrow() {
        var a = this.getParent();
        null === a && q(66);
        return a;
      };
      _proto5.getTopLevelElement = function getTopLevelElement() {
        var a = this;
        for (; null !== a; ) {
          var b = a.getParent();
          if (fc(b)) return a;
          a = b;
        }
        return null;
      };
      _proto5.getTopLevelElementOrThrow = function getTopLevelElementOrThrow() {
        var a = this.getTopLevelElement();
        null === a && q(67);
        return a;
      };
      _proto5.getParents = function getParents() {
        var a = [],
          b = this.getParent();
        for (; null !== b; ) {
          a.push(b), (b = b.getParent());
        }
        return a;
      };
      _proto5.getParentKeys = function getParentKeys() {
        var a = [],
          b = this.getParent();
        for (; null !== b; ) {
          a.push(b.__key), (b = b.getParent());
        }
        return a;
      };
      _proto5.getPreviousSibling = function getPreviousSibling() {
        var a = this.getLatest().__prev;
        return null === a ? null : L(a);
      };
      _proto5.getPreviousSiblings = function getPreviousSiblings() {
        var a = [];
        var b = this.getParent();
        if (null === b) return a;
        for (b = b.getFirstChild(); null !== b && !b.is(this); ) {
          a.push(b), (b = b.getNextSibling());
        }
        return a;
      };
      _proto5.getNextSibling = function getNextSibling() {
        var a = this.getLatest().__next;
        return null === a ? null : L(a);
      };
      _proto5.getNextSiblings = function getNextSiblings() {
        var a = [],
          b = this.getNextSibling();
        for (; null !== b; ) {
          a.push(b), (b = b.getNextSibling());
        }
        return a;
      };
      _proto5.getCommonAncestor = function getCommonAncestor(a) {
        var b = this.getParents();
        var c = a.getParents();
        F(this) && b.unshift(this);
        F(a) && c.unshift(a);
        a = b.length;
        var d = c.length;
        if (0 === a || 0 === d || b[a - 1] !== c[d - 1]) return null;
        c = new Set(c);
        for (d = 0; d < a; d++) {
          var e = b[d];
          if (c.has(e)) return e;
        }
        return null;
      };
      _proto5.is = function is(a) {
        return null == a ? !1 : this.__key === a.__key;
      };
      _proto5.isBefore = function isBefore(a) {
        if (a.isParentOf(this)) return !0;
        if (this.isParentOf(a)) return !1;
        var b = this.getCommonAncestor(a);
        var c = this;
        for (;;) {
          var d = c.getParentOrThrow();
          if (d === b) {
            d = c.getIndexWithinParent();
            break;
          }
          c = d;
        }
        for (c = a; ; ) {
          a = c.getParentOrThrow();
          if (a === b) {
            b = c.getIndexWithinParent();
            break;
          }
          c = a;
        }
        return d < b;
      };
      _proto5.isParentOf = function isParentOf(a) {
        var b = this.__key;
        if (b === a.__key) return !1;
        for (; null !== a; ) {
          if (a.__key === b) return !0;
          a = a.getParent();
        }
        return !1;
      };
      _proto5.getNodesBetween = function getNodesBetween(a) {
        var b = this.isBefore(a),
          c = [],
          d = new Set();
        for (var e = this; ; ) {
          var f = e.__key;
          d.has(f) || (d.add(f), c.push(e));
          if (e === a) break;
          f = F(e) ? (b ? e.getFirstChild() : e.getLastChild()) : null;
          if (null !== f) e = f;
          else if (
            ((f = b ? e.getNextSibling() : e.getPreviousSibling()), null !== f)
          )
            e = f;
          else {
            e = e.getParentOrThrow();
            d.has(e.__key) || c.push(e);
            if (e === a) break;
            f = e;
            do {
              null === f && q(68),
                (e = b ? f.getNextSibling() : f.getPreviousSibling()),
                (f = f.getParent()),
                null !== f && (null !== e || d.has(f.__key) || c.push(f));
            } while (null === e);
          }
        }
        b || c.reverse();
        return c;
      };
      _proto5.isDirty = function isDirty() {
        var a = H()._dirtyLeaves;
        return null !== a && a.has(this.__key);
      };
      _proto5.getLatest = function getLatest() {
        var a = L(this.__key);
        null === a && q(69);
        return a;
      };
      _proto5.getWritable = function getWritable() {
        G();
        var a = I(),
          b = H();
        a = a._nodeMap;
        var c = this.__key,
          d = this.getLatest(),
          e = d.__parent;
        b = b._cloneNotNeeded;
        var f = u();
        null !== f && (f._cachedNodes = null);
        if (b.has(c)) return Ib(d), d;
        f = d.constructor.clone(d);
        f.__parent = e;
        f.__next = d.__next;
        f.__prev = d.__prev;
        F(d) && F(f)
          ? ((f.__first = d.__first),
            (f.__last = d.__last),
            (f.__size = d.__size),
            (f.__indent = d.__indent),
            (f.__format = d.__format),
            (f.__dir = d.__dir))
          : B(d) &&
            B(f) &&
            ((f.__format = d.__format),
            (f.__style = d.__style),
            (f.__mode = d.__mode),
            (f.__detail = d.__detail));
        b.add(c);
        f.__key = c;
        Ib(f);
        a.set(c, f);
        return f;
      };
      _proto5.getTextContent = function getTextContent() {
        return '';
      };
      _proto5.getTextContentSize = function getTextContentSize() {
        return this.getTextContent().length;
      };
      _proto5.createDOM = function createDOM() {
        q(70);
      };
      _proto5.updateDOM = function updateDOM() {
        q(71);
      };
      _proto5.exportDOM = function exportDOM(a) {
        return { element: this.createDOM(a._config, a) };
      };
      _proto5.exportJSON = function exportJSON() {
        q(72);
      };
      oe.importJSON = function importJSON() {
        q(18);
      };
      _proto5.remove = function remove(a) {
        ne(this, !0, a);
      };
      _proto5.replace = function replace(a, b) {
        G();
        var c = u();
        null !== c && (c = c.clone());
        hc(this, a);
        var d = this.getLatest(),
          e = this.__key,
          f = a.__key,
          g = a.getWritable();
        a = this.getParentOrThrow().getWritable();
        var h = a.__size;
        Hb(g);
        var k = d.getPreviousSibling(),
          l = d.getNextSibling(),
          m = d.__prev,
          p = d.__next,
          n = d.__parent;
        ne(d, !1, !0);
        null === k ? (a.__first = f) : (k.getWritable().__next = f);
        g.__prev = m;
        null === l ? (a.__last = f) : (l.getWritable().__prev = f);
        g.__next = p;
        g.__parent = n;
        a.__size = h;
        b &&
          this.getChildren().forEach(function (r) {
            g.append(r);
          });
        C(c) &&
          (ob(c),
          (b = c.anchor),
          (c = c.focus),
          b.key === e && xd(b, g),
          c.key === e && xd(c, g));
        Jb() === e && K(f);
        return g;
      };
      _proto5.insertAfter = function insertAfter(a, b) {
        if (b === void 0) {
          b = !0;
        }
        G();
        hc(this, a);
        var c = this.getWritable();
        var d = a.getWritable();
        var e = d.getParent();
        var f = u();
        var g = !1,
          h = !1;
        if (null !== e) {
          var k = a.getIndexWithinParent();
          Hb(d);
          C(f) &&
            ((h = e.__key),
            (g = f.anchor),
            (e = f.focus),
            (g = 'element' === g.type && g.key === h && g.offset === k + 1),
            (h = 'element' === e.type && e.key === h && e.offset === k + 1));
        }
        e = this.getNextSibling();
        k = this.getParentOrThrow().getWritable();
        var l = d.__key,
          m = c.__next;
        null === e ? (k.__last = l) : (e.getWritable().__prev = l);
        k.__size++;
        c.__next = l;
        d.__next = m;
        d.__prev = c.__key;
        d.__parent = c.__parent;
        b &&
          C(f) &&
          ((b = this.getIndexWithinParent()),
          Ud(f, k, b + 1),
          (c = k.__key),
          g && f.anchor.set(c, b + 2, 'element'),
          h && f.focus.set(c, b + 2, 'element'));
        return a;
      };
      _proto5.insertBefore = function insertBefore(a, b) {
        if (b === void 0) {
          b = !0;
        }
        G();
        hc(this, a);
        var c = this.getWritable();
        var d = a.getWritable(),
          e = d.__key;
        Hb(d);
        var f = this.getPreviousSibling(),
          g = this.getParentOrThrow().getWritable(),
          h = c.__prev,
          k = this.getIndexWithinParent();
        null === f ? (g.__first = e) : (f.getWritable().__next = e);
        g.__size++;
        c.__prev = e;
        d.__prev = h;
        d.__next = c.__key;
        d.__parent = c.__parent;
        c = u();
        b && C(c) && ((b = this.getParentOrThrow()), Ud(c, b, k));
        return a;
      };
      _proto5.selectPrevious = function selectPrevious(a, b) {
        G();
        var c = this.getPreviousSibling(),
          d = this.getParentOrThrow();
        return null === c
          ? d.select(0, 0)
          : F(c)
          ? c.select()
          : B(c)
          ? c.select(a, b)
          : ((a = c.getIndexWithinParent() + 1), d.select(a, a));
      };
      _proto5.selectNext = function selectNext(a, b) {
        G();
        var c = this.getNextSibling(),
          d = this.getParentOrThrow();
        return null === c
          ? d.select()
          : F(c)
          ? c.select(0, 0)
          : B(c)
          ? c.select(a, b)
          : ((a = c.getIndexWithinParent()), d.select(a, a));
      };
      _proto5.markDirty = function markDirty() {
        this.getWritable();
      };
      return oe;
    })();
    var pe = (function (_oe) {
      babelHelpers.inheritsLoose(pe, _oe);
      function pe(a) {
        return _oe.call(this, a) || this;
      }
      var _proto6 = pe.prototype;
      _proto6.decorate = function decorate() {
        q(47);
      };
      _proto6.isIsolated = function isIsolated() {
        return !1;
      };
      _proto6.isInline = function isInline() {
        return !0;
      };
      _proto6.isKeyboardSelectable = function isKeyboardSelectable() {
        return !0;
      };
      return pe;
    })(oe);
    function z(a) {
      return a instanceof pe;
    }
    var qe = (function (_oe2) {
      babelHelpers.inheritsLoose(qe, _oe2);
      function qe(a) {
        var _this;
        _this = _oe2.call(this, a) || this;
        _this.__last = _this.__first = null;
        _this.__indent = _this.__format = _this.__size = 0;
        _this.__dir = null;
        return _this;
      }
      var _proto7 = qe.prototype;
      _proto7.getFormat = function getFormat() {
        return this.getLatest().__format;
      };
      _proto7.getFormatType = function getFormatType() {
        var a = this.getFormat();
        return cb[a] || '';
      };
      _proto7.getIndent = function getIndent() {
        return this.getLatest().__indent;
      };
      _proto7.getChildren = function getChildren() {
        var a = [],
          b = this.getFirstChild();
        for (; null !== b; ) {
          a.push(b), (b = b.getNextSibling());
        }
        return a;
      };
      _proto7.getChildrenKeys = function getChildrenKeys() {
        var a = [],
          b = this.getFirstChild();
        for (; null !== b; ) {
          a.push(b.__key), (b = b.getNextSibling());
        }
        return a;
      };
      _proto7.getChildrenSize = function getChildrenSize() {
        return this.getLatest().__size;
      };
      _proto7.isEmpty = function isEmpty() {
        return 0 === this.getChildrenSize();
      };
      _proto7.isDirty = function isDirty() {
        var a = H()._dirtyElements;
        return null !== a && a.has(this.__key);
      };
      _proto7.isLastChild = function isLastChild() {
        var a = this.getLatest(),
          b = this.getParentOrThrow().getLastChild();
        return null !== b && b.is(a);
      };
      _proto7.getAllTextNodes = function getAllTextNodes() {
        var a = [],
          b = this.getFirstChild();
        for (; null !== b; ) {
          B(b) && a.push(b);
          if (F(b)) {
            var c = b.getAllTextNodes();
            a.push.apply(a, c);
          }
          b = b.getNextSibling();
        }
        return a;
      };
      _proto7.getFirstDescendant = function getFirstDescendant() {
        var a = this.getFirstChild();
        for (; null !== a; ) {
          if (F(a)) {
            var b = a.getFirstChild();
            if (null !== b) {
              a = b;
              continue;
            }
          }
          break;
        }
        return a;
      };
      _proto7.getLastDescendant = function getLastDescendant() {
        var a = this.getLastChild();
        for (; null !== a; ) {
          if (F(a)) {
            var b = a.getLastChild();
            if (null !== b) {
              a = b;
              continue;
            }
          }
          break;
        }
        return a;
      };
      _proto7.getDescendantByIndex = function getDescendantByIndex(a) {
        var b = this.getChildren(),
          c = b.length;
        if (a >= c)
          return (a = b[c - 1]), (F(a) && a.getLastDescendant()) || a || null;
        a = b[a];
        return (F(a) && a.getFirstDescendant()) || a || null;
      };
      _proto7.getFirstChild = function getFirstChild() {
        var a = this.getLatest().__first;
        return null === a ? null : L(a);
      };
      _proto7.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var a = this.getFirstChild();
        null === a && q(45);
        return a;
      };
      _proto7.getLastChild = function getLastChild() {
        var a = this.getLatest().__last;
        return null === a ? null : L(a);
      };
      _proto7.getLastChildOrThrow = function getLastChildOrThrow() {
        var a = this.getLastChild();
        null === a && q(96);
        return a;
      };
      _proto7.getChildAtIndex = function getChildAtIndex(a) {
        var b = this.getChildrenSize();
        var c;
        if (a < b / 2) {
          c = this.getFirstChild();
          for (b = 0; null !== c && b <= a; ) {
            if (b === a) return c;
            c = c.getNextSibling();
            b++;
          }
          return null;
        }
        c = this.getLastChild();
        for (--b; null !== c && b >= a; ) {
          if (b === a) return c;
          c = c.getPreviousSibling();
          b--;
        }
        return null;
      };
      _proto7.getTextContent = function getTextContent() {
        var a = '',
          b = this.getChildren(),
          c = b.length;
        for (var d = 0; d < c; d++) {
          var e = b[d];
          a += e.getTextContent();
          F(e) && d !== c - 1 && !e.isInline() && (a += '\n\n');
        }
        return a;
      };
      _proto7.getDirection = function getDirection() {
        return this.getLatest().__dir;
      };
      _proto7.hasFormat = function hasFormat(a) {
        return '' !== a ? ((a = bb[a]), 0 !== (this.getFormat() & a)) : !1;
      };
      _proto7.select = function select(a, b) {
        G();
        var c = u(),
          d = a,
          e = b;
        var f = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === a && 0 === b) {
            if (((a = this.getFirstChild()), B(a) || F(a)))
              return a.select(0, 0);
          } else if (
            !((void 0 !== a && a !== f) || (void 0 !== b && b !== f)) &&
            ((a = this.getLastChild()), B(a) || F(a))
          )
            return a.select();
        void 0 === d && (d = f);
        void 0 === e && (e = f);
        f = this.__key;
        if (C(c))
          c.anchor.set(f, d, 'element'),
            c.focus.set(f, e, 'element'),
            (c.dirty = !0);
        else return Sd(f, d, f, e, 'element', 'element');
        return c;
      };
      _proto7.selectStart = function selectStart() {
        var a = this.getFirstDescendant();
        return F(a) || B(a)
          ? a.select(0, 0)
          : null !== a
          ? a.selectPrevious()
          : this.select(0, 0);
      };
      _proto7.selectEnd = function selectEnd() {
        var a = this.getLastDescendant();
        return F(a) || B(a)
          ? a.select()
          : null !== a
          ? a.selectNext()
          : this.select();
      };
      _proto7.clear = function clear() {
        var a = this.getWritable();
        this.getChildren().forEach(function (b) {
          return b.remove();
        });
        return a;
      };
      _proto7.append = function append() {
        for (
          var _len2 = arguments.length, a = new Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          a[_key2] = arguments[_key2];
        }
        return this.splice(this.getChildrenSize(), 0, a);
      };
      _proto7.setDirection = function setDirection(a) {
        var b = this.getWritable();
        b.__dir = a;
        return b;
      };
      _proto7.setFormat = function setFormat(a) {
        this.getWritable().__format = '' !== a ? bb[a] : 0;
        return this;
      };
      _proto7.setIndent = function setIndent(a) {
        this.getWritable().__indent = a;
        return this;
      };
      _proto7.splice = function splice(a, b, c) {
        var d = c.length,
          e = this.getChildrenSize(),
          f = this.getWritable(),
          g = f.__key;
        var h = [],
          k = [];
        var l = this.getChildAtIndex(a + b),
          m = null,
          p = e - b + d;
        if (0 !== a)
          if (a === e) m = this.getLastChild();
          else {
            var n = this.getChildAtIndex(a);
            null !== n && (m = n.getPreviousSibling());
          }
        if (0 < b) {
          var r = null === m ? this.getFirstChild() : m.getNextSibling();
          for (n = 0; n < b; n++) {
            if (null === r) throw Error('splice: sibling not found');
            var w = r.getNextSibling(),
              y = r.__key;
            r = r.getWritable();
            Hb(r);
            k.push(y);
            r = w;
          }
        }
        n = m;
        for (w = 0; w < d; w++) {
          y = c[w];
          null !== n && y.is(n) && (m = n = n.getPreviousSibling());
          r = y.getWritable();
          r.__parent === g && p--;
          Hb(r);
          var x = y.__key;
          null === n
            ? ((f.__first = x), (r.__prev = null))
            : ((n = n.getWritable()), (n.__next = x), (r.__prev = n.__key));
          y.__key === g && q(76);
          r.__parent = g;
          h.push(x);
          n = y;
        }
        a + b === e
          ? null !== n &&
            ((n.getWritable().__next = null), (f.__last = n.__key))
          : null !== l &&
            ((a = l.getWritable()),
            null !== n
              ? ((b = n.getWritable()),
                (a.__prev = n.__key),
                (b.__next = l.__key))
              : (a.__prev = null));
        f.__size = p;
        if (k.length && ((a = u()), C(a))) {
          k = new Set(k);
          h = new Set(h);
          var _a2 = a,
            _x = _a2.anchor,
            A = _a2.focus;
          re(_x, k, h) && Xd(_x, _x.getNode(), this, m, l);
          re(A, k, h) && Xd(A, A.getNode(), this, m, l);
          0 !== p || this.canBeEmpty() || fc(this) || this.remove();
        }
        return f;
      };
      _proto7.exportJSON = function exportJSON() {
        return {
          children: [],
          direction: this.getDirection(),
          format: this.getFormatType(),
          indent: this.getIndent(),
          type: 'element',
          version: 1,
        };
      };
      _proto7.insertNewAfter = function insertNewAfter() {
        return null;
      };
      _proto7.canInsertTab = function canInsertTab() {
        return !1;
      };
      _proto7.canIndent = function canIndent() {
        return !0;
      };
      _proto7.collapseAtStart = function collapseAtStart() {
        return !1;
      };
      _proto7.excludeFromCopy = function excludeFromCopy() {
        return !1;
      };
      _proto7.canExtractContents = function canExtractContents() {
        return !0;
      };
      _proto7.canReplaceWith = function canReplaceWith() {
        return !0;
      };
      _proto7.canInsertAfter = function canInsertAfter() {
        return !0;
      };
      _proto7.canBeEmpty = function canBeEmpty() {
        return !0;
      };
      _proto7.canInsertTextBefore = function canInsertTextBefore() {
        return !0;
      };
      _proto7.canInsertTextAfter = function canInsertTextAfter() {
        return !0;
      };
      _proto7.isInline = function isInline() {
        return !1;
      };
      _proto7.isShadowRoot = function isShadowRoot() {
        return !1;
      };
      _proto7.canMergeWith = function canMergeWith() {
        return !1;
      };
      _proto7.extractWithChild = function extractWithChild() {
        return !1;
      };
      return qe;
    })(oe);
    function F(a) {
      return a instanceof qe;
    }
    function re(a, b, c) {
      for (a = a.getNode(); a; ) {
        var d = a.__key;
        if (b.has(d) && !c.has(d)) return !0;
        a = a.getParent();
      }
      return !1;
    }
    var se = (function (_qe) {
      babelHelpers.inheritsLoose(se, _qe);
      se.getType = function getType() {
        return 'root';
      };
      se.clone = function clone() {
        return new se();
      };
      function se() {
        var _this2;
        _this2 = _qe.call(this, 'root') || this;
        _this2.__cachedText = null;
        return _this2;
      }
      var _proto8 = se.prototype;
      _proto8.getTopLevelElementOrThrow = function getTopLevelElementOrThrow() {
        q(51);
      };
      _proto8.getTextContent = function getTextContent() {
        var a = this.__cachedText;
        return (!Kb() && 0 !== H()._dirtyType) || null === a
          ? _qe.prototype.getTextContent.call(this)
          : a;
      };
      _proto8.remove = function remove() {
        q(52);
      };
      _proto8.replace = function replace() {
        q(53);
      };
      _proto8.insertBefore = function insertBefore() {
        q(54);
      };
      _proto8.insertAfter = function insertAfter() {
        q(55);
      };
      _proto8.updateDOM = function updateDOM() {
        return !1;
      };
      _proto8.append = function append() {
        var _qe$prototype$append;
        for (
          var _len3 = arguments.length, a = new Array(_len3), _key3 = 0;
          _key3 < _len3;
          _key3++
        ) {
          a[_key3] = arguments[_key3];
        }
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          F(c) || z(c) || q(56);
        }
        return (_qe$prototype$append = _qe.prototype.append).call.apply(
          _qe$prototype$append,
          [this].concat(a),
        );
      };
      se.importJSON = function importJSON(a) {
        var b = Nb();
        b.setFormat(a.format);
        b.setIndent(a.indent);
        b.setDirection(a.direction);
        return b;
      };
      _proto8.exportJSON = function exportJSON() {
        return {
          children: [],
          direction: this.getDirection(),
          format: this.getFormatType(),
          indent: this.getIndent(),
          type: 'root',
          version: 1,
        };
      };
      _proto8.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return se;
    })(qe);
    function O(a) {
      return a instanceof se;
    }
    function me(a, b) {
      b = b.getEditorState()._selection;
      a = a._selection;
      if (null !== a) {
        if (a.dirty || !a.is(b)) return !0;
      } else if (null !== b) return !0;
      return !1;
    }
    function te() {
      return new le(new Map([['root', new se()]]));
    }
    function ue(a) {
      var b = a.exportJSON();
      b.type !== a.constructor.getType() && q(58);
      var c = b.children;
      if (F(a)) {
        Array.isArray(c) || q(59);
        a = a.getChildren();
        for (var d = 0; d < a.length; d++) {
          var e = ue(a[d]);
          c.push(e);
        }
      }
      return b;
    }
    var le = (function () {
      function le(a, b) {
        this._nodeMap = a;
        this._selection = b || null;
        this._readOnly = this._flushSync = !1;
      }
      var _proto9 = le.prototype;
      _proto9.isEmpty = function isEmpty() {
        return 1 === this._nodeMap.size && null === this._selection;
      };
      _proto9.read = function read(a) {
        return fe(this, a);
      };
      _proto9.clone = function clone(a) {
        a = new le(this._nodeMap, void 0 === a ? this._selection : a);
        a._readOnly = !0;
        return a;
      };
      _proto9.toJSON = function toJSON() {
        return fe(this, function () {
          return { root: ue(Nb()) };
        });
      };
      return le;
    })();
    var ve = (function (_oe3) {
      babelHelpers.inheritsLoose(ve, _oe3);
      ve.getType = function getType() {
        return 'linebreak';
      };
      ve.clone = function clone(a) {
        return new ve(a.__key);
      };
      function ve(a) {
        return _oe3.call(this, a) || this;
      }
      var _proto10 = ve.prototype;
      _proto10.getTextContent = function getTextContent() {
        return '\n';
      };
      _proto10.createDOM = function createDOM() {
        return document.createElement('br');
      };
      _proto10.updateDOM = function updateDOM() {
        return !1;
      };
      ve.importDOM = function importDOM() {
        return {
          br: function br(a) {
            var b = a.parentElement;
            return null != b && b.firstChild === a && b.lastChild === a
              ? null
              : { conversion: we, priority: 0 };
          },
        };
      };
      ve.importJSON = function importJSON() {
        return Kd();
      };
      _proto10.exportJSON = function exportJSON() {
        return { type: 'linebreak', version: 1 };
      };
      return ve;
    })(oe);
    function we() {
      return { node: Kd() };
    }
    function Kd() {
      return gc(new ve());
    }
    function Eb(a) {
      return a instanceof ve;
    }
    function xe(a, b) {
      return b & 16 ? 'code' : b & 32 ? 'sub' : b & 64 ? 'sup' : null;
    }
    function ye(a, b) {
      return b & 1 ? 'strong' : b & 2 ? 'em' : 'span';
    }
    function ze(a, b, c, d, e) {
      var _a3, _a4, _a5;
      a = d.classList;
      d = Wb(e, 'base');
      void 0 !== d && (_a3 = a).add.apply(_a3, d);
      d = Wb(e, 'underlineStrikethrough');
      var f = !1,
        g = b & 8 && b & 4;
      var h = c & 8 && c & 4;
      void 0 !== d &&
        (h
          ? ((f = !0), g || (_a4 = a).add.apply(_a4, d))
          : g && (_a5 = a).remove.apply(_a5, d));
      for (var k in $a) {
        var _a6, _a7, _a8;
        (h = $a[k]),
          (d = Wb(e, k)),
          void 0 !== d &&
            (c & h
              ? !f || ('underline' !== k && 'strikethrough' !== k)
                ? (0 === (b & h) ||
                    (g && 'underline' === k) ||
                    'strikethrough' === k) &&
                  (_a6 = a).add.apply(_a6, d)
                : b & h && (_a7 = a).remove.apply(_a7, d)
              : b & h && (_a8 = a).remove.apply(_a8, d));
      }
    }
    function Ae(a, b, c) {
      var d = b.firstChild;
      c = c.isComposing();
      a += c ? Wa : '';
      if (null == d) b.textContent = a;
      else if (((b = d.nodeValue), b !== a))
        if (c || Pa) {
          c = b.length;
          var e = a.length,
            f = 0,
            g = 0;
          for (; f < c && f < e && b[f] === a[f]; ) {
            f++;
          }
          for (; g + f < c && g + f < e && b[c - g - 1] === a[e - g - 1]; ) {
            g++;
          }
          a = [f, c - f - g, a.slice(f, e - g)];
          var _a9 = a,
            h = _a9[0],
            k = _a9[1],
            l = _a9[2];
          0 !== k && d.deleteData(h, k);
          d.insertData(h, l);
        } else d.nodeValue = a;
    }
    function Be(a, b) {
      b = document.createElement(b);
      b.appendChild(a);
      return b;
    }
    var Ce = (function (_oe4) {
      babelHelpers.inheritsLoose(Ce, _oe4);
      Ce.getType = function getType() {
        return 'text';
      };
      Ce.clone = function clone(a) {
        return new Ce(a.__text, a.__key);
      };
      function Ce(a, b) {
        var _this3;
        _this3 = _oe4.call(this, b) || this;
        _this3.__text = a;
        _this3.__format = 0;
        _this3.__style = '';
        _this3.__detail = _this3.__mode = 0;
        return _this3;
      }
      var _proto11 = Ce.prototype;
      _proto11.getFormat = function getFormat() {
        return this.getLatest().__format;
      };
      _proto11.getDetail = function getDetail() {
        return this.getLatest().__detail;
      };
      _proto11.getMode = function getMode() {
        var a = this.getLatest();
        return eb[a.__mode];
      };
      _proto11.getStyle = function getStyle() {
        return this.getLatest().__style;
      };
      _proto11.isToken = function isToken() {
        return 1 === this.getLatest().__mode;
      };
      _proto11.isComposing = function isComposing() {
        return this.__key === Jb();
      };
      _proto11.isSegmented = function isSegmented() {
        return 2 === this.getLatest().__mode;
      };
      _proto11.isDirectionless = function isDirectionless() {
        return 0 !== (this.getLatest().__detail & 1);
      };
      _proto11.isUnmergeable = function isUnmergeable() {
        return 0 !== (this.getLatest().__detail & 2);
      };
      _proto11.hasFormat = function hasFormat(a) {
        a = $a[a];
        return 0 !== (this.getFormat() & a);
      };
      _proto11.isSimpleText = function isSimpleText() {
        return 'text' === this.__type && 0 === this.__mode;
      };
      _proto11.getTextContent = function getTextContent() {
        return this.getLatest().__text;
      };
      _proto11.getFormatFlags = function getFormatFlags(a, b) {
        var c = this.getLatest().__format;
        return Cb(c, a, b);
      };
      _proto11.createDOM = function createDOM(a) {
        var b = this.__format,
          c = xe(this, b);
        var d = ye(this, b),
          e = document.createElement(null === c ? d : c),
          f = e;
        null !== c && ((f = document.createElement(d)), e.appendChild(f));
        c = f;
        Ae(this.__text, c, this);
        a = a.theme.text;
        void 0 !== a && ze(d, 0, b, c, a);
        b = this.__style;
        '' !== b && (e.style.cssText = b);
        return e;
      };
      _proto11.updateDOM = function updateDOM(a, b, c) {
        var d = this.__text;
        var e = a.__format,
          f = this.__format,
          g = xe(this, e);
        var h = xe(this, f);
        var k = ye(this, e);
        var l = ye(this, f);
        if ((null === g ? k : g) !== (null === h ? l : h)) return !0;
        if (g === h && k !== l)
          return (
            (e = b.firstChild),
            null == e && q(48),
            (a = g = document.createElement(l)),
            Ae(d, a, this),
            (c = c.theme.text),
            void 0 !== c && ze(l, 0, f, a, c),
            b.replaceChild(g, e),
            !1
          );
        k = b;
        null !== h && null !== g && ((k = b.firstChild), null == k && q(49));
        Ae(d, k, this);
        c = c.theme.text;
        void 0 !== c && e !== f && ze(l, e, f, k, c);
        f = this.__style;
        a.__style !== f && (b.style.cssText = f);
        return !1;
      };
      Ce.importDOM = function importDOM() {
        return {
          '#text': function text() {
            return { conversion: De, priority: 0 };
          },
          b: function b() {
            return { conversion: Ee, priority: 0 };
          },
          br: function br() {
            return { conversion: Fe, priority: 0 };
          },
          code: function code() {
            return { conversion: Ie, priority: 0 };
          },
          em: function em() {
            return { conversion: Ie, priority: 0 };
          },
          i: function i() {
            return { conversion: Ie, priority: 0 };
          },
          span: function span() {
            return { conversion: Je, priority: 0 };
          },
          strong: function strong() {
            return { conversion: Ie, priority: 0 };
          },
          sub: function sub() {
            return { conversion: Ie, priority: 0 };
          },
          sup: function sup() {
            return { conversion: Ie, priority: 0 };
          },
          u: function u() {
            return { conversion: Ie, priority: 0 };
          },
        };
      };
      Ce.importJSON = function importJSON(a) {
        var b = M(a.text);
        b.setFormat(a.format);
        b.setDetail(a.detail);
        b.setMode(a.mode);
        b.setStyle(a.style);
        return b;
      };
      _proto11.exportDOM = function exportDOM(a) {
        var _oe4$prototype$export = _oe4.prototype.exportDOM.call(this, a);
        a = _oe4$prototype$export.element;
        null !== a &&
          (this.hasFormat('bold') && (a = Be(a, 'b')),
          this.hasFormat('italic') && (a = Be(a, 'i')),
          this.hasFormat('strikethrough') && (a = Be(a, 's')),
          this.hasFormat('underline') && (a = Be(a, 'u')));
        return { element: a };
      };
      _proto11.exportJSON = function exportJSON() {
        return {
          detail: this.getDetail(),
          format: this.getFormat(),
          mode: this.getMode(),
          style: this.getStyle(),
          text: this.getTextContent(),
          type: 'text',
          version: 1,
        };
      };
      _proto11.selectionTransform = function selectionTransform() {};
      _proto11.setFormat = function setFormat(a) {
        var b = this.getWritable();
        b.__format = 'string' === typeof a ? $a[a] : a;
        return b;
      };
      _proto11.setDetail = function setDetail(a) {
        var b = this.getWritable();
        b.__detail = 'string' === typeof a ? ab[a] : a;
        return b;
      };
      _proto11.setStyle = function setStyle(a) {
        var b = this.getWritable();
        b.__style = a;
        return b;
      };
      _proto11.toggleFormat = function toggleFormat(a) {
        a = $a[a];
        return this.setFormat(this.getFormat() ^ a);
      };
      _proto11.toggleDirectionless = function toggleDirectionless() {
        var a = this.getWritable();
        a.__detail ^= 1;
        return a;
      };
      _proto11.toggleUnmergeable = function toggleUnmergeable() {
        var a = this.getWritable();
        a.__detail ^= 2;
        return a;
      };
      _proto11.setMode = function setMode(a) {
        a = db[a];
        if (this.__mode === a) return this;
        var b = this.getWritable();
        b.__mode = a;
        return b;
      };
      _proto11.setTextContent = function setTextContent(a) {
        if (this.__text === a) return this;
        var b = this.getWritable();
        b.__text = a;
        return b;
      };
      _proto11.select = function select(a, b) {
        G();
        var c = u();
        var d = this.getTextContent();
        var e = this.__key;
        'string' === typeof d
          ? ((d = d.length), void 0 === a && (a = d), void 0 === b && (b = d))
          : (b = a = 0);
        if (C(c))
          (d = Jb()),
            (d !== c.anchor.key && d !== c.focus.key) || K(e),
            c.setTextNodeRange(this, a, this, b);
        else return Sd(e, a, e, b, 'text', 'text');
        return c;
      };
      _proto11.spliceText = function spliceText(a, b, c, d) {
        var e = this.getWritable(),
          f = e.__text,
          g = c.length,
          h = a;
        0 > h && ((h = g + h), 0 > h && (h = 0));
        var k = u();
        d && C(k) && ((a += g), k.setTextNodeRange(e, a, e, a));
        b = f.slice(0, h) + c + f.slice(h + b);
        e.__text = b;
        return e;
      };
      _proto11.canInsertTextBefore = function canInsertTextBefore() {
        return !0;
      };
      _proto11.canInsertTextAfter = function canInsertTextAfter() {
        return !0;
      };
      _proto11.splitText = function splitText() {
        for (
          var _len4 = arguments.length, a = new Array(_len4), _key4 = 0;
          _key4 < _len4;
          _key4++
        ) {
          a[_key4] = arguments[_key4];
        }
        G();
        var b = this.getLatest(),
          c = b.getTextContent(),
          d = b.__key,
          e = Jb(),
          f = new Set(a);
        a = [];
        var g = c.length,
          h = '';
        for (var k = 0; k < g; k++) {
          '' !== h && f.has(k) && (a.push(h), (h = '')), (h += c[k]);
        }
        '' !== h && a.push(h);
        f = a.length;
        if (0 === f) return [];
        if (a[0] === c) return [b];
        var l = a[0];
        c = b.getParentOrThrow();
        k = b.getFormat();
        var m = b.getStyle(),
          p = b.__detail;
        g = !1;
        b.isSegmented()
          ? ((h = M(l)),
            (h.__format = k),
            (h.__style = m),
            (h.__detail = p),
            (g = !0))
          : ((h = b.getWritable()), (h.__text = l));
        b = u();
        h = [h];
        l = l.length;
        for (var w = 1; w < f; w++) {
          var n = a[w],
            r = n.length;
          n = M(n).getWritable();
          n.__format = k;
          n.__style = m;
          n.__detail = p;
          var y = n.__key;
          r = l + r;
          if (C(b)) {
            var x = b.anchor,
              A = b.focus;
            x.key === d &&
              'text' === x.type &&
              x.offset > l &&
              x.offset <= r &&
              ((x.key = y), (x.offset -= l), (b.dirty = !0));
            A.key === d &&
              'text' === A.type &&
              A.offset > l &&
              A.offset <= r &&
              ((A.key = y), (A.offset -= l), (b.dirty = !0));
          }
          e === d && K(y);
          l = r;
          h.push(n);
        }
        d = this.getPreviousSibling();
        e = this.getNextSibling();
        null !== d && Ib(d);
        null !== e && Ib(e);
        d = c.getWritable();
        e = this.getIndexWithinParent();
        g ? (d.splice(e, 0, h), this.remove()) : d.splice(e, 1, h);
        C(b) && Ud(b, c, e, f - 1);
        return h;
      };
      _proto11.mergeWithSibling = function mergeWithSibling(a) {
        var b = a === this.getPreviousSibling();
        b || a === this.getNextSibling() || q(50);
        var c = this.__key;
        var d = a.__key,
          e = this.__text,
          f = e.length;
        Jb() === d && K(c);
        var g = u();
        if (C(g)) {
          var h = g.anchor,
            k = g.focus;
          null !== h && h.key === d && (Yd(h, b, c, a, f), (g.dirty = !0));
          null !== k && k.key === d && (Yd(k, b, c, a, f), (g.dirty = !0));
        }
        c = a.__text;
        this.setTextContent(b ? c + e : e + c);
        b = this.getWritable();
        a.remove();
        return b;
      };
      _proto11.isTextEntity = function isTextEntity() {
        return !1;
      };
      return Ce;
    })(oe);
    function Je(a) {
      var b = '700' === a.style.fontWeight,
        c = 'line-through' === a.style.textDecoration,
        d = 'italic' === a.style.fontStyle,
        e = 'underline' === a.style.textDecoration,
        f = a.style.verticalAlign;
      return {
        forChild: function forChild(g) {
          if (!B(g)) return g;
          b && g.toggleFormat('bold');
          c && g.toggleFormat('strikethrough');
          d && g.toggleFormat('italic');
          e && g.toggleFormat('underline');
          'sub' === f && g.toggleFormat('subscript');
          'super' === f && g.toggleFormat('superscript');
          return g;
        },
        node: null,
      };
    }
    function Fe() {
      return { node: Kd() };
    }
    function Ee(a) {
      var b = 'normal' === a.style.fontWeight;
      return {
        forChild: function forChild(c) {
          B(c) && !b && c.toggleFormat('bold');
          return c;
        },
        node: null,
      };
    }
    function De(a, b, c) {
      a = a.textContent || '';
      return !c &&
        /\n/.test(a) &&
        ((a = a.replace(/\r?\n/gm, ' ')), 0 === a.trim().length)
        ? { node: null }
        : { node: M(a) };
    }
    var Ke = {
      code: 'code',
      em: 'italic',
      i: 'italic',
      strong: 'bold',
      sub: 'subscript',
      sup: 'superscript',
      u: 'underline',
    };
    function Ie(a) {
      var b = Ke[a.nodeName.toLowerCase()];
      return void 0 === b
        ? { node: null }
        : {
            forChild: function forChild(c) {
              B(c) && c.toggleFormat(b);
              return c;
            },
            node: null,
          };
    }
    function M(a) {
      if (a === void 0) {
        a = '';
      }
      return gc(new Ce(a));
    }
    function B(a) {
      return a instanceof Ce;
    }
    var Le = (function (_qe2) {
      babelHelpers.inheritsLoose(Le, _qe2);
      function Le() {
        return _qe2.apply(this, arguments) || this;
      }
      Le.getType = function getType() {
        return 'paragraph';
      };
      Le.clone = function clone(a) {
        return new Le(a.__key);
      };
      var _proto12 = Le.prototype;
      _proto12.createDOM = function createDOM(a) {
        var _b$classList;
        var b = document.createElement('p');
        a = Wb(a.theme, 'paragraph');
        void 0 !== a && (_b$classList = b.classList).add.apply(_b$classList, a);
        return b;
      };
      _proto12.updateDOM = function updateDOM() {
        return !1;
      };
      Le.importDOM = function importDOM() {
        return {
          p: function p() {
            return { conversion: Me, priority: 0 };
          },
        };
      };
      _proto12.exportDOM = function exportDOM(a) {
        var _qe2$prototype$export = _qe2.prototype.exportDOM.call(this, a);
        a = _qe2$prototype$export.element;
        a && this.isEmpty() && a.append(document.createElement('br'));
        if (a) {
          var b = this.getFormatType();
          a.style.textAlign = b;
          if ((b = this.getDirection())) a.dir = b;
          b = this.getIndent();
          0 < b && (a.style.textIndent = 20 * b + 'px');
        }
        return { element: a };
      };
      Le.importJSON = function importJSON(a) {
        var b = zd();
        b.setFormat(a.format);
        b.setIndent(a.indent);
        b.setDirection(a.direction);
        return b;
      };
      _proto12.exportJSON = function exportJSON() {
        return babelHelpers['extends'](
          {},
          _qe2.prototype.exportJSON.call(this),
          { type: 'paragraph', version: 1 },
        );
      };
      _proto12.insertNewAfter = function insertNewAfter(a, b) {
        a = zd();
        var c = this.getDirection();
        a.setDirection(c);
        this.insertAfter(a, b);
        return a;
      };
      _proto12.collapseAtStart = function collapseAtStart() {
        var a = this.getChildren();
        if (
          0 === a.length ||
          (B(a[0]) && '' === a[0].getTextContent().trim())
        ) {
          if (null !== this.getNextSibling())
            return this.selectNext(), this.remove(), !0;
          if (null !== this.getPreviousSibling())
            return this.selectPrevious(), this.remove(), !0;
        }
        return !1;
      };
      return Le;
    })(qe);
    function Me() {
      return { node: zd() };
    }
    function zd() {
      return gc(new Le());
    }
    function he(a, b, c, d) {
      var e = a._keyToDOMMap;
      e.clear();
      a._editorState = te();
      a._pendingEditorState = d;
      a._compositionKey = null;
      a._dirtyType = 0;
      a._cloneNotNeeded.clear();
      a._dirtyLeaves = new Set();
      a._dirtyElements.clear();
      a._normalizedNodes = new Set();
      a._updateTags = new Set();
      a._updates = [];
      a._blockCursorElement = null;
      d = a._observer;
      null !== d && (d.disconnect(), (a._observer = null));
      null !== b && (b.textContent = '');
      null !== c && ((c.textContent = ''), e.set('root', c));
    }
    function Ne(a) {
      var b = new Map(),
        c = new Set();
      a.forEach(function (d) {
        d = null != d.klass.importDOM ? d.klass.importDOM.bind(d.klass) : null;
        if (null != d && !c.has(d)) {
          c.add(d);
          var e = d();
          null !== e &&
            Object.keys(e).forEach(function (f) {
              var g = b.get(f);
              void 0 === g && ((g = []), b.set(f, g));
              g.push(e[f]);
            });
        }
      });
      return b;
    }
    var Oe = (function () {
      function Oe(a, b, c, d, e, f) {
        this._parentEditor = b;
        this._rootElement = null;
        this._editorState = a;
        this._compositionKey = this._pendingEditorState = null;
        this._deferred = [];
        this._keyToDOMMap = new Map();
        this._updates = [];
        this._updating = !1;
        this._listeners = {
          decorator: new Set(),
          editable: new Set(),
          mutation: new Map(),
          root: new Set(),
          textcontent: new Set(),
          update: new Set(),
        };
        this._commands = new Map();
        this._config = d;
        this._nodes = c;
        this._decorators = {};
        this._pendingDecorators = null;
        this._dirtyType = 0;
        this._cloneNotNeeded = new Set();
        this._dirtyLeaves = new Set();
        this._dirtyElements = new Map();
        this._normalizedNodes = new Set();
        this._updateTags = new Set();
        this._observer = null;
        this._key = Sb();
        this._onError = e;
        this._htmlConversions = f;
        this._editable = !0;
        this._headless = null !== b && b._headless;
        this._blockCursorElement = this._window = null;
      }
      var _proto13 = Oe.prototype;
      _proto13.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto13.registerUpdateListener = function registerUpdateListener(a) {
        var b = this._listeners.update;
        b.add(a);
        return function () {
          b['delete'](a);
        };
      };
      _proto13.registerEditableListener = function registerEditableListener(a) {
        var b = this._listeners.editable;
        b.add(a);
        return function () {
          b['delete'](a);
        };
      };
      _proto13.registerDecoratorListener = function registerDecoratorListener(
        a,
      ) {
        var b = this._listeners.decorator;
        b.add(a);
        return function () {
          b['delete'](a);
        };
      };
      _proto13.registerTextContentListener =
        function registerTextContentListener(a) {
          var b = this._listeners.textcontent;
          b.add(a);
          return function () {
            b['delete'](a);
          };
        };
      _proto13.registerRootListener = function registerRootListener(a) {
        var _this6 = this;
        var b = this._listeners.root;
        a(this._rootElement, null);
        b.add(a);
        return function () {
          a(null, _this6._rootElement);
          b['delete'](a);
        };
      };
      _proto13.registerCommand = function registerCommand(a, b, c) {
        void 0 === c && q(35);
        var d = this._commands;
        d.has(a) ||
          d.set(a, [new Set(), new Set(), new Set(), new Set(), new Set()]);
        var e = d.get(a);
        void 0 === e && q(36);
        var f = e[c];
        f.add(b);
        return function () {
          f['delete'](b);
          e.every(function (g) {
            return 0 === g.size;
          }) && d['delete'](a);
        };
      };
      _proto13.registerMutationListener = function registerMutationListener(
        a,
        b,
      ) {
        void 0 === this._nodes.get(a.getType()) && q(37);
        var c = this._listeners.mutation;
        c.set(b, a);
        return function () {
          c['delete'](b);
        };
      };
      _proto13.registerNodeTransform = function registerNodeTransform(a, b) {
        a = a.getType();
        var c = this._nodes.get(a);
        void 0 === c && q(37);
        var d = c.transforms;
        d.add(b);
        Ob(this, a);
        return function () {
          d['delete'](b);
        };
      };
      _proto13.hasNodes = function hasNodes(a) {
        for (var b = 0; b < a.length; b++) {
          var c = a[b].getType();
          if (!this._nodes.has(c)) return !1;
        }
        return !0;
      };
      _proto13.dispatchCommand = function dispatchCommand(a, b) {
        return V(this, a, b);
      };
      _proto13.getDecorators = function getDecorators() {
        return this._decorators;
      };
      _proto13.getRootElement = function getRootElement() {
        return this._rootElement;
      };
      _proto13.getKey = function getKey() {
        return this._key;
      };
      _proto13.setRootElement = function setRootElement(a) {
        var b = this._rootElement;
        if (a !== b) {
          var _a$classList;
          var e = Wb(this._config.theme, 'root');
          var c = this._pendingEditorState || this._editorState;
          this._rootElement = a;
          he(this, b, a, c);
          if (null !== b) {
            var _b$classList2;
            if (!this._config.disableEvents) {
              0 !== dd &&
                (dd--,
                0 === dd &&
                  b.ownerDocument.removeEventListener('selectionchange', sd));
              c = b.__lexicalEditor;
              if (null !== c && void 0 !== c) {
                if (null !== c._parentEditor) {
                  var d = Rb(c);
                  d = d[d.length - 1]._key;
                  rd.get(d) === c && rd['delete'](d);
                } else rd['delete'](c._key);
                b.__lexicalEditor = null;
              }
              c = qd(b);
              for (d = 0; d < c.length; d++) {
                c[d]();
              }
              b.__lexicalEventHandles = [];
            }
            null != e &&
              (_b$classList2 = b.classList).remove.apply(_b$classList2, e);
          }
          null !== a
            ? ((c = ((c = a.ownerDocument) && c.defaultView) || null),
              (d = a.style),
              (d.userSelect = 'text'),
              (d.whiteSpace = 'pre-wrap'),
              (d.wordBreak = 'break-word'),
              a.setAttribute('data-lexical-editor', 'true'),
              (this._window = c),
              (this._dirtyType = 2),
              rb(this),
              this._updateTags.add('history-merge'),
              ge(this),
              this._config.disableEvents || ud(a, this),
              null != e &&
                (_a$classList = a.classList).add.apply(_a$classList, e))
            : (this._window = null);
          ie('root', this, !1, a, b);
        }
      };
      _proto13.getElementByKey = function getElementByKey(a) {
        return this._keyToDOMMap.get(a) || null;
      };
      _proto13.getEditorState = function getEditorState() {
        return this._editorState;
      };
      _proto13.setEditorState = function setEditorState(a, b) {
        a.isEmpty() && q(38);
        qb(this);
        var c = this._pendingEditorState,
          d = this._updateTags;
        b = void 0 !== b ? b.tag : null;
        null === c || c.isEmpty() || (null != b && d.add(b), ge(this));
        this._pendingEditorState = a;
        this._dirtyType = 2;
        this._dirtyElements.set('root', !1);
        this._compositionKey = null;
        null != b && d.add(b);
        ge(this);
      };
      _proto13.parseEditorState = function parseEditorState(a, b) {
        a = 'string' === typeof a ? JSON.parse(a) : a;
        var c = te(),
          d = X,
          e = Z,
          f = Y,
          g = this._dirtyElements,
          h = this._dirtyLeaves,
          k = this._cloneNotNeeded,
          l = this._dirtyType;
        this._dirtyElements = new Map();
        this._dirtyLeaves = new Set();
        this._cloneNotNeeded = new Set();
        this._dirtyType = 0;
        X = c;
        Z = !1;
        Y = this;
        try {
          ee(a.root, this._nodes), b && b(), (c._readOnly = !0);
        } finally {
          (this._dirtyElements = g),
            (this._dirtyLeaves = h),
            (this._cloneNotNeeded = k),
            (this._dirtyType = l),
            (X = d),
            (Z = e),
            (Y = f);
        }
        return c;
      };
      _proto13.update = function update(a, b) {
        v(this, a, b);
      };
      _proto13.focus = function focus(a, b) {
        if (b === void 0) {
          b = {};
        }
        var c = this._rootElement;
        null !== c &&
          (c.setAttribute('autocapitalize', 'off'),
          v(
            this,
            function () {
              var d = u(),
                e = Nb();
              null !== d
                ? (d.dirty = !0)
                : 0 !== e.getChildrenSize() &&
                  ('rootStart' === b.defaultSelection
                    ? e.selectStart()
                    : e.selectEnd());
            },
            {
              onUpdate: function onUpdate() {
                c.removeAttribute('autocapitalize');
                a && a();
              },
            },
          ),
          null === this._pendingEditorState &&
            c.removeAttribute('autocapitalize'));
      };
      _proto13.blur = function blur() {
        var a = this._rootElement;
        null !== a && a.blur();
        a = E(this._window);
        null !== a && a.removeAllRanges();
      };
      _proto13.isEditable = function isEditable() {
        return this._editable;
      };
      _proto13.setEditable = function setEditable(a) {
        this._editable !== a &&
          ((this._editable = a), ie('editable', this, !0, a));
      };
      _proto13.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON() };
      };
      return Oe;
    })();
    var Pe = (function (_qe3) {
      babelHelpers.inheritsLoose(Pe, _qe3);
      function Pe(a, b) {
        var _this4;
        _this4 = _qe3.call(this, b) || this;
        _this4.__colSpan = a;
        return _this4;
      }
      var _proto14 = Pe.prototype;
      _proto14.exportJSON = function exportJSON() {
        return babelHelpers['extends'](
          {},
          _qe3.prototype.exportJSON.call(this),
          { colSpan: this.__colSpan },
        );
      };
      return Pe;
    })(qe);
    function Id(a) {
      return a instanceof Pe;
    }
    var Qe = (function (_qe4) {
      babelHelpers.inheritsLoose(Qe, _qe4);
      function Qe() {
        return _qe4.apply(this, arguments) || this;
      }
      return Qe;
    })(qe);
    function Gd(a) {
      return a instanceof Qe;
    }
    var Re = (function (_qe5) {
      babelHelpers.inheritsLoose(Re, _qe5);
      function Re() {
        return _qe5.apply(this, arguments) || this;
      }
      return Re;
    })(qe);
    function Hd(a) {
      return a instanceof Re;
    }
    exports.$addUpdateTag = function (a) {
      G();
      H()._updateTags.add(a);
    };
    exports.$applyNodeReplacement = gc;
    exports.$copyNode = function (a) {
      a = a.constructor.clone(a);
      Fb(a, null);
      return a;
    };
    exports.$createLineBreakNode = Kd;
    exports.$createNodeSelection = Nd;
    exports.$createParagraphNode = zd;
    exports.$createRangeSelection = function () {
      var a = new W('root', 0, 'element'),
        b = new W('root', 0, 'element');
      return new Cd(a, b, 0);
    };
    exports.$createTextNode = M;
    exports.$getAdjacentNode = Zb;
    exports.$getNearestNodeFromDOMNode = lb;
    exports.$getNearestRootOrShadowRoot = ec;
    exports.$getNodeByKey = L;
    exports.$getPreviousSelection = Ub;
    exports.$getRoot = Nb;
    exports.$getSelection = u;
    exports.$getTextContent = function () {
      var a = u();
      return null === a ? '' : a.getTextContent();
    };
    exports.$hasAncestor = dc;
    exports.$insertNodes = function (a, b) {
      var c = u();
      null === c && (c = Nb().selectEnd());
      return c.insertNodes(a, b);
    };
    exports.$isDecoratorNode = z;
    exports.$isElementNode = F;
    exports.$isInlineElementOrDecoratorNode = function (a) {
      return (F(a) && a.isInline()) || (z(a) && a.isInline());
    };
    exports.$isLeafNode = Db;
    exports.$isLineBreakNode = Eb;
    exports.$isNodeSelection = pd;
    exports.$isParagraphNode = function (a) {
      return a instanceof Le;
    };
    exports.$isRangeSelection = C;
    exports.$isRootNode = O;
    exports.$isRootOrShadowRoot = fc;
    exports.$isTextNode = B;
    exports.$nodesOfType = function (a) {
      var b = I();
      var c = b._readOnly,
        d = a.getType();
      b = b._nodeMap;
      var e = [];
      for (
        var _iterator10 = b,
          _isArray10 = Array.isArray(_iterator10),
          _i10 = 0,
          _iterator10 = _isArray10
            ? _iterator10
            : _iterator10[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var _ref17;
        if (_isArray10) {
          if (_i10 >= _iterator10.length) break;
          _ref17 = _iterator10[_i10++];
        } else {
          _i10 = _iterator10.next();
          if (_i10.done) break;
          _ref17 = _i10.value;
        }
        var _ref18 = _ref17;
        var f = _ref18[1];
        f instanceof a && f.__type === d && (c || f.isAttached()) && e.push(f);
      }
      return e;
    };
    exports.$normalizeSelection__EXPERIMENTAL = qc;
    exports.$parseSerializedNode = function (a) {
      return ee(a, H()._nodes);
    };
    exports.$setCompositionKey = K;
    exports.$setSelection = ob;
    exports.BLUR_COMMAND = La;
    exports.CAN_REDO_COMMAND = {};
    exports.CAN_UNDO_COMMAND = {};
    exports.CLEAR_EDITOR_COMMAND = {};
    exports.CLEAR_HISTORY_COMMAND = {};
    exports.CLICK_COMMAND = ca;
    exports.COMMAND_PRIORITY_CRITICAL = 4;
    exports.COMMAND_PRIORITY_EDITOR = 0;
    exports.COMMAND_PRIORITY_HIGH = 3;
    exports.COMMAND_PRIORITY_LOW = 1;
    exports.COMMAND_PRIORITY_NORMAL = 2;
    exports.CONTROLLED_TEXT_INSERTION_COMMAND = ia;
    exports.COPY_COMMAND = Ia;
    exports.CUT_COMMAND = Ja;
    exports.DELETE_CHARACTER_COMMAND = ea;
    exports.DELETE_LINE_COMMAND = na;
    exports.DELETE_WORD_COMMAND = ma;
    exports.DEPRECATED_$createGridSelection = function () {
      var a = new W('root', 0, 'element'),
        b = new W('root', 0, 'element');
      return new Dd('root', a, b);
    };
    exports.DEPRECATED_$isGridCellNode = Id;
    exports.DEPRECATED_$isGridNode = Gd;
    exports.DEPRECATED_$isGridRowNode = Hd;
    exports.DEPRECATED_$isGridSelection = Ed;
    exports.DEPRECATED_GridCellNode = Pe;
    exports.DEPRECATED_GridNode = Qe;
    exports.DEPRECATED_GridRowNode = Re;
    exports.DRAGEND_COMMAND = Ha;
    exports.DRAGOVER_COMMAND = Ga;
    exports.DRAGSTART_COMMAND = Fa;
    exports.DROP_COMMAND = Ea;
    exports.DecoratorNode = pe;
    exports.ElementNode = qe;
    exports.FOCUS_COMMAND = Ka;
    exports.FORMAT_ELEMENT_COMMAND = {};
    exports.FORMAT_TEXT_COMMAND = oa;
    exports.INDENT_CONTENT_COMMAND = {};
    exports.INSERT_LINE_BREAK_COMMAND = fa;
    exports.INSERT_PARAGRAPH_COMMAND = ha;
    exports.KEY_ARROW_DOWN_COMMAND = wa;
    exports.KEY_ARROW_LEFT_COMMAND = ta;
    exports.KEY_ARROW_RIGHT_COMMAND = ra;
    exports.KEY_ARROW_UP_COMMAND = va;
    exports.KEY_BACKSPACE_COMMAND = za;
    exports.KEY_DELETE_COMMAND = Ba;
    exports.KEY_ENTER_COMMAND = xa;
    exports.KEY_ESCAPE_COMMAND = Aa;
    exports.KEY_MODIFIER_COMMAND = Ma;
    exports.KEY_SPACE_COMMAND = ya;
    exports.KEY_TAB_COMMAND = Da;
    exports.LineBreakNode = ve;
    exports.MOVE_TO_END = sa;
    exports.MOVE_TO_START = ua;
    exports.OUTDENT_CONTENT_COMMAND = {};
    exports.PASTE_COMMAND = ja;
    exports.ParagraphNode = Le;
    exports.REDO_COMMAND = qa;
    exports.REMOVE_TEXT_COMMAND = ka;
    exports.RootNode = se;
    exports.SELECTION_CHANGE_COMMAND = ba;
    exports.TextNode = Ce;
    exports.UNDO_COMMAND = pa;
    exports.createCommand = function () {
      return {};
    };
    exports.createEditor = function (a) {
      var b = a || {},
        c = Y,
        d = b.theme || {};
      var e = void 0 === a ? c : b.parentEditor || null,
        f = b.disableEvents || !1,
        g = te(),
        h = b.namespace || (null !== e ? e._config.namespace : Sb()),
        k = b.editorState,
        l = [se, Ce, ve, Le].concat(b.nodes || []),
        m = b.onError;
      b = void 0 !== b.editable ? b.editable : !0;
      if (void 0 === a && null !== c) a = c._nodes;
      else
        for (a = new Map(), c = 0; c < l.length; c++) {
          var n = l[c];
          var p = null;
          'function' !== typeof n &&
            ((p = n), (n = p.replace), (p = p['with']));
          var r = n.getType();
          a.set(r, { klass: n, replace: p, transforms: new Set() });
        }
      d = new Oe(
        g,
        e,
        a,
        { disableEvents: f, namespace: h, theme: d },
        m ? m : console.error,
        Ne(a),
        b,
      );
      void 0 !== k && ((d._pendingEditorState = k), (d._dirtyType = 2));
      return d;
    };
  },
  null,
);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @fullSyntaxTransform
 * @generated
 * @noflow
 * @nolint
 * @oncall lexical_web_text_editor
 * @preserve-invariant-messages
 * @preserve-whitespace
 * @preventMunge
 */ __d(
  'LexicalText.prod',
  ['Lexical'],
  function $module_LexicalText_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    'use strict';
    function r(c, g) {
      if (g === void 0) {
        g = !0;
      }
      if (c) return !1;
      c = t();
      g && (c = c.trim());
      return '' === c;
    }
    function t() {
      return require('Lexical').$getRoot().getTextContent();
    }
    function u(c) {
      if (!r(c, !1)) return !1;
      c = require('Lexical').$getRoot().getChildren();
      var g = c.length;
      if (1 < g) return !1;
      for (var e = 0; e < g; e++) {
        var b = c[e];
        if (require('Lexical').$isElementNode(b)) {
          if (!require('Lexical').$isParagraphNode(b) || 0 !== b.__indent)
            return !1;
          b = b.getChildren();
          var n = b.length;
          for (var p = 0; p < n; p++) {
            if (!require('Lexical').$isTextNode(b[e])) return !1;
          }
        }
      }
      return !0;
    }
    exports.$canShowPlaceholder = u;
    exports.$canShowPlaceholderCurry = function (c) {
      return function () {
        return u(c);
      };
    };
    exports.$findTextIntersectionFromCharacters = function (c, g) {
      var b = c.getFirstChild();
      c = 0;
      a: for (; null !== b; ) {
        if (require('Lexical').$isElementNode(b)) {
          var e = b.getFirstChild();
          if (null !== e) {
            b = e;
            continue;
          }
        } else if (require('Lexical').$isTextNode(b)) {
          e = b.getTextContentSize();
          if (c + e > g) return { node: b, offset: g - c };
          c += e;
        }
        e = b.getNextSibling();
        if (null !== e) b = e;
        else {
          for (b = b.getParent(); null !== b; ) {
            e = b.getNextSibling();
            if (null !== e) {
              b = e;
              continue a;
            }
            b = b.getParent();
          }
          break;
        }
      }
      return null;
    };
    exports.$isRootTextContentEmpty = r;
    exports.$isRootTextContentEmptyCurry = function (c, g) {
      return function () {
        return r(c, g);
      };
    };
    exports.$rootTextContent = t;
    exports.registerLexicalTextEntity = function (c, g, b, e) {
      var n = function n(a) {
          var d = require('Lexical').$createTextNode(a.getTextContent());
          d.setFormat(a.getFormat());
          a.replace(d);
        },
        p = c.registerNodeTransform(require('Lexical').TextNode, function (a) {
          if (a.isSimpleText()) {
            var d = a.getPreviousSibling(),
              l = a.getTextContent(),
              m = a;
            if (require('Lexical').$isTextNode(d)) {
              var k = d.getTextContent(),
                f = g(k + l);
              if (d instanceof b) {
                if (null === f || 0 !== d.getLatest().__mode) {
                  n(d);
                  return;
                }
                f = f.end - k.length;
                if (0 < f) {
                  m = l.slice(0, f);
                  m = k + m;
                  d.select();
                  d.setTextContent(m);
                  f === l.length
                    ? a.remove()
                    : ((d = l.slice(f)), a.setTextContent(d));
                  return;
                }
              } else if (null === f || f.start < k.length) return;
            }
            for (;;) {
              var _m$splitText, _m$splitText2;
              a = g(l);
              l = f = null === a ? '' : l.slice(a.end);
              if ('' === f) {
                if (
                  ((k = m.getNextSibling()), require('Lexical').$isTextNode(k))
                )
                  if (
                    ((f = m.getTextContent() + k.getTextContent()),
                    (f = g(f)),
                    null === f)
                  ) {
                    k instanceof b ? n(k) : k.markDirty();
                    break;
                  } else if (0 !== f.start) break;
              } else if (((k = g(f)), null !== k && 0 === k.start)) break;
              if (null === a) break;
              if (
                0 === a.start &&
                require('Lexical').$isTextNode(d) &&
                d.isTextEntity()
              )
                continue;
              var q = void 0;
              0 === a.start
                ? ((_m$splitText = m.splitText(a.end)),
                  (q = _m$splitText[0]),
                  (m = _m$splitText[1]),
                  _m$splitText)
                : ((_m$splitText2 = m.splitText(a.start, a.end)),
                  (q = _m$splitText2[1]),
                  (m = _m$splitText2[2]),
                  _m$splitText2);
              a = e(q);
              q.replace(a);
              if (null == m) break;
            }
          }
        });
      c = c.registerNodeTransform(b, function (a) {
        var d = a.getTextContent();
        var l = g(d);
        null === l || 0 !== l.start
          ? n(a)
          : d.length > l.end
          ? a.splitText(l.end)
          : ((d = a.getPreviousSibling()),
            require('Lexical').$isTextNode(d) &&
              d.isTextEntity() &&
              (n(d), n(a)),
            (d = a.getNextSibling()),
            require('Lexical').$isTextNode(d) &&
              d.isTextEntity() &&
              (n(d), a instanceof b && n(a)));
      });
      return [p, c];
    };
  },
  null,
);
__d(
  'react-relay/ReactRelayQueryFetcher',
  ['invariant', 'relay-runtime'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = b('relay-runtime').__internal.fetchQuery,
      i = b('relay-runtime').createOperationDescriptor,
      j = b('relay-runtime').isRelayModernEnvironment;
    a = (function () {
      function a(a) {
        (this.$4 = []),
          (this.$8 = !1),
          a != null &&
            ((this.$7 = a.cacheSelectionReference),
            (this.$4 = a.selectionReferences));
      }
      var b = a.prototype;
      b.getSelectionReferences = function () {
        return {
          cacheSelectionReference: this.$7,
          selectionReferences: this.$4,
        };
      };
      b.lookupInStore = function (a, b, c) {
        if (
          (c === 'store-and-network' || c === 'store-or-network') &&
          a.check(b).status === 'available'
        ) {
          this.$9(a, b);
          return a.lookup(b.fragment);
        }
        return null;
      };
      b.getFetchResult = function () {
        if (this.$8) {
          if (this.$6 != null) return { error: this.$6 };
          else if (this.$5 != null) return { snapshot: this.$5 };
        } else return null;
      };
      b.execute = function (a) {
        var b = this,
          c = a.environment,
          d = a.operation;
        a = a.preservePreviousReferences;
        var e = a === void 0 ? !1 : a,
          f = c.retain(d);
        a = function () {
          b.$4 = b.$4.concat(f);
        };
        var g = function () {
            e || b.disposeSelectionReferences(), (b.$4 = b.$4.concat(f));
          },
          i = function () {
            b.$4 = b.$4.concat(f);
          };
        return !j(c)
          ? c
              .execute({ operation: d })
              ['do']({ error: a, complete: g, unsubscribe: i })
          : h(c, d)['do']({ error: a, complete: g, unsubscribe: i });
      };
      b.setOnDataChange = function (a) {
        this.$1 || g(0, 4542),
          typeof a === 'function' &&
            ((this.$1.onDataChangeCallbacks =
              this.$1.onDataChangeCallbacks || []),
            this.$1.onDataChangeCallbacks.push(a),
            this.$8 &&
              (this.$6 != null
                ? a({ error: this.$6 })
                : this.$5 != null && a({ snapshot: this.$5 })));
      };
      b.fetch = function (a, b) {
        var c = this,
          d = a.environment,
          e = a.operation;
        a = a.onDataChange;
        var f = !1,
          g;
        this.disposeRequest();
        var h = this.$1 && this.$1.onDataChangeCallbacks;
        this.$1 = {
          environment: d,
          onDataChangeCallbacks: h || [],
          operation: e,
        };
        a &&
          this.$1.onDataChangeCallbacks.indexOf(a) === -1 &&
          this.$1.onDataChangeCallbacks.push(a);
        h = b ? i(e.request.node, e.request.variables, b) : e;
        var j = this.execute({ environment: d, operation: h })
          ['finally'](function () {
            c.$2 = null;
          })
          .subscribe({
            next: function () {
              (c.$8 = !0), (c.$6 = null), c.$10({ notifyFirstResult: f });
            },
            error: function (a) {
              c.$8 = !0;
              c.$6 = a;
              c.$5 = null;
              var b = c.$1 && c.$1.onDataChangeCallbacks;
              f
                ? b &&
                  b.forEach(function (b) {
                    b({ error: a });
                  })
                : (g = a);
            },
          });
        this.$2 = {
          dispose: function () {
            j.unsubscribe();
          },
        };
        f = !0;
        if (g) throw g;
        return this.$5;
      };
      b.retry = function (a) {
        this.$1 || g(0, 4543);
        return this.fetch(
          {
            environment: this.$1.environment,
            operation: this.$1.operation,
            onDataChange: null,
          },
          a,
        );
      };
      b.dispose = function () {
        this.disposeRequest(), this.disposeSelectionReferences();
      };
      b.disposeRequest = function () {
        (this.$6 = null),
          (this.$5 = null),
          this.$2 && this.$2.dispose(),
          this.$3 && (this.$3.dispose(), (this.$3 = null));
      };
      b.$9 = function (a, b) {
        this.$11(), (this.$7 = a.retain(b));
      };
      b.$11 = function () {
        this.$7 && this.$7.dispose(), (this.$7 = null);
      };
      b.disposeSelectionReferences = function () {
        this.$11(),
          this.$4.forEach(function (a) {
            return a.dispose();
          }),
          (this.$4 = []);
      };
      b.$10 = function (a) {
        var b = this;
        a = a.notifyFirstResult;
        this.$1 || g(0, 4544);
        var c = this.$1,
          d = c.environment,
          e = c.onDataChangeCallbacks;
        c = c.operation;
        if (this.$5) return;
        this.$5 = d.lookup(c.fragment);
        this.$3 = d.subscribe(this.$5, function (a) {
          if (b.$1 != null) {
            var c = b.$1.onDataChangeCallbacks;
            Array.isArray(c) &&
              c.forEach(function (b) {
                return b({ snapshot: a });
              });
          }
        });
        if (this.$5 && a && Array.isArray(e)) {
          var f = this.$5;
          e.forEach(function (a) {
            return a({ snapshot: f });
          });
        }
      };
      return a;
    })();
    e.exports = a;
  },
  null,
);
__d(
  'react-relay/isRelayEnvironment',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      return (
        typeof a === 'object' &&
        a !== null &&
        typeof a.check === 'function' &&
        typeof a.lookup === 'function' &&
        typeof a.retain === 'function' &&
        typeof a.execute === 'function' &&
        typeof a.subscribe === 'function'
      );
    }
    e.exports = a;
  },
  null,
);
__d(
  'react-relay/RelayContext',
  ['invariant', 'react-relay/isRelayEnvironment'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      h(a) || g(0, 6172, a);
      return a;
    }
    function h(a) {
      return (
        typeof a === 'object' &&
        a !== null &&
        !Array.isArray(a) &&
        b('react-relay/isRelayEnvironment')(a.environment)
      );
    }
    e.exports = { assertRelayContext: a, isRelayContext: h };
  },
  null,
);
__d(
  'isValidUniqueID',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      return (
        a !== null &&
        a !== void 0 &&
        a !== '' &&
        (typeof a === 'string' || typeof a === 'number')
      );
    }
    f['default'] = a;
  },
  66,
);
__d(
  'SearchableEntry',
  ['FbtResultBase', 'HTML', 'isValidUniqueID'],
  function (a, b, c, d, e, f, g) {
    function h(a) {
      if (a == null || a === '') return '';
      else if (typeof a === 'string') return a;
      else if (a instanceof c('FbtResultBase')) return a.toString();
      else if (typeof a === 'object') {
        a = c('HTML').replaceJSONWrapper(a);
        if (c('HTML').isHTML(a)) {
          a = a.getRootNode();
          return a.textContent || a.innerText || '';
        } else return '';
      } else return '';
    }
    a = (function () {
      function a(a) {
        this.valueOf = this.getUniqueID;
        c('isValidUniqueID')(a.uniqueID) || (a.uniqueID = 'null');
        this.$8 = a.uniqueID + '';
        a.title instanceof c('FbtResultBase') && (a.title = a.title.toString());
        (a.title != null && typeof a.title === 'string') || (a.title = 'null');
        this.$6 = a.title;
        this.$3 = a.order || 0;
        this.$5 = h(a.subtitle);
        this.$2 = a.keywordString || '';
        this.$4 = a.photo || '';
        this.$9 = a.uri || '';
        this.$7 = h(a.type);
        var b = a.auxiliaryData == null ? {} : a.auxiliaryData;
        this.$1 = b;
        this.$10 = a.dataType || '';
      }
      var b = a.prototype;
      b.getUniqueID = function () {
        return this.$8;
      };
      b.getOrder = function () {
        return this.$3;
      };
      b.getTitle = function () {
        return this.$6;
      };
      b.getSubtitle = function () {
        return this.$5;
      };
      b.getKeywordString = function () {
        return this.$2;
      };
      b.getPhoto = function () {
        return this.$4;
      };
      b.getURI = function () {
        return this.$9;
      };
      b.getType = function () {
        return this.$7;
      };
      b.getAuxiliaryData = function () {
        return this.$1;
      };
      b.getDataType = function () {
        return this.$10;
      };
      b.toPlainObject = function () {
        return {
          auxiliaryData: this.$1,
          keywordString: this.$2,
          order: this.$3,
          photo: this.$4,
          subtitle: this.$5,
          title: this.$6,
          type: this.$7,
          uniqueID: this.$8,
          uri: this.$9,
          dataType: this.$10,
        };
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'CometResharesDialogQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '6525747220775646';
  },
  null,
);
