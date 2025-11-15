import  EmailCheck   from "../assets/images/contact-img.jpg"
import logo from "../assets/images/tsla-logo.png"
import {Mail,ChevronRight, X, Menu, Loader} from "lucide-react"
import { useState } from "react"


const TeslaVoteH = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [email, setEmail] = useState()
  const [showmessage, setShowMessage] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showError, setShowError] = useState(false)


  const isValidEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }


  const handleCheckEmail = () => {
   if (!email) {
    setShowError(true)
    setTimeout(() => setShowError(false), 3000)
   }

   if (!isValidEmail(email)) {
      setShowError(true)
      setTimeout(() => setShowError(false) , 3000)
      return
   }

   setShowError(false)
   setIsLoading(true)

   setTimeout(() => {
    setIsLoading(false)
    setShowMessage(true)

    setTimeout(() => {
      setShowMessage(false)
      setEmail("")

    },5000)
   },6000)

  
  }

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }



  return (
    <section className="w-full min-h-screen bg-white">
       <div className="relative h-[420px] bg-cover flex flex-col justify-between" 
       style={{backgroundImage: `url(${EmailCheck})`}}
       >

        <nav className="flex itmes-center justify-between px-4 py-2 md:px-20 text-white"> 
          <div className="flex items-center ">
             <img src={logo}  alt="tsla logo.png" className="w-10 object-contain " />
          </div>

          <ul className="hidden md:flex items-center text-white space-x-6 font-medium">
            <li>Master plan part IV</li>
            <li>Your Board</li>
            <li> Resources</li>
            <li>Third-Party commentary</li>
            <li>Contact</li>  
          </ul>

          <div className="flex items-center hidden md:flex space-x-6 ">
             <button className="text-md bg-black hover:bg-gray-700 transition text-white px-4 py-2 rounded-md font-medium">
               Explore Tesla
            </button>

            <button className=" text-md bg-blue-700 hover:bg-gray-800 transition text-white font-medium px-4 py-2 rounded-md">
              How To Vote
            </button>

          </div>

          <div className="lg:hidden md:flex flex-col justify-end">

            <button onClick={toggleDrawer}>
            {drawerOpen ? <X /> : <Menu/>}
            </button>

          </div>


          {drawerOpen && (
             <aside className="fixed right-0 top-0 h-full w-64 bg-white text-neutral-700 z-50 transform transition-transform duration-300 whitespace-nowrap">

              <div className=" p-4 bg-gray-200 flex  justify-end">
                <button onClick={toggleDrawer} aria-label="close menu" className="flex flex items-center justify-end rounded-md hover:bg-gray-700 text-black">
                  {drawerOpen ? <X /> : <Menu/>}
                </button>
              </div>
             
             <nav className="flex flex-col p-8 space-y-8 ">
              <ul className="space-y-6 font-bold text-sm">

                 <li className="hover:text-gray-700 cursor-pointer">Master plan part IV</li>
                 <li className="hover:text-gray-700 cursor-pointer">Your Board</li>
                 <li className="hover:text-gray-700 cursor-pointer">Resources</li>
                 <li className="hover:text-gray-700 cursor-pointer">Third-Party commentary</li>
                 <li className="hover:text-gray-700 cursor-pointer">Contact</li>  

              </ul>

               <div className=" mt-10 flex flex-col space-y-3">
               <button className="text-md bg-black hover:bg-gray-700 transition text-white px-4 py-2 rounded font-medium">
                 Explore Tesla
               </button>

              <button className=" text-md bg-blue-700 hover:bg-gray-800 transition text-white font-medium px-4 py-2 rounded">
                 How To Vote
              </button>

          </div>


             </nav>
           

             </aside>
          )}


         {/* herosection */}

        </nav>

          <div className="px-6 md:px-20 pb-40">
          <h3 className="text-white text-3xl md:text-4xl font-bold">
             Check your email for eligibility or verified status for voting
          </h3>

         </div>

       </div>

       

       <div className="mt-10 px-6 md:px-20 flex flex-col items-center ">
        <h2 className="text-neutral-700 font-bold md:text-4xl text-md ">Check  If You Are Eligible</h2>
        
      <div className="flex flex-col items-center mt-10 ">

        <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)}  className="border border-gray-700 px-8 py-4 text-neutral-800 outline-none transition focus:ring-2 focus:border-blue-500 " placeholder="Input Your Email "/>

        {showError && (
          <div className="mt-4 text-red-600  text-center text-sm md:text-base">
            <p className="font-semibold">Invalid Email</p>
            <p>Please enter a valid email address</p>
             
          </div>
        )}


        {isLoading && (
          <div className="mt-4 flex items-center justify-center">
            <Loader  className="animate-spin text-blue-500"/>

          </div>
        )}

        {showmessage && (
          <div className="mt-4 text-red-600 text-center text-smb md:text-base max-w-md">
             <p className="font-semibold">{email}</p>
             <p>your Email not verified by Tesla Company</p>
             <p>Please get a share on a broker and get verified</p>
          </div>
        )}

           <button onClick={handleCheckEmail}   className=" flex items-center justify-between bg-blue-500 hover:bg-gray-700 transition px-6 py-4 mt-10 text-lg font-medium rounded-lg ">
            <div className="flex items-center gap-3 ">
             <Mail size={24}/>
             <span>Check Your Email</span>
             <ChevronRight size={24}/>
            </div>

           </button>
      

      </div>


       </div>
    </section>
  )
}

export default TeslaVoteH