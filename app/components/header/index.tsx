'use client'

import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav-item";
import { motion } from "framer-motion";

const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Projetos',
        href: '/projects'
    }
]

export const Header = () => {
    return (
        <motion.header 
            className="absolute top-0 z-10 h-18 w-full flex items-center justify-center"
            initial={{ top: -100 }}
            animate={{ top: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <Image
                        width={59}
                        height={49}
                        src="/images/logo.png"
                        alt="logo"
                    />
                </Link>

                <nav className="flex items-center gap-4 sm:gap-10">
                    {NAV_ITEMS.map(item => (
                        <NavItem {...item} key={item.label} />
                    ))}
                </nav>
            </div>
        </motion.header>
    )
}