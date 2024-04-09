import { Arrow, Chevron } from "@icons/.";
import { heroImage, testImage } from "@images/.";
import useEmblaCarousel from "embla-carousel-react";
import type { FC } from "react";

const projects = [
  {
    image: heroImage.src,
    title: "Primo Progetto",
    description: "Descrizione del primo progetto inesistente",
  },
  {
    image: testImage.src,
    title: "Secondo Progetto",
    description: "Descrizione del secondo progetto inesistente",
  },
  {
    image: heroImage.src,
    title: "Terzo Progetto",
    description: "Descrizione del Terzo progetto inesistente",
  },
];

const ProjectSlide: FC<{
  image: string;
  title: string;
  description: string;
}> = ({ image, title, description }) => {
  return (
    <div className="relative size-full min-w-0 shrink-0 grow-0 basis-full">
      <img
        className="absolute left-0 top-0 size-full object-cover"
        src={image}
        alt=""
      />
      <div
        className="absolute left-0 top-0 size-full"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 12%, rgba(0, 0, 0, 0) 100%)",
        }}
      />
      <div className="absolute left-0 top-0 z-10 flex size-full justify-between p-8 font-semibold">
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl lg:text-2xl">{title}</h2>
          <p className="text-sm lg:text-base">{description}</p>
        </div>
        <button className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white">
          <Arrow className="h-3 w-3.5 fill-black" />
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className="h-full overflow-hidden" ref={emblaRef}>
      <div className="flex h-full">
        {projects.map(({ image, title, description }, index) => (
          <ProjectSlide
            image={image}
            title={title}
            description={description}
            key={index}
          />
        ))}
      </div>
      <button
        className="absolute left-8 top-1/2 h-7 w-4 -translate-y-1/2"
        onClick={() => {
          emblaApi?.scrollPrev();
        }}
      >
        <Chevron className="fill-white" />
      </button>
      <button
        className="absolute right-8 top-1/2 h-7 w-4 -translate-y-1/2"
        onClick={() => {
          emblaApi?.scrollNext();
        }}
      >
        <Chevron className="rotate-180 fill-white" />
      </button>
    </div>
  );
};

export default Projects;
