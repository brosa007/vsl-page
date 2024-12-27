import VideoSection from "@/app/_components/video-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <VideoSection
        video="https://www.youtube.com/embed/miqbNFmbN2Q?start=2301"
        title="Grupo Six"
        description="Suplementos Naturais"
      />
    </div>
  );
}
