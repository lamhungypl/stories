__d(
  'getAsyncParams',
  [
    'CSRBitMap',
    'CometPersistQueryParams',
    'CurrentAdAccount',
    'CurrentCommunity',
    'CurrentUserInitialData',
    'DTSG',
    'DTSGUtils',
    'DTSG_ASYNC',
    'Env',
    'ISB',
    'JSErrorLoggingConfig',
    'LSD',
    'ServerJSDefine',
    'SiteData',
    'SprinkleConfig',
    'StaticSiteData',
    'WebConnectionClassServerGuess',
    'WebSession',
    'asyncParams',
    'isSocialPlugin',
    'uniqueRequestID',
  ],
  function (a, b, c, d, e, f) {
    var g,
      h,
      i = b('JSErrorLoggingConfig').sampleWeight,
      j = b('JSErrorLoggingConfig').sampleWeightKey,
      k = {
        locale: !0,
        cxobfus: !0,
        js_debug: !0,
        cquick: !0,
        cquick_token: !0,
        wdplevel: !0,
        prod_graphql: !0,
        sri: !0,
      },
      l = { ctarget: !0 };
    function a(a) {
      var c,
        d = babelHelpers['extends'](
          {},
          b('asyncParams').get(),
          ((c = {
            __user: (g || (g = b('CurrentUserInitialData'))).USER_ID,
            __a: 1,
          }),
          (c[b('StaticSiteData').jsmod_key] =
            b('ServerJSDefine').getLoadedModuleHash()),
          (c[b('StaticSiteData').csr_key] =
            b('CSRBitMap').toCompressedString()),
          (c.__req = b('uniqueRequestID')()),
          (c[b('StaticSiteData').hs_key] = b('SiteData').haste_session),
          (c[b('StaticSiteData').dpr_key] = b('SiteData').pr),
          (c[b('StaticSiteData').connection_class_server_guess_key] = b(
            'WebConnectionClassServerGuess',
          ).connectionClass),
          (c.__rev = b('SiteData').client_revision),
          (c.__s = b('WebSession').getId()),
          (c[b('StaticSiteData').haste_session_id_key] = b('SiteData').hsi),
          c),
        );
      if (!b('SiteData').wbloks_env) {
        d[b('StaticSiteData').comet_key] =
          (c = b('SiteData').comet_env) != null
            ? c
            : b('SiteData').is_comet
            ? 1
            : 0;
      }
      Object.entries(b('CometPersistQueryParams').relative).forEach(function (
        a,
      ) {
        var b = a[0];
        a = a[1];
        a != null && (d[b] = String(a));
      });
      window.location.search
        .slice(1)
        .split('&')
        .forEach(function (a) {
          a = a.split('=');
          var b = a[0];
          a = a[1];
          (b.substr(0, 4) === 'tfc_' ||
            b.substr(0, 4) === 'tfi_' ||
            b.substr(0, 3) === 'mh_' ||
            k[b] > -1 ||
            l[b] > -1) &&
            (l[b] > -1 ? (d[b] = decodeURIComponent(a)) : (d[b] = a));
        });
      (h || (h = b('Env'))).isCQuick &&
        !d.cquick &&
        ((d.cquick = (h || (h = b('Env'))).iframeKey),
        (d.ctarget = h.iframeTarget),
        (d.cquick_token = h.iframeToken));
      if (a == 'POST') {
        c = b('DTSG').getCachedToken
          ? b('DTSG').getCachedToken()
          : b('DTSG').getToken();
        c &&
          ((d.fb_dtsg = c),
          b('SprinkleConfig').param_name &&
            (d[b('SprinkleConfig').param_name] =
              b('DTSGUtils').getNumericValue(c)));
        b('LSD').token &&
          ((d.lsd = b('LSD').token),
          b('SprinkleConfig').param_name &&
            !c &&
            (d[b('SprinkleConfig').param_name] = b('DTSGUtils').getNumericValue(
              b('LSD').token,
            )));
      }
      if (a == 'GET') {
        c = b('DTSG_ASYNC').getCachedToken
          ? b('DTSG_ASYNC').getCachedToken()
          : b('DTSG_ASYNC').getToken();
        c &&
          ((d.fb_dtsg_ag = c),
          b('SprinkleConfig').param_name &&
            (d[b('SprinkleConfig').param_name] =
              b('DTSGUtils').getNumericValue(c)));
      }
      b('ISB').token && (d.fb_isb = b('ISB').token);
      b('CurrentCommunity').getID() !== '0' &&
        (d.__cid = b('CurrentCommunity').getID());
      b('CurrentAdAccount').getID() != null &&
        (d.__aaid = b('CurrentAdAccount').getID());
      b('isSocialPlugin')() && (d.__sp = 1);
      if (b('SiteData').spin) {
        d[(a = b('StaticSiteData')).spin_rev_key] =
          b('SiteData')[a.spin_rev_key];
        d[a.spin_branch_key] = b('SiteData')[a.spin_branch_key];
        d[a.spin_time_key] = b('SiteData')[a.spin_time_key];
        b('SiteData')[b('StaticSiteData').spin_mhenv_key] &&
          (d[b('StaticSiteData').spin_mhenv_key] =
            b('SiteData')[b('StaticSiteData').spin_mhenv_key]);
      }
      i != null && j != null && (d[j] = i);
      return d;
    }
    e.exports = a;
  },
  null,
);
