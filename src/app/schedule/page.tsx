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
      <section className="bg-primary px-6 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Book a Sunday</h1>
        <p className="mt-3 text-lg text-white/80">
          Here&apos;s how to invite me to preach at your church
        </p>
      </section>

      {/* How it works */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="How It Works"
            subtitle="Three simple steps to book a guest sermon"
          />

          <div className="mt-12 space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">Reach Out</h3>
                <p className="mt-1 text-warm-gray">
                  {booking.process}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">Confirm Details</h3>
                <p className="mt-1 text-warm-gray">
                  We&apos;ll discuss your church&apos;s worship style, the service format,
                  any specific topics or texts you&apos;d like, and logistics like
                  service times and directions.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">Sunday Morning</h3>
                <p className="mt-1 text-warm-gray">
                  I&apos;ll arrive early, meet your team, and bring a prepared,
                  Scripture-centered message for your congregation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-warm-gray-lighter px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-primary">Lead Time</h3>
              <p className="mt-2 text-warm-gray">{booking.leadTime}</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-primary">Travel</h3>
              <p className="mt-2 text-warm-gray">{booking.travelNote}</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-primary">Availability</h3>
              <p className="mt-2 text-warm-gray">Sundays — prefer in-person</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-primary">Booking Method</h3>
              <p className="mt-2 text-warm-gray">Email — I&apos;ll respond within a few days</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to Book?</h2>
        <p className="mt-4 text-lg text-white/80">
          Send me an email with your preferred date and I&apos;ll get back to you.
        </p>
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${siteContent.email}`}
            className="inline-block rounded-lg bg-accent px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-accent-light"
          >
            Email Me
          </a>
          <Link
            href="/contact"
            className="inline-block rounded-lg border-2 border-white/30 px-8 py-3 text-lg font-semibold text-white transition-colors hover:border-white/60"
          >
            Contact Form
          </Link>
        </div>
      </section>
    </>
  );
}
