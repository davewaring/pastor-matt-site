import { siteContent } from "@/content/site-content";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: `Contact — ${siteContent.fullName}`,
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-primary px-6 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="mt-3 text-lg text-white/80">
          I&apos;d love to hear from you and your church
        </p>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact info */}
            <div>
              <SectionHeading title="Contact Info" centered={false} />
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-primary">Email</h3>
                  <a
                    href={`mailto:${siteContent.email}`}
                    className="text-accent hover:underline"
                  >
                    {siteContent.email}
                  </a>
                </div>
                {siteContent.phone && (
                  <div>
                    <h3 className="font-semibold text-primary">Phone</h3>
                    <a
                      href={`tel:${siteContent.phone}`}
                      className="text-accent hover:underline"
                    >
                      {siteContent.phone}
                    </a>
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-primary">Location</h3>
                  <p className="text-warm-gray">{siteContent.location}</p>
                </div>
              </div>

              <div className="mt-10 rounded-lg bg-warm-gray-lighter p-6">
                <h3 className="font-semibold text-primary">Response Time</h3>
                <p className="mt-2 text-sm text-warm-gray">
                  I typically respond within a few days. For time-sensitive
                  requests, please mention that in your message.
                </p>
              </div>

              <div className="mt-6 rounded-lg bg-warm-gray-lighter p-6">
                <h3 className="font-semibold text-primary">What to Include</h3>
                <ul className="mt-2 space-y-1 text-sm text-warm-gray">
                  <li>&#8226; Your church name and location</li>
                  <li>&#8226; Preferred Sunday date(s)</li>
                  <li>&#8226; Service time(s)</li>
                  <li>&#8226; Any specific topics or texts you&apos;d like</li>
                  <li>&#8226; Your church&apos;s denomination or tradition</li>
                </ul>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <SectionHeading title="Send a Message" centered={false} />
              <form
                className="mt-8 space-y-5"
                action={`mailto:${siteContent.email}`}
                method="POST"
                encType="text/plain"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-lg border border-warm-gray-light px-4 py-2.5 text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    placeholder="Pastor John Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="church"
                    className="block text-sm font-medium text-foreground"
                  >
                    Church Name
                  </label>
                  <input
                    type="text"
                    id="church"
                    name="church"
                    className="mt-1 block w-full rounded-lg border border-warm-gray-light px-4 py-2.5 text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    placeholder="Community Church"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-lg border border-warm-gray-light px-4 py-2.5 text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    placeholder="pastor@communitychurch.org"
                  />
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-foreground"
                  >
                    Preferred Sunday(s)
                  </label>
                  <input
                    type="text"
                    id="date"
                    name="date"
                    className="mt-1 block w-full rounded-lg border border-warm-gray-light px-4 py-2.5 text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    placeholder="e.g., June 15, 2026"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-1 block w-full rounded-lg border border-warm-gray-light px-4 py-2.5 text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    placeholder="Tell me about your church and what you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-light"
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
