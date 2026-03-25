"use client";

import { siteContent } from "@/content/site-content";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export default function SchedulePage() {
  const { scheduling } = siteContent;
  const calcomUrl = `https://cal.com/${scheduling.calcomUsername}`;

  return (
    <>
      {/* Page header */}
      <section className="bg-primary px-6 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">{scheduling.heading}</h1>
        <p className="mt-3 text-lg text-white/80">{scheduling.description}</p>
      </section>

      {/* Cal.com embed */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="Pick a Date"
            subtitle="Select an available Sunday below to get started"
          />

          <div className="mt-10 overflow-hidden rounded-lg border border-warm-gray-light shadow-sm">
            {scheduling.calcomUsername === "your-calcom-username" ? (
              // Placeholder when Cal.com is not configured
              <div className="flex flex-col items-center justify-center bg-warm-gray-lighter p-16 text-center">
                <div className="text-5xl">&#128197;</div>
                <h3 className="mt-4 text-xl font-semibold text-primary">
                  Scheduling Coming Soon
                </h3>
                <p className="mt-2 text-warm-gray">
                  Online booking is being set up. In the meantime, please{" "}
                  <Link href="/contact" className="text-accent hover:underline">
                    contact me directly
                  </Link>{" "}
                  to schedule.
                </p>
              </div>
            ) : (
              <iframe
                src={`${calcomUrl}?embed=true`}
                width="100%"
                height="700"
                frameBorder="0"
                className="bg-white"
                title="Schedule a service"
              />
            )}
          </div>

          {scheduling.note && (
            <p className="mt-6 text-center text-sm text-warm-gray italic">
              {scheduling.note}
            </p>
          )}
        </div>
      </section>

      {/* Contact fallback */}
      <section className="bg-warm-gray-lighter px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-primary">
          Prefer to reach out directly?
        </h2>
        <p className="mt-2 text-warm-gray">
          No problem — send me an email or give me a call.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-light"
        >
          Contact Me
        </Link>
      </section>
    </>
  );
}
