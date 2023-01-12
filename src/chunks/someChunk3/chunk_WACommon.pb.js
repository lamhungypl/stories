__d(
  'WACommon.pb',
  ['WAProtoConst'],
  function (a, b, c, d, e, f, g) {
    a = { PLACEHOLDER: 0, NO_PLACEHOLDER: 1, IGNORE: 2 };
    b = babelHelpers['extends']({}, null);
    c = babelHelpers['extends']({}, null);
    e = babelHelpers['extends']({}, null);
    b.internalSpec = {
      remoteJid: [1, d('WAProtoConst').TYPES.STRING],
      fromMe: [2, d('WAProtoConst').TYPES.BOOL],
      id: [3, d('WAProtoConst').TYPES.STRING],
      participant: [4, d('WAProtoConst').TYPES.STRING],
    };
    c.internalSpec = {
      text: [1, d('WAProtoConst').TYPES.STRING],
      mentionedJid: [
        2,
        d('WAProtoConst').FLAGS.REPEATED | d('WAProtoConst').TYPES.STRING,
      ],
    };
    e.internalSpec = {
      payload: [1, d('WAProtoConst').TYPES.BYTES],
      version: [2, d('WAProtoConst').TYPES.INT32],
    };
    g.FUTURE_PROOF_BEHAVIOR = a;
    g.MessageKeySpec = b;
    g.MessageTextSpec = c;
    g.SubProtocolSpec = e;
  },
  98,
);
