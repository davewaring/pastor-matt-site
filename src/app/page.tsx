import Link from "next/link";
import { siteContent } from "@/content/site-content";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {
  return (
    <>
      {/* Hero — dark, cinematic, full-viewport */}
      <section className="flex min-h-[70vh] items-center justify-center bg-dark px-6 py-28 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-light leading-tight md:text-6xl">
            {siteContent.hero.headline}
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/60">
            {siteContent.hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={siteContent.hero.ctaLink}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 font-nav text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-accent-hover"
            >
              {siteContent.hero.ctaText}
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 font-nav text-sm font-medium uppercase tracking-wider text-white transition-colors hover:border-white/50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About preview — white section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading title="About Matt" />
          <p className="mt-8 text-lg leading-relaxed text-muted">
            {siteContent.about.shortBio}
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block font-nav text-sm font-medium uppercase tracking-wider text-accent transition-colors hover:text-accent-hover"
          >
            Read more &rarr;
          </Link>
        </div>
      </section>

      {/* Experience highlights — dark section */}
      <section className="bg-dark px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            title="Ministry Experience"
            subtitle="A lifetime of serving the Church across the world"
            light
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {siteContent.experienceHighlights.map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sermon topics — light section */}
      <section className="bg-light-bg px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            title="What I Preach"
            subtitle="Core themes I'm passionate about"
          />
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {siteContent.sermonTopics.map((topic) => (
              <div
                key={topic}
                className="rounded-full border border-dark/10 bg-white px-6 py-3 text-lg font-light text-dark"
              >
                {topic}
              </div>
            ))}
          </div>
          <p className="mt-10 text-base leading-relaxed text-muted">
            {siteContent.speakingStyle}
          </p>
        </div>
      </section>

      {/* Testimonials — only show if there are any */}
      {siteContent.testimonials.length > 0 && (
        <section className="bg-dark px-6 py-24 text-white">
          <div className="mx-auto max-w-5xl">
            <SectionHeading title="What Churches Are Saying" light />
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {siteContent.testimonials.map((t, i) => (
                <blockquote
                  key={i}
                  className="rounded-lg border border-white/10 p-8"
                >
                  <p className="leading-relaxed text-white/80 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-6 text-sm text-white/40">
                    <strong className="text-white/70">{t.author}</strong>
                    <br />
                    {t.church}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA — dark deep */}
      <section className="bg-dark-deep px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-light md:text-4xl">
            Need a Guest Preacher?
          </h2>
          <p className="mt-6 text-lg text-white/50">
            Whether your pastor is on vacation, sabbatical, or your church is in
            transition — I&apos;d be honored to serve your congregation.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 font-nav text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-accent-hover"
          >
            Get in Touch <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
