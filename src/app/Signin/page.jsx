import Link from "next/link";

const services = ["Electrician", "AC repair", "Home cleaning", "Plumber", "Painter", "Appliance repair"];

const field =
    "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-[15px] text-neutral-900 outline-none transition focus:border-[#0F4D3A] focus:ring-2 focus:ring-[#0F4D3A]/25";

export default function LoginPage() {
    return (
        <main className="grid min-h-screen lg:grid-cols-[1.05fr_1fr]">
            {/* Brand panel */}
            <section className="relative hidden flex-col justify-between overflow-hidden bg-[#0F4D3A] p-12 text-white lg:flex">
                <div
                    aria-hidden
                    className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#F2A900] opacity-90"
                />
                <div
                    aria-hidden
                    className="absolute -right-10 -top-10 h-96 w-96 rounded-full border-[28px] border-[#0F4D3A]/30"
                />
                <Link href="/" className="relative z-10 text-xl font-bold tracking-tight">
                    Service<span className="text-[#F2A900]">BD</span>
                </Link>

                <div className="relative z-10 max-w-md">
                    <p className="mb-3 text-lg text-[#F2A900]">আবার স্বাগতম</p>
                    <h1 className="text-5xl font-bold leading-[1.08] tracking-tight">
                        Trusted help for your home, booked in minutes.
                    </h1>
                    <ul className="mt-8 flex flex-wrap gap-2">
                        {services.map((s) => (
                            <li key={s} className="rounded-full border border-white/30 px-3.5 py-1.5 text-sm text-white/90">
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="relative z-10 text-sm text-white/70">Verified professionals across Bangladesh.</p>
            </section>

            {/* Form panel */}
            <section className="flex items-center justify-center bg-white px-6 py-12">
                <div className="w-full max-w-sm">
                    <Link href="/" className="mb-10 block text-xl font-bold tracking-tight text-[#0F4D3A] lg:hidden">
                        Service<span className="text-[#F2A900]">BD</span>
                    </Link>

                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Log in</h2>
                    <p className="mt-2 text-neutral-600">Manage your bookings and saved providers.</p>

                    <form className="mt-8 space-y-5">
                        <div>
                            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-neutral-800">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                className={field}
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <div className="mb-1.5 flex items-center justify-between">
                                <label htmlFor="password" className="text-sm font-medium text-neutral-800">
                                    Password
                                </label>
                                <Link href="/forgot-password" className="text-sm font-medium text-[#0F4D3A] hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                            <input
                                id="password"
                                type="password"
                                autoComplete="current-password"
                                className={field}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-[#0F4D3A] py-3 text-[15px] font-semibold text-white transition hover:bg-[#0B3B2D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2A900] focus-visible:ring-offset-2"
                        >
                            Log in
                        </button>
                    </form>

                    <div className="my-6 flex items-center gap-3 text-sm text-neutral-500">
                        <span className="h-px flex-1 bg-neutral-200" />
                        or
                        <span className="h-px flex-1 bg-neutral-200" />
                    </div>

                    <button
                        type="button"
                        className="w-full rounded-lg border border-neutral-300 py-3 text-[15px] font-medium text-neutral-800 transition hover:bg-neutral-50"
                    >
                        Continue with Google
                    </button>

                    <p className="mt-8 text-center text-sm text-neutral-600">
                        New to ServiceBD?{" "}
                        <Link href="/register" className="font-semibold text-[#0F4D3A] hover:underline">
                            Create an account
                        </Link>
                    </p>
                </div>
            </section>
        </main>
    );
}