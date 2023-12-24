"use client";

import Image from "next/image";
import { urlFor } from "../lib/sanity";
import 'react-slideshow-image/dist/styles.css'
import { Fade, Slide } from "react-slideshow-image";


//urlFor(data.data[1].image).url()

export default function ImageSlider( data: any) {

  //  console.log(data.data[0].image)

  return (
    <div className="h-full w-full object-cover object-center">

        <Slide>
            {data.data.map((datas: any, idx: number) => (
                <div key={idx} className="flex items-center justify-center">
                    <img src={urlFor(data.data[idx].image).url()} alt="" />
                </div>
            ))}
        </Slide>

    </div>
  );
}
