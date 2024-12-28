import { ApiData, ApiResponse } from "./types";

const API_URL =
  "https://api-candidate.ogruposix.com/checkout/95BD9233-8FDC-48AD-B4C5-E5BAF7578C15";
const USER_TOKEN = "2A50C22E-7954-4C73-9CF9-F6D298C047A7";

export async function fetchData(): Promise<ApiData | null> {
  try {
    const response = await fetch(API_URL, {
      headers: {
        "user-token": USER_TOKEN,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Erro ao buscar dados: ${response.statusText}`
      );
    }

    const jsonResponse: ApiResponse = await response.json();
    if (
      jsonResponse.object &&
      jsonResponse.object.length > 0
    ) {
      return jsonResponse.object[0];
    }

    throw new Error(
      "Objeto 'object' não encontrado ou está vazio."
    );
  } catch (error) {
    console.error("Erro ao consumir a API:", error);
    return null;
  }
}
export async function submitPurchase(
  product_id: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
) {
  try {
    const response = await fetch(
      `https://api-candidate.ogruposix.com/buy/${product_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Erro ao enviar os dados.");
    }

    alert("Compra realizada com sucesso!");
  } catch (error) {
    console.error("Erro na compra:", error);
    alert("Ocorreu um erro ao processar a compra.");
  }
}
