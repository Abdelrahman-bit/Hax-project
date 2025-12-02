const SimilarProductCard = ({ product }) => {
	return (
		<div className='bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex-shrink-0 w-64'>
			<div className='relative mb-3'>
				<span className='absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded'>{product.discount}%</span>
				<img src={product.image} alt={product.name} className='w-full h-48 object-cover rounded-lg' />
			</div>
			<div className='mb-2'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
					alt={product.store}
					className='h-4 mb-2'
				/>
				<h3 className='text-sm text-gray-700 line-clamp-2 mb-2'>{product.name}</h3>
			</div>
			<div className='flex items-center justify-between'>
				<div>
					<p className='text-lg font-bold'>{product.price.toLocaleString()} EGP</p>
					<p className='text-sm text-gray-500 line-through'>{product.originalPrice.toLocaleString()} EGP</p>
				</div>
				<span className='text-green-600 text-sm font-medium'>-{product.discount}%</span>
			</div>
		</div>
	);
};
export default SimilarProductCard;