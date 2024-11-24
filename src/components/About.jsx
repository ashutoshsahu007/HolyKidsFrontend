import React from "react";

function About() {
  return (
    <div>
      <section className="m-14">
        <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-8 md:space-y-0 px-4 md:px-0">
          <div className="flex flex-col w-full md:w-1/2 space-y-8 bg-opacity-50 border border-gray-300 p-4 rounded-lg text-2xl text-center">
            ABOUT US
            <img
              src="http://stjohnhighschoolngp.com/wp-content/uploads/2021/02/slider2.jpg"
              alt="#"
              className="w-100 h-96 ml-30"
            ></img>
            <p className="text-base text-left">
              'DAV Movement' started in 1886 under the aegis of the DAV College
              Trust & Management Society New Delhi is the largest non-government
              chain of Educational Institutions in India with more than 900
              Schools, Colleges and Universities under its banner. The DAV
              institutions have rendered its services not only in dispelling
              ignorance but also produced Nationalists,
            </p>
            <button>
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                READ MORE
              </button>
            </button>
          </div>

          <div className="flex flex-col w-full md:w-1/2 space-y-8 bg-opacity-50 border border-gray-300 p-4 rounded-lg text-2xl text-center">
            PRINCIPAL MESSAGE
            <img src="logo.jpg" alt="Logo" className=" h-96 w-96 ml-40" />
            <p className="text-base text-left">
              'DAV Movement' started in 1886 under the aegis of the DAV College
              Trust & Management Society New Delhi is the largest non-government
              chain of Educational Institutions in India with more than 900
              Schools, Colleges and Universities under its banner. The DAV
              institutions have rendered its services not only in dispelling
              ignorance but also produced Nationalists,
            </p>
            <button>
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                READ MORE
              </button>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
