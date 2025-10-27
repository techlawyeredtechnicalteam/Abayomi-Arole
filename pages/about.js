import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

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
  ];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-20 px-6">
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-garamond">
              About Abayomi Arole Legal Practitioner
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Legal Strategy, Practical Solutions, Trusted Results
            </p>
          </motion.section>

          {/* Mission, Vision, Values */}
          <section className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Our Mission",
                text: "We are committed to delivering innovative, client-focused legal solutions, grounded in integrity and excellence.",
                image: "/mission.png"
              },
              {
                title: "Our Vision",
                text: "To redefine the legal landscape by empowering individuals and businesses through exceptional advocacy and trusted counsel.",
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-garamond mb-8">
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

            <div className="grid md:grid-cols-2 gap-10">
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
