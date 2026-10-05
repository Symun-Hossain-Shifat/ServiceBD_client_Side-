import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const columns = [
    {
        title: "Services",
        links: [
            { label: "Electrician", href: "/services/electrician" },
            { label: "AC repair", href: "/services/ac-repair" },
            { label: "Home cleaning", href: "/services/home-cleaning" },
            { label: "Plumber", href: "/services/plumber" },
            { label: "Painter", href: "/services/painter" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About us", href: "/about" },
            { label: "Become a provider", href: "/become-a-provider" },
            { label: "Careers", href: "/careers" },
            { label: "Blog", href: "/blog" },
        ],
    },
    {
        title: "Support",
        links: [
            { label: "Help center", href: "/help" },
            { label: "Contact us", href: "/Contact" },
            { label: "Terms of service", href: "/terms" },
            { label: "Privacy policy", href: "/privacy" },
        ],
    },
];

const socials = [
    { label: "Facebook", href: "#", Icon: FaFacebookF },
    { label: "Instagram", href: "#", Icon: FaInstagram },
    { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
    { label: "YouTube", href: "#", Icon: FaYoutube },
];

export default function Footer() {
    return (
        <footer className="bg-[#0F4D3A] text-white">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
                {/* Brand */}
                <div>
                    <Link href="/" className="text-2xl font-bold tracking-tight">
                        Service<span className="text-[#F2A900]">BD</span>
                    </Link>
                    <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
                        Trusted help for your home, booked in minutes. Verified professionals across Bangladesh.
                    </p>
                    <ul className="mt-6 flex gap-3">
                        {socials.map(({ label, href, Icon }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    aria-label={label}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/90 transition hover:border-[#F2A900] hover:bg-[#F2A900] hover:text-[#0F4D3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2A900] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F4D3A]"
                                >
                                    <Icon />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Link columns */}
                {columns.map((col) => (
                    <nav key={col.title} aria-label={col.title}>
                        <h3 className="text-base font-semibold text-[#F2A900]">{col.title}</h3>
                        <ul className="mt-4 space-y-3">
                            {col.links.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-white/80 transition hover:text-white hover:underline">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                ))}
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/15">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-sm text-white/65 sm:flex-row">
                    <p>© {new Date().getFullYear()} ServiceBD. All rights reserved.</p>
                    <p>Made in Bangladesh</p>
                </div>
            </div>
        </footer>
    );
}