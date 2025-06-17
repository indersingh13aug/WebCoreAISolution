import React from 'react';

const WebDevelopment = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-6 text-center">
          Empowering Your Business with Web Development
        </h1>
        <p className="text-lg mb-8 text-center">
          At WebCore AI Solutions, we specialize in delivering top-tier .NET development services to help businesses create powerful, secure, and scalable applications.
          Leveraging the versatility of Microsoft’s .NET framework, our expert developers craft custom solutions tailored to your unique needs, ensuring seamless performance across platforms.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-4">What We Offer in Web Development</h2>
        <ul className="list-disc list-inside space-y-4 mb-8">
          <li>
            <strong>Custom Web Application Development:</strong> Bespoke .NET applications aligned with your business goals—enterprise software, web apps, or desktop solutions.
          </li>
          <li>
            <strong>ASP.NET Web Development:</strong> Dynamic, responsive, and secure web applications built with ASP.NET for high performance and great UX.
          </li>
          <li>
            <strong>.NET Core Development:</strong> Cross-platform apps using .NET Core for seamless deployment on Windows, macOS, and Linux.
          </li>
          <li>
            <strong>API Development & Integration:</strong> Custom .NET APIs with third-party service integration to extend your app’s functionality.
          </li>
          <li>
            <strong>Migration to .NET:</strong> Modernize legacy systems with smooth transitions to the .NET ecosystem for improved performance and reliability.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-4">Why Choose WebCore AI for Web Development?</h2>
        <ul className="list-disc list-inside space-y-4 mb-10">
          <li><strong>Experienced Developers:</strong> Skilled .NET experts with a proven track record of complex application delivery.</li>
          <li><strong>Agile Methodology:</strong> Flexible, iterative project execution ensures timely delivery and responsiveness to change.</li>
          <li><strong>Scalable Solutions:</strong> Applications that grow with your business and meet evolving demands.</li>
          <li><strong>Security First:</strong> Robust security practices integrated throughout development to safeguard your assets.</li>
          <li><strong>End-to-End Support:</strong> From initial planning to deployment and maintenance, we’ve got you covered.</li>
        </ul>

        <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-xl text-center">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-200 mb-2">
            Ready to Build with .NET & Python?
          </h3>
          <p className="mb-4">
            Let WebCore AI Solutions bring your vision to life with our expert .NET development services.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
