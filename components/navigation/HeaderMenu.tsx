'use client'

import { NavLinks, MobileLinks, FooterLinks } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function HeaderMenu () {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);

    const handleClickMobile = () => {
        setIsMobile(() => !isMobile);
    }

    return (
        <div className="w-full">
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between">
                    {/* Desktop Menu */}
                    <div className="flex flex-1 items-center justify-between">
                        <a className="flex" href="/">
                            <Image 
                                src="/gabion_logo.svg"
                                alt="company logo"
                                width={150}
                                height={1}
                                className="block"
                            />
                        </a>


                    </div>

                </div>

            </div>

            {isMobile ? (
                <div>
                    {MobileLinks.map((menu) => (
                        <a
                            key={menu.label}
                            href={menu.href}
                            className="block rounded-md p-2 text-base font-medium hover:bg-gray-300"
                        >
                            {menu.label}
                        </a>
                    ))}
                </div>
            ) : (
                <div></div>
            )}

        </div>
    );
}
