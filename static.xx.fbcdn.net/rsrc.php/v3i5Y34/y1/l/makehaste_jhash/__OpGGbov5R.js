/*FB_PKG_DELIM*/

__d(
  'CometUFIClassicCommentTopReactions_feedback$normalization.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        },
        b = [a];
      return {
        kind: 'SplitOperation',
        metadata: {},
        name: 'CometUFIClassicCommentTopReactions_feedback$normalization',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ReactorsOfContentConnection',
            kind: 'LinkedField',
            name: 'reactors',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'count',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'count_reduced',
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: [
              {
                kind: 'Variable',
                name: 'use_default_actor',
                variableName: 'useDefaultActor',
              },
            ],
            concreteType: 'FeedbackReactionInfo',
            kind: 'LinkedField',
            name: 'viewer_feedback_reaction_info',
            plural: !1,
            selections: b,
            storageKey: null,
          },
          a,
          {
            alias: null,
            args: [
              {
                kind: 'Literal',
                name: 'orderby',
                value: ['COUNT_DESC', 'REACTION_TYPE'],
              },
            ],
            concreteType: 'TopReactionsConnection',
            kind: 'LinkedField',
            name: 'top_reactions',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'TopReactionsEdge',
                kind: 'LinkedField',
                name: 'edges',
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'reaction_count',
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'FeedbackReactionInfo',
                    kind: 'LinkedField',
                    name: 'node',
                    plural: !1,
                    selections: b,
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: 'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])',
          },
        ],
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'CometUFIClassicCommentTopReactions_feedback.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        },
        b = [a];
      return {
        argumentDefinitions: [
          { kind: 'RootArgument', name: 'useDefaultActor' },
        ],
        kind: 'Fragment',
        metadata: null,
        name: 'CometUFIClassicCommentTopReactions_feedback',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ReactorsOfContentConnection',
            kind: 'LinkedField',
            name: 'reactors',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'count',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'count_reduced',
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: [
              {
                kind: 'Variable',
                name: 'use_default_actor',
                variableName: 'useDefaultActor',
              },
            ],
            concreteType: 'FeedbackReactionInfo',
            kind: 'LinkedField',
            name: 'viewer_feedback_reaction_info',
            plural: !1,
            selections: b,
            storageKey: null,
          },
          a,
          {
            alias: null,
            args: [
              {
                kind: 'Literal',
                name: 'orderby',
                value: ['COUNT_DESC', 'REACTION_TYPE'],
              },
            ],
            concreteType: 'TopReactionsConnection',
            kind: 'LinkedField',
            name: 'top_reactions',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'TopReactionsEdge',
                kind: 'LinkedField',
                name: 'edges',
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'reaction_count',
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'FeedbackReactionInfo',
                    kind: 'LinkedField',
                    name: 'node',
                    plural: !1,
                    selections: b,
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: 'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])',
          },
        ],
        type: 'Feedback',
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'CometUFIReactionsDialogQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5753925784654316';
  },
  null,
);
__d(
  'CometUFIReactionsDialogQuery$Parameters',
  ['CometUFIReactionsDialogQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b('CometUFIReactionsDialogQuery_facebookRelayOperation'),
        metadata: {},
        name: 'CometUFIReactionsDialogQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometUFIShareActionLinkMenuQuery$Parameters',
  ['CometUFIShareActionLinkMenuQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b('CometUFIShareActionLinkMenuQuery_facebookRelayOperation'),
        metadata: {},
        name: 'CometUFIShareActionLinkMenuQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'isNotOutlierReactionComet_feedback.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [{ kind: 'RootArgument', name: 'useDefaultActor' }],
      kind: 'Fragment',
      metadata: { mask: !1 },
      name: 'isNotOutlierReactionComet_feedback',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'ReactorsOfContentConnection',
          kind: 'LinkedField',
          name: 'reactors',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'count',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: [
            {
              kind: 'Variable',
              name: 'use_default_actor',
              variableName: 'useDefaultActor',
            },
          ],
          concreteType: 'FeedbackReactionInfo',
          kind: 'LinkedField',
          name: 'viewer_feedback_reaction_info',
          plural: !1,
          selections: [
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
      type: 'Feedback',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'isNotOutlierReactionComet_topReactionsEdge.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: { mask: !1 },
      name: 'isNotOutlierReactionComet_topReactionsEdge',
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'reaction_count',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: 'FeedbackReactionInfo',
          kind: 'LinkedField',
          name: 'node',
          plural: !1,
          selections: [
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
      type: 'TopReactionsEdge',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometAngerReaction',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a =
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='67.194%25'%3e%3cstop offset='0%25' stop-color='%23E04300'/%3e%3cstop offset='100%25' stop-color='%23FFA320'/%3e%3c/linearGradient%3e%3clinearGradient id='f' x1='50%25' x2='50%25' y1='13.511%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%233D0D00'/%3e%3cstop offset='100%25' stop-color='%23661C04'/%3e%3c/linearGradient%3e%3clinearGradient id='g' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23191A33'/%3e%3cstop offset='87.162%25' stop-color='%233B426A'/%3e%3c/linearGradient%3e%3clinearGradient id='l' x1='82.871%25' x2='82.871%25' y1='109.337%25' y2='0%25'%3e%3cstop offset='0%25' stop-color='%239A2F00'/%3e%3cstop offset='100%25' stop-color='%23D44800'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.731459466 0 0 0 0 0.0510349878 0 0 0 0 0.0184398032 0 0 0 0.353638549 0'/%3e%3c/filter%3e%3cfilter id='d' width='169.5%25' height='366.7%25' x='-33.8%25' y='-66.7%25' filterUnits='objectBoundingBox'%3e%3cfeOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter1'/%3e%3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='.5'/%3e%3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 1 0 0 0 0 0.509680707 0 0 0 0 0 0 0 0 0.371206975 0'/%3e%3c/filter%3e%3cfilter id='i' width='111.4%25' height='138.5%25' x='-5.7%25' y='-19.2%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='.5'/%3e%3cfeOffset in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.0387427847 0 0 0 0 0.0406182666 0 0 0 0 0.0875053146 0 0 0 1 0'/%3e%3c/filter%3e%3cfilter id='j' width='106.4%25' height='165.6%25' x='-3.2%25' y='-16.4%25' filterUnits='objectBoundingBox'%3e%3cfeOffset dy='.6' in='SourceAlpha' result='shadowOffsetOuter1'/%3e%3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='.05'/%3e%3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0.565874787 0 0 0 0 0.151271555 0 0 0 0 0 0 0 0 0.150240385 0'/%3e%3c/filter%3e%3cpath id='b' d='M16 8A8 8 0 110 8a8 8 0 0116 0'/%3e%3cpath id='e' d='M5.2 13.551c0 .528 1.253.444 2.8.444 1.546 0 2.8.084 2.8-.444 0-.636-1.254-1.051-2.8-1.051-1.547 0-2.8.415-2.8 1.051'/%3e%3cpath id='h' d='M3.6 9.831c0-.791.538-1.431 1.2-1.431.663 0 1.2.64 1.2 1.431 0 .329-.093.633-.252.874a.527.527 0 01-.318.22c-.15.036-.373.075-.63.075s-.481-.039-.63-.075a.524.524 0 01-.318-.22 1.588 1.588 0 01-.252-.874zm6.4 0c0-.791.537-1.431 1.2-1.431.662 0 1.2.64 1.2 1.431 0 .329-.094.633-.252.874a.524.524 0 01-.318.22 2.734 2.734 0 01-.63.075c-.257 0-.48-.039-.63-.075a.53.53 0 01-.319-.22A1.596 1.596 0 0110 9.831z'/%3e%3cpath id='k' d='M9 7.6c0-.446.163-.6.445-.6.28 0 .414.276.506 1.066 1.128 0 3.038-.534 3.222-.534.178 0 .277.085.317.267.035.158-.023.308-.221.4-.621.287-2.443.935-3.984.935-.168 0-.285-.086-.285-.301V7.6zm-2.951.466C6.141 7.276 6.275 7 6.555 7c.282 0 .445.154.445.6v1.233c0 .215-.117.301-.285.301-1.541 0-3.363-.648-3.984-.935-.198-.092-.256-.242-.221-.4.041-.182.14-.267.317-.267.184 0 2.094.534 3.222.534z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23d)' xlink:href='%23e'/%3e%3cuse fill='url(%23f)' xlink:href='%23e'/%3e%3cuse fill='url(%23g)' xlink:href='%23h'/%3e%3cuse fill='black' filter='url(%23i)' xlink:href='%23h'/%3e%3cpath fill='%234F4F67' d='M4.968 9.333a.329.329 0 01.007.071c0 .201-.176.366-.394.366-.217 0-.393-.165-.393-.366 0-.083.03-.16.08-.221.224.053.459.104.7.15zm5.926.437c-.211 0-.383-.153-.393-.348.259-.038.516-.085.766-.136a.333.333 0 01.02.119c0 .2-.175.365-.393.365z'/%3e%3cuse fill='black' filter='url(%23j)' xlink:href='%23k'/%3e%3cuse fill='url(%23l)' xlink:href='%23k'/%3e%3c/g%3e%3c/svg%3e";
    f['default'] = a;
  },
  66,
);
__d(
  'CometHahaReaction',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a =
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='10.25%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FEEA70'/%3e%3cstop offset='100%25' stop-color='%23F69B30'/%3e%3c/linearGradient%3e%3clinearGradient id='d' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23472315'/%3e%3cstop offset='100%25' stop-color='%238B3A0E'/%3e%3c/linearGradient%3e%3clinearGradient id='e' x1='50%25' x2='50%25' y1='0%25' y2='81.902%25'%3e%3cstop offset='0%25' stop-color='%23FC607C'/%3e%3cstop offset='100%25' stop-color='%23D91F3A'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.921365489 0 0 0 0 0.460682745 0 0 0 0 0 0 0 0 0.35 0'/%3e%3c/filter%3e%3cpath id='b' d='M16 8A8 8 0 110 8a8 8 0 0116 0'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='url(%23d)' d='M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008'/%3e%3cpath fill='url(%23e)' d='M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5'/%3e%3cpath fill='%232A3755' d='M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.371-.78.011-1.708.255-2.506.612-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604a7.077 7.077 0 00-1.315-.768c-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 011.552.925zm3.577 0a8.953 8.953 0 011.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.029 7.029 0 00-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788z'/%3e%3c/g%3e%3c/svg%3e";
    f['default'] = a;
  },
  66,
);
__d(
  'CometLikeReaction',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a =
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e";
    f['default'] = a;
  },
  66,
);
__d(
  'CometLoveReaction',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a =
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e";
    f['default'] = a;
  },
  66,
);
__d(
  'CometSorryReaction',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a =
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='10.25%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FEEA70'/%3e%3cstop offset='100%25' stop-color='%23F69B30'/%3e%3c/linearGradient%3e%3clinearGradient id='d' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23472315'/%3e%3cstop offset='100%25' stop-color='%238B3A0E'/%3e%3c/linearGradient%3e%3clinearGradient id='e' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23191A33'/%3e%3cstop offset='87.162%25' stop-color='%233B426A'/%3e%3c/linearGradient%3e%3clinearGradient id='h' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23E78E0D'/%3e%3cstop offset='100%25' stop-color='%23CB6000'/%3e%3c/linearGradient%3e%3clinearGradient id='i' x1='50%25' x2='50%25' y1='81.899%25' y2='17.94%25'%3e%3cstop offset='0%25' stop-color='%2335CAFC'/%3e%3cstop offset='100%25' stop-color='%23007EDB'/%3e%3c/linearGradient%3e%3clinearGradient id='j' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%236AE1FF' stop-opacity='.287'/%3e%3cstop offset='100%25' stop-color='%23A8E3FF' stop-opacity='.799'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.921365489 0 0 0 0 0.460682745 0 0 0 0 0 0 0 0 0.35 0'/%3e%3c/filter%3e%3cfilter id='g' width='111.4%25' height='137.5%25' x='-5.7%25' y='-18.8%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='.5'/%3e%3cfeOffset in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.0411226772 0 0 0 0 0.0430885485 0 0 0 0 0.0922353316 0 0 0 0.819684222 0'/%3e%3c/filter%3e%3cpath id='b' d='M16 8A8 8 0 110 8a8 8 0 0116 0'/%3e%3cpath id='f' d='M3.599 8.8c0-.81.509-1.466 1.134-1.466.627 0 1.134.656 1.134 1.466 0 .338-.089.65-.238.898a.492.492 0 01-.301.225c-.14.037-.353.077-.595.077-.243 0-.453-.04-.595-.077a.49.49 0 01-.3-.225 1.741 1.741 0 01-.239-.898zm6.534 0c0-.81.508-1.466 1.133-1.466.627 0 1.134.656 1.134 1.466 0 .338-.089.65-.238.898a.49.49 0 01-.301.225 2.371 2.371 0 01-1.189 0 .49.49 0 01-.301-.225 1.74 1.74 0 01-.238-.898z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='url(%23d)' d='M5.333 12.765c0 .137.094.235.25.235.351 0 .836-.625 2.417-.625s2.067.625 2.417.625c.156 0 .25-.098.25-.235C10.667 12.368 9.828 11 8 11c-1.828 0-2.667 1.368-2.667 1.765'/%3e%3cuse fill='url(%23e)' xlink:href='%23f'/%3e%3cuse fill='black' filter='url(%23g)' xlink:href='%23f'/%3e%3cpath fill='%234E506A' d='M4.616 7.986c.128.125.136.372.017.551-.12.178-.32.222-.448.096-.128-.125-.135-.372-.017-.55.12-.179.32-.222.448-.097zm6.489 0c.128.125.136.372.018.551-.12.178-.32.222-.45.096-.127-.125-.134-.372-.015-.55.119-.179.319-.222.447-.097z'/%3e%3cpath fill='url(%23h)' d='M4.157 5.153c.332-.153.596-.219.801-.219.277 0 .451.119.55.306.175.329.096.401-.198.459-1.106.224-2.217.942-2.699 1.39-.301.28-.589-.03-.436-.274.154-.244.774-1.105 1.982-1.662zm6.335.087c.099-.187.273-.306.55-.306.206 0 .469.066.801.219 1.208.557 1.828 1.418 1.981 1.662.153.244-.134.554-.435.274-.483-.448-1.593-1.166-2.7-1.39-.294-.058-.371-.13-.197-.459z'/%3e%3cpath fill='url(%23i)' d='M13.5 16c-.828 0-1.5-.748-1.5-1.671 0-.922.356-1.545.643-2.147.598-1.258.716-1.432.857-1.432.141 0 .259.174.857 1.432.287.602.643 1.225.643 2.147 0 .923-.672 1.671-1.5 1.671'/%3e%3cpath fill='url(%23j)' d='M13.5 13.606c-.328 0-.594-.296-.594-.66 0-.366.141-.613.255-.852.236-.498.283-.566.339-.566.056 0 .103.068.339.566.114.24.255.486.255.851s-.266.661-.594.661'/%3e%3c/g%3e%3c/svg%3e";
    f['default'] = a;
  },
  66,
);
__d(
  'CometSupportReaction',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a =
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 180 180' %3e %3cdefs%3e %3cradialGradient cx='50.001%25' cy='50%25' fx='50.001%25' fy='50%25' r='50%25' id='c'%3e %3cstop stop-color='%23F08423' stop-opacity='0' offset='0%25'/%3e %3cstop stop-color='%23F08423' stop-opacity='.34' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50%25' cy='44.086%25' fx='50%25' fy='44.086%25' r='57.412%25' gradientTransform='matrix(-1 0 0 -.83877 1 .81)' id='d'%3e %3cstop stop-color='%23FFE874' offset='0%25'/%3e %3cstop stop-color='%23FFE368' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='10.82%25' cy='52.019%25' fx='10.82%25' fy='52.019%25' r='10.077%25' gradientTransform='matrix(.91249 .4091 -.31644 .7058 .174 .109)' id='e'%3e %3cstop stop-color='%23F28A2D' stop-opacity='.5' offset='0%25'/%3e %3cstop stop-color='%23F28A2D' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='74.131%25' cy='76.545%25' fx='74.131%25' fy='76.545%25' r='28.284%25' gradientTransform='rotate(-38.243 1.4 .537) scale(1 .40312)' id='f'%3e %3cstop stop-color='%23F28A2D' stop-opacity='.5' offset='0%25'/%3e %3cstop stop-color='%23F28A2D' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='31.849%25' cy='12.675%25' fx='31.849%25' fy='12.675%25' r='10.743%25' gradientTransform='matrix(.98371 -.17976 .03575 .19562 0 .16)' id='g'%3e %3cstop stop-color='%23D45F00' stop-opacity='.25' offset='0%25'/%3e %3cstop stop-color='%23D45F00' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='68.023%25' cy='12.637%25' fx='68.023%25' fy='12.637%25' r='12.093%25' gradientTransform='rotate(11.848 .192 .076) scale(1 .19886)' id='h'%3e %3cstop stop-color='%23D45F00' stop-opacity='.25' offset='0%25'/%3e %3cstop stop-color='%23D45F00' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50.709%25' cy='66.964%25' fx='50.709%25' fy='66.964%25' r='87.22%25' gradientTransform='matrix(0 -.8825 1 0 -.163 1.117)' id='j'%3e %3cstop stop-color='%233B446B' offset='0%25'/%3e %3cstop stop-color='%23202340' offset='68.84%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='49.239%25' cy='66.964%25' fx='49.239%25' fy='66.964%25' r='87.22%25' gradientTransform='matrix(0 -.8825 1 0 -.177 1.104)' id='k'%3e %3cstop stop-color='%233B446B' offset='0%25'/%3e %3cstop stop-color='%23202340' offset='68.84%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='48.317%25' cy='42.726%25' fx='48.317%25' fy='42.726%25' r='29.766%25' gradientTransform='matrix(-.09519 -.96847 1.71516 -1.15488 -.204 1.389)' id='l'%3e %3cstop stop-color='%23E38200' offset='0%25'/%3e %3cstop stop-color='%23CD6700' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50%25' cy='29.807%25' fx='50%25' fy='29.807%25' r='31.377%25' gradientTransform='matrix(.07236 -.9819 2.22613 1.12405 -.2 .454)' id='m'%3e %3cstop stop-color='%23E38200' offset='0%25'/%3e %3cstop stop-color='%23CD6700' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='73.646%25' cy='44.274%25' fx='73.646%25' fy='44.274%25' r='29.002%25' gradientTransform='scale(.92955 1) rotate(20.36 .764 .598)' id='p'%3e %3cstop stop-color='%23FF7091' stop-opacity='.7' offset='0%25'/%3e %3cstop stop-color='%23FE6D8E' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='26.749%25' cy='29.688%25' fx='26.749%25' fy='29.688%25' r='29.002%25' gradientTransform='scale(.92955 1) rotate(20.36 .278 .353)' id='q'%3e %3cstop stop-color='%23FF7091' stop-opacity='.7' offset='0%25'/%3e %3cstop stop-color='%23FE6D8E' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='23.798%25' cy='53.35%25' fx='23.798%25' fy='53.35%25' r='24.89%25' gradientTransform='matrix(-.18738 .97947 -1.25372 -.27758 .951 .449)' id='r'%3e %3cstop stop-color='%239C0600' stop-opacity='.999' offset='0%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.94' offset='26.692%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='97.063%25' cy='54.555%25' fx='97.063%25' fy='54.555%25' r='15.021%25' gradientTransform='matrix(.8002 .50886 -.59365 1.08039 .518 -.538)' id='s'%3e %3cstop stop-color='%23C71C08' stop-opacity='.75' offset='0%25'/%3e %3cstop stop-color='%23C71C08' stop-opacity='.704' offset='53.056%25'/%3e %3cstop stop-color='%23C71C08' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='4.056%25' cy='24.23%25' fx='4.056%25' fy='24.23%25' r='13.05%25' gradientTransform='matrix(.8728 -.3441 .41218 1.20997 -.095 -.037)' id='t'%3e %3cstop stop-color='%239C0600' stop-opacity='.5' offset='0%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.473' offset='31.614%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='74.586%25' cy='77.013%25' fx='74.586%25' fy='77.013%25' r='17.563%25' gradientTransform='matrix(.77041 .55955 -.56333 .89765 .605 -.339)' id='u'%3e %3cstop stop-color='%239C0600' stop-opacity='.999' offset='0%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.934' offset='45.7%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.803' offset='59.211%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50.001%25' cy='50%25' fx='50.001%25' fy='50%25' r='51.087%25' gradientTransform='matrix(-.3809 .91219 -.97139 -.46943 1.176 .279)' id='v'%3e %3cstop stop-color='%23C71C08' stop-opacity='0' offset='0%25'/%3e %3cstop stop-color='%23C71C08' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='2.243%25' cy='4.089%25' fx='2.243%25' fy='4.089%25' r='122.873%25' gradientTransform='scale(.78523 1) rotate(36.406 .025 .05)' id='x'%3e %3cstop stop-color='%23EDA83A' offset='0%25'/%3e %3cstop stop-color='%23FFDC5E' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='100%25' cy='7.011%25' fx='100%25' fy='7.011%25' r='105.039%25' gradientTransform='scale(-.90713 -1) rotate(-45.799 -.217 2.489)' id='z'%3e %3cstop stop-color='%23F4B248' offset='0%25'/%3e %3cstop stop-color='%23FFDD5F' offset='100%25'/%3e %3c/radialGradient%3e %3clinearGradient x1='50%25' y1='95.035%25' x2='50%25' y2='7.417%25' id='b'%3e %3cstop stop-color='%23F28A2D' offset='0%25'/%3e %3cstop stop-color='%23FDE86F' offset='100%25'/%3e %3c/linearGradient%3e %3clinearGradient x1='49.985%25' y1='-40.061%25' x2='49.985%25' y2='111.909%25' id='i'%3e %3cstop stop-color='%23482314' offset='0%25'/%3e %3cstop stop-color='%239A4111' offset='100%25'/%3e %3c/linearGradient%3e %3clinearGradient x1='52.727%25' y1='31.334%25' x2='28.964%25' y2='102.251%25' id='o'%3e %3cstop stop-color='%23F34462' offset='0%25'/%3e %3cstop stop-color='%23CC0820' offset='100%25'/%3e %3c/linearGradient%3e %3cpath d='M180 90c0 49.71-40.29 90-90 90S0 139.71 0 90 40.29 0 90 0s90 40.29 90 90z' id='a'/%3e %3cpath d='M108.947 95.828c-23.47-7.285-31.71 8.844-31.71 8.844s2.376-17.954-21.095-25.24c-22.57-7.004-36.253 13.757-37.307 26.812-2.264 28.103 22.134 59.996 31.26 70.86a8.062 8.062 0 008.34 2.584c13.697-3.777 51.904-16.242 66.009-40.667 6.54-11.328 7.06-36.188-15.497-43.193z' id='n'/%3e %3cpath d='M180.642 90c0 49.71-40.289 90-90 90-49.71 0-90-40.29-90-90s40.29-90 90-90c49.711 0 90 40.29 90 90z' id='w'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg fill-rule='nonzero'%3e %3cg transform='translate(.005 -.004)'%3e %3cuse fill='url(%23b)' xlink:href='%23a'/%3e %3cuse fill='url(%23c)' xlink:href='%23a'/%3e %3cuse fill='url(%23d)' xlink:href='%23a'/%3e %3cuse fill='url(%23e)' xlink:href='%23a'/%3e %3cuse fill='url(%23f)' xlink:href='%23a'/%3e %3cuse fill='url(%23g)' xlink:href='%23a'/%3e %3cuse fill='url(%23h)' xlink:href='%23a'/%3e %3c/g%3e %3cpath d='M109.013 66.234c-1.14-3.051-36.872-3.051-38.011 0-1.322 3.558 6.806 8.396 19.012 8.255 12.192.14 20.306-4.71 18.999-8.255z' fill='url(%23i)' transform='translate(.005 -.004)'/%3e %3cpath d='M68.006 46.125c.014 7.566-4.823 9.788-11.995 10.702-7.102 1.068-11.883-2.068-11.995-10.702-.099-7.256 3.81-16.116 11.995-16.284 8.17.168 11.981 9.028 11.995 16.284z' fill='url(%23j)' transform='translate(.005 -.004)'/%3e %3cpath d='M54.807 35.054c1.18 1.378.97 3.769-.479 5.358-1.448 1.575-3.571 1.744-4.753.366-1.181-1.378-.97-3.77.478-5.344 1.449-1.59 3.572-1.744 4.754-.38z' fill='%234E506A'/%3e %3cpath d='M112.022 46.125c-.014 7.566 4.823 9.788 11.995 10.702 7.102 1.068 11.883-2.068 11.995-10.702.099-7.256-3.81-16.116-11.995-16.284-8.184.168-11.995 9.028-11.995 16.284z' fill='url(%23k)' transform='translate(.005 -.004)'/%3e %3cpath d='M124.078 34.52c.957 1.547.38 3.881-1.293 5.217-1.674 1.336-3.797 1.181-4.753-.366-.957-1.546-.38-3.88 1.293-5.217 1.66-1.336 3.797-1.181 4.753.366z' fill='%234E506A'/%3e %3cpath d='M37.969 23.344c-2.349 1.983-.45 6.047 3.515 4.19 6.328-2.967 19.899-6.623 31.824-5.287 3.164.351 4.19-.113 3.487-4.022-.689-3.853-4.33-6.37-13.387-5.26-14.035 1.716-23.09 8.396-25.44 10.379z' fill='url(%23l)' transform='translate(.005 -.004)'/%3e %3cpath d='M116.592 12.952c-9.056-1.111-12.698 1.42-13.387 5.259-.703 3.91.323 4.373 3.487 4.022 11.925-1.336 25.481 2.32 31.824 5.287 3.965 1.857 5.864-2.207 3.515-4.19-2.348-1.97-11.404-8.649-25.439-10.378z' fill='url(%23m)' transform='translate(.005 -.004)'/%3e %3c/g%3e %3cg fill-rule='nonzero'%3e %3cuse fill='url(%23o)' xlink:href='%23n'/%3e %3cuse fill='url(%23p)' xlink:href='%23n'/%3e %3cuse fill='url(%23q)' xlink:href='%23n'/%3e %3cuse fill='url(%23r)' xlink:href='%23n'/%3e %3cuse fill='url(%23s)' xlink:href='%23n'/%3e %3cuse fill='url(%23t)' xlink:href='%23n'/%3e %3cuse fill='url(%23u)' xlink:href='%23n'/%3e %3cuse fill-opacity='.5' fill='url(%23v)' xlink:href='%23n'/%3e %3c/g%3e %3cg transform='translate(-.637 -.004)'%3e %3cmask id='y' fill='white'%3e %3cuse xlink:href='%23w'/%3e %3c/mask%3e %3cpath d='M15.52 86.231C9.642 80.508-.708 77.892-1.89 91.153c-.927 10.364 3.93 27.694 16.234 37.763C45.282 154.23 74.742 139.667 75.628 122c.699-13.932-15.502-12.327-20.648-12.045-.352.014-.507-.45-.197-.647a48.147 48.147 0 004.725-3.488c4.036-3.403 1.968-9.31-3.67-7.607-.858.253-14.583 4.359-23.288 1.068-9.872-3.726-11.053-7.214-17.03-13.05z' fill='url(%23x)' fill-rule='nonzero' mask='url(%23y)'/%3e %3cpath d='M161.081 88.2c3.502-6.778 9.066-4.401 12.194-3.359 4.61 1.537 7.353 4.4 7.353 11.572 0 17.001-2.812 32.765-17.002 48.6-25.987 28.982-69.935 25.143-73.675 6.862-3.094-15.16 13.066-16.678 18.34-17.381.365-.042.421-.605.098-.746a46.169 46.169 0 01-5.4-2.896c-5.444-3.403-3.989-10.051 2.405-9.07 6.806 1.012 15.23 2.924 22.486 2.207 21.009-2.11 24.975-19.87 33.201-35.789z' fill='url(%23z)' fill-rule='nonzero' mask='url(%23y)'/%3e %3c/g%3e %3c/g%3e %3c/svg%3e";
    f['default'] = a;
  },
  66,
);
__d(
  'CometWowReaction',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a =
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='10.25%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FEEA70'/%3e%3cstop offset='100%25' stop-color='%23F69B30'/%3e%3c/linearGradient%3e%3clinearGradient id='d' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23472315'/%3e%3cstop offset='100%25' stop-color='%238B3A0E'/%3e%3c/linearGradient%3e%3clinearGradient id='e' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23191A33'/%3e%3cstop offset='87.162%25' stop-color='%233B426A'/%3e%3c/linearGradient%3e%3clinearGradient id='j' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23E78E0D'/%3e%3cstop offset='100%25' stop-color='%23CB6000'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.921365489 0 0 0 0 0.460682745 0 0 0 0 0 0 0 0 0.35 0'/%3e%3c/filter%3e%3cfilter id='g' width='111.1%25' height='133.3%25' x='-5.6%25' y='-16.7%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='.5'/%3e%3cfeOffset in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.0980392157 0 0 0 0 0.101960784 0 0 0 0 0.2 0 0 0 0.819684222 0'/%3e%3c/filter%3e%3cfilter id='h' width='204%25' height='927.2%25' x='-52.1%25' y='-333.3%25' filterUnits='objectBoundingBox'%3e%3cfeOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter1'/%3e%3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='1.5'/%3e%3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0.803921569 0 0 0 0 0.388235294 0 0 0 0 0.00392156863 0 0 0 0.14567854 0'/%3e%3c/filter%3e%3cpath id='b' d='M16 8A8 8 0 110 8a8 8 0 0116 0'/%3e%3cpath id='f' d='M3.5 5.5c0-.828.559-1.5 1.25-1.5S6 4.672 6 5.5C6 6.329 5.441 7 4.75 7S3.5 6.329 3.5 5.5zm6.5 0c0-.828.56-1.5 1.25-1.5.691 0 1.25.672 1.25 1.5 0 .829-.559 1.5-1.25 1.5C10.56 7 10 6.329 10 5.5z'/%3e%3cpath id='i' d='M11.068 1.696c.052-.005.104-.007.157-.007.487 0 .99.204 1.372.562a.368.368 0 01.022.51.344.344 0 01-.496.024c-.275-.259-.656-.4-.992-.369a.8.8 0 00-.59.331.346.346 0 01-.491.068.368.368 0 01-.067-.507 1.49 1.49 0 011.085-.612zm-7.665.555a2.042 2.042 0 011.372-.562 1.491 1.491 0 011.242.619.369.369 0 01-.066.507.347.347 0 01-.492-.068.801.801 0 00-.59-.331c-.335-.031-.717.11-.992.369a.344.344 0 01-.496-.024.368.368 0 01.022-.51z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='url(%23d)' d='M5.643 10.888C5.485 12.733 6.369 14 8 14c1.63 0 2.515-1.267 2.357-3.112C10.2 9.042 9.242 8 8 8c-1.242 0-2.2 1.042-2.357 2.888'/%3e%3cuse fill='url(%23e)' xlink:href='%23f'/%3e%3cuse fill='black' filter='url(%23g)' xlink:href='%23f'/%3e%3cpath fill='%234E506A' d='M4.481 4.567c.186.042.29.252.232.469-.057.218-.254.36-.44.318-.186-.042-.29-.252-.232-.47.057-.216.254-.36.44-.317zm6.658.063c.206.047.322.28.258.52-.064.243-.282.4-.489.354-.206-.046-.322-.28-.258-.521.063-.242.282-.4.49-.353z'/%3e%3cuse fill='black' filter='url(%23h)' xlink:href='%23i'/%3e%3cuse fill='url(%23j)' xlink:href='%23i'/%3e%3c/g%3e%3c/svg%3e";
    f['default'] = a;
  },
  66,
);
__d(
  'getReactionSVGSource',
  [
    'CometAngerReaction',
    'CometHahaReaction',
    'CometLikeReaction',
    'CometLoveReaction',
    'CometSorryReaction',
    'CometSupportReaction',
    'CometWowReaction',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    d = 1;
    e = 2;
    f = 3;
    var i = 4,
      j = 7,
      k = 8,
      l = 11,
      m = 12,
      n = 16,
      o = {
        ANGER: c('CometAngerReaction'),
        DOROTHY: '/images/ufi/reactions/svg/thankful.svg',
        HAHA: c('CometHahaReaction'),
        LIKE: c('CometLikeReaction'),
        LOVE: c('CometLoveReaction'),
        SORRY: c('CometSorryReaction'),
        SUPPORT: c('CometSupportReaction'),
        TOTO: '/images/ufi/reactions/svg/pride.svg',
        WOW: c('CometWowReaction'),
      },
      p =
        ((h = {}),
        (h[k] = c('CometAngerReaction')),
        (h[l] = '/images/ufi/reactions/svg/thankful.svg'),
        (h[i] = c('CometHahaReaction')),
        (h[d] = c('CometLikeReaction')),
        (h[e] = c('CometLoveReaction')),
        (h[j] = c('CometSorryReaction')),
        (h[n] = c('CometSupportReaction')),
        (h[m] = '/images/ufi/reactions/svg/pride.svg'),
        (h[f] = c('CometWowReaction')),
        h),
      q =
        ((k = {}),
        (k['444813342392137'] = c('CometAngerReaction')),
        (k['1663186627268800'] = '/images/ufi/reactions/svg/thankful.svg'),
        (k['115940658764963'] = c('CometHahaReaction')),
        (k['1635855486666999'] = c('CometLikeReaction')),
        (k['1678524932434102'] = c('CometLoveReaction')),
        (k['908563459236466'] = c('CometSorryReaction')),
        (k['613557422527858'] = c('CometSupportReaction')),
        (k['899779720071651'] = '/images/ufi/reactions/svg/pride.svg'),
        (k['478547315650144'] = c('CometWowReaction')),
        k);
    function a(a) {
      var b;
      typeof a === 'string' && (b = o[a]);
      typeof a === 'number' && (b = p[a.toString()]);
      return b;
    }
    function b(a) {
      return q[a];
    }
    g.getReactionSVGSource = a;
    g.getReactionSVGSourceByID = b;
  },
  98,
);
__d(
  'CometReactionIcon.react',
  ['getReactionSVGSource', 'react', 'recoverableViolation', 'stylex'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a, b) {
      var e = a.alt,
        f = a.reactionID,
        g = a.role,
        i = d('getReactionSVGSource').getReactionSVGSourceByID(f);
      if (i == null) {
        c('recoverableViolation')(
          'Could not render unsupported reaction id ' + f + '.',
          'comet_ui',
        );
        return null;
      }
      return h.jsx('img', {
        alt: e,
        className: c('stylex')(a.xstyle),
        'data-testid': void 0,
        height: a.size,
        ref: b,
        role: g,
        src: i,
        width: a.size,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.memo(h.forwardRef(a));
    g['default'] = b;
  },
  98,
);
__d(
  'CometLazyTooltip.react',
  ['BaseTooltip.react', 'CometTooltipImpl.react', 'lazyLoadComponent', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useMemo;
    function a(a) {
      var b = a.delayContentMs;
      b = b === void 0 ? 0 : b;
      var d = a.delayTooltipMs;
      d = d === void 0 ? 300 : d;
      var e = a.onVisibilityChange,
        f = a.tooltipProps,
        g = a.tooltipResource;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'delayContentMs',
        'delayTooltipMs',
        'onVisibilityChange',
        'tooltipProps',
        'tooltipResource',
      ]);
      var k = i(
          function (a) {
            a && g.preload(), e && e(a);
          },
          [e, g],
        ),
        l = j(
          function () {
            return c('lazyLoadComponent')(g);
          },
          [g],
        );
      return h.jsx(
        c('BaseTooltip.react'),
        babelHelpers['extends'](
          {
            delayContentMs: b,
            delayTooltipMs: d,
            onVisibilityChange: k,
            tooltip: h.jsx(l, babelHelpers['extends']({}, f)),
            tooltipImpl: c('CometTooltipImpl.react'),
          },
          a,
        ),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometLoggedOutCTAStrings',
  ['fbt', 'CometLink.react', 'react'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    a = Object.freeze({
      createNewAccountText: h._('__JHASH__o-Xd7MMTxJE__JHASH__'),
      emailText: h._('__JHASH__5CF6ihB7q1G__JHASH__'),
      footerTitle: h._('__JHASH__NbzY3velFEE__JHASH__'),
      forgotPasswordText: h._('__JHASH__pwGVF1qBy_c__JHASH__'),
      getCPATextWithUrl: function (a) {
        return h._('__JHASH__gRxMGuAaUcu__JHASH__', [
          h._implicitParam(
            '=m1',
            i.jsx(c('CometLink.react'), {
              color: 'highlight',
              href: a,
              target: '_blank',
              children: h._('__JHASH__U0F8td9ffpE__JHASH__'),
            }),
          ),
        ]);
      },
      getDSATextWithUrl: function (a) {
        return h._('__JHASH___zdx-D9WC3X__JHASH__', [
          h._implicitParam(
            '=m1',
            i.jsx(c('CometLink.react'), {
              color: 'highlight',
              href: a,
              target: '_blank',
              children: h._('__JHASH__2hADRYVzjEZ__JHASH__'),
            }),
          ),
        ]);
      },
      getFooterSeeMoreOfText: function (a) {
        return h._('__JHASH__CKf13Q0abbP__JHASH__', [
          h._param('name-of-owner', a),
        ]);
      },
      getFrenchLawTextWithUrl: function (a) {
        return h._('__JHASH__SQ2qRCMoLPP__JHASH__', [
          h._implicitParam(
            '=m1',
            i.jsx(c('CometLink.react'), {
              color: 'highlight',
              href: a,
              target: '_blank',
              children: h._('__JHASH__oMQmVbRSOps__JHASH__'),
            }),
          ),
        ]);
      },
      getNetzdgTextWithUrl: function (a) {
        return h._('__JHASH__VnMB11bfe3G__JHASH__', [
          h._implicitParam(
            '=m1',
            i.jsx(c('CometLink.react'), {
              color: 'highlight',
              href: a,
              target: '_blank',
              children: h._('__JHASH__RyxydFql_HO__JHASH__'),
            }),
          ),
        ]);
      },
      passwordText: h._('__JHASH__Ngl2DQ6axho__JHASH__'),
      popupTitle: h._('__JHASH__DrbC1e1yF8x__JHASH__'),
    });
    g['default'] = a;
  },
  98,
);
__d(
  'useStoriesStatusNoop',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      return { status: 'none' };
    }
    f['default'] = a;
  },
  66,
);
__d(
  'CometUFIReactionsDialog.entrypoint',
  [
    'CometUFIReactionsDialogQuery$Parameters',
    'JSResourceForInteraction',
    'WebPixelRatio',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        var c = a.feedbackTargetID;
        a = a.reactionID;
        return {
          queries: {
            cometUFIReactionsQueryReference: {
              options: { fetchPolicy: 'store-and-network' },
              parameters: b('CometUFIReactionsDialogQuery$Parameters'),
              variables: {
                feedbackTargetID: c,
                reactionID: a,
                scale: d('WebPixelRatio').get(),
              },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'CometUFIReactionsDialog.react',
      ).__setRef('CometUFIReactionsDialog.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
__d(
  'CometUFITooltip.react',
  ['CometErrorBoundary.react', 'CometLazyTooltip.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useState;
    function a(a) {
      var b = a.align;
      b = b === void 0 ? 'middle' : b;
      var d = a.children,
        e = a.delayContentMs;
      e = e === void 0 ? 0 : e;
      var f = a.delayTooltipMs;
      f = f === void 0 ? 75 : f;
      var g = a.headline,
        k = a.tooltipContentComponent;
      a = a.tooltipContentProps;
      var l = j(0),
        m = l[0],
        n = l[1];
      l = i(
        function (a) {
          a && n(m + 1);
        },
        [m, n],
      );
      b = h.jsx(c('CometLazyTooltip.react'), {
        align: b,
        delayContentMs: e,
        delayTooltipMs: f,
        headline: g,
        onVisibilityChange: l,
        tooltipProps: babelHelpers['extends']({}, a, { shownCount: m }),
        tooltipResource: k,
        children: d,
      });
      return h.jsx(c('CometErrorBoundary.react'), {
        fallback: function () {
          return d;
        },
        children: b,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometUFICommentTopReactionsRenderer.react',
  [
    'fbt',
    'CometLoggedOutCTAStrings',
    'CometPressable.react',
    'CometReactionIcon.react',
    'CometUFIReactionsDialog.entrypoint',
    'CometUFITooltip.react',
    'DynamicUFIReactionTypes',
    'JSResourceForInteraction',
    'WebPixelRatio',
    'gkx',
    'qpl',
    'react',
    'recoverableViolation',
    'useCometEntryPointDialog',
    'useCometInteractionTracing',
    'useCometLoggedOutPopupCTA',
    'useCurrentRoute',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    b = d('react');
    var j = b.useCallback,
      k = b.useRef,
      l = c('gkx')('976093'),
      m = c('JSResourceForInteraction')(
        'CometUFICommentReactionIconTooltipContent.react',
      ).__setRef('CometUFICommentTopReactionsRenderer.react');
    function a(a) {
      var b = a.feedbackTargetID,
        e = a.hideBackground,
        f = a.reactionCountReduced;
      a = a.topReactions;
      var g = c('useCurrentRoute')(),
        n = c('useCometLoggedOutPopupCTA')({
          title: c('CometLoggedOutCTAStrings').popupTitle,
        }),
        o = k(null),
        p = c('useCometEntryPointDialog')(
          c('CometUFIReactionsDialog.entrypoint'),
          { feedbackTargetID: b },
          'button',
        ),
        q = p[0],
        r = p[1],
        s = p[2];
      p = p[3];
      var t = c('useCometInteractionTracing')(
          c('qpl')._(30605374, '8121'),
          'fluid',
          'INTERACTION',
        ),
        u = j(
          function () {
            t(function () {
              q({});
            });
          },
          [q, t],
        );
      if (f == null) {
        var v;
        return c('recoverableViolation')(
          'CometUFICommentTopReactions: Expected a reaction count, targetID: ' +
            ((v = b) != null ? v : 'UNKNOWN'),
          'ufi2',
        );
      }
      v =
        (g == null
          ? void 0
          : (v = g.rootView) == null
          ? void 0
          : (g = v.props) == null
          ? void 0
          : g.shouldHideReactionsOnCommentsExperiment) === !0;
      if (l && v === !0) return null;
      g = null;
      if (a == null)
        g = i.jsx('div', {
          className:
            'x6s0dn4 x1a2cdl4 xnhgr82 x1qt0ttw xgk8upj x78zum5 x1ncwhqj xlup9mm x1nn3v0j xg83lxy x1120s5i x1h0ha7o' +
            (e !== !0 ? ' x9bbmet xqnafso' : ''),
          children: i.jsx(
            'span',
            {
              className:
                'xi81zsa x1nxh6w3 x1fcty0u x1sibtaa xexx8yu xg83lxy x18d9i69 x1h0ha7o xuxw1ft',
              children: f,
            },
            'count_reduced',
          ),
        });
      else {
        var w = f === '1';
        v = [].concat(a);
        g = i.jsxs('div', {
          className:
            'x6s0dn4 x78zum5 x1ncwhqj x1nn3v0j xg83lxy x1120s5i x1h0ha7o' +
            ((w
              ? ' x1tlxs6b x1g8br2z x1gn5b1j x230xth xmix8c7'
              : ' x1a2cdl4 xnhgr82 x1qt0ttw xgk8upj xlup9mm' +
                (e !== !0 ? '' : '')) +
              (e !== !0 ? ' x9bbmet xqnafso' : '')),
          children: [
            i.jsx('div', {
              className:
                'x6s0dn4 x78zum5 x15zctf7' + (w ? ' xkhd6sd' : ' x1e558r4'),
              children: v.reverse().map(function (a) {
                if (a == null) return null;
                var b = a.node.id;
                if (b == null)
                  return c('recoverableViolation')(
                    'CometUFICommentTopReactions: Expected reactionID on reaction',
                    'ufi2',
                  );
                var d = 'UFIReactionIcon:' + b,
                  e;
                b != null && c('DynamicUFIReactionTypes').reactions[b]
                  ? (e = i.jsx(c('CometReactionIcon.react'), {
                      reactionID: b,
                      role: 'presentation',
                      size: 18,
                    }))
                  : a.node.dynamicReactionIcon != null &&
                    (e = a.node.dynamicReactionIcon);
                return e != null
                  ? i.jsx(
                      'span',
                      {
                        className:
                          'x9bbmet x1a2cdl4 xnhgr82 x1qt0ttw xgk8upj x78zum5 x1a2a7pz x1n2onr6' +
                          (w ? ' xwmqs3e x1mh8g0r' : ' xmlgm91 x139jcc6'),
                        children: e,
                      },
                      d,
                    )
                  : null;
              }),
            }),
            !w &&
              i.jsx(
                'span',
                {
                  className:
                    'xi81zsa x1nxh6w3 x1fcty0u x1sibtaa xexx8yu xg83lxy x18d9i69 x1h0ha7o xuxw1ft',
                  children: f,
                },
                'count_reduced',
              ),
          ],
        });
      }
      if (l && c('gkx')('2820')) return g;
      e = l ? [void 0, void 0, n, void 0] : [r, s, u, p];
      v = e[0];
      n = e[1];
      r = e[2];
      s = e[3];
      u = i.jsx(c('CometPressable.react'), {
        'aria-label': h._('__JHASH__hEDhu14BOm2__JHASH__', [
          h._plural(parseInt(f, 10), 'number'),
        ]),
        display: 'inline',
        onHoverIn: v,
        onHoverOut: n,
        onPress: r,
        onPressIn: s,
        overlayRadius: 10,
        ref: o,
        children: g,
      });
      return a == null
        ? u
        : i.jsx(c('CometUFITooltip.react'), {
            tooltipContentComponent: m,
            tooltipContentProps: {
              feedbackTargetID: b,
              scale: d('WebPixelRatio').get(),
            },
            children: u,
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'isNotOutlierReactionComet',
  [
    'isNotOutlierReactionComet_feedback.graphql',
    'isNotOutlierReactionComet_topReactionsEdge.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i,
      j = 0.05;
    h !== void 0 ? h : (h = b('isNotOutlierReactionComet_feedback.graphql'));
    i !== void 0
      ? i
      : (i = b('isNotOutlierReactionComet_topReactionsEdge.graphql'));
    function a(a) {
      var b;
      b =
        (b =
          a == null ? void 0 : (b = a.reactors) == null ? void 0 : b.count) !=
        null
          ? b
          : 0;
      var c = Math.ceil(b * j);
      return function (b) {
        var d;
        if (
          ((d = a.viewer_feedback_reaction_info) == null ? void 0 : d.id) !==
          ((d = b.node) == null ? void 0 : d.id)
        ) {
          return ((d = b.reaction_count) != null ? d : 0) >= c;
        } else return !0;
      };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometUFIClassicCommentTopReactions.react',
  [
    'CometRelay',
    'CometUFIClassicCommentTopReactions_feedback.graphql',
    'CometUFICommentTopReactionsRenderer.react',
    'isNotOutlierReactionComet',
    'react',
    'recoverableViolation',
    'unrecoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react');
    function a(a) {
      var e = d('CometRelay').useFragment(
          h !== void 0
            ? h
            : (h = b('CometUFIClassicCommentTopReactions_feedback.graphql')),
          a.feedback,
        ),
        f = e.id;
      if (f == null)
        throw c('unrecoverableViolation')(
          'CometUFICommentTopReactions: Expected feedback id',
          'ufi2',
        );
      var g = e.reactors,
        j = e.top_reactions;
      g = g == null ? void 0 : g.count_reduced;
      j = j == null ? void 0 : j.edges;
      if (j == null)
        return c('recoverableViolation')(
          'CometUFICommentTopReactions: Expected reaction edges',
          'ufi2',
        );
      if (g === '0') return null;
      e = j.filter(c('isNotOutlierReactionComet')(e)).slice(0, 3);
      return i.jsx('div', {
        ref: a.rootRef,
        children: i.jsx(c('CometUFICommentTopReactionsRenderer.react'), {
          feedbackTargetID: f,
          hideBackground: a.hideBackground,
          reactionCountReduced: g,
          topReactions:
            j.length === 0
              ? null
              : e.map(function (a) {
                  var b = a.node;
                  if (b == null) return null;
                  b = b.id;
                  if (b == null)
                    throw c('unrecoverableViolation')(
                      'CometUFITopReactions: Expected reaction_id on reaction',
                      'ufi2',
                    );
                  return {
                    node: { id: b },
                    reactionCount: a == null ? void 0 : a.reaction_count,
                  };
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
  'CometUFICommentsListPlaceholder.react',
  ['CometProgressRingIndeterminate.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a() {
      return h.jsx('div', {
        className: 'x78zum5 xl56j7k xw7yly9 xkrivgy x1yztbdb x1gryazu',
        children: h.jsx(c('CometProgressRingIndeterminate.react'), {
          color: 'disabled',
          size: 24,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometUFIShareActionLinkMenu.entrypoint',
  ['CometUFIShareActionLinkMenuQuery$Parameters', 'JSResourceForInteraction'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        var c = a.feedLocation,
          d = a.qe_optional_share_to_page,
          e = a.storyUrl;
        a = a.url;
        return {
          extraProps: {},
          queries: {
            shareMenuQueryReference: {
              parameters: b('CometUFIShareActionLinkMenuQuery$Parameters'),
              variables: {
                feed_location: c,
                hasParentStory: e != null,
                qe_optional_share_to_page: (c = d) != null ? c : !1,
                shareableParams: { url: a },
                storyParams: { url: e },
              },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'CometUFIShareActionLinkMenu.react',
      ).__setRef('CometUFIShareActionLinkMenu.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
__d(
  'CometUFISummaryBarLabelDefault.react',
  ['TetraText.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.color;
      b = b === void 0 ? 'secondary' : b;
      var d = a.label;
      a = a.textType;
      a = a === void 0 ? 'body3' : a;
      return h.jsx(c('TetraText.react'), { color: b, type: a, children: d });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
