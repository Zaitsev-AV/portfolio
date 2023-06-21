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
				<BlockTitle title={ 'My projects' }
				            id={ 'section3' }/>
				<div className={ `${ s.projectContainer }` }>
					<div className={ s.projects }>
						<Project title={ 'Quiz' }
						         path={ 'https://github.com/Zaitsev-AV/quiz' }
						         img={ quizProject }
						         stack={ 'React, Redux, TypeScript, Vite, Vitest, CSS.' }
						         description={ "This project was created to explore questions related to JavaScript, TypeScript and React. The user is randomly presented with different questions and must select the correct answer. At the end, the user sees the number of correct answers. The project is still under development and I plan to add more functionality and a database in the future." }/>
						<Project title={ 'Todo list' }
						         path={ 'https://github.com/Zaitsev-AV/todolist_main_project' }
						         img={ todo }
						         description={"In this project, an application has been developed for tracking completed and incomplete tasks. For each task list, a separate card is created where various tasks can be added. The main CRUD operations have been implemented, providing a complete cycle of interaction with the server."}
						         stack={ 'React, Redux, TypeScript, React-Router, Material UI, Vite, Vitest, Formik, CSS.' }/>
						<Project title={ 'Card' }
						         img={ card }
						         path={ 'https://github.com/Zaitsev-AV/cards' }
						         description={"This unique application allows you to immerse yourself in the study of various subjects, from the English language to programming. You will find answers to diverse questions.\n" +
							         "\n" +
							         "Benefits:\n" +
							         "\n" +
							         "Create your own decks of flashcards for studying, adding photos, videos, or text-based questions.\n" +
							         "Explore flashcards created by other users and exchange knowledge.\n" +
							         "Intuitive and appealing interface for convenient learning."}
						         stack={ 'React, Redux Toolkit, TypeScript, CSS, Mantine UI, React-Router, Jest, React useForm.' }/>
						<Project title={ 'Social Network' }
						         path={ 'https://github.com/Zaitsev-AV/samurai-way-main' }
						         img={ socNet }
						         description={'This social network opens up a wide range of possibilities for users to engage in social interactions. Here, you can enjoy browsing through other users\' profiles, easily add new friends or remove existing ones, and actively communicate with like-minded individuals. The platform also features a wall posting functionality, allowing users to share their thoughts, ideas, inspirations, and creative achievements.'}
						         stack={ 'React(FC and class component), Redux, TypeScript, React-Router, Jest, StoryBook, useForm, CSS.' }/>
					</div>
				</div>
			</div>
			<span className={s.el_1}></span>
			<span className={s.el_2}></span>
		</>
	);
};