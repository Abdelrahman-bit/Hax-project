const PriceChart = ({ data, currency }) => {
	if (!data || data.length === 0) return null;

	const maxPrice = Math.max(...data.map((d) => d.price));
	const minPrice = Math.min(...data.map((d) => d.price));
	const priceRange = maxPrice - minPrice;
	const chartHeight = 200;
	const chartWidth = 100;

	const points = data
		.map((point, index) => {
			const x = (index / (data.length - 1)) * chartWidth;
			const y = chartHeight - ((point.price - minPrice) / priceRange) * chartHeight;
			return `${x},${y}`;
		})
		.join(" ");

	return (
		<div className='mt-8'>
			<h3 className='font-bold text-lg mb-4'>Price History</h3>
			<div className='bg-white p-6 rounded-lg shadow-sm'>
				<svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className='w-full h-48' preserveAspectRatio='none'>
					{/* Grid lines */}
					<line x1='0' y1='0' x2={chartWidth} y2='0' stroke='#e5e7eb' strokeWidth='0.5' />
					<line x1='0' y1={chartHeight / 2} x2={chartWidth} y2={chartHeight / 2} stroke='#e5e7eb' strokeWidth='0.5' />
					<line x1='0' y1={chartHeight} x2={chartWidth} y2={chartHeight} stroke='#e5e7eb' strokeWidth='0.5' />

					{/* Price line */}
					<polyline points={points} fill='none' stroke='#10b981' strokeWidth='1' strokeLinejoin='round' />

					{/* Area under line */}
					<polygon
						points={`0,${chartHeight} ${points} ${chartWidth},${chartHeight}`}
						fill='url(#gradient)'
						opacity='0.3'
					/>

					{/* Gradient definition */}
					<defs>
						<linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
							<stop offset='0%' stopColor='#10b981' stopOpacity='0.8' />
							<stop offset='100%' stopColor='#10b981' stopOpacity='0' />
						</linearGradient>
					</defs>

					{/* Data points */}
					{data.map((point, index) => {
						const x = (index / (data.length - 1)) * chartWidth;
						const y = chartHeight - ((point.price - minPrice) / priceRange) * chartHeight;
						return <circle key={index} cx={x} cy={y} r='1.5' fill='#10b981' />;
					})}
				</svg>

				{/* X-axis labels */}
				<div className='flex justify-between mt-2 text-xs text-gray-500'>
					{data.map((point, index) => (
						<span key={index}>{point.month}</span>
					))}
				</div>
			</div>
		</div>
	);
};
export default PriceChart;