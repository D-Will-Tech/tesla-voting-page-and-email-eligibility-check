import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white px-6 md:px-40 py-8"> 
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16">
             {/* left side */}

             <div className="max-w-md">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Questions?</h1>
                <p className="text-white-500 leading-relaxed">
                   If you need help voting your shares or have any questions, 
                   please contact our proxy solicitor,
                    Innisfree M&A Incorporated.
                </p>
             </div>

                {/* right side */}
                <div className="flex flex-col md:flex-row gap-8 mt-6  whitespace-nowrap">
                    {/* shareholders? */}

                     <div className="bg-black rounded-md  p-6 w-full">
                        <h3 className="text-xl font-semibold mb-2">Shareholders</h3>
                        <p className="text-gray-300 text-[10px] ">
                          <span className="font-semibold  text-white whitespace-nowrap">+1 (877) 717–3936</span>{" "}
                          <span className="text-gray-400 ">(U.S and Canada)</span> OR
                        </p>

                        <p className="text-gray-300 mt-1 text-[10px]">
                            <span className="font-semibold text-white">+1 (412) 232–3651</span>{" "}
                            <span className="text-gray-400">(all other countries)</span>
                        </p>

                     </div>

                     {/* Banks and Brokers */}

                     <div className="bg-black rounded-md p-6 w-full">
                        <h3 className="text-xl font-semibold mb-2">Banks and Brokers</h3>
                        <p className="text-gray-300 text-[10px] ">
                            <span className="font-semibold text-white"> +1 (212) 750–5833</span>{" "}
                            <span className="text-gray-400">(Collect)</span>
                        </p>

                     </div>

                </div>
        </div>

        {/* bottom  footer Text */} 

        <div className="border-t border-gray-800 mt-12 pt-0 text-gray-400 text-sm flex flex-col md:flex-row justify-center items-center md:items-center gap-2">
           <p className="mt-6">Tesla © 2025</p>
           <a href="" className='hover:text-gray-400 mt-6'> 
                Privacy and Legal
           </a>
        </div>

    </footer>
  )
}

export default Footer