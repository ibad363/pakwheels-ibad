import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex justify-center items-center font-bold bg-[#b73439] h-14 text-white '>
        <h1>© PakWheels 2024 Made By <Link href="https://www.linkedin.com/in/ibad-ur-rehman-developer/" className='hover:underline'>@Ibad Ur Rehman</Link></h1>
    </div>
  )
}

export default Footer