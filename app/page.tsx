import Image from "next/image";
import Link from "next/link";
import Project from "@/components/Project";


const Home = () => {
  return (
    <>
      <main className="w-full min-h-screen h-full flex justify-center pb-10">
        <div className="h-full w-full mx-auto">
          <div className="pb-20 pt-16 flex items-center gap-10 max-md:flex-col max-md:text-center">
            <div className="relative w-44 h-44 min-h-44 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-full p-1">
                <div className="w-full h-full bg-[#1a1a1a] rounded-full">
                  <Image src="/Don.png" alt="Profile" className="w-full h-full object-cover rounded-full border-white border-4" width={170} height={170}/>
                </div>
              </div>
            </div>

              <div className="flex flex-col items-start gap-6">
                <h1 className="text-[#D3D3D3] font-bold text-[28px] tracking-[0.03em] relative">
                  <span className="text-white">
                    Hey, I&apos;m Donald.
                  </span>
                   I&apos;m a 
                  <br />
                  Software Developer.
                </h1>

                <div className="w-full flex items-center justify-between max-md:flex-col max-md:gap-3">
                 <Link target="_blank" className="text-light-gray whitespace-nowrap hover:text-white" href="https://www.google.com/maps/place/Nairobi">🏠 Nairobi, Kenya.</Link>
                 <div className="w-full flex items-center justify-end max-md:justify-center gap-5 text-base text-[#D3D3D3]">
                  <Link target="_blank" className="flex gap-1 items-center hover:text-white" href="https://www.linkedin.com/in/donald-kisaka-a8b90b26b/">
                  <Image src="/linkedin-icon.svg" loading="lazy" alt="LinkedIn" width={24} height={24} className="text-transparent"/>
                  LinkedIn
                  </Link>
                  <Link target="_blank" className="flex gap-1 items-center hover:text-white" href="https://github.com/DonKisaka">
                  <Image src="/github-icon.svg" loading="lazy" alt="GitHub" width={20} height={20} className="text-transparent"/>
                  GitHub
                  </Link>
                 </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-7">
              <h2 className="font-bold text-lg tracking-widest text-white uppercase mb-10">
                Tech stack
              </h2>
              <div className="text-white grid grid-cols-5 gap-5 max-md:grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2">
                <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3]
                border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                  <Image src="/react-icon.svg" loading="lazy" alt="React icon " width={32} height={32} className="text-transparent transition-transform duration-300 group-hover:-translate-y-1"/>
                  <p>React</p>
                </button>
                <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3]
                border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                  <Image src="/next-icon.svg" loading="lazy" alt="Nextjs icon " width={32} height={32} className="text-transparent transition-transform duration-300 group-hover:-translate-y-1"/>
                  <p>Next Js</p>
                </button>
                <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3]
                border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                  <Image src="/javascript-icon.svg" loading="lazy" alt="JavaScript icon " width={32} height={32} className="text-transparent transition-transform duration-300 group-hover:-translate-y-1"/>
                  <p>JavaScript</p>
                </button>
                <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3]
                border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                  <Image src="/typescript-icon.svg" loading="lazy" alt="TypeScript icon " width={32} height={32} className="text-transparent transition-transform duration-300 group-hover:-translate-y-1"/>
                  <p>TypeScript</p>
                </button>
                <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3]
                border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                  <Image src="/tailwind-icon.svg" loading="lazy" alt="Tailwind icon " width={32} height={32} className="text-transparent transition-transform duration-300 group-hover:-translate-y-1"/>
                  <p>Tailwind</p>
                </button>
                <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3]
                border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                  <Image src="/java1.png" loading="lazy" alt="Java icon " width={32} height={32} className="text-transparent transition-transform duration-300 group-hover:-translate-y-1"/>
                  <p>Java</p>
                </button>
                <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3]
                border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                  <Image src="/springboot.svg" loading="lazy" alt="springboot icon" width={32} height={32} className="text-transparent  transition-transform duration-300 group-hover:-translate-y-1"/>
                  <p>Springboot</p>
                </button>
                <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3]
                border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                  <Image src="/docker.png" loading="lazy" alt="docker icon" width={32} height={32} className="text-transparent  transition-transform duration-300 group-hover:-translate-y-1"/>
                  <p>Docker</p>
                </button>
                <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3]
                border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                  <Image src="/nodedotjs.svg" loading="lazy" alt="Nodejs icon" width={32} height={32} className="text-transparent bg-white p-1  transition-transform duration-300 group-hover:-translate-y-1"/>
                  <p>Nodejs</p>
                </button>
                <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3]
                border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                  <Image src="/mongodb.svg" loading="lazy" alt="MongoDB icon" width={32} height={32} className="text-transparent bg-white p-1  transition-transform duration-300 group-hover:-translate-y-1"/>
                  <p>MongoDB</p>
                </button>
                <button type="button" className="border-[#D3D3D3]/50 hover:bg-[#D3D3D3]/10 gap-1.5 h-24 text-[#D3D3D3]
                border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
                  <Image src="/postgresql.svg" loading="lazy" alt="PostgresSQL icon" width={32} height={32} className="text-transparent bg-white p-1  transition-transform duration-300 group-hover:-translate-y-1"/>
                  <p>PostgresSQL</p>
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

