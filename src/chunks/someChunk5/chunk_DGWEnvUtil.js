__d(
  'DGWEnvUtil',
  ['DGWConstants', 'URI', 'gkx'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a() {
        this.$1 = '';
        this.$2 = '';
        if (c('URI').isValidURI(window.location.href)) {
          var a = new (c('URI'))(window.location.href),
            b = a.getDomain();
          a = a.getPath();
          i(b)
            ? ((this.$1 = 'gateway.internalfb.com'), (this.$2 = 'INTERNALFB'))
            : j(b)
            ? ((this.$1 = 'gateway.workplace.com'), (this.$2 = 'FACEBOOK'))
            : l(b)
            ? ((this.$1 = 'gateway.facebookenterprise.com'),
              (this.$2 = 'ENTERPRISEFB'))
            : m(b)
            ? ((this.$1 = 'gateway.facebookenterprise.com'),
              (this.$2 = 'ENTERPRISEFB'))
            : n(b)
            ? ((this.$1 = 'gateway.facebookrecruiting.com'),
              (this.$2 = 'RECRUITINGFB'))
            : p(b)
            ? ((this.$1 = 'gateway.instagram.com'), (this.$2 = 'INSTAGRAM'))
            : o(b) && !r(a)
            ? ((this.$1 = 'gateway.facebook.com'), (this.$2 = 'FACEBOOK'))
            : h(b)
            ? ((this.$1 = 'gateway.messenger.com'), (this.$2 = 'FACEBOOK'))
            : q(b)
            ? ((this.$1 = 'gateway.bulletin.com'), (this.$2 = 'BULLETIN'))
            : k(b) &&
              ((this.$1 = 'gateway.work.meta.com'), (this.$2 = 'FACEBOOK'));
          a = new (c('URI'))()
            .setDomain(this.$1)
            .setProtocol('wss')
            .setPath('/ws');
          this.$1 = a.toString();
        }
      }
      var b = a.prototype;
      b.isDGWEnvCompatible = function () {
        return this.$1.length != 0 && this.$2.length != 0;
      };
      b.isDGWAsDefault = function () {
        if (this.$2 === 'FACEBOOK') return c('gkx')('2878');
        if (this.$2 === 'INTERNALFB') return c('gkx')('2891');
        if (this.$2 === 'RECRUITINGFB') return c('gkx')('2914');
        return this.$2 === 'BULLETIN'
          ? c('gkx')('2918')
          : this.$2 === 'ENTERPRISEFB' || this.$2 === 'INSTAGRAM';
      };
      b.getDGWEndpoint = function () {
        return this.$1;
      };
      b.getDGWAuthType = function () {
        return this.$2;
      };
      b.getDGWVersion = function () {
        return d('DGWConstants').DgwVersion.DGWVER_BIG_IDS;
      };
      return a;
    })();
    function h(a) {
      return a.includes('messenger.com');
    }
    function i(a) {
      return a.includes('internalfb.com') && c('gkx')('1365');
    }
    function j(a) {
      return a.includes('workplace.com');
    }
    function k(a) {
      return a.includes('work.meta.com');
    }
    function l(a) {
      return a.includes('facebookenterprise.com');
    }
    function m(a) {
      return a.includes('metaenterprise.com');
    }
    function n(a) {
      return a.includes('facebookrecruiting.com');
    }
    function o(a) {
      return a.includes('facebook.com');
    }
    function p(a) {
      return a.includes('instagram.com') && !c('gkx')('2754');
    }
    function q(a) {
      return a.includes('bulletin.com');
    }
    function r(a) {
      return (
        (a.includes('adsmanager') ||
          a.includes('aladdin') ||
          a.includes('ads')) &&
        !c('gkx')('265')
      );
    }
    b = new a();
    g['default'] = b;
  },
  98,
);
