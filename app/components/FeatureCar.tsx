import Link from "next/link"

function FeatureCar() {
  return (
    <div>
        {/* Feature Car Section */}
        <div className="mx-32 my-8 p-4">
            {/* Heading Line */}
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">Featured New Cars</h1>
                <p className="text-[#518ed3] hover:underline">View All New Cars</p>
            </div>
            {/* Category Line */}
            <div className="flex gap-x-12 text-xl my-6">
                <h4 className="font-bold border-blue-500 border-b-4 pb-1">Popular</h4>
                <h4 className="hover:font-bold hover:border-blue-500 hover:border-b-4 pb-1">Upcoming</h4>
                <h4 className="hover:font-bold hover:border-blue-500 hover:border-b-4 pb-1">Newly Launched</h4>
            </div>
            {/* Cars Section*/}
            <div className="flex gap-x-8">
                {/* 1st Car */}
                <div className="border border-gray-400 w-1/4 h-72 rounded-md overflow-hidden">
                    <Link href="/toyotacorolla"><img src="/assets/car1.jpg" alt="Toyota Corolla"/></Link>
                    <div className="p- flex flex-col items-center">
                        <Link href="/toyotacorolla"><h3 className="text-[#233d7b] font-bold hover:text-[#597dd1]">Toyota Corolla</h3></Link>
                        <p className="text-green-600">PKR 59.7 - 75.5 lacs</p>
                        <p className="my-3"><span className="text-orange-600">★★★☆☆</span> 621 Reviews</p>
                    </div>
                </div>
                {/* 2nd Car */}
                <div className="border border-gray-400 w-1/4 h-72 rounded-md overflow-hidden">
                    <Link href="/suzukialto"><img src="/assets/car2.png" alt="Suzuki Alto" /></Link>
                    <div className="p- flex flex-col items-center">
                        <Link href="/suzukialto"><h3 className="text-[#233d7b] font-bold  hover:text-[#597dd1]">Suzuki Alto</h3></Link>
                        <p className="text-green-600">PKR 23.3 - 30.5 lacs</p>
                        <p className="my-3"><span className="text-orange-600">★★★☆☆</span> 199 Reviews</p>
                    </div>
                </div>
                {/* 3rd Car */}
                <div className="border border-gray-400 w-1/4 h-72 rounded-md overflow-hidden">
                    <Link href="/hondacity"><img src="/assets/car3.jpg" alt="Honda City" /></Link>
                    <div className="p- flex flex-col items-center">
                        <Link href="/hondacity"><h3 className="text-[#233d7b] font-bold  hover:text-[#597dd1]">Honda City</h3></Link>
                        <p className="text-green-600">PKR 46.5 - 58.5 lacs</p>
                        <p className="my-3"><span className="text-orange-600">★★★☆☆</span> 456 Reviews</p>
                    </div>
                </div>
                {/* 4th Car */}
                <div className="border border-gray-400 w-1/4 h-72 rounded-md overflow-hidden">
                    <Link href="hondacivic"><img src="/assets/car4.jpg" alt="Honda Civic" /></Link>
                    <div className="p- flex flex-col items-center">
                        <Link href="/hondacivic"><h3 className="text-[#233d7b] font-bold  hover:text-[#597dd1]">Honda Civic</h3></Link>
                        <p className="text-green-600">PKR 86.6 - 99.0 lacs</p>
                        <p className="my-3"><span className="text-orange-600">★★★☆☆</span> 359 Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureCar