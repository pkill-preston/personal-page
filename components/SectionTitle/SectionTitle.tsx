import {cn} from "@/lib/utils";

type Props = {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
};

export default function SectionTitle({children, className, style}: Props) {
	return (
		<div className={cn("relative inline-block", className)} style={style}>
			<span
				className='absolute inset-0 blur-2xl bg-primary/30 rounded-full pointer-events-none'
				aria-hidden
			/>
			<p className='relative text-4xl font-bold tracking-tight'>{children}</p>
		</div>
	);
}
