import React from 'react';
import s from './Skill.module.scss'

export type SkillPropsType = {
	children?: React.ReactNode
	title?: string
	text?: string
};
export const Skill: React.FC<SkillPropsType> = ( props ) => {
	const {children, text, title} = props
	return (
		<div className={ s.skill }>
			<div className={ s.icon }> {children}</div>
			<div className={ s.skillInfo }>
				<h2>{title}</h2>
				<span className={ s.description }>{text}</span>
			</div>
		</div>
	);
};