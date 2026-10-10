"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

// Sample data. Replace with a fetch from your database / API.
const PROVIDERS = [
    { id: "p1", name: "Rafiq Electric Care", category: "Electrician", area: "Mirpur, Dhaka", rating: 4.8, reviews: 126, jobs: 340, price: 500, verified: true, available: true, bio: "Wiring, fan and switch repair, and short-circuit fixes. Same-day visits." },
    { id: "p2", name: "Shumi Home Cleaning", category: "Cleaning", area: "Dhanmondi, Dhaka", rating: 4.9, reviews: 212, jobs: 580, price: 1200, verified: true, available: true, bio: "Deep cleaning for flats and offices with our own supplies." },
    { id: "p3", name: "Jamal Plumbing Service", category: "Plumber", area: "GEC, Chittagong", rating: 4.6, reviews: 74, jobs: 190, price: 400, verified: true, available: false, bio: "Leak repair, tap and pipe fitting, water tank cleaning." },
    { id: "p4", name: "CoolBreeze AC Repair", category: "AC Repair", area: "Uttara, Dhaka", rating: 4.7, reviews: 98, jobs: 260, price: 800, verified: true, available: true, bio: "AC servicing, gas refill, and installation for all brands." },
    { id: "p5", name: "Nasrin Beauty at Home", category: "Beauty", area: "Agrabad, Chittagong", rating: 4.8, reviews: 151, jobs: 410, price: 1500, verified: false, available: true, bio: "Bridal and party makeup, hair styling, and facials at your door." },
    { id: "p6", name: "Tutor Hub by Imran", category: "Tutoring", area: "Zindabazar, Sylhet", rating: 4.5, reviews: 41, jobs: 88, price: 600, verified: false, available: true, bio: "Math and science for class 6 to 12, online or at home." },
    { id: "p7", name: "Sabbir Carpentry Works", category: "Carpenter", area: "Khulshi, Chittagong", rating: 4.4, reviews: 53, jobs: 120, price: 700, verified: true, available: false, bio: "Furniture repair, door and window fitting, custom shelves." },
    { id: "p8", name: "SafeMove Packers", category: "Moving", area: "Banani, Dhaka", rating: 4.7, reviews: 89, jobs: 150, price: 3500, verified: true, available: true, bio: "House shifting with packing, loading, and transport." },
];

const SORTS = {
    rating: { label: "Top rated", fn: (a, b) => b.rating - a.rating },
    reviews: { label: "Most reviewed", fn: (a, b) => b.reviews - a.reviews },
    low: { label: "Price: low to high", fn: (a, b) => a.price - b.price },
    high: { label: "Price: high to low", fn: (a, b) => b.price - a.price },
};

const CATEGORIES = ["All", ...Array.from(new Set(PROVIDERS.map((p) => p.category)))];

function initials(name) {
    return name
        .split(" ")
        .slice(0, 2)
        .map((w) => w[0])
        .join("")
        .toUpperCase();
}

