"use client";

import {GithubRepo} from "@/lib/types/github";
import {
	ArrowSquareOutIcon,
	GithubLogoIcon,
	StarIcon,
	ForkKnifeIcon,
	ClockIcon,
} from "@phosphor-icons/react";
import {Badge} from "../ui/badge";
import {Button} from "../ui/button";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {useInView} from "@/lib/hooks/useInView";
import {cn} from "@/lib/utils";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

type Props = {
	payload: GithubRepo[];
};

const languageColors: Record<string, string> = {
	JavaScript: "bg-yellow-400",
	TypeScript: "bg-blue-500",
	Python: "bg-green-500",
	HTML: "bg-orange-500",
	CSS: "bg-purple-500",
	Vue: "bg-emerald-400",
	React: "bg-cyan-400",
	Shell: "bg-gray-400",
	Dockerfile: "bg-sky-400",
	Rust: "bg-orange-600",
	Go: "bg-cyan-600",
	Ruby: "bg-red-500",
	Java: "bg-red-600",
	"Jupyter Notebook": "bg-orange-400",
};

function timeAgo(dateStr: string): string {
	const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
	if (seconds < 60) return "just now";
	const minutes = Math.floor(seconds / 60);
	if (minutes < 60) return `${minutes}m ago`;
	const hours = Math.floor(minutes / 60);
	if (hours < 24) return `${hours}h ago`;
	const days = Math.floor(hours / 24);
	if (days < 30) return `${days}d ago`;
	const months = Math.floor(days / 30);
	if (months < 12) return `${months}mo ago`;
	return `${Math.floor(months / 12)}y ago`;
}

export default function ProjectsCard({payload}: Props) {
	const t = useTranslations("projects");
	const {ref, isInView} = useInView(undefined, "projects-grid");

	return (
		<>
			<SectionTitle className='anim-fade-up is-visible'>
				{t("title")}
			</SectionTitle>
			<div
				ref={ref}
				className={cn(
					"w-full grid grid-cols-1 md:grid-cols-2 gap-4 stagger-grid",
					isInView && "is-visible"
				)}
			>
				{payload.map((repo) => (
					<div
						className='card-hover flex flex-col gap-4 p-5'
						key={repo.id}
					>
						<div className='flex items-start justify-between gap-3'>
							<div className='flex flex-col gap-1 min-w-0'>
								<p className='font-semibold text-lg truncate'>{repo.name}</p>
								<div className='flex items-center gap-3 text-xs text-muted-foreground'>
									{repo.language && (
										<span className='flex items-center gap-1.5'>
											<span
												className={cn(
													"w-2.5 h-2.5 rounded-full",
													languageColors[repo.language] ?? "bg-gray-400"
												)}
											/>
											{repo.language}
										</span>
									)}
									<span className='flex items-center gap-1'>
										<ClockIcon size={12} />
										{timeAgo(repo.pushed_at)}
									</span>
								</div>
							</div>
							<div className='flex gap-1.5 shrink-0'>
								<div className='flex items-center gap-1 border rounded-md px-2 py-1 text-xs text-muted-foreground'>
									<StarIcon weight='fill' className='text-yellow-500' size={14} />
									<span>{repo.stargazers_count}</span>
								</div>
								<div className='flex items-center gap-1 border rounded-md px-2 py-1 text-xs text-muted-foreground'>
									<ForkKnifeIcon size={14} />
									<span>{repo.forks_count}</span>
								</div>
								<Link
									href={repo.html_url}
									target='_blank'
									rel='noopener noreferrer'
									className='border rounded-md p-1.5 hover:bg-muted transition-colors btn-press'
								>
									<GithubLogoIcon size={16} />
								</Link>
							</div>
						</div>

						{repo.description && (
							<p className='text-sm text-muted-foreground line-clamp-2'>
								{repo.description}
							</p>
						)}

						{repo.topics.length > 0 && (
							<div className='flex gap-1.5 flex-wrap'>
								{repo.topics.map((item, index) => (
									<Badge key={index} variant='secondary' className='text-xs'>
										{item}
									</Badge>
								))}
							</div>
						)}

						<div className='mt-auto pt-2'>
							{repo.homepage ? (
								<Link
									href={repo.homepage}
									target='_blank'
									rel='noopener noreferrer'
									className='block'
								>
									<Button
										className='w-full btn-press'
										size='lg'
										variant='default'
									>
										{t("livePreview")}
										<ArrowSquareOutIcon size={16} />
									</Button>
								</Link>
							) : (
								<Button
									className='w-full'
									size='lg'
									variant='outline'
									disabled
								>
									{t("noPreview")}
								</Button>
							)}
						</div>
					</div>
				))}
			</div>
		</>
	);
}
