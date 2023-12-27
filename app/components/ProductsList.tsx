"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductsList({params}: any) {

    const subcategories: any = [];
    const [subcategory, setSubCategory] = useState('All');
    const [data, setData] = useState(params);

    for (let i = 0; i < params.length; i++) {
        if (!subcategories.includes(params[i].subcategoryName) && params[i].subcategoryName != null){
            subcategories.push(params[i].subcategoryName)
        }
    }

    subcategories.push('All')

    function selectSubCategory(subcategory: string){

        if (subcategory === 'All'){
            setData(params);
        }
        else{
            setSubCategory(subcategory);
            let data = params.filter((param: any) => param.subcategoryName === subcategory)
            setData(data);
        } 
    }

    return(
        <div>
            <div className="flex items-center justify-center my-10">
                <div className="flex h-10 divide-x overflow-hidden rounded-lg border">

                {subcategories.map((subcategory: any) => (

                <Button
                    key = {subcategory}
                    onClick={() => selectSubCategory(subcategory)}
                    className="flex items-center mb-0 justify-center text-gray-500 transition duration-100 bg-white hover:bg-gray-100 active:bg-gray-200">
                    {subcategory}
                </Button>

                ))}

                </div>
            </div>


            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((product: any) => (
                <div key={product._id} className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                    <Image
                    src={product.imageUrl}
                    alt="Product image"
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                    />
                </div>

                <div className="mt-4 flex justify-between">
                    <div>
                    <h3 className="text-sm text-gray-700">
                        <Link className="text-lg hover:underline" href={`/product/${product.slug}`}>
                        {product.name}
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                        {product.categoryName}
                    </p>
                    </div>
                    <p className="text-md pl-4 font-medium text-gray-900">
                    ${product.price?.toFixed(2)}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
    )
}