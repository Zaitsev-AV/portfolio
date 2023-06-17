import React from 'react';
import s from './Projects.module.scss'
import { Project } from "./project/Project";
import { BlockTitle } from "../common/block title/BlockTitle";
import quizProject from "../assets/img/quiz.jpg"
import todo from "../assets/img/logo_todo.png"
import socNet from "../assets/img/soc-network.svg"
import counterImg from "../assets/img/counter.png"
import { ProjectTest } from "./project/ProjectTest";

export type ProjectsPropsType = {

};
export const Projects: React.FC<ProjectsPropsType> = ( props ) => {
	const {} = props
	
	const quiz = {
		backgroundImage: `url(${quizProject})`
	}
	const todoList = {
		backgroundImage: `url(${todo})`
	}
	const socialNetwork = {
		backgroundImage: `url(${socNet})`
	}
	
	const counter = {
		backgroundImage: `url(${counterImg})`
	}
	
	return (
		<>
			<div className={s.projectsBlock}>
				<BlockTitle title={'My projects'} id={'section3'}/>
				<div className={`${s.projectContainer}`}>
					<div className={s.projects}>
						<ProjectTest title={'Quiz'} text={'Technologies used: React, Redux, TypeScript, Vite, Vitest, CSS.'} img={quizProject}/>
						<ProjectTest title={'Todo list'} text={'Technologies used: React, Redux, TypeScript, React-Router, Material UI, Vite, Vitest, Formik, CSS.'} img={todo}/>
						<ProjectTest title={'Cards'} text={'Technologies used: React, Redux Toolkit, TypeScript, React-Router, Mantine UI, Jest, React Hook Form, CSS.'} img={todo}/>
						<ProjectTest title={'Counter'} text={'Technologies used: React, Redux, TypeScript, Vite, CSS.'} img={counterImg}/>
						<ProjectTest title={'Social Network'} text={'Technologies used: React(FC and class component), Redux, TypeScript, React-Router, Jest, StoryBook, useForm, CSS.'} img={socNet}/>
						{/*<Project title={'Quiz'} style={quiz} text={'Technologies used: React, Redux, TypeScript, Vite, Vitest, CSS.'}/>*/}
						{/*<Project title={'Todo list'} style={todoList} text={'Technologies used: React, Redux, TypeScript, React-Router, Material UI, Vite, Vitest, Formik, CSS.'}/>*/}
						{/*<Project title={'Counter'} style={counter} text={'Technologies used: React, Redux, TypeScript, Vite, CSS.'}/>*/}
						{/*<Project title={'Social Network'} style={socialNetwork} text={'Technologies used: React(FC and class component), Redux, TypeScript, React-Router, Jest, StoryBook, useForm, CSS.'}/>*/}
					</div>
				</div>
			</div>
			<span className={s.el_1}></span>
			<span className={s.el_2}></span>
		</>
	);
};