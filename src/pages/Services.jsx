import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Web Development',
    description:
      'We build responsive, secure, and high-performance websites and applications that engage your audience and elevate your brand. From corporate websites to full-scale web apps, we deliver with precision.',
    link: '/services/web-development',
    image: 'https://cdn-icons-png.flaticon.com/512/841/841364.png',
  },
  {
    title: 'Android Development',
    description:
      'Create fast, reliable, and feature-rich Android applications tailored to your business needs. Our team uses the latest frameworks to ensure compatibility, performance, and beautiful UI/UX.',
    link: '/services/android-development',
    image: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
  },
  {
    title: 'AI Automation',
    description:
      'Streamline your business with custom AI-powered tools — including intelligent workflows, data insights, and smart agents. We integrate AI into your systems to boost productivity and innovation.',
    link: '/services/ai-automation',
    image: 'https://cdn-icons-png.flaticon.com/512/3388/3388797.png',
  },
];

const Services = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400 text-center mb-12">
          Our Services
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-20 h-20 mb-4"
              />
              <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
                {service.title}
              </h2>
              <p className="text-sm mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="mt-auto inline-block px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
