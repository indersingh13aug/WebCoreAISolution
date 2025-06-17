import React from 'react';
import { Link } from 'react-router-dom';

const positions = [
  {
    title: '.NET Developer',
    subtitle: 'AI Meets Enterprise Software',
    responsibilities: [
      'Develop and maintain .NET Core/ASP.NET applications and APIs.',
      'Design database schemas and interact with SQL Server or other RDBMS.',
      'Integrate third-party APIs and enterprise systems.',
      'Work with frontend and DevOps teams to deliver complete solutions.',
      'Write clean, efficient, and reusable code.',
    ],
    requirements: [
      'Strong knowledge of C#, .NET Core, and ASP.NET MVC/Web API.',
      'Experience with Entity Framework, LINQ, and SQL Server.',
      'Understanding of RESTful services and microservice architecture.',
      'Familiarity with Git, Visual Studio, and CI/CD pipelines.',
      'Good problem-solving and communication skills.',
    ],
    preferred: [
      'Azure or AWS cloud deployment experience.',
      'Blazor or Angular/React integration experience.',
      'Knowledge of Clean Architecture or Domain-Driven Design (DDD).',
      'Experience working in Agile/Scrum teams.',
    ],
  },
  {
    title: 'Android Developer',
    subtitle: 'Innovating AI & Automation',
    responsibilities: [
      'Develop and maintain high-performance Android apps using Kotlin/Java.',
      'Collaborate with designers and backend teams for feature integration.',
      'Optimize applications for speed, usability, and battery efficiency.',
      'Participate in code reviews, testing, and continuous improvement.',
    ],
    requirements: [
      'Proficient in Kotlin and/or Java, and Android SDK.',
      'Familiar with MVVM architecture, Jetpack libraries, and Material Design.',
      'Experience with REST APIs and Firebase.',
      'Comfortable with Git and Android Studio tools.',
    ],
    preferred: [
      'Jetpack Compose or Flutter experience.',
      'Understanding of cross-platform development.',
      'Basic knowledge of CI/CD and agile practices.',
    ],
  },
  {
    title: 'AI Developer',
    subtitle: 'Pioneers in AI Automation & Agentic Systems',
    responsibilities: [
      'Design, build, and deploy AI-powered applications and autonomous agents.',
      'Work with NLP, LLMs, LangChain, LangGraph, and OpenAI APIs.',
      'Develop, fine-tune, and evaluate machine learning models.',
      'Collaborate with software teams to integrate AI into scalable systems.',
      'Document research and architecture, and actively contribute to innovation.',
    ],
    requirements: [
      'Proficiency in Python and AI/ML frameworks (TensorFlow, PyTorch, HuggingFace).',
      'Experience with LLM APIs (OpenAI, Anthropic, Cohere, etc.).',
      'Understanding of NLP, prompt engineering, and vector databases (FAISS, Pinecone, etc.).',
      'Experience building agents using LangChain, LangGraph, or similar.',
      'Strong grasp of algorithms, data structures, and system architecture.',
    ],
    preferred: [
      'Experience in Reinforcement Learning, Graph AI, or Agentic systems.',
      'Familiarity with Flask, FastAPI, Docker, Redis.',
      'Published work or GitHub portfolio on AI/agentic tools.',
      'Knowledge of cloud platforms (AWS, Azure, GCP).',
    ],
  },
];

const Career = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <section>
          <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">Careers at WebCore AI Solutions</h1>
          <p className="text-lg">
            At WebCore AI Solutions, we’re passionate about leveraging AI and web technologies to create impactful solutions.
            As a growing startup, we’re always on the lookout for talented individuals who share our vision of innovation,
            excellence, and collaboration. Join our team to work on cutting-edge projects, grow your skills, and make a
            meaningful difference in the tech world.
          </p>
        </section>

        {/* Open Positions */}
        <section>
          <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-300 mb-6">Open Positions</h2>
          <div className="space-y-12">
            {positions.map((pos, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
                <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">{pos.title}</h3>
                <p className="italic text-gray-600 dark:text-gray-400">{pos.subtitle}</p>

                <div>
                  <h4 className="font-bold text-lg">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {pos.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg">Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {pos.requirements.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg">Preferred Skills:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {pos.preferred.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="bg-blue-700 dark:bg-blue-800 text-white rounded-xl p-8 text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Why Work With Us?</h2>
          <ul className="list-disc list-inside text-left max-w-3xl mx-auto space-y-2 text-lg">
            <li><strong>Innovative Projects:</strong> Work on cutting-edge AI and web development projects.</li>
            <li><strong>Growth Opportunities:</strong> Training, mentorship, and career growth support.</li>
            <li><strong>Collaborative Culture:</strong> Join a team that values creativity and open communication.</li>
            <li><strong>Flexible Work Environment:</strong> Hybrid/remote options depending on role.</li>
            <li><strong>Impactful Work:</strong> Build solutions that matter for clients and communities.</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
            Ready to Join Us?
          </h3>
          <p className="mb-6 text-lg">
            If you’re excited about shaping the future of technology, we’d love to hear from you.
            Contact us or share your resume to explore opportunities at WebCore AI Solutions.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Apply Now
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Career;
