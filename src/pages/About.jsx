import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Who We Are */}
        <section>
          <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">
            Who We Are
          </h1>
          <p className="text-lg">
            Founded in 2024, <strong>WebCore AI Solutions</strong> is a forward-thinking tech startup dedicated to revolutionizing businesses through the power of AI automation and web development. Based on our commitment to innovation, we combine cutting-edge technologies with a client-centric approach to deliver solutions that drive growth, efficiency, and success.
          </p>
          <p className="mt-4 text-lg">
            Our team of skilled developers, AI specialists, and strategists works collaboratively to create intelligent, scalable, and user-focused solutions tailored to the unique needs of our clients. From startups to enterprises, we partner with businesses across industries to help them thrive in the digital age.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-2">
              Our Mission
            </h2>
            <p>
              At WebCore AI Solutions, our mission is to empower organizations with transformative AI and web solutions that simplify complexity, enhance productivity, and unlock new opportunities. We aim to be a trusted partner in our clients’ digital transformation journeys, delivering measurable results through innovation and excellence.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-2">
              Our Vision
            </h2>
            <p>
              We envision a future where businesses of all sizes can harness the full potential of AI and web technologies to achieve their goals. By staying at the forefront of technological advancements, we strive to lead the way in creating smarter, more connected, and sustainable digital ecosystems.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6">
            Our Core Values
          </h2>
          <ul className="space-y-4">
            <li>
              <span className="font-semibold text-blue-600 dark:text-blue-300">Innovation:</span>{' '}
              We embrace the latest technologies to deliver cutting-edge solutions that keep our clients ahead of the curve.
            </li>
            <li>
              <span className="font-semibold text-blue-600 dark:text-blue-300">Excellence:</span>{' '}
              We are committed to delivering high-quality solutions that exceed expectations and drive success.
            </li>
            <li>
              <span className="font-semibold text-blue-600 dark:text-blue-300">Collaboration:</span>{' '}
              We work closely with our clients, fostering strong partnerships built on trust and transparency.
            </li>
            <li>
              <span className="font-semibold text-blue-600 dark:text-blue-300">Integrity:</span>{' '}
              We uphold the highest standards of ethics and professionalism in everything we do.
            </li>
            <li>
              <span className="font-semibold text-blue-600 dark:text-blue-300">Impact:</span>{' '}
              We focus on creating solutions that make a meaningful difference for our clients and their customers.
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-700 dark:bg-blue-800 text-white rounded-xl p-8 text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Join Us on Our Journey</h2>
          <p className="mb-6">
            At WebCore AI Solutions, we’re passionate about using technology to solve real-world challenges. Whether you’re looking to automate processes, build a web application, or leverage AI, we’re here to help.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Contact Us Today
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
