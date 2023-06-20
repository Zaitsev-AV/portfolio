import React from 'react';
import s from './Project.module.scss'
export type ProjectPropsType = {
	title: string
	path?: string
	text?: string
	img?: string
};
export const Project: React.FC<ProjectPropsType> = ( props ) => {
	const {title, text, img, path} = props
	return (
		<div className={ s.card_container }>
			<div className={ s.card }>
				<div className={ s.front_content }>
					<p>{ title }</p>
					<img src={img}
					     alt=""/>
				</div>
				{/*<div className={s.imgContainer} style={style}>*/ }
				{/*<a className={s.link} href="/#">look</a>*/ }
				{/*</div>*/ }
				<div className={ s.content }>
					<p className={ s.heading }>
						Technologies used
					</p>
					<p className={ s.description }>
						{ text }
					</p>
					<a href={'https://github.com/Zaitsev-AV/quiz'} className={s.btn}>
						<a href={'https://github.com/Zaitsev-AV/quiz'}>View</a>
					</a>
				</div>
			</div>
			</div>
		
	);
};