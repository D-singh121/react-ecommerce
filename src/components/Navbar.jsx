// import Input from "./Input"
import '../style/navbar.scss';
// import { IoSearchOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import Button from "./Button";
import { NavLink } from 'react-router-dom';

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';



const Navbar = () => {

	const [showMenu, setMenuIcon] = useState(false);


	return (
		<header>
			<NavLink to='/'
				className='logo'
			>
				D.Store
			</NavLink>

			<nav>
				<div className={showMenu ? 'navbar active' : "navbar"}>
					<ul className='navbar-lists'>
						<li>
							<NavLink to='/'
								className="navbar-link "
								onClick={() => setMenuIcon(false)}
							>
								Home
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/about"
								className="navbar-link "
								onClick={() => setMenuIcon(false)}>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/products"
								className="navbar-link "
								onClick={() => setMenuIcon(false)}>
								Products
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contact"
								className="navbar-link "
								onClick={() => setMenuIcon(false)}>
								Contact
							</NavLink>
						</li>

						<li>
							<NavLink
								to='/user-profile'
								className='navbar-link'
							>
								<FaUser className='user-icon' />
								<span className='user-login-name'>Welcome,User</span>
							</NavLink>
						</li>

						<li >
							<NavLink
								to='/cart'
								className='navbar-link    '
							>
								<div className='cart-trolly--link'>
									<FaCartArrowDown className='cart-trolly' />
									<span className='cart-total--item'>10</span>
								</div>
							</NavLink>
						</li>

						<li>
							<NavLink
								to='/'
								className='navbar-link'
							>
								<Button
									type='text'
									className='btn'
									label="Logout"
								/>
							</NavLink>
						</li>


					</ul>
					<div className='mobile-navbar-btn'>
						<RxHamburgerMenu
							name='main-outline'
							className='mobile-nav-icon'
							onClick={() => setMenuIcon(true)}
						/>
						<RxCross1
							name='close-outline'
							className='mobile-nav-icon  close-outline'
							onClick={() => setMenuIcon(false)}

						/>
					</div>

				</div>
			</nav>
		</header>
	)
}

export default Navbar