export default function ProvidersPage() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("rating");
    const [verifiedOnly, setVerifiedOnly] = useState(false);
    const [availableOnly, setAvailableOnly] = useState(false);

    const list = useMemo(() => {
        const q = query.trim().toLowerCase();
        return PROVIDERS.filter((p) => {
            if (category !== "All" && p.category !== category) return false;
            if (verifiedOnly && !p.verified) return false;
            if (availableOnly && !p.available) return false;
            if (!q) return true;
            return (
                p.name.toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q) ||
                p.area.toLowerCase().includes(q)
            );
        }).sort(SORTS[sort].fn);
    }, [query, category, sort, verifiedOnly, availableOnly]);

    function reset() {
        setQuery("");
        setCategory("All");
        setVerifiedOnly(false);
        setAvailableOnly(false);
    }

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <section className="bg-emerald-900 px-4 py-14 text-white">
                <div className="mx-auto max-w-6xl">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Find a service provider
                    </h1>
                    <p className="mt-3 max-w-xl text-emerald-100">
                        Verified professionals near you, with real ratings from real jobs.
                    </p>
                    <label htmlFor="provider-search" className="sr-only">
                        Search providers
                    </label>
                    <input
                        id="provider-search"
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search by name, service, or area"
                        className="mt-6 w-full max-w-2xl rounded-xl border-2 border-transparent bg-white px-5 py-4 text-slate-900 shadow-lg outline-none placeholder:text-slate-400 focus:border-red-500"
                    />
                </div>
            </section>

            <div className="mx-auto max-w-6xl px-4 py-8">
                {/* Filters */}
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Service categories">
                        {CATEGORIES.map((c) => (
                            <button
                                key={c}
                                role="tab"
                                aria-selected={category === c}
                                onClick={() => setCategory(c)}
                                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${category === c
                                        ? "border-emerald-900 bg-emerald-900 text-white"
                                        : "border-slate-300 bg-white text-slate-700 hover:border-emerald-900"
                                    }`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={verifiedOnly}
                                onChange={(e) => setVerifiedOnly(e.target.checked)}
                                className="h-4 w-4 accent-emerald-800"
                            />
                            Verified only
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={availableOnly}
                                onChange={(e) => setAvailableOnly(e.target.checked)}
                                className="h-4 w-4 accent-emerald-800"
                            />
                            Available now
                        </label>
                        <label className="flex items-center gap-2">
                            <span className="text-slate-600">Sort by</span>
                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                                className="rounded-lg border border-slate-300 bg-white px-3 py-2 focus-visible:outline-2 focus-visible:outline-emerald-700"
                            >
                                {Object.entries(SORTS).map(([key, s]) => (
                                    <option key={key} value={key}>
                                        {s.label}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                </div>

                <p className="mt-6 text-sm text-slate-600" aria-live="polite">
                    {list.length} {list.length === 1 ? "provider" : "providers"} found
                </p>

                {/* Results */}
                {list.length === 0 ? (
                    <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
                        <p className="font-semibold">No providers match your filters</p>
                        <p className="mt-1 text-slate-600">
                            Try a different area or remove a filter.
                        </p>
                        <button
                            onClick={reset}
                            className="mt-4 rounded-lg bg-emerald-900 px-5 py-2 font-medium text-white hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                        >
                            Clear filters
                        </button>
                    </div>
                ) : (
                    <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {list.map((p) => (
                            <li
                                key={p.id}
                                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5"
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        aria-hidden
                                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-900"
                                    >
                                        {initials(p.name)}
                                    </div>
                                    <div className="min-w-0">
                                        <h2 className="truncate text-lg font-semibold">{p.name}</h2>
                                        <p className="text-sm text-slate-600">
                                            {p.category} in {p.area}
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-4 text-sm leading-relaxed text-slate-700">{p.bio}</p>

                                <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium">
                                    {p.verified && (
                                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-900">
                                            Verified
                                        </span>
                                    )}
                                    <span
                                        className={`rounded-full px-3 py-1 ${p.available
                                                ? "bg-emerald-50 text-emerald-800"
                                                : "bg-slate-100 text-slate-600"
                                            }`}
                                    >
                                        {p.available ? "Available now" : "Busy today"}
                                    </span>
                                </div>

                                <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 text-center">
                                    <div>
                                        <dt className="text-xs text-slate-500">Rating</dt>
                                        <dd className="font-semibold">
                                            {p.rating} <span className="text-amber-500">★</span>
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="text-xs text-slate-500">Reviews</dt>
                                        <dd className="font-semibold">{p.reviews}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-xs text-slate-500">Jobs done</dt>
                                        <dd className="font-semibold">{p.jobs}</dd>
                                    </div>
                                </dl>

                                <div className="mt-5 flex items-center justify-between gap-3">
                                    <p className="text-sm text-slate-600">
                                        From{" "}
                                        <span className="text-lg font-bold text-slate-900">
                                            ৳{p.price.toLocaleString("en-US")}
                                        </span>
                                    </p>
                                    <Link
                                        href={`/providers/${p.id}`}
                                        className="rounded-lg bg-emerald-900 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                                    >
                                        View and book
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    );
}