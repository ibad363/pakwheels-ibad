const HeroSection = () => {
  return (
    <div>
      {/*Hero Section */}
      <div className='my-4 md:my-10 mx-4 md:mx-8 lg:mx-32 p-4 md:p-10 border-2 border-gray-400'>
        {/* Main Heading */}
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-center'>
          Sell Your Car on PakWheels and Get the Best Price
        </h1>

        {/* Two Section */}
        <div className='flex flex-col md:flex-row mx-2 md:mx-6 justify-center mt-4 md:mt-8 pt-6 md:pt-10 border-gray-400 border-t-2 gap-8 md:gap-0'>
          {/* Left Section */}
          <div className='text-lg md:text-xl mx-auto flex flex-col gap-4 md:gap-5'>
            <h2 className='text-2xl md:text-3xl font-semibold text-[#233d7b]'>Post your Ad on PakWheels</h2>
            <p>✔️ Post your Ad for Free in 3 Easy Steps</p>
            <p>✔️ Get Genuine offers from Verified Buyers</p>
            <p>✔️ Sell your car Fast at the Best Price</p>
            <button className="bg-[#b73439] px-4 py-2 rounded-lg text-white w-full md:w-48 hover:bg-[#97292c]">
              Post your Ad
            </button>
          </div>

          {/* Divider - Hidden on mobile */}
          <div className="hidden md:block mx-auto border-gray-400 border-r-2"></div>

          {/* Right Section */}
          <div className='text-lg md:text-xl flex flex-col gap-4 md:gap-5 mt-8 md:mt-0 pt-8 md:pt-0 border-t-2 md:border-t-0 border-gray-400'>
            <h2 className='text-2xl md:text-3xl font-semibold text-[#233d7b]'>Try PakWheels Sell It For Me</h2>
            <p>✔️ Dedicated Sales Expert to Sell your Car</p>
            <p>✔️ We Bargain for you and share the Best Offer</p>
            <p>✔️ We ensure Safe & Secure Transaction</p>
            <button className="bg-[#518ecb] px-4 py-2 rounded-lg text-white w-full md:w-52 hover:bg-[#3d6fa2]">
              Register Your Car
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection