import { siteContent } from "@/content/site-content";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata = {
  title: `About — ${siteContent.fullName}`,
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-primary px-6 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">About {siteContent.name}</h1>
        <p className="mt-3 text-lg text-white/80">{siteContent.title}</p>
      </section>

      {/* Bio */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          {/* Photo placeholder */}
          <div className="mx-auto mb-10 flex h-64 w-64 items-center justify-center rounded-full bg-warm-gray-light text-warm-gray">
            <span className="text-sm">Photo</span>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-warm-gray">
            {siteContent.about.fullBio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-warm-gray-lighter px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="My Preaching Philosophy" />
          <p className="mt-8 text-center text-lg leading-relaxed text-warm-gray">
            {siteContent.about.philosophy}
          </p>
        </div>
      </section>

      {/* Credentials */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Background & Credentials" />
          <ul className="mt-8 space-y-3">
            {siteContent.about.credentials.map((cred, i) => (
              <li key={i} className="flex items-start gap-3 text-lg text-warm-gray">
                <span className="mt-1 text-accent">&#8226;</span>
                <span>{cred}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-6 py-12 text-center text-white">
        <h2 className="text-2xl font-bold">Interested in having me preach?</h2>
        <Link
          href="/schedule"
          className="mt-4 inline-block rounded-lg bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent-light"
        >
          Book a Sunday
        </Link>
      </section>
    </>
  );
}
