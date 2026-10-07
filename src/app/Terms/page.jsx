// app/terms/page.jsx  (Next.js App Router + Tailwind CSS)

export const metadata = {
    title: "Terms of Service | Service BD",
    description:
        "The rules for using Service BD to book and provide services in Bangladesh.",
};

const LAST_UPDATED = "October 7, 2026";
const SUPPORT_EMAIL = "support@servicebd.com"; // TODO: replace with your real email
const COMPANY = "Service BD"; // TODO: replace with your registered business name

const sections = [
    {
        id: "acceptance",
        title: "Accepting these terms",
        body: [
            "By creating an account or using the Service BD app or website, you agree to these Terms of Service. If you do not agree, please do not use Service BD.",
            "These terms apply to everyone who uses Service BD, including customers who book services and providers who offer them.",
        ],
    },
    {
        id: "about",
        title: "What Service BD does",
        body: [
            "Service BD is a platform that connects customers with independent service providers in Bangladesh. We help you find providers, book services, communicate, and pay.",
            "Providers are independent businesses or individuals. They are not employees or agents of Service BD, and we do not perform the services ourselves.",
        ],
    },
    {
        id: "accounts",
        title: "Your account",
        body: ["To use most features, you need an account. You agree to:"],
        list: [
            "Be at least 18 years old, or use Service BD with a parent or guardian's permission.",
            "Give accurate information, including your name and phone number, and keep it up to date.",
            "Keep your password and login codes private. You are responsible for activity on your account.",
            "Tell us right away if you think someone else is using your account.",
        ],
    },
    {
        id: "customers",
        title: "Booking as a customer",
        body: ["When you book a service, you agree to:"],
        list: [
            "Give the provider a correct address, a clear description of the work, and safe access to the place where the work will happen.",
            "Be available at the booked time, or tell the provider as early as you can if plans change.",
            "Treat providers respectfully and pay the agreed price for completed work.",
        ],
    },
    {
        id: "providers",
        title: "Offering services as a provider",
        body: ["If you offer services on Service BD, you agree to:"],
        list: [
            "Describe your services, prices, and experience honestly.",
            "Hold any licenses, permits, or skills that the work legally requires.",
            "Arrive on time, do the work with reasonable care and skill, and follow safety rules.",
            "Handle your own taxes, insurance, tools, and legal obligations as an independent provider.",
            "Not take customers off the platform to avoid fees or to bypass these terms.",
        ],
    },
    {
        id: "payments",
        title: "Prices and payments",
        body: [
            "Prices are shown in Bangladeshi Taka (BDT) before you confirm a booking. A booking is confirmed when the provider accepts it.",
            "You can pay with the payment methods shown in the app, which may include mobile wallets, cards, or cash on completion. Some methods may carry fees from the payment provider.",
            "Service BD may charge providers a service fee or commission. Any fee that applies to customers will be shown before you confirm.",
        ],
    },
    {
        id: "cancellations",
        title: "Cancellations and refunds",
        body: [
            "You can cancel a booking from the app. Cancelling well before the booked time is free in most cases. Late cancellations or no-shows may be charged a fee to compensate the provider's time.",
            "If a provider cancels or does not show up, you will not be charged for that booking, and any payment you made will be refunded to your original payment method.",
            "If a service was not completed as agreed, report it within 48 hours of the booked time. We will review the case and may offer a partial or full refund, a redo of the work, or no refund when the complaint is not supported.",
        ],
    },
    {
        id: "conduct",
        title: "Rules of use",
        body: ["You agree not to:"],
        list: [
            "Break any law of Bangladesh or use Service BD for fraud, harassment, or threats.",
            "Post false, misleading, or offensive content, including fake reviews or fake bookings.",
            "Share another person's private information without their permission.",
            "Copy, reverse engineer, or interfere with the app, or try to access accounts that are not yours.",
            "Request or offer services that are illegal or unsafe.",
        ],
    },
    {
        id: "content",
        title: "Reviews and your content",
        body: [
            "You own the reviews, photos, and messages you post. By posting them, you give Service BD a free, non-exclusive right to display and use them to run and promote the platform.",
            "We may remove content that breaks these terms or that we reasonably believe is harmful.",
        ],
    },
    {
        id: "privacy",
        title: "Your data",
        body: [
            "We collect and use your personal information as described in our Privacy Policy. By using Service BD, you agree to that use.",
        ],
    },
    {
        id: "ip",
        title: "Our property",
        body: [
            "The Service BD name, logo, app, and design belong to us or our licensors. You may use the app for its intended purpose, but you may not copy or sell any part of it without our written permission.",
        ],
    },
    {
        id: "disclaimers",
        title: "What we do not promise",
        body: [
            "Service BD is provided as is and as available. We work to keep the app running and to verify providers, but we cannot guarantee that every provider is suitable, that every service meets your expectations, or that the app will always be free of errors or interruptions.",
            "Any agreement for a service is between you and the provider. Please use good judgment when letting someone into your home or workplace.",
        ],
    },
    {
        id: "liability",
        title: "Limits on our liability",
        body: [
            "To the extent allowed by law, Service BD is not responsible for injury, damage, or loss that results from a provider's work or a customer's actions, or for indirect or consequential losses.",
            "Where we are found liable, our total liability to you is limited to the amount you paid for the booking involved. Nothing in these terms limits liability that cannot be limited under the law of Bangladesh.",
        ],
    },
    {
        id: "indemnity",
        title: "Your responsibility for misuse",
        body: [
            "You agree to cover reasonable losses Service BD suffers because you broke these terms or the law.",
        ],
    },
    {
        id: "termination",
        title: "Suspending or closing accounts",
        body: [
            "You can stop using Service BD and delete your account at any time. We may suspend or close an account if it breaks these terms, puts others at risk, or is used for fraud. When we can, we will tell you why.",
        ],
    },
    {
        id: "changes",
        title: "Changes to these terms",
        body: [
            "We may update these terms from time to time. When we make important changes, we will notify you in the app or by message. If you keep using Service BD after the change takes effect, you accept the new terms.",
        ],
    },
    {
        id: "law",
        title: "Governing law and disputes",
        body: [
            "These terms are governed by the laws of Bangladesh. We encourage you to contact us first so we can try to settle any dispute. If we cannot, the courts of Dhaka, Bangladesh have jurisdiction.",
        ],
    },
    {
        id: "contact",
        title: "Contact us",
        body: [`Questions about these terms? Email us at ${SUPPORT_EMAIL}.`],
    },
];

