import React from 'react';
import s from './Project.module.scss'
export type ProjectPropsType = {
	title: string
	style?: {
		backgroundImage: string
	}
	text?: string
	img?: string
};
export const Project: React.FC<ProjectPropsType> = ( props ) => {
	const {title, style, text} = props
	return (
		<a href={'/?'} className={s.wrapper}>
			<div className={s.projectContainer}>
				<h3>{title}</h3>
				<div className={s.imgContainer} style={style}>
					{/*<a className={s.link} href="/#">look</a>*/}
				</div>
				<span className={s.description}>{text}</span>
			</div>
		</a>
		
	);
};