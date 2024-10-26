import Link from "next/link"

function SuzukiAlto() {
    return (
      <div className="my-8 mx-32 p-4 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-center font-bold text-3xl underline">Suzuki Alto 2024 Price in Pakistan, Images, Reviews & Specs</h1>
      {/* Image */}
      <div className="flex justify-center">
        <img src="/assets/car2.png" alt="Suzuki Alto"/>
      </div>
      {/* Buttons */}
      <div className="flex gap-x-5 justify-center">
        <button className="border-[#0032fc] border text-[#0032fc] px-5 py-3 rounded-lg hover:bg-[#0032fc] hover:text-white">Book a Test Drive</button>
        <button className="border-[#0032fc] border text-[#0032fc] px-5 py-3 rounded-lg hover:bg-[#0032fc] hover:text-white">Request Bank Finance</button>
        <button className="border-[#0032fc] border text-[#0032fc] px-5 py-3 rounded-lg hover:bg-[#0032fc] hover:text-white">Visit Place</button>
        <button className="border-[#0032fc] border text-[#0032fc] px-5 py-3 rounded-lg hover:bg-[#0032fc] hover:text-white">Car Inspection</button>
      </div>
      {/* Vehicle Description */}
      <div className="flex flex-col items-center py-8 px-16 gap-8">
      <h3 className="font-bold text-3xl ">Vehicle Description</h3>
      <p>Suzuki Alto 2024 has always enjoyed a healthy market share in developing countries, mainly due to its economic price and fuel economy. It was introduced in Pakistan in 1979 and instantly became popular. Initially known as Suzuki FX, it was the cheapest car in the market and came with three engine configurations: 539cc T5B, 543cc F5A, and 796cc F8B.</p>
      <p>The Alto 2024 comes with a new R06A engine which is more efficient and powerful. The new Alto has a 3-cylinder 660cc engine capable of producing up to 39 and 56 of torque. Moreover, Alto 2024 has a multipoint injection fuel distribution system. The engine is paired either a 5-speed manual transmission or AGS (Auto Gear Shift).</p>
      <div className="flex gap-x-6 gap-y-3 justify-center flex-wrap">
        <p><b>Body Type</b> Hatchback</p>
        <p><b>Engine</b> 658 CC</p>
        <p><b>Torque</b> 56 Nm</p>
        <p><b>Suspension Type</b> Soft Suspension</p>
        <p><b>Mileage</b> 18 - 22 KM/L</p>
        <p><b>Transmission</b> Manual & Automatic</p>
        <p><b>Seating Capacity</b> 4 - Persons</p>
        <p><b>Top Speed</b> 140 KM/H</p>
      </div>
      </div>
      {/* Price */}
      <h1 className="text-xl text-[#3eb549]">PKR 23.3 - 30.5 lacs</h1>
      {/* Payment Button */}
      <Link href="/paymentform"><button className="border-[#0032fc] border text-[#0032fc] px-6 py-3 rounded-lg mt-6 hover:bg-[#0032fc] hover:text-white">Make Payment</button></Link>
    </div>
    )
  }
  
  export default SuzukiAlto