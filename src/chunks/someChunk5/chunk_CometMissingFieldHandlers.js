__d(
  'CometMissingFieldHandlers',
  [
    'UFI2CommentsConnectionHandler',
    'getRelayFBMissingFieldHandlers',
    'relay-runtime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = [].concat(c('getRelayFBMissingFieldHandlers')(), [
      {
        handle: function (a, b, c, e) {
          if (
            b != null &&
            b.getType() === d('relay-runtime').ROOT_TYPE &&
            a.name === 'user' &&
            Object.prototype.hasOwnProperty.call(c, 'id')
          )
            return c.id;
          if (
            b != null &&
            b.getType() === d('relay-runtime').ROOT_TYPE &&
            a.name === 'story' &&
            Object.prototype.hasOwnProperty.call(c, 'story_id')
          )
            return c.story_id;
          if (
            b != null &&
            b.getType() === 'Story' &&
            a.name === 'comet_sections'
          ) {
            var f = b.getLinkedRecord(a.name, {
              renderLocation: 'homepage_stream',
            });
            if (f != null) return f.getDataID();
          }
          f = b == null ? void 0 : b.getValue('id');
          if (
            b != null &&
            typeof f === 'string' &&
            b.getType() === 'Feedback' &&
            a.name.startsWith(
              '__UFI2CommentsProvider_feedback_display_comments_ufi2_comments',
            )
          ) {
            var g = e.get(f);
            if (!g) return void 0;
            g = d('UFI2CommentsConnectionHandler').getConnection(
              g,
              'UFI2CommentsProvider_feedback_display_comments',
              { feedback_source: 1 },
            );
            return !g ? void 0 : g.getDataID();
          }
          if (
            b != null &&
            typeof f === 'string' &&
            b.getType() === 'Feedback' &&
            a.name === 'display_comments'
          ) {
            g = e.get(f);
            if (!g) return void 0;
            e = g.getLinkedRecord('display_comments', c);
            if (e) return e.getDataID();
            e = g.getLinkedRecord('display_comments');
            if (e) return e.getDataID();
            Object.prototype.hasOwnProperty.call(c, 'is_initial_fetch') &&
              (e = g.getLinkedRecord(
                'display_comments',
                babelHelpers['extends']({}, c, {
                  is_initial_fetch: !c.is_initial_fetch,
                }),
              ));
            return e ? e.getDataID() : void 0;
          }
          return b != null &&
            a.name === 'video' &&
            Object.prototype.hasOwnProperty.call(c, 'id')
            ? c.id
            : void 0;
        },
        kind: 'linked',
      },
    ]);
    b = a;
    g['default'] = b;
  },
  98,
);
