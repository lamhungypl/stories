__d(
  'oz-player/networks/OzBandwidthUtils',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = 0.3,
      h = 3,
      i = 50,
      j = 10,
      k = 5,
      l = new Map([
        ['51', 0.03],
        ['52', 0.06],
        ['53', 0.08],
        ['54', 0.1],
        ['55', 0.13],
        ['56', 0.16],
        ['57', 0.18],
        ['58', 0.2],
        ['59', 0.23],
        ['60', 0.26],
        ['61', 0.28],
        ['62', 0.31],
        ['63', 0.33],
        ['64', 0.36],
        ['65', 0.39],
        ['66', 0.42],
        ['67', 0.44],
        ['68', 0.47],
        ['69', 0.5],
        ['70', 0.53],
        ['71', 0.56],
        ['72', 0.59],
        ['73', 0.62],
        ['74', 0.65],
        ['75', 0.68],
        ['76', 0.71],
        ['77', 0.74],
        ['78', 0.78],
        ['79', 0.81],
        ['80', 0.85],
        ['81', 0.88],
        ['82', 0.92],
        ['83', 0.96],
        ['84', 1],
        ['85', 1.04],
        ['86', 1.08],
        ['87', 1.13],
        ['88', 1.18],
        ['89', 1.23],
        ['90', 1.28],
        ['91', 1.34],
        ['92', 1.41],
        ['93', 1.48],
        ['94', 1.56],
        ['95', 1.65],
        ['96', 1.76],
        ['97', 1.89],
        ['98', 2.06],
        ['99', 2.33],
      ]);
    function a(a, b, c, d) {
      if (a.length === 0) return null;
      var e = n(a);
      a = q(a, b);
      b = a.average;
      a = a.totalWeight;
      var f = j,
        g = k,
        h = i;
      if (c.length > 0) {
        f = o(
          c.map(function (a) {
            return a.timeToFirstByteMs;
          }),
        );
        c = p(
          c.map(function (a) {
            return { value: a.timeToFirstByteMs, weight: 1 };
          }),
          d,
        );
        h = c.average;
        g = c.totalWeight;
      }
      return {
        bandwidthEstimate: b,
        bandwidthStandardDeviation: e,
        bandwidthTotalWeight: a,
        timeToFirstByteMsEstimate: h,
        timeToFirstByteMsStandardDeviation: f,
        timeToFirstByteMsTotalWeight: g,
      };
    }
    function m(a) {
      var b = 0;
      for (var c = 0; c < a.length; c++)
        b += (a[c].bytes * 8e3) / a[c].timeInMs;
      return b / a.length;
    }
    function n(a) {
      return o(
        a.map(function (a) {
          return (a.bytes * 8e3) / a.timeInMs;
        }),
      );
    }
    function o(a) {
      var b =
          a.reduce(function (a, b) {
            return a + b;
          }, 0) / a.length,
        c = 0;
      for (var d = 0; d < a.length; d++) c += Math.pow(a[d] - b, 2);
      return Math.round(Math.sqrt(c / a.length));
    }
    function p(a, b) {
      b = Math.exp(Math.log(0.5) / b);
      var c = 0,
        d = 0;
      for (var e = 0; e < a.length; e++) {
        var f = Math.pow(b, a[e].weight);
        c = a[e].value * (1 - f) + c * f;
        d += a[e].weight;
      }
      f = Math.round(c / (1 - Math.pow(b, d)));
      return { average: f, totalWeight: d };
    }
    function q(a, b) {
      return p(
        a.map(function (a) {
          return {
            value: (a.bytes * 8e3) / a.timeInMs,
            weight: a.timeInMs / 1e3,
          };
        }),
        b,
      );
    }
    function r(a, b) {
      var c = m(a),
        d = [];
      for (var e = 0; e < a.length; e++)
        Math.abs(c - (a[e].bytes * 8e3) / a[e].timeInMs) < b && d.push(a[e]);
      return d;
    }
    function b(a, b, c, d) {
      var e = n(a);
      a = r(a, e * c);
      c = q(a, b);
      return c.average - e * d;
    }
    function c(a, b, c) {
      c = l.get(String(c));
      var d = a.bandwidthEstimate,
        e = a.bandwidthStandardDeviation,
        f = a.timeToFirstByteMsStandardDeviation;
      a = a.timeToFirstByteMsEstimate;
      var i = 1,
        j = 1;
      c != null &&
        ((i = 1 - (c * e) / d),
        (i = isNaN(i) ? 1 : Math.max(i, g)),
        (j = 1 + (c * f) / a),
        (j = isNaN(j) ? 1 : j),
        (j = Math.min(j, h)));
      return (8e3 * b) / (d * i) + a * j;
    }
    f.getBandwidthDiagnostics = a;
    f.getMeanBandwidth = m;
    f.getStandardDeviationOfBandwidth = n;
    f.getExponentiallyWeightedMovingAverage = p;
    f.getExponentiallyWeightedMovingAverageOfBandwidth = q;
    f.getBandwidthSamplesWithinRangeOfMean = r;
    f.getBandwidthEstimate = b;
    f.getEstimatedRequestTimeToLastByteMs = c;
  },
  66,
);
