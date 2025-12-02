import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import SimilarProductCard from "../similarProducts";

const SimilarProductsSection = ({ products }) => {
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
		<div className='mt-12'>
			<div className='flex items-center justify-between mb-6'>
				<h2 className='text-2xl font-bold'>Similar Products</h2>
				<div className='flex gap-2'>
					<button
						onClick={handlePrev}
						disabled={startIndex === 0}
						className='p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
						aria-label='Previous products'
					>
						<ChevronLeft className='w-5 h-5' />
					</button>
					<button
						onClick={handleNext}
						disabled={startIndex + itemsPerView >= products.length}
						className='p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
						aria-label='Next products'
					>
						<ChevronRight className='w-5 h-5' />
					</button>
				</div>
			</div>

			{/* Desktop Grid View */}
			<div className='hidden lg:grid grid-cols-4 gap-4'>
				{products.slice(startIndex, startIndex + itemsPerView).map((product) => (
					<SimilarProductCard key={product.id} product={product} />
				))}
			</div>

			{/* Mobile Scroll View */}
			<div className='lg:hidden overflow-x-auto'>
				<div className='flex gap-4 pb-4'>
					{products.map((product) => (
						<SimilarProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
};
export default SimilarProductsSection;