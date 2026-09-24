"use client"

import {
	PaintBrushBroadIcon,
	HammerIcon,
	ArrowsOutCardinalIcon,
	GitBranchIcon,
	DesktopIcon,
	GearIcon,
	LightningIcon,
	LayoutIcon,
	PuzzlePieceIcon,
	GlobeIcon,
} from "@phosphor-icons/react";
import type {IconProps} from "@phosphor-icons/react";
import type {ComponentType} from "react";

type IconType = "tools" | "frontEnd";

type Props = {
	title: string;
	items: string[];
	icon: IconType;
};

const iconMap: Record<string, ComponentType<IconProps>> = {
	"UI Libraries": LayoutIcon,
	"SSR": GlobeIcon,
	"Tailwind": PaintBrushBroadIcon,
	"Design System": PuzzlePieceIcon,
	"Linux": DesktopIcon,
	"Scrum": ArrowsOutCardinalIcon,
	"Git": GitBranchIcon,
	"Agile": LightningIcon,
};

const BadgesCard = ({items, icon, title}: Props) => {
	const icons = {
		tools: HammerIcon,
		frontEnd: PaintBrushBroadIcon
	};

	const Icon = icons[icon];

	return (
		<div className='card p-6 flex flex-col gap-4'>
			<div className='flex items-center gap-3 pb-3 border-b'>
				<div className='p-2 rounded-lg bg-primary/10 text-primary'>
					<Icon size={20} />
				</div>
				<p className='text-lg font-semibold'>{title}</p>
			</div>
			<div className='grid grid-cols-2 gap-2'>
				{items.map((item, index) => {
					const ItemIcon = iconMap[item] ?? GearIcon;
					return (
						<div
							key={index}
							className='flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200 group'
						>
							<ItemIcon
								size={16}
								className='text-muted-foreground group-hover:text-primary transition-colors duration-200 shrink-0'
							/>
							<span className='text-sm font-medium truncate'>{item}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BadgesCard;
