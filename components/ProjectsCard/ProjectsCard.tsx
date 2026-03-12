"use client";

import {GithubRepo} from "@/lib/types/github";
import { ArrowSquareOutIcon, GithubLogoIcon, StarIcon } from "@phosphor-icons/react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

type Props = {
	payload: GithubRepo[];
};

export default function ProjectsCard({payload}: Props) {
	console.log(payload)
	return (
		<div className='flex flex-wrap gap-2'>
			{payload.map((repo) => (
				<div
					className='flex flex-col border rounded-lg bg-card p-4'
					key={repo.id}
				>
					<div className='flex gap-8'>
						<div>
							<p>{repo.name}</p>
						</div>
						<div className='flex gap-2'>
							<div className='min-w-8 min-h-8 p-1 bg-background flex justify-center items-center cursor-pointer border rounded-sm'>
								<GithubLogoIcon size={24} />
							</div>
							<div className='relative min-w-8 min-h-8 p-1 bg-background flex justify-center items-center cursor-pointer border rounded-sm'>
								<p className='absolute'></p>
								<StarIcon size={24} />
							</div>
						</div>
					</div>
					<div>
						<Badge variant={"default"}>{repo.language}</Badge>
					</div>
					<Button className="flex justify-center items-center" size={"lg"} variant={"default"}>
						<p className="p-0 m-0">Live Preview</p>
						<ArrowSquareOutIcon size={32} />
					</Button>
				</div>
			))}
		</div>
	);
}
