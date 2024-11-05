import React, { useEffect, useState } from "react";

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed inset-x-3 top-4 z-50 mx-auto flex transform-gpu ${
                isScrolled ? "backdrop-blur-nav max-w-3xl border-gray-100 bg-white/80 shadow-xl shadow-black/5" : "max-w-6xl border-transparent"
            } animate-slide-down-fade justify-center overflow-hidden rounded-full border px-1 py-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform`}
        >

            <div className="w-full md:my-auto">
                <div className="relative flex items-center justify-between">
                    {/* Logo */}
                    <a aria-label="Home" href="/">
                        <span className="sr-only">Company logo</span>
                        <svg aria-hidden="true" fill="none" viewBox="0 0 200 44" className="w-28 md:w-32">
                        </svg>
                    </a>
                    {/* Navigation for desktop */}
                    {/*<nav className="hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
                        <div className="flex items-center gap-10">
                            <a className="px-2 py-1 text-sm text-gray-900/60 hover:text-gray-900/80" href="/about">About</a>
                            <a className="px-2 py-1 text-sm text-gray-900/60 hover:text-gray-900/80" href="/pricing">Pricing</a>
                            <a className="px-2 py-1 text-sm text-gray-900/60 hover:text-gray-900/80" href="/changelog">Changelog</a>
                        </div>
                    </nav>*/}
                    {/* "Book a Demo" button */}
                    <button className="relative rounded-full transition-all duration-100 ease-in-out max-w-fit border px-5 py-2 text-sm font-medium shadow-sm hover:ring-4 hover:ring-gray-200 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:ring-0 disabled:border-gray-200 border-black bg-black text-white hover:bg-gray-800">
                        Iscriviti alla Beta
                    </button>

                </div>
                {/* Navigation for mobile
                <nav className="my-6 text-lg ease-in-out will-change-transform md:hidden hidden">
                    <ul className="space-y-4 text-sm text-gray-900/60">
                        <li><a href="/about">About</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                        <li><a href="/changelog">Changelog</a></li>
                    </ul>
                </nav>*/}
            </div>
        </header>
    );
};

export default Nav;
