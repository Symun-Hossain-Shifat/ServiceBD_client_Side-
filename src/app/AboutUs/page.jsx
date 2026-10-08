
import Link from "next/link";

export const metadata = {
    title: "About Us | Service BD",
    description:
        "Service BD connects people across Bangladesh with trusted local service providers, from home repairs to everyday errands.",
};

const steps = [
    {
        title: "Tell us what you need",
        body: "Pick a service, add a few details, and choose a time that suits you.",
    },
    {
        title: "Get matched with a provider",
        body: "We show you verified providers near you, with real ratings from past customers.",
    },
    {
        title: "Get the job done",
        body: "The provider arrives, completes the work, and you review the experience.",
    },
];

const values = [
    {
        title: "Verified providers",
        body: "Every provider is checked before they appear on Service BD, so you know who is coming to your door.",
    },
    {
        title: "Clear pricing",
        body: "You see the price before you book. No surprise charges after the work is done.",
    },
    {
        title: "Fair for providers",
        body: "Skilled people earn steady work and honest reviews that help them grow their business.",
    },
    {
        title: "Built for Bangladesh",
        body: "Bangla and English support, local payment options, and coverage that grows city by city.",
    },
];

export default function AboutPage() {
    return (
        <main className="bg-[#fbfaf7] text-[#16241f]">
            {/* Hero */}
            <section className="mx-auto max-w-5xl px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
                <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
                    Good help should be easy to find.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#46564f]">
                    Service BD connects people across Bangladesh with trusted local
                    professionals for the work that keeps homes and lives running.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                        href="/services"
                        className="rounded-lg bg-[#0b6b4f] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#095840] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b6b4f]"
                    >
                        Browse services
                    </Link>
                    <Link
                        href="/contact"
                        className="rounded-lg border border-[#16241f]/20 px-6 py-3 font-semibold transition-colors hover:bg-[#16241f]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b6b4f]"
                    >
                        Contact us
                    </Link>
                </div>
            </section>

            {/* Story */}
            <section className="border-t border-[#16241f]/10">
                <div className="mx-auto grid max-w-5xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        Why we started
                    </h2>
                    <div className="max-w-prose space-y-4 text-lg leading-relaxed text-[#2e3d37]">
                        <p>
                            Finding a reliable electrician, cleaner, or technician usually
                            means asking around, waiting for callbacks, and hoping the price
                            stays fair. Skilled providers have the opposite problem: great
                            work, but no easy way to reach new customers.
                        </p>
                        <p>
                            Service BD puts both sides in one place. Customers book with
                            confidence. Providers get steady work and a reputation they can
                            build on.
                        </p>
                    </div>
                </div>
            </section>

            {/* How it works (a real sequence, so numbered) */}
            <section className="bg-[#0b6b4f] text-white">
                <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        How Service BD works
                    </h2>
                    <ol className="mt-10 grid gap-10 md:grid-cols-3">
                        {steps.map((step, i) => (
                            <li key={step.title}>
                                <span className="text-5xl font-bold text-white/40">
                                    {i + 1}
                                </span>
                                <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                                <p className="mt-2 leading-relaxed text-white/85">
                                    {step.body}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Values */}
            <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    What we stand for
                </h2>
                <dl className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
                    {values.map((v) => (
                        <div key={v.title} className="border-l-4 border-[#d9a441] pl-5">
                            <dt className="text-lg font-semibold">{v.title}</dt>
                            <dd className="mt-1 leading-relaxed text-[#46564f]">{v.body}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            {/* Provider CTA */}
            <section className="border-t border-[#16241f]/10">
                <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">
                            Do you offer a service?
                        </h2>
                        <p className="mt-2 max-w-md text-[#46564f]">
                            Join Service BD and start receiving booking requests from
                            customers near you.
                        </p>
                    </div>
                    <Link
                        href="/become-a-provider"
                        className="rounded-lg bg-[#16241f] px-6 py-3 font-semibold text-white transition-colors hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b6b4f]"
                    >
                        Become a provider
                    </Link>
                </div>
            </section>
        </main>
    );
}