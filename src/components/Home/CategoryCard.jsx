const CategoryCard = ({ category }) => {
	return (
		<div className='bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer text-center'>
			<div className='w-20 h-20 mx-auto mb-3 rounded-full bg-white flex items-center justify-center overflow-hidden'>
				<img src={category.image} alt={category.name} className='w-full h-full object-cover' />
			</div>
			<h3 className='font-medium text-gray-900'>{category.name}</h3>
		</div>
	);
};
export default CategoryCard;