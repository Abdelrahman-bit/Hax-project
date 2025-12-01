import { cn } from "@/lib/utils";

export default function Section({ title, action, children, className }) {
	return (
		<section className={cn("mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8", className)}>
			{(title || action) && (
				<div className='mb-4 flex items-center justify-between'>
					{typeof title === "string" ? <h2 className='text-lg font-semibold'>{title}</h2> : title}
					{action}
				</div>
			)}
			{children}
		</section>
	);
}
