import ContactForm from "./ContactForm";
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';


export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full min-h-screen pb-12 md:pb-0">
      <img src="/img/right.svg" className="absolute z-[-1] top-0 right-0 max-w-1/2 lg:max-w-1/3" />
      <img src="/img/left.svg" className="absolute z-[-1] bottom-0 left-0 max-w-1/2 lg:max-w-1/3" />
      <div className="max-w-7xl mx-auto text-center pt-24">
        <h2 className="text-4xl font-bold mb-12 xl:mb-16">Contact</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 px-2 md:px-5 lg:px-0 lg:gap-12">
          <div className='col-span-1 flex flex-col mb-12 lg:mb-0'>
            <h3 className='text-2xl mb-8'>Contact Informations</h3>
            <div className="space-y-6 h-full border-2 border-zinc-700 rounded-2xl py-6 px-2 md:p-6 bg-glass">
              <a
                href="mailto:jordan.donguy@gmail.com"
                className='flex items-center h-16 w-full gap-4 border-2 border-zinc-700 px-4 rounded-2xl hover:bg-[rgba(60,60,82,0.2)] active:scale-90 duration-150'
              >
                <div className='w-12 h-12 bg-[rgba(60,60,82,0.4)] rounded-full flex justify-center items-center'>
                  <Mail />
                </div>
                <p>jordan.donguy@gmail.com</p>
              </a>
              <a
                href="tel:+33649265638"
                className='flex items-center h-16 w-full gap-4 border-2 border-zinc-700 px-4 rounded-2xl hover:bg-[rgba(60,60,82,0.2)] active:scale-90 duration-150'
              >
                <div className='w-12 h-12 bg-[rgba(60,60,82,0.4)] rounded-full flex justify-center items-center'>
                  <Phone />
                </div>
                <p>+33 6 49 26 56 38</p>
              </a>
              <a
                href="https://www.google.com/search?q=lyon"
                target="_blank"
                className='flex items-center h-16 w-full gap-4 border-2 border-zinc-700 px-4 rounded-2xl hover:bg-[rgba(60,60,82,0.2)] active:scale-90 duration-150'
              >
                <div className='w-12 h-12 bg-[rgba(60,60,82,0.4)] rounded-full flex justify-center items-center'>
                  <MapPin />
                </div>
                <p>Lyon, France</p>
              </a>
            </div>
          </div>
          <div className="col-span-2 h-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