export default function TermsPage() {
    return (
        <main className="bg-white text-slate-800">
            <header className="border-b border-emerald-900/10 bg-emerald-950 text-white">
                <div className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Terms of Service
                    </h1>
                    <p className="mt-4 max-w-xl text-lg text-emerald-100">
                        The rules for booking and offering services on {COMPANY}, written in
                        plain language.
                    </p>
                    <p className="mt-6 text-sm text-emerald-200">
                        Last updated {LAST_UPDATED}
                    </p>
                </div>
            </header>

            <div className="mx-auto grid max-w-5xl gap-12 px-6 py-12 lg:grid-cols-[14rem_1fr]">
                <nav aria-label="Sections" className="lg:sticky lg:top-8 lg:self-start">
                    <p className="mb-3 text-sm font-semibold text-slate-500">
                        On this page
                    </p>
                    <ol className="space-y-1 text-sm">
                        {sections.map((s, i) => (
                            <li key={s.id}>
                                <a
                                    href={`#${s.id}`}
                                    className="block rounded px-2 py-1 text-slate-600 hover:bg-emerald-50 hover:text-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700"
                                >
                                    {i + 1}. {s.title}
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>

                <article className="max-w-prose">
                    {sections.map((s, i) => (
                        <section key={s.id} id={s.id} className="mb-10 scroll-mt-8">
                            <h2 className="text-xl font-semibold text-emerald-900">
                                {i + 1}. {s.title}
                            </h2>
                            {s.body.map((p, j) => (
                                <p key={j} className="mt-3 leading-7">
                                    {p}
                                </p>
                            ))}
                            {s.list && (
                                <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 marker:text-emerald-700">
                                    {s.list.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    ))}
                </article>
            </div>
        </main>
    );
}