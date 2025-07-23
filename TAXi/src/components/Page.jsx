import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// --- SVG Icons (replaces react-icons) ---
const PhoneIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const ArrowDownIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
    />
  </svg>
);

const PlaneIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
    />
  </svg>
);

const RoadIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-3.75 2.063M6.429 9.75L12 12.75l5.571-3M6.429 9.75L12 6.75l5.571 3m0 0l4.179 2.25L12 21.75l-9.75-5.25 4.179-2.25m11.142 0l-5.571 3-5.571-3"
    />
  </svg>
);

const CityIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M9 21v-3.375c0-.621.504-1.125 1.125-1.125h2.75c.621 0 1.125.504 1.125 1.125V21"
    />
  </svg>
);

const UsersIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.67c.12-.14.237-.285.35-.437m-1.548 4.373a3.375 3.375 0 00-2.625-3.375"
    />
  </svg>
);

const ClockIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const CarIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875m-17.25 4.5h14.25"
    />
  </svg>
);

const TagIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 6h.008v.008H6V6z"
    />
  </svg>
);

// --- Reusable Animation Variants ---
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// --- Helper Component for Animated Sections ---
const AnimatedSection = ({ children, className, id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={sectionVariant}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// --- Header Component ---
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Services", "Fleet", "Rates", "Contact"];

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Chandra Prabha Travel
        </h1>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-blue-700 transition cursor-pointer"
            >
              {link}
            </a>
          ))}
        </div>
        <a
          href="tel:+917982628497"
          className="hidden md:flex items-center bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-lg shadow-sm hover:bg-yellow-500 transition-transform hover:scale-105"
        >
          <PhoneIcon className="h-4 w-4 mr-2" />
          CALL NOW
        </a>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            className="w-6 h-0.5 bg-gray-800 mb-1.5 origin-center"
          ></motion.div>
          <motion.div
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-gray-800 mb-1.5"
          ></motion.div>
          <motion.div
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -5 : 0 }}
            className="w-6 h-0.5 bg-gray-800 origin-center"
          ></motion.div>
        </button>
      </nav>
      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden px-6 pb-4 border-t`}
      >
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className="block py-2 text-gray-600 hover:text-blue-700"
          >
            {link}
          </a>
        ))}
        <a
          href="tel:+917982628497"
          className="block mt-4 text-center bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-lg shadow-sm hover:bg-yellow-500 transition"
        >
          CALL NOW
        </a>
      </motion.div>
    </header>
  );
};

// --- Hero Section ---
const Hero = () => (
  <section
    className="relative text-white"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://placehold.co/1920x1080/334155/E2E8F0?text=Modern+Taxi')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="container mx-auto px-6 py-24 md:py-40 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
      >
        Reliable Rides, Right When You Need Them.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8"
      >
        Your trusted local taxi service for airport transfers, outstation
        journeys, and city travel. Safe, punctual, and professional.
      </motion.p>
      <a href="#contact">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-yellow-500 cursor-pointer"
        >
          Get a Free Quote
        </motion.button>
      </a>
    </div>
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <ArrowDownIcon className="animate-bounce h-8 w-8 text-white/70" />
    </div>
  </section>
);

// --- Services Section ---
const Services = () => {
  const servicesData = [
    {
      icon: <PlaneIcon className="h-12 w-12 mx-auto" />,
      title: "Airport Transfers",
      description:
        "Punctual pickups and drop-offs for all domestic and international flights. We track your flight status to ensure we're always on time.",
    },
    {
      icon: <RoadIcon className="h-12 w-12 mx-auto" />,
      title: "Outstation Trips",
      description:
        "Plan your getaways or business trips with our comfortable and safe outstation cabs. Available for one-way or round-trip journeys.",
    },
    {
      icon: <CityIcon className="h-12 w-12 mx-auto" />,
      title: "Local City Travel",
      description:
        "For shopping, meetings, or a city tour, our local hourly and point-to-point packages are perfect for your needs.",
    },
  ];

  return (
    <AnimatedSection id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Services We Offer
          </h2>
          <p className="text-gray-600 mt-2">
            Comprehensive solutions for all your travel needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-gray-50 p-8 rounded-lg shadow-md text-center transition-shadow duration-300"
            >
              <div className="text-yellow-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

// --- Fleet Section ---
const Fleet = () => {
  const fleetData = [
    {
      name: "Sedan",
      tagline: "Comfort & Style",
      description:
        "Ideal for solo travelers, couples, and small families. Perfect for business trips and city commutes.",
      features: [
        "Seats: Up to 4 passengers",
        "Air Conditioned for your comfort",
        "Ample legroom and luggage space",
      ],
      imageUrl: "https://placehold.co/600x400/FFFFFF/333333?text=Clean+Sedan",
      imageAlt: "Sedan Taxi",
    },
    {
      name: "SUV",
      tagline: "Space & Versatility",
      description:
        "The best choice for large families, group travel, or when you have extra luggage.",
      features: [
        "Seats: Up to 6 passengers",
        "More luggage capacity",
        "Child-friendly and spacious",
      ],
      imageUrl: "https://placehold.co/600x400/FFFFFF/333333?text=Spacious+SUV",
      imageAlt: "SUV Taxi",
    },
  ];

  return (
    <AnimatedSection id="fleet" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Choose Your Ride
          </h2>
          <p className="text-gray-600 mt-2">
            Comfortable and well-maintained vehicles for every occasion.
          </p>
        </div>
        <div className="space-y-16">
          {fleetData.map((vehicle, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                className={index % 2 === 1 ? "md:order-2" : ""}
              >
                <img
                  src={vehicle.imageUrl}
                  alt={vehicle.imageAlt}
                  className="rounded-lg shadow-lg w-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                className={index % 2 === 1 ? "md:order-1" : ""}
              >
                <h3 className="text-2xl font-bold mb-2">
                  {vehicle.name}{" "}
                  <span className="text-lg font-normal text-gray-600">
                    ({vehicle.tagline})
                  </span>
                </h3>
                <p className="text-gray-700 mb-4">{vehicle.description}</p>
                <ul className="space-y-2">
                  {vehicle.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <span className="bg-yellow-400 text-gray-900 rounded-full h-6 w-6 text-xs flex items-center justify-center mr-3 font-bold">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

// --- Why Choose Us Section ---
const WhyChooseUs = () => {
  const advantages = [
    {
      icon: <UsersIcon className="h-10 w-10 text-yellow-500" />,
      title: "Professional Drivers",
      text: "Vetted, experienced, and courteous chauffeurs who know the city well.",
    },
    {
      icon: <ClockIcon className="h-10 w-10 text-yellow-500" />,
      title: "24/7 Availability",
      text: "We are at your service around the clock. Your ride is just a call away, anytime.",
    },
    {
      icon: <CarIcon className="h-10 w-10 text-yellow-500" />,
      title: "Clean & Sanitized Cars",
      text: "Your health and safety are our priority. Our fleet is regularly cleaned and maintained.",
    },
    {
      icon: <TagIcon className="h-10 w-10 text-yellow-500" />,
      title: "Transparent Pricing",
      text: "No hidden charges or surge pricing. Call for a clear, fixed-rate quote before your trip.",
    },
  ];

  return (
    <AnimatedSection id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            The CityLink Advantage
          </h2>
          <p className="text-gray-600 mt-2">
            We are committed to providing a superior travel experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              className="text-center p-4"
              variants={cardVariant}
            >
              <div className="flex justify-center mb-4">{adv.icon}</div>
              <h3 className="font-bold text-lg mb-2">{adv.title}</h3>
              <p className="text-gray-600">{adv.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

// --- Rates Section ---
const Rates = () => {
  const ratesData = [
    { service: "Airport Transfer", sedan: "From ₹1200", suv: "From ₹2400" },
    { service: "Local 8hr/80km", sedan: "₹1200", suv: "₹2600" },
    { service: "Outstation (per km)", sedan: "₹12/km", suv: "₹16/km" },
  ];

  return (
    <AnimatedSection id="rates" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Fair & Transparent Rates
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            <span className="font-semibold">Please note:</span> These are
            indicative rates. Prices may vary based on time, exact distance, and
            tolls. Please call us for a final quote.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-4 font-bold">Service Type</th>
                  <th className="p-4 font-bold">Sedan Rate (Approx.)</th>
                  <th className="p-4 font-bold">SUV Rate (Approx.)</th>
                </tr>
              </thead>
              <tbody>
                {ratesData.map((rate, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="p-4">{rate.service}</td>
                    <td className="p-4">{rate.sedan}</td>
                    <td className="p-4">{rate.suv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="tel:+917982628497">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-yellow-500 cursor-pointer"
            >
              <PhoneIcon className="inline h-5 w-5 mr-2" />
              Call for an Exact Quote
            </motion.button>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

// --- Contact & Footer Section ---
const Contact = () => (
  <footer id="contact" className="bg-gray-900 text-white">
    <div className="container mx-auto px-6 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Ready to Book Your Ride?</h2>
        <p className="text-gray-400 mb-8">
          Call us directly or send us an email. We're happy to help!
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center text-center space-y-8 md:space-y-0 md:space-x-12">
        <motion.div whileHover={{ scale: 1.1 }} className="text-center">
          <h3 className="text-yellow-400 font-bold text-lg mb-2">
            CALL US 24/7
          </h3>
          <a
            href="tel:+917982628497"
            className="text-2xl md:text-3xl font-bold hover:text-yellow-300 transition-colors"
          >
            +91-798-262-8497
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="text-center">
          <h3 className="text-yellow-400 font-bold text-lg mb-2">EMAIL US</h3>
          <a
            href="mailto:email@gmail.com"
            className="text-xl hover:text-yellow-300 transition-colors"
          >
            email@gmail.com
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="text-center">
          <h3 className="text-yellow-400 font-bold text-lg mb-2">
            SERVICE AREA
          </h3>
          <p className="text-xl">Ghaziabad, Noida, Delhi-NCR, Uttar Pradesh, India</p>
        </motion.div>
      </div>
    </div>
    <div className="bg-black py-4">
      <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Chandra Prabha Travel. All Rights Reserved.
      </div>
    </div>
  </footer>
);

// --- Main App Component ---
export default function App() {
  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        section[id] {
          scroll-margin-top: 80px; /* Adjust this value based on your sticky header's height */
        }
      `}</style>
      <div className="bg-gray-50 text-gray-800 font-sans">
        <Header />
        <main>
          <Hero />
          <Services />
          <Fleet />
          <WhyChooseUs />
          <Rates />
        </main>
        <Contact />
      </div>
    </>
  );
}
