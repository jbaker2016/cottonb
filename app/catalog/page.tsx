import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AddToCart from "../components/AddToCart";

async function getData() {
  const query = `*[_type == "product"] {
    _id,
      "imageUrl": images[0].asset->url,
      price,
      name,
      description,
      "slug": slug.current,
      "categoryName": category->name,
      "subcategoryName": subcategory->name,
      price_id
  }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export default async function CategoryPage() {
  
  const data: simplifiedProduct[] = await getData();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            All products
          </h2>
        </div>
        
        <div className="flex items-center justify-center my-10">
          <div className="flex h-10 divide-x overflow-hidden rounded-lg border">
            <Link
                className="flex items-center mb-0 px-4 justify-center text-gray-500 transition duration-100 bg-white hover:bg-gray-100 active:bg-gray-200"
                href="/category/Men">
                Men
            </Link>

            <Link
                className="flex items-center mb-0 px-4 justify-center text-gray-500 transition duration-100 bg-white hover:bg-gray-100 active:bg-gray-200"
                href="/category/Women">
                Women
            </Link>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
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
                <div className="flex flex-col text-right justify-between">
                        <p className="text-md pl-4 font-medium text-gray-900">
                        ${product.price?.toFixed(2)}
                        </p>

                        <AddToCart
                            currency="USD"
                            description={product.description}
                            image={product.imageUrl}
                            name={product.name}
                            price={product.price}
                            key={product._id}
                            price_id={product.price_id}
                        />
                    </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
