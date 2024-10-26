import Link from "next/link"

function HondaCivic() {
    return (
      <div className="my-8 mx-32 p-4 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-center font-bold text-3xl underline">Honda Civic 2024 Price in Pakistan, Images, Reviews & Specs</h1>
      {/* Image */}
      <div className="flex justify-center">
        <img src="/assets/car4.jpg" alt="Honda Civic"/>
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
      <p>The Honda Civic 2024 is a popular car model in Pakistan, manufactured by the local automobile manufacturer and Honda subsidiary Atlas Honda. The car has gone through several generations since its global launch in 1972, with each iteration featuring various upgrades and improvements.</p>
      <p>The Honda Civic 2024 is available in two different variants: Standard/Oriel and RS. The Standard/Oriel variant is equipped with a 1498cc DOHC dual VTC engine, delivering a maximum output of 95 kW at 5500-6000 rpm and a maximum torque of 180 Nm at 1700-4500 rpm. It is paired with an M-CVT transmission, providing smooth and efficient gear shifts. On the other hand, the RS variant boasts a 1498cc DOHC dual VTEC engine, generating a higher maximum output of 131 kW at 6000 rpm and a maximum torque of 131 Nm at 6000 rpm. This variant is equipped with an LL-CVT transmission, ensuring a dynamic driving experience. Both variants offer impressive performance and a balance between power and fuel efficiency to suit different driving preferences.</p>
      <div className="flex gap-x-6 gap-y-3 justify-center flex-wrap">
        <p><b>Body Type</b> Sedan</p>
        <p><b>Engine</b> 1498 CC</p>
        <p><b>Torque</b> 180 - 220 Nm</p>
        <p><b>Fuel Tank Capacity</b> 47 L</p>
        <p><b>Suspension Type</b> Soft Suspension</p>
        <p><b>Mileage</b> 11 - 14 KM/L</p>
        <p><b>Transmission</b> Automatic</p>
        <p><b>Seating Capacity</b> 5 - Persons</p>
        <p><b>Top Speed</b> 220 KM/H</p>
      </div>
      </div>
      {/* Price */}
      <h1 className="text-xl text-[#3eb549]">PKR 86.6 - 99.0 lacs</h1>
      {/* Payment Button */}
      <Link href="/paymentform"><button className="border-[#0032fc] border text-[#0032fc] px-6 py-3 rounded-lg mt-6 hover:bg-[#0032fc] hover:text-white">Make Payment</button></Link>
    </div>
    )
  }
  
  export default HondaCivic