import Link from "next/link"

function PaymentForm() {
    return (
        <div className="py-10 m-10 ">
            <h1 className='text-5xl text-center mb-5 font-bold'>Enter your Details</h1>
            <form className='flex flex-col items-center gap-6'>
                <input className='border-2 border-slate-700 mt-3 p-2 w-80' type="text" placeholder='Enter Your Name' required/>
                <input className='border-2 border-slate-700 p-2 w-80' type="email" placeholder='Enter Your Email' required/>
                <input className='border-2 border-slate-700 p-2 w-80' type="number" placeholder='Your Card Number' required/>
                <input className='border-2 border-slate-700 p-2 w-80' type="text" placeholder='Your Address' required/>
                <button type="submit" className='border-blue-900 border text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-900 hover:text-white'><Link href="/paymentform/thanks">Place Order</Link></button>
            </form>
        </div>
    )
}

export default PaymentForm