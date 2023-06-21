import React, { FC } from 'react'
import s from './Project.module.scss'

type ProjectPropsType = {
	img: string
	title: string
	description: string
	path: string
	stack?: string
}

const onClickHandle = (src: string) => {
	return () => window.open(src, '_blank')
}

export const Project: FC<ProjectPropsType> = (props) => {
	const { img, title, description, path, stack} = props
	return (
		<div className={s.project} >
			<div className={s.photoWrapper}>
				<div
					className={s.photo}
					onClick={onClickHandle(path)}
				>
					<img src={img}
					     alt=""/>
					<button className={s.btn}>View</button>
				</div>
			</div>
			<div className={s.text}>
				<h3 onClick={onClickHandle(path)}>{title}</h3>
				<p>{description}</p>
				<p>Technology stack: {stack}</p>
			</div>
			<div className={s.btnView} onClick={onClickHandle(path)}>
				<button>View</button>
			</div>
		</div>
	)
}










// import React from 'react';
// import s from './Project.module.scss'
// export type ProjectPropsType = {
// 	title: string
// 	path?: string
// 	text?: string
// 	img?: string
// };
// export const Project: React.FC<ProjectPropsType> = ( props ) => {
// 	const {title, text, img, path} = props
// 	return (
// 		<div className={ s.card_container }>
// 			<div className={ s.card }>
// 				<div className={ s.front_content }>
// 					<p>{ title }</p>
// 					<img src={img}
// 					     alt=""/>
// 				</div>
// 				{/*<div className={s.imgContainer} style={style}>*/ }
// 				{/*<a className={s.link} href="/#">look</a>*/ }
// 				{/*</div>*/ }
// 				<div className={ s.content }>
// 					<p className={ s.heading }>
// 						Technologies used
// 					</p>
// 					<p className={ s.description }>
// 						{ text }
// 					</p>
// 					<a href={'https://github.com/Zaitsev-AV/quiz'} className={s.btn}>
// 						<a href={'https://github.com/Zaitsev-AV/quiz'}>View</a>
// 					</a>
// 				</div>
// 			</div>
// 			</div>
//
// 	);
// };