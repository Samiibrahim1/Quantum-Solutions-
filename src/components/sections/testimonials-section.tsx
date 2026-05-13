"use client";

const testimonials = [
  ["They delivered a site that feels premium and noticeably improved lead quality.", "Founder, SaaS Studio"],
  ["The ERP dashboard simplified our entire operations flow in one release.", "COO, Logistics Group"],
  ["Our mobile app now feels like a flagship product instead of a template.", "Product Lead, Retail Brand"],
  ["The motion language and polish made the brand instantly feel larger.", "Director, Creative Agency"],
  ["Fast, clear, and technically strong. Exactly what we needed.", "Founder, Automation Firm"],
] as const;

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 lg:py-32">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.45em] text-cyan-200/75">Testimonials</p>
        <h2 className="mt-3 font-display text-3xl text-gradient md:text-5xl">Trusted by teams that care about craft</h2>
      </div>

      <div className="space-y-4 overflow-hidden rounded-[2rem] border border-white/10 bg-white/4 p-4 shadow-premium">
        <div className="marquee gap-4">
          {testimonials.concat(testimonials).map(([quote, author], index) => (
            <article
              key={`${author}-${index}`}
              className="glass min-w-[18rem] max-w-[24rem] rounded-[1.6rem] p-5 md:min-w-[24rem]"
            >
              <p className="text-sm leading-7 text-white/72">“{quote}”</p>
              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-white/45">{author}</p>
            </article>
          ))}
        </div>
        <div className="marquee-reverse gap-4">
          {testimonials.concat(testimonials).map(([quote, author], index) => (
            <article
              key={`${author}-reverse-${index}`}
              className="glass min-w-[18rem] max-w-[24rem] rounded-[1.6rem] p-5 md:min-w-[24rem]"
            >
              <p className="text-sm leading-7 text-white/72">“{quote}”</p>
              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-white/45">{author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}