import React from "react";

function Footer() {
  return (
    <div>
      <section
        id="features"
        className="bg-gradient-to-r from-green-500 to-purple-600 py-10"
      >
        <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-8 md:space-y-0  md:px-0">
          <div className="text-left w-full md:w-96 text-white p-4">
            <i className="fas fa-phone text-5xl mb-4"></i>
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p>
              DAV PUBLIC SCHOOL
              <br /> Cantt. Road Khagaul, Patna - 801105
              <br /> Contact No.- 9798353206, 9525335579
              <br /> Email: davkhagaul@hotmail.com
            </p>
          </div>

          <div className="text-left w-full md:w-96 text-white p-4">
            <i className="fas fa-link text-5xl mb-4"></i>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col items-left space-y-2">
              <a
                href="https://davkhagaul.org/File/5647/Fee%20Structure%202022-2023.pdf"
                className="text-gray-200 hover:text-yellow-300 transition duration-300"
              >
                Fee Structure (Session 2022-2023)
              </a>
              <a
                href="https://davkhagaul.org/File/5647/Online%20Fee%20Payment%20Guidelines.jpg"
                className="text-gray-200 hover:text-yellow-300 transition duration-300"
              >
                Guidelines for Online Fee Payment
              </a>
              <a
                href="https://davkhagaul.org/File/5647/DAV%20PUBLIC%20SCHOOL%20dress%20code.pdf"
                className="text-gray-200 hover:text-yellow-300 transition duration-300"
              >
                DAV Public School Uniform Dress Code (Summer)
              </a>
              <a
                href="https://davkhagaul.org/File/5647/J73_Contact%20Us%20DAV%20PS%20Khagaul.jpg"
                className="text-gray-200 hover:text-yellow-300 transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="text-left w-full md:w-96 text-white p-4">
            <i className="fas fa-map-marker-alt text-5xl mb-4"></i>
            <h3 className="text-2xl font-semibold mb-4">Location Map</h3>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.041992015287!2d85.16946527397529!3d25.86809530420325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed47af6bcfad7d%3A0xec5e6ef421070fa2!2sHoly%20faith%20%26%20Holy%20kids%20school!5e0!3m2!1sen!2sin!4v1732463382169!5m2!1sen!2sin"
              width="300"
              height="200"
              allowfullscreen=""
              loading="lazy"
              title="Location Map"
              className="rounded-lg border-0 shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
