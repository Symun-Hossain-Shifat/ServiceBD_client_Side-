"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

// Edit this content to match how Service BD really works.
const CATEGORIES = [
    {
        id: "booking",
        title: "Booking a service",
        blurb: "Find a provider, pick a time, confirm your order.",
        faqs: [
            { q: "How do I book a service?", a: "Search for the service you need, open a provider's profile, choose a date and time, then tap Book now. You'll get a confirmation as soon as the provider accepts." },
            { q: "Can I choose a specific provider?", a: "Yes. Open any provider's profile and book them directly, or post your request and let providers send you offers." },
            { q: "How do I reschedule or cancel a booking?", a: "Go to My bookings, open the booking, and select Reschedule or Cancel. Cancelling close to the start time may carry a fee." },
            { q: "What if the provider doesn't show up?", a: "Report it from the booking page within 24 hours. We'll find a replacement or refund your payment." },
        ],
    },
    {
        id: "payments",
        title: "Payments and refunds",
        blurb: "Pay methods, receipts, and getting your money back.",
        faqs: [
            { q: "Which payment methods are accepted?", a: "bKash, Nagad, Rocket, debit and credit cards, and cash on service for eligible bookings." },
            { q: "When am I charged?", a: "Online payments are held when you confirm and released to the provider after the job is marked complete." },
            { q: "How do I request a refund?", a: "Open the booking, select Request refund, and describe the problem. Approved refunds return to your original payment method in 3 to 7 working days." },
            { q: "Where can I find my receipt?", a: "Receipts are under My bookings, on each completed order." },
        ],
    },
    {
        id: "account",
        title: "Your account",
        blurb: "Sign in, profile details, and privacy.",
        faqs: [
            { q: "I can't sign in. What should I do?", a: "Use Forgot password on the sign-in page. If you don't get the email within a few minutes, check spam or contact support." },
            { q: "How do I change my phone number or email?", a: "Go to Settings, then Profile. You'll be asked to verify the new detail before it's saved." },
            { q: "How do I delete my account?", a: "Go to Settings, then Account, then Delete account. Active bookings must be completed or cancelled first." },
        ],
    },
    {
        id: "providers",
        title: "For service providers",
        blurb: "Join, get verified, and receive payouts.",
        faqs: [
            { q: "How do I become a provider?", a: "Create an account, choose Become a provider, and submit your services, area, and ID. Most applications are reviewed within 2 working days." },
            { q: "How do payouts work?", a: "Earnings from completed jobs are sent to your bKash, Nagad, or bank account on your chosen payout schedule." },
            { q: "How can I get more bookings?", a: "Complete your profile, add clear photos of past work, respond quickly, and keep your availability up to date." },
        ],
    },
    {
        id: "safety",
        title: "Safety and trust",
        blurb: "Verified providers, reviews, and reporting problems.",
        faqs: [
            { q: "Are providers verified?", a: "Providers submit a national ID and contact details before they can accept bookings. Look for the Verified badge on their profile." },
            { q: "How do I report a problem or a provider?", a: "Open the booking and select Report a problem, or contact support. We review every report." },
        ],
    },
];

export default function HelpCenterPage() {
    const [query, setQuery] = useState("");
    const [active, setActive] = useState("all");

    const results = useMemo(() => {
        const q = query.trim().toLowerCase();
        return CATEGORIES.filter((c) => active === "all" || c.id === active)
            .map((c) => ({
                ...c,
                faqs: c.faqs.filter(
                    (f) => !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
                ),
            }))
            .filter((c) => c.faqs.length > 0);
    }, [query, active]);

    return (
        <main className="min-h-screen bg-white text-slate-900">
            {/* Hero: the search box is the main event */}
            <section className="bg-emerald-900 px-4 py-16 text-white sm:py-24">
                <div className="mx-auto max-w-3xl">
                    <p className="text-lg text-emerald-200">কীভাবে সাহায্য করতে পারি?</p>
                    <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                        Help Center
                    </h1>
                    <p className="mt-4 max-w-xl text-emerald-100">
                        Answers about booking, payments, and your account. Can&apos;t find
                        yours? Our team replies within a few hours.
                    </p>
                    <label htmlFor="help-search" className="sr-only">
                        Search help articles
                    </label>
                    <input
                        id="help-search"
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search, for example: refund, reschedule, payout"
                        className="mt-8 w-full rounded-xl border-2 border-transparent bg-white px-5 py-4 text-base text-slate-900 shadow-lg outline-none placeholder:text-slate-400 focus:border-red-500"
                    />
                </div>
            </section>

            <div className="mx-auto max-w-3xl px-4 py-10">
                {/* Category filter */}
                <div className="flex flex-wrap gap-2" role="tablist" aria-label="Help topics">
                    {[{ id: "all", title: "All topics" }, ...CATEGORIES].map((c) => (
                        <button
                            key={c.id}
                            role="tab"
                            aria-selected={active === c.id}
                            onClick={() => setActive(c.id)}
                            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${active === c.id
                                    ? "border-emerald-900 bg-emerald-900 text-white"
                                    : "border-slate-300 bg-white text-slate-700 hover:border-emerald-900"
                                }`}
                        >
                            {c.title}
                        </button>
                    ))}
                </div>

                {/* Questions */}
                <div className="mt-10 space-y-12">
                    {results.length === 0 && (
                        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center">
                            <p className="font-semibold">No answers match &ldquo;{query}&rdquo;</p>
                            <p className="mt-1 text-slate-600">
                                Try a shorter word, or contact support below.
                            </p>
                        </div>
                    )}

                    {results.map((cat) => (
                        <section key={cat.id} aria-labelledby={`cat-${cat.id}`}>
                            <h2 id={`cat-${cat.id}`} className="text-2xl font-bold">
                                {cat.title}
                            </h2>
                            <p className="mt-1 text-slate-600">{cat.blurb}</p>
                            <div className="mt-4 divide-y divide-slate-200 border-y border-slate-200">
                                {cat.faqs.map((f) => (
                                    <details key={f.q} className="group py-4" open={!!query.trim()}>
                                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium marker:content-none focus-visible:outline-2 focus-visible:outline-emerald-700">
                                            {f.q}
                                            <span
                                                aria-hidden
                                                className="text-xl text-emerald-800 transition-transform group-open:rotate-45"
                                            >
                                                +
                                            </span>
                                        </summary>
                                        <p className="mt-3 max-w-[65ch] leading-relaxed text-slate-700">
                                            {f.a}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Contact */}
                <section className="mt-16 rounded-2xl bg-slate-50 p-8">
                    <h2 className="text-2xl font-bold">Still need help?</h2>
                    <p className="mt-1 text-slate-600">
                        Include your booking ID so we can help faster.
                    </p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        {/* TODO: replace with your real contact details */}
                        <a href="mailto:support@servicebd.com" className="rounded-xl border border-slate-200 bg-white p-4 hover:border-emerald-900">
                            <p className="font-semibold">Email us</p>
                            <p className="text-sm text-slate-600">support@servicebd.com</p>
                        </a>
                        <a href="tel:+8800000000000" className="rounded-xl border border-slate-200 bg-white p-4 hover:border-emerald-900">
                            <p className="font-semibold">Call us</p>
                            <p className="text-sm text-slate-600">Daily, 9 am to 9 pm</p>
                        </a>
                        <Link href="/contact" className="rounded-xl border border-slate-200 bg-white p-4 hover:border-emerald-900">
                            <p className="font-semibold">Send a message</p>
                            <p className="text-sm text-slate-600">We reply within a few hours</p>
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}