// app/privacy-policy/page.jsx
// Static page: no state, forms, or JS functionality.

const LAST_UPDATED = "October 6, 2026";
const CONTACT_EMAIL = "support@servicebd.com"; // TODO: replace with your real email

const sections = [
    {
        title: "1. Information we collect",
        intro: "We collect only the information we need to run Service BD.",
        items: [
            "Account details: your name, phone number, email address and password.",
            "Booking details: the services you book, your address, preferred date and time, and any notes you add.",
            "Provider details: for service providers, your services, work area, experience and verification documents.",
            "Payment details: your payment method and transaction status. We do not store your mobile banking PIN or card security codes.",
            "Usage data: device type, browser, pages visited and approximate location, collected automatically.",
        ],
    },
    {
        title: "2. How we use your information",
        items: [
            "To create and manage your account.",
            "To match customers with service providers and process bookings.",
            "To send booking confirmations, reminders and important updates.",
            "To process payments and prevent fraud.",
            "To provide customer support and resolve disputes.",
            "To improve our app, website and services.",
        ],
    },
    {
        title: "3. How we share your information",
        intro: "We do not sell your personal information. We share it only when needed:",
        items: [
            "With service providers: customers' name, phone number and address are shared with the provider assigned to their booking.",
            "With customers: providers' name, profile, ratings and reviews are visible to customers.",
            "With service partners: payment processors, SMS and email services, and hosting providers who help us operate Service BD.",
            "When required by law, or to protect the rights and safety of our users and platform.",
        ],
    },
    {
        title: "4. Cookies and similar technologies",
        text: "We use cookies and similar technologies to keep you signed in, remember your preferences and understand how our platform is used. You can disable cookies in your browser settings, but some features may not work properly.",
    },
    {
        title: "5. Data retention",
        text: "We keep your information for as long as your account is active or as needed to provide our services. We may keep some records longer to meet legal, accounting or dispute-resolution requirements.",
    },
    {
        title: "6. Data security",
        text: "We use reasonable technical and organizational measures to protect your information, including encrypted connections and access controls. No system is completely secure, so we cannot guarantee absolute security.",
    },
    {
        title: "7. Your choices and rights",
        intro: "You can contact us at any time to:",
        items: [
            "Access the personal information we hold about you.",
            "Correct inaccurate or outdated information.",
            "Request deletion of your account and data, subject to legal requirements.",
            "Opt out of promotional messages.",
        ],
    },
    {
        title: "8. Children's privacy",
        text: "Service BD is not intended for children under 18. We do not knowingly collect personal information from children. If you believe a child has given us information, please contact us and we will delete it.",
    },
    {
        title: "9. Changes to this policy",
        text: "We may update this Privacy Policy from time to time. When we do, we will change the \"Last updated\" date at the top of this page. If the changes are significant, we will notify you through the app or by email.",
    },
];

export const metadata = {
    title: "Privacy Policy | Service BD",
    description: "How Service BD collects, uses and protects your information.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-white text-slate-900">
            {/* Header */}
            <section className="bg-emerald-900 px-6 py-16 text-white sm:py-20">
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
                    <p className="mt-4 text-emerald-100">Last updated: {LAST_UPDATED}</p>
                </div>
            </section>

            {/* Content */}
            <article className="px-6 py-16">
                <div className="mx-auto max-w-3xl">
                    <p className="text-lg leading-relaxed text-slate-700">
                        Service BD ("we", "us", "our") connects customers with service
                        providers. This Privacy Policy explains what information we collect,
                        how we use it, and the choices you have. By using our website or app,
                        you agree to the practices described here.
                    </p>

                    <div className="mt-12 space-y-12">
                        {sections.map((section) => (
                            <section key={section.title}>
                                <h2 className="text-2xl font-semibold text-emerald-900">
                                    {section.title}
                                </h2>
                                {section.intro && (
                                    <p className="mt-3 leading-relaxed text-slate-700">
                                        {section.intro}
                                    </p>
                                )}
                                {section.text && (
                                    <p className="mt-3 leading-relaxed text-slate-700">
                                        {section.text}
                                    </p>
                                )}
                                {section.items && (
                                    <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700 marker:text-emerald-700">
                                        {section.items.map((item) => (
                                            <li key={item} className="leading-relaxed">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </section>
                        ))}

                        {/* Contact */}
                        <section className="rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-200">
                            <h2 className="text-2xl font-semibold text-emerald-900">
                                10. Contact us
                            </h2>
                            <p className="mt-3 leading-relaxed text-slate-700">
                                If you have questions about this Privacy Policy or how we handle
                                your information, contact us at{" "}
                                <a
                                    href={`mailto:${CONTACT_EMAIL}`}
                                    className="font-medium text-emerald-800 underline underline-offset-2"
                                >
                                    {CONTACT_EMAIL}
                                </a>
                                .
                            </p>
                        </section>
                    </div>
                </div>
            </article>
        </main>
    );
}