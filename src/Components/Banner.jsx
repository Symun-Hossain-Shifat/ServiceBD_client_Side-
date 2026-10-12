"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const QUICK_SERVICES = [
    { label: "AC Repair", icon: "❄️" },
    { label: "Electrician", icon: "⚡" },
    { label: "Plumbing", icon: "🔧" },
    { label: "Home Cleaning", icon: "🧹" },
    { label: "Home Tutor", icon: "📚" },
    { label: "Beauty at Home", icon: "💇" },
];

const TRUST = [
    { value: "500+", label: "Verified providers" },
    { value: "12,000+", label: "Jobs completed" },
    { value: "4.8/5", label: "Average rating" },
];

export default function HomeBanner() {
    const router = useRouter();
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        const q = query.trim();
        router.push(q ? `/services?search=${encodeURIComponent(q)}` : "/services");
    };

    return (
        <section className="relative overflow-hidden bg-emerald-900 text-white">
            {/* Soft background shapes */}
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-800" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-amber-300/10" />

            <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:py-24 lg:grid-cols-2">
                {/* Left: message + search */}
                <div>
                    <p className="inline-block rounded-full bg-emerald-800 px-3 py-1 text-sm text-emerald-100">
                        Now serving Dhaka, Chattogram and Sylhet
                    </p>

                    <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                        Book trusted home services in minutes
                    </h1>
                    <p className="mt-4 max-w-lg text-lg text-emerald-100">
                        Electricians, cleaners, tutors and more. Compare verified providers and see the price before you book.
                    </p>

                    <form onSubmit={handleSearch} className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" role="search">
                        <label htmlFor="banner-search" className="sr-only">
                            What service do you need?
                        </label>
                        <input
                            id="banner-search"
                            type="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="What do you need help with?"
                            className="w-full rounded-lg bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-amber-300"
                        />
                        <button
                            type="submit"
                            className="rounded-lg bg-amber-300 px-6 py-3 font-semibold text-emerald-950 transition hover:bg-amber-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
                        >
                            Find a service
                        </button>
                    </form>

                    <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
                        <span className="text-emerald-200">Popular:</span>
                        {QUICK_SERVICES.slice(0, 4).map((s) => (
                            <Link
                                key={s.label}
                                href={`/services?search=${encodeURIComponent(s.label)}`}
                                className="rounded-full border border-emerald-600 px-3 py-1 text-emerald-50 transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
                            >
                                {s.label}
                            </Link>
                        ))}
                    </div>

                    <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-emerald-700 pt-6">
                        {TRUST.map((t) => (
                            <div key={t.label}>
                                <dt className="sr-only">{t.label}</dt>
                                <dd className="text-2xl font-bold text-amber-300">{t.value}</dd>
                                <p className="text-xs text-emerald-200">{t.label}</p>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Right: service tiles */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
                    {QUICK_SERVICES.map((s) => (
                        <Link
                            key={s.label}
                            href={`/services?search=${encodeURIComponent(s.label)}`}
                            className="flex flex-col items-center gap-2 rounded-2xl bg-white p-5 text-center text-slate-900 transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
                        >
                            <span className="text-4xl" aria-hidden="true">{s.icon}</span>
                            <span className="text-sm font-semibold">{s.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}