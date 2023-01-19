__d(
  'calculateBaseContextualLayerPosition',
  ['Locale'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('Locale').isRTL();
    function a(a) {
      var b = a.align,
        c = a.contextRect,
        d = a.contextualLayerSize,
        e = a.fixed,
        f = a.offsetRect,
        g = a.position;
      a = a.screenRect;
      e = {
        height: void 0,
        position: e ? 'fixed' : void 0,
        transform: '',
        width: void 0,
      };
      var i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = (c.bottom + c.top) / 2,
        n = (c.left + c.right) / 2,
        o = h ? 'start' : 'end',
        p = h ? 'end' : 'start';
      switch (g) {
        case 'above':
          j = c.top - f.top;
          l = '-100%';
          break;
        case 'below':
          j = c.bottom - f.top;
          break;
        case p:
          i = c.left - f.left;
          k = '-100%';
          break;
        case o:
          i = c.right - f.left;
          break;
      }
      if (g === 'start' || g === 'end')
        switch (b) {
          case 'start':
            j = c.top - f.top;
            break;
          case 'middle':
            j = m - f.top;
            l = '-50%';
            break;
          case 'end':
            j = c.bottom - f.top;
            l = '-100%';
            break;
          case 'stretch':
            j = c.top - f.top;
            e.height = c.bottom - c.top + 'px';
            break;
        }
      else if (g === 'above' || g === 'below')
        switch (b) {
          case p:
            i = c.left - f.left;
            break;
          case 'middle':
            i = n - f.left;
            k = '-50%';
            break;
          case o:
            i = c.right - f.left;
            k = '-100%';
            break;
          case 'stretch':
            i = c.left - f.left;
            e.width = c.right - c.left + 'px';
            break;
        }
      f = 0;
      if (d != null)
        if (g === 'start' || g === 'end') {
          var q = null;
          switch (b) {
            case 'start':
              q = c.top;
              break;
            case 'middle':
              q = m - d.height / 2;
              break;
            case 'end':
              q = c.bottom - d.height;
              break;
          }
          q != null &&
            (q < a.top
              ? (f = a.top - q)
              : q + d.height > a.bottom && (f = a.bottom - q - d.height));
          j += f;
        } else if (g === 'above' || g === 'below') {
          m = null;
          switch (b) {
            case p:
              m = c.left;
              break;
            case 'middle':
              m = n - d.width / 2;
              break;
            case o:
              m = c.right - d.width;
              break;
          }
          m != null &&
            (m < a.left
              ? (f = a.left - m)
              : m + d.width > a.right && (f = a.right - m - d.width));
          i += f;
        }
      q = '';
      (i !== 0 || j !== 0) &&
        (q += 'translate(' + Math.round(i) + 'px, ' + Math.round(j) + 'px) ');
      (k !== 0 || l !== 0) && (q += 'translate(' + k + ', ' + l + ') ');
      e.transform = q;
      return { adjustment: f, style: e };
    }
    g['default'] = a;
  },
  98,
);
