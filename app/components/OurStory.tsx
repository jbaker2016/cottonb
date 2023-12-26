import { Link } from "lucide-react";
import Image from "next/image";

export default function OurStory() {

    return(
        <div className="items-center justify-between mx-auto my-16 max-w-2xl px-6 lg:max-w-7xl my-8">
          
          
            
            <div className="mb-8 flex flex-wrap justify-between items-center">

                

                <div className="mb-4 px-8 flex w-full lg:w-1/3">
                    <img src="../cotton_b_2.png" alt="Logo" />
                </div>

                <div className="mb-4 flex-col w-full w-full lg:w-2/3">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 ">
                        Our Story
                    </h2>
                    <p className="mt-4 text-lg">
                    Hi, I&#8217;m Nidhi Suthar, co-founder of Cottons B. Born in India, I&#8217;ve called the US home for over a decade. Passionate about pure organic cotton, I started Cottons B with my husband to raise awareness. Did you know your clothes can harm your health? We introduce you to a brand that cares about how clothing makes you feel!  We&#8217;re on a mission to shift the fashion industry towards comfort and well-being. Each piece is carefully designed and custom-made for you. Join us in wearing clothes that feel good and do good!
                    </p>
                </div>



            </div>
        </div>


    )
}