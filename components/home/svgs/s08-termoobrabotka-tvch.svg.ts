export const S08_SVG = `<svg viewBox="0 0 300 240" fill="none" stroke="currentColor" stroke-width="1">
  <text x="22" y="22" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.5">ТВЧ · индукционная закалка</text>

  <line x1="30" y1="40" x2="30" y2="220" stroke-dasharray="2 3" opacity="0.4"/>
  <line x1="270" y1="40" x2="270" y2="220" stroke-dasharray="2 3" opacity="0.4"/>
  <text x="34" y="36" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.5">ø 60 мм</text>
  <text x="34" y="232" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.5">f = 200 кГц</text>

  <rect x="140" y="40" width="20" height="180" stroke-width="1.2"/>
  <line x1="150" y1="40" x2="150" y2="220" stroke-width="0.6" opacity="0.5"/>

  <g class="accent">
    <rect x="135" y="100" width="30" height="40" stroke-width="0.8" fill="currentColor" opacity="0.12"/>
    <rect x="135" y="100" width="30" height="40" stroke-width="1.2"/>
  </g>

  <g stroke-width="1.2" class="helix-grp">
    <ellipse cx="150" cy="90" rx="40" ry="8"/>
    <ellipse cx="150" cy="110" rx="40" ry="8"/>
    <ellipse cx="150" cy="130" rx="40" ry="8"/>
    <ellipse cx="150" cy="150" rx="40" ry="8"/>
  </g>

  <line x1="110" y1="90" x2="80" y2="70" stroke-width="1.2"/>
  <line x1="190" y1="150" x2="220" y2="170" stroke-width="1.2"/>
  <rect x="60" y="60" width="20" height="14" stroke-width="1.2"/>
  <rect x="220" y="166" width="20" height="14" stroke-width="1.2"/>

  <g class="accent" stroke-width="1">
    <path d="M170 100 Q180 92 174 84">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite"/>
    </path>
    <path d="M170 130 Q182 124 178 114">
      <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="0.4s" repeatCount="indefinite"/>
    </path>
  </g>

  <line x1="192" y1="120" x2="240" y2="120" stroke-width="0.6"/>
  <circle cx="192" cy="120" r="1.5" fill="currentColor"/>
  <text x="244" y="117" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.7">индуктор</text>
  <text x="244" y="128" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.7">HRC 58</text>
</svg>`;
