"use client"

import {useEffect, useState} from "react";
import {Button} from "../ui/button";
import {UserCheckIcon} from "@phosphor-icons/react";

export const BusinessCard = () => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [isTouch, setIsTouch] = useState(false);

	useEffect(() => {
		const media = window.matchMedia("(pointer: coarse)");
		setIsTouch(media.matches);
	}, []);

	return (
		<div className='perspective-1000 w-[100%] flex justify-center'>
			<div
				className={`relative  w-[100%] max-w-96 h-56 cursor-pointer transition-transform duration-500 transform-style-3d ${
					isFlipped ? "rotate-y-180" : ""
				}`}
				onClick={() => setIsFlipped(!isFlipped)}
				style={{
					transformStyle: "preserve-3d",
					transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
				}}
			>
				{/* Front */}
				<div
					className='absolute card-interactive bg-card overflow-hidden w-full h-full backface-hidden rounded-lg p-4 border flex flex-col items-center justify-around'
					style={{backfaceVisibility: "hidden"}}
				>
					<h1
						className='text-center text-4xl font-light tracking-[0.2em] font-serif  italic font-100 text-gray-300 uppercase'
						style={{
							textShadow:
								"2px 2px 4px rgba(255,255,255,0.8), -1px -1px 2px rgba(0,0,0,0.1)"
						}}
					>
						Heron Lorena
					</h1>
				</div>

				<div
					className='absolute card-interactive bg-card overflow-hidden w-full h-full backface-hidden rounded-lg border flex flex-col justify-around items-center p-6'
					style={{
						backfaceVisibility: "hidden",
						transform: "rotateY(180deg)"
					}}
				>
					<div className='flex flex-col items-center gap-2'>
						<p className='text-foreground text-2xl tracking-wider'>Developer</p>
					</div>
					<div className='space-y-2 text-center text-foreground text-sm'>
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
