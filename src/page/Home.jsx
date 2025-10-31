import React from 'react'
import Header from '../component/Header'
import HomeSection from '../component/HomeSection'
import AboutSection from '../component/AboutSection'
import SkillsSection from '../component/SkillsSection'
import ExperienceSection from '../component/ExperienceSection'
import ProjectSection from '../component/ProjectSection'
import ContactSection from '../component/ContactSection'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <>
        <Header/>
        <HomeSection/>
        <AboutSection/>
        <SkillsSection/>
        <ExperienceSection/>
        <ProjectSection/>
        <ContactSection/>
        <Footer/>
    </>
  )
}

export default Home