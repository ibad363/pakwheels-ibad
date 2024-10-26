import Link from "next/link"

function ToyotaCorrola() {
  return (
    <>
        <div className="my-8 mx-32 p-4 flex flex-col items-center">
          {/* Heading */}
          <h1 className="text-center font-bold text-3xl underline">Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</h1>
          {/* Image */}
          <div className="flex justify-center">
            <img src="/assets/car1.jpg" alt="Toyota Corolla"/>
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
          <p>Toyota Corolla 2024 is a series of compact sedans produced by the Japanese manufacturer Toyota. With its comfort, sleek design, and good performance, it has gained a huge following around the world. Introduced in 1966, it has become one of the best-selling cars worldwide. The latest generation available in Pakistan is the 11th generation, with the 12th generation being introduced globally but not yet available in Pakistan.</p>
          <p>Toyota Corolla's key features include fuel efficiency, comfortable ride, and affordability. Its latest generation in Pakistan offers a variety of options, including the 1.6-liter Altis, the 1.8-liter Altis Grande, and the hybrid variant. The 1.6-liter Altis comes with a manual or CVT transmission, while the 1.8-liter Altis Grande comes with a CVT transmission. The hybrid variant offers a 1.8-liter engine with an electric motor, providing a combined output of 121 horsepower. Other notable features include a touchscreen infotainment system, keyless entry, push-button start, automatic climate control, and advanced safety features such as seven airbags, vehicle stability control, and hill-start assist.</p>
          <div className="flex gap-x-6 gap-y-3 justify-center flex-wrap">
            <p><b>No. of Doors</b> 4</p>
            <p><b>Engine</b> 1800 CC</p>
            <p><b>Condition</b> 8.5 / 10</p>
            <p><b>Driven</b> 9,500 KM</p>
            <p><b>Suspension Type</b> Soft Suspension</p>
            <p><b>Average</b> 13 KM per LTR</p>
            <p><b>Transmission</b> Automatic</p>
            <p><b>Fuel Type</b> High Octane</p>
          </div>
          </div>
          {/* Price */}
          <h1 className="text-xl text-[#3eb549]">PKR 59.7 - 75.5 lacs</h1>
          {/* Payment Button */}
          <Link href="/paymentform"><button className="border-[#0032fc] border text-[#0032fc] px-6 py-3 rounded-lg mt-6 hover:bg-[#0032fc] hover:text-white">Make Payment</button></Link>
        </div>
    </>
  )
}

export default ToyotaCorrola