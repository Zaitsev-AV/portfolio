import React from 'react';
import s from './Header.module.scss'
import { Navbar } from "../navbar/Navbar";
import { useWindowScroll } from "react-use";

export type HeaderPropsType = {

};
export const Header: React.FC<HeaderPropsType> = ( props ) => {
	const {  } = props
	const { y } = useWindowScroll();
	const scrolled = y > 0;

	return (
		<div className={s.header}>
			<div className={`${s.navigation} ${scrolled ? s.scrolled : ''}`}>
		<Navbar/>
			</div>
		</div>
	);
};