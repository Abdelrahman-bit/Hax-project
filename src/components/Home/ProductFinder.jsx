import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { mockData } from '@/data/mocking';

const ProductFinder = () => {
	const [searchUrl, setSearchUrl] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!searchUrl) return;

		setLoading(true);
		setError(null);

		try {
			// TODO: use the correct key for the token in localStorage
			const token = localStorage.getItem('token');
			const response = await fetch('https://price-tracker-app-two.vercel.app/api/v1/amazon/get-product', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `hamada ${token}`,
				},
				body: JSON.stringify({ url: searchUrl }),
			});

			const data = await response.json();

			if (response.ok && data.result && data.result.product) {
				navigate(`/product/${data.result.product.id}`);
			} else {
				setError(data.message || 'Product not found or not tracked yet.');
			}
		} catch (err) {
			setError('An unexpected error occurred. Please try again.');
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='bg-linear-to-r from-blue-500 to-blue-600 py-12 md:py-16'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col md:flex-row items-center justify-between gap-8'>
					<div className='flex-1 w-full'>
						<h1 className='text-white text-3xl md:text-4xl font-bold mb-6'>Product Finder</h1>
						<form onSubmit={handleSubmit} className='relative mb-4'>
							<input
								type='text'
								value={searchUrl}
								onChange={(e) => setSearchUrl(e.target.value)}
								placeholder='Paste the product URL to start tracking'
								className='w-full px-4 py-3 rounded-lg pr-12 bg-gray-200'
								disabled={loading}
							/>
							<button type='submit' className='absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-900 text-white p-2 rounded-lg' disabled={loading}>
								<Search className='w-5 h-5 ' />
							</button>
						</form>
						{loading && <p className='text-white'>Searching...</p>}
						{error && <p className='text-red-300'>{error}</p>}
						<div className='flex flex-wrap gap-2'>
							{mockData.quickLinks.map((link, index) => (
								<button
									key={index}
									className='px-4 py-1.5 bg-white/20 text-white rounded-full text-sm hover:bg-white/30'
								>
									{link}
								</button>
							))}
						</div>
					</div>
					<div className='hidden md:block'>
						<ShoppingBag className='w-48 h-48 text-white/20' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductFinder;