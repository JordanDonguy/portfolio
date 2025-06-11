export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full h-screen snap-start">
      <img src="/img/right.svg" className="absolute z-[-1] top-0 right-0 max-w-1/2 lg:max-w-1/3" />
      <img src="/img/left.svg" className="absolute z-[-1] bottom-0 left-0 max-w-1/2 lg:max-w-1/3" />
      <div className="max-w-7xl mx-auto text-center pt-24">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        {/* Contact form or links */}
      </div>
    </section>
  )
}
