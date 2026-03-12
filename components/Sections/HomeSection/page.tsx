"use client"

import React from 'react'
import {Button} from "@/components/ui/button";
import {ArrowDownIcon, EnvelopeSimpleIcon} from "@phosphor-icons/react/dist/ssr";
import CodeEditor from "@/components/CodeEditor/CodeEditor";
import {scrollTo} from "@/lib/scroll";

const HomeSection = () => {
  return (
		<div className='justify-center md:justify-between min-h-[calc(100vh-72px)] gap-4 pb-[80px] px-4 flex'>
			<div className='w-full flex flex-col justify-center items-center w-[100%] lg:w-[45%] gap-4'>
				<p className='text-center text-3xl md:text-3xl'>I&#39;m</p>
				<p className='text-center text-5xl md:text-7xl font-bold '>Heron</p>
				<p className='text-center text-4xl md:text-5xl'>Web Developer</p>
				<p className='text-center text-2xl md:text-3xl'>
					Delivering maintainable,high-quality software
				</p>
				<i className='text-center italic font-bold text-2xl md:text-3xl font-serif '>
					from front to back.
				</i>
				<div className='mt-4 flex w-full justify-center gap-4'>
					<Button
						onClick={() =>
							scrollTo("#about", {
								offset: -90
							})
						}
						className='md:w-[30%] lg:w-auto w-[45%] p-6 rounded-lg bg-blue-500 text-white font-medium
transition-all duration-300
hover:-translate-y-1 hover:shadow-xl hover:bg-blue-400'
						size='lg'
					>
						<p className='text-lg text-white'>About</p>
						<ArrowDownIcon size={32} />
					</Button>
					<Button
						className='md:w-[30%] lg:w-auto w-[45%] p-6 rounded-lg border border-white/15
text-white/80
transition-all duration-300
hover:-translate-y-1 hover:bg-white/5 hover:border-white/30 '
						size='lg'
						variant={"outline"}
					>
						<p className='text-lg text-foreground'>Contact</p>
						<EnvelopeSimpleIcon />
					</Button>
				</div>
			</div>
			<div className='hidden lg:w-[55%] md:flex font-[Jetbrains_Mono] items-center'>
				<CodeEditor />
			</div>
		</div>
	);
}

export default HomeSection