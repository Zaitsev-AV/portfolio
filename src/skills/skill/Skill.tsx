import React from 'react';
import s from './Skill.module.scss'
import { Animation } from "../../common/animation/Animation";

export type SkillPropsType = {
	children?: React.ReactNode
	title?: string
	text?: string
};
export const Skill: React.FC<SkillPropsType> = ( props ) => {
	const {children, text, title} = props
	return (
		<Animation animation={"animate__fadeInRight"} threshold={0.5} className={ s.skill }>
			<div className={ s.icon }> {children}</div>
			<div className={ s.skillInfo }>
				<h2>{title}</h2>
				<span className={ s.description }>{text}</span>
			</div>
		</Animation>
	);
};