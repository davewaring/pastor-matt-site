import Link from "next/link";
import { siteContent } from "@/content/site-content";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-warm-gray-light bg-primary-dark text-white/80">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-lg font-bold text-white">{siteContent.fullName}</h3>
            <p className="mt-2 text-sm">{siteContent.title}</p>
            <p className="mt-1 text-sm">{siteContent.location}</p>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <Link href="/about" className="hover:text-accent-light transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent-light transition-colors">
                  Services & Rates
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-accent-light transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-semibold text-white">Get in Touch</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <a
                  href={`mailto:${siteContent.email}`}
                  className="hover:text-accent-light transition-colors"
                >
                  {siteContent.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteContent.phone}`}
                  className="hover:text-accent-light transition-colors"
                >
                  {siteContent.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} {siteContent.fullName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
