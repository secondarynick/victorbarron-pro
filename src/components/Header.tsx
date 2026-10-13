import Link from "next/link";
import { nav, site } from "@/lib/content";

export default function Header() {
  return (
    <header className="border-b border-[var(--hairline)]">
      <div className="mx-auto max-w-4xl px-6 py-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <Link href="/" className="no-underline">
          <p className="text-2xl tracking-tight">{site.name}</p>
          <p className="text-sm text-[var(--muted)] mt-1">{site.tagline}</p>
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
