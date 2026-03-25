import Link from "next/link";
import { siteContent } from "@/content/site-content";

export default function Footer() {
  return (
    <footer className="mt-auto bg-dark-deep text-white/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              {siteContent.fullName}
            </h3>
            <p className="mt-2 text-sm">{siteContent.title}</p>
            <p className="mt-1 text-sm">{siteContent.location}</p>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
              Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="transition-colors hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-accent">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="transition-colors hover:text-accent">
                  Book a Sunday
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteContent.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {siteContent.email}
                </a>
              </li>
              {siteContent.phone && (
                <li>
                  <a
                    href={`tel:${siteContent.phone}`}
                    className="transition-colors hover:text-accent"
                  >
                    {siteContent.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} {siteContent.fullName}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
