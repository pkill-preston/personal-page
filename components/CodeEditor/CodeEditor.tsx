"use client";

import {useTranslations} from "next-intl";

const CodeEditor = () => {
	const t = useTranslations("developer");

	const frontend = t.raw("frontendItems") as string[];
	const backend = t.raw("backendItems") as string[];
	const databases = t.raw("databasesItems") as string[];
	const tools = t.raw("toolsItems") as string[];
	const softSkills = t.raw("softSkillsItems") as string[];

	const codeLines = [
		{
			num: 1,
			content:
				'<span class="text-purple-600 dark:text-pink-400">export</span> <span class="text-purple-600 dark:text-pink-400">class</span> <span class="text-cyan-600 dark:text-green-400">Developer</span> <span class="text-blue-500 dark:text-yellow-400">‎ {</span>',
			indent: 0
		},
		{
			num: 2,
			content: `<span class="text-cyan-600 dark:text-green-300">name</span><span class="text-foreground"> = </span> <span class="text-orange-700 dark:text-red-400">"${t("name")}"</span><span class="text-foreground">;</span>`,
			indent: 1
		},
		{
			num: 3,
			content: `<span class="text-cyan-600 dark:text-green-300">role</span><span class="text-foreground"> = </span> <span class="text-orange-700 dark:text-red-400">"${t("role")}"</span><span class="text-foreground">;</span>`,
			indent: 1
		},
		{
			num: 4,
			content: `<span class="text-cyan-600 dark:text-green-300">location</span><span class="text-foreground"> = </span> <span class="text-orange-700 dark:text-red-400">"${t("location")}"</span><span class="text-foreground">;</span>`,
			indent: 1
		},
		{
			num: 5,
			content: `<span class="text-cyan-600 dark:text-green-300">experience</span><span class="text-foreground"> = </span> <span class="text-orange-700 dark:text-red-400">"${t("experience")}"</span><span class="text-foreground">;</span>`,
			indent: 1
		},
		{
			num: 6,
			content: `<span class="text-cyan-600 dark:text-green-300">availability</span><span class="text-foreground"> = </span> <span class="text-orange-700 dark:text-red-400">"${t("availability")}"</span><span class="text-foreground">;</span>`,
			indent: 1
		},
		{num: 7, content: "", indent: 0},
		{
			num: 8,
			content:
				'<span class="text-cyan-600 dark:text-green-300">techStack</span><span class="text-foreground"> = </span> <span class="text-blue-500 dark:text-yellow-400">{</span>',
			indent: 1
		},
		{
			num: 9,
			content: `<span class="text-cyan-600 dark:text-green-300">frontend</span><span class="text-foreground">: </span><span class="text-blue-500 dark:text-yellow-400">[</span><span class="text-orange-700 dark:text-red-400">"${frontend.join('", "')}"</span><span class="text-blue-500 dark:text-yellow-400">]</span><span class="text-foreground">,</span>`,
			indent: 2
		},
		{
			num: 10,
			content: `<span class="text-cyan-600 dark:text-green-300">backend</span><span class="text-foreground">: </span><span class="text-blue-500 dark:text-yellow-400">[</span><span class="text-orange-700 dark:text-red-400">"${backend.join('", "')}"</span><span class="text-blue-500 dark:text-yellow-400">]</span><span class="text-foreground">,</span>`,
			indent: 2
		},
		{
			num: 11,
			content: `<span class="text-cyan-600 dark:text-green-300">databases</span><span class="text-foreground">: </span><span class="text-blue-500 dark:text-yellow-400">[</span><span class="text-orange-700 dark:text-red-400">"${databases.join('", "')}"</span><span class="text-blue-500 dark:text-yellow-400">]</span><span class="text-foreground">,</span>`,
			indent: 2
		},
		{
			num: 12,
			content: `<span class="text-cyan-600 dark:text-green-300">tools</span><span class="text-foreground">: </span><span class="text-blue-500 dark:text-yellow-400">[</span><span class="text-orange-700 dark:text-red-400">"${tools.join('", "')}"</span><span class="text-blue-500 dark:text-yellow-400">]</span>`,
			indent: 2
		},
		{
			num: 13,
			content:
				"<span class='text-blue-500 dark:text-yellow-400'>}</span><span class='text-foreground'>;</span>",
			indent: 1
		},
		{num: 14, content: "", indent: 0},
		{
			num: 15,
			content: `<span class="text-cyan-600 dark:text-green-300">softSkills</span><span class="text-foreground"> = </span><span class="text-blue-500 dark:text-yellow-400">[</span><span class="text-orange-700 dark:text-red-400">"${softSkills.join('", "')}"</span><span class="text-blue-500 dark:text-yellow-400">]</span><span class="text-foreground">;</span>`,
			indent: 1
		},
		{num: 16, content: "", indent: 0},
		{
			num: 17,
			content: "<span class='text-blue-500 dark:text-yellow-400'>}</span>",
			indent: 0
		}
	];

	return (
		<div className='hidden lg:block w-full animate-float'>
			<div className='card overflow-hidden shadow-xl'>
				<div className='flex items-center justify-between px-4 py-3 border-b'>
					<div className='flex gap-2'>
						<div className='w-3 h-3 rounded-full bg-red-500'></div>
						<div className='w-3 h-3 rounded-full bg-yellow-500'></div>
						<div className='w-3 h-3 rounded-full bg-green-500'></div>
					</div>
					<div className='flex items-center gap-2 text-sm'>
						<div className='w-2 h-2 rounded-full bg-green-600'></div>
						<span className='text-muted-foreground'>developer.ts</span>
					</div>
					<div className='w-16'></div>
				</div>

				<div className='p-6 font-mono text-sm'>
					{codeLines.map((line) => (
						<div
							key={line.num}
							className='flex hover:bg-muted/50 transition-colors rounded'
						>
							<span className='text-muted-foreground select-none w-12 text-right pr-6'>
								{line.num}
							</span>
							<div
								className='flex-1'
								style={{paddingLeft: `${line.indent * 20}px`}}
								dangerouslySetInnerHTML={{__html: line.content || "&nbsp;"}}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CodeEditor;
