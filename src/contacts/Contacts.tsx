import React from 'react';
import s from './Contacts.module.scss'
import { BlockTitle } from "../common/block title/BlockTitle";
export type ContactsPropsType = {

};
export const Contacts: React.FC<ContactsPropsType> = ( props ) => {
	const {} = props
	return (
		<>
			<div className={s.contactsBlock}>
				<BlockTitle title={'Contacts'}/>
				<div className={ s.contactsContainer }>
					<div className={ s.contactForm }>
						<form>
							<label htmlFor="name">Name:</label>
							<input type="text"
							       id="name"
							       name="name"/>
							<label htmlFor="email">Email:</label>
							<input type="email"
							       id="email"
							       name="email"/>
							<label htmlFor="message">Message:</label>
							<textarea id="message"
							          name="message"></textarea>
							<button type="submit">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</>

	);
};