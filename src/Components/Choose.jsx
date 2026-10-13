// components/WhyChooseUs.jsx
// Plain JSX + Tailwind CSS. No extra packages needed.

const reasons = [
    {
        title: "Verified providers",
        text: "Every provider goes through NID verification and a background check, so you can book with confidence.",
        icon: (
            <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3zm-3 9l2 2 4-4" />
        ),
    },
    {
        title: "Clear, fair pricing",
        text: "See the price before you book. No hidden charges when the job is done.",
        icon: (
            <path d="M12 2v20M17 6.5C16 5 14.3 4 12 4 9.5 4 8 5.2 8 7s1.5 2.7 4 3.3 4 1.5 4 3.2S14.5 20 12 20c-2.4 0-4.3-1-5.2-2.7" />
        ),
    },
    {
        title: "On-time service",
        text: "Providers arrive at your scheduled time. If there is a delay, we let you know right away.",
        icon: <path d="M12 7v5l3 2M12 3a9 9 0 100 18 9 9 0 000-18z" />,
    },
    {
        title: "Secure payment",
        text: "Pay with cash on service, bKash, Nagad, or card, whichever works best for you.",
        icon: <path d="M3 7h18v12H3V7zm0 4h18M7 15h3" />,
    },
    {
        title: "Service guarantee",
        text: "Not happy with the work? Get a free re-service or a refund within 7 days.",
        icon: <path d="M5 13l4 4L19 7" />,
    },
    {
        title: "Friendly 24/7 support",
        text: "Our team is available by call or chat whenever you need help.",
        icon: (
            <path d="M4 14v-2a8 8 0 0116 0v2M4 14h3v5H5a1 1 0 01-1-1v-4zm16 0h-3v5h2a1 1 0 001-1v-4z" />
        ),
    },
];

export default function WhyChooseUs() {
    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Why choose Service BD?
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                        Whether it is a home repair or a deep clean, we make sure every
                        service is reliable, affordable, and done right.
                    </p>
                </div>

                <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                    {reasons.map((item) => (
                        <div key={item.title} className="flex gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                >
                                    {item.icon}
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900">
                                    {item.title}
                                </h3>
                                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}