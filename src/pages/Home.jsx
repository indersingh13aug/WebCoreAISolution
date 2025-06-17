import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EnquiryModal from './EnquiryModal';
const Home = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <section className="px-4 py-16 text-center bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <h1 className="text-4xl font-bold mb-4 text-blue-700 dark:text-blue-400">
          Welcome to WebCore AI Solutions
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Empowering businesses with AI-powered automation and cutting-edge web solutions.
        </p>
        <Link
          to="/contact"
          className="inline-block mt-6 px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition"
        >
          Get in Touch
        </Link>
      </section>

      {/* Why Choose WebCore AI */}
      <section className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-400">
          Why Choose WebCore AI?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Automation</h3>
            <p>
              Streamline operations and boost productivity with our bespoke AI solutions. From intelligent workflows to predictive analytics, we harness the power of artificial intelligence to transform your business processes.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Innovative Web Development</h3>
            <p>
              Create impactful digital experiences with our tailored web development services. We build responsive, secure, and high-performance websites and applications that engage your audience and elevate your brand.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">End-to-End Solutions</h3>
            <p>
              From ideation to deployment, our expert team delivers comprehensive solutions that integrate AI and web technologies to meet your unique business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-400 mb-8">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 dark:text-gray-200">
            <ul className="space-y-3">
              <li><strong>AI Automation Solutions:</strong> Custom AI tools for process optimization, data analysis, and intelligent decision-making.</li>
              <li><strong>Web Development:</strong> Responsive websites, e-commerce platforms, and web applications built for performance and scalability.</li>
              <li><strong>AI-Web Integration:</strong> Combine AI capabilities with web platforms for smart, dynamic user experiences.</li>
              <li><strong>Consulting & Strategy:</strong> Expert guidance to align AI and web solutions with your business goals.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-400 mb-8">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center text-gray-800 dark:text-gray-100 font-medium">
          {['E-Commerce', 'Healthcare', 'Finance', 'Education', 'Manufacturing', 'Startups & SMEs'].map((industry) => (
            <div key={industry} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
              {industry}
            </div>
          ))}
        </div>
        <p className="text-center mt-6">
          No matter your industry, WebCore AI Solutions delivers tailored technology to accelerate your success.
        </p>
      </section>

      {/* Why WebCore AI Stands Out */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-400 mb-8">
            Why WebCore AI Stands Out
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-800 dark:text-gray-200">
            <li><strong>Expert Team:</strong> Our developers, AI specialists, and strategists bring years of experience to every project.</li>
            <li><strong>Client-Centric Approach:</strong> We prioritize your vision, ensuring solutions that align with your goals.</li>
            <li><strong>Cutting-Edge Technology:</strong> We leverage the latest in AI and web frameworks to keep you ahead of the curve.</li>
            <li><strong>Proven Results:</strong> Trusted by businesses worldwide to deliver measurable outcomes.</li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-400 mb-8">
          What Our Clients Say
        </h2>
        <div className="space-y-6">
          <blockquote className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg shadow">
            “Working with WebCore AI Solutions was a game changer for our school. The website is fast, mobile-friendly, and beautifully designed. Parents and students love the experience!”
            <footer className="mt-4 font-semibold text-sm">— Principal, Future Bright School, Uttar Pradesh</footer>
          </blockquote>
          <blockquote className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg shadow">
            “WebCore AI gave our electronics showroom a powerful online presence. The custom features, discount system, and sleek design helped boost our customer engagement online.”
            <footer className="mt-4 font-semibold text-sm">— Surendra Singh Sangela, CEO, Sangela Trading Company, Haldwani</footer>
          </blockquote>
          <blockquote className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg shadow">
            “Their attention to detail, commitment to deadlines, and technical expertise make them a go-to tech partner. Highly recommended for any business looking to grow online.”
            <footer className="mt-4 font-semibold text-sm">— Anjali Sharma, Small Business Owner</footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 dark:bg-blue-800 text-white py-12 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="mb-6">Partner with WebCore AI Solutions to unlock the full potential of AI automation and web innovation.</p>
        <Link
          to="/contact"
          className="inline-block px-6 py-2 bg-white text-blue-700 font-semibold rounded-md hover:bg-gray-100 transition"
        >
          Let’s Build the Future Together
        </Link>
      </section>
            {/* Vertical Enquire Now Button */}
<button
  onClick={() => setShowEnquiry(true)}
  className="fixed top-1/2 left-4 font-bold text-indigo-700 transform -translate-y-1/2 -rotate-90 origin-left bg-yellow-400 text-black px-3 h-12 rounded-r shadow-lg z-50 flex items-center justify-center"
>
  Enquire Now
</button>

      {/* Modal */}
      <EnquiryModal isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </div>
  );
};

export default Home;
