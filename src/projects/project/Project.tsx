import React from 'react';
import s from './Project.module.scss'
export type ProjectPropsType = {
	title: string
	style?: {
		backgroundImage: string
	}
};
export const Project: React.FC<ProjectPropsType> = ( props ) => {
	const {title, style} = props
	return (
		<a href={'/?'} className={s.wrapper}>
			<div className={s.projectContainer}>
				<h3>{title}</h3>
				<div className={s.imgContainer} style={style}>
					{/*<a className={s.link} href="/#">look</a>*/}
				</div>
				<span className={s.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, quas.</span>
			</div>
		</a>
		
	);
};