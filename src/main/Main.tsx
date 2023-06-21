import React from 'react';
import s from './Main.module.scss'
import ReactTypingEffect from 'react-typing-effect'
import { Header } from "../header/Header";
import { About } from "../aboutMe/About";
import { Link } from "react-scroll";
import { Animation } from "../common/animation/Animation";


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
				<Animation animation={"animate__fadeInLeft"} threshold={0.4}>
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
						      duration={1200} className={s.btn}>Learn more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#d9d6d6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 20l6-6m-6 6l-6-6m6 6V9.5M12 4v2.5"/></svg></Link>
					</div>
				</Animation>
			</div>
			<About/>
		</div>
	);
};