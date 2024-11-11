import Link from "next/link"

function Header() {
  return (
    <>
      <div className='flex flex-wrap bg-blue-900 bg-opacity-90 min-h-20 items-center justify-center gap-x-3 md:justify-around text-xl text-white'>
        <Link href="/"><img src="/assets/logo.png" alt="Logo" className="w-44 md:w-60" /></Link>
        <h3 className="hover:text-red-400 cursor-pointer">Used Cars</h3>
        <h3 className="hover:text-red-400 cursor-pointer">New Cars</h3>
        <h3 className="hover:text-red-400 cursor-pointer">Bikes</h3>
        <h3 className="hover:text-red-400 cursor-pointer">Auto Store</h3>
        <h3 className="hover:text-red-400 cursor-pointer">Videos</h3>
        <h3 className="hover:text-red-400 cursor-pointer">Forums</h3>
        <h3 className="hover:text-red-400 cursor-pointer">Blog</h3>
        <h3 className="hover:text-red-400 cursor-pointer">More</h3>
        <button className="bg-[#b73439] p-3 rounded-lg hover:bg-[#8a282b] w-full md:w-auto">Post an Ad</button>
      </div>
    </>
  )
}

export default Header