import {ChevronRight, MousePointer, Phone, QrCode, Mail } from "lucide-react"
const ShareSection = () => {
  return (
    <section className="bg-transparent text-black px-6 py-16 md:px-8 md:ml-60 max-w-7xl">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Voting Your Share is Quick and Easy
      </h2>

      <p className="text-neutral-700 max-w-4xl mb-10">
        Don’t wait – we are asking shareholders to VOTE NOW in line with the
        Board’s recommendations on ALL proposals. Please vote “6FOR” Proposal
        One, the Election of Three Class III Directors, Proposal Three, the
        Amended & Restated 2019 Equity Incentive Plan and Proposal Four, the
        2025 CEO Performance Award.
      </p>
        
     <div className="flex flex-col md:flex-row gap-8"> 
               {/* left button section   */}
      <div className="flex flex-col gap-4 w-full md:w-1/4">
        <button className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 px-6 py-4 rounded-lg text-lg">
         <div className="flex items-center gap-3">
         <MousePointer size={20} className="text-gray-600"/>
          <span>Vote Online Now</span>
         </div>
         <ChevronRight size={20} />
        </button>
        <button className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 px-6 py-4 rounded-lg text-lg">
           <div className="flex items-center gap-3">
             <Phone size={20} className="text-gray-600"/>
              <span>Vote by Phone</span>
           </div>
            <ChevronRight size={20}/>
        </button>
        <button className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 px-6 py-4 rounded-lg text-lg">
           <div className="flex items-center gap-3">
              <Mail size={20} className="text-gray-600"/>
              <span>Vote by Mail</span>
           </div>
           <ChevronRight size={20}/> 

        </button>
        <button className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 px-6 py-4 rounded-lg text-lg">
         <div className="flex items-center gap-3">
            <QrCode size={20} className="text-gray-600"/>
            <span>Vote with Qrcode</span>
         </div>
         <ChevronRight />
        </button>

        
          <a href="/teslavote" className="m-auto bg-red-500 cursor-pointer items-center justify-center px-6 py-4 rounded-small text-white-500 text-white w-max">
            <span>Check Email Eligibility</span>
          </a>
        
        
       </div>

        


          {/* right video section   */}

         <div className="w-full md:w-1/2">
         <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
           <iframe className="w-full h-full"
            src="https://www.youtube.com/embed/6JwClvNwoYw?modestbranding=1&rel=0&showinfo=0&controls=1" 
            title="Learn How to vote"
            frameBorder="0"
            allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
         </div>
         </div>
      </div> 


    </section>
  )
}

export default ShareSection