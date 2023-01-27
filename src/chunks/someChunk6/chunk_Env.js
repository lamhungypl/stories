__d(
  'Env',
  [],
  function (a, b, c, d, e, f) {
    b = {
      ajaxpipe_token: null,
      compat_iframe_token: null,
      iframeKey: '',
      iframeTarget: '',
      iframeToken: '',
      isCQuick: !1,
      jssp_header_sent: !1,
      start: Date.now(),
      nocatch: !1,
      useTrustedTypes: !1,
      isTrustedTypesReportOnly: !1,
      enableDefaultTrustedTypesPolicy: !1,
      ig_server_override: '',
      ig_mqtt_wss_endpoint: '',
      ig_mqtt_polling_endpoint: '',
    };
    a.Env && Object.assign(b, a.Env);
    a.Env = b;
    c = b;
    f['default'] = c;
  },
  66,
);
