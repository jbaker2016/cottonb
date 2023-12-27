import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
import ImageSlider from "./ImageSlider";

async function getData() {
  const query = "*[_type == 'heroImage']";

  const data = await client.fetch(query);

  return data;
}

export default async function Hero() {
  
  const data = await getData();


  return (
    <section className="mx-auto my-16 max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between">
        <div className="mb-8 flex w-full flex-col justify-center sm:mb-8 lg:mb-8 lg:w-1/3 lg:pb-0 lg:pt-0">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Fashion for all ocassions with comfort!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            We sell only the most exclusive and high quality cotton clothing products just for you.
          </p>

        <div className="flex h-12 w-64 mt-4 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/category/Men"
            className="flex w-1/2 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Men
          </Link>
          <Link
            href="/category/Women"
            className="flex w-1/2 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Women
          </Link>
        </div>

        </div>

        <div className="mb-4 px-8 flex w-full  md:mb-0 lg:w-2/3">
          
          <ImageSlider data={data} />
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

      </div>

    </section>
  );
}