import classNames from 'classnames'
import { useRef, useState } from 'react'
import {
  BsArrow90DegDown,
  BsArrowUp,
  BsLinkedin,
  BsGithub,
  BsTwitter,
} from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { AnimatePresence, motion } from 'framer-motion'

export default function App() {
  const workSection = useRef()
  const header = useRef()
  const hclSection = useRef()

  const [contactVisible, setContactVisible] = useState(false)

  const scrollIntoWork = () => {
    workSection.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollIntoHeader = () => {
    header.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollIntoHcl = () => {
    hclSection.current.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleContact = () => {
    setContactVisible((prevValue) => !prevValue)
  }

  const contactClassNames = classNames(
    {
      'items-center': !contactVisible,
    },
    'shadow-lg bg-orange-100 rounded-lg fixed right-20 bottom-5 p-3 font-bold uppercase flex justify-end items-start flex-col',
  )

  const showTestimonials = false

  return (
    <div className='w-full min-h-screen bg-orange-50 pt-10 px-20'>
      <header className='w-full' ref={header}>
        <nav>
          <ul className='w-100 flex flex-row items-center justify-between list-none font-bold'>
            <li>
              <a className='cursor-pointer text-xl uppercase hover:text-orange-700 transition-all active:text-orange-900'>
                Rodrigo Sosa Piña
              </a>
            </li>
            <li className='max-w-[200px]'>
              <a className='cursor-pointer hover:text-orange-700 transition-all active:text-orange-900'>
                Senior Software Engineer at Wizeline
              </a>
            </li>
            <li>
              <a className='cursor-pointer hover:text-orange-700 transition-all active:text-orange-900'>
                Mexico, Yucatán
              </a>
            </li>
            <ul className='text-end'>
              <li>
                <a
                  href='#work'
                  className='cursor-pointer hover:text-orange-700 transition-all active:text-orange-900'
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href='mailto:RodrigoSosa95@live.com.mx'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='cursor-pointer hover:text-orange-700 transition-all active:text-orange-900'
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href='#independent-work'
                  className='cursor-pointer hover:text-orange-700 transition-all active:text-orange-900'
                >
                  Independent Work
                </a>
              </li>
              <hr />
              <li>
                <a
                  href='https://www.fiverr.com/rodrigososa95?up_rollout=true'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='cursor-pointer hover:text-orange-700 transition-all active:text-orange-900 hover:underline'
                >
                  Fiverr
                </a>
              </li>
              <li>
                <a
                  href='https://www.upwork.com/freelancers/~01a5efa53f56635c6a'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='cursor-pointer hover:text-orange-700 transition-all active:text-orange-900 hover:underline'
                >
                  Upwork
                </a>
              </li>
            </ul>
          </ul>
        </nav>
      </header>
      <main className='w-full'>
        <div>
          <h1 className='text-9xl font-bold uppercase'>
            Front-end Software Engineer
          </h1>
          <h2 className='text-2xl font-bold uppercase'>
            (Former technical lead at GrainChain)
          </h2>
          <div className='w-full relative min-h-[475px] bottom-0 left-0 right-0 flex items-center px-20 justify-between'>
            <div>
              <BsArrow90DegDown
                onClick={scrollIntoWork}
                className='text-9xl cursor-pointer hover:text-orange-500 transition-all active:text-orange-700 hover:underline'
              />
            </div>
            <div>
              <p className='max-w-[450px] uppercase font-bold'>
                I support development teams in taking the proper technical
                decisions to achieve a project success, with a high focus on the
                teams well being and proper work distribution.
              </p>
            </div>
            <h1 className='text-8xl font-bold uppercase max-w-[800px]'>
              5+ years of experience
            </h1>
          </div>
        </div>
        <div className='w-full h-screen'>
          <h1
            id='work'
            ref={workSection}
            className='text-9xl font-bold uppercase'
          >
            Work
          </h1>
          <div className='w-full flex mt-10'>
            <div className='w-full flex flex-col'>
              <h1 className='text-4xl font-bold uppercase max-w-[800px]'>
                Wizeline | Senior Software Engineer | November 2021 - Present
              </h1>
              <p className='text-lg font-bold uppercase max-w-[800px] mt-5'>
                Currently working for a well known textile company located in
                Spain as a senior software engineer consultant. <br />
                <br /> Support the team in the development of a new internal
                platform that makes heavy use of data to improve decision making
                of product sales.
              </p>
              <p className='text-lg font-bold uppercase max-w-[600px] mt-5'>
                Toolset: React, Redux, React Query, Typescript, Jest, RTL,
                Prettier, Eslint, Github Ecosystem
              </p>
            </div>
            <BsArrowUp
              onClick={scrollIntoHeader}
              className='mr-52 text-9xl cursor-pointer hover:text-orange-500 transition-all active:text-orange-700 hover:underline'
            />
          </div>

          <div className='w-full flex mt-10'>
            <div>
              <BsArrow90DegDown
                onClick={scrollIntoHcl}
                className='text-9xl mt-40 cursor-pointer hover:text-orange-500 transition-all active:text-orange-700 hover:underline'
              />
            </div>
            <div className='w-full flex items-end flex-col  text-end'>
              <h1 className='text-4xl font-bold uppercase max-w-[800px]'>
                GrainChain | Technical Lead | July 2019 - November 2021
              </h1>
              <p className='text-lg font-bold uppercase max-w-[800px] mt-5'>
                Worked as a Technical Lead directing a full fledged agile team
                to develop one of the platforms of the GrainChain Ecosystem,
                supported other teams in adopting react native into their
                projects <br />
                <br /> Contributed into the decision making of the product
                development and architecture development, worked briefly in the
                development of some of the microservices used within the company
              </p>
              <p className='text-lg font-bold uppercase max-w-[600px] mt-5'>
                Toolset: React, Redux, React Query, Typescript, Prettier,
                Eslint, Gitlab Ecosystem, React Native, Zustand, Axios, React
                Navigation, Express, Swagger
              </p>
            </div>
          </div>
        </div>
        <div className='w-full mt-96' ref={hclSection}>
          <div className='w-full flex mt-10'>
            <div className='w-full flex flex-col'>
              <h1 className='text-4xl font-bold uppercase max-w-[800px]'>
                HCL Technologies | Junior Software Engineer | February 2018 -
                July 2019
              </h1>
              <p className='text-lg font-bold uppercase max-w-[800px] mt-5'>
                Worked for a well known US banking company for military
                personnel
                <br />
                <br /> Supported teams to adopt React as a frontend technology,
                migrating their legacy systems from SOAP/Templates to REST/React
              </p>
              <p className='text-lg font-bold uppercase max-w-[600px] mt-5'>
                Toolset: React, Redux, Redux Form
              </p>
            </div>
            <div className='mt-56 mr-40 mb-40'>
              <h1 className='text-4xl font-bold uppercase max-w-[800px] '>
                Other important topics:
              </h1>
              <p className='text-lg font-bold uppercase max-w-[600px] mt-5'>
                Throughout these projects and companies I&apos;ve worked with
                these teams using agile methodologies, such as: SaFe, Scrum,
                Kanban, Communication is very important to me, so my approach to
                this is to always be transparent and have open communication
                channels
              </p>
            </div>
          </div>
        </div>
        <div className='w-full h-screen'>
          <h1 id='independent-work' className='text-9xl font-bold uppercase'>
            Independent Work
          </h1>
          <h2 className='text-2xl font-bold uppercase'>
            As of 2023 I started working independently as a software engineer
            consultant.
          </h2>
          {showTestimonials ? (
            <div className='w-full flex mt-10 flex-grow-0 flex-shrink-0'>
              <div className='mr-10'>
                <div className='w-full flex flex-col'>
                  <h1 className='text-4xl font-bold uppercase max-w-[800px]'>
                    Testimonial: Lucas Cornejo from BrandTrack
                  </h1>
                  <p className='text-lg font-bold uppercase max-w-[800px] mt-5'>
                    <span className='text-4xl'>&quot;</span>Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur
                    <span className='text-4xl'>&quot;</span>
                  </p>
                </div>
              </div>
              <img
                src='https://place-hold.it/120x120'
                className='rounded-full mt-10 w-32 h-32 grow-0 flex-shrink-0'
              />
              <BsArrowUp
                onClick={scrollIntoHeader}
                className='ml-auto text-9xl cursor-pointer hover:text-orange-500 transition-all active:text-orange-700 hover:underline'
              />
            </div>
          ) : (
            <h1 className='text-4xl font-bold uppercase max-w-[800px]'>
              Stay tuned for more...
            </h1>
          )}
        </div>
      </main>
      <motion.div
        className={contactClassNames}
        animate={{
          height: contactVisible ? '13rem' : '3rem',
        }}
      >
        <AnimatePresence mode='wait'>
          {contactVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='w-full flex flex-1 self-start'
            >
              <ul>
                <li>
                  <a
                    className='flex flex-row items-center transition-all hover:border-b border-b-orange-500 gap-1 my-1'
                    href='mailto:RodrigoSosa95@live.com.mx'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <MdEmail />
                    Mail
                  </a>
                </li>
                <li>
                  <a
                    className='flex flex-row items-center transition-all hover:border-b border-b-orange-500 gap-1 my-1'
                    href='https://www.linkedin.com/in/rodrigo-sosa-534235120/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <BsLinkedin />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className='flex flex-row items-center transition-all hover:border-b border-b-orange-500 gap-1 my-1'
                    href='https://github.com/RodrigoSosa95'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <BsGithub />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className='flex flex-row items-center transition-all hover:border-b border-b-orange-500 gap-1 my-1'
                    href='https://twitter.com/risp23'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <BsTwitter />
                    Twitter
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className='flex justify-end cursor-pointer self-end pointer-events-auto transition-all hover:border-b hover:border-orange-500'
          onClick={toggleContact}
        >
          <span className='w-40 text-center'>Contact Me</span>
        </div>
      </motion.div>
    </div>
  )
}
