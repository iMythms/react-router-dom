import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/React.svg'

const NavBar = () => {
	return (
		<nav className="bg-[#292929] h-14 flex items-center justify-between shadow-md px-6 fixed top-0 w-full z-50">
			<div className="w-8">
				<img src={Logo} alt="Logo" />
			</div>
			<div className="flex gap-8 items-center justify-center text-white font-extralight">
				<Link to="/" className="hover:underline">
					Home
				</Link>
				<Link to="/pokemon" className="hover:underline">
					Pokemon
				</Link>
			</div>
			<div className="text-white font-extralight">
				<Link to="/pokemon/new" className="hover:underline">
					New
				</Link>
			</div>
		</nav>
	)
}

export default NavBar
