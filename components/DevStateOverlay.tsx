"use client";

import {getInViewState, useInViewStore} from "@/lib/hooks/useInViewStore";
import {cn} from "@/lib/utils";

export function DevStateOverlay() {
	const state = useInViewStore();
	const entries = Object.entries(state);
	const triggered = entries.filter(([, v]) => v).length;

	return (
		<div className='pointer-events-none fixed bottom-4 right-4 z-[100] w-56 select-none rounded-lg border bg-background/90 p-3 font-mono text-[11px] shadow-lg ring-1 ring-foreground/10 backdrop-blur'>
			<div className='mb-2 flex items-center justify-between text-muted-foreground'>
				<span>inView state</span>
				<span>
					{triggered}/{entries.length}
				</span>
			</div>
			<div className='flex flex-col gap-1'>
				{entries.length === 0 ? (
					<p className='text-muted-foreground italic'>no observers yet</p>
				) : (
					entries.map(([key, value]) => (
						<div key={key} className='flex items-center gap-2'>
							<span
								className={cn(
									"h-2 w-2 shrink-0 rounded-full",
									value ? "bg-green-500" : "bg-muted-foreground/30"
								)}
							/>
							<span className={cn("truncate", value && "text-green-600 dark:text-green-400")}>
								{key}
							</span>
						</div>
					))
				)}
			</div>
			<button
				type='button'
				className='pointer-events-auto mt-2 w-full rounded border px-2 py-1 text-muted-foreground transition-colors hover:bg-muted'
				onClick={() => console.log(getInViewState())}
			>
				log store
			</button>
		</div>
	);
}