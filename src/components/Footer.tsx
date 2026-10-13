import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--hairline)] py-12 text-sm text-[var(--muted)]">
      <div className="mx-auto max-w-4xl px-6 space-y-2">
        <p>{site.address.name}</p>
        <p>{site.address.street}<br />{site.address.city}</p>
        <p>Sessions & training: <a href={site.phoneCeciliaHref}>{site.phoneCecilia}</a> (Cecilia)</p>
        <p>Office: <a href={site.phoneOfficeHref}>{site.phoneOffice}</a></p>
        <p className="pt-4">A quiet place for spiritual healing, training, and returning to God.</p>
      </div>
    </footer>
  );
}
