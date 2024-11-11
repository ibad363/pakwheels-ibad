import Link from "next/link"

function FeatureCar() {
  return (
    <div>
        {/* Feature Car Section */}
        <div className="mx-4 md:mx-8 lg:mx-32 my-8 p-4">
            {/* Heading Line */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-y-2">
                <h1 className="font-bold text-xl md:text-2xl">Featured New Cars</h1>
                <p className="text-[#518ed3] hover:underline text-sm md:text-base">View All New Cars</p>
            </div>
            
            {/* Category Line */}
            <div className="flex flex-wrap gap-x-4 md:gap-x-12 text-base md:text-xl my-6">
                <h4 className="font-bold border-blue-500 border-b-4 pb-1">Popular</h4>
                <h4 className="hover:font-bold hover:border-blue-500 hover:border-b-4 pb-1">Upcoming</h4>
                <h4 className="hover:font-bold hover:border-blue-500 hover:border-b-4 pb-1">Newly Launched</h4>
            </div>
            
            {/* Cars Section*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {/* 1st Car */}
                <div className="border border-gray-400 rounded-md overflow-hidden hover:shadow-lg transition-shadow">
                    <Link href="/toyotacorolla" className="block relative aspect-[4/3]">
                        <img 
                            src="/assets/car1.jpg" 
                            alt="Toyota Corolla" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </Link>
                    <div className="p-4 flex flex-col items-center">
                        <Link href="/toyotacorolla">
                            <h3 className="text-[#233d7b] font-bold hover:text-[#597dd1] text-center">Toyota Corolla</h3>
                        </Link>
                        <p className="text-green-600 text-sm md:text-base">PKR 59.7 - 75.5 lacs</p>
                        <p className="my-3 text-sm md:text-base"><span className="text-orange-600">★★★☆☆</span> 621 Reviews</p>
                    </div>
                </div>
                {/* 2nd Car */}
                <div className="border border-gray-400 rounded-md overflow-hidden hover:shadow-lg transition-shadow">
                    <Link href="/suzukialto" className="block relative aspect-[4/3]">
                        <img 
                            src="/assets/car2.png" 
                            alt="Suzuki Alto" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </Link>
                    <div className="p-4 flex flex-col items-center">
                        <Link href="/suzukialto">
                            <h3 className="text-[#233d7b] font-bold hover:text-[#597dd1] text-center">Suzuki Alto</h3>
                        </Link>
                        <p className="text-green-600 text-sm md:text-base">PKR 23.3 - 30.5 lacs</p>
                        <p className="my-3 text-sm md:text-base"><span className="text-orange-600">★★★☆☆</span> 199 Reviews</p>
                    </div>
                </div>
                {/* 3rd Car */}
                <div className="border border-gray-400 rounded-md overflow-hidden hover:shadow-lg transition-shadow">
                    <Link href="/hondacity" className="block relative aspect-[4/3]">
                        <img 
                            src="/assets/car3.jpg" 
                            alt="Honda City" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </Link>
                    <div className="p-4 flex flex-col items-center">
                        <Link href="/hondacity">
                            <h3 className="text-[#233d7b] font-bold hover:text-[#597dd1] text-center">Honda City</h3>
                        </Link>
                        <p className="text-green-600 text-sm md:text-base">PKR 46.5 - 58.5 lacs</p>
                        <p className="my-3 text-sm md:text-base"><span className="text-orange-600">★★★☆☆</span> 456 Reviews</p>
                    </div>
                </div>
                {/* 4th Car */}
                <div className="border border-gray-400 rounded-md overflow-hidden hover:shadow-lg transition-shadow">
                    <Link href="/hondacivic" className="block relative aspect-[4/3]">
                        <img 
                            src="/assets/car4.jpg" 
                            alt="Honda Civic" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </Link>
                    <div className="p-4 flex flex-col items-center">
                        <Link href="/hondacivic">
                            <h3 className="text-[#233d7b] font-bold hover:text-[#597dd1] text-center">Honda Civic</h3>
                        </Link>
                        <p className="text-green-600 text-sm md:text-base">PKR 86.6 - 99.0 lacs</p>
                        <p className="my-3 text-sm md:text-base"><span className="text-orange-600">★★★☆☆</span> 359 Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureCar