import React from "react";

function Desk() {
  return (
    <div>
      <section className="m-14">
        <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-8 md:space-y-0 px-4 md:px-0 m-2">
          {/* Gallery Item 1 */}
          <div className="flex flex-col w-full md:w-1/3 space-y-4 bg-opacity-50 border border-gray-300 p-4 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              PRESIDENT DESK
            </h3>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanqy3eLCXodYfDKQ1qpgsG8v_0x-xiBGgtA&s"
              className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
              alt="School 1"
            />
            <h6>Dr. A.P.J Abdul Kalam</h6>

            <p className="text-gray-600">
              "Learning gives creativity, creativity leads to thinking, thinking
              provides knowledge, and knowledge makes you great."
            </p>
          </div>

          {/* Gallery Item 2 */}
          <div className="flex flex-col w-full md:w-1/3 space-y-4 bg-opacity-50 border border-gray-300 p-4 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              SECRETARY DESK
            </h3>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanqy3eLCXodYfDKQ1qpgsG8v_0x-xiBGgtA&s"
              className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
              alt="School 2"
            />
            <h6>Dr. A.P.J Abdul Kalam</h6>
            <p className="text-gray-600">
              To have courage to think differently, courage to invent, to travel
              the unexplored path, courage to discover the impossible and to
              conquer the problems and succeed.
            </p>
          </div>

          {/* Gallery Item 3 */}
          <div className="flex flex-col w-full md:w-1/3 space-y-4 bg-opacity-50 border border-gray-300 p-4 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              PRINCIPAL DESK
            </h3>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanqy3eLCXodYfDKQ1qpgsG8v_0x-xiBGgtA&s"
              className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
              alt="School 3"
            />
            <h6>Dr. A.P.J Abdul Kalam</h6>
            <p className="text-gray-600">
              "If you fail, never give up because FAIL means "First Attempt In
              Learning". "Failure will never overtake me if my determination to
              succeed is strong enough." "All of us do not have equal talent.
              But , all of us have an equal opportunity to develop our talents."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Desk;
