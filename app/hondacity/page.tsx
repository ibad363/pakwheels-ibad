import Link from "next/link"

function HondaCity() {
    return (
      <div className="my-8 mx-32 p-4 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-center font-bold text-3xl underline">Honda City 2024 Price in Pakistan, Images, Reviews & Specs</h1>
      {/* Image */}
      <div className="flex justify-center">
        <img src="/assets/car3.jpg" alt="Honda City"/>
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
      <p>The Honda City 2024 is a subcompact sedan that has been manufactured by the Japanese automobile manufacturer Honda since 1981. Initially, it was a 3-door hatchback/2-door convertible launched only in selected markets. The second-generation Honda City was launched in 1986, but the City nameplate was discontinued in 1994 and replaced by another model. The sixth generation City debuted in the international market in 2014 and was replaced by the next seventh generation last year, in 2020, but arrived in Pakistan in 2021.</p>
      <p>All five variants of the new Honda City come with the water-cooled, 4-stroke, SOHC i-VTEC, 16-valves, four-cylinder engine. The 1.2 LS variants have a 1199cc engine which generates a power of 88/6000 hp/rpm at a torque of 110/4800 Nm/rpm. On the other hand, the 1.5 CVT and 1.5 Aspire variants have a 1497cc engine which generates a power of 118/6600 hp/rpm at a max torque of 145/4600 Nm/rpm.</p>
      <div className="flex gap-x-6 gap-y-3 justify-center flex-wrap">
        <p><b>Body Type</b> Compact sedan</p>
        <p><b>Engine</b> 1199 to 1497 CC</p>
        <p><b>Torque</b> 110 - 145 Nm</p>
        <p><b>Fuel Tank Capacity</b> 40 L</p>
        <p><b>Suspension Type</b> Soft Suspension</p>
        <p><b>Mileage</b> 12 - 16 KM/L</p>
        <p><b>Transmission</b> Manual & Automatic</p>
        <p><b>Seating Capacity</b> 5 - Persons</p>
        <p><b>Top Speed</b> 180 KM/H</p>
      </div>
      </div>
      {/* Price */}
      <h1 className="text-xl text-[#3eb549]">PKR 46.5 - 58.5 lacs</h1>
      {/* Payment Button */}
      <Link href="/paymentform"><button className="border-[#0032fc] border text-[#0032fc] px-6 py-3 rounded-lg mt-6 hover:bg-[#0032fc] hover:text-white">Make Payment</button></Link>
    </div>
    )
  }
  
  export default HondaCity