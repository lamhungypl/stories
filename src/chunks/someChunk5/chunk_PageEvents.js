__d(
  'PageEvents',
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      NATIVE_ONLOAD: 'onload/onload',
      BIGPIPE_ONLOAD: 'onload/onload_callback',
      AJAXPIPE_ONLOAD: 'ajaxpipe/onload_callback',
      NATIVE_DOMREADY: 'onload/dom_content_ready',
      BIGPIPE_DOMREADY: 'onload/domcontent_callback',
      AJAXPIPE_DOMREADY: 'ajaxpipe/domcontent_callback',
      NATIVE_ONBEFOREUNLOAD: 'onload/beforeunload',
      NATIVE_ONUNLOAD: 'onload/unload',
      AJAXPIPE_ONUNLOAD: 'onload/exit',
      AJAXPIPE_SEND: 'ajaxpipe/send',
      AJAXPIPE_FIRST_RESPONSE: 'ajaxpipe/first_response',
      AJAXPIPE_ONBEFORECLEARCANVAS: 'ajaxpipe/onbeforeclearcanvas',
    });
    f['default'] = a;
  },
  66,
);
