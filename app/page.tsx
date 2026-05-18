import Image from "next/image";
import Link from "next/link";
import Project from "@/components/Project";

const Home = () => {
  return (
    <>
      <main className="w-full min-h-screen h-full flex justify-center pb-10">
        <div className="h-full w-full mx-auto">

          {/* ── Hero ── */}
          <div className="pb-20 pt-16 flex items-center gap-10 max-md:flex-col max-md:text-center">
            <div className="relative w-44 h-44 min-h-44 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-full p-1">
                <div className="w-full h-full bg-[#1a1a1a] rounded-full">
                  <Image
                    src="/Don.png"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full border-white border-4"
                    width={170}
                    height={170}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-6">
              <h1 className="text-[#D3D3D3] font-bold text-[28px] tracking-[0.03em] relative">
                <span className="text-white">Hey, I&apos;m Donald.</span> I&apos;m a
                <br />
                Backend Engineer.
              </h1>

              <div className="w-full flex items-center justify-between max-md:flex-col max-md:gap-3">
                <Link
                  target="_blank"
                  className="text-light-gray whitespace-nowrap hover:text-white"
                  href="https://www.google.com/maps/place/Nairobi"
                >
                  🏠 Nairobi, Kenya.
                </Link>
                <div className="w-full flex items-center justify-end max-md:justify-center gap-5 text-base text-[#D3D3D3]">
                 
                 
                  <Link
                    target="_blank"
                    className="flex gap-1 items-center hover:text-white"
                    href="https://www.linkedin.com/in/donald-kisaka-a8b90b26b/"
                  >
                    <Image src="/linkedin-icon.svg" loading="lazy" alt="LinkedIn" width={24} height={24} className="text-transparent" />
                       LinkedIn
                  </Link>
                  <Link
                    target="_blank"
                    className="flex gap-1 items-center hover:text-white"
                    href="https://github.com/DonKisaka"
                  >
                    <Image src="/github-icon.svg" loading="lazy" alt="GitHub" width={20} height={20} className="text-transparent" />
                    GitHub
                  </Link>
                  <Link
                    target="_blank"
                    className="flex gap-1 items-center hover:text-white"
                    href="https://x.com/DonaldKisaka"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.213 5.567 5.951-5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Twitter
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── Spring AI featured link ── */}
<div className="mt-2 mb-10">
  <Link
    href="/spring-ai"
    className="inline-flex items-center gap-2 text-sm text-emerald-300
      border border-emerald-300/40 rounded-full px-4 py-1.5
      hover:bg-emerald-300/10 transition-all"
  >
    🤖 View my Spring AI projects
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7"/><path d="M7 7h10v10"/>
    </svg>
  </Link>
</div>

          {/* ── About ── */}
          <div className="mb-16">
            <h2 className="font-bold text-lg tracking-widest text-white uppercase mb-6">About</h2>
            <p className="text-[#D3D3D3] leading-relaxed max-w-2xl">
              I specialise in backend development with{" "}
              <span className="text-white font-medium">Java and Spring Boot</span> — building
              distributed systems using Kafka, RabbitMQ, Redis, and Docker. Lately I&apos;ve been
              going deep on the{" "}
              <span className="text-white font-medium">Spring AI ecosystem</span>: RAG pipelines,
              LLM-powered document processing, vector search, and tool calling using Anthropic
              Claude and Ollama. On the frontend I work with Next.js, React, and TypeScript to ship
              full-stack products end-to-end. I&apos;m open to backend, full-stack, or AI
              engineering roles where I can build things that actually scale.
            </p>
          </div>

          {/* ── Tech Stack ── */}
          <div className="flex flex-col mt-7">
            <h2 className="font-bold text-lg tracking-widest text-white uppercase mb-10">
              Tech stack
            </h2>
            <div className="text-white grid grid-cols-5 gap-5 max-md:grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2">

              {/* Frontend */}
              <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                <Image src="/react-icon.svg" loading="lazy" alt="React" width={32} height={32} className="text-transparent transition-transform duration-300 group-hover:-translate-y-1" />
                <p>React</p>
              </button>
              <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                <Image src="/next-icon.svg" loading="lazy" alt="Next.js" width={32} height={32} className="text-transparent transition-transform duration-300 group-hover:-translate-y-1" />
                <p>Next.js</p>
              </button>
              <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                <Image src="/typescript-icon.svg" loading="lazy" alt="TypeScript" width={32} height={32} className="text-transparent transition-transform duration-300 group-hover:-translate-y-1" />
                <p>TypeScript</p>
              </button>
              <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                <Image src="/tailwind-icon.svg" loading="lazy" alt="Tailwind" width={32} height={32} className="text-transparent transition-transform duration-300 group-hover:-translate-y-1" />
                <p>Tailwind</p>
              </button>

              {/* Backend */}
              <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                <Image src="/java1.png" loading="lazy" alt="Java" width={32} height={32} className="text-transparent transition-transform duration-300 group-hover:-translate-y-1" />
                <p>Java</p>
              </button>
              <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                <Image src="/springboot.svg" loading="lazy" alt="Spring Boot" width={32} height={32} className="text-transparent transition-transform duration-300 group-hover:-translate-y-1" />
                <p>Spring Boot</p>
              </button>
              <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                <Image src="/docker.png" loading="lazy" alt="Docker" width={32} height={32} className="text-transparent transition-transform duration-300 group-hover:-translate-y-1" />
                <p>Docker</p>
              </button>

              {/* Infra */}
              <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://cdn.simpleicons.org/apachekafka/D3D3D3" loading="lazy" alt="Kafka" width={32} height={32} className="transition-transform duration-300 group-hover:-translate-y-1" />
                <p>Kafka</p>
              </button>
              <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://cdn.simpleicons.org/rabbitmq/D3D3D3" loading="lazy" alt="RabbitMQ" width={32} height={32} className="transition-transform duration-300 group-hover:-translate-y-1" />
                <p>RabbitMQ</p>
              </button>
              <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://cdn.simpleicons.org/redis/D3D3D3" loading="lazy" alt="Redis" width={32} height={32} className="transition-transform duration-300 group-hover:-translate-y-1" />
                <p>Redis</p>
              </button>

              {/* Databases */}
              <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                <Image src="/postgresql.svg" loading="lazy" alt="PostgreSQL" width={32} height={32} className="text-transparent bg-white p-1 transition-transform duration-300 group-hover:-translate-y-1" />
                <p>PostgreSQL</p>
              </button>
              <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                <Image src="/mongodb.svg" loading="lazy" alt="MongoDB" width={32} height={32} className="text-transparent bg-white p-1 transition-transform duration-300 group-hover:-translate-y-1" />
                <p>MongoDB</p>
              </button>

              {/* AI */}
              <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                <Image src="/springboot.svg" loading="lazy" alt="Spring AI" width={32} height={32} className="text-transparent transition-transform duration-300 group-hover:-translate-y-1" />
                <p>Spring AI</p>
              </button>
              <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                <svg viewBox="0 0 32 32" width="32" height="32" className="transition-transform duration-300 group-hover:-translate-y-1" fill="currentColor" aria-hidden="true">
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4"/>
                  <circle cx="16" cy="16" r="6" fill="currentColor" opacity="0.8"/>
                </svg>
                <p>Ollama</p>
              </button>

            </div>
          </div>

          <Project />
        </div>
      </main>
    </>
  );
};

export default Home;