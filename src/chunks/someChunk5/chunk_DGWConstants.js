__d(
  'DGWConstants',
  ['$InternalEnum'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = 3e4,
      h = 'prod',
      i = 128,
      j = (b = b('$InternalEnum'))({
        NORMAL_CLOSURE: 1e3,
        GOING_AWAY: 1001,
        ABNORMAL_CLOSURE: 1006,
        SERVER_INTERNAL_ERROR: 1011,
        GRACEFUL_CLOSE: 4e3,
        KEEPALIVE_TIMEOUT: 4001,
        DGW_SERVER_ERROR: 4002,
        UNAUTHORIZED: 4003,
        REJECTED: 4004,
        BAD_REQUEST: 4005,
      }),
      k = b({
        DrainReason_ELB: 0,
        DrainReason_SLB: 1,
        DrainReason_AppServerPush: 2,
        DrainReason_GracePeriodExpired: 3,
        DrainReason_Unknown: 4,
      });
    function a(a) {
      switch (a) {
        case k.DrainReason_ELB:
          return 'DrainReason_ELB';
        case k.DrainReason_SLB:
          return 'DrainReason_SLB';
        case k.DrainReason_AppServerPush:
          return 'DrainReason_AppServerPush';
        case k.DrainReason_GracePeriodExpired:
          return 'DrainReason_GracePeriodExpired';
        case k.DrainReason_Unknown:
          return 'DrainReason_Unknown';
      }
    }
    var l = b({
      DGWVER_GENESIS: 0,
      DGWVER_PREFIXED_APP_HEADERS: 1,
      DGWVER_HANDLES_DGW_DRAIN_FRAME: 2,
      DGWVER_HANDLES_DGW_DEAUTH_FRAME: 3,
      DGWVER_HANDLES_STREAMGROUPS: 4,
      DGWVER_BIG_IDS: 5,
    });
    function c(a) {
      switch (a) {
        case l.DGWVER_GENESIS:
          return 'DGWVER_GENESIS';
        case l.DGWVER_PREFIXED_APP_HEADERS:
          return 'DGWVER_PREFIXED_APP_HEADERS';
        case l.DGWVER_HANDLES_DGW_DRAIN_FRAME:
          return 'DGWVER_HANDLES_DGW_DRAIN_FRAME';
        case l.DGWVER_HANDLES_DGW_DEAUTH_FRAME:
          return 'DGWVER_HANDLES_DGW_DEAUTH_FRAME';
        case l.DGWVER_HANDLES_STREAMGROUPS:
          return 'DGWVER_HANDLES_STREAMGROUPS';
        case l.DGWVER_BIG_IDS:
          return 'DGWVER_BIG_IDS';
      }
    }
    var m = b({
      DgwCodecReturnCode_Success: 0,
      DgwCodecReturnCode_Failure: 1,
      DgwCodecReturnCode_NotEnoughData: 2,
      DgwCodecReturnCode_OutOfMemory: 3,
      DgwCodecReturnCode_AckIdOutOfBounds: 4,
      DgwCodecReturnCode_InvalidParameter: 5,
      DgwCodecReturnCode_InvalidFrameType: 6,
      DgwCodecReturnCode_InvalidAckFrameLength: 7,
      DgwCodecReturnCode_InvalidDrainReason: 8,
      DgwCodecReturnCode_InvalidDataFrameLength: 9,
      DgwCodecReturnCode_InvalidDrainFrameLength: 10,
    });
    function d(a) {
      switch (a) {
        case m.DgwCodecReturnCode_Success:
          return 'DgwCodecReturnCode_Success';
        case m.DgwCodecReturnCode_Failure:
          return 'DgwCodecReturnCode_Failure';
        case m.DgwCodecReturnCode_NotEnoughData:
          return 'DgwCodecReturnCode_NotEnoughData';
        case m.DgwCodecReturnCode_OutOfMemory:
          return 'DgwCodecReturnCode_OutOfMemory';
        case m.DgwCodecReturnCode_AckIdOutOfBounds:
          return 'DgwCodecReturnCode_AckIdOutOfBounds';
        case m.DgwCodecReturnCode_InvalidParameter:
          return 'DgwCodecReturnCode_InvalidParameter';
        case m.DgwCodecReturnCode_InvalidFrameType:
          return 'DgwCodecReturnCode_InvalidFrameType';
        case m.DgwCodecReturnCode_InvalidAckFrameLength:
          return 'DgwCodecReturnCode_InvalidAckFrameLength';
        case m.DgwCodecReturnCode_InvalidDrainReason:
          return 'DgwCodecReturnCode_InvalidDrainReason';
        case m.DgwCodecReturnCode_InvalidDataFrameLength:
          return 'DgwCodecReturnCode_InvalidDataFrameLength';
        case m.DgwCodecReturnCode_InvalidDrainFrameLength:
          return 'DgwCodecReturnCode_InvalidDrainFrameLength';
      }
    }
    var n = b({
      DgwFrameType_Data: 0,
      DgwFrameType_SmallAck: 1,
      DgwFrameType_Empty: 2,
      DgwFrameType_Drain: 3,
      DgwFrameType_Deauth: 4,
      DgwFrameType_StreamGroup_DeprecatedEstabStream: 5,
      DgwFrameType_StreamGroup_DeprecatedData: 6,
      DgwFrameType_StreamGroup_SmallAck: 7,
      DgwFrameType_StreamGroup_DeprecatedEndOfData: 8,
      DgwFrameType_Ping: 9,
      DgwFrameType_Pong: 10,
      DgwFrameType_StreamGroup_Ack: 12,
      DgwFrameType_StreamGroup_Data: 13,
      DgwFrameType_StreamGroup_EndOfData: 14,
      DgwFrameType_StreamGroup_EstabStream: 15,
    });
    function e(a) {
      switch (a) {
        case n.DgwFrameType_Data:
          return 'DgwFrameType_Data';
        case n.DgwFrameType_SmallAck:
          return 'DgwFrameType_SmallAck';
        case n.DgwFrameType_Empty:
          return 'DgwFrameType_Empty';
        case n.DgwFrameType_Drain:
          return 'DgwFrameType_Drain';
        case n.DgwFrameType_Deauth:
          return 'DgwFrameType_Deauth';
        case n.DgwFrameType_StreamGroup_DeprecatedEstabStream:
          return 'DgwFrameType_StreamGroup_DeprecatedEstabStream';
        case n.DgwFrameType_StreamGroup_DeprecatedData:
          return 'DgwFrameType_StreamGroup_DeprecatedData';
        case n.DgwFrameType_StreamGroup_SmallAck:
          return 'DgwFrameType_StreamGroup_SmallAck';
        case n.DgwFrameType_StreamGroup_DeprecatedEndOfData:
          return 'DgwFrameType_StreamGroup_DeprecatedEndOfData';
        case n.DgwFrameType_Ping:
          return 'DgwFrameType_Ping';
        case n.DgwFrameType_Pong:
          return 'DgwFrameType_Pong';
        case n.DgwFrameType_StreamGroup_Ack:
          return 'DgwFrameType_StreamGroup_Ack';
        case n.DgwFrameType_StreamGroup_Data:
          return 'DgwFrameType_StreamGroup_Data';
        case n.DgwFrameType_StreamGroup_EndOfData:
          return 'DgwFrameType_StreamGroup_EndOfData';
        case n.DgwFrameType_StreamGroup_EstabStream:
          return 'DgwFrameType_StreamGroup_EstabStream';
      }
    }
    b = {
      HEADER_APPID: 'x-dgw-appid',
      HEADER_APPVERSION: 'x-dgw-appversion',
      HEADER_AUTHTYPE: 'x-dgw-authtype',
      HEADER_AUTHTOKEN: 'Authorization',
      HEADER_DGW_VERSION: 'x-dgw-version',
      HEADER_LOGGING_ID: 'x-dgw-loggingid',
      HEADER_REGIONHINT: 'x-dgw-regionhint',
      HEADER_TARGET_TIER: 'x-dgw-tier',
      HEADER_UUID: 'x-dgw-uuid',
      HEADER_ESTABLISH_STREAM_FRAME_BASE64:
        'x-dgw-establish-stream-frame-base64',
      kShadowHeader: 'x-dgw-shadow',
      APPHEADER_PREFIX: 'x-dgw-app-',
    };
    f.DEFAULT_ACK_TIMEOUT_MS = g;
    f.DEFAULT_SERVICE_TIER = h;
    f.MAX_ACK_ID = i;
    f.WebsocketCloseCodes = j;
    f.DrainReason = k;
    f.drainReasonToDrainReasonString = a;
    f.DgwVersion = l;
    f.dgwVersionToString = c;
    f.DgwCodecReturnCode = m;
    f.DgwCodecReturnCodeToString = d;
    f.DgwFrameType = n;
    f.frameTypeToString = e;
    f.HEADER_CONSTANTS = b;
  },
  66,
);
