__d(
  'OzSystemicRiskUtils',
  ['oz-player/networks/OzBandwidthUtils'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 50;
    function i(a, b, c) {
      a = d(
        'oz-player/networks/OzBandwidthUtils',
      ).getEstimatedRequestTimeToLastByteMs(a, b, c);
      return (b / a) * 8e3;
    }
    function a(a, b, c, d) {
      a = a * b;
      b = (a * c) / 8e3;
      c = i(d, b, h);
      return a < c;
    }
    function j(a, b, c, d) {
      if (a > 0) return c <= a;
      return d != null && d > 0 ? d <= b : !1;
    }
    function b(a) {
      var b = a.bandwidthDiagnostics,
        c = a.bitrate,
        d = a.bufferAhead,
        e = a.config,
        f = a.hasMadeInitialDecision,
        g = a.initialRiskFactor,
        k = a.lowMosResolution,
        l = a.minWatchableMos,
        m = a.previousMos,
        n = a.previousResolution,
        o = a.remainingVideoDurationMs;
      a = a.segmentFetchRangeDurationMs;
      c = (c * a) / 8e3;
      a = i(
        b,
        c,
        e.getNumber('systemic_risk_abr_high_estimate_confidence', 52),
      );
      b = i(b, c, h);
      c = j(k, l, n, m);
      k = 1;
      c || (k = b / a);
      l = 1;
      b = e.getNumber('systemic_risk_abr_document_hidden_risk_factor', 0);
      b > 0 && document.hidden ? (l = b) : !f && !c && (l = g);
      a =
        l *
        (c
          ? e.getNumber('systemic_risk_abr_low_mos_risk_factor', 1.3)
          : e.getNumber('systemic_risk_abr_risk_factor', 1.75));
      b = (o - d * 1e3) / o;
      f = a * k;
      g = f * b;
      l = Math.max(g, 1);
      return {
        bandwidth: k,
        buffer: b,
        encoding: a,
        lowMos: c,
        multiplier: l,
        previousMos: m,
        previousResolution: n,
      };
    }
    g.getBandwidthEstimateForRequest = i;
    g.isEffectiveBitrateBelowBandwidthEstimate = a;
    g.getRiskFactorsForRepresentation = b;
  },
  98,
);
