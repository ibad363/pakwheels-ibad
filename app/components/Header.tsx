import Link from "next/link"

function Header() {
  return (
    <>
      <div className='flex bg-blue-900 bg-opacity-90 h-20 items-center gap-x-3 justify-around text-xl text-white'>
        <Link href="/"><img src="/assets/logo.png" alt="Logo" width={275} className="mr-4" /></Link>
        <h3 className="hover:text-red-400">Used Cars</h3>
        <h3 className="hover:text-red-400">New Cars</h3>
        <h3 className="hover:text-red-400">Bikes</h3>
        <h3 className="hover:text-red-400">Auto Store</h3>
        <h3 className="hover:text-red-400">Videos</h3>
        <h3 className="hover:text-red-400">Forums</h3>
        <h3 className="hover:text-red-400">Blog</h3>
        <h3 className="hover:text-red-400">More</h3>
        <button className="bg-[#b73439] p-3 rounded-lg hover:bg-[#8a282b]">Post an Ad</button>
      </div>
    </>
  )
}

export default Header