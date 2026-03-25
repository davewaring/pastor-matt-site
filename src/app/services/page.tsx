import { siteContent } from "@/content/site-content";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata = {
  title: `Services — ${siteContent.fullName}`,
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-dark px-6 py-24 text-center text-white">
        <h1 className="text-4xl font-light md:text-5xl">What I Offer</h1>
        <p className="mt-4 text-lg text-white/50">
          Sunday pulpit supply for your congregation
        </p>
      </section>

      {/* Services */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          {siteContent.services.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl border border-dark/10 bg-white p-10 shadow-sm"
            >
              <h3 className="text-2xl font-light text-dark">{service.name}</h3>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                {service.description}
              </p>
              {service.rate && (
                <div className="mt-6 text-3xl font-light text-accent">
                  {service.rate}
                </div>
              )}
              <ul className="mt-8 space-y-3">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 font-nav text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-accent-hover"
              >
                Invite Me to Speak <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Speaking style — dark */}
      <section className="bg-dark px-6 py-24 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading title="My Speaking Style" light />
          <p className="mt-10 text-xl font-light leading-relaxed text-white/60">
            {siteContent.speakingStyle}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {siteContent.sermonTopics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/70"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — light */}
      <section className="bg-light-bg px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="mt-12 space-y-8">
            {siteContent.faq.map((item, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-dark">
                  {item.question}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-deep px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-light">Ready to get started?</h2>
        <p className="mt-4 text-white/50">
          Send me an email and let&apos;s talk about your church&apos;s needs.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 font-nav text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-accent-hover"
        >
          Get in Touch <span aria-hidden="true">&rarr;</span>
        </Link>
      </section>
    </>
  );
}
