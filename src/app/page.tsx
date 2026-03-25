import Link from "next/link";
import { siteContent } from "@/content/site-content";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            {siteContent.hero.headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80 md:text-xl">
            {siteContent.hero.subheadline}
          </p>
          <Link
            href={siteContent.hero.ctaLink}
            className="mt-8 inline-block rounded-lg bg-accent px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-accent-light"
          >
            {siteContent.hero.ctaText}
          </Link>
        </div>
      </section>

      {/* About preview */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="About" subtitle="A little about who I am and why I preach" />
          <p className="mt-8 text-center text-lg leading-relaxed text-warm-gray">
            {siteContent.about.shortBio}
          </p>
          <div className="mt-6 text-center">
            <Link
              href="/about"
              className="font-medium text-primary transition-colors hover:text-accent"
            >
              Read more &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Sermon topics */}
      <section className="bg-warm-gray-lighter px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="What I Preach"
            subtitle="Topics and themes I'm passionate about"
          />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {siteContent.sermonTopics.map((topic) => (
              <li
                key={topic}
                className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm"
              >
                <span className="mt-0.5 text-accent">&#10003;</span>
                <span className="text-foreground">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading title="What Churches Are Saying" />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {siteContent.testimonials.map((t, i) => (
              <blockquote
                key={i}
                className="rounded-lg border border-warm-gray-light bg-white p-6 shadow-sm"
              >
                <p className="text-foreground leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm text-warm-gray">
                  <strong className="text-foreground">{t.author}</strong>
                  <br />
                  {t.church}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Ready to Book?</h2>
          <p className="mt-4 text-lg text-white/80">
            Check my availability and schedule a Sunday. I&apos;d love to serve your
            congregation.
          </p>
          <Link
            href="/schedule"
            className="mt-6 inline-block rounded-lg bg-accent px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-accent-light"
          >
            View My Schedule
          </Link>
        </div>
      </section>
    </>
  );
}
