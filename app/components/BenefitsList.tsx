export default function BenefitsList() {

    return(
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                What science says about the benefits of cotton clothing
            </h2>

            <ul className=" leading-relaxed text-gray-500 xl:text-lg ml-4 mt-4">
                <li className="py-2"><span className="font-bold">Breathability</span>: Cotton allows for airflow and moisture transfer, reducing sweat buildup and discomfort. <br /><span className="italic">- Journal of Textile Science and Technology</span></li>
                <li className="py-2"><span className="font-bold">Comfort</span>: Cottons softness and natural drape provide ergonomic comfort, reducing physiological stress. <br /><span className="italic">- Journal of Applied Physiology</span></li>
                <li className="py-2"><span className="font-bold">Thermoregulation</span>: Cotton helps maintain a stable body temperature, ideal for hot and cold environments. <br /><span className="italic">- European Journal of Applied Physiology</span></li>
                <li className="py-2"><span className="font-bold">Absorbency</span>: Cotton can absorb up to 27 times its weight in water, making it ideal for sweat management. <br /><span className="italic">- American Journal of Agricultural and Biological Sciences</span></li>
                <li className="py-2"><span className="font-bold">Skin Health</span>: Cotton reduces skin irritation and inflammation due to its natural fibers and minimal chemical processing. <br /><span className="italic">- Journal of Investigative Dermatology</span></li>
                <li className="py-2"><span className="font-bold">Sustainability</span>: Cotton is biodegradable and can be grown using sustainable practices, reducing environmental impact. <br /><span className="italic">- Environmental Science and Technology</span></li>
            </ul>
        </div>
    )
}