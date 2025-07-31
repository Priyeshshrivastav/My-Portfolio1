import React from 'react'
import { useState } from 'react'
import { cn } from '@/lib/Utils';


    const skills=[
        {name:"HTML",level:80,category:"Frontend"},
        {name:"CSS-3",level:80,category:"Frontend"},
        {name:"Javascript",level:70,category:"Frontend"},
        {name:"Tailwind",level:60,category:"Frontend"},
        {name:"React.js",level:60,category:"Frontend"},
        

        //Programming language
        {name:"C",level:70,category:"Programming language"},
        {name:"C++",level:60,category:"Programming language"},
        {name:"Python",level:50,category:"Programming language"},


        //AI
        {name:"Generative AI ",level:40,category:"AI"},
        {name:"Numpy",level:40,category:"AI"},
        {name:"Pandas",level:30,category:"AI"},


        //Tools
        {name:"Git",level:50,category:"Tools"},
        {name:"Github",level:50,category:"Tools"},
        {name:"Vd code",level:80,category:"Tools"}


       
    ];

    const category=["all","Frontend","Programming language","AI","Tools"];






const Skillssection = () => {
    const [activecategory,setcategory]=useState("all");


    const filteredskills=skills.filter((skill)=>activecategory==="all" || skill.category===activecategory);




  return (
    <section id='skills' className='py-24 relative bg-secondary/30'>

        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-ceneter'>
                My <span className='text-primary'>Skills</span>
            </h2>

            <div className='flex flex-wrap justify-center gap-4 mb-12'>
                {category.map((category,key)=>(
                    <button key={key} onClick={()=>setcategory(category)} className={cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                        activecategory===category ?"bg-primary text-primary-foreground":"bg-secondary/70 text-foreground hover:bg-secondary"
                    )}>
                        {category}
                    </button>
                ))}

            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredskills.map((skill,key)=>(
                    <div key={key} className='bg-card p-6 rounded-lg shadow-xs card-hover'>

                        <div className='text-left mb-4'>
                            <h3 className='font-semibold text-lg'>{skill.name}</h3>
                        </div>
                        <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden '>
                        <div className='bg-primary h-2 rounded-full origin-left aniamte-[grow_1.5s_ease-out' style={{width:skill.level+"%"}}/>

                        </div>
                        <div className='text-right mt-1'>
                            <span className='text-sm text-muted-foreground'>{skill.level}</span>
                        </div>
                    </div>
                ))}

            </div>

        </div>

    </section>
  )
}

export default Skillssection
