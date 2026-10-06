// app/how-it-works/page.jsx
// Static page: no state, forms, or JS functionality.
import Link from "next/link";

const steps = [
    {
        title: "Find a service",
        text: "Search by category or area. Plumbing, electrical work, cleaning, AC servicing and more, all in one place.",
    },
    {
        title: "Compare providers",
        text: "Check ratings, reviews and prices, then choose the provider that suits you best.",
    },
    {
        title: "Confirm your booking",
        text: "Pick a date and time that works for you. You'll get a notification once the provider confirms.",
    },
    {
        title: "Get the job done, pay and review",
        text: "Pay once the work is complete and leave a review to help others find great providers.",
    },
];

const customerPoints = [
    "Verified service providers",
    "See fixed prices upfront",
    "Pay by cash or mobile banking",
    "Support team ready to help if anything goes wrong",
];

const providerPoints = [
    "Create your profile for free",
    "Get bookings from customers in your area",
    "Set your own rates",
    "Build your reputation with reviews",
];

const faqs = [
    {
        q: "Do I need an account to use Service BD?",
        a: "You need a simple account to book a service, so your booking history stays in one place.",
    },
    {
        q: "How do I pay?",
        a: "After the job is done, you can pay in cash or through mobile banking such as bKash or Nagad.",
    },
    {
        q: "What if the provider doesn't show up or the work isn't good?",
        a: "Contact our support team. We'll look into the issue and work to resolve it.",
    },
    {
        q: "How can I become a service provider?",
        a: "Sign up as a provider, add your services and service area, and start receiving jobs once your profile is verified.",
    },
];

function CheckList({ items }) {
    return (
        <ul className="mt-5 space-y-3">
            {items.map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                    <svg
                        className="mt-1 h-5 w-5 shrink-0 text-emerald-700"
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
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

export default function HowItWorksPage() {
    return (
        <main className="bg-white text-slate-900">
            {/* Hero */}
            <section className="bg-emerald-900 px-6 py-20 text-white sm:py-28">
                <div className="mx-auto max-w-4xl">
                    <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
                        Great service, right at your door.
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg text-emerald-100">
                        Service BD connects you with trusted service providers near you.
                        Four simple steps and the job is done.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href="/services"
                            className="rounded-lg bg-amber-400 px-6 py-3 font-semibold text-emerald-950 hover:bg-amber-300"
                        >
                            Browse services
                        </Link>
                        <Link
                            href="/become-a-provider"
                            className="rounded-lg border border-emerald-300 px-6 py-3 font-semibold text-white hover:bg-emerald-800"
                        >
                            Become a provider
                        </Link>
                    </div>
                </div>
            </section>

            {/* Steps */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold sm:text-4xl">How it works</h2>
                    <ol className="mt-12 space-y-10 border-l-2 border-emerald-200 pl-8">
                        {steps.map((step, i) => (
                            <li key={step.title} className="relative">
                                <span className="absolute -left-[3.15rem] flex h-9 w-9 items-center justify-center rounded-full bg-emerald-800 font-semibold text-white ring-4 ring-white">
                                    {i + 1}
                                </span>
                                <h3 className="text-xl font-semibold">{step.title}</h3>
                                <p className="mt-2 max-w-xl text-slate-600">{step.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Customers vs providers */}
            <section className="bg-slate-50 px-6 py-20">
                <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
                    <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                        <h2 className="text-2xl font-bold">For customers</h2>
                        <CheckList items={customerPoints} />
                    </div>
                    <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                        <h2 className="text-2xl font-bold">For providers</h2>
                        <CheckList items={providerPoints} />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Frequently asked questions
                    </h2>
                    <dl className="mt-10 divide-y divide-slate-200">
                        {faqs.map((item) => (
                            <div key={item.q} className="py-6">
                                <dt className="text-lg font-semibold">{item.q}</dt>
                                <dd className="mt-2 text-slate-600">{item.a}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-amber-400 px-6 py-16">
                <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                    <h2 className="text-2xl font-bold text-emerald-950 sm:text-3xl">
                        Book the service you need today.
                    </h2>
                    <Link
                        href="/services"
                        className="rounded-lg bg-emerald-900 px-6 py-3 font-semibold text-white hover:bg-emerald-800"
                    >
                        Get started
                    </Link>
                </div>
            </section>
        </main>
    );
}