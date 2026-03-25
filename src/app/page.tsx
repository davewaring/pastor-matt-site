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

      {/* Experience highlights */}
      <section className="bg-warm-gray-lighter px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            title="Ministry Experience"
            subtitle="A lifetime of serving the Church across the world"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {siteContent.experienceHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-lg bg-white p-6 shadow-sm text-center"
              >
                <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-warm-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sermon topics */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="What I Preach"
            subtitle="Core themes I'm passionate about"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {siteContent.sermonTopics.map((topic) => (
              <div
                key={topic}
                className="rounded-lg border border-warm-gray-light bg-warm-gray-lighter px-6 py-4 text-lg font-medium text-primary"
              >
                {topic}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-warm-gray">
            {siteContent.speakingStyle}
          </p>
        </div>
      </section>

      {/* Testimonials — only show if there are any */}
      {siteContent.testimonials.length > 0 && (
        <section className="bg-warm-gray-lighter px-6 py-20">
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
      )}

      {/* CTA */}
      <section className="bg-primary px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Need a Guest Preacher?</h2>
          <p className="mt-4 text-lg text-white/80">
            Whether your pastor is on vacation, sabbatical, or your church is in
            transition — I&apos;d be honored to serve your congregation.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-accent px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-accent-light"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
