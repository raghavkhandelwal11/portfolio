import React from 'react';
import img1 from "../../Resources/resume-guy-img.png";
import ln from "../../Resources/linkedin-logo.png";
import tw from "../../Resources/twitter.png";
import dis from "../../Resources/discord.png";
import git from "../../Resources/github-small.png";



const Resume = () => {
  return (
    <div>
        <div className='resume' id="resume-id">
        <h2>Resume</h2><hr className='resume-hr'/>
        <div className='resume-flex'>
        <div className='resume-content'>
        <div className='resume-content-1'>
            <h3>My Skills</h3>
            <hr />
            <h4>⚫️ Competencies</h4>
            <p>Front-End Development, Back-End development, Project Management and Leadership skills</p>
            <h4>⚫️ Languages/Technologies/Platforms</h4>
            <p>HTML, CSS, Javascript, REACT, basic Java, Bootstrap, Github, Netlify</p>
        </div>

        <div className='resume-content-2'>
        <h3>Education</h3>
        <hr />
        <h4> ⚫️ Vellore Institute of Technology {"(2017-2021)"}</h4>
        <p>B tech. Electronics and Communication Engineering with 8.56 CGPA</p>
        <button style={{
          backgroundColor: "black",
          borderRadius: "5px",
          border: "none",
          padding: "4px 2%"
        }}
        ><a style={{textDecoration: "none", color: "white"}} href="https://raghavkhandelwal11.github.io/Resume/">Check My Resume</a></button>
        
        </div>
        </div>
        <div className='resume-right'>
        <div className='resume-guy'>
            <div>
            <img className='resume-guy-pic' src={img1} alt="" />
            </div>
            <div className='platforms'>
                <div><img className='platform-img' src={ln} alt="" /></div>
                <div><img className='platform-img' src={tw} alt="" /></div>
                <div><img className='platform-img' src={dis} alt="" /></div>
                <div><img className='platform-img' src={git} alt="" /></div>
            </div>
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Resume;