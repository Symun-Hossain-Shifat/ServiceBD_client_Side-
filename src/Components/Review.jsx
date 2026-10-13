// components/CustomerReviews.jsx
// Plain JSX + Tailwind CSS. No extra packages needed.

const reviews = [
    {
        name: "Rahim Uddin",
        area: "Agrabad, Chittagong",
        service: "AC servicing",
        rating: 5,
        text: "The technician arrived on time and left everything clean. The price was exactly what I was quoted, with no extra charges.",
    },
    {
        name: "Nusrat Jahan",
        area: "Dhanmondi, Dhaka",
        service: "Home cleaning",
        rating: 5,
        text: "My whole apartment looks spotless. The provider was polite and professional. I will definitely book again.",
    },
    {
        name: "Tanvir Ahmed",
        area: "Uttara, Dhaka",
        service: "Electrician",
        rating: 4,
        text: "My wiring problem was fixed within an hour. Booking through the app was quick and simple.",
    },
    {
        name: "Sumaiya Akter",
        area: "Khulshi, Chittagong",
        service: "Plumbing",
        rating: 5,
        text: "I called late at night with an emergency and the plumber arrived in 40 minutes. The support team was very helpful too.",
    },
    {
        name: "Mehedi Hasan",
        area: "Zindabazar, Sylhet",
        service: "Home shifting",
        rating: 4,
        text: "Everything was moved safely and nothing was damaged. The price was fixed in advance, so there were no surprises.",
    },
    {
        name: "Farhana Islam",
        area: "Mirpur, Dhaka",
        service: "Beauty at home",
        rating: 5,
        text: "I got a parlour-quality service at home. The provider was verified, which made me feel safe.",
    },
];

function Stars({ count }) {
    return (
        <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((n) => (
                <svg
                    key={n}
                    viewBox="0 0 20 20"
                    className={`h-4 w-4 ${n <= count ? "text-amber-400" : "text-slate-200"}`}
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                </svg>
            ))}
        </div>
    );
}

export default function CustomerReviews() {
    const average = (
        reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    ).toFixed(1);

    return (
        <section className="bg-slate-50 py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            What our customers say
                        </h2>
                        <p className="mt-3 text-base text-slate-600">
                            Real feedback from people who booked a service on Service BD.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-4xl font-bold text-slate-900">{average}</span>
                        <div>
                            <Stars count={Math.round(Number(average))} />
                            <p className="mt-1 text-sm text-slate-500">
                                {reviews.length} reviews
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((r) => (
                        <figure
                            key={r.name}
                            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6"
                        >
                            <Stars count={r.rating} />
                            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                                {r.text}
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-800">
                                    {r.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">
                                        {r.name}
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        {r.service} · {r.area}
                                    </p>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}