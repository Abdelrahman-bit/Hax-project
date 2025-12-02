const PriceStatistics = ({ lowestPrice, highestPrice, recentDrop, currency }) => {
	return (
		<div className='grid grid-cols-3 gap-4 mt-6'>
			<div className='text-center p-4 bg-gray-50 rounded-lg'>
				<p className='text-sm text-gray-600 mb-1'>Lowest Price</p>
				<p className='text-lg font-bold text-green-600'>{lowestPrice.toLocaleString()}</p>
			</div>
			<div className='text-center p-4 bg-gray-50 rounded-lg'>
				<p className='text-sm text-gray-600 mb-1'>Highest Price</p>
				<p className='text-lg font-bold text-red-600'>{highestPrice.toLocaleString()}</p>
			</div>
			<div className='text-center p-4 bg-gray-50 rounded-lg'>
				<p className='text-sm text-gray-600 mb-1'>Recent Price Drop</p>
				<p className='text-lg font-bold text-blue-600'>{recentDrop.toLocaleString()}</p>
			</div>
		</div>
	);
};
export default PriceStatistics;