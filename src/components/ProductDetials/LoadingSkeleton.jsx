const LoadingSkeleton = () => {
	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse'>
			<div className='h-4 bg-gray-200 rounded w-1/3 mb-6'></div>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
				<div className='h-96 bg-gray-200 rounded-lg'></div>
				<div className='space-y-4'>
					<div className='h-8 bg-gray-200 rounded w-3/4'></div>
					<div className='h-6 bg-gray-200 rounded w-1/4'></div>
					<div className='h-10 bg-gray-200 rounded w-1/2'></div>
				</div>
			</div>
		</div>
	);
};
export default LoadingSkeleton;