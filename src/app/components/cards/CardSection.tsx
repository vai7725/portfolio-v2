import { HoverEffect } from '@/components/ui/card-hover-effect'

export function CardSection() {
  return (
    <div className="mx-auto px-8 bg-black/[0.96]">
      <HoverEffect items={projects} />
    </div>
  )
}
export const projects = [
  {
    title: 'Previous Papers Website',
    description: `'Previous Papers' is the project which helps my college mates to download previous year question papers to prepare for exams. This project is made in MERN stack with tailwind CSS. In this project there is a cookie based authentication system. There are different roles in the website to manage question papers and users.`,
    link: 'https://previouspapers.netlify.app/',
  },

  {
    title: 'Sydney Group',
    description: `The Sydney Group website showcases the power of modern web development technologies in creating impactful solutions for real-world challenges. As the developer behind this project, I am proud to present a website that not only meets the needs of Sydney Group but also contributes to the goal of empowering students to pursue their dreams of studying abroad`,
    link: 'https://sydneygroupservices.com/',
  },
]
