import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";
import { SlideFromLeft } from "./animations/SlideFromLeft";
import { SlideFromRight } from "./animations/SlideFromRight";
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';


export default function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="relative w-full min-h-screen pb-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold py-8 md:py-16 bg-[rgb(28,32,40))] w-full">Contact</h2>

        <div className="max-w-7xl mx-auto pt-8 grid grid-cols-1 xl:grid-cols-3 md:px-5 xl:px-2 xl:gap-12">

          {/* ----------- Contact informations ----------- */}
          <SlideFromLeft>
            <div className='col-span-1 h-full flex flex-col'>
              <h3 className='text-2xl mb-4 md:mb-8'>{t("informations")}</h3>
              <div className="space-y-6 h-full md:border border-zinc-700 rounded-4xl py-6 px-2 md:p-6 bg-glass lg:mb-6 xl:mb-0">
                <a
                  href="mailto:jordan.donguy@gmail.com"
                  aria-label="Send an email to jordan.donguy@gmail.com"
                  title="Send an email"
                  className='flex items-center h-16 w-full gap-4 border border-zinc-700 px-4 rounded-2xl hover:bg-[rgba(60,60,82,0.2)] active:scale-90 duration-150'
                >
                  <div className='w-12 h-12 bg-[rgba(60,60,82,0.4)] rounded-full flex justify-center items-center'>
                    <Mail />
                  </div>
                  <p>jordan.donguy@gmail.com</p>
                </a>
                <a
                  href="tel:+33649265638"
                  aria-label="Call Jordan Donguy at +33 6 49 26 56 38"
                  title="Call Jordan Donguy"
                  className='flex items-center h-16 w-full gap-4 border border-zinc-700 px-4 rounded-2xl hover:bg-[rgba(60,60,82,0.2)] active:scale-90 duration-150'
                >
                  <div className='w-12 h-12 bg-[rgba(60,60,82,0.4)] rounded-full flex justify-center items-center'>
                    <Phone />
                  </div>
                  <p>+33 6 49 26 56 38</p>
                </a>
                <a
                  href="https://www.google.com/search?q=lyon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Lyon, France on Google"
                  title="View location on Google"
                  className='flex items-center h-16 w-full gap-4 border border-zinc-700 px-4 rounded-2xl hover:bg-[rgba(60,60,82,0.2)] active:scale-90 duration-150'
                >
                  <div className='w-12 h-12 bg-[rgba(60,60,82,0.4)] rounded-full flex justify-center items-center'>
                    <MapPin />
                  </div>
                  <p>Lyon, France</p>
                </a>
              </div>
            </div>
          </SlideFromLeft>

          {/* ----------- Contact form ----------- */}
          <div className="col-span-2 h-full mt-12 lg:mt-0">
            <SlideFromRight>
              <ContactForm />
            </SlideFromRight>
          </div>

        </div>
      </div>
    </section>
  )
}
