"use client";

const CodeEditor = () => {
	const codeLines = [
		{
			num: 1,
			content:
				'<span class="token-keyword ">export</span> <span class="token-keyword">class</span> <span class="text-cyan-300">Developer</span> <span class="token-brace">‎ {</span>',
			indent: 0
		},
		{
			num: 2,
			content:
				'<span class="token-property">name</span><span class="token-equals"> = </span> <span class="token-string">"Heron"</span><span class="text-foreground">;</span>',
			indent: 1
		},
		{
			num: 3,
			content:
				'<span class="token-property">role</span><span class="token-equals"> = </span> <span class="token-string">"Full-Stack Developer"</span><span class="text-foreground">;</span>',
			indent: 1
		},
		{
			num: 4,
			content:
				'<span class="token-property">location</span><span class="token-equals"> = </span> <span class="token-string">"Brazil"</span><span class="text-foreground">;</span>',
			indent: 1
		},
		{
			num: 5,
			content:
				'<span class="token-property">experience</span><span class="token-equals"> = </span> <span class="token-string">"2+ years"</span><span class="text-foreground">;</span>',
			indent: 1
		},
		{
			num: 6,
			content:
				'<span class="token-property">availability</span><span class="token-equals"> = </span> <span class="token-string">"Open to opportunities"</span><span class="text-foreground">;</span>',
			indent: 1
		},
		{num: 7, content: "", indent: 0},
		{
			num: 8,
			content:
				'<span class="token-property">techStack</span><span class="token-equals"> = </span> <span class="token-brace">{</span>',
			indent: 1
		},
		{
			num: 9,
			content:
				'<span class="token-property">frontend</span><span class="text-foreground">:‎ ‎ <spa/ <span class="token-brace">[</span><span class="token-string">"Vue"</span><span class="text-foreground">,</span> <span class="token-string">"Angular"</span><span class="text-foreground">,</span>  <span class="token-string"><span class="token-string">"React"</span><span class="text-foreground">,</span> <span class="token-string">"TypeScript"</span><span class="text-foreground">,</span> <span class="token-string">"TailwindCSS"</span><span class="token-brace">]</span><span class="text-foreground">,</span>',
			indent: 2
		},
		{
			num: 10,
			content:
				'<span class="token-property">backend</span><span class="text-foreground">:‎ ‎ <spa/ <span class="token-brace">[</span><span class="token-string">"Node.js"</span><span class="text-foreground">,</span> <span class="token-string">"Express"</span><span class="token-brace">]</span><span class="text-foreground">,</span>',
			indent: 2
		},
		{
			num: 11,
			content:
				'<span class="token-property">databases</span><span class="text-foreground">:‎ ‎ </span><span class="token-brace">[</span><span class="token-string">"PostgreSQL"</span><span class="text-foreground">,</span> <span class="token-string">"MongoDB"</span><span class="token-brace">]</span><span class="text-foreground">,</span>',
			indent: 2
		},
		{
			num: 12,
			content:
				'<span class="token-property">tools</span><span class="text-foreground">:‎ ‎ </span> <span class="token-brace">[</span><span class="token-string">"Git"</span><span class="text-foreground">,</span> <span class="token-string">"Docker"</span><span class="text-foreground">,</span> <span class="token-string">"Linux"</span><span class="token-brace">]</span>',
			indent: 2
		},
		{
			num: 13,
			content:
				"<span class='token-brace'>}</span><span class='text-foreground'>;</span>",
			indent: 1
		},
		{num: 14, content: "", indent: 0},
		{
			num: 15,
			content:
				'<span class="token-property">softSkills</span><span class="token-equals"> = </span><span class="token-brace">[</span><span class="token-string">"Problem solving"</span><span class="text-foreground">, </span><span class="token-string">"Clear communication"</span><span class="text-foreground">, </span><span class="token-string">"Adaptability"</span><span class="token-brace">]</span><span class="text-foreground">;</span>',
			indent: 1
		},
		{num: 16, content: "", indent: 0},
		{
			num: 17,
			content: "<span class='token-brace'>}</span>",
			indent: 0
		}
	];

	return (
		<div
			className={`font-jet overflow-hidden w-0 lg:w-full hidden lg:flex w-0 max-w-[100%] rounded-t-lg`}
		>
			<div className='dark:bg-zinc-900 card-interactive border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-xl overflow-hidden bg-white'>
				<div className='flex items-center justify-between px-4 overflow-hidden py-3 border-b border-gray-600'>
					<div className='flex space-x-2'>
						<div className='w-3 h-3 rounded-full bg-red-500'></div>
						<div className='w-3 h-3 rounded-full bg-yellow-500'></div>
						<div className='w-3 h-3 rounded-full bg-green-500'></div>
					</div>
					<div className='flex-1 flex justify-center'>
						<div className='flex items-center space-x-2 text-gray-300 text-sm'>
							<div className='w-2 h-2 rounded-full bg-green-600'></div>
							<span className='text-foreground'>developer.ts</span>
						</div>
					</div>
					<div className='w-16'></div>
				</div>

				<div className='bg-card p-6'>
					<div className='font-mono text-sm'>
						{codeLines.map((line) => (
							<div
								key={line.num}
								className='flex hover:bg-gray-100 transition-colors'
							>
								<span className='text-gray-600 select-none w-12 text-right pr-6'>
									{line.num}
								</span>
								<div
									className='flex-1 text-gray-200'
									style={{paddingLeft: `${line.indent * 20}px`}}
									dangerouslySetInnerHTML={{__html: line.content || "&nbsp;"}}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CodeEditor;
