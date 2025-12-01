import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../ProductCard';
const ProductSection = ({ title, products, showSeeMore = false }) => {
	const [startIndex, setStartIndex] = useState(0);
	const itemsPerView = 4;

	const handleNext = () => {
		if (startIndex + itemsPerView < products.length) {
			setStartIndex(startIndex + 1);
		}
	};

	const handlePrev = () => {
		if (startIndex > 0) {
			setStartIndex(startIndex - 1);
		}
	};

	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
			<div className='flex items-center justify-between mb-6'>
				<h2 className='text-2xl font-bold flex items-center gap-2'>
					{title === "Daily Deals! Best prices" && "🔥"}
					{title}
				</h2>
				<div className='flex items-center gap-2'>
					{showSeeMore && (
						<button className='px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50'>See more</button>
					)}
					<button
						onClick={handlePrev}
						disabled={startIndex === 0}
						className='p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50'
					>
						<ChevronLeft className='w-5 h-5' />
					</button>
					<button
						onClick={handleNext}
						disabled={startIndex + itemsPerView >= products.length}
						className='p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50'
					>
						<ChevronRight className='w-5 h-5' />
					</button>
				</div>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
				{products.slice(startIndex, startIndex + itemsPerView).map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default ProductSection;