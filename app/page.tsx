"use client";

import { ApiData } from "@/app/_lib/types";
import { useEffect, useState } from "react";
import ProductList from "./_components/product-list";
import VideoSection from "./_components/video-section";
import { fetchData } from "./_lib/api";

export default function Home() {
  const [data, setData] = useState<ApiData | null>(null);

  useEffect(() => {
    async function getData() {
      const apiData = await fetchData();
      console.log("Dados da API:", apiData);
      setData(apiData);
    }
    getData();
  }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-background text-foreground">
        Carregando os dados...
      </div>
    );
  }

  if (!data.products || data.products.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-background text-foreground">
        <div className="text-center bg-secondary text-secondary-foreground p-4 rounded-md shadow-md">
          Nenhum produto encontrado
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      <div className="py-8 px-4 md:py-12 md:px-6">
        <VideoSection
          video={data.video_url}
          title={data.video_headline}
          description={data.video_sub_headline || ""}
        />
      </div>
      <div className="container mx-auto py-8 px-4 md:py-12 md:px-6">
        <ProductList products={data.products} />
      </div>
    </div>
  );
}
