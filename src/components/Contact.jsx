import { Github, Linkedin, Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPin,Instagram ,Twitter} from 'lucide-react';
import {cn} from '@/lib/Utils';
import { Send } from 'lucide-react';


const Contact = () => {

    const handlesubmit=(e)=>{
        e.preventDefault();
        // Handle form submission logic here
        setTimeout(()=>{
            

        },1500)
    }
  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>

        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Get In <span className='text-primary '>Touch</span>
        </h2>


        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='space-y-8'>
                <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

                <div className='space-y-6 justify-center'>
                    <div className='flex items-start space-x-4'>
                        <div className='p-3 rounded-full bg-primary/10  '>
                        <Mail/>

                        </div>
                        <div className="">
                            <h4 className='font-medium'> Email</h4>
                            <a href="mailto:priyeshshrivastav4@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>priyeshshrivastav4@gmail.com</a>
                        </div>

                    </div>
                    <div className='flex items-start space-x-4'>
                        <div className='p-3 rounded-full bg-primary/10  '>
                        <Phone/>

                        </div>
                        <div className="">
                            <h4 className='font-medium'> Phone </h4>
                            <a href="tel:+919973082650" className='text-muted-foreground hover:text-primary transition-colors'> 99730826..</a>
                        </div>

                    </div>
                    <div className='flex items-start space-x-4'>
                        <div className='p-3 rounded-full bg-primary/10  '>
                        <MapPin className="h-6 w-6 text-primary"/>

                        </div>
                        <div className="">
                            <h4 className='font-medium'> Location</h4>
                            <a  className='text-muted-foreground hover:text-primary transition-colors'>Imphal,Manipur(INDIA)</a>
                        </div>

                    </div>

                </div>
                <div className='pt-8'>
                    <h4>Connect With Me</h4>
                    <div className='flex space-x-4 justify-center'>
                        <a href="https://www.linkedin.com/in/priyesh-kumar-7b7704329?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhRhVcafWR9mSmFaCIx6ELQ%3D%3D" target='_blank'>
                            <Linkedin/>
                        </a>
                        <a href="">
                            <Instagram/>
                        </a>
                        <a href="">
                            <Twitter/>
                        </a>
                        <a href="https://github.com/Priyeshshrivastav" target='_blank'>
                            <Github/>
                        </a>
                    </div>

                </div>

            </div>
            <div className='bg-card p-8 rounded-lg shadow-xs'>
                <h3 className='text-2xl font-semibold mb-6'>Send a message</h3>
                <form className='space-y-6'>
                    <div>
                        <lable htmlfor="name" className="block text-sm font-medium mb-2">Your name</lable>
                        <input type="text" id="name" name="name" placeholder='Enter your name' className='w-full px-4 py-3 rounded-md border border-input background focus:outlind-hidden focus-ring-2 focus-ring-primary' />

                    </div>
                    <div>
                        <lable htmlfor="name" className="block text-sm font-medium mb-2">Your Email</lable>
                        <input type="text" id="Email" name="email" placeholder='hello@gmail.com' className='w-full px-4 py-3 rounded-md border border-input background focus:outlind-hidden focus-ring-2 focus-ring-primary' />

                    </div>
                    <div>
                        <lable htmlfor="message" className="block text-sm font-medium mb-2">Your Message here...</lable>
                        <textarea  id="message" name="message" placeholder="Hello I'd like to talk about.... " className='w-full px-4 py-3 rounded-md border border-input background focus:outlind-hidden focus-ring-2 focus-ring-primary resize-none' />

                    </div>
                    <button type='submit' className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                    )}>Send Message

                        <Send size={20}/>

                    </button>

                </form>

            </div>

        </div>
        </div>

    </section>
  )
}

export default Contact
