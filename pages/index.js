"use client";

import { StarIcon } from "@heroicons/react/24/solid";
import Layout from "../components/Layout";
import Image from "next/image";

import { useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const focusAreas = [
  {
    title: "CORPORATE, COMMERCIAL AND REGULATORY",
    description:
      "AALP offers a wide range of Corporate and Commercial law services, including due diligence and company secretarial services. We have undertaken corporate and commercial work for many of Nigeria’s companies. We have an impressive advisory portfolio traversing such diverse issues as corporate structure, corporate contracts, corporate governance, regulation of corporations, the organisation and mode of subscription of capital, transferability of shares, composition of the board and management, labour, compensation, staff welfare and pension issues, finance, parent companies’ influence on and control of subsidiaries. "
  },
  {
    title: "LITIGATION AND ARBITRATION",
    description:
      "AALP’s Dispute Resolution Practice is one of our most experienced, boasting an exceptional practice group of 4 dedicated lawyers. The department is headed by a Senior lawyer with nearly 15 years professional experience, and comprises other highly skilled practitioners who have very strong reputations in Nigeria’s litigation terrain and experience in both local and international arbitration."
  },
  {
    title: "FINANCE",
    description:
      "AALP is a recognized player in the banking and finance sector by providing legal services to meet the expanding and increasingly complex requirements of clients. AALP has provided legal advisory services on major transactions and projects in various sectors such as power, oil and gas, mining, telecommunication including the negotiation of local and international credit facilities, loan and security documentation, structured financing, and perfection of financing packages and security interest issues. This has provided us with a wealth of knowledge and experience in the issues that governments and private sector participants face."
  }
  // {
  //   title: "PROPERTY LAW",
  //   description:
  //     "AALP offers a wide range of property law services, including due diligence and company secretarial services. We have undertaken property law work for many of Nigeria’s companies. Our services include acquisition and disposal of real estate, leasing, land use and development, regulatory compliance, title investigations, and property financing."
  // },
  // {
  //   title: "Mortgage securities",
  //   description:
  //     "Title transfer and perfection of title deeds Registration of Debenture, mortgages, charges and releases General operation of the LUA as affecting risk assets."
  // }
];

const testimonials = [
  {
    quote:
      "AALP is “very meticulous in its handling of mandates; and the firm’s commercially savvy lawyers are particularly knowledgeable about the Nigerian market”."
  },
  {
    quote:
      "“At the top level of corporate and commercial practice in Nigeria”, AALP has “commercially sensitive lawyers who give appropriate and incisive legal advice”"
  },
  {
    quote:
      "AALP’s “experience (in Banking & Finance practice) and knowledge of the legal system are extensive” "
  },
  {
    quote: "AALP’s “team effort is excellent”. "
  },
  {
    quote:
      "“The team has deep knowledge of Nigerian law, and its legal drafting skills are world-class. The lawyers are very conscientious, thorough and experienced.” "
  },
  {
    quote:
      "AALP “is a consistent all-rounder for all types of M&A, project finance, banking and capital markets and is a fantastic firm,”  "
  },
  {
    quote: "AALP provides ‘excellent advice – timely, direct and to the point’ "
  },
  {
    quote: "“Excellent”, “credible” and “highly professional” team at AALP "
  },
  {
    quote:
      "“This full service firm is well known for its oil and gas financing work, though it excels in a wide variety of banking and finance matters.” "
  }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev = (prev - 1 + testimonials.length) % testimonials.length)
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // animate only once
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <Layout>
      <div className="font-sans text-gray-800">
        <main className="">
          {/* Hero Section */}
          <section className="relative h-screen w-full">
            <Image
              src="/buildings.png"
              alt="Honoredge Legal Practice Hero Image"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-garamond font-bold mb-6 leading-tight">
                Abayomi Arole Legal Practitioners
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Legal Strategy, Practical Solutions, Trusted Results
              </p>
              <a
                href="#contact"
                className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300"
              >
                Schedule a Consultation
              </a>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24 bg-gray-50 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex items-start">
                <Image
                  src="/logo.png"
                  alt="Honoredge Logo"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-garamond font-bold mb-4">
                  About Us
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Abayomi Arole Legal Practitioners, we deliver strategic and
                  practical legal services rooted in integrity and excellence.
                  Our team of seasoned attorneys collaborates closely with
                  clients across diverse industries to deliver results.
                </p>
              </div>
            </div>
          </section>

          {/* Practice Areas */}
          <section
            id="practice-areas"
            className="bg-gray-900 text-white py-24 px-6 md:px-20"
          >
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-garamond md:text-5xl font-bold mb-6">
                Our{" "}
                <span className="text-primary-200 italic">Areas of Focus</span>
              </h2>
              <p className="text-gray-400 text-lg mb-16">
                Expertise across key fields to meet your unique legal needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition duration-300 shadow-lg"
                  >
                    <h4 className="text-xl font-bold mb-4">{area.title}</h4>
                    <p className="text-gray-300">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-24 bg-primary-100 text-black px-6">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-garamond font-bold mb-12">
                Why Partner With Us?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/buildings.png"
                    alt="Dispute Resolution"
                    width={600}
                    height={256}
                    className="w-full h-[22rem] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm p-4">
                    <h3 className="text-2xl font-semibold font-garamond mb-4">
                      Our Mission
                    </h3>
                    <p className="text-sm text-gray-700 text-center mt-2">
                      To empower clients by providing top-tier legal services
                      that address challenges with confidence, insight, and
                      strategic clarity.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/tingey.png"
                    alt="Corporate & Commercial Law"
                    width={600}
                    height={256}
                    className="w-full h-[22rem] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm p-4">
                    <h3 className="text-2xl font-semibold font-garamond mb-4">
                      Our Values
                    </h3>
                    <p className="text-sm text-gray-700 text-center mt-2">
                      Guided by transparency, accountability, and a client-first
                      ethos, we are committed to securing the best outcomes for
                      those we serve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="bg-[#e7e3db] py-24 px-6 md:px-16 text-center">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-garamond md:text-5xl font-bold mb-6 text-gray-900">
                Client Testimonials
              </h2>
              <p className="text-lg text-gray-700 mb-16">
                Hear directly from those we've helped achieve success.
              </p>

              {/* Testimonials slider */}
              <div className="relative">
                {/* Testimonial Cards Container */}
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <div className="bg-white p-8 md:p-12 rounded-lg shadow-md mx-auto max-w-3xl">
                          <div className="text-5xl text-blue-950 mb-4">"</div>
                          <p className="text-black text-base md:text-lg leading-relaxed mb-8">
                            {testimonial.quote}
                          </p>

                          {/* Star Rating */}
                          <div className="flex items-center justify-center space-x-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                className="w-5 h-5 text-yellow-400 fill-yellow-400"
                              />
                            ))}
                          </div>

                          <hr className="border-t border-gray-300 my-6" />
                          {/* <p className="italic text-black font-medium">
                            - {testimonial.name}
                          </p> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6 text-black" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6 text-black" />
                </button>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section
            id="contact"
            className="bg-primary-200 text-white py-24 px-4 text-center"
          >
            <h2 className="text-4xl font-garamond font-bold mb-6">
              Let's Get Started
            </h2>
            <p className="mb-8 text-lg max-w-2xl mx-auto">
              Ready to take the next step? Contact us today to discuss how we
              can support your legal journey.
            </p>
            <a
              href="mailto:info@arolelegal.com"
              className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300"
            >
              Contact Us
            </a>
          </section>
        </main>
      </div>
    </Layout>
  );
}
