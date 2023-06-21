import React, { FC, ReactNode, useEffect, useState } from 'react'
import s from './Animation.module.css'
import 'animate.css'
import { useInView } from 'react-intersection-observer'

type AnimationType = {
	children: ReactNode
	animation:
		| 'animate__fadeIn'
		| 'animate__fadeInUp'
		| 'animate__fadeInLeft'
		| 'animate__fadeInRight'
		| 'animate__zoomIn'
	threshold: number
	className?: string
}

export const Animation: FC<AnimationType> = ({ children, animation, threshold, className }) => {
	const [active, setActive] = useState(false)
	
	const { ref, inView } = useInView({
		threshold: threshold,
	})
	
	useEffect(() => {
		if (inView) {
			setActive(true)
		}
	}, [inView])
	
	return (
		<div ref={ref} className={`${active ? `animate__animated ${animation} ${className}` : s.opacity}`}>
			{children}
		</div>
	)
}