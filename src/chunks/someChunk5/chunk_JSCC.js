__d(
  'JSCC',
  [],
  function $module_JSCC(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    var factories = {};
    function createFactory(constructor) {
      var instance,
        constructed = !1;
      return function () {
        constructed || ((instance = constructor()), (constructed = !0));
        return instance;
      };
    }
    function get(key) {
      if (!factories[key]) throw new Error('JSCC entry is missing');
      return factories[key]();
    }
    function init(constructors) {
      for (var key in constructors)
        factories[key] = createFactory(constructors[key]);
      return function clearJSCC() {
        for (var _key in constructors) delete factories[_key];
      };
    }
    function parse(jsccMapString) {
      return eval(jsccMapString);
    }
    exports.get = get;
    exports.init = init;
    exports.parse = parse;
  },
  66,
);
