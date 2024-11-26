import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import axios from "axios";
import bgWeb from "../assets/bgWebsite.jpg";

const Dashboard = () => {
  const [getMe, setGetMe] = useState();

  const getMes = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/getMe`);
      setGetMe(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMes();
  }, []);
  return (
    <>
      <Sidebar>
        <div className="w-full h-full font-bold bg-primary p-10">
          <div className="w-full h-64 mt-5 rounded-lg shadow-md border border-gray-300 bg-quaternary flex ">
            <div className="flex flex-col gap-4 w-[700px] text-black px-10  ">
              <h1 className={`text-2xl text-black font-extrabold mt-10 capitalize`}>
                Halo Selamat Datang <br />
                {getMe?.username.split("").map((char, index) => (
                  <span
                    key={index}
                    className="inline-block opacity-0"
                    style={{
                      animation: `fadeIn 0.5s forwards`,
                      animationDelay: `${index * 0.05}s`,
                      animationIterationCount: `infinite`,
                      animationDirection: `alternate`,
                      color: `#06b6d4`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </h1>

              <h1 className="text-base font-medium tracking-wide font-sans ">Kelas : {getMe?.kelas}</h1>
            </div>

            <img className="w-full rounded-r-lg object-cover" src={bgWeb} alt="asadsd" />
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default Dashboard;
