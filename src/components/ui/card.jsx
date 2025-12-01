import { cn } from "@/lib/utils";

export function Card({ className, children }) {
	return <div className={cn("rounded-xl border border-border bg-card shadow-sm", className)}>{children}</div>;
}

export function CardMedia({ src, alt, className }) {
	return (
		<div className={cn("aspect-4/3 w-full overflow-hidden rounded-t-xl bg-muted", className)}>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img src={src} alt={alt} className='h-full w-full object-cover' />
		</div>
	);
}

export function CardContent({ className, children }) {
	return <div className={cn("p-3", className)}>{children}</div>;
}
