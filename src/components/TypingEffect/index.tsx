import React, { useEffect, useRef, FC } from 'react';
import Typed from 'typed.js';

const TypingEffect: FC = () => {
	const typedRef = useRef(null);
	useEffect(() => {
		const options = {
			strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer', 'Photographer'],
			typeSpeed: 100,
			backSpeed: 50,
			loop: true,
		};

		const typed = new Typed(typedRef.current, options);

		return () => {
			typed.destroy();
		};
	}, []);

	return <span ref={typedRef} className='typing'></span>;
};

export default TypingEffect;
