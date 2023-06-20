import React from 'react';
import s from './Projects.module.scss'
import { Project } from "./project/Project";
import { BlockTitle } from "../common/block title/BlockTitle";
import quizProject from "../assets/img/quiz_new.svg"
import todo from "../assets/img/todos1.svg"
import socNet from "../assets/img/social.svg"
import card from "../assets/img/card.svg"


export const Projects: React.FC = () => {

	return (
		<>
			<div className={s.projectsBlock}>
				<BlockTitle title={'My projects'} id={'section3'}/>
				<div className={`${s.projectContainer}`}>
					<div className={s.projects}>
						<Project title={'Quiz'} path={'https://github.com/Zaitsev-AV/quiz'} img={quizProject} text={'React, Redux, TypeScript, Vite, Vitest, CSS.'}/>
						<Project title={'Todo list'}  path={'https://github.com/Zaitsev-AV/todolist_main_project'} img={todo} text={'React, Redux, TypeScript, React-Router, Material UI, Vite, Vitest, Formik, CSS.'}/>
						<Project title={'Card'} img={card} path={'https://github.com/Zaitsev-AV/cards'} text={'React, Redux Toolkit, TypeScript, CSS, Mantine UI, React-Router, Jest, React useForm.'}/>
						<Project title={'Social Network'}  path={'https://github.com/Zaitsev-AV/samurai-way-main'} img={socNet} text={'React(FC and class component), Redux, TypeScript, React-Router, Jest, StoryBook, useForm, CSS.'}/>
					</div>
				</div>
			</div>
			<span className={s.el_1}></span>
			<span className={s.el_2}></span>
		</>
	);
};