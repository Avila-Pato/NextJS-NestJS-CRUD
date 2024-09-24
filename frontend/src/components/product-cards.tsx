"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Asegúrate de que estos imports sean correctos
import { Button } from "@/components/ui/button";
import { deleteProduct } from "@/app/products/products.api";
import { useRouter } from "next/navigation";

// Componente ProductCard

// interface Props {
//   product: {
//       id: string;
//   };
// }
export function ProductCard({ product }: any) {
  const router = useRouter();

  async function handleRemoveProduct(id: string) {
    await deleteProduct(id);
    router.refresh();
  }

  return (
    <Card
      onClick={() => {
        router.push(`/products/${product.id}`);
      }}
    >
      <CardHeader>
        <CardTitle className="flex justify-between">
          {product.name}
          <span className="text-sm font-bold text-gray-500">
            ${product.price}
          </span>
        </CardTitle>
      </CardHeader>
      <img src={product.image} alt="" />
      <CardContent>
        <p>{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">


        {/* Editar Boton */}
        <Button
          className="mt-5"
          onClick={(e) => {
            // Evita que el evento de clic del Card se propague a los demas eventos
            e.stopPropagation();
            // de esta manera me lelva al edit card
            router.push(`/products/${product.id}/edit`);
          }}
        >
          Editar
        </Button>

        
        <Button
          className="mt-5"
          variant="destructive"
          onClick={(e) => {
// Evita que el evento de clic del Card se propague a los demas eventos
            e.stopPropagation();
            handleRemoveProduct(product.id);
          }}
        >
          Eliminar
        </Button>
      </CardFooter>
    </Card>
  );
}