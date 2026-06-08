// AUTO-GENERATED from _design-source/project/index.html hero blueprint.
// Source SVG is large and static; rendering via dangerouslySetInnerHTML keeps it 1:1
// with the design while still allowing CSS variables (--gold, --gold-deep) and the
// animation classes defined in app/globals.css.

export const HERO_BLUEPRINT_SVG = `<svg class="hero-schem" viewBox="0 0 540 720" preserveAspectRatio="xMidYMin slice" aria-hidden="true">
          <defs>
            <pattern id="hero-soil" patternUnits="userSpaceOnUse" width="14" height="14" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="14" stroke="currentColor" stroke-width="0.4" opacity="0.25"/>
            </pattern>
            <pattern id="hero-rock" patternUnits="userSpaceOnUse" width="22" height="22">
              <path d="M0 11 L11 0 M11 22 L22 11 M-11 11 L0 22 M11 -11 L22 0" stroke="currentColor" stroke-width="0.5" opacity="0.3" fill="none"/>
              <circle cx="11" cy="11" r="1.2" fill="currentColor" opacity="0.18"/>
            </pattern>
            <pattern id="hero-track" patternUnits="userSpaceOnUse" width="14" height="10">
              <rect x="0" y="0" width="14" height="10" fill="none"/>
              <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" stroke-width="0.6"/>
            </pattern>
          </defs>

          <!-- Title block (top-right) -->
          <g font-family="SF Mono, monospace" font-size="9" letter-spacing="0.8" fill="currentColor" opacity="0.55">
            <text x="520" y="30" text-anchor="end">SHEET 01 / 04</text>
            <text x="520" y="44" text-anchor="end">SCALE 1 : 50</text>
            <text x="520" y="58" text-anchor="end" fill="var(--gold-deep)" opacity="0.95">REV. A · 2026</text>
          </g>

          <!-- Compass (top-left) -->
          <g transform="translate(36 42)" class="hs-compass">
            <circle r="22" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.35"/>
            <g class="hs-rot">
              <line x1="0" y1="-22" x2="0" y2="-16" stroke="var(--gold)" stroke-width="1.4"/>
              <line x1="0" y1="-22" x2="0" y2="-19" stroke="currentColor" stroke-width="0.4" transform="rotate(45)"/>
              <line x1="0" y1="-22" x2="0" y2="-19" stroke="currentColor" stroke-width="0.4" transform="rotate(90)"/>
              <line x1="0" y1="-22" x2="0" y2="-19" stroke="currentColor" stroke-width="0.4" transform="rotate(135)"/>
              <line x1="0" y1="-22" x2="0" y2="-19" stroke="currentColor" stroke-width="0.4" transform="rotate(180)"/>
              <line x1="0" y1="-22" x2="0" y2="-19" stroke="currentColor" stroke-width="0.4" transform="rotate(225)"/>
              <line x1="0" y1="-22" x2="0" y2="-19" stroke="currentColor" stroke-width="0.4" transform="rotate(270)"/>
              <line x1="0" y1="-22" x2="0" y2="-19" stroke="currentColor" stroke-width="0.4" transform="rotate(315)"/>
            </g>
            <text font-size="7" text-anchor="middle" y="-28" fill="currentColor" opacity="0.5">N</text>
            <circle r="1.5" fill="var(--gold)"/>
          </g>

          <!-- ============ CROWN BLOCK (top of mast) ============ -->
          <g stroke="currentColor" fill="none" stroke-width="1.1">
            <!-- Top platform / crown -->
            <rect x="252" y="76" width="60" height="14"/>
            <line x1="252" y1="83" x2="312" y2="83" stroke-width="0.5" opacity="0.5"/>
            <!-- Pulley / sheave -->
            <circle class="crown-pulley" cx="282" cy="68" r="8" stroke-width="1.2"/>
            <line x1="282" y1="60" x2="282" y2="76" class="crown-axle"/>
            <!-- Antenna / mast warning -->
            <line x1="282" y1="60" x2="282" y2="44" stroke-width="0.8"/>
            <circle class="mast-light" cx="282" cy="42" r="3" fill="var(--gold)" stroke="var(--gold-deep)" stroke-width="0.6"/>
            <!-- Mast nameplate -->
            <text x="318" y="86" font-family="SF Mono, monospace" font-size="8" fill="var(--gold-deep)" opacity="0.95" stroke="none">МБГУ-200</text>
          </g>

          <!-- ============ MAST / LATTICE TOWER ============ -->
          <g stroke="currentColor" fill="none" stroke-width="0.9" class="mast">
            <!-- Vertical chord members (4 of them, 2 visible in elevation) -->
            <line x1="262" y1="90" x2="262" y2="430"/>
            <line x1="302" y1="90" x2="302" y2="430"/>

            <!-- Mast widens at the bottom (A-frame transition) -->
            <line x1="262" y1="430" x2="250" y2="450"/>
            <line x1="302" y1="430" x2="314" y2="450"/>

            <!-- Horizontal cross members every 34 -->
            <line x1="262" y1="124" x2="302" y2="124"/>
            <line x1="262" y1="158" x2="302" y2="158"/>
            <line x1="262" y1="192" x2="302" y2="192"/>
            <line x1="262" y1="226" x2="302" y2="226"/>
            <line x1="262" y1="260" x2="302" y2="260"/>
            <line x1="262" y1="294" x2="302" y2="294"/>
            <line x1="262" y1="328" x2="302" y2="328"/>
            <line x1="262" y1="362" x2="302" y2="362"/>
            <line x1="262" y1="396" x2="302" y2="396"/>

            <!-- X-bracing in each panel -->
            <line x1="262" y1="90"  x2="302" y2="124"/>
            <line x1="302" y1="90"  x2="262" y2="124"/>
            <line x1="262" y1="124" x2="302" y2="158"/>
            <line x1="302" y1="124" x2="262" y2="158"/>
            <line x1="262" y1="158" x2="302" y2="192"/>
            <line x1="302" y1="158" x2="262" y2="192"/>
            <line x1="262" y1="192" x2="302" y2="226"/>
            <line x1="302" y1="192" x2="262" y2="226"/>
            <line x1="262" y1="226" x2="302" y2="260"/>
            <line x1="302" y1="226" x2="262" y2="260"/>
            <line x1="262" y1="260" x2="302" y2="294"/>
            <line x1="302" y1="260" x2="262" y2="294"/>
            <line x1="262" y1="294" x2="302" y2="328"/>
            <line x1="302" y1="294" x2="262" y2="328"/>
            <line x1="262" y1="328" x2="302" y2="362"/>
            <line x1="302" y1="328" x2="262" y2="362"/>
            <line x1="262" y1="362" x2="302" y2="396"/>
            <line x1="302" y1="362" x2="262" y2="396"/>
            <line x1="262" y1="396" x2="302" y2="430"/>
            <line x1="302" y1="396" x2="262" y2="430"/>

            <!-- Power swivel / rotary head sliding on mast (gold) -->
            <g class="rotary-head">
              <rect x="246" y="208" width="72" height="22" fill="var(--gold)" stroke="var(--gold-deep)" stroke-width="0.8" opacity="0.95"/>
              <line x1="252" y1="214" x2="312" y2="214" stroke="var(--gold-deep)" stroke-width="0.5" opacity="0.6"/>
              <line x1="252" y1="220" x2="312" y2="220" stroke="var(--gold-deep)" stroke-width="0.5" opacity="0.6"/>
              <line x1="252" y1="226" x2="312" y2="226" stroke="var(--gold-deep)" stroke-width="0.5" opacity="0.6"/>
              <!-- chuck / kelly attachment -->
              <rect x="276" y="228" width="14" height="14" fill="var(--gold)" stroke="var(--gold-deep)" stroke-width="0.6"/>
            </g>

            <!-- Vertical drill string going down through the rig and ground -->
            <line class="drill-rod" x1="282" y1="242" x2="282" y2="572" stroke="currentColor" stroke-width="2.4"/>
          </g>

          <!-- Annotation: MAST -->
          <g class="hs-annot" stroke="currentColor" stroke-width="0.5" opacity="0.55" font-family="SF Mono, monospace" font-size="9">
            <line class="hs-ln" x1="302" y1="270" x2="378" y2="270"/>
            <circle cx="302" cy="270" r="1.5" fill="var(--gold)"/>
            <text x="382" y="266" fill="currentColor">01 · Мачта решётчатая</text>
            <text x="382" y="276" fill="var(--gold-deep)" opacity="0.95">H = 14 м</text>
          </g>

          <!-- ============ CHASSIS — main deck ============ -->
          <g stroke="currentColor" fill="none" stroke-width="1.2" class="chassis">
            <!-- Main deck outline -->
            <path d="M 60 480 L 60 432 L 130 432 L 130 408 L 200 408 L 200 432 L 250 432 L 250 450 L 314 450 L 314 432 L 410 432 L 410 408 L 470 408 L 470 480 Z"/>
            <!-- ledge -->
            <line x1="60" y1="468" x2="470" y2="468" stroke-width="0.6" opacity="0.6"/>

            <!-- CABIN (left) -->
            <g class="cabin">
              <rect x="68" y="412" width="58" height="56" stroke-width="1.1"/>
              <!-- Windows -->
              <rect x="74" y="418" width="46" height="26" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="0.6"/>
              <line x1="74" y1="431" x2="120" y2="431" stroke="currentColor" stroke-width="0.4" opacity="0.5"/>
              <line x1="97" y1="418" x2="97" y2="444" stroke="currentColor" stroke-width="0.4" opacity="0.5"/>
              <!-- Door handle -->
              <rect x="113" y="450" width="6" height="14" stroke="currentColor" stroke-width="0.5"/>
              <text x="97" y="404" text-anchor="middle" font-family="SF Mono, monospace" font-size="7" fill="currentColor" opacity="0.55">КАБИНА</text>
            </g>

            <!-- ENGINE / HYDRAULIC PUMP (center-left) -->
            <g class="engine">
              <rect x="134" y="436" width="64" height="32" stroke-width="1.1"/>
              <line x1="142" y1="442" x2="190" y2="442" stroke="currentColor" stroke-width="0.5"/>
              <line x1="142" y1="448" x2="190" y2="448" stroke="currentColor" stroke-width="0.5"/>
              <line x1="142" y1="454" x2="190" y2="454" stroke="currentColor" stroke-width="0.5"/>
              <line x1="142" y1="460" x2="190" y2="460" stroke="currentColor" stroke-width="0.5"/>
              <!-- Exhaust stack -->
              <rect x="180" y="412" width="8" height="24" stroke-width="0.8"/>
              <path class="exhaust" d="M 184 412 q -2 -6 0 -10 q 2 -4 0 -10" stroke-width="0.6" opacity="0.5"/>
            </g>

            <!-- DIESEL TANK (right side) -->
            <g class="tank">
              <rect x="324" y="436" width="78" height="32" stroke-width="1.1"/>
              <rect x="332" y="442" width="62" height="20" fill="currentColor" opacity="0.08" stroke="currentColor" stroke-width="0.5"/>
              <text x="363" y="458" text-anchor="middle" font-family="SF Mono, monospace" font-size="7" fill="currentColor" opacity="0.7">DSL 400 L</text>
            </g>

            <!-- HYDRAULIC ARM / OUTRIGGER (right) -->
            <g class="outrigger">
              <rect x="418" y="412" width="48" height="14" stroke-width="0.9"/>
              <line x1="442" y1="426" x2="442" y2="476" stroke-width="1.2"/>
              <rect x="436" y="476" width="12" height="8" stroke-width="0.9" fill="currentColor" opacity="0.2"/>
            </g>
          </g>

          <!-- Annotation: CHASSIS -->
          <g class="hs-annot" stroke="currentColor" stroke-width="0.5" opacity="0.55" font-family="SF Mono, monospace" font-size="9">
            <line class="hs-ln" x1="60" y1="450" x2="20" y2="450"/>
            <circle cx="60" cy="450" r="1.5" fill="var(--gold)"/>
            <text x="16" y="446" text-anchor="end" fill="currentColor">02 · Шасси гусеничное</text>
            <text x="16" y="456" text-anchor="end" fill="var(--gold-deep)" opacity="0.95">M = 28 т</text>
          </g>

          <!-- ============ TRACKED CRAWLER BASE ============ -->
          <g stroke="currentColor" fill="none" stroke-width="1" class="tracks">
            <!-- Track frame -->
            <path d="M 70 482 L 460 482 L 470 494 L 470 530 L 460 542 L 70 542 L 60 530 L 60 494 Z" stroke-width="1.2"/>
            <!-- Inner track pattern -->
            <line x1="60" y1="500" x2="470" y2="500" stroke-width="0.5" opacity="0.4"/>
            <line x1="60" y1="524" x2="470" y2="524" stroke-width="0.5" opacity="0.4"/>

            <!-- Sprocket / drive wheel (rear-left) -->
            <circle class="sprocket sprocket-l" cx="85" cy="512" r="14" stroke-width="1"/>
            <circle cx="85" cy="512" r="6" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="0.5"/>
            <g class="sprocket-teeth" transform="translate(85 512)">
              <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-360 0 0" dur="12s" repeatCount="indefinite" additive="sum"/>
              <rect x="-1.2" y="-15" width="2.4" height="2.4" fill="currentColor"/>
              <rect x="-1.2" y="-15" width="2.4" height="2.4" fill="currentColor" transform="rotate(45)"/>
              <rect x="-1.2" y="-15" width="2.4" height="2.4" fill="currentColor" transform="rotate(90)"/>
              <rect x="-1.2" y="-15" width="2.4" height="2.4" fill="currentColor" transform="rotate(135)"/>
              <rect x="-1.2" y="-15" width="2.4" height="2.4" fill="currentColor" transform="rotate(180)"/>
              <rect x="-1.2" y="-15" width="2.4" height="2.4" fill="currentColor" transform="rotate(225)"/>
              <rect x="-1.2" y="-15" width="2.4" height="2.4" fill="currentColor" transform="rotate(270)"/>
              <rect x="-1.2" y="-15" width="2.4" height="2.4" fill="currentColor" transform="rotate(315)"/>
            </g>

            <!-- Sprocket front-right -->
            <circle class="sprocket sprocket-r" cx="445" cy="512" r="14" stroke-width="1"/>
            <circle cx="445" cy="512" r="6" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="0.5"/>
            <g class="sprocket-teeth" transform="translate(445 512)">
              <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-360 0 0" dur="12s" repeatCount="indefinite" additive="sum"/>
              <rect x="-1.2" y="-15" width="2.4" height="2.4" fill="currentColor"/>
              <rect x="-1.2" y="-15" width="2.4" height="2.4" fill="currentColor" transform="rotate(45)"/>
              <rect x="-1.2" y="-15" width="2.4" height="2.4" fill="currentColor" transform="rotate(90)"/>
              <rect x="-1.2" y="-15" width="2.4" height="2.4" fill="currentColor" transform="rotate(135)"/>
              <rect x="-1.2" y="-15" width="2.4" height="2.4" fill="currentColor" transform="rotate(180)"/>
              <rect x="-1.2" y="-15" width="2.4" height="2.4" fill="currentColor" transform="rotate(225)"/>
              <rect x="-1.2" y="-15" width="2.4" height="2.4" fill="currentColor" transform="rotate(270)"/>
              <rect x="-1.2" y="-15" width="2.4" height="2.4" fill="currentColor" transform="rotate(315)"/>
            </g>

            <!-- Road wheels -->
            <circle cx="135" cy="528" r="8" stroke-width="0.8"/>
            <circle cx="180" cy="528" r="8" stroke-width="0.8"/>
            <circle cx="225" cy="528" r="8" stroke-width="0.8"/>
            <circle cx="270" cy="528" r="8" stroke-width="0.8"/>
            <circle cx="315" cy="528" r="8" stroke-width="0.8"/>
            <circle cx="360" cy="528" r="8" stroke-width="0.8"/>
            <circle cx="395" cy="528" r="8" stroke-width="0.8"/>
            <!-- Return rollers (top) -->
            <circle cx="180" cy="496" r="4" stroke-width="0.6"/>
            <circle cx="290" cy="496" r="4" stroke-width="0.6"/>
            <circle cx="395" cy="496" r="4" stroke-width="0.6"/>

            <!-- Track plates (hatched bottom) -->
            <g class="track-plates" stroke-width="0.6" opacity="0.7">
              <line x1="75" y1="544" x2="75" y2="554"/>
              <line x1="90" y1="544" x2="90" y2="554"/>
              <line x1="105" y1="544" x2="105" y2="554"/>
              <line x1="120" y1="544" x2="120" y2="554"/>
              <line x1="135" y1="544" x2="135" y2="554"/>
              <line x1="150" y1="544" x2="150" y2="554"/>
              <line x1="165" y1="544" x2="165" y2="554"/>
              <line x1="180" y1="544" x2="180" y2="554"/>
              <line x1="195" y1="544" x2="195" y2="554"/>
              <line x1="210" y1="544" x2="210" y2="554"/>
              <line x1="225" y1="544" x2="225" y2="554"/>
              <line x1="240" y1="544" x2="240" y2="554"/>
              <line x1="255" y1="544" x2="255" y2="554"/>
              <line x1="270" y1="544" x2="270" y2="554"/>
              <line x1="285" y1="544" x2="285" y2="554"/>
              <line x1="300" y1="544" x2="300" y2="554"/>
              <line x1="315" y1="544" x2="315" y2="554"/>
              <line x1="330" y1="544" x2="330" y2="554"/>
              <line x1="345" y1="544" x2="345" y2="554"/>
              <line x1="360" y1="544" x2="360" y2="554"/>
              <line x1="375" y1="544" x2="375" y2="554"/>
              <line x1="390" y1="544" x2="390" y2="554"/>
              <line x1="405" y1="544" x2="405" y2="554"/>
              <line x1="420" y1="544" x2="420" y2="554"/>
              <line x1="435" y1="544" x2="435" y2="554"/>
              <line x1="450" y1="544" x2="450" y2="554"/>
            </g>
            <line x1="70" y1="554" x2="455" y2="554" stroke-width="0.6"/>
          </g>

          <!-- ============ GROUND LINE ============ -->
          <line x1="0" y1="554" x2="540" y2="554" stroke="currentColor" stroke-width="1.4" opacity="0.6"/>
          <text x="14" y="550" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.5">±0.000</text>

          <!-- ============ SOIL LAYERS ============ -->
          <rect x="0" y="554" width="540" height="50" fill="url(#hero-soil)"/>
          <line x1="0" y1="604" x2="540" y2="604" stroke="currentColor" stroke-width="0.4" opacity="0.35" stroke-dasharray="3 3"/>
          <text x="14" y="584" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.45">Грунт</text>
          <text x="525" y="601" text-anchor="end" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.5">-2.5 м</text>

          <rect x="0" y="604" width="540" height="60" fill="currentColor" opacity="0.04"/>
          <g stroke="currentColor" stroke-width="0.4" opacity="0.35">
            <line x1="30" y1="622" x2="55" y2="624"/>
            <line x1="110" y1="624" x2="140" y2="622"/>
            <line x1="200" y1="626" x2="230" y2="624"/>
            <line x1="320" y1="622" x2="350" y2="625"/>
            <line x1="420" y1="624" x2="450" y2="622"/>
            <line x1="60" y1="644" x2="90" y2="646"/>
            <line x1="170" y1="646" x2="200" y2="644"/>
            <line x1="290" y1="644" x2="320" y2="647"/>
            <line x1="400" y1="646" x2="430" y2="644"/>
          </g>
          <line x1="0" y1="664" x2="540" y2="664" stroke="currentColor" stroke-width="0.4" opacity="0.35" stroke-dasharray="3 3"/>
          <text x="14" y="632" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.45">Глина</text>
          <text x="525" y="661" text-anchor="end" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.5">-7.0 м</text>

          <rect x="0" y="664" width="540" height="56" fill="url(#hero-rock)"/>
          <text x="14" y="688" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.5">Скальное основание</text>

          <!-- ============ DRILL STRING below ground (animated) ============ -->
          <line class="drill-rod" x1="282" y1="554" x2="282" y2="672" stroke="currentColor" stroke-width="2.4"/>

          <!-- Auger flutes around drill rod (animated rotation) -->
          <g class="drill-auger" stroke="currentColor" stroke-width="0.9" fill="none">
            <ellipse cx="282" cy="572" rx="14" ry="3.5"/>
            <ellipse cx="282" cy="588" rx="14" ry="3.5"/>
            <ellipse cx="282" cy="604" rx="14" ry="3.5"/>
            <ellipse cx="282" cy="620" rx="14" ry="3.5"/>
            <ellipse cx="282" cy="636" rx="14" ry="3.5"/>
            <ellipse cx="282" cy="652" rx="14" ry="3.5"/>
          </g>

          <!-- Drill bit / coronka (gold) -->
          <g class="drill-bit-gold">
            <polygon points="270,668 294,668 282,696" fill="var(--gold)" stroke="var(--gold-deep)" stroke-width="0.8"/>
            <line x1="276" y1="672" x2="282" y2="688" stroke="var(--gold-deep)" stroke-width="0.6" opacity="0.7"/>
            <line x1="288" y1="672" x2="282" y2="688" stroke="var(--gold-deep)" stroke-width="0.6" opacity="0.7"/>
          </g>

          <!-- Gold cuttings rising up the auger -->
          <circle class="cutting cutting-1" cx="278" cy="652" r="1.4"/>
          <circle class="cutting cutting-2" cx="286" cy="652" r="1.4"/>
          <circle class="cutting cutting-3" cx="282" cy="652" r="1.4"/>

          <!-- Annotation: DRILL TOOL -->
          <g class="hs-annot" stroke="currentColor" stroke-width="0.5" opacity="0.55" font-family="SF Mono, monospace" font-size="9">
            <line class="hs-ln" x1="296" y1="608" x2="378" y2="608"/>
            <circle cx="296" cy="608" r="1.5" fill="var(--gold)"/>
            <text x="382" y="604" fill="currentColor">03 · Шнековый бур</text>
            <text x="382" y="614" fill="var(--gold-deep)" opacity="0.95">ø 200 мм · L до 24 м</text>
          </g>

          <!-- Right vertical dimension: total mast height -->
          <g stroke="currentColor" stroke-width="0.4" opacity="0.4">
            <line x1="500" y1="80" x2="500" y2="430" stroke-dasharray="2 3"/>
            <line x1="496" y1="80" x2="504" y2="80"/>
            <line x1="496" y1="430" x2="504" y2="430"/>
          </g>
          <text font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.55"
                transform="rotate(-90 512 255)" x="512" y="255" text-anchor="middle">H = 14 м · OAH</text>

          <!-- Right vertical dimension: depth -->
          <g stroke="currentColor" stroke-width="0.4" opacity="0.4">
            <line x1="500" y1="554" x2="500" y2="696" stroke-dasharray="2 3"/>
            <line x1="496" y1="554" x2="504" y2="554"/>
            <line x1="496" y1="696" x2="504" y2="696"/>
          </g>
          <text font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.55"
                transform="rotate(-90 512 625)" x="512" y="625" text-anchor="middle">d = 24 м</text>

          <!-- Horizontal width dimension at bottom -->
          <g stroke="currentColor" stroke-width="0.4" opacity="0.4">
            <line x1="60" y1="566" x2="470" y2="566" stroke-dasharray="2 3"/>
            <line x1="60" y1="562" x2="60" y2="570"/>
            <line x1="470" y1="562" x2="470" y2="570"/>
          </g>
          <text x="265" y="578" text-anchor="middle" font-family="SF Mono, monospace" font-size="9" fill="currentColor" opacity="0.55">L = 6,2 м · ШАССИ</text>

          <!-- Bottom corner stamp -->
          <g transform="translate(20 712)" font-family="SF Mono, monospace" font-size="8" letter-spacing="0.6" fill="currentColor" opacity="0.45">
            <text>ПМЗ / МБГУ-200 / R03 / ШНЕК CFA / DRAFT</text>
          </g>
        </svg>`;
