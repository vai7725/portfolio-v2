import { Spotlight } from '@/components/ui/Spotlight'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Hero() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#8653fc"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-600 bg-opacity-50">
          Vaibhav Prajapat
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Passionate programmer and dedicated developer. As a proficient
          JavaScript developer, I leverage industry best practices to transform
          creative ideas into functional and visually captivating web solutions,
          turning concepts into digital reality with specialization in MERN
          Stack and Next.js
        </p>
        <p className="mt-4 font-normal text-base flex itemce justify-center text-violet-400 max-w-lg text-center mx-auto space-x-1">
          <a
            href="https://www.linkedin.com/in/vaibhav-prajapat-52b773232/"
            target="_blank"
          >
            <FaLinkedin className="size-8" />
          </a>
          <a
            href="https://www.instagram.com/vaibhav_prajapat_7725/"
            target="_blank"
          >
            <FaInstagram className="size-8" />
          </a>
          <a href="https://twitter.com/Vaibhav90909" target="_blank">
            <FaXTwitter className="size-8" />
          </a>
          <a href="https://github.com/vai7725" target="_blank">
            <FaGithub className="size-8" />
          </a>
        </p>
      </div>
    </div>
  )
}
