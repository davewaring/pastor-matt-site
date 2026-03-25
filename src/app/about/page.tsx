import { siteContent } from "@/content/site-content";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata = {
  title: `About — ${siteContent.fullName}`,
};

export default function AboutPage() {
  return (
    <>
      {/* Page header — dark */}
      <section className="bg-dark px-6 py-24 text-center text-white">
        <h1 className="text-4xl font-light md:text-5xl">
          About {siteContent.name}
        </h1>
        <p className="mt-4 text-lg text-white/50">{siteContent.title}</p>
      </section>

      {/* Bio — white */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl">
          {/* Photo placeholder */}
          <div className="mx-auto mb-14 flex h-64 w-64 items-center justify-center overflow-hidden rounded-full bg-light-bg text-muted">
            <span className="text-sm">Photo coming soon</span>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted">
            {siteContent.about.fullBio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy — dark */}
      <section className="bg-dark px-6 py-24 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading title="My Preaching Philosophy" light />
          <p className="mt-10 text-xl font-light leading-relaxed text-white/70">
            {siteContent.about.philosophy}
          </p>
        </div>
      </section>

      {/* Credentials — light */}
      <section className="bg-light-bg px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <SectionHeading title="Education & Credentials" />
          <ul className="mt-10 space-y-4">
            {siteContent.about.credentials.map((cred, i) => (
              <li key={i} className="flex items-start gap-4 text-muted">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="text-lg">{cred}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-deep px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-light">Interested in having me preach?</h2>
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
