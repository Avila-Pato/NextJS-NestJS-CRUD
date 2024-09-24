'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import React from 'react'
import { useForm } from "react-hook-form";
import { createProduct, updateProduct } from "../products.api";
import { useParams, useRouter } from "next/navigation";

export function ProductForm({product}: any) {
    const {register, handleSubmit } = useForm({
      defaultValues: {
        name: product?.name || '',
        description: product?.description || '',
        price: product?.price || '',
        image: product?.image || '',
      },
    });

    // con useRouter derireccionamos a neustra paina principal las peticiones
    const router = useRouter()
    // useParams 
    const params = useParams<{id: string}>()
    console.log(params)


    const onSubmit = handleSubmit (async (data) => {
        if(params?.id) {
            await updateProduct(params.id,{
              ...data,
                price: parseFloat(data.price)
            })
        } else {
          console.log(data)
          await createProduct({
              ...data,
              // convierte el string a numero dado que el back lo preconfiuro de esa manera
              price: parseFloat(data.price)
          })
        }
        router.push('/')
        router.refresh()
    })
  return (
    <form onSubmit={onSubmit}>
    <div className="grid w-full items-center gap-4">
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="product-name">Product Name</Label>
        <Input
        {...register('name')} 
        id="product-name" placeholder="Enter product name" />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="description">Description</Label>
        <Input
        {...register('description')}
        id="description" placeholder="Enter product description" />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="price">Price</Label>
        <Input 
        {...register('price')}
            id="price" placeholder="Enter product price"  />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label >Image</Label>
        <Input 
        {...register('image')}
         />
      </div>
      <div>
        <Button>
          {
           params.id ? 'Update Product' : 'Create Product'
          }
        </Button>
      </div>
    </div>
  </form>  )
}
export default ProductForm