import React from 'react';
import s from './Skills.module.scss'
import { Skill } from "./skill/Skill";
import { BlockTitle } from "../common/block title/BlockTitle";
import { Icon } from '@iconify/react';
import { Animation } from "../common/animation/Animation";


export const Skills: React.FC = () => {
	return (
		<div className={ s.skillsBlock }>
			<BlockTitle title={ 'Skills' }
			            id={ 'section2' }/>
			<div className={ `${ s.skillsContainer }` }>
				<div className={ s.skills }>
					
					<Skill title={ 'React' }>
						<Icon icon="skill-icons:react-dark"
						      width={ 80 }
						      height={ 80 }/>
					
					</Skill>
					<Skill
						title={ 'Redux/RTK' }>
						<Icon icon="skill-icons:redux"
						      width={ 80 }
						      height={ 80 }/>
					</Skill>
					<Skill title={ 'TypeScript' }>
						<Icon icon="skill-icons:typescript"
						      width={ 80 }
						      height={ 80 }/>
					
					</Skill>
					<Skill title={ 'JavaScript' }>
						<Icon icon="skill-icons:javascript"
						      width={ 80 }
						      height={ 80 }/>
					</Skill>
					
					<Skill title={ 'Axios' }>
						<Icon icon="simple-icons:axios"
						      width={ 80 }
						      height={ 80 }/>
					</Skill>
					<Skill title={ 'Jest' }>
						<Icon icon="vscode-icons:file-type-jest"
						      width={ 80 }
						      height={ 80 }/>
					</Skill>
					<Skill title={ 'Vitest' }>
						<Icon icon="logos:vitest"
						      width={ 80 }
						      height={ 80 }/>
					</Skill>
					<Skill title={ "SASS/SCSS" }>
						<Icon icon="vscode-icons:file-type-scss"
						      width={ 80 }
						      height={ 80 }/>
					</Skill>
					<Skill title={ 'StoryBook' }>
						<Icon icon="devicon:storybook"
						      width={ 80 }
						      height={ 80 }/>
					</Skill>
					<Skill title={ 'Postman' }>
						<Icon icon="logos:postman-icon"
						      width={ 80 }
						      height={ 80 }/>
					</Skill>
					<Skill title={ 'Git' }>
						<Icon icon="logos:git-icon"
						      width={ 80 }
						      height={ 80 }/>
					</Skill>
					<Skill title={ 'Rest-API' }>
						<Icon icon="tabler:api"
						      color="red"
						      width={ 80 }
						      height={ 80 }/>
					</Skill>
					
				</div>
				<div className={s.elements}>
					<span className={ s.el_1 }></span>
					<span className={ s.el_2 }></span>
					<span className={ s.el_3 }></span>
				</div>
			</div>
		</div>
	);
};