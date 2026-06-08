export const S03_SVG = `<svg viewBox="0 0 300 240" fill="none" stroke="currentColor" stroke-width="1">
  <text x="22" y="22" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.5">плазменная резка · 1500 °C</text>

  <rect x="30" y="160" width="240" height="14" stroke-width="1.2"/>
  <g stroke-width="0.6" opacity="0.5">
    <line x1="50" y1="174" x2="42" y2="184"/>
    <line x1="90" y1="174" x2="82" y2="184"/>
    <line x1="130" y1="174" x2="122" y2="184"/>
    <line x1="170" y1="174" x2="162" y2="184"/>
    <line x1="210" y1="174" x2="202" y2="184"/>
    <line x1="250" y1="174" x2="242" y2="184"/>
  </g>

  <line x1="30" y1="167" x2="150" y2="167" stroke-width="0.8" opacity="0.6"/>
  <line x1="156" y1="167" x2="270" y2="167" stroke-width="0.8" opacity="0.6" stroke-dasharray="3 2"/>

  <g stroke-width="1.2">
    <line x1="150" y1="40" x2="150" y2="120"/>
    <path d="M140 120 L160 120 L155 140 L145 140 Z"/>
    <rect x="138" y="40" width="24" height="14"/>
    <line x1="135" y1="46" x2="120" y2="46" stroke-width="0.6"/>
    <line x1="165" y1="46" x2="180" y2="46" stroke-width="0.6"/>
  </g>
  <text x="74" y="50" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.6">резак</text>

  <g class="accent">
    <line x1="150" y1="140" x2="150" y2="160" stroke="currentColor" stroke-width="1.5">
      <animate attributeName="opacity" values="1;0.4;1" dur="0.4s" repeatCount="indefinite"/>
    </line>
    <path d="M146 148 L150 156 L154 148" stroke="currentColor" stroke-width="1"/>
  </g>

  <g fill="currentColor" class="accent">
    <circle cx="158" cy="168" r="1.3">
      <animate attributeName="opacity" values="1;0;1" dur="0.6s" repeatCount="indefinite"/>
      <animate attributeName="cx" values="158;180" dur="0.6s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="168;200" dur="0.6s" repeatCount="indefinite"/>
    </circle>
    <circle cx="142" cy="168" r="1.1">
      <animate attributeName="opacity" values="1;0;1" dur="0.7s" begin="0.15s" repeatCount="indefinite"/>
      <animate attributeName="cx" values="142;120" dur="0.7s" begin="0.15s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="168;195" dur="0.7s" begin="0.15s" repeatCount="indefinite"/>
    </circle>
    <circle cx="155" cy="170" r="1">
      <animate attributeName="opacity" values="1;0;1" dur="0.5s" begin="0.3s" repeatCount="indefinite"/>
      <animate attributeName="cx" values="155;172" dur="0.5s" begin="0.3s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="170;205" dur="0.5s" begin="0.3s" repeatCount="indefinite"/>
    </circle>
  </g>

  <line x1="180" y1="100" x2="240" y2="100" stroke-width="0.6"/>
  <circle cx="180" cy="100" r="1.5" fill="currentColor"/>
  <text x="244" y="97" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.7">плазма</text>
  <text x="244" y="108" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.7">t = 20 мм</text>
</svg>`;
