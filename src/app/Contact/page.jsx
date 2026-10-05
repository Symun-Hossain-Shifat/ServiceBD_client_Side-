import Link from "next/link";

const field =
    "w-full rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-[15px] text-stone-900 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/25";

const label = "mb-1.5 block text-sm font-medium text-stone-700";

const details = [
    { title: "Call us", value: "+880 1XXX-XXXXXX", note: "Sat–Thu, 9am to 8pm" },
    { title: "Email", value: "support@servicebd.com", note: "We reply within one day" },
    { title: "Office", value: "Chittagong, Bangladesh", note: "Visits by appointment" },
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-stone-50">
            {/* Header band */}
            <section className="relative overflow-hidden bg-emerald-900 px-6 py-20 text-emerald-50">
                <div className="mx-auto max-w-5xl">
                    <Link href="/" className="text-xl font-extrabold tracking-tight">
                        Service<span className="text-red-400">BD</span>
                    </Link>
                    <h1 className="mt-10 max-w-xl text-5xl font-extrabold leading-[1.1] tracking-tight">
                        Got a question? Talk to a real person.
                    </h1>
                    <p className="mt-5 max-w-md text-lg leading-relaxed text-emerald-100/80">
                        Need help with a booking, want to join as a provider, or something went wrong?
                        Send us a message and we will get back to you.
                    </p>
                </div>
                <div
                    aria-hidden
                    className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-red-500/90"
                />
            </section>

            {/* Content */}
            <section className="mx-auto grid max-w-5xl gap-12 px-6 py-16 lg:grid-cols-[1fr_1.3fr]">
                {/* Contact details */}
                <div className="space-y-8">
                    {details.map((d) => (
                        <div key={d.title}>
                            <h2 className="text-sm font-medium text-stone-500">{d.title}</h2>
                            <p className="mt-1 text-xl font-semibold text-stone-900">{d.value}</p>
                            <p className="mt-0.5 text-stone-600">{d.note}</p>
                        </div>
                    ))}
                </div>

                {/* Form */}
                <form className="space-y-5 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
                    <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                            <label htmlFor="name" className={label}>
                                Full name
                            </label>
                            <input id="name" name="name" autoComplete="name" className={field} />
                        </div>
                        <div>
                            <label htmlFor="email" className={label}>
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className={field}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="topic" className={label}>
                            Topic
                        </label>
                        <select id="topic" name="topic" defaultValue="booking" className={field}>
                            <option value="booking">Help with a booking</option>
                            <option value="provider">Becoming a provider</option>
                            <option value="payment">Payment issue</option>
                            <option value="other">Something else</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className={label}>
                            Message
                        </label>
                        <textarea id="message" name="message" rows={6} className={`${field} resize-y`} />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-emerald-800 px-4 py-3 text-[15px] font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 sm:w-auto sm:px-8"
                    >
                        Send message
                    </button>
                </form>
            </section>
        </main>
    );
}