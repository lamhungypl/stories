__d(
  'XControllerURIBuilder',
  ['invariant', 'URI', 'gkx', 'isInternalFBURI'],
  function (a, b, c, d, e, f, g, h) {
    a = (function () {
      function a(a, b) {
        (this.$1 = {}), (this.$2 = a), (this.$3 = b);
      }
      var b = a.prototype;
      b.setInt = function (a, b) {
        return this.__setParam(a, 'Int', b);
      };
      b.setFBID = function (a, b) {
        return this.__setParam(a, 'FBID', b);
      };
      b.setFloat = function (a, b) {
        return this.__setParam(a, 'Float', b);
      };
      b.setString = function (a, b) {
        return this.__setParam(a, 'String', b);
      };
      b.setExists = function (a, b) {
        b === !1 && (b = void 0);
        return this.__setParam(a, 'Exists', b);
      };
      b.setBool = function (a, b) {
        return this.__setParam(a, 'Bool', b);
      };
      b.setBoolVector = function (a, b) {
        return this.__setParam(a, 'BoolVector', b);
      };
      b.setEnum = function (a, b) {
        return this.__setParam(a, 'Enum', b);
      };
      b.setPath = function (a, b) {
        return this.__setParam(a, 'Path', b);
      };
      b.setIntVector = function (a, b) {
        return this.__setParam(a, 'IntVector', b);
      };
      b.setIntKeyset = function (a, b) {
        return this.__setParam(a, 'IntKeyset', b);
      };
      b.setIntSet = function (a, b) {
        return this.__setParam(a, 'IntSet', b.join(','));
      };
      b.setFloatVector = function (a, b) {
        return this.__setParam(a, 'FloatVector', b);
      };
      b.setFloatSet = function (a, b) {
        return this.__setParam(a, 'FloatSet', b.join(','));
      };
      b.setStringVector = function (a, b) {
        return this.__setParam(a, 'StringVector', b);
      };
      b.setStringKeyset = function (a, b) {
        return this.__setParam(a, 'StringKeyset', b);
      };
      b.setStringSet = function (a, b) {
        return this.__setParam(a, 'StringSet', b);
      };
      b.setFBIDVector = function (a, b) {
        return this.__setParam(a, 'FBIDVector', b);
      };
      b.setFBIDSet = function (a, b) {
        return this.__setParam(a, 'FBIDSet', b);
      };
      b.setFBIDKeyset = function (a, b) {
        return this.__setParam(a, 'FBIDKeyset', b);
      };
      b.setEnumVector = function (a, b) {
        return this.__setParam(a, 'EnumVector', b);
      };
      b.setEnumSet = function (a, b) {
        return this.__setParam(a, 'EnumSet', b);
      };
      b.setEnumKeyset = function (a, b) {
        return this.__setParam(a, 'EnumKeyset', b);
      };
      b.setIntToIntMap = function (a, b) {
        return this.__setParam(a, 'IntToIntMap', b);
      };
      b.setIntToFloatMap = function (a, b) {
        return this.__setParam(a, 'IntToFloatMap', b);
      };
      b.setIntToStringMap = function (a, b) {
        return this.__setParam(a, 'IntToStringMap', b);
      };
      b.setIntToBoolMap = function (a, b) {
        return this.__setParam(a, 'IntToBoolMap', b);
      };
      b.setStringToIntMap = function (a, b) {
        return this.__setParam(a, 'StringToIntMap', b);
      };
      b.setStringToFloatMap = function (a, b) {
        return this.__setParam(a, 'StringToFloatMap', b);
      };
      b.setStringToStringMap = function (a, b) {
        return this.__setParam(a, 'StringToStringMap', b);
      };
      b.setStringToNullableStringMap = function (a, b) {
        return this.__setParam(a, 'StringToNullableStringMap', b);
      };
      b.setStringToBoolMap = function (a, b) {
        return this.__setParam(a, 'StringToBoolMap', b);
      };
      b.setStringToEnumMap = function (a, b) {
        return this.__setParam(a, 'StringToEnumMap', b);
      };
      b.setEnumToStringVectorMap = function (a, b) {
        return this.__setParam(a, 'EnumToStringVectorMap', b);
      };
      b.setEnumToStringMap = function (a, b) {
        return this.__setParam(a, 'EnumToStringMap', b);
      };
      b.setEnumToBoolMap = function (a, b) {
        return this.__setParam(a, 'EnumToBoolMap', b);
      };
      b.setEnumToEnumMap = function (a, b) {
        return this.__setParam(a, 'EnumToEnumMap', b);
      };
      b.setEnumToIntMap = function (a, b) {
        return this.__setParam(a, 'EnumToIntMap', b);
      };
      b.setEnumToFBIDVectorMap = function (a, b) {
        return this.__setParam(a, 'EnumToFBIDVectorMap', b);
      };
      b.setStringToIntDict = function (a, b) {
        return this.__setParam(a, 'StringToIntDict', b);
      };
      b.setStringToNullableIntDict = function (a, b) {
        return this.__setParam(a, 'StringToNullableIntDict', b);
      };
      b.setStringToFloatDict = function (a, b) {
        return this.__setParam(a, 'StringToFloatDict', b);
      };
      b.setStringToStringKeysetDict = function (a, b) {
        return this.__setParam(a, 'StringToStringKeysetDict', b);
      };
      b.setStringToNullableFloatDict = function (a, b) {
        return this.__setParam(a, 'StringToNullableFloatDict', b);
      };
      b.setStringToStringDict = function (a, b) {
        return this.__setParam(a, 'StringToStringDict', b);
      };
      b.setStringToNullableStringDict = function (a, b) {
        return this.__setParam(a, 'StringToNullableStringDict', b);
      };
      b.setStringToBoolDict = function (a, b) {
        return this.__setParam(a, 'StringToBoolDict', b);
      };
      b.setStringToEnumDict = function (a, b) {
        return this.__setParam(a, 'StringToEnumDict', b);
      };
      b.setEnumToIntDict = function (a, b) {
        return this.__setParam(a, 'EnumToIntDict', b);
      };
      b.setEnumToStringDict = function (a, b) {
        return this.__setParam(a, 'EnumToStringDict', b);
      };
      b.setHackType = function (a, b) {
        return this.__setParam(a, 'HackType', b);
      };
      b.setTypeAssert = function (a, b) {
        return this.__setParam(a, 'TypeAssert', b);
      };
      b.__validateRequiredParamsExistence = function () {
        for (var a in this.$3)
          !this.$3[a].required ||
            Object.prototype.hasOwnProperty.call(this.$1, a) ||
            h(0, 903, a);
      };
      b.setParams = function (a) {
        for (var b in a) {
          this.__assertParamExists(b);
          var c = this.$3[b].type;
          this.__setParam(b, c, a[b]);
        }
        return this;
      };
      b.__assertParamExists = function (a) {
        a in this.$3 || h(0, 37339, a);
      };
      b.__setParam = function (a, b, c) {
        this.__assertParamExists(a);
        var d = this.$3[a].type,
          e = {
            StringOrPFBID: 'String',
            IntOrPFBID: 'Int',
            FBIDOrPFBID: 'FBID',
          };
        e = e[d];
        d === b || e === b || h(0, 37340, a, b, d);
        this.__setParamInt(a, c);
        return this;
      };
      b.__setParamInt = function (a, b) {
        this.$1[a] = b;
      };
      b.getRequest_LEGACY_UNTYPED = function (a) {
        return a.setReplaceTransportMarkers().setURI(this.getURI());
      };
      b.setPreviousActorIsPageVoice = function (a) {
        this.__setParamInt('paipv', a ? 1 : 0);
        return this;
      };
      b.getURI = function () {
        this.__validateRequiredParamsExistence();
        var a = {},
          b = '',
          d = /^(.*)?\{(\?)?(\*)?(.+?)\}(.*)?$/,
          e = this.$2.split('/'),
          f = !1;
        for (var g = 0; g < e.length; g++) {
          var i = e[g];
          if (i === '') continue;
          var j = d.exec(i);
          if (!j) b += '/' + i;
          else {
            i = j[2] === '?';
            var k = j[4],
              l = this.$3[k];
            l || h(0, 11837, k, this.$2);
            if (i && f) continue;
            if (this.$1[k] == null && i) {
              f = !0;
              continue;
            }
            i = this.$1[k] != null ? this.$1[k] : l.defaultValue;
            i != null || h(0, 907, k);
            l = j[1] ? j[1] : '';
            j = j[5] ? j[5] : '';
            b += '/' + l + i + j;
            a[k] = !0;
          }
        }
        this.$2.slice(-1) === '/' && (b += '/');
        b === '' && (b = '/');
        l = new (c('URI'))(b);
        for (i in this.$1) {
          j = this.$1[i];
          if (!a[i] && j != null) {
            k = this.$3[i];
            l.addQueryData(i, k && k.type === 'Exists' ? null : j);
          }
        }
        return l;
      };
      b.getLookasideURI = function () {
        var a = 'lookaside.facebook.com';
        c('isInternalFBURI')(c('URI').getRequestURI())
          ? (a = 'lookaside.internalfb.com')
          : c('gkx')('996940') && (a = 'lookaside.internmc.facebook.com');
        return this.getURI().setDomain(a).setProtocol('https');
      };
      a.create = function (b, c) {
        return function () {
          return new a(b, c);
        };
      };
      return a;
    })();
    a.prototype.getRequest = function (a) {
      return this.getRequest_LEGACY_UNTYPED(a);
    };
    g['default'] = a;
  },
  98,
);
