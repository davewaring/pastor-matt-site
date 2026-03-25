import { siteContent } from "@/content/site-content";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: `Contact — ${siteContent.fullName}`,
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-dark px-6 py-24 text-center text-white">
        <h1 className="text-4xl font-light md:text-5xl">Get in Touch</h1>
        <p className="mt-4 text-lg text-white/50">
          I&apos;d love to hear from you and your church
        </p>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-16 md:grid-cols-2">
            {/* Contact info */}
            <div>
              <SectionHeading title="Contact Info" centered={false} />
              <div className="mt-10 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-dark">
                    Email
                  </h3>
                  <a
                    href={`mailto:${siteContent.email}`}
                    className="mt-1 block text-lg text-accent transition-colors hover:text-accent-hover"
                  >
                    {siteContent.email}
                  </a>
                </div>
                {siteContent.phone && (
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-dark">
                      Phone
                    </h3>
                    <a
                      href={`tel:${siteContent.phone}`}
                      className="mt-1 block text-lg text-accent transition-colors hover:text-accent-hover"
                    >
                      {siteContent.phone}
                    </a>
                  </div>
                )}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-dark">
                    Location
                  </h3>
                  <p className="mt-1 text-lg text-muted">{siteContent.location}</p>
                </div>
              </div>

              <div className="mt-12 rounded-xl bg-light-bg p-8">
                <h3 className="font-semibold text-dark">Response Time</h3>
                <p className="mt-2 text-sm text-muted">
                  I typically respond within a few days. For time-sensitive
                  requests, please mention that in your message.
                </p>
              </div>

              <div className="mt-4 rounded-xl bg-light-bg p-8">
                <h3 className="font-semibold text-dark">What to Include</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Your church name and location
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Preferred Sunday date(s)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Service time(s)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Any specific topics or texts you&apos;d like
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Your church&apos;s denomination or tradition
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <SectionHeading title="Send a Message" centered={false} />
              <form
                className="mt-10 space-y-6"
                action={`mailto:${siteContent.email}`}
                method="POST"
                encType="text/plain"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-dark"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 block w-full rounded-lg border border-dark/15 px-4 py-3 text-dark focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
                    placeholder="Pastor John Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="church"
                    className="block text-sm font-medium text-dark"
                  >
                    Church Name
                  </label>
                  <input
                    type="text"
                    id="church"
                    name="church"
                    className="mt-2 block w-full rounded-lg border border-dark/15 px-4 py-3 text-dark focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
                    placeholder="Community Church"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-dark"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 block w-full rounded-lg border border-dark/15 px-4 py-3 text-dark focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
                    placeholder="pastor@communitychurch.org"
                  />
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-dark"
                  >
                    Preferred Sunday(s)
                  </label>
                  <input
                    type="text"
                    id="date"
                    name="date"
                    className="mt-2 block w-full rounded-lg border border-dark/15 px-4 py-3 text-dark focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
                    placeholder="e.g., June 15, 2026"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-dark"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 block w-full rounded-lg border border-dark/15 px-4 py-3 text-dark focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
                    placeholder="Tell me about your church and what you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-accent px-6 py-3 font-nav text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-accent-hover"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
