export const S06_SVG = `<svg viewBox="0 0 300 240" fill="none" stroke="currentColor" stroke-width="1">
  <text x="22" y="22" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.5">полный цикл металлообработки</text>

  <circle cx="150" cy="130" r="2" fill="currentColor" opacity="0.6"/>

  <g stroke-width="0.7" opacity="0.5" stroke-dasharray="2 3">
    <line x1="150" y1="130" x2="80" y2="80"/>
    <line x1="150" y1="130" x2="220" y2="80"/>
    <line x1="150" y1="130" x2="150" y2="200"/>
  </g>

  <g transform="translate(80,80)">
    <circle cx="0" cy="0" r="26" stroke-width="1.2"/>
    <rect x="-10" y="-14" width="20" height="10" stroke-width="1"/>
    <path d="M-3 -4 L-7 6 L3 4 L0 12" stroke-width="1" class="accent"/>
    <text x="-22" y="40" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.7">стружка</text>
  </g>

  <g transform="translate(220,80)">
    <circle cx="0" cy="0" r="26" stroke-width="1.2"/>
    <path d="M-14 4 Q-7 -2 0 4 Q7 -2 14 4" stroke-width="1.4" class="accent"/>
    <g stroke-width="0.7" opacity="0.7">
      <line x1="-10" y1="2" x2="-9" y2="-1"/>
      <line x1="-2" y1="0" x2="-1" y2="-3"/>
      <line x1="6" y1="0" x2="7" y2="-3"/>
      <line x1="12" y1="2" x2="13" y2="-1"/>
    </g>
    <text x="-12" y="40" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.7">сварка</text>
  </g>

  <g transform="translate(150,200)">
    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="8s" repeatCount="indefinite" additive="sum"/>
    <circle cx="0" cy="0" r="22" stroke-width="1.2"/>
    <circle cx="0" cy="0" r="5" stroke-width="1"/>
    <g stroke-width="1.2">
      <line x1="0" y1="-22" x2="0" y2="-28"/>
      <line x1="0" y1="22" x2="0" y2="28"/>
      <line x1="-22" y1="0" x2="-28" y2="0"/>
      <line x1="22" y1="0" x2="28" y2="0"/>
      <line x1="16" y1="-16" x2="20" y2="-20"/>
      <line x1="-16" y1="-16" x2="-20" y2="-20"/>
      <line x1="16" y1="16" x2="20" y2="20"/>
      <line x1="-16" y1="16" x2="-20" y2="20"/>
    </g>
  </g>
  <text x="120" y="232" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.7">шестерня</text>

  <circle cx="150" cy="130" r="40" stroke-width="0.7" stroke-dasharray="2 3" opacity="0.4"/>
  <text x="138" y="133" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.7">цикл</text>
</svg>`;
