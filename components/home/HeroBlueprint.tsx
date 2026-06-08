import { HERO_BLUEPRINT_SVG } from "./heroBlueprintSvg";

export function HeroBlueprint() {
  return (
    <div
      className="hero-blueprint-wrap"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: HERO_BLUEPRINT_SVG }}
    />
  );
}
