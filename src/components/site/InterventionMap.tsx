import { useState } from "react";

// Projection linéaire conforme (équirectangulaire corrigée à 43,7° N)
// 1° de longitude ≈ 80,4 km — 1° de latitude ≈ 111 km
const LON_0 = 1.24;
const LAT_0 = 43.88;
const SX = 1352; // px par degré de longitude
const SY = 1866; // px par degré de latitude (ratio 111/80,4)
const OX = 130;
const OY = 70;

const px = (lon: number) => OX + (lon - LON_0) * SX;
const py = (lat: number) => OY + (LAT_0 - lat) * SY;

type MapPlace = {
  name: string;
  lat: number;
  lon: number;
  preferred: boolean;
  base?: boolean;
  labelX: number;
  labelY: number;
  anchor: "start" | "end";
  onMobile?: boolean;
};

const places: readonly MapPlace[] = [
  { name: "Fronton", lat: 43.84, lon: 1.373, preferred: true, labelX: 340, labelY: 140, anchor: "start", onMobile: true },
  { name: "Bouloc", lat: 43.78, lon: 1.393, preferred: true, base: true, labelX: 372, labelY: 252, anchor: "start", onMobile: true },
  { name: "Grenade", lat: 43.773, lon: 1.294, preferred: true, labelX: 186, labelY: 272, anchor: "end", onMobile: true },
  { name: "Castelnau-d'Estrétefonds", lat: 43.77, lon: 1.348, preferred: false, labelX: 262, labelY: 228, anchor: "end" },
  { name: "Villeneuve-lès-Bouloc", lat: 43.755, lon: 1.383, preferred: false, labelX: 352, labelY: 312, anchor: "start" },
  { name: "Saint-Jory", lat: 43.743, lon: 1.363, preferred: false, labelX: 276, labelY: 336, anchor: "end" },
  { name: "Bruguières", lat: 43.72, lon: 1.398, preferred: false, labelX: 366, labelY: 366, anchor: "start" },
  { name: "Gratentour", lat: 43.715, lon: 1.415, preferred: false, labelX: 392, labelY: 400, anchor: "start" },
  { name: "Fenouillet", lat: 43.69, lon: 1.388, preferred: false, labelX: 308, labelY: 424, anchor: "end" },
  { name: "Castelginest", lat: 43.677, lon: 1.412, preferred: true, labelX: 390, labelY: 446, anchor: "start", onMobile: true },
  { name: "Aucamville", lat: 43.663, lon: 1.418, preferred: true, labelX: 348, labelY: 486, anchor: "end", onMobile: true },
  { name: "L'Union", lat: 43.652, lon: 1.49, preferred: true, labelX: 492, labelY: 492, anchor: "start", onMobile: true },
  { name: "Blagnac", lat: 43.635, lon: 1.394, preferred: true, labelX: 312, labelY: 532, anchor: "end", onMobile: true },
  { name: "Toulouse", lat: 43.604, lon: 1.444, preferred: false, labelX: 430, labelY: 594, anchor: "start", onMobile: true },
] as const;

// Cours réel de la Garonne (amont au nord-ouest vers Toulouse)
const garonne: ReadonlyArray<[number, number]> = [
  [43.895, 1.225],
  [43.86, 1.245],
  [43.82, 1.272],
  [43.785, 1.297],
  [43.755, 1.322],
  [43.73, 1.345],
  [43.70, 1.365],
  [43.665, 1.384],
  [43.635, 1.396],
  [43.61, 1.428],
  [43.585, 1.452],
];

const garonnePath = garonne
  .map(([lat, lon], i) => `${i === 0 ? "M" : "L"}${px(lon).toFixed(1)} ${py(lat).toFixed(1)}`)
  .join(" ");

// Axe RN20 / A62 (Toulouse – Bouloc – Fronton), tracé indicatif
const axis: ReadonlyArray<[number, number]> = [
  [43.604, 1.444],
  [43.663, 1.418],
  [43.72, 1.398],
  [43.755, 1.383],
  [43.78, 1.393],
  [43.84, 1.373],
];

const axisPath = axis
  .map(([lat, lon], i) => `${i === 0 ? "M" : "L"}${px(lon).toFixed(1)} ${py(lat).toFixed(1)}`)
  .join(" ");

const boulocX = px(1.393);
const boulocY = py(43.78);
const KM = SY / 111; // px par km

