export const PUSHKIN_FACADE_SVG = `<svg viewBox="0 0 1000 420" stroke="currentColor" stroke-width="1" fill="none" aria-hidden="true">
  <!-- Ground -->
  <line class="ln" x1="0" y1="380" x2="1000" y2="380" stroke-width="1.4"/>
  <line class="ln short" x1="0" y1="386" x2="1000" y2="386" stroke-width="0.5" opacity="0.4"/>

  <!-- Plinth -->
  <line class="ln" x1="40" y1="340" x2="960" y2="340" stroke-width="1.2"/>
  <line class="ln short" x1="40" y1="346" x2="960" y2="346" stroke-width="0.5" opacity="0.5"/>

  <!-- Left wing -->
  <line class="ln" x1="40" y1="240" x2="40" y2="340"/>
  <line class="ln" x1="40" y1="240" x2="290" y2="240"/>
  <line class="ln short" x1="40" y1="248" x2="290" y2="248" stroke-width="0.6"/>

  <!-- Right wing -->
  <line class="ln" x1="960" y1="240" x2="960" y2="340"/>
  <line class="ln" x1="710" y1="240" x2="960" y2="240"/>
  <line class="ln short" x1="710" y1="248" x2="960" y2="248" stroke-width="0.6"/>

  <!-- Wing windows: arched openings -->
  <g stroke-width="0.9">
    <path class="ln short" d="M 65 320 v -36 a 14 14 0 0 1 28 0 v 36 z"/>
    <path class="ln short" d="M 115 320 v -36 a 14 14 0 0 1 28 0 v 36 z"/>
    <path class="ln short" d="M 165 320 v -36 a 14 14 0 0 1 28 0 v 36 z"/>
    <path class="ln short" d="M 215 320 v -36 a 14 14 0 0 1 28 0 v 36 z"/>
    <path class="ln short" d="M 759 320 v -36 a 14 14 0 0 1 28 0 v 36 z"/>
    <path class="ln short" d="M 809 320 v -36 a 14 14 0 0 1 28 0 v 36 z"/>
    <path class="ln short" d="M 859 320 v -36 a 14 14 0 0 1 28 0 v 36 z"/>
    <path class="ln short" d="M 909 320 v -36 a 14 14 0 0 1 28 0 v 36 z"/>
  </g>

  <!-- Central portico back wall -->
  <line class="ln" x1="290" y1="240" x2="710" y2="240" stroke-width="1.2"/>

  <!-- 7 columns -->
  <g stroke-width="0.9">
    <line class="ln short" x1="320" y1="240" x2="320" y2="340"/>
    <line class="ln short" x1="320.5" y1="240" x2="320.5" y2="340"/>
    <line class="ln short" x1="380" y1="240" x2="380" y2="340"/>
    <line class="ln short" x1="380.5" y1="240" x2="380.5" y2="340"/>
    <line class="ln short" x1="440" y1="240" x2="440" y2="340"/>
    <line class="ln short" x1="440.5" y1="240" x2="440.5" y2="340"/>
    <line class="ln short" x1="500" y1="240" x2="500" y2="340"/>
    <line class="ln short" x1="500.5" y1="240" x2="500.5" y2="340"/>
    <line class="ln short" x1="560" y1="240" x2="560" y2="340"/>
    <line class="ln short" x1="560.5" y1="240" x2="560.5" y2="340"/>
    <line class="ln short" x1="620" y1="240" x2="620" y2="340"/>
    <line class="ln short" x1="620.5" y1="240" x2="620.5" y2="340"/>
    <line class="ln short" x1="680" y1="240" x2="680" y2="340"/>
    <line class="ln short" x1="680.5" y1="240" x2="680.5" y2="340"/>
  </g>

  <!-- Column capitals & bases -->
  <g stroke-width="0.8">
    <line class="ln short" x1="313" y1="240" x2="327" y2="240"/>
    <line class="ln short" x1="313" y1="338" x2="327" y2="338"/>
    <line class="ln short" x1="373" y1="240" x2="387" y2="240"/>
    <line class="ln short" x1="373" y1="338" x2="387" y2="338"/>
    <line class="ln short" x1="433" y1="240" x2="447" y2="240"/>
    <line class="ln short" x1="433" y1="338" x2="447" y2="338"/>
    <line class="ln short" x1="493" y1="240" x2="507" y2="240"/>
    <line class="ln short" x1="493" y1="338" x2="507" y2="338"/>
    <line class="ln short" x1="553" y1="240" x2="567" y2="240"/>
    <line class="ln short" x1="553" y1="338" x2="567" y2="338"/>
    <line class="ln short" x1="613" y1="240" x2="627" y2="240"/>
    <line class="ln short" x1="613" y1="338" x2="627" y2="338"/>
    <line class="ln short" x1="673" y1="240" x2="687" y2="240"/>
    <line class="ln short" x1="673" y1="338" x2="687" y2="338"/>
  </g>

  <!-- Entablature -->
  <line class="ln" x1="280" y1="218" x2="720" y2="218" stroke-width="1.2"/>
  <line class="ln" x1="280" y1="240" x2="720" y2="240" stroke-width="1.1"/>
  <line class="ln short" x1="280" y1="228" x2="720" y2="228" stroke-width="0.6"/>

  <!-- Pediment -->
  <path class="ln" d="M 280 218 L 500 130 L 720 218" stroke-width="1.2"/>
  <line class="ln short" x1="380" y1="218" x2="620" y2="218" stroke-width="0.6"/>

  <!-- Central tower -->
  <line class="ln" x1="475" y1="100" x2="475" y2="130"/>
  <line class="ln" x1="525" y1="100" x2="525" y2="130"/>
  <line class="ln" x1="475" y1="100" x2="525" y2="100"/>
  <line class="ln" x1="475" y1="130" x2="525" y2="130"/>

  <!-- Drum -->
  <line class="ln" x1="478" y1="72" x2="478" y2="100"/>
  <line class="ln" x1="522" y1="72" x2="522" y2="100"/>
  <line class="ln" x1="478" y1="72" x2="522" y2="72"/>

  <!-- Arched opening in drum -->
  <path class="ln short" d="M 488 100 v -14 a 12 12 0 0 1 24 0 v 14 z"/>

  <!-- ONION DOME (gold) -->
  <path class="gold-fill gleam"
        d="M 478 72 C 478 56, 488 44, 500 40 C 512 44, 522 56, 522 72 Z"
        stroke="var(--gold-deep)" stroke-width="0.8"/>

  <!-- Spire base -->
  <line class="ln" x1="500" y1="40" x2="500" y2="20"/>
  <!-- Cross -->
  <line class="ln" x1="500" y1="20" x2="500" y2="6"/>
  <line class="ln" x1="494" y1="13" x2="506" y2="13"/>
  <line class="ln short" x1="497" y1="9" x2="503" y2="9"/>

  <!-- Side flagpoles -->
  <line class="ln short" x1="290" y1="218" x2="290" y2="190"/>
  <line class="ln short" x1="710" y1="218" x2="710" y2="190"/>

  <!-- Stairs -->
  <line class="ln short" x1="380" y1="340" x2="620" y2="340"/>
  <line class="ln short" x1="370" y1="350" x2="630" y2="350"/>
  <line class="ln short" x1="360" y1="360" x2="640" y2="360"/>
  <line class="ln short" x1="350" y1="370" x2="650" y2="370"/>

  <!-- Dimension lines -->
  <g stroke-width="0.6" opacity="0.45">
    <line class="ln short" x1="40" y1="395" x2="40" y2="405" stroke-dasharray="2 2"/>
    <line class="ln short" x1="960" y1="395" x2="960" y2="405" stroke-dasharray="2 2"/>
    <line class="ln short" x1="40" y1="400" x2="960" y2="400"/>
  </g>
  <text class="dim" x="500" y="412" text-anchor="middle">L = 325 м · ELEVATION 01</text>

  <!-- Vertical dim -->
  <text class="dim" x="14" y="55" transform="rotate(-90 14 55)">h ≈ 56 м · OAH</text>

  <!-- Bottom-left coordinate tag -->
  <g transform="translate(56, 70)">
    <text class="dim" x="0" y="0">CATHERINE PALACE / PUSHKIN</text>
    <text class="dim" x="0" y="12">59°43′ N — 30°25′ E</text>
  </g>
</svg>`;
