import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import './Experience.css'

export const Experience = ({
  setNavTitle,
  setAnimateAboutBGClass,
  setNavTitleColor,
  setNavBarColor,
  setNavMainMenuBtnColor,
  setNavSocialColor
}) => {
  // Refs for section
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.5
  })

  // Refs for each block
  const { ref: block0Ref, inView: block0InView } = useInView({
    threshold: 0.9
  })
  const { ref: block1Ref, inView: block1InView } = useInView({
    threshold: 0.9
  })
  const { ref: block2Ref, inView: block2InView } = useInView({
    threshold: 0.9
  })

  // Refs for each block: white shadow
  const { ref: block0ShadowRef, inView: blockShadow0InView } = useInView({
    threshold: 0.9
  })
  const { ref: block1ShadowRef, inView: blockShadow1InView } = useInView({
    threshold: 0.9
  })
  const { ref: block2ShadowRef, inView: blockShadow2InView } = useInView({
    threshold: 0.9
  })

  // Combination of both references
  const setBlock0Refs = (node) => {
    block0Ref(node)
    block0ShadowRef(node)
  }
  const setBlock1Refs = (node) => {
    block1Ref(node)
    block1ShadowRef(node)
  }
  const setBlock2Refs = (node) => {
    block2Ref(node)
    block2ShadowRef(node)
  }

  // Booleans for triggering animation per block
  const [block0Bool, setBlock0Bool] = useState(false)
  const [block1Bool, setBlock1Bool] = useState(false)
  const [block2Bool, setBlock2Bool] = useState(false)

  // Booleans for inner white shadow animation per block
  const [block0Shadow, setBlock0Shadow] = useState('opacity-0')
  const [block1Shadow, setBlock1Shadow] = useState('opacity-0')
  const [block2Shadow, setBlock2Shadow] = useState('opacity-0')

  // Booleans for focus reading animation per block
  const [block0Focus, setBlock0Focus] = useState('opacity-100')
  const [block1Focus, setBlock1Focus] = useState('opacity-100')
  const [block2Focus, setBlock2Focus] = useState('opacity-100')

  // States for icon change during first triggered animation per block
  // Default:  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  // Checked:  <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
  const [block0IconActive, setBlock0IconActive] = useState(false)
  const [block1IconActive, setBlock1IconActive] = useState(false)
  const [block2IconActive, setBlock2IconActive] = useState(false)

  // Section-level styles and effects
  useEffect(() => {
    if (sectionInView) {
      setNavTitleColor('text-[#F0F0F0]')
      setNavBarColor('#1A1A1A')
      setNavMainMenuBtnColor('bg-white')
      setNavSocialColor('')

      setNavTitle('02 Experience')
      setAnimateAboutBGClass('animate-scale-out-bg')
    }
  }, [
    sectionInView,
    setAnimateAboutBGClass,
    setNavBarColor,
    setNavMainMenuBtnColor,
    setNavSocialColor,
    setNavTitle,
    setNavTitleColor
  ])

  // For slide-in and slide-out of components each block
  useEffect(() => {
    if (block0InView && !block0Bool) {
      setBlock0IconActive(true)
      setBlock0Bool(true)
    }

    if (block1InView && !block1Bool) {
      setBlock1Bool(true)
      setBlock1IconActive(true)
    }

    if (block2InView && !block2Bool) {
      setBlock2Bool(true)
      setBlock2IconActive(true)
    }
  }, [
    block0InView,
    block0Bool,
    block1InView,
    block1Bool,
    block2InView,
    block2Bool
  ])

  // For focus block (white shadow) animation
  useEffect(() => {
    if (blockShadow0InView && block0Bool) {
      // Reset others shadow
      setBlock1Shadow('opacity-0')
      setBlock2Shadow('opacity-0')

      // Show this one and focus
      setBlock0Focus('opacity-100')
      setBlock0Shadow('opacity-100')

      // Unfocus other blocks
      setBlock1Focus('opacity-10')
      setBlock2Focus('opacity-10')
    } else if (blockShadow1InView && block1Bool) {
      setBlock0Shadow('opacity-0')
      setBlock2Shadow('opacity-0')

      setBlock1Focus('opacity-100')
      setBlock1Shadow('opacity-100')

      setBlock0Focus('opacity-10')
      setBlock2Focus('opacity-10')
    } else if (blockShadow2InView && block2Bool) {
      setBlock0Shadow('opacity-0')
      setBlock1Shadow('opacity-0')

      setBlock2Focus('opacity-100')
      setBlock2Shadow('opacity-100')

      setBlock0Focus('opacity-10')
      setBlock1Focus('opacity-10')
    } else {
      setBlock0Focus('opacity-10')
      setBlock1Focus('opacity-10')
      setBlock2Focus('opacity-10')
      setBlock0Shadow('opacity-0')
      setBlock1Shadow('opacity-0')
      setBlock2Shadow('opacity-0')
    }
  }, [
    blockShadow0InView,
    blockShadow1InView,
    blockShadow2InView,
    block0Bool,
    block1Bool,
    block2Bool
  ])

  return (
    <section
      ref={sectionRef}
      id='experience'
      className='relative w-dvw flex justify-center items-center bg-[#1A1A1A]'
    >
      <div
        className='absolute h-full w-full blur-[3px] 3xs:bg-local sm:bg-fixed bg-no-repeat bg-cover'
        style={{ backgroundImage: 'url(/mainMenuBG_Invert_minimal.png)' }}
      />
      {/* <div className="fixed bg-white/50 top-1/2 left-0 w-full h-1 pointer-events-none z-10" /> to view the center of the screen */}
      <div className='relative h-full w-full flex flex-col'>
        <div
          ref={setBlock0Refs}
          className={`relative h-full w-full flex flex-row justify-center items-center duration-1000 ${block0Focus}`}
        >
          <div
            className={`absolute h-full w-full duration-2000 ${block0Bool ? 'opacity-0' : 'opacity-100'}`}
          >
            <div
              className='flex size-full animate-pulse items-center justify-center'
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '100%',
                background:
                  'linear-gradient(to right, rgba(255,255,255,0.2), transparent)',
                pointerEvents: 'none'
              }}
            >
              <svg
                className='w-50 h-50 text-gray-800 dark:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill={`${block0IconActive ? 'currentColor' : 'none'}`}
                viewBox='0 0 24 24'
              >
                {block0IconActive
                  ? (
                    <path
                      fillRule='evenodd'
                      d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z'
                      clipRule='evenodd'
                    />
                    )
                  : (
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                    />
                    )}
              </svg>
            </div>
          </div>
          <div
            className='relative h-full w-full flex flex-col justify-center text-[#F0F0F0] '
          >
            <div
              id='block-0'
              className={`m-10  ${block0Bool ? 'animate-block-slide-out opacity-100' : 'animate-block-slide-in opacity-0'}`}
            >
              <p className='md:text-6xl sm:text-4xl 3xs:text-2xl font-sans font-bold '>
                Research Assistant
              </p>
              <a
                href='https://adric.dlsu.edu.ph/index.php/technology-education-entertainment-empathy-design-te3d-house/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <p className='md:text-2xl sm:text-xl 3xs:text-lg font-sans italic animate-pulse pt-3'>
                  De La Salle University - TE3D House
                </p>
              </a>
              <p className='md:text-xl sm:text-lg 3xs:text-sm font-sans italic pt-2'>
                2024
              </p>
              <p className='md:text-xl sm:text-lg 3xs:text-sm font-bold font-sans italic mt-4'>
                Key responsibilities
              </p>
              <ul className=' md:text-xl sm:text-lg 3xs:text-sm font-sans italic pl-5 list-disc'>
                <li>Improve the chatbot dialogues and conversation flow</li>
                <li>
                  Perform stress testing, identify bugs, and implement fixes
                </li>
                <li>Improve the web application for mobile compatibility</li>
              </ul>
            </div>
          </div>
          <div className='relative h-full w-[50%] lg:flex justify-end m-10 font-sans font-bold text-[#F0F0F0] 3xs:hidden '>
            <p
              className={`text-8xl ${block0Bool ? 'animate-block-slide-out opacity-100' : 'animate-block-slide-in opacity-0'}`}
            >
              {' '}
              2024{' '}
            </p>
          </div>
          <div
            ref={block0ShadowRef}
            className={`${block0Shadow} duration-500`}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '100%',
              background: 'linear-gradient(rgba(255,255,255,0.2), transparent)',
              pointerEvents: 'none'
            }}
          />
        </div>
        <div
          ref={setBlock1Refs}
          className={`relative h-full w-full flex flex-row justify-center items-center duration-1000 ${block1Focus}`}
        >
          <div
            className={`absolute h-full w-full duration-2000 ${block1Bool ? 'opacity-0' : 'opacity-100'}`}
          >
            <div
              className='flex size-full animate-pulse items-center justify-center'
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '100%',
                background:
                  'linear-gradient(to right, rgba(255,255,255,0.2), transparent)',
                pointerEvents: 'none'
              }}
            >
              <svg
                className='w-50 h-50 text-gray-800 dark:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill={`${block1IconActive ? 'currentColor' : 'none'}`}
                viewBox='0 0 24 24'
              >
                {block1IconActive
                  ? (
                    <path
                      fillRule='evenodd'
                      d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z'
                      clipRule='evenodd'
                    />
                    )
                  : (
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                    />
                    )}
              </svg>
            </div>
          </div>
          <div
            className='relative h-full w-full flex flex-col justify-center text-[#F0F0F0] '
          >
            <div
              id='block-0'
              className={`m-10 ${block1Bool ? 'animate-block-slide-out opacity-100' : 'animate-block-slide-in opacity-0'}`}
            >
              <p className='md:text-6xl sm:text-4xl 3xs:text-2xl font-sans font-bold'>
                V.P. - Publicity and Creatives
              </p>
              <a
                href='https://www.facebook.com/LSCSLagunaCampus'
                target='_blank'
                rel='noopener noreferrer'
              >
                <p className='md:text-2xl sm:text-xl 3xs:text-lg font-sans italic animate-pulse pt-3'>
                  La Salle Computer Society (Laguna)
                </p>
              </a>
              <p className='md:text-xl sm:text-lg 3xs:text-sm font-sans italic pt-2'>
                2021-2024
              </p>
              <p className='md:text-xl sm:text-lg 3xs:text-sm font-bold font-sans italic mt-4'>
                Key responsibilities
              </p>
              <ul className=' md:text-xl sm:text-lg 3xs:text-sm font-sans italic pl-5 list-disc'>
                <li>Project head activities</li>
                <li>Supervise promotional material production</li>
                <li>Execute marketing strategies</li>
                <li>Manage social media platform</li>
              </ul>
            </div>
          </div>
          <div className='relative h-full w-full lg:flex justify-end m-10 font-sans font-bold text-[#F0F0F0] 3xs:hidden '>
            <div
              className={`flex flex-col items-center ${block1Bool ? 'animate-block-slide-out opacity-100' : 'animate-block-slide-in opacity-0'}`}
            >
              <p className='text-8xl'>2024</p>
              <p className='text-8xl'>&uarr;</p>
              <p className='text-8xl'>2021</p>
            </div>
          </div>
          <div
            className={`${block1Shadow} duration-500`}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '100%',
              background: 'linear-gradient(rgba(255,255,255,0.2), transparent)',
              pointerEvents: 'none'
            }}
          />
        </div>
        <div
          ref={setBlock2Refs}
          className={`relative h-full w-full flex flex-row justify-center items-center duration-1000 ${block2Focus}`}
        >
          <div
            className={`absolute h-full w-full duration-2000 ${block2Bool ? 'opacity-0' : 'opacity-100'}`}
          >
            <div
              className='flex size-full animate-pulse items-center justify-center'
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '100%',
                background:
                  'linear-gradient(to right, rgba(255,255,255,0.2), transparent)',
                pointerEvents: 'none'
              }}
            >
              <svg
                className='w-50 h-50 text-gray-800 dark:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill={`${block2IconActive ? 'currentColor' : 'none'}`}
                viewBox='0 0 24 24'
              >
                {block2IconActive
                  ? (
                    <path
                      fillRule='evenodd'
                      d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z'
                      clipRule='evenodd'
                    />
                    )
                  : (
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                    />
                    )}
              </svg>
            </div>
          </div>
          <div
            className='relative h-full w-full flex flex-col justify-center text-[#F0F0F0] '
          >
            <div
              id='block-0'
              className={`m-10 ${block2Bool ? 'animate-block-slide-out opacity-100' : 'animate-block-slide-in opacity-0'}`}
            >
              <p className='md:text-6xl sm:text-4xl 3xs:text-2xl font-sans font-bold'>
                Chairperson for Creatives
              </p>
              <a
                href='https://www.facebook.com/LCSGDLSU'
                target='_blank'
                rel='noopener noreferrer'
              >
                <p className='md:text-2xl sm:text-xl 3xs:text-lg font-sans italic animate-pulse pt-3'>
                  DLSU Laguna Campus Student Government
                </p>
              </a>
              <p className='md:text-xl sm:text-lg 3xs:text-sm font-sans italic pt-2'>
                2021
              </p>
              <p className='md:text-xl sm:text-lg 3xs:text-sm font-bold font-sans italic mt-4'>
                Key responsibilities
              </p>
              <ul className=' md:text-xl sm:text-lg 3xs:text-sm font-sans italic pl-5 list-disc'>
                <li>Rebrand social media design</li>
                <li>Design publication templates</li>
                <li>Supervise production of promo materials</li>
              </ul>
            </div>
          </div>
          <div className='relative h-full w-[50%] lg:flex justify-end m-10 font-sans font-bold text-[#F0F0F0] 3xs:hidden '>
            <p
              className={`text-8xl ${block2Bool ? 'animate-block-slide-out opacity-100' : 'animate-block-slide-in opacity-0'}`}
            >
              {' '}
              2021{' '}
            </p>
          </div>
          <div
            ref={block2ShadowRef}
            className={`${block2Shadow} duration-500`}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '100%',
              background: 'linear-gradient(rgba(255,255,255,0.2), transparent)',
              pointerEvents: 'none'
            }}
          />
        </div>
      </div>
    </section>
  )
}
