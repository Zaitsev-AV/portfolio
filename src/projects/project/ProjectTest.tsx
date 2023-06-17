import React from 'react';
import s from './ProjectTest.module.css'
import { ProjectPropsType } from "./Project";

export const ProjectTest: React.FC<ProjectPropsType> = ( props) => {
	const {title, style, text, img} = props
	return (
		<div className={ s.card }>
			<img src={img} />
			<div>
				<h2>{title}</h2>
				<h3>Type: Residential rental</h3>
				<p>
					{text}
				</p>
				<button>Show the property project</button>
			</div>
		</div>
	);
};