__d(
  'CometTextWithEntitiesRelay.react',
  [
    'CometRelay',
    'CometTextWithEntities.react',
    'CometTextWithEntitiesRelay_entity.graphql',
    'CometTextWithEntitiesRelay_textWithEntities.graphql',
    'cometNormalizeTextEntityRanges',
    'react',
    'recoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i,
      j = d('react');
    h !== void 0 ? h : (h = b('CometTextWithEntitiesRelay_entity.graphql'));
    function a(a) {
      var e = a.textWithEntities;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ['textWithEntities']);
      e = d('CometRelay').useFragment(
        i !== void 0
          ? i
          : (i = b('CometTextWithEntitiesRelay_textWithEntities.graphql')),
        e,
      );
      if (e == null) {
        c('recoverableViolation')(
          "received null text with entities, this it to be expected by design, it's very possible mutators/updaters eliminate this field, but this shouldn't be the norm, please investigate if you're seeing \"high\" error rates",
          'comet_ui',
        );
        return null;
      }
      var f = e.aggregated_ranges,
        g = e.color_ranges,
        h = e.delight_ranges,
        k = e.image_ranges,
        l = e.inline_style_ranges,
        m = e.ranges;
      e = e.text;
      if (e == null) return null;
      m = [].concat(
        m,
        c('cometNormalizeTextEntityRanges')(f, 'Aggregate'),
        c('cometNormalizeTextEntityRanges')(l, 'Inline'),
        c('cometNormalizeTextEntityRanges')(k, 'Image'),
        c('cometNormalizeTextEntityRanges')(g, 'Color'),
        c('cometNormalizeTextEntityRanges')(h, 'TextDelightCampaign'),
      );
      return j.jsx(
        c('CometTextWithEntities.react'),
        babelHelpers['extends']({}, a, { ranges: m, text: e }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
