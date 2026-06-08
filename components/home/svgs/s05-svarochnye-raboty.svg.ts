export const S05_SVG = `<svg viewBox="0 0 300 240" fill="none" stroke="currentColor" stroke-width="1">
  <text x="22" y="22" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.5">MIG/MAG · полуавтоматическая сварка</text>

  <rect x="20" y="170" width="260" height="14" stroke-width="1.2"/>
  <g stroke-width="0.6" opacity="0.5">
    <line x1="40" y1="184" x2="32" y2="194"/>
    <line x1="80" y1="184" x2="72" y2="194"/>
    <line x1="120" y1="184" x2="112" y2="194"/>
    <line x1="160" y1="184" x2="152" y2="194"/>
    <line x1="200" y1="184" x2="192" y2="194"/>
    <line x1="240" y1="184" x2="232" y2="194"/>
  </g>

  <line x1="20" y1="170" x2="120" y2="170" stroke-width="1.2"/>
  <line x1="180" y1="170" x2="280" y2="170" stroke-width="1.2"/>

  <g stroke-width="1.2">
    <line x1="170" y1="50" x2="150" y2="130"/>
    <rect x="158" y="42" width="24" height="14" transform="rotate(-12 170 49)"/>
    <line x1="172" y1="42" x2="186" y2="32" stroke-width="0.7" opacity="0.6"/>
  </g>
  <text x="190" y="36" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.6">горелка</text>

  <g class="accent">
    <animateTransform attributeName="transform" type="translate" values="0 0; 0.6 -0.4; 0 0; -0.6 0.4; 0 0" dur="0.3s" repeatCount="indefinite"/>
    <path d="M148 130 L138 158 L162 158 Z" stroke="currentColor" stroke-width="1" fill="currentColor" opacity="0.15"/>
    <line x1="150" y1="130" x2="150" y2="165" stroke="currentColor" stroke-width="1.4">
      <animate attributeName="opacity" values="1;0.4;1" dur="0.2s" repeatCount="indefinite"/>
    </line>
  </g>

  <path d="M120 168 Q135 165 150 168 Q165 165 180 168" stroke-width="1.4" class="accent"/>
  <g stroke-width="0.7" opacity="0.7">
    <line x1="125" y1="166" x2="127" y2="163"/>
    <line x1="135" y1="165" x2="137" y2="162"/>
    <line x1="145" y1="166" x2="147" y2="163"/>
    <line x1="155" y1="166" x2="157" y2="163"/>
    <line x1="165" y1="165" x2="167" y2="162"/>
    <line x1="175" y1="166" x2="177" y2="163"/>
  </g>

  <line x1="195" y1="120" x2="240" y2="120" stroke-width="0.6"/>
  <circle cx="195" cy="120" r="1.5" fill="currentColor"/>
  <text x="218" y="116" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.7">шов</text>
  <text x="218" y="127" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.7">CO₂ / Ar</text>

  <line x1="30" y1="50" x2="30" y2="170" stroke-dasharray="2 3" opacity="0.4"/>
  <text x="34" y="100" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.5">t = 8 мм</text>
</svg>`;
