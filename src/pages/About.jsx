import React from "react";

const About = () => (
  <div className="max-w-3xl mx-auto py-20 px-4"> {/* Increased padding-top for margin from navbar */}
    <h1
      className="text-4xl font-extrabold mb-8 text-center"
      style={{
        color: "#171717", // Black heading
        letterSpacing: "0.02em",
        marginTop: "2rem"
      }}
    >
      About Us
    </h1>
    <div className="text-white text-lg leading-relaxed drop-shadow-md">
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-cyan-300">Who We Are</h2>
        <p>
          CLUSTER is the official platform of the CLUSTER Data Science Club, empowering students to collaborate, learn, and contribute to real-world data science and AI projects. We're a community of developers, designers, and data enthusiasts building real-world solutions and growing together.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-cyan-300">Our Mission & Vision</h2>
        <p>
          <span className="font-bold">Mission:</span> To create an inclusive, collaborative environment where members can learn, innovate, and contribute to impactful data science and AI projects.
        </p>
        <p className="mt-2">
          <span className="font-bold">Vision:</span> To nurture the next generation of data scientists and AI practitioners by providing hands-on experience, mentorship, and opportunities to work on real-world challenges.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-cyan-300">Objectives</h2>
        <ul className="list-disc pl-6">
          <li>Foster collaboration on data science and AI projects</li>
          <li>Encourage knowledge sharing and continuous learning</li>
          <li>Build a community of passionate tech enthusiasts</li>
          <li>Provide mentorship and networking opportunities</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2 text-cyan-300">Our Focus Areas</h2>
        <ul className="list-disc pl-6">
          <li>📊 Data Analysis & Visualization</li>
          <li>🤖 Machine Learning Projects</li>
          <li>🧠 Natural Language Processing</li>
          <li>👁️‍🗨️ Computer Vision</li>
          <li>🧪 MLOps, Deployment, and more...</li>
        </ul>
      </section>
    </div>
  </div>
);

export default About;