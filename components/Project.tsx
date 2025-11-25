import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div className='flex flex-col w-full mt-24'>
        <h2 id='projects' className='font-bold text-lg tracking-widest text-white uppercase mb-10'>Projects</h2>
        <div className='flex flex-col w-full'>
            <div className='flex items-start gap-8 max-md:flex-col max-md:items-center'>
                <div className='rounded-lg w-full max-w-[640px] border border-[#D3D3D3]/50 p-3 sm:p-5 flex flex-col gap-5'>
                  <Link target='_blank' aria-label='See more about philip&apos;s website' href="https://pkw.finance/">
                    <Image src="/philipswebsite.png" alt="project screenshot" loading='lazy' width={600} height={380} className='rounded-md object-cover w-full h-auto text-transparent'/> 
                  </Link>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-white text-xl tracking-widest'>PKW.FINANACE</p>
                    <p className='text-gray-400 mt-3'>
                        <span className='text-white'>PKW.FINANCE</span> is a professional website offering outsourced accounting and finance services.
                    </p>
                    <div className='grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5'>
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300'>
                           <Image src="/react-icon.svg" alt='react icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>React</p>
                        </div> 
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300'>
                           <Image src="/typescript-icon.svg" alt='typescript icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Typescript</p>
                        </div>
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-400/20 text-blue-300'>
                           <Image src="/tailwind-icon.svg" alt='tailwind icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Tailwind</p>
                        </div>
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-white/20 text-white'>
                           <Image src="/shadcn-icon.svg" alt='shadcnicon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Shadcn</p>
                        </div>
                    </div>
                    <div className='flex items-center flex-wrap gap-3 mt-4 w-full'>
                        <Link target='_blank' className='w-full sm:w-auto uppercase text-xs whitespace-nowrap transition-all rounded-full font-bold text-emerald-300 hover:text-gray-900 hover:bg-emerald-300 bg-transparent border border-emerald-300 flex items-center justify-center px-4 py-2 gap-2' href="https://pkw.finance/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17 17 7"/>
                          <path d="M7 7h10v10"/>
                        </svg>
                        Live preview
                        </Link>
                        <Link target='_blank' className='w-full sm:w-auto uppercase text-xs whitespace-nowrap transition-all rounded-full font-bold text-white hover:text-gray-800 hover:bg-white bg-transparent border border-white flex items-center justify-center px-4 py-2 gap-2' href="https://github.com/DonaldKisaka/PKW-corporate">
                        <Image src="/github-icon.svg" loading="lazy" alt="GitHub" width={20} height={20} className="text-transparent"/>
                        Source code
                        </Link>
                    </div>
                  </div>
                </div>
            </div>

            <div className='flex items-start gap-8 mt-10 max-md:flex-col max-md:items-center'>
                <div className='rounded-lg w-full max-w-[640px] border border-[#D3D3D3]/50 p-3 sm:p-5 flex flex-col gap-5'>
                  <Link target='_blank' aria-label='See more about philip&apos;s website' href="https://food-waste-management-system-six.vercel.app/">
                    <Image src="/foodsystem.png" alt="project screenshot" loading='lazy' width={600} height={380} className='rounded-md object-cover w-full h-auto text-transparent'/> 
                  </Link>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-white text-xl tracking-widest'>FOOD MANAGEMENT SYSTEM</p>
                    <p className='text-gray-400 mt-3'>
                        <span className='text-white'>FOOD MANAGEMENT SYSTEM</span> is a platform that helps manage food waste and reduce food waste.
                    </p>
                    <div className='grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5'>
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300'>
                           <Image src="/next-icon.svg" alt='nextjs icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>NextJs</p>
                        </div> 
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300'>
                           <Image src="/java1.png" alt='java icon' loading='lazy' width={25} height={25}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Java</p>
                        </div> 
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300'>
                           <Image src="/docker.png" alt='docker icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Docker</p>
                        </div> 
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300'>
                           <Image src="/springboot.svg" alt='springboot icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Springboot</p>
                        </div> 
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300'>
                           <Image src="/typescript-icon.svg" alt='typescript icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Typescript</p>
                        </div>
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-400/20 text-blue-300'>
                           <Image src="/tailwind-icon.svg" alt='tailwind icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Tailwind</p>
                        </div>
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-white/20 text-white'>
                           <Image src="/shadcn-icon.svg" alt='shadcnicon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Shadcn</p>
                        </div>
                    </div>
                    <div className='flex items-center flex-wrap gap-3 mt-4 w-full'>
                        <Link target='_blank' className='w-full sm:w-auto uppercase text-xs whitespace-nowrap transition-all rounded-full font-bold text-emerald-300 hover:text-gray-900 hover:bg-emerald-300 bg-transparent border border-emerald-300 flex items-center justify-center px-4 py-2 gap-2' href="https://food-waste-management-system-six.vercel.app/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17 17 7"/>
                          <path d="M7 7h10v10"/>
                        </svg>
                        Live preview
                        </Link>
                        <Link target='_blank' className='w-full sm:w-auto uppercase text-xs whitespace-nowrap transition-all rounded-full font-bold text-white hover:text-gray-800 hover:bg-white bg-transparent border border-white flex items-center justify-center px-4 py-2 gap-2' href="https://github.com/DonKisaka/Food-waste-management-system">
                        <Image src="/github-icon.svg" loading="lazy" alt="GitHub" width={20} height={20} className="text-transparent"/>
                        Source code
                        </Link>
                    </div>
                  </div>
                </div>
        </div>

            <div className='flex items-start gap-8 mt-10 max-md:flex-col max-md:items-center'>
                <div className='rounded-lg w-full max-w-[640px] border border-[#D3D3D3]/50 p-3 sm:p-5 flex flex-col gap-5'>
                  <Link target='_blank' aria-label='Read more about City Break Manager API' href="https://github.com/DonKisaka/City-Break-Manager#readme">
                    <div className='rounded-md w-full h-[220px] bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#030712] border border-white/10 p-6 flex flex-col justify-between'>
                        <div className='flex flex-col gap-2'>
                            <span className='text-xs uppercase tracking-[0.35em] text-emerald-300'>Backend API</span>
                            <p className='text-2xl font-extrabold text-white'>City Break Manager</p>
                        </div>
                        <p className='text-sm text-gray-300'>Spring Boot · Secure travel management REST API</p>
                    </div>
                  </Link>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-white text-xl tracking-widest'>City Break Manager</p>
                    <p className='text-gray-400 mt-3'>
                        <span className='text-white'>City Break Manager</span> is a Spring Boot + PostgreSQL service for logging cities, planning trips, and protecting user data with JWT-secured endpoints.
                    </p>
                    <div className='grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5'>
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-green-500/20 text-emerald-300 text-xs font-medium whitespace-nowrap'>
                           Spring Boot
                        </div> 
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-blue-500/20 text-blue-200 text-xs font-medium whitespace-nowrap'>
                           PostgreSQL
                        </div>
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-sky-500/20 text-sky-200 text-xs font-medium whitespace-nowrap'>
                           Docker
                        </div>
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-white/20 text-white text-xs font-medium whitespace-nowrap'>
                           JWT Auth
                        </div>
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-orange-500/20 text-orange-200 text-xs font-medium whitespace-nowrap'>
                           Maven
                        </div>
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-purple-500/20 text-purple-100 text-xs font-medium whitespace-nowrap'>
                           Supabase
                        </div>
                    </div>
                    <div className='flex items-center flex-wrap gap-3 mt-4 w-full'>
                        <Link target='_blank' className='w-full sm:w-auto uppercase text-xs whitespace-nowrap transition-all rounded-full font-bold text-emerald-300 hover:text-gray-900 hover:bg-emerald-300 bg-transparent border border-emerald-300 flex items-center justify-center px-4 py-2 gap-2' href="https://github.com/DonKisaka/City-Break-Manager#readme">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17 17 7"/>
                          <path d="M7 7h10v10"/>
                        </svg>
                        API docs
                        </Link>
                        <Link target='_blank' className='w-full sm:w-auto uppercase text-xs whitespace-nowrap transition-all rounded-full font-bold text-white hover:text-gray-800 hover:bg-white bg-transparent border border-white flex items-center justify-center px-4 py-2 gap-2' href="https://github.com/DonKisaka/City-Break-Manager">
                        <Image src="/github-icon.svg" loading="lazy" alt="GitHub" width={20} height={20} className="text-transparent"/>
                        Source code
                        </Link>
                    </div>
                  </div>
                </div>
            </div>

            <div className='flex items-start gap-8 mt-10 max-md:flex-col max-md:items-center'>
                <div className='rounded-lg w-full max-w-[640px] border border-[#D3D3D3]/50 p-3 sm:p-5 flex flex-col gap-5'>
                  <Link target='_blank' aria-label='Read more about Influencer Sponsorship API' href="https://github.com/DonKisaka/Influencer-Sponsorship-Application#readme">
                    <div className='rounded-md w-full h-[220px] bg-gradient-to-br from-[#201c2c] via-[#120c1b] to-[#05020b] border border-white/10 p-6 flex flex-col justify-between'>
                        <div className='flex flex-col gap-2'>
                            <span className='text-xs uppercase tracking-[0.35em] text-pink-300'>Backend API</span>
                            <p className='text-2xl font-extrabold text-white'>Influencer Sponsorship</p>
                        </div>
                        <p className='text-sm text-gray-300'>Spring Boot · JWT-protected brand ↔ influencer workflows</p>
                    </div>
                  </Link>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-white text-xl tracking-widest'>Influencer Sponsorship Application</p>
                    <p className='text-gray-400 mt-3'>
                        A RESTful Spring Boot service that matches brands with influencers, tracks sponsorship offers end-to-end, and secures every request with JWT-authenticated endpoints.
                    </p>
                    <div className='grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5'>
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-pink-500/20 text-pink-200 text-xs font-medium whitespace-nowrap'>
                           Spring Boot
                        </div> 
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-blue-500/20 text-blue-200 text-xs font-medium whitespace-nowrap'>
                           PostgreSQL
                        </div>
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-sky-500/20 text-sky-200 text-xs font-medium whitespace-nowrap'>
                           Docker
                        </div>
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-white/20 text-white text-xs font-medium whitespace-nowrap'>
                           JWT Auth
                        </div>
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-orange-500/20 text-orange-200 text-xs font-medium whitespace-nowrap'>
                           Maven
                        </div>
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-purple-500/20 text-purple-100 text-xs font-medium whitespace-nowrap'>
                           Spring Security
                        </div>
                    </div>
                    <div className='flex items-center flex-wrap gap-3 mt-4 w-full'>
                        <Link target='_blank' className='w-full sm:w-auto uppercase text-xs whitespace-nowrap transition-all rounded-full font-bold text-pink-300 hover:text-gray-900 hover:bg-pink-300 bg-transparent border border-pink-300 flex items-center justify-center px-4 py-2 gap-2' href="https://github.com/DonKisaka/Influencer-Sponsorship-Application#readme">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17 17 7"/>
                          <path d="M7 7h10v10"/>
                        </svg>
                        API docs
                        </Link>
                        <Link target='_blank' className='w-full sm:w-auto uppercase text-xs whitespace-nowrap transition-all rounded-full font-bold text-white hover:text-gray-800 hover:bg-white bg-transparent border border-white flex items-center justify-center px-4 py-2 gap-2' href="https://github.com/DonKisaka/Influencer-Sponsorship-Application">
                        <Image src="/github-icon.svg" loading="lazy" alt="GitHub" width={20} height={20} className="text-transparent"/>
                        Source code
                        </Link>
                    </div>
                  </div>
                </div>
            </div>

            <div className='flex items-start gap-8 mt-10 max-md:flex-col max-md:items-center'>
                <div className='rounded-lg w-full max-w-[640px] border border-[#D3D3D3]/50 p-3 sm:p-5 flex flex-col gap-5'>
                  <Link target='_blank' aria-label='Read more about Music Streaming API' href="https://github.com/DonKisaka/Music-streaming-api#readme">
                    <div className='rounded-md w-full h-[220px] bg-gradient-to-br from-[#0f1c2d] via-[#071019] to-[#01060b] border border-white/10 p-6 flex flex-col justify-between'>
                        <div className='flex flex-col gap-2'>
                            <span className='text-xs uppercase tracking-[0.35em] text-sky-300'>Backend API</span>
                            <p className='text-2xl font-extrabold text-white'>Music Streaming API</p>
                        </div>
                        <p className='text-sm text-gray-300'>Spring Boot · Albums, artists, playlists, JWT auth</p>
                    </div>
                  </Link>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-white text-xl tracking-widest'>Music Streaming API</p>
                    <p className='text-gray-400 mt-3'>
                        Full-featured REST API for managing songs, albums, artists, and playlists with secure JWT sessions, pagination, and Docker-ready deployment.
                    </p>
                    <div className='grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5'>
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-sky-500/20 text-sky-200 text-xs font-medium whitespace-nowrap'>
                           Spring Boot
                        </div> 
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-blue-500/20 text-blue-200 text-xs font-medium whitespace-nowrap'>
                           PostgreSQL
                        </div>
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-sky-400/20 text-sky-100 text-xs font-medium whitespace-nowrap'>
                           Docker Compose
                        </div>
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-white/20 text-white text-xs font-medium whitespace-nowrap'>
                           JWT Auth
                        </div>
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-indigo-500/20 text-indigo-100 text-xs font-medium whitespace-nowrap'>
                           Spring Data JPA
                        </div>
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-purple-500/20 text-purple-100 text-xs font-medium whitespace-nowrap'>
                           Maven
                        </div>
                    </div>
                    <div className='flex items-center flex-wrap gap-3 mt-4 w-full'>
                        <Link target='_blank' className='w-full sm:w-auto uppercase text-xs whitespace-nowrap transition-all rounded-full font-bold text-sky-300 hover:text-gray-900 hover:bg-sky-300 bg-transparent border border-sky-300 flex items-center justify-center px-4 py-2 gap-2' href="https://github.com/DonKisaka/Music-streaming-api#readme">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17 17 7"/>
                          <path d="M7 7h10v10"/>
                        </svg>
                        API docs
                        </Link>
                        <Link target='_blank' className='w-full sm:w-auto uppercase text-xs whitespace-nowrap transition-all rounded-full font-bold text-white hover:text-gray-800 hover:bg-white bg-transparent border border-white flex items-center justify-center px-4 py-2 gap-2' href="https://github.com/DonKisaka/Music-streaming-api">
                        <Image src="/github-icon.svg" loading="lazy" alt="GitHub" width={20} height={20} className="text-transparent"/>
                        Source code
                        </Link>
                    </div>
                  </div>
                </div>
            </div>

            <div className='flex items-start gap-8 mt-10 max-md:flex-col max-md:items-center'>
                <div className='rounded-lg w-full max-w-[640px] border border-[#D3D3D3]/50 p-3 sm:p-5 flex flex-col gap-5'>
                  <Link target='_blank' aria-label='Read more about Sports Management API' href="https://github.com/DonKisaka/Sports-management-api#readme">
                    <div className='rounded-md w-full h-[220px] bg-gradient-to-br from-[#1c2d21] via-[#0c140d] to-[#020603] border border-white/10 p-6 flex flex-col justify-between'>
                        <div className='flex flex-col gap-2'>
                            <span className='text-xs uppercase tracking-[0.35em] text-emerald-300'>Backend API</span>
                            <p className='text-2xl font-extrabold text-white'>Sports Management API</p>
                        </div>
                        <p className='text-sm text-gray-300'>Spring Boot · Facilities, fields & booking workflows</p>
                    </div>
                  </Link>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-white text-xl tracking-widest'>Sports Management API</p>
                    <p className='text-gray-400 mt-3'>
                        Comprehensive REST API for managing sports facilities, field availability, and booking flows, optimized for Docker deployments and scalable Spring Boot services.
                    </p>
                    <div className='grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5'>
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-emerald-500/20 text-emerald-200 text-xs font-medium whitespace-nowrap'>
                           Spring Boot
                        </div> 
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-blue-500/20 text-blue-200 text-xs font-medium whitespace-nowrap'>
                           PostgreSQL
                        </div>
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-sky-500/20 text-sky-200 text-xs font-medium whitespace-nowrap'>
                           Docker
                        </div>
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-white/20 text-white text-xs font-medium whitespace-nowrap'>
                           JWT Auth
                        </div>
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-orange-500/20 text-orange-200 text-xs font-medium whitespace-nowrap'>
                           Maven
                        </div>
                        <div className='flex h-6 items-center justify-center px-4 rounded-full bg-teal-500/20 text-teal-100 text-xs font-medium whitespace-nowrap'>
                           Spring Data JPA
                        </div>
                    </div>
                    <div className='flex items-center flex-wrap gap-3 mt-4 w-full'>
                        <Link target='_blank' className='w-full sm:w-auto uppercase text-xs whitespace-nowrap transition-all rounded-full font-bold text-emerald-300 hover:text-gray-900 hover:bg-emerald-300 bg-transparent border border-emerald-300 flex items-center justify-center px-4 py-2 gap-2' href="https://github.com/DonKisaka/Sports-management-api#readme">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17 17 7"/>
                          <path d="M7 7h10v10"/>
                        </svg>
                        API docs
                        </Link>
                        <Link target='_blank' className='w-full sm:w-auto uppercase text-xs whitespace-nowrap transition-all rounded-full font-bold text-white hover:text-gray-800 hover:bg-white bg-transparent border border-white flex items-center justify-center px-4 py-2 gap-2' href="https://github.com/DonKisaka/Sports-management-api">
                        <Image src="/github-icon.svg" loading="lazy" alt="GitHub" width={20} height={20} className="text-transparent"/>
                        Source code
                        </Link>
                    </div>
                  </div>
                </div>
            </div>


            <div className='flex items-start gap-8 mt-10 max-md:flex-col max-md:items-center'>
                <div className='rounded-lg w-full max-w-[640px] border border-[#D3D3D3]/50 p-3 sm:p-5 flex flex-col gap-5'>
                  <Link target='_blank' aria-label='See more about philip&apos;s website' href="https://furniture-app-utbp.vercel.app/">
                    <Image src="/RenoTzy.png" alt="project screenshot" loading='lazy' width={600} height={380} className='rounded-md object-cover w-full h-auto text-transparent'/> 
                  </Link>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-white text-xl tracking-widest'>RENOTZY</p>
                    <p className='text-gray-400 mt-3'>
                        <span className='text-white'>RENOTZY</span> is a modern platform designed to enhance your home experience by integrating smart furniture solutions.
                    </p>
                    <div className='grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5'>
                    <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-white/20 text-white'>
                           <Image src="/next-icon.svg" alt='nextjs icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Next Js</p>
                        </div>
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300'>
                           <Image src="/react-icon.svg" alt='react icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>React</p>
                        </div> 
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300'>
                           <Image src="/typescript-icon.svg" alt='typescript icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Typescript</p>
                        </div>
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-400/20 text-blue-300'>
                           <Image src="/tailwind-icon.svg" alt='tailwind icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Tailwind</p>
                        </div>
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-white/20 text-white'>
                           <Image src="/shadcn-icon.svg" alt='shadcnicon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Shadcn</p>
                        </div>
                    </div>
                    <div className='flex items-center flex-wrap gap-3 mt-4 w-full'>
                        <Link target='_blank' className='w-full sm:w-auto uppercase text-xs whitespace-nowrap transition-all rounded-full font-bold text-emerald-300 hover:text-gray-900 hover:bg-emerald-300 bg-transparent border border-emerald-300 flex items-center justify-center px-4 py-2 gap-2' href="https://furniture-app-utbp.vercel.app/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17 17 7"/>
                          <path d="M7 7h10v10"/>
                        </svg>
                        Live preview
                        </Link>
                        <Link target='_blank' className='w-full sm:w-auto uppercase text-xs whitespace-nowrap transition-all rounded-full font-bold text-white hover:text-gray-800 hover:bg-white bg-transparent border border-white flex items-center justify-center px-4 py-2 gap-2' href="https://github.com/DonaldKisaka/furniture-app">
                        <Image src="/github-icon.svg" loading="lazy" alt="GitHub" width={20} height={20} className="text-transparent"/>
                        Source code
                        </Link>
                    </div>
                  </div>
                </div>
            </div>

            <div className='flex items-start gap-8 mt-10 max-md:flex-col max-md:items-center'>
                <div className='rounded-lg w-full max-w-[640px] border border-[#D3D3D3]/50 p-3 sm:p-5 flex flex-col gap-5'>
                  <Link target='_blank' aria-label='See more about philip&apos;s website' href="https://insyc.vercel.app/">
                    <Image src="/Insync.png" alt="project screenshot" loading='lazy' width={600} height={380} className='rounded-md object-cover w-full h-auto text-transparent'/> 
                  </Link>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-white text-xl tracking-widest'>INSYNC</p>
                    <p className='text-gray-400 mt-3'>
                        <span className='text-white'>INSYNC</span> InSync is a digital marketing agency that provides a variety of digital solutions that include responsive web design, app development, digital marketing strategies, and more.
                    </p>
                    <div className='grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5'>
                    <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-white/20 text-white'>
                           <Image src="/next-icon.svg" alt='nextjs icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Next Js</p>
                        </div>
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300'>
                           <Image src="/react-icon.svg" alt='react icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>React</p>
                        </div> 
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300'>
                           <Image src="/typescript-icon.svg" alt='typescript icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Typescript</p>
                        </div>
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-400/20 text-blue-300'>
                           <Image src="/tailwind-icon.svg" alt='tailwind icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Tailwind</p>
                        </div>
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-white/20 text-white'>
                           <Image src="/shadcn-icon.svg" alt='shadcnicon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Shadcn</p>
                        </div>
                    </div>
                    <div className='flex items-center flex-wrap gap-3 mt-4 w-full'>
                        <Link target='_blank' className='w-full sm:w-auto uppercase text-xs whitespace-nowrap transition-all rounded-full font-bold text-emerald-300 hover:text-gray-900 hover:bg-emerald-300 bg-transparent border border-emerald-300 flex items-center justify-center px-4 py-2 gap-2' href="https://insyc.vercel.app/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17 17 7"/>
                          <path d="M7 7h10v10"/>
                        </svg>
                        Live preview
                        </Link>
                        <Link target='_blank' className='w-full sm:w-auto uppercase text-xs whitespace-nowrap transition-all rounded-full font-bold text-white hover:text-gray-800 hover:bg-white bg-transparent border border-white flex items-center justify-center px-4 py-2 gap-2' href="https://github.com/DonaldKisaka/Insyc">
                        <Image src="/github-icon.svg" loading="lazy" alt="GitHub" width={20} height={20} className="text-transparent"/>                
                        Source code
                        </Link>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project


