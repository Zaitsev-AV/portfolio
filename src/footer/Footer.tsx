import React from 'react';
import s from './Footer.module.scss'
import { SocialIcon } from "../common/social/SocialIcon";

export const Footer: React.FC = ( ) => {
	
	return (
		<div className={s.footerBlock}>
			<div className={s.footerContainer}>
			<h2>Alexander Zaitsev</h2>
				<SocialIcon/>
				<span>Все права защищены</span>
			</div>
		
		</div>
	);
};