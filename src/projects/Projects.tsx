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
						         description={"This application is a unique tool for immersing yourself in the study of various subjects, ranging from the beautiful English language to captivating programming. Here, every user can find answers to a wide range of questions, regardless of their type.\n" +
							         "\n" +
							         "One of the main advantages of this application is the ability to create your own decks of flashcards for studying. You have the freedom to determine what information to include in each card: you can add photos, videos, or even questions in textual format. This way, you can customize the learning process according to your preferences and individual needs.\n" +
							         "\n" +
							         "Moreover, you have the opportunity to explore cards created by other users. This opens up unique perspectives for exchanging knowledge and experiences with the community, expanding your understanding and enriching your erudition.\n" +
							         "\n" +
							         "The application offers a modern and appealing interface designed with the best design practices in mind. You can expect ease of use and convenient navigation, allowing you to focus on the learning process while enjoying its aesthetic and functional qualities.\n" +
							         "\n" +
							         "Don't miss the chance to broaden your knowledge and develop your skills with this exceptional application. Discover the amazing world of learning that awaits you right here, right now."}
						         stack={ 'React, Redux Toolkit, TypeScript, CSS, Mantine UI, React-Router, Jest, React useForm.' }/>
						<Project title={ 'Social Network' }
						         path={ 'https://github.com/Zaitsev-AV/samurai-way-main' }
						         img={ socNet }
						         description={ 'React(FC and class component), Redux, TypeScript, React-Router, Jest, StoryBook, useForm, CSS.' }/>
					</div>
				</div>
			</div>
			<span className={s.el_1}></span>
			<span className={s.el_2}></span>
		</>
	);
};