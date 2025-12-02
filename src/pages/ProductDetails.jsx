import React, { useEffect, useState } from 'react';
import ProductImage from '@/components/ProductDetials/ProductImage';
import Breadcrumb from '@/components/BreadCrumbs';
import LoadingSkeleton from '@/components/ProductDetials/LoadingSkeleton';
import ProductService from '@/services/ProductService';
import SimilarProductsSection from '@/components/ProductDetials/sections/SimilarProductsSection';
import PriceStatusBadge from '@/components/ProductDetials/PriceStatusBadge';
import PriceStatistics from '@/components/ProductDetials/PriceStatistics';
import BuyButton from '@/components/ProductDetials/BuyButton';
import PriceChart from '@/components/ProductDetials/PriceChart';
const ProductDetailPage = ({ productId = 1 }) => {
	const [product, setProduct] = useState(null);
	const [similarProducts, setSimilarProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				setError(null);

				// Fetch product details and similar products
				const [productData, similarData] = await Promise.all([
					ProductService.getProductById(productId),
					ProductService.getSimilarProducts(productId),
				]);

				setProduct(productData);
				setSimilarProducts(similarData);
			} catch (err) {
				setError(err.message);
				console.error("Error fetching product data:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [productId]);

	const handleShare = () => {
		if (navigator.share) {
			navigator
				.share({
					title: product.name,
					text: `Check out this product: ${product.name}`,
					url: window.location.href,
				})
				.catch((err) => console.log("Error sharing:", err));
		} else {
			// Fallback for browsers that don't support Web Share API
			navigator.clipboard.writeText(window.location.href);
			alert("Link copied to clipboard!");
		}
	};

	if (loading) {
		return <LoadingSkeleton />;
	}

	if (error) {
		return (
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
				<div className='text-center text-red-600'>
					<p>Error loading product: {error}</p>
					<button
						onClick={() => window.location.reload()}
						className='mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
					>
						Retry
					</button>
				</div>
			</div>
		);
	}

	if (!product) {
		return (
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
				<div className='text-center text-gray-600'>
					<p>Product not found</p>
				</div>
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
				<Breadcrumb items={product.breadcrumb} />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					{/* Product Image */}
					<ProductImage src={product.image} alt={product.name} onShare={handleShare} />

					{/* Product Details */}
					<div>
						<h1 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-4'>{product.name}</h1>

						<div className='flex items-center gap-3 mb-4'>
							<span className='text-sm text-gray-600'>Current Price:</span>
							<PriceStatusBadge status={product.priceStatus} />
						</div>

						<div className='mb-6'>
							<p className='text-4xl font-bold text-gray-900'>
								{product.currentPrice.toLocaleString()}
								<span className='text-xl font-normal text-gray-600 ml-2'>{product.currency}</span>
							</p>
						</div>

						<PriceStatistics
							lowestPrice={product.lowestPrice}
							highestPrice={product.highestPrice}
							recentDrop={product.recentPriceDrop}
							currency={product.currency}
						/>

						<BuyButton
							seller={product.seller}
							link={product.buyLink}
							price={product.currentPrice}
							currency={product.currency}
						/>
					</div>
				</div>

				{/* Price Chart */}
				<PriceChart data={product.priceHistory} currency={product.currency} />

				{/* Similar Products */}
				{similarProducts.length > 0 && <SimilarProductsSection products={similarProducts} />}
			</div>
		</div>
	);
};

export default ProductDetailPage;
