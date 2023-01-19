__d(
  'RelayFBFlightServerErrorHandler',
  ['FBLogger', 'warning'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      switch (a) {
        case 'FAIL_JS_ERROR':
          c('FBLogger')('react-flight')
            .addMetadata('REACT_FLIGHT', 'ERROR_MESSAGE', b[0].message)
            .addMetadata(
              'REACT_FLIGHT',
              'ERROR_STACK',
              b[0].message + '\n' + b[0].stack,
            )
            .warn(
              'RelayFBFlightServerErrorHandler: HaaS threw a JSRuntimeException "%s". Please see Component Stack for more details.\n%s',
              b[0].message,
              b[0].message + '\n' + b[0].stack,
            );
          c('warning')(
            !1,
            'RelayFBFlightServerErrorHandler: HaaS threw a JSRuntimeException "%s". Please see Component Stack for more details.\n%s',
            b[0].message,
            b[0].message + '\n' + b[0].stack,
          );
          break;
        case 'FAIL_RELAY_FLIGHT_RENDERER_CONTINUATION_ERROR':
        case 'FAIL_RELAY_FLIGHT_RENDERER_ERROR':
          c('FBLogger')('react-flight')
            .addMetadata('REACT_FLIGHT', 'ERROR_MESSAGE', b[0].message)
            .addMetadata('REACT_FLIGHT', 'ERROR_STACK', b[0].stack)
            .warn(
              'RelayFBFlightServerErrorHandler: %s.\nPlease see Component Stack for more details.\n%s',
              b[0].message,
              b[0].stack,
            );
          c('warning')(
            !1,
            'RelayFBFlightServerErrorHandler: %s\nPlease see Component Stack for more details.\n%s',
            b[0].message,
            b[0].stack,
          );
          break;
        default:
          c('FBLogger')('react-flight')
            .addMetadata('REACT_FLIGHT', 'ERROR_MESSAGE', b[0].message)
            .addMetadata('REACT_FLIGHT', 'ERROR_STACK', b[0].stack)
            .warn(
              'RelayFBFlightServerErrorHandler: %s.\n%s',
              b[0].message,
              b[0].stack,
            ),
            c('warning')(
              !1,
              'RelayFBFlightServerErrorHandler: %s\n%s',
              b[0].message,
              b[0].stack,
            );
      }
    }
    b = a;
    g['default'] = b;
  },
  98,
);
