import React from 'react';
import s from './Skill.module.scss'

export type SkillPropsType = {};
export const Skill: React.FC<SkillPropsType> = ( props ) => {
	const {} = props
	return (
		<div className={ s.skill }>
			<div className={ s.icon }></div>
			<div className={ `${s.skillInfo} s.skill__info`}>
				<h3>New title</h3>
				<span className={ s.description }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore laboriosam magnam minima soluta.</span>
			</div>
		</div>
	);
};