import React from 'react';
import s from './About.module.scss'
import me from '../assets/img/me.jpg'
import { SocialIcon } from "../common/social/SocialIcon";
import { BlockTitle } from "../common/block title/BlockTitle";

export type AboutPropsType = {};
export const About: React.FC<AboutPropsType> = ( props ) => {
	const {} = props
	return (
		<>
			<BlockTitle title={'who am i'} id={'section1'}/>
			<div className={ s.about_container } >
				<div className={ s.photo }>
					<img src={ me } alt=""/>
				</div>
				< div className={ s.text } >
					<h1>Hello, my name is Alexander</h1>
					<p>I'm a front-end developer. I have
					   experience in creating SPA (Single Page Applications) using
					   technologies like React, typescript, javascript, various states
					   managers and user interface libraries.
					   I am currently learning Redux Toolkit, RTK Queri and Vitest.</p>
					<div className={ s.row }>
						<div className={ s.infoAboutMe }>
							<span className={ s.desc }>Full Name:</span>
							<span> Zaitsev Alexander</span>
						</div>
						<div className={ s.infoAboutMe }>
							<span className={ s.desc }>Age:</span>
							<span> 27 Years Old</span>
						</div>
						<div className={ s.infoAboutMe }>
							<span className={ s.desc }>Experience:</span>
							<span> .................</span>
						</div>
						<div className={ s.infoAboutMe }>
							<span className={ s.desc }>Email:</span>
							<span> zaitsev.av.12@gmail.com</span>
						</div>
					</div>
					
					<div className={ s.social }>
						<a href="#"
						   className={ `${ s.btn } ${ s.btn_outline_primary }` }>Download CV</a>
						<div className={ s.social_btn }>
							<SocialIcon/>
						</div>
					</div>
				</div>
			</div>
		</>
		
	);
};