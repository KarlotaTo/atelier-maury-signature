import { useState } from "react";

type MapPlace = {
  name: string;
  x: number;
  y: number;
  preferred: boolean;
  base?: boolean;
  labelX: number;
  labelY: number;
  anchor: "start" | "end";
};

const places: readonly MapPlace[] = [
  { name: "Fronton", x: 382, y: 82, preferred: true, labelX: 405, labelY: 72, anchor: "start" },
  { name: "Bouloc", x: 428, y: 226, preferred: true, base: true, labelX: 456, labelY: 218, anchor: "start" },
  { name: "Grenade", x: 174, y: 246, preferred: true, labelX: 148, labelY: 235, anchor: "end" },
  { name: "Castelginest", x: 506, y: 436, preferred: true, labelX: 534, labelY: 430, anchor: "start" },
  { name: "Aucamville", x: 496, y: 498, preferred: true, labelX: 474, labelY: 532, anchor: "end" },
  { name: "L'Union", x: 634, y: 518, preferred: true, labelX: 660, labelY: 510, anchor: "start" },
  { name: "Blagnac", x: 376, y: 566, preferred: true, labelX: 350, labelY: 558, anchor: "end" },
  { name: "Toulouse", x: 532, y: 634, preferred: false, labelX: 558, labelY: 646, anchor: "start" },
  { name: "Fenouillet", x: 388, y: 460, preferred: false, labelX: 360, labelY: 452, anchor: "end" },
  { name: "Bruguières", x: 446, y: 370, preferred: false, labelX: 472, labelY: 363, anchor: "start" },
  { name: "Saint-Jory", x: 336, y: 326, preferred: false, labelX: 310, labelY: 318, anchor: "end" },
  { name: "Castelnau-d'Estrétefonds", x: 302, y: 216, preferred: false, labelX: 278, labelY: 205, anchor: "end" },
  { name: "Villeneuve-lès-Bouloc", x: 482, y: 270, preferred: false, labelX: 510, labelY: 283, anchor: "start" },
  { name: "Gratentour", x: 504, y: 376, preferred: false, labelX: 530, labelY: 391, anchor: "start" },
] as const;

const mobilePlaces: readonly MapPlace[] = [
  { name: "Fronton", x: 200, y: 48, preferred: true, labelX: 216, labelY: 43, anchor: "start" },
  { name: "Bouloc", x: 216, y: 142, preferred: true, base: true, labelX: 234, labelY: 137, anchor: "start" },
  { name: "Grenade", x: 68, y: 164, preferred: true, labelX: 82, labelY: 158, anchor: "start" },
  { name: "Castelginest", x: 268, y: 294, preferred: true, labelX: 286, labelY: 287, anchor: "start" },
  { name: "Aucamville", x: 244, y: 348, preferred: true, labelX: 226, labelY: 374, anchor: "end" },
  { name: "L'Union", x: 334, y: 366, preferred: true, labelX: 374, labelY: 359, anchor: "end" },
  { name: "Blagnac", x: 164, y: 412, preferred: true, labelX: 146, labelY: 405, anchor: "end" },
  { name: "Toulouse", x: 244, y: 500, preferred: false, labelX: 262, labelY: 512, anchor: "start" },
] as const;

type PlaceName = string;

