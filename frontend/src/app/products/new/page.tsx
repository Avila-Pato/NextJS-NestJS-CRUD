import * as React from "react";
// import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,

 
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductForm }  from "./product-form";
import { getProduct } from "../products.api";


interface Props {
  params: {
    id: string;
  };
}

async function ProductNewPage({ params }: Props) {
    const product = await getProduct(params.id);
      console.log(product);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>
            {params.id ? "Edit Product" : "Create Product"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ProductForm product ={product} />
        </CardContent>
        
        
      </Card>
    </div>
  );
}


export default ProductNewPage;