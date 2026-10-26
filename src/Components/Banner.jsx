"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CITIES = ["Dhaka", "Chattogram", "Sylhet"];

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

const BOOKING_STEPS = [
    { title: "Pick a service", note: "AC Repair, Gas refill" },
    { title: "Choose a time", note: "Tomorrow, 10:00 AM" },
    { title: "See the price", note: "Fixed, no surprise charges" },
];

export default function HomeBanner() {
    const router = useRouter();
    const [query, setQuery] = useState("");
    const [city, setCity] = useState(CITIES[0]);

    const handleSearch = (e) => {
        e.preventDefault();
        const params = new URLSearchParams();
        const q = query.trim();
        if (q) params.set("search", q);
        if (city) params.set("city", city);
        const qs = params.toString();
        router.push(qs ? `/services?${qs}` : "/services");
    };

    return (
        <section className="relative overflow-hidden bg-stone-50 text-slate-900">
            {/* Dotted grid backdrop */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(#d6d3d1_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
            />

            <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
                {/* Left: message + search */}
                <div>
                    <h1 className="max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl">
                        Someone reliable for every job at home.
                    </h1>
                    <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-600">
                        Compare verified electricians, cleaners, tutors and more. You see the price before you book.
                    </p>

                    {/* Search panel */}
                    <form
                        onSubmit={handleSearch}
                        role="search"
                        className="mt-8 flex max-w-2xl flex-col gap-2 rounded-2xl border border-stone-200 bg-white p-2 shadow-xl shadow-emerald-900/5 sm:flex-row sm:items-center sm:rounded-full"
                    >
                        <label htmlFor="banner-city" className="sr-only">
                            City
                        </label>
                        <select
                            id="banner-city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="rounded-full bg-stone-100 px-4 py-3 text-sm font-medium text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 sm:w-40"
                        >
                            {CITIES.map((c) => (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="banner-search" className="sr-only">
                            What service do you need?
                        </label>
                        <input
                            id="banner-search"
                            type="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search a service, e.g. AC repair"
                            className="min-w-0 flex-1 bg-transparent px-3 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none"
                        />

                        <button
                            type="submit"
                            className="rounded-full bg-emerald-700 px-7 py-3 font-semibold text-white transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
                        >
                            Search
                        </button>
                    </form>

                    {/* Service chips */}
                    <ul className="mt-6 flex max-w-2xl flex-wrap gap-2" aria-label="Popular services">
                        {QUICK_SERVICES.map((s) => (
                            <li key={s.label}>
                                <Link
                                    href={`/services?search=${encodeURIComponent(s.label)}`}
                                    className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-600 hover:text-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
                                >
                                    <span aria-hidden="true">{s.icon}</span>
                                    {s.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Trust row */}
                    <dl className="mt-10 flex max-w-lg divide-x divide-stone-300">
                        {TRUST.map((t, i) => (
                            <div key={t.label} className={i === 0 ? "pr-6" : "px-6"}>
                                <dd className="text-xl font-bold text-emerald-900">{t.value}</dd>
                                <dt className="text-xs text-slate-500">{t.label}</dt>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Right: booking preview */}
                <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                    <div aria-hidden="true" className="absolute -right-3 -top-3 h-full w-full rotate-3 rounded-3xl bg-amber-200" />
                    <div aria-hidden="true" className="absolute -left-3 top-3 h-full w-full -rotate-2 rounded-3xl bg-emerald-200" />

                    <div className="relative rounded-3xl border border-stone-200 bg-white p-6 shadow-2xl shadow-emerald-900/10">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-emerald-950">Your booking</p>
                            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                                Provider confirmed
                            </span>
                        </div>

                        <div className="mt-5 flex items-center gap-4 rounded-2xl bg-stone-50 p-4">
                            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-3xl shadow-sm" aria-hidden="true">
                                ❄️
                            </span>
                            <div className="min-w-0">
                                <p className="font-semibold">AC Repair and Service</p>
                                <p className="text-sm text-slate-500">Verified provider, rated 4.9</p>
                            </div>
                        </div>

                        <ol className="mt-5 space-y-4">
                            {BOOKING_STEPS.map((step) => (
                                <li key={step.title} className="flex items-start gap-3">
                                    <span
                                        aria-hidden="true"
                                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs text-white"
                                    >
                                        ✓
                                    </span>
                                    <div>
                                        <p className="text-sm font-semibold">{step.title}</p>
                                        <p className="text-sm text-slate-500">{step.note}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <div className="mt-6 flex items-center justify-between border-t border-dashed border-stone-300 pt-5">
                            <p className="text-sm text-slate-500">Total price</p>
                            <p className="text-2xl font-extrabold text-emerald-950">৳ 800</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}