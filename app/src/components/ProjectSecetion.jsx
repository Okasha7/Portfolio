import React from 'react'
import ProjectCards from './ProjectCards'
import Image from 'next/image'
const projects = [
  {
    title: 'React Portfolio Website',
    description: 'A portfolio website built with React, Next.js, and Tailwind CSS.',
    image: '/images/1.png',
  },
  {
    title: 'Photography Website',
    description: 'You can see my photography work here.',
    image: '/images/2.png',
  },
  {
    title: 'E-commerce Website',
    description: 'You can see my e-commerce work here.',
    image: '/images/3.png',
  },
  {
    title: 'Food Delivery Website',
    description: 'You can see my food delivery work here.',
    image: '/images/4.png',
  },  {
    title: 'React firebase website',
    description: 'you can get a firebase template here and use it for your project.',
    image: '/images/5.png',
  },
  {
    title: 'Full-Stack roadmap website',
    description: 'you can get a full-stack roadmap here and use it for your project.',
    image: '/images/6.png',
  },

]

function ProjectSection() {
  return (
    <div className="px-4 lg:py-28 py-20">
      <h1 className="text-center py-4 text-4xl font-bold text-white mb-6">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-200">PROJECTS</span>
       
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCards
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectSection
