import ProductFinder from "@/components/Home/ProductFinder";
import ProductSection from "@/components/Home/ProductsSection";
import TopCategories from "@/components/Home/TopCategory";
import NavigationBar from "@/components/NavBar";
import { mockData } from "@/data/mocking";
import React from "react";

const Home = () => {
	return (
		<div className='min-h-screen bg-white'>
			<ProductFinder />
			<ProductSection title='Daily Deals! Best prices' products={mockData.dailyDeals} />
			<TopCategories />
			<ProductSection title='Laptops' products={mockData.laptops} showSeeMore={true} />
			<ProductSection title='Mobile Phones' products={mockData.mobilePhones} showSeeMore={true} />
			<ProductSection title='Perfumes' products={mockData.perfumes} showSeeMore={true} />
		</div>
	);
};

export default Home;
