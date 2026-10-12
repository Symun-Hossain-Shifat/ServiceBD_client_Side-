"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

// Replace with data from your database / API when ready
const SERVICES = [
    { id: 1, name: "AC Repair & Servicing", category: "Home Repair", price: 800, time: "Same day", providers: 124, icon: "❄️" },
    { id: 2, name: "Electrician", category: "Home Repair", price: 400, time: "Within 2 hours", providers: 210, icon: "⚡" },
    { id: 3, name: "Plumbing", category: "Home Repair", price: 350, time: "Within 2 hours", providers: 168, icon: "🔧" },
    { id: 4, name: "Home Deep Cleaning", category: "Cleaning", price: 2500, time: "Next day", providers: 96, icon: "🧹" },
    { id: 5, name: "Sofa & Carpet Cleaning", category: "Cleaning", price: 1200, time: "Next day", providers: 58, icon: "🛋️" },
    { id: 6, name: "Pest Control", category: "Cleaning", price: 1800, time: "Same day", providers: 41, icon: "🪲" },
    { id: 7, name: "Home Tutor", category: "Education", price: 3000, time: "Within 3 days", providers: 233, icon: "📚" },
    { id: 8, name: "Beauty at Home", category: "Personal Care", price: 900, time: "Book a slot", providers: 77, icon: "💇" },
    { id: 9, name: "Laptop & Phone Repair", category: "Electronics", price: 500, time: "Same day", providers: 89, icon: "💻" },
    { id: 10, name: "Shifting & Packers", category: "Moving", price: 4500, time: "Book a slot", providers: 37, icon: "📦" },
    { id: 11, name: "Painting", category: "Home Repair", price: 6000, time: "Within 3 days", providers: 52, icon: "🎨" },
    { id: 12, name: "Car Wash & Care", category: "Vehicle", price: 600, time: "Same day", providers: 63, icon: "🚗" },
];

const CATEGORIES = ["All", ...Array.from(new Set(SERVICES.map((s) => s.category)))];

const STEPS = [
    { title: "Choose a service", text: "Pick what you need and tell us where and when." },
    { title: "Compare providers", text: "See prices, ratings and reviews from verified providers." },
    { title: "Book and pay", text: "Confirm a time that suits you. Pay online or after the job." },
    { title: "Rate the work", text: "Share feedback so the next customer knows who to trust." },
];

export default function ServicesPage() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("All");

    const results = useMemo(() => {
        const q = query.trim().toLowerCase();
        return SERVICES.filter(
            (s) =>
                (category === "All" || s.category === category) &&
                (!q || s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q))
        );
    }, [query, category]);

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            {/* Hero */}
            <section className="bg-emerald-900 text-white">
                <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
                    <h1 className="max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">
                        Trusted help for your home, one booking away
                    </h1>
                    <p className="mt-4 max-w-xl text-emerald-100">
                        Find verified service providers across Bangladesh. See the price before you book.
                    </p>

                    <div className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
                        <label htmlFor="service-search" className="sr-only">
                            Search services
                        </label>
                        <input
                            id="service-search"
                            type="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for AC repair, cleaning, tutor…"
                            className="w-full rounded-lg border border-transparent bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-amber-300"
                        />
                    </div>
                </div>
            </section>

            {/* Filters + grid */}
            <section className="mx-auto max-w-6xl px-4 py-10">
                <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
                    {CATEGORIES.map((c) => (
                        <button
                            key={c}
                            type="button"
                            onClick={() => setCategory(c)}
                            aria-pressed={category === c}
                            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 ${category === c
                                    ? "border-emerald-900 bg-emerald-900 text-white"
                                    : "border-slate-300 bg-white text-slate-700 hover:border-emerald-700"
                                }`}
                        >
                            {c}
                        </button>
                    ))}
                </div>

                <p className="mt-6 text-sm text-slate-600" aria-live="polite">
                    {results.length} {results.length === 1 ? "service" : "services"} available
                </p>

                {results.length === 0 ? (
                    <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
                        <p className="font-semibold">No services match your search</p>
                        <p className="mt-1 text-sm text-slate-600">Try a different word, or clear the category filter.</p>
                        <button
                            type="button"
                            onClick={() => {
                                setQuery("");
                                setCategory("All");
                            }}
                            className="mt-4 rounded-lg bg-emerald-900 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800"
                        >
                            Clear filters
                        </button>
                    </div>
                ) : (
                    <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {results.map((s) => (
                            <li key={s.id}>
                                <Link
                                    href={`/services/${s.id}`}
                                    className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition hover:border-emerald-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
                                >
                                    <div className="flex items-start justify-between">
                                        <span className="text-3xl" aria-hidden="true">{s.icon}</span>
                                        <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600">{s.category}</span>
                                    </div>
                                    <h2 className="mt-4 text-lg font-semibold">{s.name}</h2>
                                    <p className="mt-1 text-sm text-slate-600">
                                        {s.providers} providers · Available {s.time.toLowerCase()}
                                    </p>
                                    <div className="mt-auto flex items-end justify-between pt-5">
                                        <p className="text-sm text-slate-600">
                                            Starts at <span className="text-lg font-bold text-emerald-900">৳{s.price.toLocaleString("en-US")}</span>
                                        </p>
                                        <span className="text-sm font-medium text-emerald-800">Book now</span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            {/* How it works */}
            <section className="border-y border-slate-200 bg-white">
                <div className="mx-auto max-w-6xl px-4 py-14">
                    <h2 className="text-2xl font-bold">How booking works</h2>
                    <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {STEPS.map((step, i) => (
                            <li key={step.title} className="flex gap-3">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-300 text-sm font-bold text-emerald-950">
                                    {i + 1}
                                </span>
                                <div>
                                    <h3 className="font-semibold">{step.title}</h3>
                                    <p className="mt-1 text-sm text-slate-600">{step.text}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-6xl px-4 py-14">
                <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-emerald-900 p-8 text-white sm:flex-row sm:items-center">
                    <div>
                        <h2 className="text-xl font-bold">Offer a service? Join as a provider</h2>
                        <p className="mt-1 text-emerald-100">Reach new customers in your area and manage bookings in one place.</p>
                    </div>
                    <Link
                        href="/providers"
                        className="rounded-lg bg-amber-300 px-5 py-3 font-semibold text-emerald-950 hover:bg-amber-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
                    >
                        Become a provider
                    </Link>
                </div>
            </section>
        </main>
    );
}