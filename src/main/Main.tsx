import React from 'react';
import s from './Main.module.scss'
import { Header } from "../header/Header";
import { About } from "../aboutMe/About";


export type MainPropsType = {};
export const Main: React.FC<MainPropsType> = ( props ) => {
	const {} = props

	
	return (
		<div className={ s.mainBlock } id={'Home'}>
			
				<Header/>
			<div className={ s.main_container }>
				<span className={s.el_1}></span>
				<span className={s.el_2}></span>
				<span className={s.el_3}></span>
				<span className={s.el_4}></span>
				<div>
					<div className={s.info_dev}>
						<h1>I'm Frontend Developer </h1>
					</div>
					<div className={s.info_name}>
						<h2>Alexander Zaitsev</h2>
					</div>
				</div>
			</div>
			<About/>
		</div>
	);
};