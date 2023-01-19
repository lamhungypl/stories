__d(
  'RequestStreamCommonRequestStreamCommonTypes',
  ['$InternalEnum'],
  function (a, b, c, d, e, f) {
    'use strict';
    c = (a = b('$InternalEnum'))({ Accepted: 1, Started: 2, Stopped: 3 });
    d = a({ Rejected: 40, Error: 50, TryAgain: 80, Closed: 99 });
    f = a({ BestEffort: 0, Socket: 10, Device: 20 });
    b = a({
      Flow_status: 'flow_status',
      Log: 'log',
      Rewrite: 'rewrite',
      Data: 'data',
      Termination: 'termination',
      Amend_ack: 'amend_ack',
    });
    e.exports = {
      AckLevel: f,
      FlowStatus: c,
      StreamResponseDelta$Types: b,
      TerminationReason: d,
    };
  },
  null,
);
