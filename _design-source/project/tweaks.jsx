// tweaks.jsx — Tweaks config for ПМЗ site

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "system",
  "accent": "#3a6a99",
  "density": 1,
  "showBlueprint": true
}/*EDITMODE-END*/;

// Map curated swatches → (light, dark) OKLCH pairs so accent stays readable
// on both backgrounds without a separate dropdown.
const ACCENT_MAP = {
  '#3a6a99': { // steel blue
    light:    { c: 'oklch(48% 0.09 245)', hi: 'oklch(55% 0.10 245)' },
    dark:     { c: 'oklch(70% 0.09 245)', hi: 'oklch(78% 0.10 245)' },
  },
  '#c25a2b': { // industrial rust
    light:    { c: 'oklch(52% 0.16 45)',  hi: 'oklch(58% 0.17 45)'  },
    dark:     { c: 'oklch(68% 0.15 45)',  hi: 'oklch(74% 0.16 45)'  },
  },
  '#2f6b54': { // engineering forest
    light:    { c: 'oklch(45% 0.10 160)', hi: 'oklch(52% 0.11 160)' },
    dark:     { c: 'oklch(68% 0.10 160)', hi: 'oklch(74% 0.11 160)' },
  },
  '#2a2c30': { // monochrome
    light:    { c: 'oklch(28% 0.005 260)', hi: 'oklch(38% 0.005 260)' },
    dark:     { c: 'oklch(85% 0.005 80)',  hi: 'oklch(92% 0.005 80)'  },
  },
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const root = document.documentElement;
    if (t.theme === 'system') {
      root.removeAttribute('data-theme');
      try { localStorage.removeItem('pmz-theme'); } catch(e){}
    } else {
      root.setAttribute('data-theme', t.theme);
      try { localStorage.setItem('pmz-theme', t.theme); } catch(e){}
    }
  }, [t.theme]);

  React.useEffect(() => {
    const root = document.documentElement;
    const sys = matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = t.theme === 'dark' || (t.theme === 'system' && sys);
    const a = ACCENT_MAP[t.accent] || ACCENT_MAP['#3a6a99'];
    const pair = isDark ? a.dark : a.light;
    root.style.setProperty('--accent', pair.c);
    root.style.setProperty('--accent-hi', pair.hi);
    try {
      localStorage.setItem('pmz-accent', pair.c);
      localStorage.setItem('pmz-accent-hi', pair.hi);
    } catch(e){}
  }, [t.accent, t.theme]);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--density', String(t.density));
    try { localStorage.setItem('pmz-density', String(t.density)); } catch(e){}
  }, [t.density]);

  React.useEffect(() => {
    const bp = document.querySelector('.hero .blueprint');
    if (bp) bp.style.display = t.showBlueprint ? '' : 'none';
  }, [t.showBlueprint]);

  // Re-apply accent when system theme flips (only when "system")
  React.useEffect(() => {
    if (t.theme !== 'system') return;
    const mq = matchMedia('(prefers-color-scheme: dark)');
    const handler = () => setTweak('accent', t.accent); // trigger effect
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [t.theme, t.accent]);

  return (
    <TweaksPanel title="Tweaks · ПМЗ">
      <TweakSection label="Тема" />
      <TweakRadio
        label="Схема"
        value={t.theme}
        options={[
          { value: 'light',  label: 'Свет'  },
          { value: 'dark',   label: 'Тьма'  },
          { value: 'system', label: 'Авто' },
        ]}
        onChange={(v) => setTweak('theme', v)}
      />

      <TweakSection label="Акцент бренда" />
      <TweakColor
        label="Цвет"
        value={t.accent}
        options={Object.keys(ACCENT_MAP)}
        onChange={(v) => setTweak('accent', v)}
      />

      <TweakSection label="Плотность" />
      <TweakSlider
        label="Воздух"
        value={t.density}
        min={0.7} max={1.3} step={0.05}
        onChange={(v) => setTweak('density', Number(v.toFixed(2)))}
      />

      <TweakSection label="Графика" />
      <TweakToggle
        label="Blueprint-сетка в hero"
        value={t.showBlueprint}
        onChange={(v) => setTweak('showBlueprint', v)}
      />
    </TweaksPanel>
  );
}

const root = ReactDOM.createRoot(document.getElementById('tweaks-root'));
root.render(<App />);
