__d(
  'CometProfilePhotoForActor_actor.graphql',
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
      };
      return {
        argumentDefinitions: [
          {
            defaultValue: !1,
            kind: 'LocalArgument',
            name: 'allowProfileVideo',
          },
          {
            defaultValue: !0,
            kind: 'LocalArgument',
            name: 'displayAvailability',
          },
          { defaultValue: null, kind: 'LocalArgument', name: 'height' },
          {
            defaultValue: !0,
            kind: 'LocalArgument',
            name: 'linkToUnseenStory',
          },
          { defaultValue: null, kind: 'LocalArgument', name: 'scale' },
          { defaultValue: null, kind: 'LocalArgument', name: 'width' },
        ],
        kind: 'Fragment',
        metadata: null,
        name: 'CometProfilePhotoForActor_actor',
        selections: [
          {
            args: null,
            kind: 'FragmentSpread',
            name: 'ProfileCometProfileLink_actor',
          },
          {
            args: [
              {
                kind: 'Variable',
                name: 'enabled',
                variableName: 'linkToUnseenStory',
              },
            ],
            kind: 'FragmentSpread',
            name: 'useActorStoryStatus_actor',
          },
          {
            kind: 'InlineFragment',
            selections: [
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'url',
                storageKey: null,
              },
            ],
            type: 'Entity',
            abstractKey: '__isEntity',
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: '__typename',
            storageKey: null,
          },
          a,
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'name',
            storageKey: null,
          },
          {
            alias: null,
            args: [
              { kind: 'Variable', name: 'height', variableName: 'height' },
              { kind: 'Variable', name: 'scale', variableName: 'scale' },
              { kind: 'Variable', name: 'width', variableName: 'width' },
            ],
            concreteType: 'Image',
            kind: 'LinkedField',
            name: 'profile_picture',
            plural: !1,
            selections: [
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
                name: 'scale',
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            condition: 'displayAvailability',
            kind: 'Condition',
            passingValue: !0,
            selections: [
              {
                kind: 'InlineFragment',
                selections: [
                  {
                    kind: 'ClientExtension',
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'availability',
                        storageKey: null,
                      },
                    ],
                  },
                ],
                type: 'User',
                abstractKey: null,
              },
            ],
          },
          {
            condition: 'allowProfileVideo',
            kind: 'Condition',
            passingValue: !0,
            selections: [
              {
                kind: 'InlineFragment',
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: 'ProfileVideo',
                    kind: 'LinkedField',
                    name: 'profile_video',
                    plural: !1,
                    selections: [
                      a,
                      {
                        args: null,
                        kind: 'FragmentSpread',
                        name: 'CometProfileVideoSection_profileVideo',
                      },
                    ],
                    storageKey: null,
                  },
                ],
                type: 'Profile',
                abstractKey: '__isProfile',
              },
            ],
          },
        ],
        type: 'Actor',
        abstractKey: '__isActor',
      };
    })();
    e.exports = a;
  },
  null,
);
