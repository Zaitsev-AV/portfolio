import React from 'react';
import s from './Header.module.scss'
import { Navbar } from "../navbar/Navbar";

export type HeaderPropsType = {

};
export const Header: React.FC<HeaderPropsType> = ( props ) => {
	const {  } = props
	    console.log("Header render")
	return (
		<div className={s.header}>
		<Navbar/>
		</div>
	);
};