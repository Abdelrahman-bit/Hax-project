import { mockProductData, mockSimilarProducts } from "@/data/ProductDetailsMockData";

// API Service Layer - Ready for real API integration
const ProductService = {
	// Fetch product details by ID
	async getProductById(productId) {
		// TODO: Replace with actual API call
		// return await fetch(`/api/products/${productId}`).then(res => res.json());
		return new Promise((resolve) => {
			setTimeout(() => resolve(mockProductData), 500);
		});
	},

	// Fetch similar products
	async getSimilarProducts(productId, limit = 4) {
		// TODO: Replace with actual API call
		// return await fetch(`/api/products/${productId}/similar?limit=${limit}`).then(res => res.json());
		return new Promise((resolve) => {
			setTimeout(() => resolve(mockSimilarProducts), 500);
		});
	},
};
export default ProductService;