import React from 'react'

const ProjectCards = ({ title, description, image }) => {
  return (
    <div className="bg-dark rounded-xl shadow-md overflow-hidden">
      <div
        className="h-56 md:h-60 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="p-4 justify-center items-center text-center lg:text-left">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-white">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCards
