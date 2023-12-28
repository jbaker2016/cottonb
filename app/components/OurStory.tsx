import Link from "next/link";

export default function OurStory() {

    return(
        <div className="items-center justify-between mx-auto  max-w-2xl px-6 lg:max-w-7xl my-8">
            <div className="mb-8 flex flex-wrap justify-between items-center">
                <div className="mb-4 px-16 flex w-full lg:w-1/2">
                    <img src="../cotton_b_2.png" alt="Logo" />
                </div>

                <div className="mb-4 flex-col w-full w-full lg:w-1/2">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 ">
                        Our Story
                    </h2>
                    <p className="mt-4 text-xl">
                        Embark in a Sensational Jounrey of pure comfort with our BUTTERY soft cottons. <br/><br/>
                        The story of buttery soft cottons clothing made from premium quality on your skin which you want to hug immdiately cause your skin matters..
                    </p>

                    <div className="flex h-12 w-32 mt-4 divide-x overflow-hidden rounded-lg border">
                        <Link
                            href="/about-us"
                            className="flex w-full items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    )
}