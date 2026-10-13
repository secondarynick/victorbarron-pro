import { site, upcomingEvents, testimonials } from "@/lib/content";
import { photos } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl md:text-5xl leading-tight">Spiritual healer and shaman teacher in Whittier, California.</h1>
      <p className="mt-6 text-xl leading-8 max-w-2xl">{site.description}</p>
      <p className="mt-6">To book a session, call Cecilia at <a href={site.phoneCeciliaHref}>{site.phoneCecilia}</a>.</p>
      <div className="mt-12 relative aspect-video max-w-2xl">
        <Image src={photos.victorRed} alt="Victor Barron" fill className="object-cover" />
      </div>
      <section className="mt-16">
        <h2 className="text-3xl">Upcoming</h2>
        {upcomingEvents.map(e => (
          <div key={e.title} className="mt-4 border-t pt-4">
            <p className="font-medium">{e.title}</p>
            <p className="text-sm text-muted">{e.dates} · {e.place}</p>
            <p className="mt-2">{e.summary}</p>
          </div>
        ))}
      </section>
      <blockquote className="mt-16 italic text-xl">“{testimonials[0].quote}” <footer className="mt-2 text-sm not-italic">— {testimonials[0].initials}</footer></blockquote>
    </div>
  );
}
