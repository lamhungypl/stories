__d(
  'mlcErrorHandler__INTERNAL',
  ['Lexical'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, c) {
      var d = document.activeElement,
        e = null;
      d != null &&
        (e = {
          activeElement: d.nodeName,
          rootSelected: d === b.getRootElement(),
        });
      d = window.event;
      var f = null;
      d != null &&
        (f = {
          altKey: d.altKey,
          ctrlKey: d.ctrlKey,
          data: d.data,
          inputType: d.inputType,
          isComposing: d.isComposing,
          keyCode: d.keyCode,
          metaKey: d.metaKey,
          shiftKey: d.shiftKey,
          type: d.type,
        });
      d = null;
      try {
        d = h(b.getEditorState());
      } catch (a) {}
      c(
        JSON.stringify({
          activeElement: e,
          editorState: d,
          error: a,
          event: f,
        }),
      );
    }
    function h(a) {
      return { nodes: i(a), selection: k(a) };
    }
    function i(a) {
      var b = [],
        c = [
          'key',
          'type',
          'detail',
          'format',
          'mode',
          'children',
          'parent',
          'first',
          'last',
          'size',
          'next',
          'prev',
        ];
      for (
        var a = a._nodeMap,
          d = Array.isArray(a),
          e = 0,
          a = d
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= a.length) break;
          f = a[e++];
        } else {
          e = a.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        f[0];
        f = f[1];
        var g = {};
        for (var h = 0; h < c.length; h++) {
          var i = c[h],
            k = '__' + i;
          k = f[k];
          if (k == null || j(i, k)) continue;
          g[i] = k;
        }
        b.push(g);
      }
      return b;
    }
    function j(a, b) {
      var c = new Set(['detail', 'format']);
      if (c.has(a) && b === 0) return !0;
      return a === 'mode' && b === 'normal' ? !0 : !1;
    }
    function k(a) {
      a = a._selection;
      if (!d('Lexical').$isRangeSelection(a)) return null;
      var b = a.anchor;
      a = a.focus;
      return {
        anchor: { key: b.key, offset: b.offset, type: b.type },
        focus: { key: a.key, offset: a.offset, type: a.type },
      };
    }
    g['default'] = a;
  },
  98,
);
