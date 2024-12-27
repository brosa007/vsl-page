interface VideoSectionProps {
  video: string;
  title: string;
  description: string;
}

export default function VideoSection({
  video,
  title,
  description,
}: VideoSectionProps) {
  return (
    <div className="flex items-center flex-col gap-10">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {title}
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-white mt-2">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-center w-[80%]">
        <iframe
          src={video}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        ></iframe>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
}
