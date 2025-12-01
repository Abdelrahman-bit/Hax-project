import { mockData } from "@/data/mocking";
import CategoryCard from "./CategoryCard";
const TopCategories = () => {
	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
			<h2 className='text-2xl font-bold mb-6'>Top Categories</h2>
			<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4'>
				{mockData.categories.map((category) => (
					<CategoryCard key={category.id} category={category} />
				))}
			</div>
		</div>
	);
};

export default TopCategories;
