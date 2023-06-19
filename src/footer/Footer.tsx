import React from 'react';
import s from './Footer.module.scss'
import { SocialIcon } from "../common/social/SocialIcon";

export const Footer: React.FC = ( ) => {
	
	return (
		<div className={s.footerBlock}>
			<div className={s.footerContainer}>
				<SocialIcon/>
				<span>© 2023 Alexander Zaitsev. All Rights Reserved.</span>
			</div>
		
		</div>
	);
};