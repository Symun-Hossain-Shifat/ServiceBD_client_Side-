import Link from "next/link";

export const metadata = {
    title: "Blog | Service BD",
    description:
        "Home care tips, guides for choosing providers, and news from Service BD.",
};

// Sample posts. Replace with data from MongoDB, MDX files, or a CMS.
const posts = [
    {
        slug: "how-to-choose-a-reliable-electrician",
        title: "How to choose a reliable electrician in your city",
        excerpt:
            "Licences, reviews, and the questions to ask before anyone touches your wiring.",
        category: "Guides",
        date: "2026-10-02",
        readMinutes: 6,
    },
    {
        slug: "monsoon-home-maintenance-checklist",
        title: "A monsoon maintenance checklist for your home",
        excerpt:
            "Roof, drains, wiring, and walls: what to check before the heavy rain arrives.",
        category: "Home care",
        date: "2026-09-24",
        readMinutes: 5,
    },
    {
        slug: "what-fair-service-pricing-looks-like",
        title: "What fair pricing looks like for common home services",
        excerpt:
            "How providers set their prices, and how to compare quotes without guesswork.",
        category: "Guides",
        date: "2026-09-15",
        readMinutes: 7,
    },
    {
        slug: "grow-your-service-business-on-service-bd",
        title: "Five habits of top-rated providers on Service BD",
        excerpt:
            "Arrive on time, communicate early, and finish clean. Here is what earns repeat customers.",
        category: "For providers",
        date: "2026-09-08",
        readMinutes: 4,
    },
    {
        slug: "ac-servicing-before-summer",
        title: "Why you should service your AC before summer starts",
        excerpt:
            "Lower bills, fewer breakdowns, and cleaner air for a few hundred taka of upkeep.",
        category: "Home care",
        date: "2026-08-29",
        readMinutes: 4,
    },
    {
        slug: "service-bd-new-cities",
        title: "Service BD is now available in more cities",
        excerpt:
            "See where you can book verified providers today and what is coming next.",
        category: "News",
        date: "2026-08-18",
        readMinutes: 2,
    },
];

const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

function formatDate(iso) {
    return new Date(iso).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

export default async function BlogPage({ searchParams }) {
    const { category } = await searchParams;
    const active = categories.includes(category ?? "") ? category : "All";

    const filtered = (
        active === "All" ? posts : posts.filter((p) => p.category === active)
    ).sort((a, b) => b.date.localeCompare(a.date));

    const [featured, ...rest] = filtered;

    return (
        <main className="bg-[#fbfaf7] text-[#16241f]">
            {/* Header */}
            <section className="mx-auto max-w-5xl px-5 pb-8 pt-16 sm:px-8 sm:pt-24">
                <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
                    The Service BD blog
                </h1>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#46564f]">
                    Practical advice for looking after your home, hiring with confidence,
                    and growing as a service provider.
                </p>

                <nav aria-label="Blog categories" className="mt-8 flex flex-wrap gap-2">
                    {categories.map((c) => {
                        const isActive = c === active;
                        return (
                            <Link
                                key={c}
                                href={c === "All" ? "/blog" : `/blog?category=${encodeURIComponent(c)}`}
                                aria-current={isActive ? "page" : undefined}
                                className={
                                    "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b6b4f] " +
                                    (isActive
                                        ? "border-[#0b6b4f] bg-[#0b6b4f] text-white"
                                        : "border-[#16241f]/20 hover:bg-[#16241f]/5")
                                }
                            >
                                {c}
                            </Link>
                        );
                    })}
                </nav>
            </section>

            {filtered.length === 0 ? (
                <section className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
                    <p className="text-[#46564f]">
                        No posts in this category yet.{" "}
                        <Link href="/blog" className="font-semibold text-[#0b6b4f] underline">
                            View all posts
                        </Link>
                    </p>
                </section>
            ) : (
                <>
                    {/* Featured post */}
                    <section className="mx-auto max-w-5xl px-5 py-8 sm:px-8">
                        <Link
                            href={`/blog/${featured.slug}`}
                            className="group block rounded-2xl bg-[#0b6b4f] p-8 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b6b4f] sm:p-12"
                        >
                            <p className="text-sm text-white/75">
                                {featured.category} · {formatDate(featured.date)} ·{" "}
                                {featured.readMinutes} min read
                            </p>
                            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight group-hover:underline sm:text-4xl">
                                {featured.title}
                            </h2>
                            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">
                                {featured.excerpt}
                            </p>
                        </Link>
                    </section>

                    {/* Post list */}
                    {rest.length > 0 && (
                        <section className="mx-auto max-w-5xl px-5 pb-20 pt-4 sm:px-8">
                            <ul className="grid gap-x-10 gap-y-10 md:grid-cols-2">
                                {rest.map((post) => (
                                    <li key={post.slug} className="border-t-4 border-[#d9a441] pt-5">
                                        <p className="text-sm text-[#5d6c65]">
                                            {post.category} · {formatDate(post.date)} ·{" "}
                                            {post.readMinutes} min read
                                        </p>
                                        <h3 className="mt-2 text-xl font-semibold leading-snug">
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b6b4f]"
                                            >
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <p className="mt-2 leading-relaxed text-[#46564f]">
                                            {post.excerpt}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </>
            )}

            {/* Provider CTA */}
            <section className="border-t border-[#16241f]/10">
                <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">
                            Need help with something at home?
                        </h2>
                        <p className="mt-2 max-w-md text-[#46564f]">
                            Book a verified provider near you in a few minutes.
                        </p>
                    </div>
                    <Link
                        href="/services"
                        className="rounded-lg bg-[#16241f] px-6 py-3 font-semibold text-white transition-colors hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b6b4f]"
                    >
                        Browse services
                    </Link>
                </div>
            </section>
        </main>
    );
}