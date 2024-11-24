import React from "react";

function Details() {
  return (
    <div>
      <section className="m-14">
        <div className="flex flex-col md:flex-row justify-center my-4 md:space-x-8 space-y-8 md:space-y-0 px-4 md:px-0 m-4">
          <div className="flex flex-col w-full md:w-1/5 space-y-4 items-center pt-6 bg-red-500 rounded-3xl">
            <a
              href="/path-to-your-target-page-1"
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center bg-white rounded-full p-2 hover:bg-red-600 transition duration-300 cursor-pointer relative">
                <img
                  src="https://davkhagaul.org/Images/1.png"
                  className="w-8 h-8 md:w-10 md:h-10"
                  alt="School 1"
                />
              </div>
              <p className="text-center text-black font-bold mt-2 text-sm md:text-lg">
                Online Fee Payment
              </p>
            </a>
          </div>

          <div className="flex flex-col w-full md:w-1/5 space-y-4 items-center pt-6 bg-yellow-500 rounded-3xl">
            <a
              href="/path-to-your-target-page-2"
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center bg-white rounded-full p-2 hover:bg-red-600 transition duration-300 cursor-pointer relative">
                <img
                  src="https://davkhagaul.org/Images/2.png"
                  className="w-8 h-8 md:w-10 md:h-10"
                  alt="School 2"
                />
              </div>
              <p className="text-center text-black font-bold mt-2 text-sm md:text-lg">
                Staff Details
              </p>
            </a>
          </div>

          <div className="flex flex-col w-full md:w-1/5 space-y-4 items-center pt-6 bg-pink-500 rounded-3xl">
            <a
              href="/path-to-your-target-page-3"
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center bg-white rounded-full p-2 hover:bg-red-600 transition duration-300 cursor-pointer relative">
                <img
                  src="https://davkhagaul.org/Images/3.png"
                  className="w-8 h-8 md:w-10 md:h-10"
                  alt="School 3"
                />
              </div>
              <p className="text-center text-black font-bold mt-2 text-sm md:text-lg">
                Photo Gallery
              </p>
            </a>
          </div>

          <div className="flex flex-col w-full md:w-1/5 space-y-4 items-center pt-6 bg-fuchsia-500 rounded-3xl">
            <a
              href="/path-to-your-target-page-4"
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center bg-white rounded-full p-2 hover:bg-red-600 transition duration-300 cursor-pointer relative">
                <img
                  src="https://davkhagaul.org/Images/4.png"
                  className="w-8 h-8 md:w-10 md:h-10"
                  alt="School 4"
                />
              </div>
              <p className="text-center text-black font-bold mt-2 text-sm md:text-lg">
                Objective & Mission
              </p>
            </a>
          </div>

          <div className="flex flex-col w-full md:w-1/5 space-y-4 items-center pt-4 bg-rose-400 rounded-3xl">
            <a
              href="/path-to-your-target-page-5"
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center bg-white rounded-full p-2 hover:bg-red-600 transition duration-300 cursor-pointer relative">
                <img
                  src="https://davkhagaul.org/Images/5.png"
                  className="w-8 h-8 md:w-10 md:h-10"
                  alt="School 5"
                />
              </div>
              <p className="text-center text-black font-bold mt-2 text-sm md:text-lg">
                Contact US
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Details;
