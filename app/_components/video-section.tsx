import { embedUrl } from "../_lib/embed-url";

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
  const newUrl = embedUrl(video);

  return (
    <div className="w-full bg-background text-foreground py-8 px-4">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 max-w-3xl mx-auto">
        {title}
      </h1>
      {description && (
        <p className="text-sm md:text-lg text-center mb-6 max-w-2xl mx-auto">
          {description}
        </p>
      )}
      {newUrl ? (
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={newUrl}
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
            title={title}
          ></iframe>
        </div>
      ) : (
        <div className="text-center text-destructive font-medium">
          Vídeo indisponível.
        </div>
      )}
    </div>
  );
}
