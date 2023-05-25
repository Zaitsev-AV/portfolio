import React from 'react';
import { Link } from "react-scroll";
import s from './Navbar.module.scss'
import { useWindowScroll } from 'react-use';


export const Navbar: React.FC = (  ) => {
	const { y } = useWindowScroll();
	const scrolled = y > 0;

	return (
		<>
			<nav className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
				{/*<div className={s.name}>*/}
				{/*	{scrolled && <h1>ALEXANDER ZAITSEV</h1>}*/}
				{/*</div>*/}
				
			<Link
				activeClass="active"
				to="Home"
				spy={true}
				smooth={true}
				offset={-70}
				duration={800}
			>HOME</Link>
			<Link
				activeClass="active"
				to="section1"
				spy={true}
				smooth={true}
				offset={20}
				duration={800}
			>ABOUT</Link>
			<Link
				activeClass="active"
				to="section2"
				spy={true}
				smooth={true}
				offset={15}
				duration={900}
			>SKILLS</Link>
			<Link
				activeClass="active"
				to="section3"
				spy={true}
				smooth={true}
				offset={20}
				duration={1000}
			>PROJECTS</Link>
			<Link
				activeClass="active"
				to="section4"
				spy={true}
				smooth={true}
				offset={-200}
				duration={1100}
			>CONTACTS</Link>
		</nav>
		</>
	);
};