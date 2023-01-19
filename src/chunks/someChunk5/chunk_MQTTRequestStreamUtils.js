__d(
  'MQTTRequestStreamUtils',
  [
    'BladeRunnerStreamHandler',
    'BladeRunnerStreamStatus',
    'RequestStreamCommonRequestStreamCommonTypes',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'Stream closed',
      i = 'Stream rejected';
    function a(a) {
      var b = function (b) {
        switch (b) {
          case d('BladeRunnerStreamStatus').StreamStatus.ACCEPTED:
            a.onFlowStatus(
              d('RequestStreamCommonRequestStreamCommonTypes').FlowStatus
                .Accepted,
            );
            break;
          case d('BladeRunnerStreamStatus').StreamStatus.STARTED:
            a.onFlowStatus(
              d('RequestStreamCommonRequestStreamCommonTypes').FlowStatus
                .Started,
            );
            break;
          case d('BladeRunnerStreamStatus').StreamStatus.STOPPED:
            a.onFlowStatus(
              d('RequestStreamCommonRequestStreamCommonTypes').FlowStatus
                .Stopped,
            );
            break;
          case d('BladeRunnerStreamStatus').StreamStatus.CLOSED:
            a.onTermination(h);
            break;
          case d('BladeRunnerStreamStatus').StreamStatus.REJECTED:
            a.onTermination(i);
            break;
        }
      };
      return new (c('BladeRunnerStreamHandler'))(
        function (b) {
          return a.onData(b);
        },
        null,
        b,
        function (b) {
          return a.onLog(b);
        },
        null,
        function () {
          return a.onRetryUpdateRequestBody();
        },
      );
    }
    g.TERMINATION_REASON_CLOSED = h;
    g.TERMINATION_REASON_REJECTED = i;
    g.convertToBRHandler = a;
  },
  98,
);
