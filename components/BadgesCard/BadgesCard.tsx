"use client"

import {HammerIcon, PaintBrushBroadIcon} from "@phosphor-icons/react";
import {Badge} from "../ui/badge";

type IconType = "tools" | "frontEnd";

type Props = {
	title: string;
	items: string[];
	icon: IconType;
};

const BadgesCard = ({items, icon, title}: Props) => {
	const icons = {
		tools: HammerIcon,
		frontEnd: PaintBrushBroadIcon
	};

	const Icon = icons[icon];

	return (
		<div className='card-interactive overflow-hidden flex gap-2 flex-col bg-card border-1 rounded-lg card-new transition-all duration-300 sm:w-[calc(25%-8px)] md:w-[calc(20%-8px)] lg:w-[calc(17.5%-8px)] xl:w-[calc(15%-8px)] w-[100%] p-4 transition-all duration-300'>
			<div className='flex gap-2 items-center'>
				<Icon size={32} />
				<p className='text-center font-bold'>{title}</p>
			</div>
			<div className='flex flex-wrap gap-2'>
				{items.map((element: string, index: number) => {
					return <Badge key={index}>{element}</Badge>;
				})}
			</div>
		</div>
	);
};

export default BadgesCard;
