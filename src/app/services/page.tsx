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
      <section className="bg-primary px-6 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">What I Offer</h1>
        <p className="mt-3 text-lg text-white/80">
          Sunday pulpit supply for your congregation
        </p>
      </section>

      {/* Services */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          {siteContent.services.map((service) => (
            <div
              key={service.name}
              className="rounded-lg border border-warm-gray-light bg-white p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-primary">{service.name}</h3>
              <p className="mt-3 text-lg text-warm-gray">{service.description}</p>
              {service.rate && (
                <div className="mt-4 text-2xl font-bold text-accent">
                  {service.rate}
                </div>
              )}
              <ul className="mt-6 space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-warm-gray">
                    <span className="mt-0.5 text-accent">&#10003;</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-8 inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-light"
              >
                Invite Me to Speak
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Speaking style */}
      <section className="bg-warm-gray-lighter px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="My Speaking Style" />
          <p className="mt-8 text-center text-lg leading-relaxed text-warm-gray">
            {siteContent.speakingStyle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {siteContent.sermonTopics.map((topic) => (
              <span
                key={topic}
                className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="mt-10 space-y-6">
            {siteContent.faq.map((item, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-primary">
                  {item.question}
                </h3>
                <p className="mt-2 leading-relaxed text-warm-gray">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-6 py-12 text-center text-white">
        <h2 className="text-2xl font-bold">Ready to get started?</h2>
        <p className="mt-2 text-white/80">
          Send me an email and let&apos;s talk about your church&apos;s needs.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-lg bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent-light"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
