"use client";

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; 
import { Button } from "@/components/ui/button";
import { deleteProduct } from "@/app/products/products.api";
import { useRouter } from "next/navigation";

// Componente ProductCard
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
      className="relative overflow-hidden hover:shadow-2xl
       shadow-md transition-shadow duration-300 rounded-lg mt-10"
    >
      <CardContent className="p-4 bg-gray-50">
        {/* Precio del producto */}
        <p className="text-lg font-semibold">${product.price}</p>
      </CardContent>
      
      <div className="relative group">
        {/* Imagen ajustada con efecto hover */}
        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:translate-y-[-10px]"
          />
          {/* Nombre del producto sobre la imagen */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h3 className="text-white font-bold text-lg">{product.name}</h3>
          </div>
        </div>
      </div>

      {/* Descripción del producto */}
      <CardContent className="p-4 bg-gray-50">
        <p className="mt-2 text-gray-700 text-sm leading-relaxed font-semibold">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="flex justify-between items-center px-6 py-4 bg-gray-50">
        {/* Botón Editar */}
        <Button
          className="mt-2 bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg shadow-sm"
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/products/${product.id}/edit`);
          }}
        >
          Editar
        </Button>

        {/* Botón Eliminar */}
        <Button
          className="mt-2 bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-lg shadow-sm"
          onClick={(e) => {
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
