"use client";

import { useState } from "react";
import Link from "next/link";

const CATEGORIES = [
    { id: "All", label: "All Services", icon: "✨" },
    { id: "Home Repair", label: "Home Repair", icon: "🔧" },
    { id: "Cleaning", label: "Deep Cleaning", icon: "🧹" },
    { id: "Personal Care", label: "Personal Care", icon: "💇" },
    { id: "Education", label: "Education", icon: "📚" },
    { id: "Moving", label: "Moving & Shifting", icon: "📦" },
];

const FEATURED_SERVICES = [
    {
        id: 1,
        name: "AC Repair & Servicing",
        category: "Home Repair",
        price: 800,
        time: "Same day",
        providers: 124,
        rating: 4.9,
        reviews: 280,
        icon: "❄️",
        badge: "🔥 Most Booked",
        description: "Filter cleaning, cooling coil check, gas leakage inspection, and full chemical wash.",
        features: ["Certified AC Technicians", "30-Day Free Reservice", "Genuine Spare Parts"],
    },
    {
        id: 2,
        name: "Electrician & Wiring",
        category: "Home Repair",
        price: 400,
        time: "Within 2 hours",
        providers: 210,
        rating: 4.8,
        reviews: 312,
        icon: "⚡",
        badge: "⚡ Urgent Response",
        description: "Short circuit repair, switchboard & breaker fitting, fan installation, and safety checks.",
        features: ["Emergency Dispatch", "Safety Tested Tools", "Fixed Transparent Rates"],
    },
    {
        id: 3,
        name: "Plumbing & Sanitary",
        category: "Home Repair",
        price: 350,
        time: "Within 2 hours",
        providers: 168,
        rating: 4.8,
        reviews: 194,
        icon: "🔧",
        badge: "💧 Quick Fix",
        description: "Pipe leak fixes, tap & commode installation, motor setup, and water tank maintenance.",
        features: ["Rapid Doorstep Arrival", "Damage Prevention", "Transparent Material Cost"],
    },
    {
        id: 4,
        name: "Home Deep Cleaning",
        category: "Cleaning",
        price: 2500,
        time: "Next day",
        providers: 96,
        rating: 4.9,
        reviews: 215,
        icon: "🧹",
        badge: "⭐ 5-Star Rated",
        description: "Floor scrubbing, kitchen degreasing, bathroom disinfection, and balcony cleaning.",
        features: ["Eco-friendly Chemicals", "Professional Equipment", "100% Satisfaction Guarantee"],
    },
    {
        id: 5,
        name: "Sofa & Carpet Cleaning",
        category: "Cleaning",
        price: 1200,
        time: "Next day",
        providers: 58,
        rating: 4.7,
        reviews: 142,
        icon: "🛋️",
        badge: "✨ Fresh Living",
        description: "Deep steam shampooing, tough stain removal, and odor elimination for all fabrics.",
        features: ["Quick-dry Process", "Allergen & Dust Mite Removal", "Gentle on Fabric"],
    },
    {
        id: 6,
        name: "Beauty & Salon at Home",
        category: "Personal Care",
        price: 900,
        time: "Book a slot",
        providers: 77,
        rating: 4.9,
        reviews: 185,
        icon: "💇",
        badge: "👑 Female Friendly",
        description: "Facials, waxing, manicure, pedicure, hair styling, and bridal party makeup in comfort.",
        features: ["Verified Female Beauticians", "Single-use Disposables", "Top Branded Products"],
    },
    {
        id: 7,
        name: "Verified Home Tutor",
        category: "Education",
        price: 3000,
        time: "Within 3 days",
        providers: 233,
        rating: 4.8,
        reviews: 164,
        icon: "📚",
        badge: "🎓 Top Mentors",
        description: "Experienced tutors from BUET, DU, and top universities for class 1 to 12 curricula.",
        features: ["Background Verified", "Free 2-day Demo Class", "Bangla & English Medium"],
    },
    {
        id: 8,
        name: "Home Shifting & Packers",
        category: "Moving",
        price: 4500,
        time: "Book a slot",
        providers: 37,
        rating: 4.7,
        reviews: 98,
        icon: "📦",
        badge: "🚛 Safe Transit",
        description: "Complete apartment packing, careful loading, dedicated transport, and furniture assembly.",
        features: ["Bubble Wrap & Crates", "Zero Breakage Promise", "Inter-city Transport"],
    },
];

