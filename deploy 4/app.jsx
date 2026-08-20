/* app.jsx — composition + Tweaks */

const FONT_OPTS = {
  'PP Editorial New': "'PP Editorial New', 'Cormorant Garamond', Georgia, serif",
  'Cormorant Garamond': "'Cormorant Garamond', Georgia, serif",
  'Bodoni Moda': "'Bodoni Moda', Georgia, serif",
  'EB Garamond': "'EB Garamond', Georgia, serif",
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroLayout": "overlay",
  "displayFont": "PP Editorial New",
  "red": "#830008",
  "corners": "soft",
  "motion": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const heroIsLight = t.heroLayout === 'stacked';

  const rootStyle = {
    '--red': t.red,
    '--fdisp': FONT_OPTS[t.displayFont] || FONT_OPTS['PP Editorial New'],
    '--radius': t.corners === 'sharp' ? '3px' : '18px',
    '--radius-sm': t.corners === 'sharp' ? '2px' : '12px',
  };

  return (
    <div className="st" style={rootStyle} data-motion={t.motion ? 'on' : 'off'}>
      <Nav heroIsLight={heroIsLight} />
      <Hero layout={t.heroLayout} />
      <VerseBand />
      <Vision />
      <WorshipMeaning />
      <Structure />
      <SetList />
      <Foundations />
      <Events />
      <Connect />
      <Churches />
      <Instagram />
      <Footer />

      <TweaksPanel>
        <TweakSection label="Hero" />
        <TweakRadio
          label="Layout"
          value={t.heroLayout}
          options={['overlay', 'split', 'stacked']}
          onChange={(v) => setTweak('heroLayout', v)}
        />
        <TweakSection label="Brand" />
        <TweakColor
          label="Red"
          value={t.red}
          options={['#830008', '#6d0410', '#9a0b0b', '#5c0a14']}
          onChange={(v) => setTweak('red', v)}
        />
        <TweakSelect
          label="Display font"
          value={t.displayFont}
          options={Object.keys(FONT_OPTS)}
          onChange={(v) => setTweak('displayFont', v)}
        />
        <TweakRadio
          label="Corners"
          value={t.corners}
          options={['soft', 'sharp']}
          onChange={(v) => setTweak('corners', v)}
        />
        <TweakSection label="Motion" />
        <TweakToggle
          label="Scroll reveals"
          value={t.motion}
          onChange={(v) => setTweak('motion', v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
