__d(
  'getMarkupWrap',
  ['invariant', 'ExecutionEnvironment', 'TrustedTypesLinkTagHTMLPolicy'],
  function (a, b, c, d, e, f, g, h) {
    var i = c('ExecutionEnvironment').canUseDOM
        ? document.createElement('div')
        : null,
      j = {};
    b = [1, '<select multiple="true">', '</select>'];
    d = [1, '<table>', '</table>'];
    e = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
    var k = [1, '<svg xmlns="http://www.w3.org/2000/svg">', '</svg>'],
      l = {
        '*': [1, '?<div>', '</div>'],
        area: [1, '<map>', '</map>'],
        col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
        legend: [1, '<fieldset>', '</fieldset>'],
        param: [1, '<object>', '</object>'],
        tr: [2, '<table><tbody>', '</tbody></table>'],
        optgroup: b,
        option: b,
        caption: d,
        colgroup: d,
        tbody: d,
        tfoot: d,
        thead: d,
        td: e,
        th: e,
      };
    f = [
      'circle',
      'clipPath',
      'defs',
      'ellipse',
      'g',
      'image',
      'line',
      'linearGradient',
      'mask',
      'path',
      'pattern',
      'polygon',
      'polyline',
      'radialGradient',
      'rect',
      'stop',
      'text',
      'tspan',
    ];
    f.forEach(function (a) {
      (l[a] = k), (j[a] = !0);
    });
    function a(a) {
      a = a;
      !i && h(0, 144);
      Object.prototype.hasOwnProperty.call(l, a) || (a = '*');
      Object.prototype.hasOwnProperty.call(j, a) ||
        (a === '*'
          ? (i.innerHTML = c('TrustedTypesLinkTagHTMLPolicy').createHTML(
              '<link />',
            ))
          : (i.innerHTML = '<' + a + '></' + a + '>'),
        (j[a] = !i.firstChild));
      return j[a] ? l[a] : null;
    }
    g['default'] = a;
  },
  98,
);
