import React from 'react'
import NavLogo from './NavLogo'
import NavBodyLinks from './NavBodyLinks'
import MobileNav from './MobileNav'

const Navbar = () => {
    return (
        <div className="top-0 py-1 lg:py-2 w-full bg-gray-900 lg:relative border-b border-gray-950 z-50">
            <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-full mx-auto px-5 py-2.5 lg:border-none lg:py-2">
                <div className="flex items-center justify-between">
                    <NavLogo />
                    <NavBodyLinks />
                    <div className="flex items-center justify-center lg:hidden">
                        <MobileNav />
                    </div>
                </div >
            </nav >
        </div >
    )
}

export default Navbar
