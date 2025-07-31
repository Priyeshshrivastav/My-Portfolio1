import React from 'react'
import { Briefcase, Code } from 'lucide-react';
import { User } from 'lucide-react';

const AboutSection = () => {
  return (
    <div id='about' className='py-24 px-4 relative '>
      <div className="container mx-auto max-w-5xl">
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>Me</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>Passionate web developer & DSA Enthusiast </h3>

            <p className='text-muted-foreground'>
              I am a self-driven frontend developer with a passion for building
               interactive web applications using React, JavaScript, and Generative AI. I love to create engaging user experiences and solve complex problems through code. I am also an avid learner, always exploring new technologies and frameworks to enhance my skills.
            </p>

            <div className='flex flex-cols sm:flex-row gap-4 pt-4 justify-center'>
              <a href='#contact' className='cosmic-button px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors-duration-300'>
                Get in Touch
                Download CV

              </a>
          </div>
          </div>
          <div className='grid grid-cols-1 gap-6'>
            <div className="gradient-border p-6 card-hover">
              <div className='flex items-start gap-4'>
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary " />
                </div>
                <div className='text-left'>
                  <h4 className='text-semibold text-lg'>Web development</h4>
                  <p className='text-muted-foreground'>
                    I specialize in creating dynamic and responsive web applications using modern technologies like React, and Tailwind CSS.
                  </p>

                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className='flex items-start gap-4'>
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary " />
                </div>
                <div className='text-left'>
                  <h4 className='text-semibold text-lg'>DSA Enthusiast &  UI/Ux design      </h4>
                  <p className='text-muted-foreground'>
                    I have a strong foundation in data structures and algorithms, which helps me write efficient and optimized code. I also enjoy designing user interfaces that are intuitive and visually appealing.
                  </p>

                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className='flex items-start gap-4'>
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary " />
                </div>
                <div className='text-left'>
                  <h4 className='text-semibold text-lg'>         </h4>
                  <p className='text-muted-foreground'>
                   
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    // </div>
  )
}

export default AboutSection

