__d(
  'BanzaiScuba_DEPRECATED',
  ['BanzaiScubaMigrationFalcoEvent', 'FBLogger'],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a, b, d) {
        (this.posted = !1),
          a ||
            c('FBLogger')('BanzaiScuba').warn(
              "Can't post a sample without a dataset",
            ),
          (this.dataset = a),
          (this.$1 = b),
          (this.options = d);
      }
      var b = a.prototype;
      b.$2 = function (a, b, d) {
        if (this.posted) {
          c('FBLogger')('BanzaiScuba').warn(
            'Trying to add to an already posted sample',
          );
          return a;
        }
        a = a || {};
        a[b] = d;
        return a;
      };
      b.addNormal = function (a, b) {
        this.normal = this.$2(this.normal, a, b);
        return this;
      };
      b.addInteger = function (a, b) {
        this['int'] = this.$2(this['int'], a, b);
        return this;
      };
      b.addDenorm = function (a, b) {
        this.denorm = this.$2(this.denorm, a, b);
        return this;
      };
      b.addTagSet = function (a, b) {
        this.tags = this.$2(this.tags, a, b);
        return this;
      };
      b.addNormVector = function (a, b) {
        this.normvector = this.$2(this.normvector, a, b);
        return this;
      };
      b.post = function () {
        var a = this;
        if (this.posted) {
          c('FBLogger')('BanzaiScuba').warn('Trying to re-post');
          return;
        }
        if (!this.dataset) return;
        var b = {};
        b._ds = this.dataset;
        b._options = this.options;
        this.normal && (b.normal = this.normal);
        this['int'] && (b['int'] = this['int']);
        this.denorm && (b.denorm = this.denorm);
        this.tags && (b.tags = this.tags);
        this.normvector && (b.normvector = this.normvector);
        this.$1 !== null &&
          this.$1 !== '' &&
          this.$1 !== void 0 &&
          (b._lid = this.$1);
        c('BanzaiScubaMigrationFalcoEvent').log(function () {
          return { dataset: a.dataset, payload: b };
        });
        this.posted = !0;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
