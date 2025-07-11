import AboutMe from '@/components/AboutMe'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LatestProject from '@/components/latestProject'
import Reviews from '@/components/reviews'
import Services from '@/components/Services'
import { Airplay, Flame, SquareChartGantt, SquareTerminal } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Header />
      <AboutMe />
      <section className='dark:bg-black dark:text-black pb-20 max-md:pb-5'>
        <div className='flex gap-4 items-center font-bold pb-32 place-content-center max-sm:pt-20'>
          <Flame className='text-[#F59E18]' />
          <h1 className='dark:text-white'>Services</h1>
        </div>

        <div className='md:flex md:gap-x-20 max-md:space-y-10 max-sm:w-[340px] sm:w-[500px] md:w-[1200px] mx-auto'>
          <Services
            text='Web design'
            icon={<Airplay size={70} strokeWidth={2} />}
          >
            The process of creating visually appealing and user-friendly
            interfaces using HTML, CSS and JavaScritpt focusing on layout,
            typography, and responsive design principles.
          </Services>

          <Services
            text='Web development'
            icon={<SquareChartGantt size={70} strokeWidth={2} />}
          >
            Building functional websites by combining web design with
            interactivity and logic using JavaScript and modern frameworks like
            React.js, Next.js and server side rendering.
          </Services>

          <Services
            text='Application development'
            icon={<SquareTerminal size={70} strokeWidth={2} />}
          >
            Developing dynamic, feature-rich applications using technologies
            like React.js, Next.js for front-end, Firebase for authentication
            and hosting, and MongoDB for database management.
          </Services>
        </div>
      </section>
      <LatestProject text='All project' />
      <Reviews />
      <Footer />
    </>
  )
}
