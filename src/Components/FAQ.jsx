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
        <div className="border-b border-slate-200 dark:border-slate-800">
            <h3>
                <button
                    type="button"
                    onClick={onToggle}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${id}`}
                    id={`faq-button-${id}`}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-medium text-slate-900 transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 dark:text-slate-100 dark:hover:text-emerald-400 sm:text-lg"
                >
                    <span>{item.q}</span>
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 motion-reduce:transition-none ${open ? "rotate-45" : ""
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
                    <p className="max-w-2xl pb-5 leading-relaxed text-slate-600 dark:text-slate-400">
                        {item.a}
                    </p>
                </div>
            </div>
        </div>
    );
}

