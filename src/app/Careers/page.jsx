import Link from "next/link";

export const metadata = {
    title: "Careers | ServiceBD",
    description:
        "Join ServiceBD and help households across Bangladesh find trusted service providers.",
};

const CAREER_EMAIL = "careers@servicebd.com"; // replace with your real address

const perks = [
    {
        title: "Work that people feel",
        text: "Every booking is a real household getting a leaking tap fixed or a room painted. You see the result of your work the same day.",
    },
    {
        title: "Small team, real ownership",
        text: "You will ship features and own decisions from your first month. No layers of approval between you and the customer.",
    },
    {
        title: "Room to grow",
        text: "We are expanding to new areas and services. People who take initiative move into bigger roles quickly.",
    },
];

const roles = [
    {
        id: "SBD-101",
        title: "Full Stack Developer",
        team: "Engineering",
        location: "Dhaka or remote",
        type: "Full-time",
        summary:
            "Build the booking, provider, and payment flows that power ServiceBD.",
        does: [
            "Build and maintain features in Next.js, Node.js, and MongoDB",
            "Design clean REST APIs and secure authentication flows",
            "Review code and help improve our development process",
        ],
        needs: [
            "Solid React and Next.js experience",
            "Comfortable with Tailwind CSS and a Node.js backend",
            "A portfolio or GitHub with projects you built yourself",
        ],
    },
    {
        id: "SBD-102",
        title: "Frontend Developer Intern",
        team: "Engineering",
        location: "Remote",
        type: "Internship, 3 months",
        summary:
            "Turn designs into fast, accessible pages and learn from senior developers.",
        does: [
            "Build responsive UI with React and Tailwind CSS",
            "Fix bugs and polish existing pages",
            "Work with designers on mobile-first layouts",
        ],
        needs: [
            "Good HTML, CSS, and JavaScript fundamentals",
            "At least one project you can show us",
            "Willingness to learn and take feedback",
        ],
    },
    {
        id: "SBD-103",
        title: "Provider Onboarding Executive",
        team: "Operations",
        location: "Dhaka",
        type: "Full-time",
        summary:
            "Find, verify, and welcome the electricians, cleaners, and technicians who serve our customers.",
        does: [
            "Reach out to skilled professionals and explain how ServiceBD works",
            "Verify identity, skills, and work history",
            "Train new providers to use the app and deliver good service",
        ],
        needs: [
            "Strong communication in Bangla; working English",
            "Comfortable meeting people in the field",
            "Organized, reliable, and good with follow-ups",
        ],
    },
    {
        id: "SBD-104",
        title: "Customer Support Associate",
        team: "Support",
        location: "Dhaka",
        type: "Full-time, shifts",
        summary:
            "Be the friendly voice that sorts out bookings, changes, and problems quickly.",
        does: [
            "Answer customer calls and chats about bookings and payments",
            "Coordinate with providers to resolve issues the same day",
            "Record feedback so the product team can act on it",
        ],
        needs: [
            "Clear, patient communication in Bangla",
            "Basic computer skills and quick typing",
            "A calm approach when customers are upset",
        ],
    },
];

const steps = [
    { title: "Apply", text: "Email your CV and, for developer roles, your GitHub or portfolio link." },
    { title: "Intro call", text: "A short conversation about you, the role, and what you want to learn." },
    { title: "Practical task", text: "A small, paid-time-friendly task that reflects the real work. No trick questions." },
    { title: "Offer", text: "We reply within a week of your task with a decision and clear feedback." },
];

