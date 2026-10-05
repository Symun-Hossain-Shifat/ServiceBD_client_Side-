import Link from "next/link";
const services = ["Electrician", "AC repair", "Home cleaning", "Plumber", "Painter", "Appliance repair"];

const field =
    "w-full rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-[15px] text-stone-900 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/25";

const label = "mb-1.5 block text-sm font-medium text-stone-700";

const roleCard =
    "block cursor-pointer rounded-lg border border-stone-300 bg-white px-3.5 py-3 text-center text-[15px] font-medium text-stone-800 transition hover:border-stone-400 peer-checked:border-emerald-800 peer-checked:bg-emerald-800 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-emerald-700/40";

export default function SignupPage() {
    return (
        <main className="grid min-h-screen bg-stone-50 lg:grid-cols-[1fr_1.05fr]">
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

            {/* Form */}
            <section className="flex items-center justify-center px-5 py-12">
                <form className="w-full max-w-md space-y-5">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-stone-900">
                            Create your account
                        </h2>
                        <p className="mt-1.5 text-stone-600">
                            Already registered?{" "}
                            <Link href="/login" className="font-semibold text-emerald-800 underline">
                                Log in
                            </Link>
                        </p>
                    </div>

                    <fieldset>
                        <legend className={label}>I want to</legend>
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <input
                                    id="role-customer"
                                    type="radio"
                                    name="role"
                                    value="customer"
                                    defaultChecked
                                    className="peer sr-only"
                                />
                                <label htmlFor="role-customer" className={roleCard}>
                                    Hire a service
                                </label>
                            </div>
                            <div>
                                <input
                                    id="role-provider"
                                    type="radio"
                                    name="role"
                                    value="provider"
                                    className="peer sr-only"
                                />
                                <label htmlFor="role-provider" className={roleCard}>
                                    Offer a service
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <div>
                        <label htmlFor="name" className={label}>
                            Full name
                        </label>
                        <input id="name" name="name" autoComplete="name" className={field} />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                            <label htmlFor="phone" className={label}>
                                Mobile number
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                placeholder="01XXXXXXXXX"
                                className={field}
                            />
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
                        <label htmlFor="password" className={label}>
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            className={field}
                        />
                    </div>

                    <div>
                        <label htmlFor="confirm" className={label}>
                            Confirm password
                        </label>
                        <input
                            id="confirm"
                            name="confirm"
                            type="password"
                            autoComplete="new-password"
                            className={field}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-emerald-800 px-4 py-3 text-[15px] font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
                    >
                        Create account
                    </button>

                    <p className="text-center text-sm text-stone-500">
                        By creating an account you agree to the{" "}
                        <Link href="/terms" className="underline">
                            Terms
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="underline">
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </form>
            </section>
        </main>
    );
}