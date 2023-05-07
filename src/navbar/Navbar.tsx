import React from 'react';
import s from './Navbar.module.scss'

export type NavbarPropsType = {

};
export const Navbar: React.FC<NavbarPropsType> = ( props ) => {
	const {  } = props
	return (
		<div className={s.nav}>
			<a href="">Home</a>
			<a href="">About</a>
			<a href="">Skills</a>
			<a href="">Project</a>
			<a href="">Contacts</a>
		</div>
	);
};