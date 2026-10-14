"use client";

import { useState } from "react";
import Link from "next/link";

const FAQS = [
    {
        q: "What is Service BD?",
        a: "Service BD is a platform that connects you with trusted local service providers in Bangladesh, such as electricians, plumbers, cleaners, tutors, and technicians. You can browse, compare, and book in one place.",
    },
    {
        q: "How do I book a service?",
        a: "Search for the service you need, choose a provider, pick a date and time, and confirm your booking. The provider will accept your request and you will get a notification.",
    },
    {
        q: "Do I need an account to book?",
        a: "Yes. A free account lets you track bookings, message providers, and leave reviews. Signing up takes less than a minute.",
    },
    {
        q: "How are providers verified?",
        a: "Every provider submits identity details and service information before their profile goes live. We also use customer ratings and reviews to keep quality high.",
    },
    {
        q: "How much does a service cost?",
        a: "Each provider sets their own price, and it is shown on their profile before you book. Final costs may change if the job turns out to be larger than described, so confirm any changes with your provider first.",
    },
    {
        q: "What payment methods are accepted?",
        a: "You can pay in cash after the service is completed. Depending on the provider, mobile payments such as bKash and Nagad may also be available.",
    },
    {
        q: "Can I cancel or reschedule a booking?",
        a: "Yes. Open your bookings, select the one you want to change, and choose Cancel or Reschedule. Please do this as early as possible so the provider can plan their day.",
    },
    {
        q: "What if I am not happy with the service?",
        a: "Tell us through the Help Center within 48 hours of the service. We will review the case with you and the provider and work toward a fair solution.",
    },
    {
        q: "How can I become a service provider?",
        a: "Create an account, choose the provider option, and complete your profile with your skills, service area, and pricing. Once approved, you can start receiving booking requests.",
    },
];

function FaqItem({ item, open, onToggle, id }) {
    return (
        <div className="border-b border-emerald-700">
            <h3>
                <button
                    type="button"
                    onClick={onToggle}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${id}`}
                    id={`faq-button-${id}`}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-medium text-white transition-colors hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-900 sm:text-lg"
                >
                    <span>{item.q}</span>
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className={`h-5 w-5 shrink-0 text-emerald-200 transition-transform duration-200 motion-reduce:transition-none ${open ? "rotate-45" : ""
                            }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </button>
            </h3>
            <div
                id={`faq-panel-${id}`}
                role="region"
                aria-labelledby={`faq-button-${id}`}
                className={`grid transition-all duration-200 ease-out motion-reduce:transition-none ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="max-w-2xl pb-5 leading-relaxed text-emerald-100">
                        {item.a}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section
            id="faq"
            aria-labelledby="faq-heading"
            className="w-full bg-emerald-900"
        >
            <div className="mx-auto grid w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24 gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
                <div>
                    <h2
                        id="faq-heading"
                        className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                    >
                        Questions people ask before booking
                    </h2>
                    <p className="mt-4 max-w-md text-emerald-100">
                        Quick answers about booking, payments, and providers. Need
                        something else? Our team is happy to help.
                    </p>
                    <Link
                        href="/help-center"
                        className="mt-6 inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-emerald-900 transition-colors hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-900"
                    >
                        Visit Help Center
                    </Link>
                </div>

                <div className="border-t border-emerald-700">
                    {FAQS.map((item, i) => (
                        <FaqItem
                            key={item.q}
                            id={i}
                            item={item}
                            open={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}