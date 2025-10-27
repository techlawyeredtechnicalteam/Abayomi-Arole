import Image from "next/image";
import logo from "../public/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#230562] text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo and Firm Name */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src={logo}
            alt="Honoredge Legal Practice Logo"
            width={100}
            height={100}
            className="object-contain"
          />
          <h3 className="mt-4 text-2xl font-bold font-garamond tracking-wider leading-tight text-center md:text-left">
            Abayomi Arole Legal Practitioners
          </h3>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-2xl font-garamond mb-4">Contact Details Lagos</h4>
          <address className="not-italic text-lg">
            1ST FLOOR,
            <br />
            44 Oyedele Ogunniyi Street, Anthony Village Lagos
            <br />
            P. O. Box 52601, Ikoyi
            <br />
            Lagos, Nigeria.
          </address>
          <p className="mt-4 text-lg">
            Phone:{" "}
            <a href="tel:+2347010403414" className="hover:underline">
              +234 701 040 3414, +234 812 504 5670
            </a>
          </p>
          <p className="text-lg">
            Email:{" "}
            <a href="mailto:aroleabayomi@gmail.com" className="hover:underline">
              aroleabayomi@gmail.com
            </a>
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h4 className="text-2xl font-garamond mb-4">Contact Details Abuja</h4>
          <address className="not-italic text-lg">
            Suit D8, Victory Plaza
            <br />
            7 Onitsha Crescent Area11,
            <br />
            Garki
            <br />
            FCT Abuja, Nigeria
          </address>
          <p className="mt-4 text-lg">
            Phone:{" "}
            <a href="tel:+23481078825300" className="hover:underline">
              +234 810 788 25300
            </a>
          </p>
          <p className="text-lg">
            Email:{" "}
            <a href="mailto:legalbab01@gmail.com" className="hover:underline">
              legalbab01@gmail.com
            </a>
          </p>
        </div>

        {/* Office Hours */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-2xl font-garamond mb-4">Office Hours</h4>
          <div className="text-lg">
            <p>Monday to Friday: 9:00 AM – 6:00 PM</p>
            <p>Saturday: Closed</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Socials and Accessibility */}
      <div className="max-w-6xl mx-auto mt-12 border-t border-gray-500 pt-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Social Links */}
          <div>
            <h4 className="text-xl font-garamond mb-4 md:mb-2">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-6 text-2xl">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-gray-300 focus:text-gray-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-gray-300 focus:text-gray-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-300 focus:text-gray-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Accessibility Note */}
          <p className="mt-6 md:mt-0 text-xs text-gray-300 max-w-sm">
            We are an accessible workplace. Persons with disabilities are
            welcome to apply.
          </p>
        </div>
      </div>
    </footer>
  );
}
