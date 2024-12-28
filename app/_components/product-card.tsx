import { Product } from "@/app/_lib/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { submitPurchase } from "../_lib/api";
import FormDialog from "./form-dialog";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (data: any) => {
    try {
      console.log("Dados enviados:", data);
      await submitPurchase(product.product_id, data);
      alert("Compra realizada com sucesso!");
      router.push("/obrigado");
    } catch (error) {
      console.error("Erro ao processar a compra:", error);
      alert("Ocorreu um erro ao processar a compra.");
    }
  };

  return (
    <div className="relative p-4 bg-secondary rounded-lg shadow-md text-secondary-foreground hover:bg-secondary/80 transition gap-5 h-full flex flex-col justify-between">
      <div className="relative w-full h-40 mb-4">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <h2 className="text-lg font-bold mb-2">
          {product.name}
        </h2>
        <p className="text-md font-semibold mb-1">
          R$ {product.price.toFixed(2)}
        </p>
        {product.discount > 0 && (
          <p className="text-sm text-destructive mb-1">
            Desconto: R$ {product.discount.toFixed(2)}
          </p>
        )}
        {product.best_choice && (
          <span className="bg-green-500 absolute top-2 right-2 text-xs bg-success text-success-foreground py-1 px-2 rounded-full shadow-lg z-10">
            Melhor Escolha
          </span>
        )}
        <p className="text-sm">{product.freight}</p>
      </div>
      <FormDialog
        productId={product.product_id}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
