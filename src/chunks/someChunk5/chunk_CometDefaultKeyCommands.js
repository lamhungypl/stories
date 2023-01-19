__d(
  'CometDefaultKeyCommands',
  ['fbt', 'CometKeys', 'gkx'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    a = Object.freeze(
      babelHelpers['extends'](
        {
          global: {
            label: h._('__JHASH__vTbx5ula3Ub__JHASH__'),
            shortcuts: {
              search: {
                command: { key: c('CometKeys').SLASH },
                description: h._('__JHASH__65GAtmpimeL__JHASH__'),
                singleCharDescription: h._('__JHASH__HqO0KsGMlbJ__JHASH__'),
              },
              toggleDarkMode: {
                command: { alt: !0, key: c('CometKeys').M },
                description: h._('__JHASH__DFgslFbdJR5__JHASH__'),
                isHiddenCommand: c('gkx')('425') ? void 0 : !0,
              },
              toggleNub: {
                command: { key: c('CometKeys').QUESTION, shift: !0 },
                description: h._('__JHASH__w4u2XmGo_LN__JHASH__'),
              },
              toggleNubFunctionKey: {
                command: { key: c('CometKeys').F1 },
                description: h._('__JHASH__w4u2XmGo_LN__JHASH__'),
              },
            },
          },
          groups: {
            label: h._('__JHASH__5ycXpLiowDK__JHASH__'),
            shortcuts: {
              groupSearch: {
                command: { command: !0, key: c('CometKeys').SLASH },
                description: h._('__JHASH__UwVHz4hi5qC__JHASH__'),
                order: 6,
              },
              newGroupEvent: {
                command: { key: c('CometKeys').E },
                description: h._('__JHASH__bXPAFcKoHVs__JHASH__'),
                order: 1,
                singleCharDescription: h._('__JHASH__B9NoOgWqa7a__JHASH__'),
              },
              viewNextPinnedGroup: {
                command: { alt: !0, key: c('CometKeys').DOWN },
                description: h._('__JHASH__ryvFG_XPxff__JHASH__'),
                order: 5,
              },
              viewNextVideo: {
                command: { alt: !0, key: c('CometKeys').RIGHT },
                description: h._('__JHASH__Co4R3_i3LJX__JHASH__'),
                order: 3,
              },
              viewPreviousPinnedGroup: {
                command: { alt: !0, key: c('CometKeys').UP },
                description: h._('__JHASH__ghiGJdiPxiO__JHASH__'),
                order: 4,
              },
              viewPreviousVideo: {
                command: { alt: !0, key: c('CometKeys').LEFT },
                description: h._('__JHASH___UWyiXo4b1A__JHASH__'),
                order: 2,
              },
            },
          },
          newsfeed: {
            label: h._('__JHASH__3bhd46OOtgQ__JHASH__'),
            shortcuts: {
              commentStory: {
                command: { key: c('CometKeys').C },
                description: h._('__JHASH__S60IOgnbCS6__JHASH__'),
                singleCharDescription: h._('__JHASH__8eG9xxpUBK___JHASH__'),
              },
              likeStory: {
                command: { key: c('CometKeys').L },
                description: h._('__JHASH__DX2kjgJe1lw__JHASH__'),
                singleCharDescription: h._('__JHASH__qzjRCdVl8UB__JHASH__'),
              },
              newPost: {
                command: { key: c('CometKeys').P },
                description: h._('__JHASH__gCb4Qn8jJYV__JHASH__'),
                singleCharDescription: h._('__JHASH__rWgYV326oik__JHASH__'),
              },
              openAttachment: {
                command: { key: c('CometKeys').O },
                description: h._('__JHASH__PENXVObp6HH__JHASH__'),
                shouldStopPropagation: !1,
                singleCharDescription: h._('__JHASH__9ZqYYIUi2ux__JHASH__'),
              },
              scrollNext: {
                command: { key: c('CometKeys').J },
                description: h._('__JHASH__WOloUQmdmos__JHASH__'),
                singleCharDescription: h._('__JHASH__pjB1urhcDtz__JHASH__'),
              },
              scrollPrevious: {
                command: { key: c('CometKeys').K },
                description: h._('__JHASH__8Xw825Irnyt__JHASH__'),
                singleCharDescription: h._('__JHASH__X1clBpl2A59__JHASH__'),
              },
              searchContacts: {
                command: { key: c('CometKeys').Q },
                description: h._('__JHASH__tNIUJ6lgcTQ__JHASH__'),
                singleCharDescription: h._('__JHASH__ZOEvffglsxE__JHASH__'),
              },
              seeMore: {
                command: { key: c('CometKeys').ENTER },
                description: h._('__JHASH__xSvc24O-mfg__JHASH__'),
                singleCharDescription: h._('__JHASH__2JfkN_FFXsH__JHASH__'),
              },
              shareStory: {
                command: { key: c('CometKeys').S },
                description: h._('__JHASH__B_iW89OoYd8__JHASH__'),
                singleCharDescription: h._('__JHASH__Z6OsPJdfk0___JHASH__'),
              },
            },
          },
          photoViewer: {
            label: h._('__JHASH__BXWDUC-L-Ri__JHASH__'),
            shortcuts: {
              fullscreen: {
                command: { key: c('CometKeys').F },
                description: h._('__JHASH__B9xS9GGbzeo__JHASH__'),
                singleCharDescription: h._('__JHASH__3gvTTPZFuR6__JHASH__'),
              },
              like: {
                command: { key: c('CometKeys').L },
                description: h._('__JHASH__fPWFoO_4sHL__JHASH__'),
                singleCharDescription: h._('__JHASH__6boa--Dsc86__JHASH__'),
              },
              viewNext: {
                command: { key: c('CometKeys').K },
                description: h._('__JHASH__Cwg8ChuUCza__JHASH__'),
                singleCharDescription: h._('__JHASH__D5hbXD4Qvlf__JHASH__'),
              },
              viewPrevious: {
                command: { key: c('CometKeys').J },
                description: h._('__JHASH__5PUjENdCJD1__JHASH__'),
                singleCharDescription: h._('__JHASH__ap7P4LUMQ-g__JHASH__'),
              },
            },
          },
          search: {
            label: h._('__JHASH__E00LcbSnfXh__JHASH__'),
            shortcuts: {
              scrollNextResult: {
                command: { key: c('CometKeys').J },
                description: h._('__JHASH__bmPeLBy-eKQ__JHASH__'),
                singleCharDescription: h._('__JHASH___N3WTKcqt3k__JHASH__'),
              },
              scrollPreviousResult: {
                command: { key: c('CometKeys').K },
                description: h._('__JHASH__66y7Uf7htWH__JHASH__'),
                singleCharDescription: h._('__JHASH__G1e3rdFAKxh__JHASH__'),
              },
            },
          },
        },
        c('gkx')('3598') && {
          chats: {
            label: h._('__JHASH__er63PmpxxU9__JHASH__'),
            shortcuts: {
              forwardMessage: {
                command: { key: c('CometKeys').F },
                description: h._('__JHASH__BoPi-Cj1ZgB__JHASH__'),
                order: 3,
                singleCharDescription: h._('__JHASH__sAzlvATWOJK__JHASH__'),
              },
              jumpToChatList: {
                command: { alt: !0, key: c('CometKeys').C },
                description: h._('__JHASH__yEELQaU6ZJv__JHASH__'),
                order: 6,
                singleCharDescription: h._('__JHASH__ruOmPk73z78__JHASH__'),
                triggerFromInputs: !0,
              },
              likeMessage: {
                command: { key: c('CometKeys').L },
                description: h._('__JHASH__92Cxpl6anqS__JHASH__'),
                order: 1,
                singleCharDescription: h._('__JHASH__9GZYcHNSXWM__JHASH__'),
              },
              removeMessage: {
                command: { key: c('CometKeys').X },
                description: h._('__JHASH__r-tRfkmegvn__JHASH__'),
                order: 4,
                singleCharDescription: h._('__JHASH__rCo38Z3GsLf__JHASH__'),
              },
              replyToMessage: {
                command: { key: c('CometKeys').R },
                description: h._('__JHASH__2livKuCsmS6__JHASH__'),
                order: 2,
                singleCharDescription: h._('__JHASH__HlXWG9dX1DN__JHASH__'),
              },
              writeMessageToCurrentChat: {
                command: { alt: !0, key: c('CometKeys').W },
                description: h._('__JHASH__260-EYyZSfn__JHASH__'),
                order: 5,
                singleCharDescription: h._('__JHASH__98yCRWkkRKQ__JHASH__'),
                triggerFromInputs: !0,
              },
            },
          },
        },
      ),
    );
    b = a;
    a;
    g['default'] = b;
  },
  98,
);
