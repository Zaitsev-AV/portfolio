import React from 'react';
import s from './About.module.scss'
import me from '../assets/img/me2.png'
import { SocialIcon } from "../common/social/SocialIcon";
import { BlockTitle } from "../common/block title/BlockTitle";

export const About: React.FC = () => {
	return (
		<>
			<BlockTitle title={'who am i'} id={'section1'}/>
			<div className={ s.about_container } >
				
				<div className={ s.photo }>
					<img src={ me } alt=""/>
					<span className={ s.el_1 }></span>
				</div>
				< div className={ s.text } >
					<h1>Hello, my name is Alexander</h1>
					<p>I'm a front-end developer. I have
					   experience in creating SPA (Single Page Applications) using
					   technologies like React, Redux Toolkit, TypeScript, JavaScript, various user interface libraries.
					   I am currently learning Redux Toolkit, RTK Query and Styled Components.
					   If you are looking for a responsible and efficient specialist, you have come to the right place.
					   In addition to my engineering experience and extensive knowledge,
					   I also have a rich sports background, which speaks to my readiness to overcome challenges and work with discipline.
					   I would be delighted if you could get in touch with me.
					</p>
					
					<div className={ s.row }>
						<div className={ s.infoAboutMe }>
							<span className={ s.desc }>FULL NAME:</span>
							<span> Zaitsev Alexander</span>
						</div>
						<div className={ s.infoAboutMe }>
							<span className={ s.desc }>AGE:</span>
							<span> 27 Years Old</span>
						</div>
						{/*<div className={ s.infoAboutMe }>*/}
						{/*	<span className={ s.desc }>EXPERIENCE:</span>*/}
						{/*	<span> .................</span>*/}
						{/*</div>*/}
						<div className={ s.infoAboutMe }>
							<span className={ s.desc }>EMAIL:</span>
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