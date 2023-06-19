import React from 'react';
import s from './Main.module.scss'
import ReactTypingEffect from 'react-typing-effect'
import { Header } from "../header/Header";
import { About } from "../aboutMe/About";
import { Link } from "react-scroll";


export const Main: React.FC = () => {
	
	return (
		<div className={ s.mainBlock }
		     id={ 'Home' }>
			
			<Header/>
			<div className={ s.main_container }>
				<div className={s.elements}>
				<span className={ s.el_1 }></span>
				<span className={ s.el_2 }></span>
				<span className={ s.el_3 }></span>
				<span className={ s.el_4 }></span>
				</div>
				<div>
					<div className={ s.content }>
						<ReactTypingEffect className={s.typing}
							staticText={ "I'm" }
						                   text={ [ 'developer', 'Frontend Developer' ] }
						                   speed={ 100 }
						                   typingDelay={ 1000 }/>
					</div>
					<div className={ s.info_name }>
						<h2>Alexander Zaitsev</h2>
					</div>
					<div className={s.btn_wrapper}>
						<Link to='section1' spy={true}
						      smooth={true}
						      offset={-80}
						      duration={1200} className={s.btn}>Learn more</Link>
					</div>
				</div>
			</div>
			<About/>
		</div>
	);
};