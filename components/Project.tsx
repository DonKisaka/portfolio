import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

/* ── Shared button styles ── */
const githubBtn = 'w-full sm:w-auto uppercase text-xs whitespace-nowrap transition-all rounded-full font-bold text-white hover:text-gray-800 hover:bg-white bg-transparent border border-white flex items-center justify-center px-4 py-2 gap-2'

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7"/><path d="M7 7h10v10"/>
  </svg>
)

const GithubIcon = () => (
  <Image src="/github-icon.svg" loading="lazy" alt="GitHub" width={20} height={20} className="text-transparent" />
)

/* ── Section label ── */
const SectionLabel = ({ label }: { label: string }) => (
  <p className="text-xs uppercase tracking-[0.3em] text-[#D3D3D3]/50 mb-6 mt-2">{label}</p>
)

/* ── Gradient banner (for projects without a screenshot) ── */
interface BannerProps {
  href: string
  gradient: string
  accentColor: string
  category: string
  title: string
  subtitle: string
}
const GradientBanner = ({ href, gradient, accentColor, category, title, subtitle }: BannerProps) => (
  <Link target="_blank" aria-label={`Read more about ${title}`} href={href}>
    <div className={`rounded-md w-full h-[220px] ${gradient} border border-white/10 p-6 flex flex-col justify-between`}>
      <div className="flex flex-col gap-2">
        <span className={`text-xs uppercase tracking-[0.35em] text-${accentColor}-300`}>{category}</span>
        <p className="text-2xl font-extrabold text-white">{title}</p>
      </div>
      <p className="text-sm text-gray-300">{subtitle}</p>
    </div>
  </Link>
)

/* ── Text pill ── */
const Pill = ({ label, color }: { label: string; color: string }) => (
  <div className={`flex h-6 items-center justify-center px-4 rounded-full bg-${color}-500/20 text-${color}-200 text-xs font-medium whitespace-nowrap`}>
    {label}
  </div>
)

/* ── Icon pill ── */
const IconPill = ({ src, alt, label, bg, text }: { src: string; alt: string; label: string; bg: string; text: string }) => (
  <div className={`flex h-6 items-center justify-center gap-1.5 px-4 rounded-full ${bg} ${text}`}>
    <Image src={src} alt={alt} loading="lazy" width={20} height={20} className="text-transparent" />
    <p className="text-xs whitespace-nowrap">{label}</p>
  </div>
)

/* ── Primary button with dynamic color ── */
const PrimaryBtn = ({ color, href, children }: { color: string; href: string; children: React.ReactNode }) => (
  <Link target="_blank"
    className={`w-full sm:w-auto uppercase text-xs whitespace-nowrap transition-all rounded-full font-bold text-${color}-300 hover:text-gray-900 hover:bg-${color}-300 bg-transparent border border-${color}-300 flex items-center justify-center px-4 py-2 gap-2`}
    href={href}>
    {children}
  </Link>
)