function applyHref(role) {
    const subject = role ? `Application: ${role.title}` : "General application";
    return `mailto:${CAREER_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export default function CareerPage() {
    return (
        <main className="bg-white text-[#14201B]">
            {/* Hero */}
            <section className="border-b border-[#14201B]/10 bg-[#F2F7F4]">
                <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:px-8">
                    <div>
                        <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-[#0F5A3C] sm:text-5xl">
                            Help every household in Bangladesh find a trusted hand.
                        </h1>
                        <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#14201B]/75">
                            ServiceBD connects people with verified providers for home
                            repairs, cleaning, and more. We are building it with a small team
                            that cares about doing the job properly.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#roles"
                                className="rounded-xl bg-[#F5A524] px-5 py-3 text-sm font-semibold text-[#14201B] shadow-sm transition hover:bg-[#e69712] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F5A3C]"
                            >
                                See open roles
                            </a>
                            <a
                                href={applyHref(null)}
                                className="rounded-xl border border-[#0F5A3C]/30 px-5 py-3 text-sm font-semibold text-[#0F5A3C] transition hover:bg-[#0F5A3C]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F5A3C]"
                            >
                                Send a general application
                            </a>
                        </div>
                    </div>

                    {/* Work order motif: how the job board looks like a service ticket */}
                    <div className="hidden lg:block" aria-hidden="true">
                        <div className="rotate-2 rounded-2xl border-2 border-dashed border-[#0F5A3C]/40 bg-white p-6 shadow-sm">
                            <p className="text-sm font-semibold text-[#0F5A3C]">Work order</p>
                            <p className="mt-3 text-2xl font-bold">Your next job</p>
                            <dl className="mt-5 space-y-3 text-sm">
                                <div className="flex justify-between border-b border-[#14201B]/10 pb-2">
                                    <dt className="text-[#14201B]/60">Location</dt>
                                    <dd className="font-medium">Dhaka or remote</dd>
                                </div>
                                <div className="flex justify-between border-b border-[#14201B]/10 pb-2">
                                    <dt className="text-[#14201B]/60">Team</dt>
                                    <dd className="font-medium">People who care</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="text-[#14201B]/60">Status</dt>
                                    <dd className="rounded-full bg-[#F5A524]/25 px-3 py-0.5 font-semibold text-[#8a5a00]">
                                        Hiring now
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why ServiceBD */}
            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <h2 className="max-w-xl text-3xl font-bold tracking-tight text-[#0F5A3C]">
                    Why work at ServiceBD
                </h2>
                <div className="mt-10 grid gap-8 md:grid-cols-3">
                    {perks.map((perk) => (
                        <div key={perk.title} className="border-t-2 border-[#F5A524] pt-4">
                            <h3 className="text-lg font-semibold">{perk.title}</h3>
                            <p className="mt-2 leading-relaxed text-[#14201B]/70">
                                {perk.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Open roles */}
            <section
                id="roles"
                className="scroll-mt-20 border-y border-[#14201B]/10 bg-[#F2F7F4]"
            >
                <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-[#0F5A3C]">
                        Open roles
                    </h2>
                    <p className="mt-3 text-[#14201B]/70">
                        Select a role to see what you will do and what we are looking for.
                    </p>

                    <div className="mt-8 space-y-4">
                        {roles.map((role) => (
                            <details
                                key={role.id}
                                className="group overflow-hidden rounded-2xl border border-[#14201B]/10 bg-white open:shadow-md"
                            >
                                <summary className="flex cursor-pointer list-none items-stretch focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0F5A3C] [&::-webkit-details-marker]:hidden">
                                    {/* Ticket stub */}
                                    <span className="flex w-24 shrink-0 items-center justify-center border-r-2 border-dashed border-[#0F5A3C]/30 bg-[#0F5A3C] px-2 text-center text-sm font-semibold text-white sm:w-28">
                                        {role.id}
                                    </span>
                                    <span className="flex flex-1 items-center justify-between gap-4 p-4 sm:p-5">
                                        <span>
                                            <span className="block text-lg font-semibold">
                                                {role.title}
                                            </span>
                                            <span className="mt-1 block text-sm text-[#14201B]/60">
                                                {role.team}, {role.location}, {role.type}
                                            </span>
                                        </span>
                                        <svg
                                            className="h-5 w-5 shrink-0 text-[#0F5A3C] transition-transform group-open:rotate-180"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            aria-hidden="true"
                                        >
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </span>
                                </summary>

                                <div className="border-t border-[#14201B]/10 p-5 sm:p-6">
                                    <p className="leading-relaxed text-[#14201B]/80">
                                        {role.summary}
                                    </p>

                                    <div className="mt-5 grid gap-6 sm:grid-cols-2">
                                        <div>
                                            <h3 className="font-semibold text-[#0F5A3C]">
                                                What you will do
                                            </h3>
                                            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[#14201B]/75 marker:text-[#F5A524]">
                                                {role.does.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-[#0F5A3C]">
                                                What we look for
                                            </h3>
                                            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[#14201B]/75 marker:text-[#F5A524]">
                                                {role.needs.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <a
                                        href={applyHref(role)}
                                        className="mt-6 inline-block rounded-xl bg-[#F5A524] px-5 py-2.5 text-sm font-semibold text-[#14201B] shadow-sm transition hover:bg-[#e69712] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F5A3C]"
                                    >
                                        Apply for this role
                                    </a>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hiring process: a real sequence, so steps are numbered */}
            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-[#0F5A3C]">
                    How we hire
                </h2>
                <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, i) => (
                        <li key={step.title} className="flex gap-4">
                            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#0F5A3C] text-sm font-bold text-white">
                                {i + 1}
                            </span>
                            <div>
                                <h3 className="font-semibold">{step.title}</h3>
                                <p className="mt-1 text-sm leading-relaxed text-[#14201B]/70">
                                    {step.text}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Closing call to action */}
            <section className="bg-[#0F5A3C]">
                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center lg:px-8">
                    <div>
                        <h2 className="text-2xl font-bold text-white sm:text-3xl">
                            Do not see your role?
                        </h2>
                        <p className="mt-2 max-w-xl text-white/80">
                            Tell us what you are good at. We read every application and keep
                            promising ones on file for new openings.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href={applyHref(null)}
                            className="rounded-xl bg-[#F5A524] px-5 py-3 text-sm font-semibold text-[#14201B] transition hover:bg-[#e69712] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Send your CV
                        </a>
                        <Link
                            href="/Contact"
                            className="rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Contact us
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}