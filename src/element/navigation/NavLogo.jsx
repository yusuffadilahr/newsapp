import React from 'react'
import { Link } from 'react-router-dom'

const NavLogo = () => {
    return (
        <button>
            <div className="flex items-center space-x-2 ml-3">
                <Link to='/'>
                    <img src="https://w7.pngwing.com/pngs/547/523/png-transparent-simple-earth-logo-design-white-simple-hand-painted.png"
                        className="h-8 rounded-full" alt="Logo" />
                </Link>
                <h2 className="text-indigo-200 font-bold text-2xl">Y-News</h2>
            </div>
        </button>
    )
}

export default NavLogo
