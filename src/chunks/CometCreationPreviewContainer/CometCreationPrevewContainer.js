__d(
  'CometCreationPreviewContainer.react',
  [
    'fbt',
    'CometCard.react',
    'CometCreationResponsiveToggle.react',
    'CometGlobalPanelGating',
    'CometRouteRenderType',
    'CometScreenReaderText.react',
    'CometUnitHeader.react',
    'react',
  ],
  (a, b, c, d, e, { id }, g, h) => {
    const React = d('react');
    b = d('react');
    const useRef = b.useRef;
    const useState = b.useState;

    function Component(props) {
      let _allowFocus = props.allowFocus;
      let allowFocus = _allowFocus === void 0 ? !1 : _allowFocus;
      const e = props.children;
      let defaultLayout_ = props.defaultLayout;
      let defaultLayout =
        defaultLayout_ === void 0 ? 'desktop' : defaultLayout_;
      const g = props.extraHeaderContent;
      let hasResponsiveToggle_ = props.hasResponsiveToggle;
      let l = hasResponsiveToggle_ === void 0 ? !0 : hasResponsiveToggle_;
      const logger = props.logger;
      const onChangeLayout_ = props.onChangeLayout;
      var a = a.showHeadline;
      var a = a === void 0 ? !0 : a;
      const useDefaultLayout = useState(defaultLayout);
      const defaultLayoutState = useDefaultLayout[0];
      const setDefaultLayout = useDefaultLayout[1];
      let isPushView = d('CometRouteRenderType').useIsPushView();
      const q = useRef(null);
      const r = useRef(null);

      const onChangeLayout = (a) => {
        logger && logger(`${a}_view_toggle`);
        onChangeLayout_ && onChangeLayout_(a);
        setDefaultLayout(a);
      };

      const onKeyDownCapture = (a) => {
        a.key === 'Tab' &&
          !a.shiftKey &&
          r.current != null &&
          r.current.focus(),
          a.stopPropagation();
      };

      const u = (a) => {
        a.key === 'Tab' && a.shiftKey && q.current != null && q.current.focus(),
          a.stopPropagation();
      };

      const v = () => {
        r.current != null && r.current.focus();
      };

      const w = h._('__JHASH__9DT-GKeb6DV__JHASH__');
      let headline = null;
      let panelLabel;
      hasResponsiveToggle_
        ? (a &&
            (headline =
              defaultLayoutState === 'desktop'
                ? h._('__JHASH__Lxm3h66S5k7__JHASH__')
                : h._('__JHASH__7qRiWGSoFH9__JHASH__')),
          (panelLabel =
            defaultLayoutState === 'desktop'
              ? h._('__JHASH__Fa9U8v3v8N2__JHASH__')
              : h._('__JHASH__84elDPcigJr__JHASH__')))
        : ((panelLabel = h._('__JHASH__xPMbXXmZbS___JHASH__')),
          (headline = a ? panelLabel : null));
      return React.jsxs('div', {
        'aria-label': panelLabel,
        className: `x1jx94hy x1lq5wgf xgqcy7u x30kzoy x9jhf4c x10h3on x9f619 x78zum5 xdt5ytf x1iyjqo2 xs83m0k x5yr21d xqmxbcd x1iymm2a xmupa6y xqnzamk x2lwn1j${
          (!d('CometGlobalPanelGating').isGlobalPanelVisible() && isPushView
            ? ' x1uw4saw'
            : ` xg87l8a${defaultLayoutState === 'mobile' ? '' : ''}`) +
          (defaultLayoutState === 'mobile' ? ' xw3w31c' : ' xrwa9c3')
        }`,
        role: 'region',
        children: [
          React.jsxs('div', {
            className: 'x6s0dn4 x78zum5 xl56j7k',
            children: [
              headline &&
                React.jsx('div', {
                  className: 'x1r8uery x1iyjqo2 xs83m0k',
                  children: React.jsx(c('CometUnitHeader.react'), {
                    headline: headline,
                    level: 4,
                  }),
                }),
              g &&
                React.jsx('div', {
                  className: `xw7yly9${headline ? '' : ' x1d52u69'}`,
                  children: g,
                }),
              hasResponsiveToggle_ &&
                React.jsx('div', {
                  className: 'x1gryazu',
                  children: React.jsx(
                    c('CometCreationResponsiveToggle.react'),
                    {
                      layout: defaultLayoutState,
                      onChangeLayout: onChangeLayout,
                    },
                  ),
                }),
            ],
          }),
          !allowFocus &&
            React.jsxs(React.Fragment, {
              children: [
                React.jsx(c('CometScreenReaderText.react'), { text: w }),
                React.jsx('div', {
                  onKeyDownCapture: onKeyDownCapture,
                  ref: q,
                  tabIndex: '0',
                }),
              ],
            }),
          React.jsx('div', {
            className:
              'x1exxf4d x1y71gwh x1nb4dca xu1343h x1lq5wgf xgqcy7u x30kzoy x9jhf4c x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x78zum5 x1r8uery x1iyjqo2 xw7yly9 xktsk01 x1yztbdb x1d52u69 x10wlt62',
            onFocus: allowFocus ? null : v,
            onKeyDownCapture: allowFocus ? null : onKeyDownCapture,
            tabIndex: allowFocus ? -1 : 0,
            children: React.jsx(c('CometCard.react'), {
              background: 'light-wash',
              expanding: !0,
              children: React.jsx('div', {
                className: 'x5yr21d x6ikm8r x1odjw0f',
                children: React.jsx('div', {
                  className: `x5yr21d${allowFocus ? '' : ' x47corl'}`,
                  children: e,
                }),
              }),
            }),
          }),
          !allowFocus &&
            React.jsx('div', { onKeyDownCapture: u, ref: r, tabIndex: '0' }),
        ],
      });
    }
    Component.displayName = `${Component.name} [from ${id}]`;
    g['default'] = Component;
  },
  98,
);
