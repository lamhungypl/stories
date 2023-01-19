__d(
  'FBLynx',
  ['Base64', 'Event', 'FBLynxBase', 'LinkshimHandlerConfig', 'Parent', 'URI'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = (g || (g = b('URI'))).goURIOnWindow,
      i = {
        alreadySetup: !1,
        setupDelegation: function (a) {
          a === void 0 && (a = !1);
          if (!document.documentElement) return;
          if (document.body == null) {
            if (a) return;
            window.setTimeout(function () {
              i.setupDelegation(!0);
            }, 100);
            return;
          }
          if (i.alreadySetup) return;
          i.alreadySetup = !0;
          var c = function (a) {
            var c = i.getMaybeLynxLink(a.target);
            if (!c) return;
            var d = c[0];
            c = c[1];
            var e = c,
              f = new (g || (g = b('URI')))(c.href),
              j;
            if (
              b('LinkshimHandlerConfig').ghl_param_link_shim &&
              d !== 'hover' &&
              c.dataset &&
              c.dataset.attributes
            ) {
              j = b('Base64').decodeObject(c.dataset.attributes);
              if (j && j.open_link) {
                var k;
                for (k in j) k !== 'open_link' && f.addQueryData(k, j[k]);
                k = c.cloneNode(!0);
                k.href = f.toString();
                e = k;
              }
            }
            switch (d) {
              case 'async':
              case 'asynclazy':
                b('FBLynxBase').logAsyncClick(e);
                break;
              case 'origin':
                b('FBLynxBase').originReferrerPolicyClick(e);
                break;
              case 'hover':
                i.hoverClick(e);
                break;
            }
            b('LinkshimHandlerConfig').ghl_param_link_shim &&
              d !== 'hover' &&
              j &&
              j.open_link &&
              (a.preventDefault(), h(f, window.open('', e.target), !0));
          };
          b('Event').listen(document.body, 'click', c);
          b('LinkshimHandlerConfig').middle_click_requires_event &&
            b('Event').listen(document.body, 'mouseup', function (a) {
              a.button == 1 && c(a);
            });
          b('Event').listen(document.body, 'mouseover', function (a) {
            a = i.getMaybeLynxLink(a.target);
            if (!a) return;
            var b = a[0];
            a = a[1];
            switch (b) {
              case 'async':
              case 'asynclazy':
              case 'origin':
              case 'hover':
                i.mouseover(a);
                break;
            }
          });
          b('Event').listen(document.body, 'contextmenu', function (a) {
            a = i.getMaybeLynxLink(a.target);
            if (!a) return;
            var b = a[0];
            a = a[1];
            switch (b) {
              case 'async':
              case 'hover':
              case 'origin':
                i.contextmenu(a);
                break;
              case 'asynclazy':
                break;
            }
          });
        },
        getMaybeLynxLink: function (a) {
          a = b('Parent').byAttribute(a, 'data-lynx-mode');
          if (a instanceof HTMLAnchorElement) {
            var c = a.getAttribute('data-lynx-mode');
            switch (c) {
              case 'async':
              case 'asynclazy':
              case 'hover':
              case 'origin':
                return [c, a];
              default:
                return null;
            }
          }
          return null;
        },
        hoverClick: function (a) {
          b('FBLynxBase').revertSwapIfLynxURIPresent(a);
        },
        mouseover: function (a) {
          b('FBLynxBase').swapLinkWithUnshimmedLink(a);
        },
        contextmenu: function (a) {
          b('FBLynxBase').revertSwapIfLynxURIPresent(a);
        },
      };
    e.exports = i;
  },
  null,
);
