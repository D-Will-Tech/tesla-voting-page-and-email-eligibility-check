import teslaimg from "../assets/images/tesla.png"

const TeslaVoteH = () => {
  return (
     <section className="relative  bg-[#2a2a2a] text-white flex justify-start items-center px-10 md:px-16 py-20">
      <div className="z-10 px-8 md:px-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 ">
          Your Vote is Important
        </h1>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-1/2 overflow-hidden">
        <img src={teslaimg} alt="tesla jpg" className=" object-cover h-full w-full object-right rounded-medium md:rounded-lg" />
      </div>

         <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a2a] via-[#2a2a2a]/60 to-transparent"></div>
     </section>
  )
}

export default TeslaVoteH