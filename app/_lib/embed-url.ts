export function embedUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    const videoId = urlObj.pathname.split("/")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  } catch (error) {
    console.error(
      "Erro ao converter a URL do vídeo:",
      error
    );
    return "";
  }
}
