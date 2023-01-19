__d(
  'DOM',
  [
    '$',
    'DOMQuery',
    'Event',
    'FBLogger',
    'FbtResultBase',
    'HTML',
    'UserAgent_DEPRECATED',
    'createArrayFromMixed',
    'fb-error',
    'isNode',
    'isScalar',
    'isTextNode',
  ],
  function (a, b, c, d, e, f, g) {
    a = function (a, b, c) {
      a = document.createElement(a);
      b && h.setAttributes(a, b);
      c != null && h.setContent(a, c);
      return a;
    };
    var h = {
      find: d('DOMQuery').find,
      findPushSafe: d('DOMQuery').findPushSafe,
      scry: d('DOMQuery').scry,
      getSelection: d('DOMQuery').getSelection,
      contains: d('DOMQuery').contains,
      getRootElement: d('DOMQuery').getRootElement,
      isNodeOfType: d('DOMQuery').isNodeOfType,
      isInputNode: d('DOMQuery').isInputNode,
      create: a,
      setAttributes: function (a, b) {
        b.type && (a.type = b.type);
        for (var d in b) {
          var e = b[d],
            f = /^on/i.test(d);
          f &&
            typeof e !== 'function' &&
            c('FBLogger')('dom').warn(
              'Handlers passed to DOM.setAttributes must be functions. Handler passed for %s was %s',
              d,
              typeof e,
            );
          if (d == 'type') continue;
          else
            d == 'style'
              ? typeof e === 'string'
                ? (a.style.cssText = e)
                : Object.assign(a.style, e)
              : f
              ? c('Event').listen(a, d.substr(2), e)
              : d in a
              ? (a[d] = e)
              : a.setAttribute && a.setAttribute(d, e);
        }
      },
      prependContent: function (a, b) {
        if (!a)
          throw c('fb-error').TAAL.blameToPreviousFile(
            new Error('reference element is not a node'),
          );
        return j(b, a, function (b) {
          a.firstChild ? a.insertBefore(b, a.firstChild) : a.appendChild(b);
        });
      },
      insertAfter: function (a, b) {
        if (!a || !a.parentNode)
          throw c('fb-error').TAAL.blameToPreviousFile(
            new Error('reference element does not have a parent'),
          );
        var d = a.parentNode;
        return j(b, d, function (b) {
          a.nextSibling ? d.insertBefore(b, a.nextSibling) : d.appendChild(b);
        });
      },
      insertBefore: function (a, b) {
        if (!a || !a.parentNode)
          throw c('fb-error').TAAL.blameToPreviousFile(
            new Error('reference element does not have a parent'),
          );
        var d = a.parentNode;
        return j(b, d, function (b) {
          d.insertBefore(b, a);
        });
      },
      setContent: function (a, b) {
        if (!a)
          throw c('fb-error').TAAL.blameToPreviousFile(
            new Error('reference element is not a node'),
          );
        while (a.firstChild) i(a.firstChild);
        return h.appendContent(a, b);
      },
      appendContent: function (a, b) {
        if (!a)
          throw c('fb-error').TAAL.blameToPreviousFile(
            new Error('reference element is not a node'),
          );
        return j(b, a, function (b) {
          a.appendChild(b);
        });
      },
      replace: function (a, b) {
        if (!a || !a.parentNode)
          throw c('fb-error').TAAL.blameToPreviousFile(
            new Error('reference element does not have a parent'),
          );
        var d = a.parentNode;
        return j(b, d, function (b) {
          d.replaceChild(b, a);
        });
      },
      remove: function (a) {
        i(typeof a === 'string' ? c('$')(a) : a);
      },
      empty: function (a) {
        a = typeof a === 'string' ? c('$')(a) : a;
        while (a.firstChild) i(a.firstChild);
      },
    };
    function i(a) {
      a.parentNode && a.parentNode.removeChild(a);
    }
    function j(a, b, e) {
      a = c('HTML').replaceJSONWrapper(a);
      if (
        a instanceof c('HTML') &&
        b.firstChild === null &&
        -1 === a.toString().indexOf('<script')
      ) {
        var f = d('UserAgent_DEPRECATED').ie();
        if (
          !f ||
          (f > 7 &&
            !d('DOMQuery').isNodeOfType(b, [
              'table',
              'tbody',
              'thead',
              'tfoot',
              'tr',
              'select',
              'fieldset',
            ]))
        ) {
          var g = f ? '<em style="display:none;">&nbsp;</em>' : '';
          b.innerHTML = g + a;
          f && b.removeChild(b.firstChild);
          return Array.from(b.childNodes);
        }
      } else if (c('isTextNode')(b)) {
        b.data = a;
        return [a];
      }
      g = document.createDocumentFragment();
      var h;
      f = [];
      b = [];
      a = c('createArrayFromMixed')(a);
      a.length === 1 &&
        a[0] instanceof c('FbtResultBase') &&
        (a = a[0].getContents());
      for (var i = 0; i < a.length; i++) {
        h = c('HTML').replaceJSONWrapper(a[i]);
        if (h instanceof c('HTML')) {
          b.push(h.getAction());
          var j = h.getNodes();
          for (var k = 0; k < j.length; k++) f.push(j[k]), g.appendChild(j[k]);
        } else if (c('isScalar')(h) || h instanceof c('FbtResultBase')) {
          k = document.createTextNode(h);
          f.push(k);
          g.appendChild(k);
        } else
          c('isNode')(h)
            ? (f.push(h), g.appendChild(h))
            : (Array.isArray(h) &&
                c('FBLogger')('dom').warn('Nest arrays not supported'),
              h !== null &&
                c('FBLogger')('dom').warn('No way to set content %s', h));
      }
      e(g);
      b.forEach(function (a) {
        a();
      });
      return f;
    }
    b = h;
    g['default'] = b;
  },
  98,
);
