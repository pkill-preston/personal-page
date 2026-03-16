"use client";

import {GithubRepo} from "@/lib/types/github";
import { ArrowSquareOutIcon, GithubLogoIcon, StarIcon } from "@phosphor-icons/react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
	payload: GithubRepo[];
};

export default function ProjectsCard({payload}: Props) {
	return (
		<div className='w-[100%] sm:w-auto flex justify-between flex-wrap gap-4'>
			{payload.map((repo) => (
				<div
					className='w-[100%] sm:w-auto md:max-w-[22rem] lg:max-w-[32rem] flex flex-col justify-between gap-4 p-4 border-1 rounded-lg card-new transition-all duration-300'
					key={repo.id}
				>
					<div className='flex gap-8 justify-between items-center'>
						<div>
							<p>{repo.name}</p>
						</div>
						<div className='flex gap-2'>
							<div className='min-w-8 min-h-8 p-1 bg-background flex justify-center items-center cursor-pointer border rounded-sm'>
								<Link href={repo.html_url}>
									<GithubLogoIcon size={28} />
								</Link>
							</div>
							<div className='relative min-w-8 min-h-8 p-1 bg-background flex justify-center items-center border rounded-sm'>
								<p className='text-sm absolute'>{repo.stargazers_count}</p>
								<StarIcon weight='fill' className='text-yellow-500' size={28} />
							</div>
						</div>
					</div>
					<div>
						<p>{repo.description}</p>
					</div>
					<div className='flex gap-2 flex-wrap'>
						{repo.topics.map((item, index) => {
							return (
								<Badge key={index} variant={"default"}>
									{item}
								</Badge>
							);
						})}
					</div>
					<Link
						href={repo.homepage ? repo.homepage.toString() : "#"}
						target={repo.homepage ? "_blank" : undefined}
						rel={repo.homepage ? "noopener noreferrer" : undefined}
						className='block'
					>
						<Button
							className='flex justify-center items-center cursor-pointer'
							size='lg'
							variant='default'
							disabled={!repo.homepage}
						>
							<p className='p-0 m-0'>
								{repo.homepage ? "Live Preview" : "No Preview Available"}
							</p>
							<ArrowSquareOutIcon size={32} />
						</Button>
					</Link>
				</div>
			))}
		</div>
	);
}
