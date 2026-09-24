"use client"

import {useState} from "react";

export const BusinessCard = () => {
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<div className='perspective-1000 w-full max-w-md flex justify-center'>
			<div
				className={`relative w-full h-56 cursor-pointer transition-transform duration-500 ${
					isFlipped ? "[transform:rotateY(180deg)]" : ""
				}`}
				onClick={() => setIsFlipped(!isFlipped)}
				style={{transformStyle: "preserve-3d"}}
			>
				{/* Front */}
				<div
					className='absolute card p-6 overflow-hidden w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center'
					style={{backfaceVisibility: "hidden"}}
				>
					<h1 className='text-center text-3xl font-light tracking-[0.15em] font-serif italic text-muted-foreground uppercase'>
						Heron Lorena
					</h1>
				</div>

				{/* Back */}
				<div
					className='absolute card p-6 overflow-hidden w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center items-center gap-4'
					style={{backfaceVisibility: "hidden"}}
				>
					<div className='flex flex-col items-center gap-1'>
						<p className='text-foreground text-xl font-medium tracking-wider'>Developer</p>
					</div>
					<div className='flex flex-col items-center gap-1 text-sm text-muted-foreground'>
						<p>heron.lorena@protonmail.com</p>
						<p>📍 São Paulo, Brazil</p>
						<p>+55 (12) 99664-7366</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BusinessCard;
