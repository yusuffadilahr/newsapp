import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = (props) => {
    const { Nav, children } = props
    return (
        <li className="w-full flex justify-center items-center bg-white hover:bg-black hover:text-white text-sm text-black py-1">
            <Link to={Nav}>{children}</Link>
        </li>
    )
}

export default NavLinks
