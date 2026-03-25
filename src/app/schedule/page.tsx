import { siteContent } from "@/content/site-content";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata = {
  title: `Book a Sunday — ${siteContent.fullName}`,
};

export default function SchedulePage() {
  const { booking } = siteContent;

  return (
    <>
      {/* Page header */}
      <section className="bg-dark px-6 py-24 text-center text-white">
        <h1 className="text-4xl font-light md:text-5xl">Book a Sunday</h1>
        <p className="mt-4 text-lg text-white/50">
          Here&apos;s how to invite me to preach at your church
        </p>
      </section>

      {/* How it works */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            title="How It Works"
            subtitle="Three simple steps to book a guest sermon"
          />

          <div className="mt-16 space-y-12">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-dark text-xl font-light text-white">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark">Reach Out</h3>
                <p className="mt-2 leading-relaxed text-muted">
                  {booking.process}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-dark text-xl font-light text-white">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark">
                  Confirm Details
                </h3>
                <p className="mt-2 leading-relaxed text-muted">
                  We&apos;ll discuss your church&apos;s worship style, the
                  service format, any specific topics or texts you&apos;d like,
                  and logistics like service times and directions.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-dark text-xl font-light text-white">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark">
                  Sunday Morning
                </h3>
                <p className="mt-2 leading-relaxed text-muted">
                  I&apos;ll arrive early, meet your team, and bring a prepared,
                  Scripture-centered message for your congregation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details — dark */}
      <section className="bg-dark px-6 py-24 text-white">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 p-8">
              <h3 className="font-semibold text-white">Lead Time</h3>
              <p className="mt-3 text-white/50">{booking.leadTime}</p>
            </div>
            <div className="rounded-xl border border-white/10 p-8">
              <h3 className="font-semibold text-white">Travel</h3>
              <p className="mt-3 text-white/50">{booking.travelNote}</p>
            </div>
            <div className="rounded-xl border border-white/10 p-8">
              <h3 className="font-semibold text-white">Availability</h3>
              <p className="mt-3 text-white/50">
                Sundays — prefer in-person
              </p>
            </div>
            <div className="rounded-xl border border-white/10 p-8">
              <h3 className="font-semibold text-white">Booking Method</h3>
              <p className="mt-3 text-white/50">
                Email — I&apos;ll respond within a few days
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-deep px-6 py-24 text-center text-white">
        <h2 className="text-3xl font-light md:text-4xl">Ready to Book?</h2>
        <p className="mt-6 text-lg text-white/50">
          Send me an email with your preferred date and I&apos;ll get back to
          you.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${siteContent.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 font-nav text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-accent-hover"
          >
            Email Me <span aria-hidden="true">&rarr;</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 font-nav text-sm font-medium uppercase tracking-wider text-white transition-colors hover:border-white/50"
          >
            Contact Form
          </Link>
        </div>
      </section>
    </>
  );
}