/* ═══════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════ */
const Project = () => {
  return (
    <div className="flex flex-col w-full mt-24">
      <h2 id="projects" className="font-bold text-lg tracking-widest text-white uppercase mb-10">
        Projects
      </h2>

      <div className="flex flex-col w-full">

        {/* ══════════════════════════
             SPRING AI & LLM
        ══════════════════════════ */}
        <SectionLabel label=" Spring AI & LLM" />

        <Link
  href="/spring-ai"
  className="inline-flex items-center gap-2 text-xs text-emerald-300
    border border-emerald-300/30 rounded-full px-4 py-1.5 mb-6
    hover:bg-emerald-300/10 transition-all"
>
  View dedicated Spring AI page
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7"/><path d="M7 7h10v10"/>
  </svg>
</Link>

        {/* ══════════════════════════
            🌐 FULL-STACK
        ══════════════════════════ */}
        <div className="mt-16">
          <SectionLabel label="🌐 Full-Stack" />
        </div>

        {/* Food Management System */}
        <div className="flex items-start gap-8 max-md:flex-col max-md:items-center">
          <div className="rounded-lg w-full max-w-[640px] border border-[#D3D3D3]/50 p-3 sm:p-5 flex flex-col gap-5">
            <Link target="_blank" href="https://food-waste-management-system-six.vercel.app/">
              <Image src="/foodsystem.png" alt="Food Management System" loading="lazy" width={600} height={380} className="rounded-md object-cover w-full h-auto text-transparent" />
            </Link>
            <div className="flex flex-col">
              <p className="font-semibold text-white text-xl tracking-widest">FOOD MANAGEMENT SYSTEM</p>
              <p className="text-gray-400 mt-3">
                Full-stack platform for tracking and reducing food waste. Built with a{' '}
                <span className="text-white">Spring Boot backend</span> serving a REST API and a
                Next.js frontend, containerised with Docker for easy deployment.
              </p>
              <div className="grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5">
                <IconPill src="/next-icon.svg" alt="nextjs" label="Next.js" bg="bg-white/10" text="text-white" />
                <IconPill src="/java1.png" alt="java" label="Java" bg="bg-blue-600/20" text="text-blue-300" />
                <IconPill src="/springboot.svg" alt="springboot" label="Spring Boot" bg="bg-green-600/20" text="text-green-300" />
                <IconPill src="/docker.png" alt="docker" label="Docker" bg="bg-sky-600/20" text="text-sky-300" />
                <IconPill src="/typescript-icon.svg" alt="typescript" label="TypeScript" bg="bg-blue-500/20" text="text-blue-300" />
                <IconPill src="/tailwind-icon.svg" alt="tailwind" label="Tailwind" bg="bg-blue-400/20" text="text-blue-300" />
              </div>
              <div className="flex items-center flex-wrap gap-3 mt-4 w-full">
                <PrimaryBtn color="emerald" href="https://food-waste-management-system-six.vercel.app/">
                  <ArrowIcon /> Live preview
                </PrimaryBtn>
                <Link target="_blank" className={githubBtn} href="https://github.com/DonKisaka/Food-waste-management-system">
                  <GithubIcon /> Source code
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* PKW Finance */}
        <div className="flex items-start gap-8 mt-10 max-md:flex-col max-md:items-center">
          <div className="rounded-lg w-full max-w-[640px] border border-[#D3D3D3]/50 p-3 sm:p-5 flex flex-col gap-5">
            <Link target="_blank" href="https://pkw.finance/">
              <Image src="/philipswebsite.png" alt="PKW Finance" loading="lazy" width={600} height={380} className="rounded-md object-cover w-full h-auto text-transparent" />
            </Link>
            <div className="flex flex-col">
              <p className="font-semibold text-white text-xl tracking-widest">PKW.FINANCE</p>
              <p className="text-gray-400 mt-3">
                Professional website for an outsourced{' '}
                <span className="text-white">accounting and finance firm</span>. Built with React,
                TypeScript, Tailwind, and Shadcn UI — clean, fast, and deployed on Vercel.
              </p>
              <div className="grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5">
                <IconPill src="/react-icon.svg" alt="react" label="React" bg="bg-blue-600/20" text="text-blue-300" />
                <IconPill src="/typescript-icon.svg" alt="typescript" label="TypeScript" bg="bg-blue-500/20" text="text-blue-300" />
                <IconPill src="/tailwind-icon.svg" alt="tailwind" label="Tailwind" bg="bg-blue-400/20" text="text-blue-300" />
                <IconPill src="/shadcn-icon.svg" alt="shadcn" label="Shadcn" bg="bg-white/20" text="text-white" />
              </div>
              <div className="flex items-center flex-wrap gap-3 mt-4 w-full">
                <PrimaryBtn color="emerald" href="https://pkw.finance/">
                  <ArrowIcon /> Live preview
                </PrimaryBtn>
                <Link target="_blank" className={githubBtn} href="https://github.com/DonKisaka/PKW-Corporate">
                  <GithubIcon /> Source code
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════
            ⚙️ BACKEND APIs
        ══════════════════════════ */}
        <div className="mt-16">
          <SectionLabel label="⚙️ Backend APIs" />
        </div>

        {/* City Break Manager */}
        <div className="flex items-start gap-8 max-md:flex-col max-md:items-center">
          <div className="rounded-lg w-full max-w-[640px] border border-[#D3D3D3]/50 p-3 sm:p-5 flex flex-col gap-5">
            <GradientBanner
              href="https://github.com/DonKisaka/City-Break-Manager#readme"
              gradient="bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#030712]"
              accentColor="emerald"
              category="Backend API"
              title="City Break Manager"
              subtitle="Spring Boot · Secure travel management REST API"
            />
            <div className="flex flex-col">
              <p className="font-semibold text-white text-xl tracking-widest">City Break Manager</p>
              <p className="text-gray-400 mt-3">
                Spring Boot + PostgreSQL service for logging cities, planning trips, and protecting
                user data with <span className="text-white">JWT-secured endpoints</span>.
              </p>
              <div className="grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5">
                <Pill label="Spring Boot" color="emerald" />
                <Pill label="PostgreSQL" color="blue" />
                <Pill label="Docker" color="sky" />
                <Pill label="JWT Auth" color="white" />
                <Pill label="Maven" color="orange" />
                <Pill label="Supabase" color="purple" />
              </div>
              <div className="flex items-center flex-wrap gap-3 mt-4 w-full">
                <PrimaryBtn color="emerald" href="https://github.com/DonKisaka/City-Break-Manager#readme">
                  <ArrowIcon /> API docs
                </PrimaryBtn>
                <Link target="_blank" className={githubBtn} href="https://github.com/DonKisaka/City-Break-Manager">
                  <GithubIcon /> Source code
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Influencer Sponsorship */}
        <div className="flex items-start gap-8 mt-10 max-md:flex-col max-md:items-center">
          <div className="rounded-lg w-full max-w-[640px] border border-[#D3D3D3]/50 p-3 sm:p-5 flex flex-col gap-5">
            <GradientBanner
              href="https://github.com/DonKisaka/Influencer-Sponsorship-Application#readme"
              gradient="bg-gradient-to-br from-[#201c2c] via-[#120c1b] to-[#05020b]"
              accentColor="pink"
              category="Backend API"
              title="Influencer Sponsorship"
              subtitle="Spring Boot · JWT-protected brand ↔ influencer workflows"
            />
            <div className="flex flex-col">
              <p className="font-semibold text-white text-xl tracking-widest">Influencer Sponsorship Application</p>
              <p className="text-gray-400 mt-3">
                RESTful Spring Boot service that matches brands with influencers, tracks sponsorship
                offers end-to-end, and secures every request with{' '}
                <span className="text-white">JWT-authenticated endpoints</span>.
              </p>
              <div className="grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5">
                <Pill label="Spring Boot" color="pink" />
                <Pill label="PostgreSQL" color="blue" />
                <Pill label="Docker" color="sky" />
                <Pill label="JWT Auth" color="white" />
                <Pill label="Maven" color="orange" />
                <Pill label="Spring Security" color="purple" />
              </div>
              <div className="flex items-center flex-wrap gap-3 mt-4 w-full">
                <PrimaryBtn color="pink" href="https://github.com/DonKisaka/Influencer-Sponsorship-Application#readme">
                  <ArrowIcon /> API docs
                </PrimaryBtn>
                <Link target="_blank" className={githubBtn} href="https://github.com/DonKisaka/Influencer-Sponsorship-Application">
                  <GithubIcon /> Source code
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Music Streaming API */}
        <div className="flex items-start gap-8 mt-10 max-md:flex-col max-md:items-center">
          <div className="rounded-lg w-full max-w-[640px] border border-[#D3D3D3]/50 p-3 sm:p-5 flex flex-col gap-5">
            <GradientBanner
              href="https://github.com/DonKisaka/Music-streaming-api#readme"
              gradient="bg-gradient-to-br from-[#0f1c2d] via-[#071019] to-[#01060b]"
              accentColor="sky"
              category="Backend API"
              title="Music Streaming API"
              subtitle="Spring Boot · Albums, artists, playlists, JWT auth"
            />
            <div className="flex flex-col">
              <p className="font-semibold text-white text-xl tracking-widest">Music Streaming API</p>
              <p className="text-gray-400 mt-3">
                Full-featured REST API for managing songs, albums, artists, and playlists with{' '}
                <span className="text-white">secure JWT sessions</span>, pagination, and
                Docker-ready deployment.
              </p>
              <div className="grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5">
                <Pill label="Spring Boot" color="sky" />
                <Pill label="PostgreSQL" color="blue" />
                <Pill label="Docker Compose" color="sky" />
                <Pill label="JWT Auth" color="white" />
                <Pill label="Spring Data JPA" color="indigo" />
                <Pill label="Maven" color="purple" />
              </div>
              <div className="flex items-center flex-wrap gap-3 mt-4 w-full">
                <PrimaryBtn color="sky" href="https://github.com/DonKisaka/Music-streaming-api#readme">
                  <ArrowIcon /> API docs
                </PrimaryBtn>
                <Link target="_blank" className={githubBtn} href="https://github.com/DonKisaka/Music-streaming-api">
                  <GithubIcon /> Source code
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sports Management API */}
        <div className="flex items-start gap-8 mt-10 max-md:flex-col max-md:items-center">
          <div className="rounded-lg w-full max-w-[640px] border border-[#D3D3D3]/50 p-3 sm:p-5 flex flex-col gap-5">
            <GradientBanner
              href="https://github.com/DonKisaka/Sports-management-api#readme"
              gradient="bg-gradient-to-br from-[#1c2d21] via-[#0c140d] to-[#020603]"
              accentColor="emerald"
              category="Backend API"
              title="Sports Management API"
              subtitle="Spring Boot · Facilities, fields & booking workflows"
            />
            <div className="flex flex-col">
              <p className="font-semibold text-white text-xl tracking-widest">Sports Management API</p>
              <p className="text-gray-400 mt-3">
                REST API for managing sports facilities, field availability, and booking flows,
                optimised for <span className="text-white">Docker deployments</span> and scalable
                Spring Boot services.
              </p>
              <div className="grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5">
                <Pill label="Spring Boot" color="emerald" />
                <Pill label="PostgreSQL" color="blue" />
                <Pill label="Docker" color="sky" />
                <Pill label="JWT Auth" color="white" />
                <Pill label="Maven" color="orange" />
                <Pill label="Spring Data JPA" color="teal" />
              </div>
              <div className="flex items-center flex-wrap gap-3 mt-4 w-full">
                <PrimaryBtn color="emerald" href="https://github.com/DonKisaka/Sports-management-api#readme">
                  <ArrowIcon /> API docs
                </PrimaryBtn>
                <Link target="_blank" className={githubBtn} href="https://github.com/DonKisaka/Sports-management-api">
                  <GithubIcon /> Source code
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════
            ✨ FRONTEND
        ══════════════════════════ */}
        <div className="mt-16">
          <SectionLabel label="✨ Frontend" />
        </div>

        {/* Renotzy */}
        <div className="flex items-start gap-8 max-md:flex-col max-md:items-center">
          <div className="rounded-lg w-full max-w-[640px] border border-[#D3D3D3]/50 p-3 sm:p-5 flex flex-col gap-5">
            <Link target="_blank" href="https://furniture-app-utbp.vercel.app/">
              <Image src="/RenoTzy.png" alt="Renotzy" loading="lazy" width={600} height={380} className="rounded-md object-cover w-full h-auto text-transparent" />
            </Link>
            <div className="flex flex-col">
              <p className="font-semibold text-white text-xl tracking-widest">RENOTZY</p>
              <p className="text-gray-400 mt-3">
                Modern platform designed to enhance the home experience by integrating{' '}
                <span className="text-white">smart furniture solutions</span>. Built with Next.js,
                React, TypeScript, and Shadcn UI.
              </p>
              <div className="grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5">
                <IconPill src="/next-icon.svg" alt="nextjs" label="Next.js" bg="bg-white/10" text="text-white" />
                <IconPill src="/react-icon.svg" alt="react" label="React" bg="bg-blue-600/20" text="text-blue-300" />
                <IconPill src="/typescript-icon.svg" alt="typescript" label="TypeScript" bg="bg-blue-500/20" text="text-blue-300" />
                <IconPill src="/tailwind-icon.svg" alt="tailwind" label="Tailwind" bg="bg-blue-400/20" text="text-blue-300" />
                <IconPill src="/shadcn-icon.svg" alt="shadcn" label="Shadcn" bg="bg-white/20" text="text-white" />
              </div>
              <div className="flex items-center flex-wrap gap-3 mt-4 w-full">
                <PrimaryBtn color="emerald" href="https://furniture-app-utbp.vercel.app/">
                  <ArrowIcon /> Live preview
                </PrimaryBtn>
                <Link target="_blank" className={githubBtn} href="https://github.com/DonaldKisaka/furniture-app">
                  <GithubIcon /> Source code
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Insync */}
        <div className="flex items-start gap-8 mt-10 max-md:flex-col max-md:items-center">
          <div className="rounded-lg w-full max-w-[640px] border border-[#D3D3D3]/50 p-3 sm:p-5 flex flex-col gap-5">
            <Link target="_blank" href="https://insyc.vercel.app/">
              <Image src="/Insync.png" alt="Insync" loading="lazy" width={600} height={380} className="rounded-md object-cover w-full h-auto text-transparent" />
            </Link>
            <div className="flex flex-col">
              <p className="font-semibold text-white text-xl tracking-widest">INSYNC</p>
              <p className="text-gray-400 mt-3">
                Website for a <span className="text-white">digital marketing agency</span> offering
                responsive web design, app development, and digital marketing strategies. Built with
                Next.js, React, TypeScript, and Tailwind.
              </p>
              <div className="grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5">
                <IconPill src="/next-icon.svg" alt="nextjs" label="Next.js" bg="bg-white/10" text="text-white" />
                <IconPill src="/react-icon.svg" alt="react" label="React" bg="bg-blue-600/20" text="text-blue-300" />
                <IconPill src="/typescript-icon.svg" alt="typescript" label="TypeScript" bg="bg-blue-500/20" text="text-blue-300" />
                <IconPill src="/tailwind-icon.svg" alt="tailwind" label="Tailwind" bg="bg-blue-400/20" text="text-blue-300" />
                <IconPill src="/shadcn-icon.svg" alt="shadcn" label="Shadcn" bg="bg-white/20" text="text-white" />
              </div>
              <div className="flex items-center flex-wrap gap-3 mt-4 w-full">
                <PrimaryBtn color="emerald" href="https://insyc.vercel.app/">
                  <ArrowIcon /> Live preview
                </PrimaryBtn>
                <Link target="_blank" className={githubBtn} href="https://github.com/DonaldKisaka/Insyc">
                  <GithubIcon /> Source code
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