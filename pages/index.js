import Head from 'next/head'
import Image from 'next/image'
import Hero from 'containers/Hero'
import TechnologyList from 'containers/TechnologyList'
import About from 'containers/About'
import Services from 'containers/Services'
import Experiences from 'containers/Experiences'
import HireMe from 'containers/HireMe'
import Portfolio from 'containers/Portfolio'
import Blogs from '/containers/Blogs'
import Contacts from 'containers/Contacts'


export default function Home() {
  return (<>
    <Hero />
    <TechnologyList />
    <section className='relative md:py-24 py-16' id='about'>
      <About />
      <Services />
    </section>
    <Experiences />
    <HireMe />
    <section className='relative md:py-24 py-16' id='portfolio'>
      <Portfolio />
      <Blogs />
      <Contacts />
    </section>


  </>)


}
