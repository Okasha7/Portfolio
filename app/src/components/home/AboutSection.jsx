"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  const tabClasses = (active) =>
    `mr-3 cursor-pointer font-semibold border-b-2 pb-1 ${
      active ? 'text-white border-purple-500' : 'text-[#aabfb3] border-transparent hover:text-white'
    }`;

  return (
    <section className="text-white mt-10">
      <div className="grid md:grid-cols-2 gap-8 items-center lg:py-8 px-4 sm:py-3">
        <div>
          <Image
            src="/images/AboutImg.jpg"
            alt="My Profile Picture"
            width={800}
            height={600}
            className="rounded mt-5 lg:mt-0"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 mt-5 lg:mt-0">About Me</h2>
          <p className="text-lg text-gray-300">
            I'm a passionate full-stack developer who enjoys creating intuitive, responsive, and efficient web applications.
            With a strong foundation in both front-end and back-end technologies, I love solving real-world problems through code.
          </p>

          <div className="flex flex-row mt-8 space-x-4 justify-center md:justify-start">
            <span
              className={tabClasses(tab === "skills")}
              onClick={() => handleTabChange("skills")}
            >
              Skills
            </span>
            <span
              className={tabClasses(tab === "education")}
              onClick={() => handleTabChange("education")}
            >
              Education
            </span>
            <span
              className={tabClasses(tab === "experience")}
              onClick={() => handleTabChange("experience")}
            >
              Experience
            </span>
          </div>

          <div className="mt-6 text-gray-300">
            {tab === "skills" && <p>JavaScript, React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, etc.</p>}
            {tab === "education" && <p>B.Sc. in Computer Science</p>}
            {tab === "experience" && <p>1+ years of experience working as a full-stack developer.</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
