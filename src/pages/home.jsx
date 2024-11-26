import React from "react";
import Navbar from "../components/navbar";
import Marquee from "react-fast-marquee";
import Footer from "../components/footer";
import bgWeb from "../assets/bgWebsite.jpg";

const LandingPage = () => {
  const cards = [
    {
      id: 1,
      img: "./icons-1.png",
      size: "sm:w-32 w-20",
      title: "Expert Instructors",
      desc: " Learn from experienced instructors with real world knowledge.",
    },
    {
      id: 2,
      img: "./icons-2.png",
      size: "sm:w-24",
      title: "Web Development",
      desc: "Learn at your own pace and your own comfort",
    },
  ];
  return (
    <div className="font-montserrat max-h-max overflow-x-hidden">
      <Navbar />
      <div className="relative bg-tertiary">
        <img className="opacity-50" src={bgWeb} alt="" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center z-10 mb-52">
          <h1 className="text-white text-center xl:text-4xl text-base font-semibold tracking-wide mt-10 sm:mt-0">
            Temukan segala hal seru buat kehidupan SMA-mu di sini!
            <span className="bg-gradient-to-r  from-orange-500 via-yellow-500 to-lime-500 bg-clip-text text-transparent font-serif">Find your favorite activity!!</span>
          </h1>
          <p className="text-white text-center lg:text-2xl font-light tracking-wide max-w-5xl lg:mt-8 lg:mb-12 text-xs my-2 font-serif">Jelajahi dunia Ekskul dan temukan passion-mu!</p>

          <div className="text-lg flex items-center bg-transparent rounded-lg font-semibold lg:w-64 lg:h-14 p-2 border border-orange-500 hover:bg-gradient-to-r from-orange-500 via-yellow-500  mb-10 sm:mb-0">
            <span className="text-center bg-gradient-to-r  w-full from-orange-700 via-yellow-400 duration-400 bg-clip-text text-transparent hover:text-white text-sm lg:text-lg font-serif">Daftar Ekskul Favoritmu</span>
          </div>
        </div>
      </div>
      {/* section 2 ke bawah agar overlap vidionya */}
      <div className="absolute 2xl:top-[720px] z-20">
        {/* section ke 3*/}
        <div>
          {/* section animation */}
          <div className="bg-quaternary max-h-max pb-8">
            <h1 className="lg:text-4xl text-2xl font-semibold text-center text-black tracking-wide py-5 font-serif">Kemitraan Kami</h1>
            <Marquee>
              <div className="flex gap-14 items-center">
                <img className="w-60 " src="./sma1.png" alt="epic-games" />
                <img className="w-40 " src="./sma3.jpeg" alt="epic-games" />
                <img className="h-52" src="./smp30.png" alt="epic-games" />
                <img className="w-72 " src="./pemkot.png" alt="epic-games" />
                <img className="w-56 mr-11" src="./kamdek.png" alt="epic-games" />
                <img className="w-60 " src="./sma1.png" alt="epic-games" />
              </div>
            </Marquee>
          </div>
          <div className="flex flex-col max-h-max py-32 -mb-24 bg-gray-500 items-center justify-center ">
            <div className="-mt-24">
              <h1 className="lg:text-4xl text-2xl font-semibold text-center mb-8 text-white font-serif">Lihat Ekskul yang Bisa Kamu Ikuti ?</h1>
              <div className="grid lg:grid-cols-5 lg:gap-10 gap-5">
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto transition-transform duration-300 hover:translate-y-[-10px] hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-gray-200">
                  <img src="./gb1.jpg" alt="" className="transition-transform duration-300 hover:scale-105" />
                  <h1 className="text-xl font-medium text-center text-white transition-colors duration-300 hover:text-gray-200">Tinju</h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto transition-transform duration-300 hover:translate-y-[-10px] hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-gray-200">
                  <img src="./gb2.jpg" alt="" className="transition-transform duration-300 hover:scale-105" />
                  <h1 className="text-xl font-medium text-center text-white transition-colors duration-300 hover:text-gray-200">Tenis</h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto transition-transform duration-300 hover:translate-y-[-10px] hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-gray-200">
                  <img src="./gb3.jpg" alt="" className="transition-transform duration-300 hover:scale-105" />
                  <h1 className="text-xl font-medium text-center text-white transition-colors duration-300 hover:text-gray-200">Baseball</h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto transition-transform duration-300 hover:translate-y-[-10px] hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-gray-200">
                  <img src="./gb4.jpg" alt="" className="transition-transform duration-300 hover:scale-105" />
                  <h1 className="text-xl font-medium text-center text-white transition-colors duration-300 hover:text-gray-200">Bola Basket</h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto transition-transform duration-300 hover:translate-y-[-10px] hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-gray-200">
                  <img src="./gb5.jpg" alt="" className="transition-transform duration-300 hover:scale-105" />
                  <h1 className="text-xl font-medium text-center text-white transition-colors duration-300 hover:text-gray-200">Golf</h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto transition-transform duration-300 hover:translate-y-[-10px] hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-gray-200">
                  <img src="./gb1.jpg" alt="" className="transition-transform duration-300 hover:scale-105" />
                  <h1 className="text-xl font-medium text-center text-white transition-colors duration-300 hover:text-gray-200">Tinju</h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto transition-transform duration-300 hover:translate-y-[-10px] hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-gray-200">
                  <img src="./gb2.jpg" alt="" className="transition-transform duration-300 hover:scale-105" />
                  <h1 className="text-xl font-medium text-center text-white transition-colors duration-300 hover:text-gray-200">Tenis</h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto transition-transform duration-300 hover:translate-y-[-10px] hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-gray-200">
                  <img src="./gb3.jpg" alt="" className="transition-transform duration-300 hover:scale-105" />
                  <h1 className="text-xl font-medium text-center text-white transition-colors duration-300 hover:text-gray-200">Baseball</h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto transition-transform duration-300 hover:translate-y-[-10px] hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-gray-200">
                  <img src="./gb4.jpg" alt="" className="transition-transform duration-300 hover:scale-105" />
                  <h1 className="text-xl font-medium text-center text-white transition-colors duration-300 hover:text-gray-200">Bola Basket</h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto transition-transform duration-300 hover:translate-y-[-10px] hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-gray-200">
                  <img src="./gb5.jpg" alt="" className="transition-transform duration-300 hover:scale-105" />
                  <h1 className="text-xl font-medium text-center text-white transition-colors duration-300 hover:text-gray-200">Golf</h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto transition-transform duration-300 hover:translate-y-[-10px] hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-gray-200">
                  <img src="./gb1.jpg" alt="" className="transition-transform duration-300 hover:scale-105" />
                  <h1 className="text-xl font-medium text-center text-white transition-colors duration-300 hover:text-gray-200">Tinju</h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto transition-transform duration-300 hover:translate-y-[-10px] hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-gray-200">
                  <img src="./gb2.jpg" alt="" className="transition-transform duration-300 hover:scale-105" />
                  <h1 className="text-xl font-medium text-center text-white transition-colors duration-300 hover:text-gray-200">Tenis</h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto transition-transform duration-300 hover:translate-y-[-10px] hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-gray-200">
                  <img src="./gb3.jpg" alt="" className="transition-transform duration-300 hover:scale-105" />
                  <h1 className="text-xl font-medium text-center text-white transition-colors duration-300 hover:text-gray-200">Baseball</h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto transition-transform duration-300 hover:translate-y-[-10px] hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-gray-200">
                  <img src="./gb4.jpg" alt="" className="transition-transform duration-300 hover:scale-105" />
                  <h1 className="text-xl font-medium text-center text-white transition-colors duration-300 hover:text-gray-200">Bola Basket</h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto transition-transform duration-300 hover:translate-y-[-10px] hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-gray-200">
                  <img src="./gb5.jpg" alt="" className="transition-transform duration-300 hover:scale-105" />
                  <h1 className="text-xl font-medium text-center text-white transition-colors duration-300 hover:text-gray-200">Golf</h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto transition-transform duration-300 hover:translate-y-[-10px] hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-gray-200">
                  <img src="./gb1.jpg" alt="" className="transition-transform duration-300 hover:scale-105" />
                  <h1 className="text-xl font-medium text-center text-white transition-colors duration-300 hover:text-gray-200">Tinju</h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto transition-transform duration-300 hover:translate-y-[-10px] hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-gray-200">
                  <img src="./gb2.jpg" alt="" className="transition-transform duration-300 hover:scale-105" />
                  <h1 className="text-xl font-medium text-center text-white transition-colors duration-300 hover:text-gray-200">Tenis</h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto transition-transform duration-300 hover:translate-y-[-10px] hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-gray-200">
                  <img src="./gb3.jpg" alt="" className="transition-transform duration-300 hover:scale-105" />
                  <h1 className="text-xl font-medium text-center text-white transition-colors duration-300 hover:text-gray-200">Baseball</h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto transition-transform duration-300 hover:translate-y-[-10px] hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-gray-200">
                  <img src="./gb4.jpg" alt="" className="transition-transform duration-300 hover:scale-105" />
                  <h1 className="text-xl font-medium text-center text-white transition-colors duration-300 hover:text-gray-200">Bola Basket</h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto transition-transform duration-300 hover:translate-y-[-10px] hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-gray-200">
                  <img src="./gb5.jpg" alt="" className="transition-transform duration-300 hover:scale-105" />
                  <h1 className="text-xl font-medium text-center text-white transition-colors duration-300 hover:text-gray-200">Golf</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
