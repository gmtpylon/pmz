export const S07_SVG = `<svg viewBox="0 0 300 240" fill="none" stroke="currentColor" stroke-width="1">
  <text x="22" y="22" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.5">ТДЦ · реторта 420 °C</text>

  <line x1="20" y1="200" x2="280" y2="200" stroke-width="1.2"/>
  <g stroke-width="0.6" opacity="0.5">
    <line x1="40" y1="200" x2="32" y2="210"/>
    <line x1="80" y1="200" x2="72" y2="210"/>
    <line x1="120" y1="200" x2="112" y2="210"/>
    <line x1="160" y1="200" x2="152" y2="210"/>
    <line x1="200" y1="200" x2="192" y2="210"/>
    <line x1="240" y1="200" x2="232" y2="210"/>
  </g>

  <rect x="80" y="170" width="20" height="30" stroke-width="1.2"/>
  <rect x="200" y="170" width="20" height="30" stroke-width="1.2"/>

  <g>
    <animateTransform attributeName="transform" type="rotate" from="0 150 130" to="360 150 130" dur="18s" repeatCount="indefinite"/>
    <ellipse cx="150" cy="130" rx="70" ry="40" stroke-width="1.2"/>
    <line x1="80" y1="130" x2="220" y2="130" stroke-width="0.6" opacity="0.5" stroke-dasharray="3 3"/>
    <g stroke-width="0.9" opacity="0.85">
      <line x1="120" y1="118" x2="135" y2="118"/>
      <line x1="140" y1="125" x2="155" y2="125"/>
      <line x1="160" y1="135" x2="175" y2="135"/>
      <line x1="125" y1="142" x2="140" y2="142"/>
      <line x1="170" y1="120" x2="180" y2="120"/>
      <line x1="115" y1="135" x2="125" y2="135"/>
    </g>
  </g>

  <g class="accent" stroke-width="1">
    <path d="M120 90 Q124 78 120 66">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
    </path>
    <path d="M150 80 Q154 66 150 52">
      <animate attributeName="opacity" values="0.4;1;0.4" dur="2.4s" begin="0.3s" repeatCount="indefinite"/>
    </path>
    <path d="M180 90 Q184 78 180 66">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" begin="0.6s" repeatCount="indefinite"/>
    </path>
  </g>

  <line x1="225" y1="130" x2="260" y2="130" stroke-width="0.6"/>
  <circle cx="225" cy="130" r="1.5" fill="currentColor"/>
  <text x="244" y="126" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.7">Zn</text>
  <text x="244" y="137" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.7">60 мкм</text>

  <line x1="30" y1="100" x2="30" y2="160" stroke-dasharray="2 3" opacity="0.4"/>
  <text x="34" y="120" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.5">420 °C</text>
</svg>`;