function MapCanvas({
  mobile,
  activePlace,
  setActivePlace,
}: {
  mobile: boolean;
  activePlace: string | null;
  setActivePlace: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const visible = mobile ? places.filter((p) => p.onMobile) : places;
  const idBase = mobile ? "intervention-map-mobile" : "intervention-map";
  const labelFont = mobile ? 20 : 15;
  const labelHeight = mobile ? 38 : 30;
  const charWidth = mobile ? 10 : 7.4;

  return (
    <svg
      viewBox="0 0 620 700"
      role="img"
      aria-labelledby={`${idBase}-title ${idBase}-description`}
      className={mobile ? "block h-auto w-full sm:hidden" : "hidden h-auto w-full sm:block"}
    >
      <title id={`${idBase}-title`}>Carte des zones d'intervention autour de Bouloc</title>
      <desc id={`${idBase}-description`}>
        Bouloc, siège de l'entreprise, et les principales communes desservies au nord de Toulouse, positionnées selon
        leurs coordonnées réelles.
      </desc>

      <rect x="8" y="8" width="604" height="684" rx="3" className="fill-background stroke-line" strokeWidth="2" />

      <circle
        cx={boulocX}
        cy={boulocY}
        r={15 * KM}
        className="fill-accent/5 stroke-accent/35"
        strokeWidth="2"
        strokeDasharray="7 8"
      />

      <path d={axisPath} className="fill-none stroke-primary/12" strokeWidth={mobile ? 14 : 11} strokeLinecap="round" strokeLinejoin="round" />
      <path d={garonnePath} className="fill-none stroke-blue-400/60" strokeWidth={mobile ? 9 : 7} strokeLinecap="round" strokeLinejoin="round" />

      {!mobile && (
        <text x="596" y="672" textAnchor="end" className="fill-muted-foreground text-[13px] uppercase tracking-[0.18em]">
          Nord toulousain
        </text>
      )}

      {visible.map((place) => {
        const active = activePlace === place.name;
        const cx = px(place.lon);
        const cy = py(place.lat);
        const labelWidth = Math.max(mobile ? 96 : 74, place.name.length * charWidth + 22);
        const labelX = place.anchor === "end" ? place.labelX - labelWidth : place.labelX;
        const labelY = place.labelY - labelHeight / 2;

        return (
          <g
            key={place.name}
            role="button"
            tabIndex={0}
            aria-label={`${place.name}${place.base ? ", siège de l'entreprise" : place.preferred ? ", zone de prédilection" : ", repère géographique"}`}
            className="cursor-pointer outline-none"
            onMouseEnter={() => setActivePlace(place.name)}
            onMouseLeave={() => setActivePlace(null)}
            onFocus={() => setActivePlace(place.name)}
            onBlur={() => setActivePlace(null)}
            onClick={() => setActivePlace((current) => (current === place.name ? null : place.name))}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setActivePlace((current) => (current === place.name ? null : place.name));
              }
            }}
          >
            {place.base && <circle cx={cx} cy={cy} r="18" className="fill-accent/10 stroke-accent/30" strokeWidth="2" />}
            <circle
              cx={cx}
              cy={cy}
              r={active ? 9 : place.base ? 8 : place.preferred ? 6 : 4}
              className={place.preferred ? "fill-accent stroke-background" : "fill-background stroke-primary"}
              strokeWidth={place.preferred ? 3 : 2}
            />
            <line
              x1={cx + (place.anchor === "end" ? -8 : 8)}
              y1={cy}
              x2={place.anchor === "end" ? place.labelX + 5 : place.labelX - 5}
              y2={place.labelY}
              className={active ? "stroke-accent" : "stroke-line"}
              strokeWidth={active ? 2 : 1}
            />
            <rect
              x={labelX}
              y={labelY}
              width={labelWidth}
              height={labelHeight}
              rx="2"
              className={active ? "fill-primary stroke-primary" : place.preferred ? "fill-background stroke-accent/35" : "fill-sand stroke-line"}
            />
            <text
              x={place.anchor === "end" ? place.labelX - 11 : place.labelX + 11}
              y={place.labelY + 1}
              textAnchor={place.anchor}
              dominantBaseline="middle"
              style={{ fontSize: `${labelFont}px` }}
              className={active ? "fill-primary-foreground font-medium" : place.preferred ? "fill-foreground font-medium" : "fill-muted-foreground"}
            >
              {place.name}
            </text>
          </g>
        );
      })}

      <foreignObject
        x={boulocX - 80}
        y={boulocY - (mobile ? 74 : 62)}
        width="160"
        height={mobile ? 34 : 30}
        aria-hidden="true"
      >
        <div className="flex h-full items-center justify-center rounded-sm bg-primary px-3 text-center text-[10px] font-medium uppercase tracking-[0.04em] text-primary-foreground">
          Siège de l'entreprise
        </div>
      </foreignObject>
    </svg>
  );
}

export function InterventionMap() {
  const [activePlace, setActivePlace] = useState<string | null>(null);

  return (
    <div className="mt-10 overflow-hidden border border-line bg-sand sm:mt-12">
      <div className="grid border-b border-line bg-background sm:grid-cols-2">
        <div className="flex items-center gap-3 px-5 py-4 sm:px-7">
          <span className="size-3 rounded-full bg-accent ring-4 ring-accent/15" aria-hidden="true" />
          <span className="text-xs uppercase tracking-[0.16em] text-foreground">Zone de prédilection</span>
        </div>
        <div className="flex items-center gap-3 border-t border-line px-5 py-4 sm:border-l sm:border-t-0 sm:px-7">
          <span className="size-2.5 rounded-full border border-primary bg-background" aria-hidden="true" />
          <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Zone d'intervention</span>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-4xl p-2 sm:p-6 lg:p-8">
        <MapCanvas mobile activePlace={activePlace} setActivePlace={setActivePlace} />
        <MapCanvas mobile={false} activePlace={activePlace} setActivePlace={setActivePlace} />
      </div>
    </div>
  );
}
