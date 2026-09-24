"use client";

import {useId} from "react";

interface DotPatternProps {
	className?: string;
	dotSize?: number;
	spacing?: number;
	opacity?: number;
}

export default function DotPattern({
	className = "",
	dotSize = 1.5,
	spacing = 24,
	opacity = 0.3,
}: DotPatternProps) {
	const id = useId();

	return (
		<div
			className={`absolute inset-0 pointer-events-none ${className}`}
			aria-hidden
		>
			<svg className='w-full h-full'>
				<defs>
					<pattern
						id={id}
						x='0'
						y='0'
						width={spacing}
						height={spacing}
						patternUnits='userSpaceOnUse'
					>
						<circle
							cx={spacing / 2}
							cy={spacing / 2}
							r={dotSize}
							fill='currentColor'
							className='text-muted-foreground'
						/>
					</pattern>
					<radialGradient id={`${id}-mask`} cx='50%' cy='50%' r='50%'>
						<stop offset='0%' stopColor='white' stopOpacity={opacity} />
						<stop offset='100%' stopColor='white' stopOpacity='0' />
					</radialGradient>
					<mask id={`${id}-fade`}>
						<rect width='100%' height='100%' fill={`url(#${id}-mask)`} />
					</mask>
				</defs>
				<rect
					width='100%'
					height='100%'
					fill={`url(#${id})`}
					mask={`url(#${id}-fade)`}
				/>
			</svg>
		</div>
	);
}
