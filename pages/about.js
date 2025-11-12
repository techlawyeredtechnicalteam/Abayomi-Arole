import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import { focusAreas } from "../src/data/focusAreas";

// Animations
const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  })
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  })
};

export default function AboutUs() {
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-32 px-6">
        <Head>
          <title>Abayomi Arole Legal Practitioner | About Us</title>
        </Head>

        <div className="max-w-7xl mx-auto space-y-24">
          {/* Hero Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-ubuntu">
              About Abayomi Arole Legal Practitioner
            </h1>
            <div className="mt-6 text-lg text-gray-600 max-w-7xl mx-auto text-justify">
              <p>
                Abayomi Arole Legal Practitioners (AALP) is a full-service law
                firm established with a focus on providing innovative and
                comprehensive legal solutions to meet the diverse needs of
                clients. Founded by Abayomi Arole and other seasoned legal
                professionals, our firm operates with a deep understanding of
                both local and international business environments, offering a
                strong blend of legal expertise and commercial insight. At AALP,
                we specialize in a wide range of legal services, including
                Corporate and Commercial Law, Litigation and Dispute Resolution,
                Banking and Finance, Real Estate, Labour and Employment Law,
                Telecommunications, and Taxation.
              </p>
              <br />
              <p>
                Our team is committed to delivering practical, business-driven
                legal advice that is aligned with the objectives of our clients.
                Our firm is recognized for its dedication to providing
                high-quality, efficient, and timely legal solutions. Over the
                years, we have earned the trust of major corporations, banks,
                multinational companies, and government agencies, offering both
                litigation and advisory services tailored to their specific
                needs. Our approach combines a strong understanding of legal
                principles with a commercial mindset. We take pride in
                delivering exceptional results through diligent, practical, and
                forward-thinking strategies.
              </p>
              <br />
              <p>
                By understanding our clients' industries and markets, we offer
                insights that address legal challenges effectively, enabling
                them to navigate complex regulatory frameworks, optimize
                business operations, and resolve disputes efficiently. Our
                Clients include a broad spectrum of organizations, ranging from
                corporate giants and international businesses to local startups
                and private individuals, all of whom benefit from our
                personalized approach and steadfast commitment to excellence.
                With a team of highly qualified lawyers, including experts in
                financial law, infrastructure, energy law, and international
                arbitration, AALP is strategically positioned to advise on
                complex projects, guide transactions, and represent clients in
                contentious matters across multiple jurisdictions.
              </p>
              <br />
              <p>
                At AALP, we value long-term relationships with our clients,
                built on trust, professionalism, and mutual respect. Our team is
                committed to navigating the complexities of the legal landscape
                to offer clear, actionable solutions for businesses and
                individuals alike.
              </p>
            </div>
          </motion.section>

          {/* Mission, Vision, Values */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Our Mission",
                text: "We are committed to delivering innovative, client-focused legal solutions, grounded in integrity and excellence.",
                image: "/mission.png"
              },
              {
                title: "Our Vision",
                text: "Our Vision is to be recognized as the leading provider of legal services in Nigeria, offering trusted and insightful solutions to a diverse clientele while maintaining the highest standards of integrity, professionalism, and client service.",
                image: "/vision.png"
              },
              {
                title: "Our Values",
                text: "Integrity, diligence, excellence, empathy, and innovation are the core principles that guide every aspect of our practice.",
                image: "/values.png"
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="h-52 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </section>

          {/* Focus Areas Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-ubuntu mb-8">
              Our Focus Areas
            </h2>

            <div className="h-72 w-full relative rounded-2xl overflow-hidden shadow-md mb-14">
              <Image
                src="/focus.png"
                alt="Our Practice Areas"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <h4 className="text-xl font-bold text-primary-300">
                    {area.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-700">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
}
