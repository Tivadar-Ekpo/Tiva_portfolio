import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Work = ({isDarkMode}) => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg ">My Portfolio</h4>
      <h2 className="text-center text-5xl">My Latest Work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>
      <div className="grid gridColumnAuto my-10 gap-5 dark:text-black">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square  bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group border-[0.5]"
          >
            {/* Image as the background */}
            <Image
              src= "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
              alt={project.title}
              fill
              className="object-cover" />

            <div
              className="bg-white w-10/12 p-2 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 flex items-center group-hover:-translate-y-3
            justify-between duration-500 "
            >
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] rounded-full py-3 px-10 mx-auto my-auto hover:bg-[#fcf4ff] duration-500 dark:text-white dark:border-white dark:hover:bg-[#2a004a]">
        show more
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="right arrow"
          className="w-4"
        />
      </a>
    </div>
  );
};

export default Work;
