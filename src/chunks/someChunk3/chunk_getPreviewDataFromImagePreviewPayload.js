__d(
  'getPreviewDataFromImagePreviewPayload',
  ['FBLogger', 'unrecoverableViolation'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'data:image/jpeg;base64,',
      i = 160,
      j = 162,
      k = 42;
    function l(a, b) {
      b === void 0 && (b = 0);
      a = atob(a);
      if (a.length <= 3)
        throw c('unrecoverableViolation')(
          'The preview payload was ' +
            a.length +
            ' byte(s) long when it should be 4 or more. The first byte is the version, the second the width, and the third the height. The 4th byte and onward is the image data.',
          'comet_infra',
        );
      var d = new Uint8Array(a.length + b);
      for (var e = 0; e < a.length; e++) d[b + e] = a.charCodeAt(e);
      return d;
    }
    var m;
    function n() {
      m == null &&
        (m = l(
          '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsaGikdKUEmJkFCLy8vQkc/Pj4/R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0cBHSkpNCY0PygoP0c/NT9HR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR//AABEIABQAKgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AA==',
        ));
      return m;
    }
    function a(a) {
      var b = n();
      try {
        a = l(a, b.length - 3);
        var d = a[b.length - 1],
          e = a[b.length - 3],
          f = a[b.length - 2];
        if (d > k)
          throw c('unrecoverableViolation')(
            'Tried to decode a payload whose height was ' +
              d +
              '. The maximum ' +
              ('is ' + k + '.'),
            'comet_infra',
          );
        if (f > k)
          throw c('unrecoverableViolation')(
            'Tried to decode a payload whose width was ' +
              f +
              '. The maximum ' +
              ('is ' + k + '.'),
            'comet_infra',
          );
        a.set(b, 0);
        a[i] = d;
        a[j] = f;
        b = btoa(String.fromCharCode.apply(null, a));
        return { dataURI: '' + h + b, height: d, width: f, version: e };
      } catch (b) {
        a = c('FBLogger')('images_infra');
        b instanceof Error && a.catching(b);
        a.warn(
          'Failed to decode a preview image payload. Falling back with a blank image.',
        );
        return null;
      }
    }
    g['default'] = a;
  },
  98,
);
