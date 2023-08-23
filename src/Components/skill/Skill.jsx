import React from 'react'
import "./skill.css"
import Frontend from './Frontend'
import Backend from './Backend'

const Skill = () => {
  return (
   <section className="skills section" id="skill">
     <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Tecnical skills</span>
      <div className="skills__container container grid">

        <Frontend />
        <Backend />
      </div>
   </section>
  )
}

export default Skill
