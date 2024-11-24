import React from "react";

function Gallery() {
  return (
    <div>
      <section className="mx-14">
        <h2 className="text-center text-3xl mt-4 font-bold mb-8">
          {" "}
          TAKE A LOOK AT OUR GALLERY
        </h2>

        <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-8 md:space-y-0 px-4 md:px-0">
          <div className="flex flex-col w-full md:w-1/3 space-y-8 bg-opacity-50 border border-gray-300 p-4 rounded-lg text-2xl">
            <img src="school.jpg" className="mt-8" alt="School 1" />
          </div>

          <div className="flex flex-col w-full md:w-1/3 space-y-8 bg-opacity-50 border border-gray-300 p-4 rounded-lg text-2xl">
            <img src="school.jpg" className="mt-8" alt="School 2" />
          </div>

          <div className="flex flex-col w-full md:w-1/3 space-y-8 bg-opacity-50 border border-gray-300 p-4 rounded-lg text-2xl">
            <img src="school.jpg" className="mt-8" alt="School 3" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
