import React from 'react';
import s from './Skills.module.scss'
import { Skill } from "./skill/Skill";
import { BlockTitle } from "../common/block title/BlockTitle";


export type SkillsPropsType = {};
export const Skills: React.FC<SkillsPropsType> = ( props ) => {
	const {} = props
	return (
		<div className={ s.skillsBlock }>
			<BlockTitle title={'Skills'}/>
			<div className={ `${ s.skillsContainer }` }>
				
				<div className={ s.skills }>
					<Skill/>
					<Skill/>
					<Skill/>
					<Skill/>
					<Skill/>
					<Skill/>
					<span className={s.el_1}></span>
					<span className={s.el_2}></span>
				</div>
			</div>
		</div>
	);
};