import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiTailwindcss, SiMysql, SiFirebase, } from 'react-icons/si'
import { BiLogoVisualStudio } from "react-icons/bi";

function WhatICanDo() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-800" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white bg-black rounded-full" /> },
    { name: "VS Code", icon: <BiLogoVisualStudio className="text-blue-500" /> }
  ]

  return (
    <div className='w-full mt-20 px-6 flex flex-col items-center justify-center'>
      <h2 className='text-4xl font-bold mb-8'>What I Can Do</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
        {skills.map((skill, index) => (
          <div key={index} className='flex flex-col items-center text-center p-4 hover:bg-gray-100 transition-all'>
            <div className='text-5xl mb-2'>{skill.icon}</div>
            <span className='text-base font-medium'>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatICanDo
