import { Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export type ProjectGalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function ProjectGallery({ images }: { images: ProjectGalleryImage[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {images.map((image) => (
        <Dialog key={image.src}>
          <DialogTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              className="group relative h-auto w-full overflow-hidden rounded-none p-0 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
              aria-label={`Agrandir : ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <span className="absolute bottom-4 right-4 grid size-11 place-items-center bg-background/90 text-ink shadow-sm backdrop-blur-sm">
                <Maximize2 className="size-4" aria-hidden="true" />
              </span>
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[calc(100vw-2rem)] max-w-6xl rounded-none border-line bg-background p-3 sm:p-5">
            <DialogTitle className="sr-only">Photo du chantier agrandie</DialogTitle>
            <DialogDescription className="sr-only">{image.alt}</DialogDescription>
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="max-h-[82vh] w-full object-contain"
            />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}