"use client";

import { StarIcon } from "@heroicons/react/24/solid";
import Layout from "../components/Layout";
import Image from "next/image";

import { useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { focusAreas } from "../src/data/focusAreas";
import { testimonials } from "../src/data/testimonial";

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
      <div className="font-ubuntu text-gray-800">
        <main className="">
          {/* Hero Section */}
          <section className="relative h-screen w-full">
            <Image
              src="/buildings.png"
              alt="Abayomi Arole Legal Practitioners Hero Image"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-ubuntu font-bold mb-6 leading-tight">
                Abayomi Arole Legal Practitioners
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Legal Strategy, Practical Solutions, Trusted Results
              </p>             
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24 bg-gray-50 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex items-start">
                <Image
                  src="/logo.png"
                  alt="Abayomi Arole Legal Practitioners Logo"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-ubuntu font-bold mb-4">
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
              <h2 className="text-4xl font-ubuntu md:text-5xl font-bold mb-6">
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
              <h2 className="text-4xl font-ubuntu font-bold mb-12">
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
                    <h3 className="text-2xl font-semibold font-ubuntu mb-4">
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
                    <h3 className="text-2xl font-semibold font-ubuntu mb-4">
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
              <h2 className="text-4xl font-ubuntu md:text-5xl font-bold mb-6 text-gray-900">
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
            <h2 className="text-4xl font-ubuntu font-bold mb-6">
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
