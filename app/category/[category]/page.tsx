

import Link from "next/link";
import { simplifiedProduct } from "../../interface";
import { client } from "../../lib/sanity";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductsList from "@/app/components/ProductsList";

async function getData(cateogry: string) {
  const query = `*[_type == "product" && category->name == "${cateogry}"] {
        _id,
          "imageUrl": images[0].asset->url,
          price,
          name,
          "slug": slug.current,
          "categoryName": category->name,
          "subcategoryName": subcategory->name,
          description,
          price_id
      }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {


  const data: simplifiedProduct[] = await getData(params.category);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Products for {params.category}
          </h2>
        </div>

        <ProductsList params={data} />
      </div>
    </div>
  );
}
