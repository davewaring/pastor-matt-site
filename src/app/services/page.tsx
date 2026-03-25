import { siteContent } from "@/content/site-content";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata = {
  title: `Services & Rates — ${siteContent.fullName}`,
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-primary px-6 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Services & Rates</h1>
        <p className="mt-3 text-lg text-white/80">
          Clear, upfront pricing so you can plan with confidence
        </p>
      </section>

      {/* Services grid */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            {siteContent.services.map((service) => (
              <div
                key={service.name}
                className="flex flex-col rounded-lg border border-warm-gray-light bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-primary">{service.name}</h3>
                <p className="mt-2 text-warm-gray">{service.description}</p>
                <div className="mt-4 text-2xl font-bold text-accent">
                  {service.rate}
                </div>
                <ul className="mt-4 flex-1 space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-warm-gray">
                      <span className="mt-0.5 text-accent">&#10003;</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/schedule"
                  className="mt-6 block rounded-lg bg-primary py-2.5 text-center font-semibold text-white transition-colors hover:bg-primary-light"
                >
                  Book This Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-warm-gray-lighter px-6 py-20">
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
          Check availability and book your date.
        </p>
        <Link
          href="/schedule"
          className="mt-4 inline-block rounded-lg bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent-light"
        >
          View My Schedule
        </Link>
      </section>
    </>
  );
}
