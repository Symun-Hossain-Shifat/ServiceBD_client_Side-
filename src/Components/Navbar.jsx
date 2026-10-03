import Link from "next/link";

const links = [
    { label: "Home", href: "/", active: true },
    { label: "Services", href: "/services" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Providers", href: "/providers" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    return (
        <section className="sticky top-0 z-50 border-b border-[#14201B]/10 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
            {/* CSS-only toggle: no JavaScript or state needed */}
            <input id="nav-toggle" type="checkbox" className="peer sr-only" />

            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 peer-checked:[&_.icon-open]:hidden peer-checked:[&_.icon-close]:block">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#0F5A3C] text-lg font-bold text-white">
                        S
                    </span>
                    <span className="text-xl font-bold tracking-tight text-[#0F5A3C]">
                        ServiceBD
                    </span>
                </Link>

                {/* Desktop links */}
                <nav className="hidden md:block" aria-label="Main">
                    <ul className="flex items-center gap-1 lg:gap-2">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-[#0F5A3C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F5A3C] ${link.active ? "text-[#0F5A3C]" : "text-[#14201B]/70"
                                        }`}
                                >
                                    {link.label}
                                    {link.active && (
                                        <span className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-[#F5A524]" />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop actions */}
                <div className="hidden items-center gap-3 md:flex">
                    <Link
                        href="/login"
                        className="rounded-lg px-3 py-2 text-sm font-medium text-[#14201B] transition-colors hover:text-[#0F5A3C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F5A3C]"
                    >
                        Log in
                    </Link>
                    <Link
                        href="/services"
                        className="rounded-xl bg-[#F5A524] px-4 py-2.5 text-sm font-semibold text-[#14201B] shadow-sm transition hover:bg-[#e69712] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F5A3C]"
                    >
                        Book a service
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <label
                    htmlFor="nav-toggle"
                    aria-label="Toggle menu"
                    className="grid h-10 w-10 cursor-pointer place-items-center rounded-lg text-[#14201B] transition-colors hover:bg-[#0F5A3C]/10 md:hidden"
                >
                    <svg
                        className="icon-open h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        <path d="M4 7h16M4 12h16M4 17h16" />
                    </svg>
                    <svg
                        className="icon-close hidden h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                </label>
            </div>

            {/* Mobile panel */}
            <div className="hidden border-t border-[#14201B]/10 bg-white peer-checked:block md:hidden">
                <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6" aria-label="Mobile">
                    <ul className="flex flex-col gap-1">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${link.active
                                        ? "bg-[#0F5A3C]/10 text-[#0F5A3C]"
                                        : "text-[#14201B]/80 hover:bg-[#14201B]/5"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[#14201B]/10 pt-4">
                        <Link
                            href="/login"
                            className="rounded-xl border border-[#14201B]/20 px-4 py-3 text-center text-sm font-semibold text-[#14201B]"
                        >
                            Log in
                        </Link>
                        <Link
                            href="/services"
                            className="rounded-xl bg-[#F5A524] px-4 py-3 text-center text-sm font-semibold text-[#14201B]"
                        >
                            Book a service
                        </Link>
                    </div>
                </nav>
            </div>
        </section>
    );
}