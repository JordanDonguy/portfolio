import { Send } from "lucide-react";

type ContactFormProps = {
  showForm?: boolean,
  handleFormButton?: () => void;
}

export default function ContactForm({ showForm, handleFormButton }: ContactFormProps) {
  return (
      <form className="h-full">
        <fieldset className="h-full">
          <legend className={`${showForm && "hidden"} w-full text-center text-2xl mb-8`}>Contact Form</legend>
          <div className={`${showForm ? "bg-glass2" : "bg-glass"} grid grid-cols-1 lg:grid-cols-2 h-full gap-8 border-2 border-zinc-700 rounded-2xl col-span-2 p-2 md:p-6`}>

            {showForm && (
            <button
              type="button"
              onClick={handleFormButton}
              className="absolute right-8 top-4 text-zinc-400 font-bold border-2 border-zinc-400 rounded-full px-3 py-1 hover:cursor-pointer hover:bg-[rgba(60,60,82,0.4)] active:scale-75 duration-150"
            >
              X
            </button>
            )}

            <div className={`${showForm && "mt-10"} col-span-1 flex flex-col`}>
              <label htmlFor="name" className="text-start mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="bg-[rgba(60,60,82,0.4)] h-10 rounded-lg px-4 py-1"
              />
            </div>
            <div className={`${showForm && "lg:mt-10"} col-span-1 flex flex-col`}>
              <label htmlFor="email" className="text-start mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="exemple@email.com"
                required
                className="bg-[rgba(60,60,82,0.4)] h-10 rounded-lg px-4 py-1"
              />
            </div>
            <div className="lg:col-span-2 flex flex-col">
              <label htmlFor="subject" className="text-start mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject of your message"
                required
                className="bg-[rgba(60,60,82,0.4)] h-10 rounded-lg px-4 py-1"
              />
            </div>
            <div className="lg:col-span-2 flex flex-col">
              <label htmlFor="message" className="text-start mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                required
                className={`bg-[rgba(60,60,82,0.4)] min-h-32 2xl:min-h-40 rounded-lg px-4 py-2 ${showForm && "resize-none"}`}
              />
            </div>
            <button
              type="submit"
              className="lg:col-span-2  mx-auto w-full md:w-1/3 my-2 flex justify-center items-center h-12 rounded-full border-2 border-zinc-400 hover:cursor-pointer hover:bg-[rgba(60,60,82,0.2)] hover:md:scale-110 duration-150 active:scale-90"
            >
              <Send size={20} />
              <p className="px-2 text-lg">Send message</p>
            </button>
          </div>
        </fieldset>
      </form>
  )
}