export default function FeaturedServices() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredServices = selectedCategory === "All"
        ? FEATURED_SERVICES
        : FEATURED_SERVICES.filter((s) => s.category === selectedCategory);

    return (
        <section
            id="featured-services"
            aria-labelledby="services-heading"
            className="relative bg-slate-50 py-16 sm:py-24"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Header */}
                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-800">
                            ✨ Most Requested in Bangladesh
                        </span>
                        <h2
                            id="services-heading"
                            className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                        >
                            Popular Services Ready to Book
                        </h2>
                        <p className="mt-3 max-w-2xl text-base text-slate-600">
                            Book background-checked professionals with upfront pricing,
                            satisfaction guarantee, and doorstep service across Dhaka, Chattogram, and Sylhet.
                        </p>
                    </div>

                    <Link
                        href="/Services"
                        className="inline-flex items-center gap-2 rounded-xl bg-emerald-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-700"
                    >
                        <span>View All 20+ Services</span>
                        <svg
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>

                {/* Category Pills Filter */}
                <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
                    {CATEGORIES.map((cat) => {
                        const isActive = selectedCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                type="button"
                                onClick={() => setSelectedCategory(cat.id)}
                                aria-pressed={isActive}
                                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                                    isActive
                                        ? "bg-emerald-900 text-white shadow-sm ring-2 ring-emerald-900"
                                        : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                                }`}
                            >
                                <span aria-hidden="true">{cat.icon}</span>
                                <span>{cat.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Service Cards Grid */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredServices.map((service) => (
                        <div
                            key={service.id}
                            className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg"
                        >
                            <div>
                                {/* Top Meta: Icon + Badge */}
                                <div className="flex items-start justify-between gap-2">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-2xl shadow-inner transition group-hover:scale-105 group-hover:bg-emerald-100">
                                        <span aria-hidden="true">{service.icon}</span>
                                    </div>
                                    <span className="inline-block rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">
                                        {service.badge}
                                    </span>
                                </div>

                                {/* Title & Category */}
                                <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-emerald-900">
                                    {service.name}
                                </h3>
                                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500">
                                    {service.description}
                                </p>

                                {/* Rating and Speed */}
                                <div className="mt-3 flex items-center justify-between border-y border-slate-100 py-2.5 text-xs text-slate-600">
                                    <div className="flex items-center gap-1 font-semibold text-slate-900">
                                        <svg
                                            className="h-4 w-4 text-amber-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                                        </svg>
                                        <span>{service.rating}</span>
                                        <span className="font-normal text-slate-400">({service.reviews})</span>
                                    </div>
                                    <span className="flex items-center gap-1 rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                                        ⏱️ {service.time}
                                    </span>
                                </div>

                                {/* Features Checklist */}
                                <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                                    {service.features.map((feat) => (
                                        <li key={feat} className="flex items-center gap-1.5">
                                            <svg
                                                className="h-3.5 w-3.5 shrink-0 text-emerald-600"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Pricing & CTA */}
                            <div className="mt-5 border-t border-slate-100 pt-4">
                                <div className="flex items-baseline justify-between">
                                    <div>
                                        <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400">Starts at</span>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-xl font-bold text-slate-900">৳ {service.price.toLocaleString()}</span>
                                        </div>
                                    </div>
                                    <span className="text-[11px] font-medium text-emerald-700">
                                        {service.providers} pros ready
                                    </span>
                                </div>

                                <Link
                                    href={`/Services?search=${encodeURIComponent(service.name)}`}
                                    className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl bg-emerald-50 px-3 py-2.5 text-xs font-semibold text-emerald-900 transition hover:bg-emerald-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
                                >
                                    <span>Book Service</span>
                                    <svg
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Assurance & Emergency Mini-Banner */}
                <div className="mt-12 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-900 to-emerald-950 p-6 text-white shadow-md sm:p-8">
                    <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                        <div className="max-w-2xl">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-800/80 px-3 py-1 text-xs font-medium text-amber-300">
                                ⚡ Need Urgent Assistance?
                            </span>
                            <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                                24/7 Emergency Plumber & Electrician Dispatch
                            </h3>
                            <p className="mt-2 text-sm text-emerald-100">
                                Water pipe burst, power failure, or AC breakdown? Get an experienced technician at your doorstep in under 60 minutes across major service zones.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            <Link
                                href="/Contact"
                                className="rounded-xl bg-amber-300 px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-amber-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
                            >
                                Request Emergency Service
                            </Link>
                            <Link
                                href="/WorkFlow"
                                className="rounded-xl border border-emerald-600 bg-emerald-800/50 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
                            >
                                How Booking Works
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
