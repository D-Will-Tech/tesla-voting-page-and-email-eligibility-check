import logo from "../assets/images/tsla-logo.png"
import { Menu, X } from "lucide-react"
import { useState } from "react"
const Navbar = () => {

  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }


  return (
    <nav className="flex justify-between items-center px-8 md:px-16 py-6 bg-[#2a2a2a] text-white">
       <div className="flex items-center space-x-2">
          <img src={logo} alt="tsla logo" className="w-10 object-contain" />
       </div>

        
        <ul  className="hidden md:flex space-x-8 text-sm font-medium">
        <li className="hover:text-gray-300 cursor-pointer">master plan part iv</li>
        <li className="hover:text-gray-300 cursor-pointer">compensation</li>
        <li className="hover:text-gray-300 cursor-pointer">Your board</li>
        <li className="hover:text-gray-300 cursor-pointer">Resources</li>
        <li className="hover:text-gray-300 cursor-pointer">Third-party commentary</li>
        <li className="hover:text-gray-300 cursor-pointer">FaQs</li>
        <li className="hover:text-gray-300 cursor-pointer">Contacts</li>
       </ul>
         
       

       <div className="flex items-center  hidden md:flex space-x-3">
          <button className="bg-black text-white px-4 py-2 rounded-6 text-sm hover:bg-gray-900">
           Explore Tesla
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-6 text-sm ">
            How to Vote
          </button>
       </div>

        <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleDrawer}>
                         {drawerOpen ? <X /> : <Menu />}
                    </button>
                    
        </div>

        {drawerOpen && (
          <aside className="fixed right-0 top-0 h-full w-64 bg-white text-neutral-700 z-50 transform transition-transform duration-300 whitespace-nowrap ease-out shadow-lg">
            <div className="p-4 bg-gray-200 flex justify-end"> 
              <button onClick={toggleDrawer} aria-label="close menu" className="p-2 rounded-md hover:bg-gray-700 flex items-center justify-start text-black ">
                <X size={25}/>
              </button>
            </div>

            <nav className="flex flex-col p-8 space-y-8 ">
              <ul className="space-y-6 text-sm font-semibold">
                <li className="hover:text-gray-300 cursor-pointer">master plan part iv</li>
                  <li className="hover:text-gray-300 cursor-pointer">compensation</li>
                  <li className="hover:text-gray-300 cursor-pointer">Your board</li>
                  <li className="hover:text-gray-300 cursor-pointer">Resources</li>
                  <li className="hover:text-gray-300 cursor-pointer">Third-party commentary</li>
                  <li className="hover:text-gray-300 cursor-pointer">FaQs</li>
                  <li className="hover:text-gray-300 cursor-pointer">Contacts</li>
              </ul>


              <div className="mt-6 flex flex-col space-y-3">
                  <button className="bg-black text-white px-4 py-2 rounded text-sm">Explore Tesla</button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">How to Vote</button>
                </div>

            </nav>

          </aside>
        )}
    </nav>
  )
}

export default Navbar