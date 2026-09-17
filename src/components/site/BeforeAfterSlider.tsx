import { ArrowLeftRight } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeAlt?: string | undefined;
  afterAlt?: string | undefined;
  className?: string | undefined;
};

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Avant",
  afterLabel = "Après",
  beforeAlt,
  afterAlt,
  className,
}: BeforeAfterSliderProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setShowHint(false), 1300);
    return () => window.clearTimeout(timeout);
  }, []);

  const updatePosition = (clientX: number) => {
    const frame = frameRef.current;
    if (!frame) return;

    const rect = frame.getBoundingClientRect();
    if (rect.width === 0) return;

    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(clamp(next, 4, 96));
  };

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    setHasInteracted(true);
    setShowHint(false);
    updatePosition(event.clientX);
  };

  const moveDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(event.clientX);
  };

  const stopDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? 10 : 4;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setHasInteracted(true);
      setShowHint(false);
      setPosition((current) => clamp(current - step, 4, 96));
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setHasInteracted(true);
      setShowHint(false);
      setPosition((current) => clamp(current + step, 4, 96));
    }

    if (event.key === "Home") {
      event.preventDefault();
      setHasInteracted(true);
      setShowHint(false);
      setPosition(4);
    }

    if (event.key === "End") {
      event.preventDefault();
      setHasInteracted(true);
      setShowHint(false);
      setPosition(96);
    }
  };

  const shouldNudge = showHint && !hasInteracted;

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-md border border-line bg-background shadow-[0_24px_80px_-56px_var(--color-ink)]",
        className,
      )}
    >
      <div
        ref={frameRef}
        className="group relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none overflow-hidden bg-sand sm:aspect-[16/10] lg:aspect-[16/9]"
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
      >
        <img
          src={afterImage}
          alt={afterAlt ?? afterLabel}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          className="absolute inset-0 overflow-hidden will-change-[clip-path]"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={beforeAlt ?? beforeLabel}
            draggable={false}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute left-4 top-4 z-10 rounded-full border border-background/70 bg-background/85 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-ink shadow-sm backdrop-blur-sm sm:left-6 sm:top-6">
          {beforeLabel}
        </div>
        <div className="absolute right-4 top-4 z-10 rounded-full border border-background/70 bg-background/85 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-ink shadow-sm backdrop-blur-sm sm:right-6 sm:top-6">
          {afterLabel}
        </div>

        <div
          className="absolute inset-y-0 z-20 w-px bg-background shadow-[0_0_18px_var(--color-ink)]"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        />

        <div
          className={cn(
            "absolute top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 outline-none",
            shouldNudge && "before-after-handle-nudge",
          )}
          style={{ left: `${position}%` }}
          role="slider"
          aria-label="Comparaison avant après"
          aria-valuemin={4}
          aria-valuemax={96}
          aria-valuenow={Math.round(position)}
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          <div className="grid size-16 place-items-center rounded-full border border-primary-foreground/75 bg-primary text-primary-foreground shadow-[0_18px_48px_-24px_var(--color-ink)] transition-transform duration-200 group-hover:scale-105 sm:size-[4.5rem]">
            <ArrowLeftRight className="size-6 sm:size-7" strokeWidth={1.35} aria-hidden="true" />
          </div>
        </div>
      </div>
    </figure>
  );
}
