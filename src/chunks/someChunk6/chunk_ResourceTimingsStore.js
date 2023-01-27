__d(
  'ResourceTimingsStore',
  [
    'CircularBuffer',
    'ResourceTypes',
    'TimingAnnotations',
    'URI',
    'performanceAbsoluteNow',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h,
      i = 1e3,
      j = new (b('TimingAnnotations').EmptyTimingAnnotations)(),
      k = {},
      l = {};
    Object.keys(b('ResourceTypes')).forEach(function (a) {
      a = b('ResourceTypes')[a];
      var c = new (b('CircularBuffer'))(i),
        d = new Map();
      c.onEvict(function (a) {
        d['delete'](a);
      });
      k[a] = { idx: 1, entries: c };
      l[a] = d;
    });
    function m(a, c, d) {
      var e;
      switch (a) {
        case 'css':
        case 'js':
          var f = n.parseMakeHasteURL(c);
          f = f == null ? 'unknown_resource' : f[0];
          e = d + '_' + f;
          break;
        case 'xhr':
          f = new (g || (g = b('URI')))(c).getQualifiedURI();
          c = f.getDomain() + f.getPath();
          e = d + '_' + c;
          break;
        default:
          a, (e = 'never here');
      }
      return e;
    }
    var n = {
      getUID: function (a, b) {
        var c = k[a],
          d = m(a, b, c.idx);
        c.entries.write(d);
        l[a].set(d, { uri: b, uid: d });
        c.idx++;
        return d;
      },
      updateURI: function (a, b, c) {
        a = l[a].get(b);
        a != null && (a.uri = c);
      },
      getMapFor: function (a) {
        return l[a];
      },
      parseMakeHasteURL: function (a) {
        a = a.match(/\/rsrc\.php\/.*\/([^\?]+)/);
        if (!a) return null;
        a = a[1];
        var b = '',
          c = a.match(/\.(\w+)$/);
        c && (b = c[1]);
        return [a, b];
      },
      measureRequestSent: function (a, c) {
        a = l[a];
        a = a.get(c);
        if (a == null || a.requestSent != null) return;
        else a.requestSent = (h || (h = b('performanceAbsoluteNow')))();
      },
      measureResponseReceived: function (a, c) {
        a = l[a];
        a = a.get(c);
        if (a == null || a.requestSent == null || a.responseReceived != null)
          return;
        else a.responseReceived = (h || (h = b('performanceAbsoluteNow')))();
      },
      annotate: function (a, c) {
        a = l[a];
        a = a.get(c);
        if (!a) return j;
        else {
          c = a.annotations;
          if (c != null) return c;
          else {
            c = new (b('TimingAnnotations'))();
            a.annotations = c;
            return c;
          }
        }
      },
      getAnnotationsFor: function (a, b) {
        a = l[a];
        a = a.get(b);
        if (!a) return null;
        else {
          b = a.annotations;
          return b != null ? b.prepareToSend() : null;
        }
      },
    };
    e.exports = n;
  },
  null,
);
