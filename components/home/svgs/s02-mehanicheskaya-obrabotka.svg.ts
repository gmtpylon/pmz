export const S02_SVG = `<svg viewBox="0 0 300 240" fill="none" stroke="currentColor" stroke-width="1">
  <text x="22" y="22" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.5">токарно-фрезерный центр · 5 осей</text>

  <line x1="20" y1="190" x2="280" y2="190" stroke-width="1.2"/>
  <g stroke-width="0.6" opacity="0.5">
    <line x1="40" y1="190" x2="32" y2="200"/>
    <line x1="80" y1="190" x2="72" y2="200"/>
    <line x1="120" y1="190" x2="112" y2="200"/>
    <line x1="160" y1="190" x2="152" y2="200"/>
    <line x1="200" y1="190" x2="192" y2="200"/>
    <line x1="240" y1="190" x2="232" y2="200"/>
  </g>

  <rect x="30" y="100" width="50" height="90" stroke-width="1.2"/>
  <rect x="38" y="120" width="34" height="14" stroke-width="0.8" opacity="0.7"/>
  <text x="34" y="178" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.6">шпиндель</text>

  <g>
    <animateTransform attributeName="transform" type="rotate" from="0 120 140" to="360 120 140" dur="3s" repeatCount="indefinite"/>
    <circle cx="120" cy="140" r="22" stroke-width="1.2"/>
    <circle cx="120" cy="140" r="4" fill="currentColor"/>
    <line x1="120" y1="118" x2="120" y2="162" stroke-width="0.6" opacity="0.6"/>
    <line x1="98" y1="140" x2="142" y2="140" stroke-width="0.6" opacity="0.6"/>
  </g>

  <rect x="142" y="135" width="80" height="10" stroke-width="1.2"/>
  <line x1="142" y1="140" x2="222" y2="140" stroke-width="0.6" opacity="0.6"/>

  <g class="drill-bit">
    <rect x="180" y="60" width="6" height="50" fill="currentColor"/>
    <path d="M174 110 L183 128 L192 110 Z" class="accent" stroke="currentColor" stroke-width="1.2"/>
  </g>

  <rect x="160" y="40" width="46" height="22" stroke-width="1.2"/>
  <text x="166" y="55" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.6">турель</text>

  <g class="accent" fill="currentColor">
    <circle cx="225" cy="148" r="1.4">
      <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="148;162" dur="1.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="235" cy="152" r="1.2">
      <animate attributeName="opacity" values="0.8;0;0.8" dur="1.4s" begin="0.3s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="152;172" dur="1.4s" begin="0.3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="245" cy="148" r="1" >
      <animate attributeName="opacity" values="0.7;0;0.7" dur="1.3s" begin="0.6s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="148;168" dur="1.3s" begin="0.6s" repeatCount="indefinite"/>
    </circle>
  </g>

  <line x1="245" y1="140" x2="270" y2="140" stroke-width="0.6"/>
  <text x="248" y="135" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.7">±0.01</text>
</svg>`;
