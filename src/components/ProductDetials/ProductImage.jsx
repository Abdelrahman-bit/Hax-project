import { Share2 } from "lucide-react";

const ProductImage = ({ src, alt, onShare }) => {
	return (
		<div className='relative bg-white rounded-lg p-8 shadow-sm'>
			<button
				onClick={onShare}
				className='absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors'
				aria-label='Share product'
			>
				<Share2 className='w-5 h-5 text-gray-600' />
			</button>
			<img src={src} alt={alt} className='w-full h-auto object-contain max-h-96' />
		</div>
	);
};
export default ProductImage;