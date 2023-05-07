import React from 'react';
import s from './Projects.module.scss'
import { Project } from "./project/Project";
import { BlockTitle } from "../common/block title/BlockTitle";
import quizProject from "../assets/img/quiz.jpg"

export type ProjectsPropsType = {

};
export const Projects: React.FC<ProjectsPropsType> = ( props ) => {
	const {} = props
	
	const quiz = {
		backgroundImage: `url(${quizProject})`
	}
	
	return (
		<>
			<div className={s.projectsBlock}>
				<BlockTitle title={'My projects'}/>
				<div className={`${s.projectContainer}`}>
					<div className={s.projects}>
						<Project title={'Quiz'} style={quiz}/>
						<Project title={'Todo list'}/>
						<Project title={'Counter'}/>
						<Project title={'Social Network'}/>
					</div>
				</div>
			</div>
			<span className={s.el_1}></span>
			<span className={s.el_2}></span>
		</>
	);
};