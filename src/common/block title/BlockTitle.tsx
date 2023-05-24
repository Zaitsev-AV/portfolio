import React from 'react';
import s from './BlockTitle.module.scss'

export type BlockTitlePropsType = {
	title: string
	id?: string
};
export const BlockTitle: React.FC<BlockTitlePropsType> = ( props ) => {
	const { title, id } = props
	return (
		<div className={s.row} id={id}>
			<div className={ s.wrapper }>
				<div className={ s.text_center }>
					<h2 className={ s.title }>{ title }</h2>
				</div>
			</div>
		</div>

	)
};