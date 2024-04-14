import React from "react";
import Image from "next/image";
import LanguageTexts from './components/lenguageText'
import { useLanguage } from './components/lenguageSwitcher';



const Contact = () => {

  const { language } = useLanguage();
  const {title, span1, span2, span3} = LanguageTexts[language].contact;

  return (
    <>
      <div id="contact" className="w-full p-4 bg-gray-200 mt-24">

        <div className="flex flex-row justify-center">
          <h1 className="text-6xl text-red-700 font-semibold flex justify-center pt-2 w-full my-6 border-y-2 border-black md:text-7xl lg:text-9xl">
           {title}
          </h1>
        </div>

        <div className=" flex  justify-center flex-col md:flex-row ">
          
          <div className="md:w-2/3 md:mt-0 lg:w-3/5 xl:w-1/3">
            <div>

              <div className="flex flex-col pb-10 mb-2">
                <span className="mx-auto xl:text-xl font-medium">
                  {span1}
                </span>
              </div>
            </div>

            <div className="w-4/5 mx-auto px-10 pt-2 pb-10 mb-5 shadow-2xl border-2 border-black rounded-2xl">
              <div className="w-14 h-12 p-2 border-2  mx-auto my-5  bg-gray-200 relative ">
                <Image
                  src="/gmail_icon.png"
                  alt="Front end Icon"
                  layout="fill"
                  className="animate-pulse bg-transparent"
                />
              </div>

              <h2 className="flex justify-center text-xl font-medium text-red-700">
                {" "}
                {span2}
              </h2>

              <h1 className="flex justify-center font-bold text-l px-2">
                cordobabencontact@gmail.com{" "}
              </h1>
            </div>

            <div className="w-4/5 mx-auto px-10 pt-2 pb-10 mb-5 shadow-2xl border-2 border-black rounded-2xl">
              <div className="w-12 h-12 p-2 border-2  mx-auto my-5  bg-gray-200 relative ">
                <Image
                  src="/telefono_icon.png"
                  alt="Front end Icon"
                  layout="fill"
                  className="animate-pulse bg-transparent"
                />
              </div>

              <h2 className="flex justify-center text-xl font-medium text-red-700">
                {span3}
              </h2>

              <h1 className="flex justify-center font-bold text-l px-2">
                +54 11 3256-5554{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