export function InterventionMap() {
  const [activePlace, setActivePlace] = useState<PlaceName | null>(null);

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

      <div className="relative mx-auto w-full max-w-5xl p-2 sm:p-6 lg:p-8">
        <svg
          viewBox="0 0 400 540"
          role="img"
          aria-labelledby="intervention-map-mobile-title intervention-map-mobile-description"
          className="block h-auto w-full sm:hidden"
        >
          <title id="intervention-map-mobile-title">Carte des principales zones d'intervention autour de Bouloc</title>
          <desc id="intervention-map-mobile-description">
            Bouloc, siège de l'entreprise, et les sept communes de prédilection au nord de Toulouse.
          </desc>

          <path
            d="M34 439 C27 341 57 219 118 121 C171 35 253 20 326 84 C384 135 386 251 357 346 C326 448 267 518 183 522 C112 525 60 494 34 439Z"
            className="fill-background stroke-line"
            strokeWidth="2"
          />
          <path
            d="M62 401 C76 307 121 206 183 139 C226 93 293 96 330 153 C366 209 351 300 316 365 C279 434 217 465 151 449 C104 438 75 420 62 401Z"
            className="fill-accent/5 stroke-accent/35"
            strokeWidth="2"
            strokeDasharray="6 7"
          />
          <g className="fill-none stroke-line" strokeWidth="1.5" strokeLinecap="round">
            <path d="M35 478 C102 426 156 352 190 276 C216 218 222 134 200 48" />
            <path d="M42 185 C143 214 245 278 374 383" />
            <path d="M45 485 C156 428 255 402 368 344" />
          </g>
          <g className="fill-none stroke-primary/10" strokeWidth="9" strokeLinecap="round">
            <path d="M244 500 C228 429 219 300 216 142 C214 98 207 70 200 48" />
            <path d="M244 500 C196 427 127 301 68 164" />
          </g>

          {mobilePlaces.map((place) => {
            const active = activePlace === place.name;
            const labelWidth = Math.max(62, place.name.length * 6.8 + 18);
            const labelX = place.anchor === "end" ? place.labelX - labelWidth : place.labelX;
            const labelY = place.labelY - 17;

            return (
              <g
                key={place.name}
                role="button"
                tabIndex={0}
                aria-label={`${place.name}${place.base ? ", siège de l'entreprise" : place.preferred ? ", zone de prédilection" : ", repère géographique"}`}
                className="cursor-pointer outline-none"
                onFocus={() => setActivePlace(place.name)}
                onBlur={() => setActivePlace(null)}
                onClick={() => setActivePlace((current) => current === place.name ? null : place.name)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActivePlace((current) => current === place.name ? null : place.name);
                  }
                }}
              >
                {place.base && <circle cx={place.x} cy={place.y} r="16" className="fill-accent/10 stroke-accent/30" strokeWidth="2" />}
                <circle
                  cx={place.x}
                  cy={place.y}
                  r={active ? 8 : place.base ? 7 : place.preferred ? 5 : 4}
                  className={place.preferred ? "fill-accent stroke-background" : "fill-background stroke-primary"}
                  strokeWidth={place.preferred ? 3 : 2}
                />
                <line
                  x1={place.x + (place.anchor === "end" ? -7 : 7)}
                  y1={place.y}
                  x2={place.anchor === "end" ? place.labelX + 4 : place.labelX - 4}
                  y2={place.labelY - 5}
                  className={active ? "stroke-accent" : "stroke-line"}
                />
                <rect
                  x={labelX}
                  y={labelY}
                  width={labelWidth}
                  height="27"
                  rx="2"
                  className={active ? "fill-primary stroke-primary" : place.preferred ? "fill-background stroke-accent/35" : "fill-sand stroke-line"}
                />
                <text
                  x={place.anchor === "end" ? place.labelX - 9 : place.labelX + 9}
                  y={place.labelY}
                  textAnchor={place.anchor}
                  dominantBaseline="middle"
                  className={active ? "fill-primary-foreground text-[13px] font-medium" : place.preferred ? "fill-foreground text-[13px] font-medium" : "fill-muted-foreground text-[12px]"}
                >
                  {place.name}
                </text>
              </g>
            );
          })}

          <g transform="translate(234 151)" aria-hidden="true">
            <rect width="106" height="22" rx="2" className="fill-primary" />
            <text x="53" y="11" textAnchor="middle" dominantBaseline="middle" className="fill-primary-foreground text-[9px] uppercase tracking-[0.1em]">
              Siège de l'entreprise
            </text>
          </g>
        </svg>

        <svg
          viewBox="0 0 800 700"
          role="img"
          aria-labelledby="intervention-map-title intervention-map-description"
          className="hidden h-auto w-full sm:block"
        >
          <title id="intervention-map-title">Carte des zones d'intervention autour de Bouloc</title>
          <desc id="intervention-map-description">
            Bouloc, siège de l'entreprise, et les principales communes desservies au nord de Toulouse.
          </desc>

          <path
            d="M102 555 C95 438 134 298 247 179 C336 87 448 45 566 102 C683 159 733 288 708 414 C684 540 602 645 477 672 C340 701 189 658 102 555Z"
            className="fill-background stroke-line"
            strokeWidth="2"
          />
          <path
            d="M161 520 C185 415 240 303 335 216 C411 147 514 126 594 183 C669 237 682 344 646 438 C602 550 491 612 376 607 C280 603 205 574 161 520Z"
            className="fill-accent/5 stroke-accent/35"
            strokeWidth="2"
            strokeDasharray="7 8"
          />

          <g className="fill-none stroke-line" strokeWidth="2" strokeLinecap="round">
            <path d="M89 631 C197 576 284 501 350 414 C407 338 446 239 470 73" />
            <path d="M121 283 C264 314 408 364 726 557" />
            <path d="M166 654 C329 583 471 549 710 490" />
            <path d="M260 97 C302 238 350 386 532 634" />
          </g>
          <g className="fill-none stroke-primary/10" strokeWidth="12" strokeLinecap="round">
            <path d="M532 634 C483 555 446 464 428 226 C420 169 399 119 382 82" />
            <path d="M532 634 C452 578 315 491 174 246" />
          </g>

          <text x="674" y="665" textAnchor="end" className="fill-muted-foreground text-[13px] uppercase tracking-[0.18em]">
            Nord toulousain
          </text>

          {places.map((place) => {
            const active = activePlace === place.name;
            const labelWidth = Math.max(74, place.name.length * 7.4 + 22);
            const labelX = place.anchor === "end" ? place.labelX - labelWidth : place.labelX;
            const labelY = place.labelY - 19;

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
                onClick={() => setActivePlace((current) => current === place.name ? null : place.name)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActivePlace((current) => current === place.name ? null : place.name);
                  }
                }}
              >
                {place.base && (
                  <circle cx={place.x} cy={place.y} r="18" className="fill-accent/10 stroke-accent/30" strokeWidth="2" />
                )}
                <circle
                  cx={place.x}
                  cy={place.y}
                  r={active ? 9 : place.base ? 8 : place.preferred ? 6 : 4}
                  className={place.preferred ? "fill-accent stroke-background" : "fill-background stroke-primary"}
                  strokeWidth={place.preferred ? 3 : 2}
                />
                <line
                  x1={place.x + (place.anchor === "end" ? -8 : 8)}
                  y1={place.y}
                  x2={place.anchor === "end" ? place.labelX + 5 : place.labelX - 5}
                  y2={place.labelY - 6}
                  className={active ? "stroke-accent" : "stroke-line"}
                  strokeWidth={active ? 2 : 1}
                />
                <rect
                  x={labelX}
                  y={labelY}
                  width={labelWidth}
                  height="30"
                  rx="2"
                  className={active ? "fill-primary stroke-primary" : place.preferred ? "fill-background stroke-accent/35" : "fill-sand stroke-line"}
                />
                <text
                  x={place.anchor === "end" ? place.labelX - 11 : place.labelX + 11}
                  y={place.labelY + 1}
                  textAnchor={place.anchor}
                  dominantBaseline="middle"
                  className={active ? "fill-primary-foreground text-[15px] font-medium" : place.preferred ? "fill-foreground text-[15px] font-medium" : "fill-muted-foreground text-[13px]"}
                >
                  {place.name}
                </text>
              </g>
            );
          })}

          <g transform="translate(456 239)" aria-hidden="true">
            <rect width="128" height="25" rx="2" className="fill-primary" />
            <text x="64" y="13" textAnchor="middle" dominantBaseline="middle" className="fill-primary-foreground text-[11px] uppercase tracking-[0.12em]">
              Siège de l'entreprise
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
