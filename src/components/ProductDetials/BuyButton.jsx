import { ShoppingCart } from "lucide-react";

const BuyButton = ({ seller, link, price, currency }) => {
	return (
		<div className='mt-6'>
			<div className='flex items-center gap-4 p-4 bg-gray-50 rounded-lg mb-3'>
				<img src={seller.logo} alt={seller.name} className='h-8' />
				<span className='text-sm text-gray-600'>{seller.name}</span>
			</div>
			<a
				href={link}
				target='_blank'
				rel='noopener noreferrer'
				className='w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors'
			>
				<ShoppingCart className='w-5 h-5' />
				Buy Now
			</a>
		</div>
	);
};
export default BuyButton;
