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
      <img src="/img/right.svg" loading="lazy" alt="" className="absolute z-[-1] top-0 right-0 max-w-1/2 lg:max-w-1/3 aspect-auto" />
      <img src="/img/left.svg" loading="lazy" alt="" className="absolute z-[-1] bottom-0 left-0 max-w-1/2 lg:max-w-1/3 aspect-auto" />
      <div className="max-w-7xl mx-auto text-center pt-24">
        <h2 className="text-4xl font-bold mb-12 xl:mb-16">Contact</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:px-5 lg:px-0 lg:gap-12">
          <SlideFromLeft>
            <div className='col-span-1 h-full flex flex-col'>
              <h3 className='text-2xl mb-4 md:mb-8'>{t("informations")}</h3>
              <div className="space-y-6 h-full md:border border-zinc-700 rounded-4xl py-6 px-2 md:p-6 bg-glass">
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
